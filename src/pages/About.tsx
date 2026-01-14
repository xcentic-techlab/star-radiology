import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium mb-4">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Your Trusted Healthcare<span className="text-gradient block">Diagnostic Partner</span></h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">With over 25 years of excellence, Lifeline Diagnostics has been at the forefront of healthcare innovation, providing accurate and timely diagnostic services to millions of patients.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "NABL Accredited", desc: "Certified for highest quality standards" },
              { icon: Users, title: "50K+ Patients", desc: "Trusted by thousands of families" },
              { icon: Target, title: "99.9% Accuracy", desc: "Precision in every diagnosis" },
              { icon: Heart, title: "Patient First", desc: "Compassionate care always" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-card p-6 rounded-2xl shadow-lg text-center">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4"><item.icon className="h-7 w-7 text-white" /></div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
