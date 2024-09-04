import styles from "./about.module.css";

function About() {
  return (
    <div id="about" className={styles.about}>
      <div className={`${styles.xr} ${styles.sec}`}>
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
      <div className={`${styles.ar} ${styles.sec}`}>
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
