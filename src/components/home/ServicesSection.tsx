import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import pathologyImg from "@/assets/pathology.jpg";
import mriImg from "@/assets/mri.jpg";
import ctscanImg from "@/assets/ctscan.jpg";
import radiologyImg from "@/assets/radiology.png";
import xrayImg from "@/assets/xray.png";
import ultrasoundImg from "@/assets/ultrasound.png";
import echoImg from "@/assets/echoImg.webp"
import tmtImg from "@/assets/tmtImg.webp"
import ecgImg from "@/assets/ecgImg.jpg"
import pftImg from "@/assets/pftImg.jpg"

const PAGE_MAP: Record<string, string> = {
  Pathology: "Pathology",
  // "MRI Scan": "MRI",
  "CT Scan": "CTScan",
  Radiology: "Radiology",
  "X-Ray": "X-Ray",
  Ultrasound: "Ultrasound",
};

const FALLBACK_IMAGES: Record<string, string> = {
  pathology: pathologyImg,
  ctscan: ctscanImg,
  radiology: radiologyImg,
  xray: xrayImg,
  ultrasound: ultrasoundImg,
  echocardiogram: echoImg,
  tmt: tmtImg,
  ecg: ecgImg,
  pft: pftImg,
};


const services = [
  {
    title: "Pathology",
    description:
      "Comprehensive blood investigations with NABL-grade automation and precision diagnostics.",
    link: "/services/pathology",
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
    title: "Digital X-Ray",
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
  {
    title: "Echocardiogram Test",
    description:
      "Advanced Echocardiogram for detailed heart structure and functional assessment.",
    link: "/services/echo",
  },
  {
    title: "Treadmill Test",
    description:
      "Treadmill stress testing to evaluate cardiac performance under physical activity.",
    link: "/services/tmt",
  },
  {
    title: "Electrocardiogram",
    description:
      "Accurate electrocardiogram testing for heart rhythm and electrical activity analysis.",
    link: "/services/ecg",
  },
  {
    title: "Pulmonary Function Test",
    description:
      "Pulmonary function testing to assess lung capacity, airflow and respiratory health.",
    link: "/services/pft",
  },
];

const COL_X = [-360, 0, 360];     
const ROW_Y = [-480, 0, 480];   

const gridPositions = services.map((_, index) => {
  const col = index % 3;
  const row = Math.floor(index / 3);

  return {
    x: COL_X[col],
    y: ROW_Y[row] ?? (row * 300), 
  };
});

const stackRotate = services.map((_, i) =>
  (i - services.length / 2) * 1.5
);


const ServiceCard = ({ service, index, active, image }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-[55%]"
      style={{ translateX: "-50%", translateY: "-50%", zIndex: active ? 1 : 100 - index, }}
      initial={false}
 animate={
  active
    ? {
        x: gridPositions[index]?.x || 0,
        y: gridPositions[index]?.y || 0,
        rotate: 0,
        scale: 1,
      }
    : {
        x: 0,
        y: 0,
        rotate: stackRotate[index] || 0,
        scale: 0.94,
      }
}

      transition={{ type: "spring", stiffness: 70, damping: 14 }}
    >
      <div className="w-[300px] h-[320px] xl:w-[320px] xl:h-[400px]
                rounded-3xl overflow-hidden
                bg-white/40 backdrop-blur-xl
                border border-white/30
                shadow-xl flex flex-col">

        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={image}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-900 to-blue-700"
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
    // "MRI",
    "CT Scan",
    "X-Ray",
    "Echocardiogram Test",
    "Treadmill Test",
    "Electrocardiogram",
    "Pulmonary Function Test",
    "All X-Ray Procedures"
  ];

  return (
    <div className="relative overflow-hidden py-10 mt-60">
      <div className="absolute inset-0 mx-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl" />

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
              className="flex items-center gap-3 text-2xl md:text-3xl font-semibold text-blue-900/90 whitespace-nowrap"
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

  const [serviceImages, setServiceImages] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const res = await fetch(`/api/images/page/services`);
        const data = await res.json();

        const map: Record<string, string> = {};
        data.forEach((img: any) => {
          map[img.key] = img.url;
        });
        setServiceImages(map);
      } catch (err) {
        console.error("Failed to load service images", err);
      }
    };

    loadImages();
  }, []);


const SECTION_MAP: Record<string, string> = {
  Pathology: "pathology",
  "CT Scan": "ctscan",
  Radiology: "radiology",
  "Digital X-Ray": "xray",
  Ultrasound: "ultrasound",
  "Echocardiogram Test": "echocardiogram",
  "Treadmill Test": "tmt",
  "Electrocardiogram": "ecg",
  "Pulmonary Function Test": "pft",
};


  return (
    <section ref={ref} className="relative overflow-hidden py-20">
      <div className="text-center mb-10 sm:mb-14 relative z-10 px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
          Our <span className="text-blue-900">Services</span>
        </h2>
       <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">

          Premium diagnostic services powered by modern technology and expert clinicians.
        </p>
      </div>

      <div className="block md:hidden px-4 space-y-8">
        {services.map((service) => {
          const sectionKey = SECTION_MAP[service.title.trim()];
          const image =
            serviceImages[sectionKey] || FALLBACK_IMAGES[sectionKey];

          return (
            <div
              key={service.title}
              className="rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={image}
                  alt={service.title}
                  className="w-full h-full object-cover"
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-blue-900 to-blue-700"
                >
                  Explore
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="hidden md:block relative mt-40 h-[980px] xl:h-[1100px]">
        {services.map((service, index) => {
          const sectionKey = SECTION_MAP[service.title.trim()];
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

      <div className="h-20 sm:h-24" />
      <GlassStrip />
    </section>
  );
};

export default ServicesSection;
