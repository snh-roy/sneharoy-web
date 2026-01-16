import { motion } from "framer-motion";

interface ActivityCardProps {
  title: string;
  description: string;
  index: number;
}

const ActivityCard = ({ title, description, index }: ActivityCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="activity-card"
    >
      <h3 className="text-lg font-typewriter mb-3 uppercase tracking-wider">
        {title}
      </h3>
      <p className="text-sm font-mono text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ActivityCard;