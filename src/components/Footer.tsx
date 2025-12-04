import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/team" },
      { name: "Services", path: "/services" },
      { name: "Work", path: "/work" },
    ],
    services: [
      { name: "Web Development", path: "/services" },
      { name: "Design & Branding", path: "/services" },
      { name: "Automation", path: "/services" },
      { name: "Maintenance", path: "/services" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "https://github.com/immoco", label: "GitHub" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-luxury/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="font-display text-3xl font-bold mb-4 inline-block">
              IMMO
            </Link>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed mb-6">
              From concept to code — your multi-domain solution architects. Building digital experiences that matter.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-lg font-semibold mb-6">Company</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-lg font-semibold mb-6">Services</h4>
            <div className="flex flex-col gap-3">
              {footerLinks.services.map((link, index) => (
                <Link
                  key={`${link.name}-${index}`}
                  to={link.path}
                  className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@agency.immohub.in"
                className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-3 group"
              >
                <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail size={14} />
                </span>
                hello@agency.immohub.in
              </a>
              <a
                href="tel:+917094989578"
                className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-3 group"
              >
                <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone size={14} />
                </span>
                +91 7094989578
              </a>
              <a
                href="tel:+916374026570"
                className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors flex items-center gap-3 group"
              >
                <span className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone size={14} />
                </span>
                +91 6374026570
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-sm text-primary-foreground/50">
            © {currentYear} IMMO Hub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/contact"
              className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="font-body text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
