import { useState, useEffect } from "react";

const staticPrefix = "Hi, I am Snéha.";
const phrases = [
  { text: "I always wanted to be an ice cream\ntester as my full-time job.", pause: 2000, shouldDelete: true },
  { text: "Anyways,", pause: 1000, shouldDelete: true },
  { text: "I love optimistic science and tech stories.", pause: 0, shouldDelete: false },
];

interface TypewriterEffectProps {
  isHomePage?: boolean;
}

const TypewriterEffect = ({ isHomePage = true }: TypewriterEffectProps) => {
  // Always start empty if on Home Page, otherwise start full
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [prefixText, setPrefixText] = useState(isHomePage ? "" : staticPrefix);
  const [displayText, setDisplayText] = useState(isHomePage ? "" : phrases[phrases.length - 1].text);
  const [isPrefixDone, setIsPrefixDone] = useState(!isHomePage);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFinished, setIsFinished] = useState(!isHomePage);

  useEffect(() => {
    // If we are NOT on the home page, do absolutely nothing (stay static)
    if (!isHomePage) return;

    // Phase 1: Type the static prefix (SLOWLY)
    if (!isPrefixDone) {
      const timeout = setTimeout(() => {
        if (prefixText.length < staticPrefix.length) {
          setPrefixText(staticPrefix.slice(0, prefixText.length + 1));
        } else {
          setTimeout(() => {
            setIsPrefixDone(true);
          }, 2000);
        }
      }, 120);
      return () => clearTimeout(timeout);
    }

    if (isFinished) return;

    // Phase 2: Sequential Story
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.text.length) {
          setDisplayText(currentPhrase.text.slice(0, displayText.length + 1));
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            if (currentPhrase.shouldDelete) {
              setIsDeleting(true);
            } else {
              setIsFinished(true);
            }
          }, currentPhrase.pause);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          if (currentPhraseIndex < phrases.length - 1) {
            setCurrentPhraseIndex(prev => prev + 1);
          }
        }
      }
    }, isDeleting ? 15 : 25);

    return () => clearTimeout(timeout);
  }, [prefixText, isPrefixDone, displayText, isDeleting, currentPhraseIndex, isPaused, isFinished, isHomePage]);

  const textColorClass = isHomePage ? "text-white" : "text-black";

  const renderText = (text: string) => {
    const target = "optimistic";
    const index = text.indexOf(target);
    
    if (index === -1) return <span>{text}</span>;

    const before = text.slice(0, index);
    const middle = text.slice(index, index + target.length);
    const after = text.slice(index + target.length);

    return (
      <span>
        {before}
        <span 
          className="relative text-[#39FF14] brightness-125 font-bold drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]"
          style={{ 
            WebkitTextStroke: "1px rgba(57, 255, 20, 0.5)",
            paintOrder: "stroke fill"
          }}
        >
          {middle}
        </span>
        {after}
      </span>
    );
  };

  return (
    <div className="text-left flex flex-col gap-0.5 sm:gap-1 md:gap-2 max-w-[calc(100vw-80px)] sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      {/* Introduction line */}
      <h1 className={`font-typewriter text-2xl sm:text-4xl md:text-5xl lg:text-7xl tracking-wide leading-tight ${textColorClass}`}>
        {prefixText}
        {isHomePage && !isPrefixDone && (
          <span className={`typewriter-cursor w-[2px] h-[0.9em] ml-1 sm:ml-2 ${isHomePage ? 'bg-white' : 'bg-black'}`} />
        )}
      </h1>
      
      {isHomePage && (
        <div className={`font-typewriter text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide min-h-[1.5em] whitespace-pre-wrap opacity-80 leading-snug ${textColorClass}`}>
          {isPrefixDone && (
            <>
              {renderText(displayText)}
              {!isFinished && <span className={`typewriter-cursor w-[2px] h-[0.9em] ml-1 ${isHomePage ? 'bg-white' : 'bg-black'}`} />}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TypewriterEffect;
