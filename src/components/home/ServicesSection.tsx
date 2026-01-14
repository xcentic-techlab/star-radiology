import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Scan, Activity, Radio, Bone, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";
import pathologyImage from "@/assets/pathology-service.jpg";
import mriImage from "@/assets/mri-service.jpg";
import ctScanImage from "@/assets/ct-scan-service.jpg";

const services = [
  {
    icon: Microscope,
    title: "Pathology",
    description: "Comprehensive blood tests, biochemistry, and specialized diagnostic testing with accurate results.",
    image: pathologyImage,
    link: "/services/pathology",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Scan,
    title: "MRI Scan",
    description: "Advanced magnetic resonance imaging for detailed internal body structure visualization.",
    image: mriImage,
    link: "/services/mri",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Activity,
    title: "CT Scan",
    description: "High-resolution computed tomography for precise diagnosis of various conditions.",
    image: ctScanImage,
    link: "/services/ct-scan",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Radio,
    title: "Radiology",
    description: "Complete radiology services including digital X-rays and advanced imaging techniques.",
    image: pathologyImage,
    link: "/services/radiology",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Bone,
    title: "X-Ray",
    description: "Quick and accurate X-ray imaging for bone and chest examinations.",
    image: ctScanImage,
    link: "/services/x-ray",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Baby,
    title: "Ultrasound",
    description: "Non-invasive ultrasound imaging for various diagnostic purposes including pregnancy scans.",
    image: mriImage,
    link: "/services/ultrasound",
    color: "from-teal-500 to-cyan-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Diagnostic
            <span className="text-gradient block">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of diagnostic services using state-of-the-art technology 
            and performed by experienced healthcare professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={service.link}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`} />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="outline" size="lg">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
