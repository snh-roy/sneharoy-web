import Layout from "@/components/Layout";

const Resume = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-6xl">
        {/* Education */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-typewriter uppercase tracking-wider mb-6 sm:mb-8">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8 ml-0 sm:ml-12 md:ml-20 lg:ml-24">
            {/* Baruch Logo */}
            <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
              <img 
                src="./baruch-logo2.ico" 
                alt="Baruch College Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Text */}
            <div className="text-center sm:text-left sm:ml-8 md:ml-12 lg:ml-16">
              <h3 className="font-typewriter text-xl sm:text-2xl lg:text-3xl font-bold">CUNY, Baruch College</h3>
              <p className="font-mono text-lg sm:text-xl lg:text-2xl mt-1 text-gray-800 break-words">BS in Computer Science & Minor in Mathematics</p>
              <p className="font-mono text-lg sm:text-xl lg:text-2xl mt-1 text-gray-800">Expected Graduation: May 2027</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-typewriter uppercase tracking-wider mb-6 sm:mb-8">
            Experience
          </h2>
          <div className="space-y-6 sm:space-y-8 ml-0 sm:ml-12 md:ml-20 lg:ml-24">
            {/* MTA Experience */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8">
              <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <img 
                  src="./mta-logo.ico" 
                  alt="MTA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center sm:text-left sm:ml-8 md:ml-12 lg:ml-16">
                <h3 className="font-typewriter text-xl sm:text-2xl lg:text-3xl font-bold">Metropolitan Transportation Authority</h3>
                <p className="font-mono text-lg sm:text-xl lg:text-xl mt-1 text-gray-800 break-words">Software Engineer Intern | Jan 2026</p>
              </div>
            </div>

            {/* CodePath Experience */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8">
              <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <img 
                  src="./codepath-logo.ico" 
                  alt="CodePath Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center sm:text-left sm:ml-8 md:ml-12 lg:ml-16">
                <h3 className="font-typewriter text-xl sm:text-2xl lg:text-3xl font-bold">CodePath.Org</h3>
                <p className="font-mono text-lg sm:text-xl lg:text-xl mt-1 text-gray-800 break-words">Technical Fellow | May 2024 - Present</p>
              </div>
            </div>

            {/* Accenture Experience */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-8">
              <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                <img 
                  src="./accenture-logo.ico" 
                  alt="Accenture Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center sm:text-left sm:ml-8 md:ml-12 lg:ml-16">
                <h3 className="font-typewriter text-xl sm:text-2xl lg:text-3xl font-bold">Accenture</h3>
                <p className="font-mono text-lg sm:text-xl lg:text-xl mt-1 text-gray-800 break-words">Software Engineer Intern | September 2025 - November 2025</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resume;
