import styles from "./Input.module.css";
import cn from "classnames";

export function Input(props) {
  return (
    <div className={styles.container}>
      <input
        className={cn(styles.input, {
          [styles.borderFalse]: props.valid == "false",
        })}
        type={props.type}
        placeholder={props.placeholder}
      />
      <span
        className={cn(styles.status, {
          [styles.statusFalse]: props.valid == "false",
        })}
      >
        {"Неверный " + props.placeholder}
      </span>
    </div>
  );
}
