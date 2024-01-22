import React from "react";
import styles from "./Cell.module.css";

export function Zero(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="133"
      height="133"
      viewBox="0 0 177 177"
      fill="none"
      className={styles.svg}
    >
      <g filter="url(#filter0_d_9_251)">
        <circle
          cx="87.5"
          cy="87.5"
          r="66.5"
          stroke="url(#paint0_radial_9_251)"
          stroke-width="20"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_9_251"
          x="0"
          y="0"
          width="177"
          height="177"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.420718 0 0 0 0 0.290978 0 0 0 0 0.338156 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_251"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_251"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_9_251"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(87.5 87.5) rotate(90) scale(66.5)"
        >
          <stop stop-color="#EB0057" />
          <stop offset="1" stop-color="#E38BAC" />
        </radialGradient>
      </defs>
    </svg>
  );
}
