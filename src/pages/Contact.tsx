import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";


const Contact = () => {
  return (
    <>
          <Helmet>
        <title>Contact Star Radiology & Diagnostics Centre in Noida</title>

        <meta
          name="description"
          content="Contact Star Radiology & Diagnostics Centre in Noida for MRI, CT Scan, X-Ray, Ultrasound & pathology services. Call or visit a diagnostic centre near me."
        />

        <meta
          name="keywords"
          content="contact diagnostic centre in noida, diagnostic centre near me in noida, star radiology diagnostics contact, radiology centre contact noida, pathology lab contact in noida, mri ct scan x ray ultrasound noida, best diagnostic centre in noida contact, diagnostic clinic near me"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://starradiodiagnostic.com/contact-us" />
        <meta
          property="og:title"
          content="Contact Star Radiology & Diagnostics Centre in Noida"
        />
        <meta
          property="og:description"
          content="Contact Star Radiology & Diagnostics Centre in Noida for MRI, CT Scan, X-Ray, Ultrasound & pathology services. Call or visit a diagnostic centre near me."
        />
        <meta property="og:site_name" content="Star Radiology & Diagnostics Centre" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://starradiodiagnostic.com/assets/hero-diagnostic-Zo8Vstyf.jpg"
        />
        <meta
          property="og:image:alt"
          content="Contact Star Radiology & Diagnostics Centre Noida"
        />
      </Helmet>
          <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-0 mt-0">
      <Header />

      <main className="pt-16 sm:pt-20 pb-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-20"
          >
            <p className="text-xs sm:text-sm uppercase tracking-wider text-blue-700 font-medium mb-2 sm:mb-3">
              Contact Star Radiology
            </p>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
              Contact Star Radiology & Diagnostics Centre in Noida
            </h1>

            <p className="mt-3 sm:mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
             Contact Star Radiology & Diagnostics Centre in Noida for CT Scan, X-Ray, Ultrasound & pathology services. Call or visit a diagnostic centre near me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  info: "+91-9711119014,+91-9711119015",
                  sub: "Speak directly with our support team",
                },
                {
                  icon: Mail,
                  title: "Email",
                  info: "info@starradiodiagnostic.com",
                  sub: "We reply within 24 working hours",
                },
                {
                  icon: MapPin,
                  title: "Visit Our Center",
                  info:
                    "KO-01, SECTOR-122,Noida Gautam Buddha Nagar Uttar Pradesh-201301",
                  sub: "Noida, Uttar Pradesh",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  info: "All Days",
                  sub: "24/7 Service",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 sm:gap-5 rounded-2xl border border-slate-200/70 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {item.title}
                    </p>
                    <p className="font-semibold text-sm sm:text-base text-slate-900 break-words">
                      {item.info}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl sm:rounded-3xl border border-slate-200/70 bg-white p-5 sm:p-8 shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">
                Fill out the form and our team will get back to you shortly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <Input placeholder="Full Name" className="h-11 sm:h-12" />
                <Input placeholder="Phone Number" className="h-11 sm:h-12" />
              </div>

              <Input
                placeholder="Email Address"
                className="h-11 sm:h-12 mb-3 sm:mb-4"
              />

              <Textarea
                placeholder="How can we help you?"
                className="min-h-[120px] sm:min-h-[140px] mb-4 sm:mb-6"
              />

              <Button
                size="lg"
                className="w-full bg-blue-700 hover:bg-blue-800"
              >
                Submit Enquiry
              </Button>
            </motion.form>
          </div>
        </div>
      </main>
    </div>
    </>

  );
};

export default Contact;
