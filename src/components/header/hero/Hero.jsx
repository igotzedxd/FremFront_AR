import React, { useState, useEffect, useRef } from "react";
import styles from "./hero.module.css";
import HeroHeading from "./HeroHeading";

function Hero() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null); // Reference to the .hero container
  const lines = [8, 7]; // Number of lines: 6 vertical, 7 horizontal

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCursorPosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className={styles.hero} ref={heroRef}>
      {/* <div className={styles.inner}>
        <div className={styles.vContainer}>
          {Array.from({ length: lines[0] }, (_, index) => (
            <span
              key={index}
              className={styles.line}
              style={{ top: (index + 1) * (100 / lines[0]) + "%" }}
            ></span>
          ))}
        </div>
        <div className={styles.hContainer}>
          {Array.from({ length: lines[1] }, (_, index) => (
            <span
              key={index}
              className={styles.line}
              style={{ left: (index + 1) * (100 / lines[1]) + "%" }}
            ></span>
          ))}
        </div>
        <div
          className={styles.lightSource}
          style={{
            top: cursorPosition.y - 100 + "px", // Adjusted to place light source in hero
            left: cursorPosition.x - 100 + "px", // Adjusted to place light source in hero
          }}
        ></div>
      </div> */}
      <HeroHeading />
    </div>
  );
}

export default Hero;
