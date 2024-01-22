import styles from "./ActivePlayers.module.css";
import React from "react";

export function SwitcherFalseIcon({ onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="24"
      viewBox="0 0 37 24"
      fill="none"
      onClick={onClick}
      className={styles.svg}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.7059 19H10.2941C6.50882 19 3.5 15.9 3.5 12C3.5 8.1 6.50882 5 10.2941 5H29.7059C33.4912 5 36.5 8.1 36.5 12C36.5 15.9 33.4912 19 29.7059 19Z"
        fill="#DCDCDF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 22C16.0228 22 20.5 17.5228 20.5 12C20.5 6.47715 16.0228 2 10.5 2C4.97715 2 0.5 6.47715 0.5 12C0.5 17.5228 4.97715 22 10.5 22Z"
        fill="#F7F7F7"
      />
      <path
        d="M20 12C20 17.2467 15.7467 21.5 10.5 21.5C5.25329 21.5 1 17.2467 1 12C1 6.75329 5.25329 2.5 10.5 2.5C15.7467 2.5 20 6.75329 20 12Z"
        stroke="#898993"
        stroke-opacity="0.2"
      />
    </svg>
  );
}
