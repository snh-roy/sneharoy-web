import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import TypewriterEffect from "@/components/TypewriterEffect";
import ActivityCard from "@/components/ActivityCard";
import heroBg from "@/assets/hero-bg.jpg";

const activities = [
  {
    title: "VP of MLDS",
    description: "Leading the Machine Learning and Data Science Club.",
  },
  {
    title: "Systems Programming",
    description: "Conducting an independent study on Rust and learning Go.",
  },
  {
    title: "Development",
    description: "Building a backend for a startup.",
  },
  {
    title: "Academics",
    description: "Currently taking Intro to NLP and pursuing Financial Mathematics.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - 60vh */}
      <section 
        className="relative h-[60vh] w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]" />
        
        {/* Typewriter content */}
        <div className="relative z-10 px-6">
          <TypewriterEffect />
        </div>
      </section>

      {/* What I'm Doing Now Section */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-typewriter uppercase tracking-[0.15em] mb-2 text-center">
            What I'm Doing Now
          </h2>
          <div className="editorial-divider max-w-xs mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <ActivityCard
              key={activity.title}
              title={activity.title}
              description={activity.description}
              index={index}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;