import { useLayoutEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";
import IconButton from "@/components/icon-button/IconButton";
import { THEME_KEY, DARK_THEME, LIGHT_THEME } from "@/constants";

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

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(getPreferredTheme);

  useLayoutEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
  };

  return (
    <IconButton onClick={handleClick}>
      {theme === LIGHT_THEME ? (
        <Moon size={21} weight="duotone" />
      ) : (
        <Sun size={21} color="#fff" weight="duotone" />
      )}
    </IconButton>
  );
};

export default ThemeSwitch;
