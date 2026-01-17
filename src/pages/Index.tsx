import Layout from "@/components/Layout";
import TypewriterEffect from "@/components/TypewriterEffect";
import heroBg from "@/assets/me.jpg";
import { Github, Linkedin } from "lucide-react";

const activities = [
  "Freelancing for MTA",
  "Co-founding an EdTech startup",
  "Building Termly part-time",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with background - 60vh */}
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 px-6">
          <TypewriterEffect />
        </div>
      </section>

      {/* Two Column Section */}
      <section className="container mx-auto px-6 py-16 bg-background">
        <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto gap-12">
          {/* Left Column - What I'm Doing */}
          <div className="md:pl-0">
            <h2 className="text-3xl font-typewriter uppercase tracking-[0.15em] mb-6">
              Right now I am,
            </h2>
            <ul className="space-y-3">
              {activities.map((activity) => (
                <li
                  key={activity}
                  className="font-mono text-xl flex items-start gap-2"
                >
                  <span className="mt-1">•</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Links */}
          <div className="md:pr-0">
            <h2 className="text-3xl font-typewriter uppercase tracking-[0.15em] mb-6">
              Also see:
            </h2>
            <div className="flex gap-8 mb-6">
              <a 
                href="https://github.com/snh-roy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Github size={36} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sneharoym/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Linkedin size={36} />
              </a>
              <a 
                href="https://medium.com/@snehabaruch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="36" 
                  height="36" 
                  fill="currentColor"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
            <a 
              href="mailto:snehabaruch@gmail.com" 
              className="font-mono text-xl hover:underline underline-offset-4"
            >
              snehabaruch@gmail.com
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
