import { useState } from "react";
import styles from "./showcase.module.css";
import { RiShoppingBag4Line } from "react-icons/ri";
import { CiStar } from "react-icons/ci";

function Showcase() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const hours = {
    monday: "Mandag: 8:00-17:30",
    tuesday: "Tirsdag: 8:00-17:30",
    wednesday: "Onsdag: 8:00-17:30",
    thursday: "Torsdag: 8:00-17:30",
    friday: "Fredag: 8:00-17:30",
    saturday: "Lørdag:",
    sunday: "Søndag:",
  };

  const icons = [
    {
      id: 1,
      price: 4,
      rating: 3,
      open: hours,
    },
    {
      id: 2,
      price: 3,
      rating: 5,
      open: hours,
    },
    {
      id: 3,
      price: 5,
      rating: 4,
      open: hours,
    },
    {
      id: 4,
      price: 2,
      rating: 2,
      open: hours,
    },
  ];

  return (
    <div className={styles.showcase}>
      <div className={styles.container}>
        <img className={styles.showcaseImg} src="/herning.png" alt="herning" />

        {icons.map((icon) => (
          <div
            onMouseEnter={() => setHoverIndex(icon.id)}
            onMouseLeave={() => setHoverIndex(null)}
            className={`${styles.storeIcon} ${styles["icon" + icon.id]}`}
            key={icon.id} // Use icon.id as the key
          >
            <span>
              <RiShoppingBag4Line className={styles.icon} />
            </span>
          </div>
        ))}

        {icons.map((icon) => (
          <div
            className={`${styles.store} ${
              (icon.id === hoverIndex ||
                (icon.id > 1 && icon.id === hoverIndex + 1) ||
                (hoverIndex === icons.length && icon.id === icons.length - 1)) &&
              styles.showStore
            } ${styles["store" + icon.id]}`}
            key={icon.id}
          >
            <div className={styles.storeInner}>
              <p className={styles.pricing}>
                Pris:
                <span
                  className={styles.rating}
                  style={
                    icon.price <= 3
                      ? { color: "green" }
                      : icon.price <= 4
                      ? { color: "orange" }
                      : icon.price <= 5
                      ? { color: "red" }
                      : {}
                  }
                >
                  <span
                    className={styles.ratingsOverlay}
                    style={{ width: 100 - (icon.price / 5) * 100 + "%" }}
                  >
                    {` `}$$$$$
                  </span>
                  {` `}$$$$$
                </span>
              </p>
              <p className={styles.ratings}>
                Anmeldelser:
                <span className={styles.rating}>
                  {` `}
                  {Array.from({ length: icon.rating }, (_, index) => (
                    <CiStar key={index} style={{ color: "gold", width: "12px" }} />
                  ))}
                </span>
              </p>
              <p className={styles.opens}>
                <span className={styles.open}>
                  {Object.entries(icon.open).map(([day, time]) => (
                    <p className={styles.day} key={day}>
                      {day === "saturday" || day === "sunday" ? (
                        <span>
                          {time} <p style={{ color: "#E33636" }}> Lukket</p>
                        </span>
                      ) : (
                        time
                      )}
                    </p>
                  ))}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showcase;
