import logo from "../../../src/logo.svg";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* nav center starts here */}
      <div className={styles["nav-center"]}>
        {/* navlink to connect home to logo */}
        <NavLink to="/">
          <img src={logo} alt="logo" className={styles.logo} />
        </NavLink>
      </div>
      {/* nav center end */}

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles["active-class"] : styles["home-link"]
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? styles["active-class"] : styles["about-link"]
        }
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
