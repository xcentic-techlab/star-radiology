

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import pathologyImg from "@/assets/pathology.jpg";
import mriImg from "@/assets/mri.jpg";
import ctscanImg from "@/assets/ctscan.jpg";
import radiologyImg from "@/assets/radiology.png";
import xrayImg from "@/assets/xray.png";
import ultrasoundImg from "@/assets/ultrasound.png";

const API = import.meta.env.VITE_API_URL;

const PAGE_MAP: Record<string, string> = {
  "Pathology": "Pathology",
  "MRI Scan": "MRI",
  "CT Scan": "CTScan",
  "Radiology": "Radiology",
  "X-Ray": "X-Ray",
  "Ultrasound": "Ultrasound",
};

const FALLBACK_IMAGES: Record<string, string> = {
  pathology: pathologyImg,
  mri: mriImg,
  ctscan: ctscanImg,
  radiology: radiologyImg,
  xray: xrayImg,
  ultrasound: ultrasoundImg,
};



const services = [
  {
    title: "Pathology",
    description:
      "Comprehensive blood investigations with NABL-grade automation and precision diagnostics.",
    link: "/services/pathology",
  },
  {
    title: "MRI Scan",
    description:
      "High-field MRI delivering crystal clear imaging for brain, spine and joints.",
    link: "/services/mri",
  },
  {
    title: "CT Scan",
    description:
      "Ultra-fast multi-slice CT with minimal radiation exposure for accurate diagnosis.",
    link: "/services/ct-scan",
  },
  {
    title: "Radiology",
    description:
      "Complete digital radiology including X-ray, fluoroscopy and contrast studies.",
    link: "/services/radiology",
  },
  {
    title: "X-Ray",
    description:
      "High-resolution digital X-ray ensuring fast and low-dose imaging.",
    link: "/services/x-ray",
  },
  {
    title: "Ultrasound",
    description:
      "Radiation-free ultrasound imaging with Doppler precision.",
    link: "/services/ultrasound",
  },
];

const stackRotate = [-20, -12, -5, 6, 12, 20];
const gridX = [-360, 0, 360, -360, 0, 360];
const gridY = [-220, -220, -220, 260, 260, 260];

const serviceNames = services.map((s) => s.title);
const loopNames = [...serviceNames, ...serviceNames];

const ServiceCard = ({ service, index, active, image }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ translateX: "-50%", translateY: "-50%" }}
      initial={false}
      animate={
        active
          ? { x: gridX[index], y: gridY[index], rotate: 0, scale: 1 }
          : { x: 0, y: 0, rotate: stackRotate[index], scale: 0.94 }
      }
      transition={{ type: "spring", stiffness: 90, damping: 14 }}
    >
      <div className="w-[270px] xl:w-[290px] rounded-3xl overflow-hidden
                      bg-white/30 backdrop-blur-xl border border-white/30
                      shadow-2xl">

        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={
              image
            }
            alt={service.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {service.title}
          </h3>

          <p className="text-gray-700 text-sm mb-4">
            {service.description}
          </p>

          <button
            onClick={() => (window.location.href = service.link)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
                       text-xs font-semibold text-white 
                       bg-gradient-to-r from-blue-900 to-blue-700"
          >
            Explore
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const GlassStrip = () => {
  const items = [
    "Radiology",
    "Ultrasound",
    "Pathology",
    "MRI",
    "CT Scan",
    "X-Ray",
  ];

  return (
    <div className="relative overflow-hidden py-10 mt-20">
      <div
        className="absolute inset-0 mx-6 rounded-3xl
                   bg-white/20 backdrop-blur-xl
                   border border-white/30 shadow-xl"
      />

      <div className="relative overflow-hidden">
        <motion.div
          className="flex w-max gap-20 px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3
                         text-2xl md:text-3xl font-semibold
                         text-blue-900/90 whitespace-nowrap"
            >
              <span className="opacity-50">✦</span>
              {item}
              <span className="opacity-50">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};



const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-120px" });

const pages = ["pathology", "radiology", "mri", "ctscan", "x-ray", "ultrasound"];

  const [serviceImages, setServiceImages] = useState<Record<string, string>>({});

  useEffect(() => {
  const loadImages = async () => {
    try {
      const res = await fetch(
        `${API}/api/images/page/services`
      );

      const data = await res.json();

      const map: Record<string, string> = {};
      data.forEach((img: any) => {
        map[img.key.toLowerCase()] = img.url;
      });
      setServiceImages(map);
    } catch (err) {
      console.error("Failed to load service images", err);
    }
  };

  loadImages();
}, []);

  
  return (
    <section ref={ref} className="relative overflow-hidden py-32">
      <div className="text-center mb-32 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Our <span className="text-blue-900">Services</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Premium diagnostic services powered by modern technology and expert clinicians.
        </p>
      </div>
      <div className="relative h-[720px] xl:h-[760px]">
        {services.map((service, index) => {
          const pageKey = PAGE_MAP[service.title];


const SECTION_MAP: Record<string, string> = {
  "Pathology": "pathology",
  "MRI Scan": "mri",
  "CT Scan": "ctscan",
  "Radiology": "radiology",
  "X-Ray": "xray",
  "Ultrasound": "ultrasound",
};

const sectionKey = SECTION_MAP[service.title];
const image =
  serviceImages[sectionKey] || FALLBACK_IMAGES[sectionKey];
          return (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              active={isInView}
              image={image}
            />
          );
        })}
      </div>
<div className="h-24" />
<GlassStrip />


    </section>
  );
};

export default ServicesSection;
