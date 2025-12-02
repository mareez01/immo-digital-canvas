import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">IMMO</h3>
            <p className="font-body text-sm text-primary-foreground/80 leading-relaxed">
              Premium digital solutions for modern businesses. From concept to deployment.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link
                to="/services"
                className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                to="/work"
                className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Work
              </Link>
              <Link
                to="/contact"
                className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@immo.agency"
                className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
              >
                <Mail size={16} />
                hello@immo.agency
              </a>
              <a
                href="tel:+1234567890"
                className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-2"
              >
                <Phone size={16} />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="font-body text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} IMMO Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
