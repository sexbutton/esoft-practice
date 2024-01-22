import styles from "./ActivePlayers.module.css";
import React from "react";

export function SwitcherTrueIcon({ onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="24"
      viewBox="0 0 36 24"
      fill="none"
      onClick={onClick}
      className={styles.svg}
    >
      <path
        opacity="0.5"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33 12C33 15.9 29.9912 19 26.2059 19H6.79412C3.00882 19 0 15.9 0 12C0 8.1 3.00882 5 6.79412 5H26.2059C29.9912 5 33 8.1 33 12Z"
        fill="#60C2AA"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26 22C31.5228 22 36 17.5228 36 12C36 6.47715 31.5228 2 26 2C20.4772 2 16 6.47715 16 12C16 17.5228 20.4772 22 26 22Z"
        fill="#3BA189"
      />
    </svg>
  );
}
