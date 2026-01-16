import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Resume = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-xl font-typewriter uppercase tracking-wider mb-8">
            Education
          </h2>
          <div className="flex items-center gap-8">
            {/* Logo placeholder */}
            <div className="w-20 h-20 border border-border flex items-center justify-center shrink-0">
              <span className="font-mono text-xs text-muted-foreground">Logo</span>
            </div>
            {/* Text */}
            <div>
              <h3 className="font-typewriter text-lg font-bold">CUNY, Baruch College</h3>
              <p className="font-mono text-sm mt-1">BS in Computer Science</p>
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-xl font-typewriter uppercase tracking-wider mb-8">
            Experience
          </h2>
          <div className="space-y-6">
            {/* Experience Item */}
            <div className="flex items-center gap-8">
              {/* Logo placeholder */}
              <div className="w-20 h-20 border border-border flex items-center justify-center shrink-0">
                <span className="font-mono text-xs text-muted-foreground">Logo</span>
              </div>
              {/* Text */}
              <div>
                <h3 className="font-typewriter text-lg font-bold">Company Name</h3>
                <p className="font-mono text-sm mt-1">Role / Title</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Resume;
