import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
