import styles from "./ButtonPrimary.module.css";
import cn from "classnames";
import { SendIcon24px } from "./SendIcon24px";
export function ButtonPrimary(props) {
  const stateButton = {
    M: {
      nonIcon: (
        <button {...props} className={cn(styles.main, styles.sizeM)}>
          {props.children}
        </button>
      ),
      onlyIcon: (
        <button
          {...props}
          className={cn(styles.main, styles.sizeM, styles.onlyIcon)}
        >
          <SendIcon24px></SendIcon24px>
        </button>
      ),
    },
    S: {
      nonIcon: (
        <button {...props} className={cn(styles.main, styles.sizeS)}>
          {props.children}
        </button>
      ),
    },
  };
  const component = stateButton[props.size][props.icon];
  return component;
}
