import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Need a Health Checkup?
                <span className="block mt-2">Book Your Appointment Today!</span>
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Our team of experienced healthcare professionals is ready to assist you 
                with comprehensive diagnostic services. Schedule your appointment now 
                and take the first step towards better health.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/book-appointment">
                  <Button variant="hero-outline" size="xl">
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </Button>
                </Link>
                <a href="tel:+1800123456">
                  <Button variant="hero-outline" size="xl">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: Phone,
                  title: "24/7 Helpline",
                  info: "1800-123-456",
                  subtext: "Free toll-free number",
                },
                {
                  icon: Calendar,
                  title: "Working Hours",
                  info: "Mon - Sat: 7AM - 9PM",
                  subtext: "Sunday: 8AM - 2PM",
                },
                {
                  icon: MapPin,
                  title: "Our Locations",
                  info: "100+ Centers",
                  subtext: "Across major cities",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5"
                >
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <p className="text-white font-semibold text-lg">{item.info}</p>
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
