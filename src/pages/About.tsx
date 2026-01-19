import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Heart,
  Globe,
  Clock,
  ShieldCheck,
  MapPin,
} from "lucide-react";

import aboutImg from "@/assets/about.jpg";
import doctorImg from "@/assets/about1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      <main className="pt-10 pb-28 overflow-hidden">
<section className="relative px-6 pt-1">
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-140px] left-1/2 -translate-x-1/2 
                    w-[720px] h-[720px] 
                    bg-blue-400/20 blur-[160px] rounded-full" />
    <div className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 
                    w-[620px] h-[620px] 
                    bg-cyan-400/20 blur-[160px] rounded-full" />
  </div>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    <div className="max-w-xl font-sans">

<motion.h1
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  className="text-[42px] md:text-[56px] font-semibold leading-tight tracking-tight 
             text-slate-900 mb-5 text-center"
>
  <span className="whitespace-nowrap">
    Corporate-Grade Healthcare{" "}
  </span>

  <span className="text-blue-900 whitespace-nowrap">
    For Everyone
  </span>
</motion.h1>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-slate-700 text-[18px] leading-relaxed mb-6 mt-4"
      >
        <h3 className="pt-5 relative inline-block text-blue-900 text-[25px] font-semibold text-base mb-2 tracking-wide">
  About Star Radiology
</h3>
        <p>
        Star Radiology was envisioned to bring corporate-style healthcare closer
        to local communities. Our focus is on delivering accessible, efficient
        and cost-effective medical services while maintaining the highest
        standards of quality and patient care.
        </p>
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-slate-700 text-[18px] leading-relaxed mb-6"
      >
<h3 className="pt-5 relative inline-block text-blue-900 text-[25px] font-semibold text-base mb-2 tracking-wide">
  World-Class Equipment
</h3>

        <p>
          We continuously invest in advanced diagnostic imaging technologies.
          Our high-definition laboratories and digital imaging systems enable
          precise visualization across all major medical disciplines.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-slate-700 text-[18px] leading-relaxed mb-0"
      >
        <h3 className="pt-5 relative inline-block text-blue-900 text-[25px] font-semibold text-base mb-2 tracking-wide">
          Outstanding Support & Care
        </h3>
        <p>
          Appointments are available within 24 hours, with reports delivered
          in as little as 6 hours. Our experienced radiologists, consultants
          and medical staff ensure a smooth, personalized diagnostic journey.
        </p>
      </motion.div>

    </div>
<motion.div
  initial={{ opacity: 0, y: 40, scale: 0.94 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative flex justify-center"
>
  <img
    src={doctorImg}
    alt="Expert Doctors"
    className="w-full max-w-[460px] h-[360px] object-cover 
               rounded-3xl shadow-2xl -translate-y-6 mt-14"
  />
  <div
    className="absolute inset-0 rounded-3xl 
               ring-1 ring-white/30 
               pointer-events-none"
  />
</motion.div>


  </div>
</section>
        <section className="mt-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Clock, label: "24×7 Availability", value: "365 Days" },
              { icon: ShieldCheck, label: "Report Accuracy", value: "99.98%" },
              { icon: Users, label: "Satisfied Patients", value: "100%" },
            { icon: Globe, label: "Noida, India", value: "Operational Presence" },

            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
className="
  group
  relative
  rounded-2xl bg-white
  border border-slate-200/70
  p-6 text-center
  shadow-sm
  transition-all duration-300
  hover:shadow-lg
  hover:border-blue-400/60
"
>
                <div className="
  w-12 h-12 mx-auto rounded-lg 
  bg-blue-50 text-blue-700
  flex items-center justify-center mb-4
">
  <item.icon className="h-6 w-6" />
</div>
<div className="
  pointer-events-none
  absolute inset-0 rounded-2xl
  opacity-0 group-hover:opacity-100
  transition duration-300
  shadow-[0_0_25px_rgba(59,130,246,0.45)]
" />

                <h3 className="text-2xl font-bold text-blue-900">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-32 px-6">
          <div className="max-w-7xl mx-auto relative">
            <div className="absolute inset-0 flex justify-center items-center -z-10">
              <div className="w-[700px] h-[300px] bg-blue-500/20 blur-[140px] rounded-full" />
            </div>
<div className="text-center mb-10">
  <h2 className="text-3xl md:text-4xl font-bold text-blue-900 tracking-tight">
    Our Digital Workflow
  </h2>
  <div className="mx-auto mt-2 h-[3px] w-20 rounded-full 
                  bg-gradient-to-r from-blue-700 to-blue-400" />

  <p className="mt-4 text-slate-600 max-w-xl mx-auto leading-relaxed text-center">
    How imaging data flows seamlessly from acquisition to final diagnostic reporting.
  </p>
</div>


            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto rounded-3xl overflow-hidden
                         bg-white/40 backdrop-blur-xl border border-white/30
                         shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
            >
              <img
                src={aboutImg}
                alt="Star Radiology Workflow"
                className="w-full max-w-[1100px] mx-auto h-auto object-contain p-6"
              />
            </motion.div>

 <div className="flex justify-center mt-8">
  <div className="
    px-6 py-2 rounded-full
    bg-white/60 backdrop-blur-md
    border border-slate-200/70
    shadow-sm
    text-sm font-medium text-slate-700
    tracking-wide
  ">
    End-to-end digital workflow from imaging acquisition to reporting
  </div>
</div>

          </div>
        </section>
<section className="mt-32 px-6  text-center">
  <div className="max-w-7xl mx-auto">
<div className="mb-14 relative">
  <div className="inline-flex flex-col items-center">

    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 tracking-tight">
      Our Core Values
    </h2>
    <div className="mt-2 h-[3px] w-16 rounded-full bg-gradient-to-r from-blue-700 to-blue-400" />

  </div>

<p className="mt-4 text-slate-600 leading-relaxed text-center mx-auto max-w-xl">
  The principles that guide our commitment to quality healthcare and
  patient trust.
</p>

</div>
    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          icon: Award,
          title: "Clinical Excellence",
          desc: "Highest standards in diagnostics and patient safety.",
        },
        {
          icon: Target,
          title: "Precision & Accuracy",
          desc: "Reliable reports powered by advanced imaging systems.",
        },
        {
          icon: Heart,
          title: "Patient-Centered Care",
          desc: "Every patient is treated with empathy and respect.",
        },
        {
          icon: MapPin,
          title: "Accessible Healthcare",
          desc: "Bringing corporate-grade healthcare closer to communities.",
        },
      ].map((item, i) => (
        <motion.div
  key={item.title}
  custom={i}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  whileHover={{ y: -6 }}
  className="
    group relative
    rounded-2xl bg-white
    border border-slate-200/80
    p-6
    shadow-sm
    transition-all duration-300
    text-left
    hover:border-blue-400/70
    hover:bg-blue-50/30
    hover:shadow-[0_10px_30px_rgba(59,130,246,0.18)]
  "
>

<div className="
  pointer-events-none
  absolute inset-0 rounded-2xl
  opacity-0 group-hover:opacity-100
  transition duration-300
  shadow-[0_0_18px_rgba(59,130,246,0.35)]
" />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <item.icon className="h-5 w-5" />
            </div>

            <h3 className="font-semibold text-slate-900">
              {item.title}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>

      </main>
    </div>
  );
};

export default About;
