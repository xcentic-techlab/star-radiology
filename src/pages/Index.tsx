import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
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
  );
};

export default Index;
