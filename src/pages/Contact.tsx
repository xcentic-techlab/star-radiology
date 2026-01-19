import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-0 mt-0">
      <Header />

      <main className="pt-20 pb-0">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <p className="text-sm uppercase tracking-wider text-blue-700 font-medium mb-3">
              Contact Star Radiology
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
              We're Here To Help You With <br />
              <span className="text-blue-900 font-bold">
                Your Diagnostic Needs
              </span>
            </h1>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Have questions about our services, appointments, reports or
              diagnostics? Our support team is always ready to assist you with
              quick and reliable guidance.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
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
                  info: "info@starradiology.com",
                  sub: "We reply within 24 working hours",
                },
                {
                  icon: MapPin,
                  title: "Visit Our Center",
                  info: "KO-01, SECTOR-122,Noida Gautam Buddha Nagar Uttar Pradesh-201301",
                  sub: "Noida, Uttar Pradesh",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  info: "Mon – Sat: 9:00 AM – 5:00 PM",
                  sub: "Sunday closed",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 rounded-2xl 
                             border border-slate-200/70 bg-white 
                             p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 
                                  flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-blue-700" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      {item.title}
                    </p>
                    <p className="font-semibold text-slate-900">
                      {item.info}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
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
              className="rounded-3xl border border-slate-200/70 
                         bg-white p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Fill out the form and our team will get back to you shortly.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Input
                  placeholder="Full Name"
                  className="h-12"
                />
                <Input
                  placeholder="Phone Number"
                  className="h-12"
                />
              </div>

              <Input
                placeholder="Email Address"
                className="h-12 mb-4"
              />

              <Textarea
                placeholder="How can we help you?"
                className="min-h-[140px] mb-6"
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
  );
};

export default Contact;
