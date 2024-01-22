import styles from "./HistoryGames.module.css";
import React from "react";

export function CrossIcon16px() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="url(#paint0_radial_4979_1415)"
        stroke-width="4"
      />
      <defs>
        <radialGradient
          id="paint0_radial_4979_1415"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10 10) rotate(90) scale(8)"
        >
          <stop stop-color="#EB0057" />
          <stop offset="1" stop-color="#E38BAC" />
        </radialGradient>
      </defs>
    </svg>
  );
}
