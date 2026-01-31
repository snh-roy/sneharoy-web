import Layout from "@/components/Layout";
import TypewriterEffect from "@/components/TypewriterEffect";
import heroBg from "@/assets/nycskyline.jpg";
import { Github, Linkedin } from "lucide-react";


const activities = [
  "Co-founding an EdTech startup",
  "Learning Rust & NLP",
  "Building Termly part-time",
];

const Index = () => {
  return (
    <Layout backgroundImage={heroBg}>
      {/* Typewriter content */}
      <section className="relative min-h-[80vh] w-full flex items-center justify-center">
        <div className="relative z-20 px-4 sm:px-6">
          <TypewriterEffect />
        </div>
      </section>

      {/* Two Column Section */}
      <section className="relative z-10 bg-white min-h-[60vh] container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row justify-between max-w-6xl mx-auto gap-8 lg:gap-20">
          {/* Left Column - What I'm Doing */}
          <div className="lg:flex-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-typewriter uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-4 sm:mb-6">
              Right now I am,
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              {activities.map((activity) => (
                <li
                  key={activity}
                  className="font-mono text-lg sm:text-xl lg:text-2xl flex items-start gap-2"
                >
                  <span className="mt-1 shrink-0">•</span>
                  <span className="break-words">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Links */}
          <div className="lg:flex-1 mt-8 lg:mt-0 lg:ml-32 xl:ml-40">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-typewriter uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-4 sm:mb-6">
              Also see:
            </h2>
            <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 mb-4 sm:mb-6">
              <a 
                href="https://github.com/snh-roy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Github size={32} className="sm:w-9 sm:h-9" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sneharoym/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Linkedin size={32} className="sm:w-9 sm:h-9" />
              </a>
              <a 
                href="https://medium.com/@sneharoy1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  width="32" 
                  height="32"
                  className="sm:w-9 sm:h-9"
                  fill="currentColor"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a 
                href="https://drive.google.com/drive/folders/18I_5LzALFEjyu4oUrYMf_t9ZlpAI5UtX?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Google Drive"
              >
                <svg
                  viewBox="0 0 48 48"
                  width="36"
                  height="36"
                  className="sm:w-10 sm:h-10"
                  aria-hidden="true"
                >
                  <path fill="#6b7280" d="M16.5 6h15l9 15h-15z" />
                  <path fill="#9ca3af" d="M7.5 21h15l9 15h-15z" />
                  <path fill="#374151" d="M25.5 21h15l-9 15h-15z" />
                  <path fill="#ffffff" d="M22.5 21h3l6 10.5h-3z" />
                </svg>
              </a>
            </div>
            <a 
              href="mailto:snehabaruch@gmail.com" 
              className="font-mono text-lg sm:text-xl lg:text-2xl hover:underline underline-offset-4 break-all"
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
