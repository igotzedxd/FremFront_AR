import Nav from "./nav/Nav";
import Hero from "./hero/Hero";
import styles from "./header.module.css";

function Header({ activeIndex, setActiveIndex }) {
  return (
    <div className={styles.container}>
      <Nav activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Hero />
    </div>
  );
}

export default Header;
