import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  { text: "Hello, I am Snéha", pause: 3000 },
  { text: "I always wanted to be an ice-cream tester as my full-time job", pause: 3000 },
  { text: "Anyways", pause: 1000 },
  { text: "I love optimistic science and tech stories", pause: 3000 },
];

const TypewriterEffect = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentPhrase.text.length) {
          setDisplayText(currentPhrase.text.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, currentPhrase.pause);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex, isPaused]);

  return (
    <div className="text-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentPhraseIndex}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="text-2xl md:text-4xl lg:text-5xl font-typewriter text-primary-foreground tracking-wide"
        >
          {displayText}
          <span className="typewriter-cursor bg-primary-foreground" />
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default TypewriterEffect;
