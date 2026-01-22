import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import starradiology_logo from "@/assets/starradiology_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
  { Icon: Facebook, url: "https://www.facebook.com/starradiology" },
  { Icon: Instagram, url: "https://www.instagram.com/starradiologyservices/" },
  { Icon: Linkedin, url: "https://www.linkedin.com/company/starradiology/" },
  { Icon: Youtube, url: "https://www.youtube.com/@starradiology5872" },
];



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

<div className="flex gap-3">
  {socialLinks.map(({ Icon, url }, index) => (
    <a
      key={index}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
    >
      <Icon className="h-5 w-5 text-white" />
    </a>
  ))}
</div>

              </div>
            </div>
            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Quick Links</h4>
 <ul className="space-y-3">
  {["About Us", "Book Appointment", "Contact Us"].map((link) => (
    <li key={link}>
      {link === "Book Appointment" ? (
        <a
          href="https://wa.me/919711119014?text=Hello%20Star%20Radiology,%20I%20want%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"
        >
          {link}
        </a>
      ) : (
        <Link
          to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"
        >
          {link}
        </Link>
      )}
    </li>
  ))}
</ul>

            </div>
            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Our Services</h4>
<div className="grid grid-cols-2 gap-x-8 gap-y-3">
  {[
    "Pathology",
    "Radiology",
    "CT-Scan",
    "X-Ray",
    "Ultrasound",
    "Echo",
    "TMT",
    "ECG",
    "PFT",
  ].map((service) => (
    <Link
      key={service}
      to={`/services/${service.toLowerCase()}`}
      className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"
    >
      {service}
    </Link>
  ))}
</div>
</div>

            <div>
              <h4 className="font-display font-semibold text-lg text-white mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-12 w-12 text-primary mt-1" />
                  <span className="text-white/70">KO-01, SECTOR-122,Noida Gautam Buddha Nagar,Uttar Pradesh-201301,</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+1800123456" className="text-white/70 hover:text-primary transition-colors">
                    +91-9711119014,+91-9711119015
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a href="mailto:info@starradiology.com" className="text-white/70 hover:text-primary transition-colors">
                     info@starradiology.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-white/70">All Days || 24/7</span>
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
    <Link to="/" className="hover:text-primary transition-colors">
      Privacy Policy
    </Link>
    <Link to="/" className="hover:text-primary transition-colors">
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
