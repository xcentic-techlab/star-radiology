import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PathologyPage from "./services/pathology/PathologyPage";
import MRIPage from "./services/mri/MRIPage";
import CTScanPage from "./services/ct-scan/CTScanPage";
import RadiologyPage from "./services/radiology/RadiologyPage";
import UltrasoundPage from "./services/ultrasound/UltrasoundPage";
import XRayPage from "./services/x-ray/XRayPage";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
// import Gallery from "./pages/Gallery";
import ImageUploader from "./admin/ImageUploader";
import ImageManager from "./admin/ImageManager";
import ProtectedRoute from "@/components/ProtectedRoute";
import Login from "./pages/login";  
import PublicLayout from "@/layouts/PublicLayout";
import AdminLayout from "@/layouts/AdminLayout";




const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>

          {/* 🔓 Login (NO Header / Footer) */}
          <Route path="/admin-login" element={<Login />} />

          {/* 🌍 Public Layout (with Header + Footer) */}
          <Route element={<PublicLayout />}>

            <Route path="/" element={<Index />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}

            {/* Services */}
            <Route path="/services/pathology" element={<PathologyPage />} />
            <Route path="/services/mri" element={<MRIPage />} />
            <Route path="/services/ct-scan" element={<CTScanPage />} />
            <Route path="/services/radiology" element={<RadiologyPage />} />
            <Route path="/services/ultrasound" element={<UltrasoundPage />} />
            <Route path="/services/x-ray" element={<XRayPage />} />


          </Route>

          <Route
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/admin-image-uploader" element={<ImageUploader />} />
            <Route path="/admin-image-manager" element={<ImageManager />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
