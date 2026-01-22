import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Best Diagnostic Centre and Pathology Lab in Noida | Star Radiology</title>

        <meta
          name="description"
          content="Looking for a diagnostic centre and pathology lab near me in Noida? Star Radiology offers MRI, CT Scan, X-Ray, Ultrasound & lab tests with accurate reports."
        />

        <meta
          name="keywords"
          content="diagnostic centre in noida, diagnostic centre near me, diagnostic centre and pathology lab in noida, diagnostic centre near me in noida, pathology lab near me in noida, star radiology diagnostics noida"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starradiodiagnostic.com/" />
        <meta property="og:title" content="Best Diagnostic Centre and Pathology Lab in Noida | Star Radiology" />
        <meta
          property="og:description"
          content="Looking for a diagnostic centre and pathology lab near me in Noida? Star Radiology offers MRI, CT Scan, X-Ray, Ultrasound & lab tests with accurate reports."
        />
        <meta property="og:site_name" content="Star Radiology & Diagnostics Centre" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://starradiodiagnostic.com/assets/hero-diagnostic-Zo8Vstyf.jpg" />
        <meta property="og:image:alt" content="Star Radiology & Diagnostics Centre in Noida" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main className="overflow-x-hidden">
          <section className="snap-start min-h-screen">
            <HeroSection />
          </section>

          <section>
            <ServicesSection />
          </section>

          <WhyChooseUs />
          <TestimonialsSection />
          <CTASection />
        </main>
      </div>
    </>
  );
};

export default Index;
