import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { LogOut, Upload, Image, Menu } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import starradiology_logo from "@/assets/starradiology_logo.png";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-200">

      {/* ✅ NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 
                  bg-white/90 backdrop-blur-xl 
                  border-b border-slate-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          {/* Logo */}
          <div
            onClick={() => navigate("/admin-image-manager")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={starradiology_logo}
              className="h-12 w-auto object-contain"
              alt="Star Radiology"
            />
            <div className="hidden sm:block">
              <p className="font-semibold text-slate-800 leading-tight">
                Star Radiology
              </p>
              <p className="text-xs text-slate-500">
                Admin Panel
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">

            <NavButton
              active={isActive("/admin-image-manager")}
              onClick={() => navigate("/admin-image-manager")}
              icon={<Image size={18} />}
              label="Images Manager"
            />

            <NavButton
              active={isActive("/admin-image-uploader")}
              onClick={() => navigate("/admin-image-uploader")}
              icon={<Upload size={18} />}
              label="Images Upload"
            />

            <div className="h-6 w-px bg-slate-300 mx-2" />

            <button
              onClick={logout}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                         text-red-600 hover:bg-red-50 transition"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            <Menu size={22} />
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-xl px-4 py-4 space-y-2">

            <MobileNavButton
              onClick={() => {
                navigate("/admin-image-manager");
                setOpen(false);
              }}
              icon={<Image size={18} />}
              label="Manage Images"
            />

            <MobileNavButton
              onClick={() => {
                navigate("/admin-image-uploader");
                setOpen(false);
              }}
              icon={<Upload size={18} />}
              label="Upload Image"
            />

            <button
              onClick={logout}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                         text-red-600 hover:bg-red-50 transition"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>
        )}
      </header>

      {/* ✅ PAGE CONTENT */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 pt-24 pb-6">

        <Outlet />
      </main>

      {/* ✅ FOOTER */}
      <Footer />
    </div>
  );
}

/* ---------------- Components ---------------- */

function NavButton({
  icon,
  label,
  onClick,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition
        ${
          active
            ? "bg-blue-900 text-white shadow"
            : "text-slate-700 hover:bg-slate-100"
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
}

function MobileNavButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                 text-slate-700 hover:bg-slate-100 transition"
    >
      {icon}
      {label}
    </button>
  );
}
