import { useState, useEffect, useRef } from "react";
import styles from "./hero.module.css";
import HeroHeading from "./HeroHeading";
import Buttons from "../../buttons/Buttons";

function Hero() {
  const heroRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setX(x);
        setY(y);
      }
    };

    const heroElement = heroRef.current;
    heroElement && heroElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      heroElement && heroElement.removeEventListener("mousemove", handleMouseMove);
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
          top: y,
          left: x,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}

export default Hero;
