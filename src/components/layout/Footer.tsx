import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="bg-gradient-primary py-12">
        <div className="container mx-auto text-center">
          <h3 className="font-display text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Health?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Book an appointment today and experience world-class diagnostic services with cutting-edge technology and expert care.
          </p>
          <Link to="/book-appointment">
            <Button variant="hero-outline" size="xl">
              Book Your Appointment
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-display font-bold text-xl">L</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-xl text-white">Lifeline</span>
                  <span className="text-xs text-white/60 -mt-1">Diagnostics</span>
                </div>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Your trusted partner in healthcare diagnostics. We combine advanced technology with compassionate care to deliver accurate and timely results.
              </p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "Our Services", "Our Centers", "Book Appointment", "Careers", "Contact Us"].map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {["Pathology", "Radiology", "MRI Scan", "CT Scan", "X-Ray", "Ultrasound"].map((service) => (
                  <li key={service}>
                    <Link
                      to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <ArrowRight className="h-4 w-4" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-white/70">123 Healthcare Avenue, Medical District, City - 400001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+1800123456" className="text-white/70 hover:text-primary transition-colors">
                    1800-123-456
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:info@lifelinediagnostics.com" className="text-white/70 hover:text-primary transition-colors">
                    info@lifelinediagnostics.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-white/70">Mon - Sat: 7:00 AM - 9:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>© {currentYear} Lifeline Diagnostics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
