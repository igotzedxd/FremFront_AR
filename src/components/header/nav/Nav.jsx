import { useState, useRef, useEffect } from "react";
import styles from "./nav.module.css";

function Nav() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

  const links = ["HOME", "ABOUT", "HOME", "ABOUT"];

  useEffect(() => {
    const activeLink = navRef.current.children[activeIndex] || null;
    setIndicatorStyle(
      activeLink
        ? {
            left: activeLink.offsetLeft + activeLink.offsetWidth * 0.15,
            width: activeLink.offsetWidth * 0.7,
          }
        : {}
    );
  }, [activeIndex]);

  const handleMouseEvent = (index, type) => {
    const link =
      type === "Enter" ? navRef.current.children[index] : navRef.current.children[activeIndex];
    setIndicatorStyle({
      left: link.offsetLeft + link.offsetWidth * 0.15,
      width: link.offsetWidth * 0.7,
    });
  };

  return (
    <div className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
          <h2>AR</h2>
        </div>
        <div className={styles.links} ref={navRef}>
          {links.map((link, index) => (
            <div
              key={index}
              className={`${styles.link} ${index === activeIndex && styles.active}`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => {
                setHoverIndex(index), handleMouseEvent(index, "Enter");
              }}
              onMouseLeave={() => {
                setHoverIndex(null), handleMouseEvent(index, "Leave");
              }}
              style={
                index === hoverIndex
                  ? { transform: "translateY(-2px)", transition: "transform 0.2s ease" }
                  : {}
              }
            >
              <p>{link}</p>
            </div>
          ))}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              height: "2px",
              backgroundColor: "red",
              transition: "left 0.5s ease-out, width 0.2s ease",
              ...indicatorStyle,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
