import { NavLink } from "react-router-dom";
import styles from "./error.module.css";

const Error = () => {
  return (
    <section className={styles["error-page"]}>
      <h2 className={styles["error-title"]}>404 — Oops! It is a dead end..</h2>
      <NavLink to="/" className={styles["go-home-btn"]}>
        Go Home
      </NavLink>
    </section>
  );
};

export default Error;
