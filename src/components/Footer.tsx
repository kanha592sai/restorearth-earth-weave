import { Link } from "react-router-dom";
import { Mail, Linkedin, MapPin } from "lucide-react";
import logo from "@/assets/restorearth-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Solutions", path: "/solutions" },
    { name: "Projects", path: "/projects" },
    { name: "Partners", path: "/partners" },
  ];

  const services = [
    "Carbon & Climate Solutions",
    "ESG Advisory",
    "CSR & Social Impact",
    "Circular Economy",
    "Nature-Based Solutions",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <img src={logo} alt="Restorearth Solutions" className="h-16 w-16" />
            <h3 className="text-xl font-bold">RESTOREARTH</h3>
            <p className="text-sm text-primary-foreground/80">
              A Partner in Planetary and Social Regeneration
            </p>
            <p className="text-xs italic text-primary-foreground/70">
              "Samastha Lokah Sukhino Bhavantu"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-primary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:write2us@restorearth.co.in"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail size={16} />
                write2us@restorearth.co.in
              </a>
              <a
                href="https://www.linkedin.com/company/restorearth-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Linkedin size={16} />
                Restorearth Solutions
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin size={16} />
                Operating across 9 states in India
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Restorearth Solutions. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/70">
              We Resolve to Restore Earth
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
