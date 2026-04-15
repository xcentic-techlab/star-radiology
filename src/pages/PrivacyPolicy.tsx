import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Database,
  Eye,
  Lock,
  Share2,
  Cookie,
  Link2,
  UserCheck,
  RefreshCw,
  Phone,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const sections = [
  {
    icon: Database,
    title: "1. Information We Collect",
    content: `We collect personal information that you voluntarily provide when booking appointments or contacting us. This may include your name, phone number, email address, age, gender, and health-related information necessary for diagnostic purposes.`,
  },
  {
    icon: Eye,
    title: "2. How We Use Your Information",
    content: `Your information is used solely to provide diagnostic and radiology services, send appointment confirmations, share diagnostic reports, and improve our services. We do not sell or rent your personal data to third parties.`,
  },
  {
    icon: Lock,
    title: "3. Data Security",
    content: `We implement industry-standard security measures to protect your personal and medical data. All reports and records are stored securely and accessible only to authorized medical personnel.`,
  },
  {
    icon: Share2,
    title: "4. Sharing of Information",
    content: `We do not share your personal or medical information with any third party except when required by law, or with your explicit consent, or when necessary to provide the diagnostic service you requested.`,
  },
  {
    icon: Cookie,
    title: "5. Cookies",
    content: `Our website may use cookies to enhance your browsing experience. Cookies help us understand site traffic and usage patterns. You may choose to disable cookies through your browser settings.`,
  },
  {
    icon: Link2,
    title: "6. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their respective privacy policies.`,
  },
  {
    icon: UserCheck,
    title: "7. Your Rights",
    content: `You have the right to access, correct, or request deletion of your personal data held by us. To exercise these rights, please contact us at info@starradiology.com or call +91-9711119014.`,
  },
  {
    icon: RefreshCw,
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically.`,
  },
  {
    icon: Phone,
    title: "9. Contact Us",
    content: `If you have any questions or concerns regarding this Privacy Policy, please reach out to us:\n\nStar Radiology & Diagnostics Centre\nKO-01, Sector-122, Noida, Uttar Pradesh – 201301\nPhone: +91-9711119014 | +91-9711119015\nEmail: info@starradiology.com`,
  },
];

const stats = [
  { value: "100%", label: "Data Confidentiality" },
  { value: "256-bit", label: "SSL Encryption" },
  { value: "0", label: "Data Sold to 3rd Party" },
  { value: "24/7", label: "Secure Access" },
];

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Star Radiology & Diagnostics Centre Noida</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Star Radiology & Diagnostics Centre in Noida. Learn how we collect, use, and protect your personal and medical information."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />

        <main className="pt-10 sm:pt-24 md:pt-28 pb-20 sm:pb-24 overflow-hidden">

          {/* ── Hero Section ── */}
          <section className="relative px-3 sm:px-6 pt-2 sm:pt-4 text-center">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[280px] sm:w-[520px] md:w-[720px] h-[280px] sm:h-[520px] md:h-[720px] bg-blue-400/20 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 w-[260px] sm:w-[460px] md:w-[620px] h-[260px] sm:h-[460px] md:h-[620px] bg-cyan-400/20 blur-[120px] rounded-full" />
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 text-blue-700 mb-5 shadow-sm">
                <ShieldCheck className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>

              <h1 className="text-[26px] sm:text-[38px] md:text-[48px] font-bold text-slate-900 leading-tight tracking-tight mb-4">
                Privacy{" "}
                <span className="text-blue-900">Policy</span>
              </h1>

              <p className="text-slate-600 text-[14px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-xl mx-auto">
                At Star Radiology & Diagnostics Centre, your privacy is our priority. This policy explains how we handle your personal and medical information with complete transparency.
              </p>

              <p className="mt-4 inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium border border-blue-100">
                Effective Date: January 1, 2024
              </p>
            </motion.div>
          </section>

          {/* ── Stats Row (same as About page) ── */}
          <section className="mt-16 sm:mt-24 px-3 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group relative rounded-2xl bg-white border border-slate-200/70 p-4 sm:p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-400/60"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3 sm:mb-4">
                    <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-900">
                    {item.value}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Policy Sections ── */}
          <section className="mt-16 sm:mt-24 md:mt-32 px-3 sm:px-6">
            <div className="max-w-7xl mx-auto">

              {/* Section heading same style as About */}
              <div className="text-center mb-8 sm:mb-14">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-blue-900 tracking-tight">
                  Our Privacy Commitments
                </h2>
                <div className="mx-auto mt-2 h-[3px] w-12 sm:w-20 rounded-full bg-gradient-to-r from-blue-700 to-blue-400" />
                <p className="mt-3 sm:mt-4 text-slate-600 max-w-xl mx-auto leading-relaxed text-xs sm:text-base">
                  Everything you need to know about how we collect, store, and protect your data.
                </p>
              </div>

              {/* Grid layout — same 2-col pattern as Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {sections.map((section, i) => (
                  <motion.div
                    key={section.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className={`group relative rounded-2xl bg-white border border-slate-200/80 p-5 sm:p-7 shadow-sm transition-all duration-300 hover:border-blue-400/70 hover:bg-blue-50/30 hover:shadow-[0_10px_30px_rgba(59,130,246,0.18)]
                      ${section.title.includes("9.") ? "sm:col-span-2" : ""}
                    `}
                  >
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                        <section.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <h2 className="font-semibold text-slate-900 text-sm sm:text-base">
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-[12px] sm:text-[14px] leading-relaxed text-slate-600 whitespace-pre-line">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default PrivacyPolicy;