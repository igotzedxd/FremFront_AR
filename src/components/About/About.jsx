import { useState, useEffect, useRef } from "react";
import styles from "./about.module.css";

function About() {
  const aboutRef = useRef(null);
  const [showXr, setShowXr] = useState(false);
  const [showAr, setShowAr] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down"); // Track scroll direction

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: [0.25, 0.35, 0.5, 0.58],
    };

    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const intersectionRatio = entry.intersectionRatio;

        if (scrollDirection === "down") {
          // Downward scrolling (original logic)
          setShowXr(intersectionRatio >= 0.35);
          setShowAr(intersectionRatio >= 0.58 || (intersectionRatio >= 0.25 && showAr));
        } else {
          // Upward scrolling (reversed logic)
          setShowAr(intersectionRatio >= 0.35);
          setShowXr(intersectionRatio >= 0.58 || (intersectionRatio >= 0.25 && showXr));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, [scrollDirection, showAr, showXr]);

  return (
    <div ref={aboutRef} id="tech" className={styles.about}>
      <h2 className="heading" style={{ color: "whitesmoke", fontSize: "3.6rem" }}>
        Teknologier
      </h2>
      <div className={`${styles.xr} ${styles.sec} ${showXr && styles.animate}`}>
        <iframe
          className={styles.vid}
          src="https://www.youtube.com/embed/BlBj2KgHmoM"
          allowFullScreen
        ></iframe>
        <span>
          <h3 className="blackOps">WebXR</h3>
          <p>
            Three.js gør det muligt at skabe 3D-scener, mens WebXR tillader brug af kameraet til at
            spore miljøet og derved placere Three.js-canvaset præcist på de relevante elementer i
            kameraets visning.
          </p>
        </span>
      </div>

      <div className={`${styles.ar} ${styles.sec} ${showAr && styles.animate}`}>
        <span>
          <h3 className="blackOps">AR.JS</h3>
          <p>
            AR.js bruger markører i den virkelige verden til at placere 3D-objekter, ved brug af
            Three.js. En markør er et kvadratisk billede, ligner QR-kode, som AR.js kan genkende og
            bruge til at placere objekter.
          </p>
        </span>

        <iframe
          className={styles.vid}
          style={{ border: "none", borderRadius: "20px" }}
          src="https://www.youtube.com/embed/mbEDgplOqD4"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default About;
