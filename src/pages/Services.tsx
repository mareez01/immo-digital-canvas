import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Palette,
  Workflow,
  Layout,
  Smartphone,
  Database,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with cutting-edge technologies like React, Next.js, and Tailwind CSS. We create fast, responsive, and scalable solutions.",
      features: [
        "Custom Website Development",
        "Progressive Web Apps",
        "E-commerce Solutions",
        "Performance Optimization",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile & App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences. From concept to App Store deployment.",
      features: [
        "iOS & Android Apps",
        "Cross-platform Solutions",
        "App Maintenance & Updates",
        "UI/UX Design",
      ],
    },
    {
      icon: Palette,
      title: "Design & Branding",
      description:
        "Create a lasting impression with stunning visual identities. We design graphics, posters, and complete brand systems that resonate with your audience.",
      features: [
        "Brand Identity Design",
        "Graphic Design & Posters",
        "UI/UX Design",
        "Marketing Materials",
      ],
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Eliminate repetitive tasks and streamline your business processes. We build custom automation solutions that save time and reduce errors.",
      features: [
        "Process Automation",
        "Integration Solutions",
        "Custom Workflows",
        "API Development",
      ],
    },
    {
      icon: Database,
      title: "Custom Web Applications",
      description:
        "Tailored web applications for your specific business needs. From CRM systems to custom dashboards, we build tools that work for you.",
      features: [
        "Custom Business Apps",
        "Dashboard & Analytics",
        "CRM & ERP Solutions",
        "Database Design",
      ],
    },
    {
      icon: Shield,
      title: "Maintenance & Hosting",
      description:
        "Complete end-to-end service from development to hosting. We ensure your digital assets are secure, updated, and performing optimally.",
      features: [
        "Website Hosting",
        "Regular Updates",
        "Security Monitoring",
        "Technical Support",
      ],
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Node.js",
    "Python",
    "PostgreSQL",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Comprehensive digital solutions designed to elevate your business. From development
              to design, automation to maintenance—we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 bg-card group border-border/50">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                        <Zap size={14} className="text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with modern, reliable technologies to build robust solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 bg-card rounded-full border border-border/50 font-body text-sm font-medium hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Ready to transform your ideas into reality? Get in touch and let's discuss your
              project.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body"
            >
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
