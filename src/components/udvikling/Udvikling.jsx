import { useState, useEffect, useRef } from "react";
import styles from "./udvikling.module.css";

function Udvikling() {
  const observerRef = useRef(null);
  const [showContainer1, setShowContainer1] = useState(false);
  const [showContainer2, setShowContainer2] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            setShowContainer1(true);
            setTimeout(() => {
              setShowContainer2(true);
            }, 300);
          } else if (entry.intersectionRatio < 0.2) {
            setShowContainer1(false);
            setShowContainer2(false);
          }
        });
      },
      { threshold: [0.2, 0.3] } // Define multiple thresholds for 20% and 30%
    );

    observerRef.current && observer.observe(observerRef.current);

    return () => {
      observerRef.current && observer.unobserve(observerRef.current);
    };
  }, []);

  return (
    <div id="web" className={styles.container}>
      <div ref={observerRef} className={styles.inner}>
        <div className={`${styles.content} ${styles.content1} ${showContainer1 && styles.appear}`}>
          <h3 className="blackOps">Web Udvikling</h3>
          <p>
            Der er ingen tvivl om, at hjemmesider vil udvikle sig med (AR). Brugerinteraktionen vil
            blive større end nogensinde før, hvor digitale elementer kan integreres direkte i vores
            fysiske verden. AR vil gøre det muligt for brugere at interagere med hjemmesider på en
            helt ny måde – ikke kun gennem deres skærme, men også ved hjælp af AR-briller og
            smartphones. Fremtiden for webudvikling med AR åbner dørene for mere personlige og
            dynamiske oplevelser, hvor brugerne kan få skræddersyet information og indhold baseret
            på deres omgivelser og behov.
          </p>
        </div>
        <div className={styles.line}></div>
        <div className={`${styles.content} ${styles.content2} ${showContainer2 && styles.moveIn}`}>
          <p>Større brugerinteraktion</p>
          <p>Integration med AR-briller og smartphones</p>
          <p>Personlige oplevelser baseret på brugerens omgivelser</p>
          <p>Dynamiske, skræddersyede weboplevelser</p>
        </div>
      </div>
    </div>
  );
}

export default Udvikling;
