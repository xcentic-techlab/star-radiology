import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";

const BookAppointment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-accent text-primary rounded-full text-sm font-medium mb-4">Book Appointment</span>
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">Schedule Your<span className="text-gradient block">Diagnostic Test</span></h1>
          </motion.div>
          <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card p-8 rounded-2xl shadow-xl space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Full Name" className="h-12" />
              <Input placeholder="Phone Number" className="h-12" />
            </div>
            <Input placeholder="Email Address" className="h-12" />
            <Select>
              <SelectTrigger className="h-12"><SelectValue placeholder="Select Service" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="pathology">Pathology</SelectItem>
                <SelectItem value="mri">MRI Scan</SelectItem>
                <SelectItem value="ct-scan">CT Scan</SelectItem>
                <SelectItem value="x-ray">X-Ray</SelectItem>
                <SelectItem value="ultrasound">Ultrasound</SelectItem>
              </SelectContent>
            </Select>
            <div className="grid md:grid-cols-2 gap-4">
              <Input type="date" className="h-12" />
              <Select>
                <SelectTrigger className="h-12"><SelectValue placeholder="Time Slot" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="9am">9:00 AM</SelectItem>
                  <SelectItem value="11am">11:00 AM</SelectItem>
                  <SelectItem value="2pm">2:00 PM</SelectItem>
                  <SelectItem value="4pm">4:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="hero" size="xl" className="w-full"><Calendar className="h-5 w-5" />Book Appointment</Button>
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookAppointment;
