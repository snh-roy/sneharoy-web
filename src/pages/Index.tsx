import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import TypewriterEffect from "@/components/TypewriterEffect";
import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin } from "lucide-react";

const activities = [
  "building termly-ly with a friend",
  "building a people's startup with a team",
  "freelancing for MTA",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - 60vh */}
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />
        
        {/* Typewriter content */}
        <div className="relative z-10 px-6">
          <TypewriterEffect />
        </div>
      </section>

      {/* Two Column Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto gap-12">
          {/* Left Column - What I'm Doing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:pl-0"
          >
            <h2 className="text-2xl font-typewriter uppercase tracking-[0.15em] mb-6">
              Right now I am,
            </h2>
            <ul className="space-y-3">
              {activities.map((activity, index) => (
                <motion.li
                  key={activity}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="font-mono text-base flex items-start gap-2"
                >
                  <span className="mt-1">•</span>
                  <span>{activity}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:pr-0"
          >
            <h2 className="text-2xl font-typewriter uppercase tracking-[0.15em] mb-6">
              Links
            </h2>
            <div className="flex gap-6 mb-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://medium.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="28" 
                  height="28" 
                  fill="currentColor"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
            <a 
              href="mailto:snehabaruch@gmail.com" 
              className="font-mono text-base hover:underline underline-offset-4"
            >
              snehabaruch@gmail.com
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
