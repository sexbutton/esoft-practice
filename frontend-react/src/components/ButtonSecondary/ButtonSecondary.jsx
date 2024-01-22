import React from "react";
import styles from "./ButtonSecondary.module.css";
import cn from "classnames";
import BlockIcon24px from "./BlockIcon24px";
import { BlockIcon20px } from "./BlockIcon20px";

export function ButtonSecondary(props) {
  const stateButton = {
    Medium: {
      No: (
        <button {...props} className={cn(styles.main, styles.sizeMedium)}>
          {props.children}
        </button>
      ),
    },
    MSmall: {
      Yes: (
        <button {...props} className={cn(styles.main, styles.sizeMSmall)}>
          <BlockIcon24px />
          {props.children}
        </button>
      ),
      No: (
        <button {...props} className={cn(styles.main, styles.sizeMSmall)}>
          {props.children}
        </button>
      ),
    },
    SSmall: {
      Yes: (
        <button
          {...props}
          className={cn(styles.main, styles.sizeSSmall, styles.iconYes)}
        >
          <BlockIcon20px />
          {props.children}
        </button>
      ),
      No: (
        <button {...props} className={cn(styles.main, styles.sizeSSmall)}>
          {props.children}
        </button>
      ),
    },
  };
  const component = stateButton[props.size][props.icon];
  return component;
}
