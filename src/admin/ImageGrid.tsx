import { Trash2, Image as ImageIcon } from "lucide-react";

interface Props {
  images: any[];
  onDelete: (id: string) => void;
}

export default function ImageGrid({ images, onDelete }: Props) {
  if (!images.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-400">
        <ImageIcon size={48} />
        <p className="mt-3 text-sm">
          No images uploaded for this page
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img) => (
        <div
          key={img._id}
          className="rounded-2xl overflow-hidden
                     border border-white/20
                     bg-white/10 backdrop-blur-xl
                     shadow-lg hover:shadow-2xl
                     transition-all duration-300"
        >
          {/* Image */}
          <div className="relative h-44 overflow-hidden">
            <img
              src={img.url}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              alt={img.key}
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-4 py-3 text-sm">

            {/* Key */}
            <span className="font-medium text-black truncate">
              {img.key}
            </span>

            {/* Right Actions */}
            <div className="flex items-center gap-3">

              {/* Status Badge */}
              <span
                className="text-xs px-3 py-1 rounded-full
                           bg-emerald-500/20 text-emerald-300"
              >
                Active
              </span>

              {/* Delete Button (Always visible) */}
              <button
                onClick={() => onDelete(img._id)}
                className="p-2 rounded-full 
                           bg-red-500/15 text-red-500 
                           hover:bg-red-500/30 transition"
                title="Delete image"
              >
                <Trash2 size={16} />
              </button>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
