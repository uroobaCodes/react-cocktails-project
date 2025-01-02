import styles from "./cocktail.module.css";
import { NavLink } from "react-router-dom";
const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <section className={styles.cocktail}>
      <div className={styles["image-container"]}>
        <img src={image} alt={name} />
      </div>
      <div className={styles["cocktail-footer"]}>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <NavLink className={styles["details-btn"]} to={`/cocktail/${id}`}>
          Details
        </NavLink>
      </div>
    </section>
  );
};

export default Cocktail;
