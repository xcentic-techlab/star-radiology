import { useRef, useState } from "react";
import {
  Upload,
  Check,
  X,
  Loader2,
  Image as ImageIcon,
} from "lucide-react";


const PAGE_TYPES = ["landing", "services"] as const;

const LANDING_SECTIONS = [
  "banner",
  "services",
];

const SERVICE_SECTIONS = [
  "pathology",
  "radiology",
  "mri",
  "ctscan",
  "xray",
  "ultrasound",
];

const IMAGE_KEYS = [
  "HeroImage",
  "Machine1",
  "Machine2",
  "Machine3",
];

const SERVICES = [
  "pathology",
  "radiology",
  "mri",
  "ctscan",
  "xray",
  "ultrasound",
];


type ToastType = "success" | "error";
type PageType = typeof PAGE_TYPES[number] | "";


export default function ImageUploader() {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [serviceName, setServiceName] = useState("");

  const [pageType, setPageType] = useState<PageType>("");
  const [section, setSection] = useState("");
  const [keyName, setKeyName] = useState("");

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [toast, setToast] = useState<{
    show: boolean;
    type: ToastType;
    message: string;
  }>({ show: false, type: "success", message: "" });

  const showToast = (type: ToastType, message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type, message: "" });
    }, 2500);
  };

  const isLanding = pageType === "landing";
  const canSelectFile = Boolean(pageType && section);
const canUpload = isLanding
  ? section === "services"
      ? Boolean(pageType && section && serviceName && file)
      : Boolean(pageType && section && file)
  : Boolean(pageType && section && keyName && file);

  const handleFile = (f: File) => {
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!canSelectFile) return;

    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const cancelUpload = () => {
    setFile(null);
    setPreview(null);
    setProgress(0);
  };

  const uploadImage = async () => {
    if (!canUpload) {
      showToast("error", "Please select all fields");
      return;
    }

    const fd = new FormData();

fd.append("image", file!);
fd.append("page", pageType);

if (isLanding && section === "services") {
  fd.append("section", "services");
  fd.append("key", serviceName);   
}
else if (isLanding) {
  fd.append("section", section);   
  fd.append("key", "HeroImage");
}
else {
  fd.append("section", section);   
  fd.append("key", keyName);       
}
    try {
      setLoading(true);
      setProgress(0);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:5000/api/images/upload");

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 100);
          setProgress(percent);
        }
      };

      xhr.onload = () => {
        setLoading(false);

        if (xhr.status >= 200 && xhr.status < 300) {
          setProgress(100);
          showToast("success", "Image uploaded successfully");

          setTimeout(() => {
            setFile(null);
            setPreview(null);
            setKeyName("");
            setProgress(0);
          }, 700);
          return;
        }

        try {
          const response = JSON.parse(xhr.responseText);
          if (
            typeof response === "string" &&
            response.toLowerCase().includes("file size")
          ) {
            showToast(
              "error",
              "Image size too large. Maximum allowed size is 10MB."
            );
          } else {
            showToast("error", response || "Upload failed");
          }
        } catch {
          showToast("error", "Upload failed");
        }
      };

      xhr.onerror = () => {
        setLoading(false);
        showToast("error", "Network error during upload");
      };

      xhr.send(fd);
    } catch {
      setLoading(false);
      showToast("error", "Upload failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br mb-20">
      {toast.show && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm
          ${
            toast.type === "success"
              ? "bg-emerald-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {toast.type === "success" ? <Check size={16} /> : <X size={16} />}
          {toast.message}
        </div>
      )}

      <div className="w-full max-w-3xl rounded-3xl border bg-white/50 backdrop-blur-2xl shadow-xl p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-xl font-semibold">Image Upload Manager</h1>
          <p className="text-sm text-slate-600">
            Upload images dynamically for landing & services pages
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium">Page Type</label>
            <select
              value={pageType}
              onChange={(e) => {
                setPageType(e.target.value as PageType);
                setSection("");
                setKeyName("");
              }}
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
            >
              <option value="">Select Page</option>
              <option value="landing">Landing Page</option>
              <option value="services">Services</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Section</label>
            <select
              disabled={!pageType}
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm disabled:bg-slate-100"
            >
              <option value="">Select Section</option>

              {pageType === "landing" &&
                LANDING_SECTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s.toUpperCase()}
                  </option>
                ))}

              {pageType === "services" &&
                SERVICE_SECTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s.toUpperCase()}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Image Type</label>
            <select
              disabled={!section || isLanding}
              value={isLanding ? section : keyName}
              onChange={(e) => setKeyName(e.target.value)}
              className="mt-1 w-full rounded-md border px-3 py-2 text-sm disabled:bg-slate-100"
            >
              {isLanding ? (
                <option>{section || "Auto Selected"}</option>
              ) : (
                <>
                  <option value="">Select Type</option>
                  {IMAGE_KEYS.map((k) => (
                    <option key={k}>{k}</option>
                  ))}
                </>
              )}
            </select>
{isLanding && section === "services" && (
  <div>
    <label className="text-sm font-medium">Select Service</label>
    <select
      value={serviceName}
      onChange={(e) => setServiceName(e.target.value)}
      className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
    >
      <option value="">Select Service</option>
      {SERVICES.map((s) => (
        <option key={s} value={s}>
          {s.toUpperCase()}
        </option>
      ))}
    </select>
  </div>
)}


          </div>

        </div>
        <div className="relative rounded-2xl border bg-white/40 p-4 space-y-4 min-h-[320px] flex flex-col justify-between">

          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => canSelectFile && fileRef.current?.click()}
            className={`flex-1 flex items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition
              ${
                canSelectFile
                  ? "cursor-pointer border-slate-300 hover:bg-white/50"
                  : "cursor-not-allowed border-slate-200 bg-slate-100/40"
              }
            `}
          >
            <input
              ref={fileRef}
              hidden
              type="file"
              accept="image/*"
              disabled={!canSelectFile}
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFile(f);
              }}
            />

            {!preview ? (
              <div className="space-y-3 text-slate-500">
                <ImageIcon className="mx-auto" />
                <p className="text-sm font-medium">
                  Drag & drop image or click to browse
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <img
                  src={preview}
                  className="mx-auto h-56 rounded-lg object-cover shadow"
                />
                <p className="text-xs text-slate-500 truncate">
                  {file?.name}
                </p>
              </div>
            )}
          </div>
          {loading && (
            <div className="h-3 rounded-full overflow-hidden bg-white/40 border">
              <div
                className="h-full bg-green-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
          <div className="flex gap-3">
            <button
              onClick={uploadImage}
              disabled={!canUpload || loading}
              className="flex-1 bg-blue-900 text-white py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-40"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Uploading
                </>
              ) : (
                <>
                  <Upload size={16} />
                  Upload
                </>
              )}
            </button>

            <button
              onClick={cancelUpload}
              disabled={!file || loading}
              className="flex-1 border rounded-md py-2 text-slate-600 hover:bg-slate-100 disabled:opacity-40"
            >
              Cancel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
