import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const articles = [
  {
    title: "Literary Analysis: Reflections on 1001 Nights",
    date: "2024",
    description: "An exploration of narrative structure and cultural themes in the Arabian Nights.",
  },
];

const Composition = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl font-typewriter uppercase tracking-wider mb-8"
        >
          Blogs
        </motion.h1>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="activity-card group cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="font-typewriter text-lg mb-2 group-hover:underline underline-offset-4">
                    {article.title}
                  </h2>
                  <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                    {article.description}
                  </p>
                </div>
                <span className="font-mono text-sm text-muted-foreground shrink-0">
                  {article.date}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <p className="font-mono text-sm text-muted-foreground italic">
            More writings coming soon...
          </p>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Composition;
