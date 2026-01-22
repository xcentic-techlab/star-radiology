import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import starradiology_logo from "@/assets/starradiology_logo.png"; 
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  {
    name: "Services",
    path: "/services",
    children: [
      { name: "Pathology", path: "/services/pathology" },
      { name: "Radiology", path: "/services/radiology" },
      // { name: "MRI", path: "/services/mri" },
      { name: "CT Scan", path: "/services/ct-scan" },
      { name: "Digital X-Ray", path: "/services/x-ray" },
      { name: "Ultrasound", path: "/services/ultrasound" },
      { name: "Echocardiogram Test", path: "/services/echo" },
      { name: "Treadmill Test", path: "/services/tmt" },
      { name: "Electrocardiogram", path: "/services/ecg" },
      { name: "Pulmonary Function Test", path: "/services/pft" },
    ],
  },
  { name: "Contact", path: "/contact-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
<div className="flex flex-wrap items-center gap-6">
  <a
    href="tel:+919711119014"
    className="flex items-center gap-2 text-white transition"
  >
    <Phone className="h-4 w-4" />
    <span>+91-9711119014</span>
  </a>
  <a
    href="tel:+919711119015"
    className="flex items-center gap-2 text-white transition"
  >
    <Phone className="h-4 w-4" />
    <span>+91-9711119015</span>
  </a>
  <a
    href="https://wa.me/919711119014?text=Hello%20Star%20Radiology,%20I%20want%20to%20book%20an%20appointment."
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-green-500 hover:text-green-600 transition text-sm"
  >
    <FaWhatsapp className="h-4 w-4" />
    <span className="text-white">WhatsApp</span>
  </a>

</div>



            <a href="mailto:info@starradiology.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span>info@starradiology.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>All Days | 24/7</span>
          </div>
        </div>
      </div>

      <nav className="bg-card/95 backdrop-blur-md shadow-md">
<div className="container mx-auto flex justify-between items-center py-2">
  <Link to="/" className="flex flex-col items-center gap-1">
    <img 
      src={starradiology_logo} 
      alt="Star Radiology Logo" 
      className="h-14 w-auto object-contain"
    />

    <p className="text-xs text-gray-500 tracking-wide">
      Assurance of Quality
    </p>
  </Link>




          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-primary bg-accent"
                        : "text-foreground hover:text-primary hover:bg-accent"
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-primary bg-accent"
                        : "text-foreground hover:text-primary hover:bg-accent"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-card rounded-xl shadow-xl border border-border overflow-hidden z-50"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

<a
  href="https://wa.me/919711119014?text=Hello%20Star%20Radiology,%20I%20want%20to%20book%20an%20appointment."
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:inline-flex"
>
  <Button className="bg-primary/95 hover:bg-primary text-white px-6 py-3 rounded-md shadow-md">
    Book Appointment
  </Button>
</a>


          <button
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="container mx-auto py-4 flex flex-col gap-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
                          onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        >
                          {item.name}
                          <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  to={child.path}
                                  className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive(item.path)
                            ? "text-primary bg-accent"
                            : "text-foreground hover:bg-accent"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
<a
  href="https://wa.me/919711119014?text=Hello%20Star%20Radiology,%20I%20want%20to%20book%20an%20appointment."
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="mt-4 w-full bg-primary text-white py-3 rounded-md shadow-md">
    Book Appointment
  </Button>
</a>


              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
