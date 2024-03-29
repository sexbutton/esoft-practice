import styles from "./Gamers.module.css";
import React from "react";

export function ZeroIcon24px() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <circle
        cx="15"
        cy="15"
        r="12"
        stroke="url(#paint0_radial_16_161)"
        stroke-width="6"
      />
      <defs>
        <radialGradient
          id="paint0_radial_16_161"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15 15) rotate(90) scale(12)"
        >
          <stop stop-color="#EB0057" />
          <stop offset="1" stop-color="#E38BAC" />
        </radialGradient>
      </defs>
    </svg>
  );
}
