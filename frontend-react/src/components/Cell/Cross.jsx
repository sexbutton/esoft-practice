import React from "react";
import styles from "./Cell.module.css";

export function Cross(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="133"
      height="133"
      viewBox="0 0 155 163"
      fill="none"
      className={styles.svg}
    >
      <g filter="url(#filter0_di_9_267)">
        <path
          d="M138.194 15.5872C134.375 11.5624 128.206 11.5624 124.386 15.5872L79.4018 62.8971C77.8239 64.5565 75.1776 64.5552 73.6014 62.8941L28.6137 15.484C24.7946 11.4592 18.6252 11.4592 14.806 15.484C10.9869 19.5088 10.9869 26.0104 14.806 30.0352L60.0797 77.7467C61.5443 79.2901 61.5443 81.7099 60.0797 83.2533L14.806 130.965C10.9869 134.99 10.9869 141.491 14.806 145.516C18.6252 149.541 24.7946 149.541 28.6137 145.516L73.5985 98.109C75.1758 96.4468 77.8243 96.4468 79.4016 98.109L124.386 145.516C128.206 149.541 134.375 149.541 138.194 145.516C142.013 141.491 142.013 134.99 138.194 130.965L92.9204 83.2533C91.4559 81.7099 91.4559 79.2901 92.9204 77.7467L138.194 30.0352C141.915 26.1136 141.915 19.5088 138.194 15.5872Z"
          fill="#60C2AA"
        />
        <path
          d="M138.448 15.3463C134.491 11.176 128.09 11.176 124.132 15.3463L79.1481 62.6559C77.7083 64.1702 75.2936 64.1689 73.8553 62.6532L28.8676 15.2431C24.9105 11.0728 18.5093 11.0728 14.5521 15.2431C10.6048 19.4029 10.6048 26.1163 14.5521 30.2761L59.8258 77.9876C61.1622 79.396 61.1622 81.6041 59.8258 83.0124L14.5521 130.724C10.6048 134.884 10.6048 141.597 14.5521 145.757C18.5093 149.927 24.9105 149.927 28.8676 145.757L73.8524 98.35C75.2916 96.8332 77.7085 96.8332 79.1478 98.35L124.132 145.757C128.09 149.927 134.491 149.927 138.448 145.757C142.395 141.597 142.395 134.884 138.448 130.724L93.1743 83.0124C91.8379 81.6041 91.8379 79.396 93.1743 77.9876L138.448 30.2761C142.297 26.2195 142.297 19.4029 138.448 15.3463Z"
          stroke="white"
          stroke-width="0.7"
        />
      </g>
      <defs>
        <filter
          id="filter0_di_9_267"
          x="0.241699"
          y="0.765381"
          width="154.517"
          height="161.469"
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
            result="effect1_dropShadow_9_267"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_267"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.311889 0 0 0 0 0.612384 0 0 0 0 0.54168 0 0 0 0.6 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_9_267"
          />
        </filter>
      </defs>
    </svg>
  );
}
