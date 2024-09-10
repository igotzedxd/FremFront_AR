import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <i>&copy; FremFront </i>
      </div>
    </footer>
  );
}

export default Footer;
