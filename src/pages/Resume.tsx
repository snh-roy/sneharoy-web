import Layout from "@/components/Layout";

const Resume = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-typewriter uppercase tracking-wider mb-8">
            Education
          </h2>
          <div className="flex items-center gap-8 ml-8 md:ml-16">
            {/* Baruch Logo */}
            <div className="w-64 h-64 flex items-center justify-center shrink-0">
              <img 
                src="./baruch-logo2.ico" 
                alt="Baruch College Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Text */}
            <div>
              <h3 className="font-typewriter text-2xl font-bold">CUNY, Baruch College</h3>
              <p className="font-mono text-xl mt-1 text-gray-800">BS in Computer Science & Minor in Mathematics</p>
              <p className="font-mono text-xl mt-1 text-gray-800">Expected Graduation: May 2027</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-typewriter uppercase tracking-wider mb-8">
            Experience
          </h2>
          <div className="space-y-8 ml-8 md:ml-16">
            {/* MTA Experience */}
            <div className="flex items-center gap-8">
              <div className="w-64 h-64 flex items-center justify-center shrink-0">
                <img 
                  src="./mta-logo.ico" 
                  alt="MTA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-typewriter text-2xl font-bold">Metropolitan Transportation Authority</h3>
                <p className="font-mono text-lg mt-1 text-gray-800">Software Engineer Intern | Jan 2026</p>
              </div>
            </div>

            {/* CodePath Experience */}
            <div className="flex items-center gap-8">
              <div className="w-64 h-64 flex items-center justify-center shrink-0">
                <img 
                  src="./codepath-logo.ico" 
                  alt="CodePath Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-typewriter text-2xl font-bold">CodePath.Org</h3>
                <p className="font-mono text-lg mt-1 text-gray-800">Technical Fellow | May 2024 - Present</p>
              </div>
            </div>

            {/* Accenture Experience */}
            <div className="flex items-center gap-8">
              <div className="w-64 h-64 flex items-center justify-center shrink-0">
                <img 
                  src="./accenture-logo.ico" 
                  alt="Accenture Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-typewriter text-2xl font-bold">Accenture</h3>
                <p className="font-mono text-lg mt-1 text-gray-800">Software Engineer Intern | September 2025 - November 2025</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resume;
