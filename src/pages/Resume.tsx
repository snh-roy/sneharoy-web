import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Resume = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-typewriter uppercase tracking-[0.15em] mb-2 text-center"
        >
          Résumé
        </motion.h1>
        <div className="editorial-divider max-w-xs mx-auto mb-12" />

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xl font-typewriter uppercase tracking-wider mb-6 border-b border-border pb-2">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-typewriter text-lg">Computer Science Undergraduate</h3>
              <p className="font-mono text-sm text-muted-foreground">New York City</p>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-xl font-typewriter uppercase tracking-wider mb-6 border-b border-border pb-2">
            Projects
          </h2>
          <div className="space-y-6">
            <div className="activity-card">
              <h3 className="font-typewriter text-lg mb-2">Loan Approval Prediction Model</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Developed a predictive model using Logistic Regression to assess loan approval likelihood based on applicant data.
              </p>
            </div>
            <div className="activity-card">
              <h3 className="font-typewriter text-lg mb-2">Macaulay Datathon</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Conducted comprehensive MTA data analysis to derive insights on transportation patterns and efficiency.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-xl font-typewriter uppercase tracking-wider mb-6 border-b border-border pb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Python", "SQL", "Data Structures", "Linear Regression", "Random Forest"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-border font-mono text-sm hover:bg-secondary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Resume;