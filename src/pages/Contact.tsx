import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const text = `Hello Star Radiology 👋
I want to book an appointment.`;

    const whatsappURL = `https://wa.me/919711119014?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Contact Star Radiology & Diagnostics Centre in Noida</title>

        <meta
          name="description"
          content="Contact Star Radiology & Diagnostics Centre in Noida for MRI, CT Scan, X-Ray, Ultrasound & pathology services."
        />

        <meta
          name="keywords"
          content="contact diagnostic centre in noida, star radiology contact, radiology centre noida, pathology lab noida"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://starradiodiagnostic.com/contact-us"
        />
        <meta
          property="og:title"
          content="Contact Star Radiology & Diagnostics Centre in Noida"
        />
        <meta
          property="og:description"
          content="Book appointments easily via WhatsApp at Star Radiology & Diagnostics Centre in Noida."
        />
        <meta
          property="og:image"
          content="https://starradiodiagnostic.com/assets/hero-diagnostic-Zo8Vstyf.jpg"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />

        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <p className="text-sm uppercase tracking-wider text-blue-700 font-medium mb-2">
                Contact Star Radiology
              </p>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
                Contact Star Radiology & Diagnostics Centre
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Easily book your appointment through WhatsApp or reach us
                directly using the details below.
              </p>
            </motion.div>
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    info: "+91-9711119014, +91-9711119015",
                    sub: "Speak directly with our support team",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "info@starradiology.com",
                    sub: "We reply within 24 working hours",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Our Center",
                    info:
                      "KO-01, Sector-122, Noida, Gautam Buddha Nagar, UP - 201301",
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
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-blue-700" />
                    </div>

                    <div>
                      <p className="text-sm text-slate-500">{item.title}</p>
                      <p className="font-semibold text-base text-slate-900">
                        {item.info}
                      </p>
                      <p className="text-sm text-slate-500 mt-1">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="flex justify-center"
>
  <Button
    size="lg"
    onClick={handleWhatsAppClick}
    className="
      flex items-center gap-4
      bg-gradient-to-r from-green-500 to-green-600
      hover:from-green-600 hover:to-green-700
      text-white text-lg font-semibold
      px-12 py-7
      rounded-2xl
      shadow-lg hover:shadow-xl
      transition-all duration-300
      active:scale-95
    "
  >
    <FaWhatsapp style={{ width: 25, height: 25 }} />

    Book Appointment
  </Button>
</motion.div>

            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Contact;
