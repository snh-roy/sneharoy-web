import Layout from "@/components/Layout";
import TypewriterEffect from "@/components/TypewriterEffect";
import heroBg from "@/assets/gods_creation.jpg";
import { Github, Linkedin } from "lucide-react";




const Index = () => {
  return (
    <Layout backgroundImage={heroBg}>
      {/* Spacer to keep the hero section height */}
      <section className="relative min-h-[80vh] w-full flex items-start justify-start pointer-events-none">
        <div className="w-full px-4 sm:px-12 lg:px-20 relative z-20 pt-4 sm:pt-8 lg:pt-10">
          <div className="max-w-4xl h-32 sm:h-48">
            {/* Empty space where typewriter used to be, now it's in the Nav */}
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section className="relative z-10 bg-white min-h-[60vh] container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row justify-start max-w-6xl mx-auto gap-8 lg:gap-24 xl:gap-36">
          {/* Left Column - What I'm Doing */}
          <div className="lg:w-[60%] space-y-8 sm:space-y-12 lg:-ml-16 xl:-ml-24">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-typewriter uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-4 sm:mb-6 whitespace-nowrap">Right now I am,</h2>
              <ul className="space-y-2 sm:space-y-3">
                <li className="font-mono text-lg sm:text-xl lg:text-2xl flex items-start gap-2">
                  <span className="mt-[12px] sm:mt-[14px] lg:mt-[15px] shrink-0 w-[3px] h-[3px] rounded-full bg-current opacity-40"></span>
                  <span className="break-words">
                    Co-founding a CivicTech platform to empower non-native<br />
                    English speakers to become American citizens.
                  </span>
                </li>
                <li className="font-mono text-lg sm:text-xl lg:text-2xl flex items-start gap-2">
                  <span className="mt-[12px] sm:mt-[14px] lg:mt-[15px] shrink-0 w-[3px] h-[3px] rounded-full bg-current opacity-40"></span>
                  <span className="break-words">
                    Researching randomized algorithms for query complexity<br />
                    under the sage guidance of{" "}
                    <a
                      href="https://hablack.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:underline"
                    >
                      Professor Hadley
                    </a>.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-typewriter uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-4 sm:mb-6 whitespace-nowrap">This summer I have,</h2>
              <ul className="space-y-2 sm:space-y-3">
                <li className="font-mono text-lg sm:text-xl lg:text-2xl flex items-start gap-2">
                  <span className="mt-[12px] sm:mt-[14px] lg:mt-[15px] shrink-0 w-[3px] h-[3px] rounded-full bg-current opacity-40"></span>
                  <span className="break-words">
                    Built an assembler (LC3 tool) in Rust for Baruch's Computer Science students.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="mt-8 lg:mt-0 lg:pl-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-typewriter uppercase tracking-[0.1em] sm:tracking-[0.15em] mb-4 sm:mb-6">
              Also see:
            </h2>
            <div className="flex flex-col gap-1 sm:gap-1.5">
              <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-5">
                <a 
                  href="https://github.com/snh-roy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Github size={24} className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sneharoym/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Linkedin size={24} className="w-6 h-6 sm:w-7 sm:h-7" />
                </a>
                <a 
                  href="https://medium.com/@sneharoy1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24"
                    className="w-6 h-6 sm:w-7 sm:h-7"
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
                    width="28"
                    height="28"
                    className="w-7 h-7 sm:w-8 sm:h-8"
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
                className="font-mono text-lg sm:text-xl lg:text-2xl hover:underline underline-offset-4 break-all block"
              >
                snehabaruch@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
