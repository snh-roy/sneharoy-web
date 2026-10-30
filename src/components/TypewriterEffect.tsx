import { useState, useEffect } from "react";

const staticPrefix = "Hi I'm Sneha!";
const phrases = [
  { text: "Do you wonder...", pause: 2000, shouldDelete: true },
  { text: "A future where doctors never have to say,\n'I'm sorry. There is nothing else I can do.'", pause: 3000, shouldDelete: true },
  { text: "or...", pause: 2000, shouldDelete: true },
  { text: "Do you wish to be alive when we finally find aliens??", pause: 3000, shouldDelete: true },
  { text: "Anyways,", pause: 2000, shouldDelete: true },
  { text: "I love optimistic science and tech stories.", pause: 0, shouldDelete: false },
];

interface TypewriterEffectProps {
  isHomePage?: boolean;
}

const TypewriterEffect = ({ isHomePage = true }: TypewriterEffectProps) => {
  const [isFontReady, setIsFontReady] = useState(false);
  // Always start empty if on Home Page, otherwise start full
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [prefixText, setPrefixText] = useState(isHomePage ? "" : staticPrefix);
  const [displayText, setDisplayText] = useState(isHomePage ? "" : phrases[phrases.length - 1].text);
  const [isPrefixDone, setIsPrefixDone] = useState(!isHomePage);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(!isHomePage);

  useEffect(() => {
    let cancelled = false;
    // Load the greeting's font before typing so its first letters don't use a fallback.
    document.fonts.load('16px "Jersey 10"', staticPrefix).then(
      () => { if (!cancelled) setIsFontReady(true); },
      () => { if (!cancelled) setIsFontReady(true); },
    );
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    // If we are NOT on the home page, do absolutely nothing (stay static)
    if (!isHomePage || !isFontReady) return;

    // Phase 1: Type the greeting in about 1.5 seconds, then pause.
    if (!isPrefixDone) {
      const timeout = setTimeout(() => {
        if (prefixText.length < staticPrefix.length) {
          setPrefixText(staticPrefix.slice(0, prefixText.length + 1));
        } else {
          setIsPrefixDone(true);
        }
      }, prefixText.length < staticPrefix.length ? 1500 / staticPrefix.length : 2000);
      return () => clearTimeout(timeout);
    }

    if (isFinished) return;

    // Phase 2: Sequential Story
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (!isDeleting && displayText === currentPhrase.text) {
      const timeout = setTimeout(() => {
        if (currentPhrase.shouldDelete) {
          setIsDeleting(true);
        } else {
          setIsFinished(true);
        }
      }, currentPhrase.pause);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.text.length) {
          setDisplayText(currentPhrase.text.slice(0, displayText.length + 1));
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
  }, [prefixText, isPrefixDone, displayText, isDeleting, currentPhraseIndex, isFinished, isHomePage, isFontReady]);

  const textColorClass = isHomePage ? "text-white" : "text-black";

  return (
    <div className="text-left flex flex-col gap-0.5 sm:gap-1 md:gap-1.5 max-w-[calc(100vw-80px)] sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      {/* Introduction line */}
      <h1
        className={`font-typewriter font-normal not-italic text-2xl sm:text-3xl md:text-4xl lg:text-7xl tracking-wide leading-tight ${textColorClass}`}
        style={{ fontFamily: '"Jersey 10", "Courier New", monospace', fontSynthesis: "none" }}
      >
        <span style={{ font: "inherit" }}>{prefixText}</span>
        {isHomePage && !isPrefixDone && (
          <span className={`typewriter-cursor w-[2px] h-[0.9em] ml-1 sm:ml-2 ${isHomePage ? 'bg-white' : 'bg-black'}`} />
        )}
      </h1>
      
      {isHomePage && (
        <div className={`font-typewriter text-sm sm:text-base md:text-lg lg:text-2xl tracking-wide min-h-[1.5em] whitespace-pre-wrap opacity-80 leading-snug ${textColorClass}`}>
          {isPrefixDone && (
            <>
              {displayText}
              {!isFinished && <span className={`typewriter-cursor w-[2px] h-[0.9em] ml-1 ${isHomePage ? 'bg-white' : 'bg-black'}`} />}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TypewriterEffect;
