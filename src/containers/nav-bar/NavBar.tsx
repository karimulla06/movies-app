import { Link, useLocation } from "react-router-dom";
import { Heart, House } from "@phosphor-icons/react";
import { ROUTES, translation_keys } from "@/constants";

import styles from "./nav-bar.module.css";
import ThemeSwitch from "@/components/theme-switch/ThemeSwitch";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{translation_keys.app_name}</h1>
      <div className={styles.buttons}>
        {location.pathname === ROUTES.HOME ? (
          <Link to={ROUTES.FAVORITES} aria-label="Go to favorites">
            <Heart size={24} weight="duotone" color="red" />
          </Link>
        ) : (
          <Link to={ROUTES.HOME} aria-label="Go to home">
            <House size={24} weight="duotone" />
          </Link>
        )}
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
