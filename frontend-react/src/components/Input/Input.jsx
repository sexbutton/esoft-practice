import styles from "./Input.module.css";
import cn from "classnames";

export function Input(props) {
  return (
    <div className={styles.container}>
      <input
        className={cn(styles.input, {
          [styles.error]: props.state == "error",
        })}
        placeholder={props.placeholder}
      />
      {props.state === "error" && (
        <span className={cn(styles.status, styles.span)}>
          {"Неверный " + props.placeholder}
        </span>
      )}
    </div>
  );
}
