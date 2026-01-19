import { useState } from "react";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import starradiology_logo from "@/assets/starradiology_logo.png";
import loginImage from "@/assets/hero-diagnostic.png";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API}/auth/admin-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Invalid login");

      const data = await res.json();
      localStorage.setItem("token", data.token);
      window.location.href = "/admin-image-manager";
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      <div className="relative hidden lg:block">
        <img
          src={loginImage}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Login Visual"
        />
        <div className="absolute inset-0 bg-black/50" />
<div className="relative z-10 flex flex-col h-full justify-center items-center p-12 text-white text-center">
  <div className="max-w-lg space-y-4">
    <h1 className="text-4xl font-bold leading-tight">
      Admin Control Panel
    </h1>

    <p className="text-slate-300 text-lg">
      Secure platform to manage website content, medical service
      images and system configurations for Star Radiology.
    </p>
  </div>
  <p className="absolute bottom-8 text-xs text-slate-300">
    © {new Date().getFullYear()} Star Radiology
  </p>
</div>

      </div>
<div className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-6">
 <div className="flex flex-col items-center">
  <div
    className="w-[440px] max-w-full rounded-2xl
               border border-slate-200
               bg-white/80 backdrop-blur-lg
               shadow-[0_10px_40px_rgba(0,0,0,0.12)]
               p-8 space-y-6"
  >
    <div className="flex flex-col items-center gap-3 text-center">
      <img
        src={starradiology_logo}
        className="h-16"
        alt="Star Radiology"
      />

      <h1 className="text-2xl font-bold text-slate-800">
        Admin Login Panel
      </h1>

      <p className="text-sm text-slate-500">
        Sign in to access the admin dashboard
      </p>
    </div>

    {error && (
      <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-2 text-center">
        {error}
      </div>
    )}
    <div className="space-y-1">
      <label className="text-xs font-medium text-slate-600">
        Email
      </label>

      <div className="relative">
        <Mail
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <input
          placeholder="admin@gmail.com"
          className="w-full pl-10 pr-4 py-3 rounded-lg
                     bg-white border border-slate-300 text-slate-800
                     placeholder:text-slate-400
                     outline-none
                     focus:border-blue-600
                     focus:ring-2 focus:ring-blue-500/30
                     transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>
    <div className="space-y-1">
      <label className="text-xs font-medium text-slate-600">
        Password
      </label>

      <div className="relative">
        <Lock
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <input
          placeholder="••••••••"
          type={showPassword ? "text" : "password"}
          className="w-full pl-10 pr-12 py-3 rounded-lg
                     bg-white border border-slate-300 text-slate-800
                     placeholder:text-slate-400
                     outline-none
                     focus:border-blue-600
                     focus:ring-2 focus:ring-blue-500/30
                     transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
    <button
      onClick={login}
      disabled={loading}
      className="w-full h-12 rounded-lg font-semibold text-white
                 bg-gradient-to-r from-blue-600 to-indigo-600
                 hover:from-blue-700 hover:to-indigo-700
                 shadow-md hover:shadow-lg
                 transition
                 flex items-center justify-center gap-2
                 disabled:opacity-50"
    >
      
      {loading ? (
        <>
          <Loader2 className="animate-spin" size={18} />
          Logging in...
        </>
      ) : (
        "Login"
      )}
    </button>
<div className="flex justify-between text-sm mt-2">

  <button
    onClick={() => navigate("#")}
    className="text-blue-600 hover:underline"
  >
    Forgot password?
  </button>

  <a
    href="mailto:support@starradiology.com"
    className="text-slate-500 hover:text-slate-700 hover:underline"
  >
    Need help? Contact support
  </a>
</div>
  </div>
<div className="mt-6 text-center">
  <span className="text-sm text-slate-400">
    Powered by{" "}
    <a
      href="https://xcentic.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold tracking-widest text-slate-600 
                 hover:text-blue-700 transition"
    >
      XCENTIC
    </a>
  </span>
</div>
</div>

  
</div>

    </div>
  );
}
