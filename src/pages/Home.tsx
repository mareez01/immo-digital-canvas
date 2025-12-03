import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Workflow, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import workWeb from "@/assets/work-web.jpg";
import workDesign from "@/assets/work-design.jpg";
import { useRef } from "react";
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  smoothTransition, 
  viewportOnce,
  scaleIn
} from "@/lib/animations";

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
    },
    {
      icon: Palette,
      title: "Design & Branding",
      description: "Beautiful graphics, posters, and brand identities that resonate.",
    },
    {
      icon: Workflow,
      title: "Automation",
      description: "Streamline workflows and eliminate repetitive tasks with smart solutions.",
    },
    {
      icon: Layout,
      title: "Full-Stack Solutions",
      description: "End-to-end development and maintenance from dev to hosting.",
    },
  ];

  const projects = [
    {
      title: "FL Smartech",
      category: "Custom Development",
      image: workWeb,
    },
    {
      title: "Somasultra",
      category: "Business Site",
      image: workDesign,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
        >
          <img
            src={heroBg}
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </motion.div>

        <motion.div 
          className="container mx-auto px-6 lg:px-12 relative z-10 text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.span
              variants={staggerItem}
              className="inline-block font-body text-sm tracking-widest text-accent uppercase mb-6"
            >
              Digital Agency
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              Digital Excellence
              <br />
              <span className="text-gradient">Delivered</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              We craft premium web experiences, design stunning brands, and automate workflows.
              From concept to deployment, we're your partner in digital transformation.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body">
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button asChild variant="outline" size="lg" className="font-body border-2">
                  <Link to="/work">View Our Work</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOnce}
            transition={smoothTransition}
            className="text-center mb-16"
          >
            <span className="inline-block font-body text-sm tracking-widest text-accent uppercase mb-4">
              Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...smoothTransition, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 bg-card border-border/50 group">
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    <service.icon className="text-accent" size={24} />
                  </motion.div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...smoothTransition, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button asChild variant="outline" size="lg" className="font-body">
                <Link to="/services">
                  Explore All Services <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOnce}
            transition={smoothTransition}
            className="text-center mb-16"
          >
            <span className="inline-block font-body text-sm tracking-widest text-accent uppercase mb-4">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A glimpse of our recent work and client success stories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...smoothTransition, delay: index * 0.2 }}
              >
                <Link to="/work" className="group block">
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="p-6">
                      <p className="font-body text-sm text-accent mb-2">{project.category}</p>
                      <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...smoothTransition, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body">
                <Link to="/work">
                  View All Projects <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-luxury/10 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={smoothTransition}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's discuss how we can help elevate your digital presence
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-body"
              >
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
