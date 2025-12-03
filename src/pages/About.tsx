import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, BarChart3, PenTool, Lightbulb, Layers, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutTeam from "@/assets/about-team.jpg";
import aboutEcosystem from "@/assets/about-ecosystem.jpg";
import aboutCapabilities from "@/assets/about-capabilities.jpg";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const capabilities = [
    { icon: Code, title: "Web Development & Web Apps" },
    { icon: BarChart3, title: "Dashboards & Automation Tools" },
    { icon: Layers, title: "Data Analytics & Visualization" },
    { icon: PenTool, title: "Content Writing & Creative Solutions" },
    { icon: Lightbulb, title: "Custom Digital Projects" },
  ];

  const founders = [
    {
      name: "Siva",
      role: "Co-Founder",
      description: "Visionary builder passionate about technology and creating impactful digital solutions.",
      socials: { linkedin: "#", twitter: "#", github: "#" },
    },
    {
      name: "Sanjay",
      role: "Co-Founder",
      description: "Creative strategist focused on innovation and building sustainable digital ecosystems.",
      socials: { linkedin: "#", twitter: "#", github: "#" },
    },
  ];

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block font-body text-sm tracking-widest text-accent uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              About Us
            </motion.span>
            <motion.h1
              className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Who We <span className="text-gradient">Are</span>
            </motion.h1>
            <motion.p
              className="font-display text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              From Concept to Code: Your Multi-Domain Solution Architects.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are - Parallax Section */}
      <ParallaxSection
        image={aboutTeam}
        imageAlt="IMMO Hub team collaboration"
        imagePosition="right"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            A Young Team with <span className="text-gradient">Bold Ideas</span>
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              We're a young team led by two originators who believe that talent, curiosity, and problem-solving matter more than titles or location. IMMO Hub began as a small idea: deliver high-quality projects while building a platform where young talents can grow, experiment, and get paid.
            </p>
            <p>
              Not just a typical agency, we're building a flexible digital workspace where people who love creating, innovating, automating, building and developing can collaborate on meaningful projects and bring real results.
            </p>
          </div>
        </motion.div>
      </ParallaxSection>

      {/* What We Do - Centered Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block font-body text-sm tracking-widest text-accent uppercase mb-4">
              What We Do
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Startup Agility with <span className="text-gradient">Agency Reliability</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              We help individuals, startups, and businesses, translating raw ideas into working solutions that span a multiverse of domains and industries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <cap.icon className="text-accent" size={24} />
                      </div>
                      <h3 className="font-display text-lg font-semibold">{cap.title}</h3>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 space-y-4"
          >
            <p className="font-body text-muted-foreground italic">
              We don't limit ourselves to one niche. If a problem excites us and we're capable of solving it, simply we build it.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              At this early stage, we structure our services into clear categories, making it easy for clients to find what they need while giving us room to grow and explore more verticals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Are Different - Parallax Section */}
      <ParallaxSection
        image={aboutEcosystem}
        imageAlt="IMMO Hub digital ecosystem"
        imagePosition="left"
      >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block font-body text-sm tracking-widest text-accent uppercase">
            Why We Are Different
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Most Agencies Work in Rigid Structures.
            <br />
            <span className="text-gradient">We're Cooking Something New.</span>
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              IMMO Hub is not just an agency. It's a growing ecosystem with upcoming subdomains for social impact, automation products, experimental tools, and more.
            </p>
            <p>
              We're here to create value for clients, for our team, and for the community.
            </p>
          </div>
        </motion.div>
      </ParallaxSection>

      {/* Meet the Founders Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-body text-sm tracking-widest text-accent uppercase mb-4">
              Leadership
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              Meet the Founders
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-luxury/20 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <span className="font-display text-5xl font-bold text-accent">
                        {founder.name[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-2xl font-bold mb-1">{founder.name}</h3>
                    <p className="font-body text-sm text-accent mb-4">{founder.role}</p>
                    <p className="font-body text-sm text-primary-foreground/70 mb-6">
                      {founder.description}
                    </p>
                    <div className="flex justify-center gap-4">
                      <a
                        href={founder.socials.linkedin}
                        className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                        aria-label={`${founder.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={founder.socials.twitter}
                        className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                        aria-label={`${founder.name}'s Twitter`}
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href={founder.socials.github}
                        className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                        aria-label={`${founder.name}'s GitHub`}
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button asChild variant="outline" size="lg" className="font-body border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/team">
                Explore Our Team <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <p className="font-body text-sm text-primary-foreground/60 mt-4">
              A dedicated page showcasing all contributors, collaborators, and young talents who join us in our journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Something <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss how we can turn your ideas into reality
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Parallax Section Component
interface ParallaxSectionProps {
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  children: React.ReactNode;
}

const ParallaxSection = ({ image, imageAlt, imagePosition, children }: ParallaxSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            imagePosition === "left" ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className={`${imagePosition === "right" ? "lg:order-1" : "lg:order-2"}`}>
            {children}
          </div>
          <motion.div
            style={{ y }}
            className={`relative ${imagePosition === "right" ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-2xl bg-accent/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
