import { useState, useEffect } from "react";
import styles from "./heroheading.module.css";

function HeroHeading() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // New state for pause
  const text = ["Augmented Reality", "Fremtidens Frontend"];

  useEffect(() => {
    const currentWord = text[index];
    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false); // Reset pause
          setIsDeleting(true); // Start deleting after pause
        } else {
          isDeleting
            ? charIndex > 0
              ? setCharIndex(charIndex - 1) // Delete a character
              : (setIsDeleting(false), setIndex((prevIndex) => (prevIndex + 1) % text.length)) // Move to next word
            : charIndex < currentWord.length
            ? setCharIndex(charIndex + 1) // Type a character
            : setIsPaused(true); // Pause before deleting

          setDisplayedText(currentWord.substring(0, charIndex));
        }
      },
      isPaused ? 1000 : isDeleting ? 50 : 30
    ); // 2-second pause, 50ms delete, 150ms type

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, isPaused, text]);

  return (
    <div className={styles.heading}>
      <h1 className="heading" style={index === 1 ? { color: "#E33636" } : {}}>
        {displayedText}
      </h1>
    </div>
  );
}

export default HeroHeading;
