import React from "react";

import styles from "./icon-button.module.css";

type IconButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const IconButton = ({ children, onClick }: IconButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
