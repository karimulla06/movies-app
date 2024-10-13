import { Link, useLocation } from "react-router-dom";
import { Heart, House } from "@phosphor-icons/react";
import ThemeSwitch from "@/containers/theme-switch/ThemeSwitch";

import styles from "./nav-bar.module.css";
import { ROUTES } from "@/constants";

const NavBar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Movies App</h1>
      <div className={styles.buttons}>
        {location.pathname === ROUTES.HOME ? (
          <Link to={ROUTES.FAVORITES}>
            <Heart size={24} weight="duotone" color="red" />
          </Link>
        ) : (
          <Link to={ROUTES.HOME}>
            <House size={24} weight="duotone" />
          </Link>
        )}
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default NavBar;
