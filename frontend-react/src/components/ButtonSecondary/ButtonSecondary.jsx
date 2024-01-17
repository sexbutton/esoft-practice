import styles from "./ButtonSecondary.module.css";
import cn from "classnames";

export function ButtonPrimary(props) {
  const stateButton = {
    M: {
      nonIcon: (
        <button {...props} className={cn(styles.main, styles.sizeM)}>
          {props.children}
        </button>
      ),
      onlyIcon: (
        <button {...props} className={cn(styles.main, styles.sizeM)}>
          {props.children}
        </button>
      ),
    },
    S: {
      nonIcon: (
        <button {...props} className={cn(styles.main, styles.sizeS)}>
          {props.children}
        </button>
      ),
      onlyIcon: (
        <button {...props} className={cn(styles.main, styles.sizeS)}>
          {props.children}
        </button>
      ),
    },
  };
  const component = stateButton[props.size][props.icon];
  return component;
}
