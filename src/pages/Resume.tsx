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
            {/* Logo placeholder */}
            <div className="w-20 h-20 border border-border flex items-center justify-center shrink-0">
              <span className="font-mono text-sm text-muted-foreground">Logo</span>
            </div>
            {/* Text */}
            <div>
              <h3 className="font-typewriter text-2xl font-bold">CUNY, Baruch College</h3>
              <p className="font-mono text-xl mt-1">BS in Computer Science</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-typewriter uppercase tracking-wider mb-8">
            Experience
          </h2>
          <div className="space-y-6 ml-8 md:ml-16">
            {/* Experience Item */}
            <div className="flex items-center gap-8">
              {/* Logo placeholder */}
              <div className="w-20 h-20 border border-border flex items-center justify-center shrink-0">
                <span className="font-mono text-sm text-muted-foreground">Logo</span>
              </div>
              {/* Text */}
              <div>
                <h3 className="font-typewriter text-2xl font-bold">Company Name</h3>
                <p className="font-mono text-xl mt-1">Role / Title</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Resume;
