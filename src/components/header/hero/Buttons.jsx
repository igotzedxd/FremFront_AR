import styles from "./buttons.module.css";
import { FaRegFilePdf } from "react-icons/fa6";

function Buttons({ pdf }) {
  return pdf ? (
    <a href="#" className={`${styles.button} ${styles.pdf}`}>
      LÆS MERE
      <span className={styles.overlay}>
        <FaRegFilePdf size={26} />
        VIS PDF
      </span>
    </a>
  ) : (
    <a href="#about" className={`${styles.button} ${styles.btn}`}>
      UDFORSK
      <span className={styles.overlay}>SCROLL NED</span>
    </a>
  );
}

export default Buttons;
