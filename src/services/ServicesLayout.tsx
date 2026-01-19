import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import CircularBenefits from "./CircularBenefits";

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

const ServicesLayout = ({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  whyWeOffer,
  equipment,
  galleryImages,
  needOfService,
  faqs,
  cta,
  backendImages,
}: ServiceLayoutProps) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center px-4 sm:px-6">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3">
              {title}
            </h1>

            {subtitle && (
              <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                {subtitle}
              </p>
            )}

            <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">
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
              className="w-full h-[240px] sm:h-[320px] lg:h-[420px] object-cover"
            />
          </motion.div>

        </div>
      </section>

      <section className="relative min-h-[70vh] sm:min-h-screen bg-white overflow-hidden flex items-center">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[360px] sm:w-[700px] h-[360px] sm:h-[700px] bg-blue-400/10 blur-[140px] sm:blur-[160px] rounded-full" />

        <div className="container mx-auto relative z-10 px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
              Key Benefits of{" "}
              <span className="text-blue-900 font-bold">
                {title}
              </span>
            </h2>
            <p className="text-slate-600 mt-2 max-w-xl mx-auto text-sm sm:text-base">
              Discover why patients trust our {title.toLowerCase()} for accurate diagnostics and comfort.
            </p>
          </div>

          <CircularBenefits benefits={benefits} />
        </div>
      </section>

      {equipment && (
        <section className="relative px-4 sm:px-6">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[420px] sm:w-[800px] h-[420px] sm:h-[800px] bg-blue-400/10 blur-[150px] sm:blur-[180px] rounded-full" />

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
                Advanced{" "}
                <span className="text-blue-900 font-bold">
                  Diagnostic Equipment
                </span>
              </h2>
              <p className="text-slate-600 mt-2 max-w-xl mx-auto text-sm sm:text-base">
                World-class machines engineered for accuracy, safety and patient comfort.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {equipment.map((machine, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
                    <img
                      src={backendImages?.[`Machine${index + 1}`] || machine.image}
                      alt={machine.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-4 sm:p-6 relative">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">
                      {machine.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {machine.description}
                    </p>
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 ring-2 ring-blue-400/40" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {faqs && (
        <section className="relative py-10 sm:py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden px-4 sm:px-6">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[460px] sm:w-[900px] h-[460px] sm:h-[900px] bg-blue-400/10 blur-[160px] sm:blur-[200px] rounded-full" />

          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
                Frequently Asked{" "}
                <span className="text-blue-900 font-bold">
                  Questions
                </span>
              </h2>
              <p className="text-slate-600 mt-3 max-w-xl mx-auto text-sm sm:text-base">
                Clear answers to help you feel confident before booking your diagnostic test.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group relative rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/70 shadow-[0_15px_40px_rgba(15,23,42,0.08)] overflow-hidden"
                >
                  <summary className="cursor-pointer list-none px-4 sm:px-7 py-4 sm:py-6 flex items-center justify-between text-sm sm:text-base font-medium text-slate-900">
                    <span className="pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="px-4 sm:px-7 pb-4 sm:pb-6 text-xs sm:text-sm leading-relaxed text-slate-600"
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
