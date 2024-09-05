import Buttons from "../buttons/Buttons";
import styles from "./future.module.css";

function Future() {
  return (
    <div id="fremtid" className={styles.container}>
      <div className={styles.inner}>
        <h3>Fremtiden</h3>
        <p>
          I dag er det ganske muligt at bygge 3D-hjemmesider med integreret AR, men processen kan
          være krævende. Med tiden vil bedre browserunderstøttelse og yderligere udvikling gøre det
          langt mindre besværligt. I fremtiden kan vi forvente, at selv front-end udviklere vil
          kunne skabe spændende og interaktive AR-oplevelser uden omfattende baggrundsviden.
          Teknologien udvikler sig hurtigt, og vi er på vej mod en tid, hvor AR bliver en naturlig
          del af webudviklingen.
        </p>
        <span className={styles.buttons}>
          <Buttons top={true} />
          <Buttons pdf={true} />
        </span>
      </div>
    </div>
  );
}

export default Future;
