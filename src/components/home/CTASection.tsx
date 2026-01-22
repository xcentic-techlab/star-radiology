import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-16 shadow-2xl">
          
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                Need a Health Checkup?
                <span className="block text-white/90 mt-2">
                  Book Your Appointment Today
                </span>
              </h2>

              <p className="text-white/80 max-w-xl mb-10 leading-relaxed">
                Our experienced healthcare professionals provide accurate diagnostics,
                fast reporting, and complete patient care. Your health is our priority.
              </p>

              <div className="flex flex-wrap gap-4">
<a
  href="https://wa.me/919711119014?text=Hello%20Star%20Radiology,%20I%20want%20to%20book%20an%20appointment."
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="xl"
    className="group bg-white text-primary hover:bg-white/90 shadow-lg"
  >
    <Calendar className="h-5 w-5 mr-2" />
    Book Appointment
    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
  </Button>
</a>


                <a href="tel:+91-9711119014">
                  <Button
                    size="xl"
                    className="border-white bo text-white hover:bg-white/10"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {[
                {
                  icon: Phone,
                  title: "24/7 Helpline",
                  info: "+91-9711119014, +91-9711119015",
                  subtext: "Toll free support",
                },
                {
                  icon: Calendar,
                  title: "Working Hours",
                  info: "All Days",
                  subtext: "24/7 Service",
                },
                {
                  icon: MapPin,
                  title: "Our Locations",
                  info: "KO-01, SECTOR-122,Noida Gautam Buddha Nagar,Uttar Pradesh-201301",
                  subtext: "Across major cities",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-md p-5 border border-white/10 hover:bg-white/15"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>

                  <div>
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <p className="text-white font-semibold text-lg leading-tight">
                      {item.info}
                    </p>
                    <p className="text-white/50 text-sm">{item.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
