import Nav from "./nav/Nav";
import Hero from "./hero/Hero";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <Nav />
      <Hero />
    </div>
  );
}

export default Header;
