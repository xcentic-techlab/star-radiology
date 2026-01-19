import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import starradiology_logo from "@/assets/starradiology_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-transparent pt-12">
     <footer className="bg-foreground text-background 
                   max-w-[98%] mx-auto
                   rounded-t-3xl
                   rounded-b-none
                   overflow-hidden">
      <div className="py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="flex items-center gap-2">
  <img 
    src={starradiology_logo} 
    alt="Lifeline Diagnostics Logo" 
    className="h-14 w-auto object-contain"
  />
</Link>
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
            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["About Us", "Book Appointment", "Contact Us"].map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {["Pathology", "Radiology", "MRI", "CT-Scan", "X-Ray", "Ultrasound"].map((service) => (
                  <li key={service}>
                    <Link
                      to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"
                    >
                      
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-white/70">KO-01, SECTOR-122,Noida Gautam Buddha Nagar,Uttar Pradesh-201301,</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+1800123456" className="text-white/70 hover:text-primary transition-colors">
                    +91-9711119014,+91-9711119015
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:info@starradiology.com" className="text-white/70 hover:text-primary transition-colors">
                    info@starradiology.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-white/70">Mon - Sat: 9:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

<div className="max-w-7xl mx-auto px-6 lg:px-12 
                flex flex-col md:flex-row justify-between items-center gap-4 
                text-white/60 text-sm">
  <p>© {currentYear} Lifeline Diagnostics. All rights reserved.</p>
  <div className="flex gap-6">
    <Link to="/privacy-policy" className="hover:text-primary transition-colors">
      Privacy Policy
    </Link>
    <Link to="/terms-of-service" className="hover:text-primary transition-colors">
      Terms of Service
    </Link>
  </div>
  <div className="flex items-center gap-2 text-white/50">
    <span>Powered by</span>
    <a
      href="https://xcentic.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold tracking-widest text-white/70 
                 hover:text-primary transition"
    >
      XCENTIC
    </a>
  </div>

</div>

    </footer>
    </div>
  );
};

export default Footer;
