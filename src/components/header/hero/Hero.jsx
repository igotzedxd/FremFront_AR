import { useState, useEffect, useRef } from "react";
import styles from "./hero.module.css";
import HeroHeading from "./HeroHeading";
import Buttons from "../../buttons/Buttons";

function Hero() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

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
    <div id="top" className={styles.hero} ref={heroRef}>
      <img className={styles.cover} src="/cover.jpg" alt="cover" />
      <div className={styles.inner}>
        <HeroHeading />
        <div className={styles.buttons}>
          <h2 className="heading">Bliv klogere på Fremtidens Frontend</h2>
          <Buttons />
          <Buttons pdf={true} />
        </div>
      </div>
      <div
        className={styles.lightSource}
        style={{
          top: cursorPosition.y,
          left: cursorPosition.x,
          transform: `translate(${cursorPosition.x - 2000}px, ${cursorPosition.y - 1000}px)`,
        }}
      />
    </div>
  );
}

export default Hero;
