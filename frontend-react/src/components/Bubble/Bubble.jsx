import styles from "./Bubble.module.css";
import cn from "classnames";

export function Bubble(props) {
  const bubbleState = {
    Left: (
      <div className={cn(styles.main, styles.left)}>
        <div className={styles.nameAndTime}>
          <span className={cn(styles.name, styles.left)}>{props.gamer}</span>
          <span className={styles.time}>{props.time}</span>
        </div>
        <span className={styles.message}>{props.children}</span>
      </div>
    ),
    Right: (
      <div className={cn(styles.main, styles.right)}>
        <div className={styles.nameAndTime}>
          <span className={cn(styles.name, styles.right)}>{props.gamer}</span>
          <span className={styles.time}>{props.time}</span>
        </div>
        <span className={styles.message}>{props.children}</span>
      </div>
    ),
  };

  return bubbleState[props.state];
}
