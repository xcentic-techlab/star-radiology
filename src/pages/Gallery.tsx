// import { useState } from "react";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import { motion } from "framer-motion";
// import { X } from "lucide-react";

// // Example Images (replace with your real assets)
// import img1 from "@/assets/gallery/gallery1.jpg";
// import img2 from "@/assets/gallery/gallery2.jpg";
// import img3 from "@/assets/gallery/gallery3.jpg";
// import img4 from "@/assets/gallery/gallery4.jpg";
// import img5 from "@/assets/gallery/gallery5.jpg";
// import img6 from "@/assets/gallery/gallery6.jpg";

// const galleryImages = [
//   { src: img1},
//   { src: img2},
//   { src: img3},
//   { src: img4},
//   { src: img5},
//   { src: img6},
// ];

// const Gallery = () => {
//   const [activeImage, setActiveImage] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
//       <Header />

//       {/* ---------------- HERO ---------------- */}
// <section className="relative pt-20 pb-24 overflow-hidden">

//   {/* Background Glow */}
//   <div className="absolute -top-40 left-1/2 -translate-x-1/2 
//                   w-[700px] h-[700px] 
//                   bg-blue-400/10 blur-[160px] rounded-full" />

//   <div className="relative z-10 text-center px-6">

//     {/* Title */}
// <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
//   <span className="text-slate-900">Experience Our</span>{" "}
//   <span className="text-blue-900">Diagnostic Excellence</span>
// </motion.h1>


//     {/* Subtitle */}
//     <motion.p
//       initial={{ opacity: 0, y: 15 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.2 }}
//       className="mt-6 max-w-2xl mx-auto 
//                  text-base md:text-lg 
//                  text-slate-600 leading-relaxed"
//     >
//       Take a closer look at our advanced imaging systems, modern laboratory
//       setup and patient-friendly environment designed for comfort, accuracy
//       and safety.
//     </motion.p>

//   </div>
// </section>

// {/* ---------------- GRID ---------------- */}
// <section className="container mx-auto px-6 pb-24">
//   <motion.div
//     className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={{
//       hidden: {},
//       visible: {
//         transition: {
//           staggerChildren: 0.12,
//         },
//       },
//     }}
//   >
//     {galleryImages.map((img, index) => (
//       <motion.div
//         key={index}
//         variants={{
//           hidden: { opacity: 0, y: 40, scale: 0.95 },
//           visible: { opacity: 1, y: 0, scale: 1 },
//         }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         whileHover={{ scale: 1.06, y: -6 }}
//         className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group bg-white"
//         onClick={() => setActiveImage(img.src)}
//       >
//         {/* Image */}
//         <img
//           src={img.src}
//           alt="Gallery"
//           loading="lazy"
//           className="w-full h-[260px] object-cover 
//                      transition-transform duration-700 
//                      group-hover:scale-110"
//         />

//         {/* Hover Overlay */}
//         <div
//           className="absolute inset-0 
//                      bg-gradient-to-t from-black/40 via-black/10 to-transparent 
//                      opacity-0 group-hover:opacity-100 
//                      transition duration-500"
//         />

//         {/* Subtle Glow Border */}
//         <div
//           className="absolute inset-0 rounded-2xl 
//                      ring-1 ring-white/10 
//                      group-hover:ring-blue-400/40 
//                      transition"
//         />
//       </motion.div>
//     ))}
//   </motion.div>
// </section>

//       {/* ---------------- LIGHTBOX ---------------- */}
//       {activeImage && (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     exit={{ opacity: 0 }}
//     className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
//   >
//     <button
//       onClick={() => setActiveImage(null)}
//       className="absolute top-6 right-6 text-white hover:scale-110 transition"
//     >
//       <X className="h-8 w-8" />
//     </button>

//     <motion.img
//       initial={{ scale: 0.8, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       exit={{ scale: 0.8, opacity: 0 }}
//       transition={{ duration: 0.4, ease: "easeOut" }}
//       src={activeImage}
//       className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain"
//     />
//   </motion.div>
// )}

//     </div>
//   );
// };

// export default Gallery;
