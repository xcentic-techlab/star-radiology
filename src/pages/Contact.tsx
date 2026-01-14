import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium mb-4">Contact Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch<span className="text-gradient block">With Our Team</span></h1>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {[
                { icon: Phone, title: "Phone", info: "1800-123-456" },
                { icon: Mail, title: "Email", info: "info@lifelinediagnostics.com" },
                { icon: MapPin, title: "Address", info: "123 Healthcare Ave, Medical District" },
                { icon: Clock, title: "Hours", info: "Mon-Sat: 7AM-9PM" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4 bg-card p-5 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center"><item.icon className="h-6 w-6 text-white" /></div>
                  <div><p className="text-muted-foreground text-sm">{item.title}</p><p className="font-semibold text-foreground">{item.info}</p></div>
                </div>
              ))}
            </motion.div>
            <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card p-8 rounded-2xl shadow-lg space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="h-12" />
                <Input placeholder="Phone Number" className="h-12" />
              </div>
              <Input placeholder="Email Address" className="h-12" />
              <Textarea placeholder="Your Message" className="min-h-32" />
              <Button variant="hero" size="lg" className="w-full">Send Message</Button>
            </motion.form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
