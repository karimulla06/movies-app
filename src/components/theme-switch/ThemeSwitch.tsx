import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import styles from "./theme-switch.module.css";

const THEME_KEY = "theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

type Theme = "light" | "dark";

const getPreferredTheme = (): Theme => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme == null) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? DARK_THEME
      : LIGHT_THEME;
  }
  return savedTheme == DARK_THEME ? DARK_THEME : LIGHT_THEME;
};

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
  };

  return (
    <button
      onClick={handleClick}
      className={styles.button}
      aria-label="Toggle theme"
    >
      {theme === LIGHT_THEME ? (
        <Moon size={21} />
      ) : (
        <Sun size={21} color="#fff" />
      )}
    </button>
  );
};
