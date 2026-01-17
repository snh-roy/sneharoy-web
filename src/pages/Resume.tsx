import Layout from "@/components/Layout";

const Resume = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-typewriter uppercase tracking-wider mb-8 text-center md:text-left">
            Education
          </h2>
          
          {/* Education Item */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-8 lg:ml-40 xl:ml-48">
            {/* Logo */}
            <div className="w-28 h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 flex items-center justify-center shrink-0">
              <img 
                src="./baruch-logo2.ico" 
                alt="Baruch College Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Text Content */}
            <div className="w-full max-w-prose text-center md:text-left lg:ml-24 xl:ml-32">
              <h3 className="font-typewriter text-xl md:text-2xl lg:text-3xl font-bold">
                CUNY, Baruch College
              </h3>
              <p className="font-mono text-lg md:text-xl lg:text-2xl mt-1 text-gray-800">
                BS in Computer Science & Minor in Mathematics
              </p>
              <p className="font-mono text-lg md:text-xl lg:text-2xl mt-1 text-gray-800">
                Expected Graduation: May 2027
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-typewriter uppercase tracking-wider mb-8 text-center md:text-left">
            Experience
          </h2>
          
          <div className="space-y-8 lg:ml-40 xl:ml-48">
            {/* MTA Experience */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-8">
              <div className="w-28 h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 flex items-center justify-center shrink-0">
                <img 
                  src="./mta-logo.ico" 
                  alt="MTA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full max-w-prose text-center md:text-left lg:ml-24 xl:ml-32">
                <h3 className="font-typewriter text-xl md:text-2xl lg:text-3xl font-bold">
                  Metropolitan Transportation Authority
                </h3>
                <p className="font-mono text-lg md:text-xl lg:text-2xl mt-1 text-gray-800">
                  Software Engineer Intern | Jan 2026
                </p>
              </div>
            </div>

            {/* CodePath Experience */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-8">
              <div className="w-28 h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 flex items-center justify-center shrink-0">
                <img 
                  src="./codepath-logo.ico" 
                  alt="CodePath Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full max-w-prose text-center md:text-left lg:ml-24 xl:ml-32">
                <h3 className="font-typewriter text-xl md:text-2xl lg:text-3xl font-bold">
                  CodePath.Org
                </h3>
                <p className="font-mono text-lg md:text-xl lg:text-2xl mt-1 text-gray-800">
                  Technical Fellow | May 2024 - Present
                </p>
              </div>
            </div>

            {/* Accenture Experience */}
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-8">
              <div className="w-28 h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 flex items-center justify-center shrink-0">
                <img 
                  src="./accenture-logo.ico" 
                  alt="Accenture Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full max-w-prose text-center md:text-left lg:ml-24 xl:ml-32">
                <h3 className="font-typewriter text-xl md:text-2xl lg:text-3xl font-bold">
                  Accenture
                </h3>
                <p className="font-mono text-lg md:text-xl lg:text-2xl mt-1 text-gray-800">
                  Software Engineer Intern | September 2025 - November 2025
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resume;
