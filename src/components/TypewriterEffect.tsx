import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  { text: "I always wanted to be an\nice-cream tester as my\nfull-time job.", pause: 2000 },
  { text: "Anyways,", pause: 1000 },
  { text: "I love optimistic science\nand tech stories.", pause: 3000 },
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
    }, isDeleting ? 25 : 50);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex, isPaused]);

  return (
    <div className="text-left max-w-[280px] sm:max-w-md lg:max-w-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhraseIndex}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="text-xl md:text-2xl lg:text-3xl font-typewriter text-primary-foreground/90 tracking-wide min-h-[4em] whitespace-pre-wrap"
        >
          {displayText}
          <span className="typewriter-cursor bg-primary-foreground" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TypewriterEffect;
