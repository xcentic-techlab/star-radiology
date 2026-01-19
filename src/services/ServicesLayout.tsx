import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CircularBenefits from "./CircularBenefits";

/* ----------------------------------
 Interfaces
-----------------------------------*/

interface Equipment {
  name: string;
  description: string;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
}



interface ServiceLayoutProps {
  title: string;
  subtitle?: string;
  description: string;
  heroImage: string;
  backendImages?: Record<string, string>;
  whyWeOffer?: string[];
  equipment?: Equipment[];
  galleryImages?: string[];

  // ✅ NEW
  needOfService?: string[];
  faqs?: FAQ[];

  cta?: {
    title: string;
    subtitle: string;
  };

  benefits: {
  title: string;
  desc: string;
}[];



}

/* ----------------------------------
 Component
-----------------------------------*/


const ServicesLayout = ({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  whyWeOffer,
  equipment,
  galleryImages,
  needOfService,   // ✅ added
  faqs,            // ✅ added
  cta,
  backendImages,
}: ServiceLayoutProps) => {
  return (
    <div className="space-y-24">

      {/* ---------------- Hero Section ---------------- */}
      <section className="bg-muted/30 py-24">
        <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-3">
              {title}
            </h1>

            {subtitle && (
              <p className="text-primary font-medium mb-4">
                {subtitle}
              </p>
            )}

            <p className="text-muted-foreground text-lg leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl bg-muted"
          >
            <img
              src={backendImages?.HeroImage || heroImage}
              alt={title}
              className="w-full h-[420px] object-cover"
            />
          </motion.div>

        </div>
      </section>

{/* ---------------- Interactive Key Benefits ---------------- */}
<section className="relative min-h-screen bg-white overflow-hidden flex items-center">

  {/* Soft background glow */}
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                  w-[700px] h-[700px] 
                  bg-blue-400/10 blur-[160px] rounded-full" />

  <div className="container mx-auto relative z-10">

    {/* Heading */}
    <div className="text-center mb-14 mt-0">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
  Key Benefits of{" "}
  <span className="text-blue-900 font-bold">
    {title}
  </span>
</h2>
<p className="text-slate-600 mt-2 max-w-xl mx-auto">
  Discover why patients trust our {title.toLowerCase()} for accurate diagnostics and comfort.
</p>

    </div>

    {/* Interactive Component */}
    <CircularBenefits benefits={benefits} />

  </div>
</section>




{/* ---------------- Equipment ---------------- */}
{equipment && (
  <section>

    {/* Ambient Glow */}
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                    w-[800px] h-[800px] 
                    bg-blue-400/10 blur-[180px] rounded-full" />

    <div className="container mx-auto relative z-10">

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Advanced{" "}
          <span className="text-blue-900 font-bold">
            Diagnostic Equipment
          </span>
        </h2>
        <p className="text-slate-600 mt-2 max-w-xl mx-auto">
          World-class machines engineered for accuracy, safety and patient comfort.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {equipment.map((machine, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="group relative rounded-3xl overflow-hidden 
                       bg-white/70 backdrop-blur-xl
                       border border-slate-200
                       shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
          >
            {/* Image */}
            <div className="relative h-60 overflow-hidden">
        <img
  src={backendImages?.[`Machine${index + 1}`] || machine.image}
  alt={machine.name}
  className="h-full w-full object-cover 
             transition-transform duration-700 
             group-hover:scale-110"
/>

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t 
                              from-black/40 via-black/10 to-transparent 
                              opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Content */}
            <div className="p-6 relative">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {machine.name}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {machine.description}
              </p>
            </div>

            {/* Hover Glow Border */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl 
                            opacity-0 group-hover:opacity-100 
                            transition duration-700
                            ring-2 ring-blue-400/40" />
          </motion.div>
        ))}

      </div>
    </div>
  </section>
)}

{/* ---------------- Premium FAQs ---------------- */}
{faqs && (
  <section className="relative py-10 bg-gradient-to-b from-slate-50 to-white overflow-hidden">

    {/* Ambient Glow */}
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                    w-[900px] h-[900px] 
                    bg-blue-400/10 blur-[200px] rounded-full" />

    <div className="container mx-auto max-w-5xl relative z-10">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
          Frequently Asked{" "}
          <span className="text-blue-900 font-bold">
            Questions
          </span>
        </h2>
        <p className="text-slate-600 mt-3 max-w-xl mx-auto">
          Clear answers to help you feel confident before booking your diagnostic test.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">

        {faqs.map((faq, index) => (
          <motion.details
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="group relative rounded-3xl 
                       bg-white/80 backdrop-blur-xl
                       border border-slate-200/70 
                       shadow-[0_15px_40px_rgba(15,23,42,0.08)]
                       overflow-hidden"
          >
            {/* Glow Border */}
            <div className="absolute inset-0 opacity-0 
                            group-open:opacity-100 
                            transition duration-700
                            ring-2 ring-blue-500/30 rounded-3xl" />

            <summary
              className="cursor-pointer list-none 
                         px-7 py-6 flex items-center justify-between 
                         text-base font-medium text-slate-900"
            >
              <span className="pr-6 leading-snug">
                {faq.question}
              </span>

              {/* Plus Icon */}
              <span
                className="flex h-9 w-9 items-center justify-center 
                           rounded-full bg-blue-50 text-blue-700
                           group-open:rotate-45 transition-transform duration-300"
              >
                +
              </span>
            </summary>

            {/* Answer */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="px-7 pb-6 text-sm leading-relaxed text-slate-600"
            >
              {faq.answer}
            </motion.div>
          </motion.details>
        ))}

      </div>
    </div>
  </section>
)}




    </div>
  );
};

export default ServicesLayout;
