import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Linkedin, Twitter, Github, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  smoothTransition, 
  viewportOnce,
  scaleIn 
} from "@/lib/animations";

const Team = () => {
  const founders = [
    {
      name: "Siva",
      role: "Co-Founder & Tech Lead",
      description: "Visionary builder passionate about technology and creating impactful digital solutions. Leads the technical architecture and innovation at IMMO Hub.",
      expertise: ["Full-Stack Development", "System Architecture", "Automation"],
      socials: { linkedin: "#", twitter: "#", github: "#", email: "siva@immohub.in" },
    },
    {
      name: "Sanjay",
      role: "Co-Founder & Creative Director",
      description: "Creative strategist focused on innovation and building sustainable digital ecosystems. Drives design thinking and client relationships.",
      expertise: ["Creative Strategy", "UI/UX Design", "Brand Development"],
      socials: { linkedin: "#", twitter: "#", github: "#", email: "sanjay@immohub.in" },
    },
  ];

  const contributors = [
    {
      name: "Open Position",
      role: "Frontend Developer",
      type: "hiring",
      description: "We're looking for passionate developers to join our growing team.",
    },
    {
      name: "Open Position",
      role: "UI/UX Designer",
      type: "hiring",
      description: "Creative minds who love crafting beautiful user experiences.",
    },
    {
      name: "Open Position",
      role: "Content Writer",
      type: "hiring",
      description: "Storytellers who can bring brands to life through words.",
    },
  ];

  const values = [
    {
      title: "Talent Over Titles",
      description: "We believe what you can do matters more than where you came from.",
    },
    {
      title: "Curiosity Driven",
      description: "Every project is an opportunity to learn something new.",
    },
    {
      title: "Real Results",
      description: "We measure success by the impact we create for our clients.",
    },
    {
      title: "Growth Platform",
      description: "IMMO Hub is where young talents can grow, experiment, and get paid.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury/5 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" size="sm" className="font-body">
              <Link to="/about">
                <ArrowLeft className="mr-2" size={16} /> Back to About
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.span
              variants={staggerItem}
              className="inline-block font-body text-sm tracking-widest text-accent uppercase mb-4"
            >
              Our People
            </motion.span>
            <motion.h1
              variants={staggerItem}
              className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Meet the <span className="text-gradient">Team</span>
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              A dedicated group of creators, innovators, and problem-solvers united by a shared passion 
              for building meaningful digital experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOnce}
            transition={smoothTransition}
            className="text-center mb-16"
          >
            <span className="inline-block font-body text-sm tracking-widest text-accent uppercase mb-4">
              Leadership
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold">The Founders</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={viewportOnce}
                transition={{ ...smoothTransition, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden h-full bg-card border-border/50 hover:shadow-2xl transition-all duration-500 group">
                  <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 via-luxury/5 to-primary/10 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="w-40 h-40 rounded-full bg-background/80 backdrop-blur flex items-center justify-center border-4 border-accent/20 group-hover:border-accent/40 transition-colors duration-300">
                      <span className="font-display text-7xl font-bold text-gradient">
                        {founder.name[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-bold mb-1">{founder.name}</h3>
                    <p className="font-body text-sm text-accent mb-4">{founder.role}</p>
                    <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                      {founder.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {founder.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-body bg-secondary rounded-full text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <motion.a
                        href={founder.socials.linkedin}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors"
                        aria-label={`${founder.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </motion.a>
                      <motion.a
                        href={founder.socials.twitter}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors"
                        aria-label={`${founder.name}'s Twitter`}
                      >
                        <Twitter size={18} />
                      </motion.a>
                      <motion.a
                        href={founder.socials.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors"
                        aria-label={`${founder.name}'s GitHub`}
                      >
                        <Github size={18} />
                      </motion.a>
                      <motion.a
                        href={`mailto:${founder.socials.email}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent/20 transition-colors"
                        aria-label={`Email ${founder.name}`}
                      >
                        <Mail size={18} />
                      </motion.a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOnce}
            transition={smoothTransition}
            className="text-center mb-16"
          >
            <span className="inline-block font-body text-sm tracking-widest text-accent uppercase mb-4">
              Our Culture
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold">What Drives Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...smoothTransition, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur border-border/50 hover:border-accent/30 transition-all duration-300">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4"
                  >
                    <Sparkles className="text-accent" size={20} />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors / Join Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={viewportOnce}
            transition={smoothTransition}
            className="text-center mb-16"
          >
            <span className="inline-block font-body text-sm tracking-widest text-accent uppercase mb-4">
              Join Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              We're <span className="text-gradient">Growing</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              IMMO Hub is always looking for passionate individuals who want to create, learn, and grow with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contributors.map((contributor, index) => (
              <motion.div
                key={`${contributor.role}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportOnce}
                transition={{ ...smoothTransition, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 h-full border-dashed border-2 border-accent/30 bg-accent/5 hover:bg-accent/10 transition-all duration-300 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl text-accent">+</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-1">{contributor.role}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    {contributor.description}
                  </p>
                  <Button asChild variant="outline" size="sm" className="font-body">
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
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

        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={smoothTransition}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Want to Work With Us?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you're a potential client or a talented individual looking to join our team, 
              we'd love to hear from you.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-body"
              >
                <Link to="/contact">
                  Get in Touch
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

export default Team;
