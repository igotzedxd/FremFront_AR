import styles from "./udvikling.module.css";
function Udvikling() {
  return (
    <div id="web" className={styles.container}>
      <div className={styles.inner}>
        <div className={`${styles.content} ${styles.content1}`}>
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
        <div className={`${styles.content} ${styles.content2}`}>
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
