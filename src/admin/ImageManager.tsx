import { useEffect, useState } from "react";
import ImageGrid from "./ImageGrid";
import { fetchImages, deleteImage } from "./api";

const CONFIG = {
  landingpage: {
    pages: ["home"],
    sections: [
      "banner",
      "services",
    ],
  },

  services: {
    pages: [
      "Pathology",
      "MRI",
      "CTScan",
      "XRay",
      "Radiology",
      "Ultrasound",
    ],
    sections: ["hero", "machine1", "machine2", "machine3"],
  },
};

export default function ImageManager() {
  const [type, setType] = useState<"landingpage" | "services">(
  () => (localStorage.getItem("img:type") as any) || "landingpage"
);

const [page, setPage] = useState(
  () => localStorage.getItem("img:page") || CONFIG.landingpage.pages[0]
);

const [section, setSection] = useState(
  () => localStorage.getItem("img:section") || CONFIG.landingpage.sections[0]
);

useEffect(() => {
  localStorage.setItem("img:type", type);
  localStorage.setItem("img:page", page);
  localStorage.setItem("img:section", section);
}, [type, page, section]);


useEffect(() => {
  const cfg = CONFIG[type];

  if (!cfg.pages.includes(page)) {
    setPage(cfg.pages[0]);
  }

  if (!cfg.sections.includes(section)) {
    setSection(cfg.sections[0]);
  }
}, [type]);


  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);


  const [toast, setToast] = useState<{
  show: boolean;
  type: "success" | "error";
  message: string;
}>({
  show: false,
  type: "success",
  message: "",
});

const showToast = (type: "success" | "error", message: string) => {
  setToast({ show: true, type, message });
  setTimeout(() => {
    setToast({ show: false, type, message: "" });
  }, 2500);
};



const handleDelete = async (id: string) => {
  try {
    await deleteImage(id);
    showToast("success", "Image deleted successfully");
    loadImages(); 
  } catch {
    showToast("error", "Failed to delete image");
  }
};

  useEffect(() => {
    const cfg = CONFIG[type];
    setPage(cfg.pages[0]);
    setSection(cfg.sections[0]);
  }, [type]);

  const loadImages = async () => {
    try {
      setLoading(true);
      const data = await fetchImages(type, page, section);
      setImages(data);
    } catch {
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, [type, page, section]);

  return (
    <div className="min-h-screen bg-white px-6 py-10">

        {toast.show && (
  <div
    className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 text-sm
      ${
        toast.type === "success"
          ? "bg-emerald-600 text-white"
          : "bg-red-600 text-white"
      }`}
  >
    {toast.message}
  </div>
)}

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Image Management Panel</h1>
        <p className="text-sm text-slate-600">
          Select page and manage images
        </p>
      </div>

      <div className="flex flex-wrap justify-end gap-6 mb-8">

        <div>
          <label className="text-xs font-semibold">Page Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as any)}
            className="block w-52 border-2 border-blue-900 rounded-xl px-4 py-2"
          >
            <option value="landingpage">Landing Page</option>
            <option value="services">Services</option>
          </select>
        </div>

<div>
  <label className="text-xs font-semibold">
    {type === "services" ? "Service" : "Page"}
  </label>

  <select
    value={page}
    disabled={type === "landingpage"}   
    onChange={(e) => setPage(e.target.value)}
    className={`block w-52 rounded-xl px-4 py-2 border-2 
      ${
        type === "landingpage"
          ? "bg-slate-100 text-slate-400 cursor-not-allowed border-slate-300"
          : "border-blue-900"
      }
    `}
  >
    {CONFIG[type].pages.map((p) => (
      <option key={p} value={p}>
        {p}
      </option>
    ))}
  </select>

  {type === "landingpage" && (
    <p className="text-[10px] text-slate-400 mt-1">
      Landing page is fixed to <b>home</b>
    </p>
  )}
</div>

        <div>
          <label className="text-xs font-semibold">Section</label>

          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="block w-52 border-2 border-blue-900 rounded-xl px-4 py-2"
          >
            {CONFIG[type].sections.map((s) => (
              <option key={s} value={s}>
                {s.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

      </div>

      {loading && (
        <p className="text-center text-sm text-slate-500 mb-4">
          Loading images...
        </p>
      )}

      <ImageGrid images={images} onDelete={handleDelete} />
    </div>
  );
}
