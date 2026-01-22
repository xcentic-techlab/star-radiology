import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import fallbackHero from "@/assets/hero-diagnostic.jpg";
import { useEffect, useState } from "react";

// const API = import.meta.env.VITE_API_URL;

const stats = [
  {  value: 50, suffix: "K+", label: "Happy Patients" },
  {  value: 100, suffix: "+", label: "Expert Doctors" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
];

const Counter = ({ end, duration = 1500, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};


const HeroSection = () => {

  const [heroImage, setHeroImage] = useState<string | null>(null);
  

useEffect(() => {
  const loadHeroImage = async () => {
    try {
      const res = await fetch(`/api/images/page/banner`);


      const data = await res.json();

 const hero = data[0];   

 if (hero?.url) {
  setHeroImage(hero.url);
}


      if (hero?.url) {
        setHeroImage(hero.url);
      }
    } catch (err) {
      console.error("Failed to load hero image", err);
    }
  };

  loadHeroImage();
}, []);


useEffect(() => {
}, [heroImage]);


  return (
<section className="relative min-h-[calc(100vh-96px)] flex items-center overflow-hidden pt-24 pb-8">
      <div className="absolute inset-0">
        <img
  src={
    heroImage || fallbackHero
  }
  alt="Hero Banner"
  className="w-full h-full object-cover transition-opacity duration-500"
/>

        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="container mx-auto relative z-10 px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
<h1
  className="font-display 
  text-2xl 
  sm:text-3xl 
  md:text-5xl 
  lg:text-5xl 
  font-bold 
  tracking-tight 
  text-white 
  leading-tight 
  mb-6"
>
  <span className="block whitespace-normal sm:whitespace-nowrap">
    Best Diagnostic Centre &amp;
  </span>

  <span className="block pt-1">
    Pathology Lab in Noida
  </span>

  <span
    className="block text-primary
    [text-shadow:1px_0_0_white,-1px_0_0_white,0_1px_0_white,0_-1px_0_white] pt-1"
  >
    Star Radiology
  </span>
</h1>

            <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
             Looking for a diagnostic centre and pathology lab near me in Noida? Star Radiology offers MRI, CT Scan, X-Ray, Ultrasound & lab tests with accurate reports.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
<a
  href="https://wa.me/919711119014?text=Hello%20Star%20Radiology,%20I%20want%20to%20book%20an%20appointment."
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg rounded-md shadow-lg flex items-center gap-2">
    Book Appointment
    <ArrowRight className="h-5 w-5" />
  </Button>
</a>


              <Link to="/services/pathology">
                <Button variant="hero-outline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">
  <Counter end={stat.value} suffix={stat.suffix} />
</div>

                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >

            <div className="relative">
              <div className="w-72 h-72 bg-primary/20 rounded-full blur-3xl absolute inset-0 m-auto pointer-events-none" />
<div className="w-52 h-52 bg-teal/20 rounded-full blur-3xl absolute bottom-10 right-10 pointer-events-none" />

            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >

      </motion.div>
    </section>
  );
};

export default HeroSection;
