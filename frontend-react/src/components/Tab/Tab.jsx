import styles from "./Tab.module.css";
import cn from "classnames";

export function Tab(props) {
  return (
    <div
      className={cn(styles.main, {
        [styles.activeTab]: props.state == "Active",
      })}
    >
      {props.children}
    </div>
  );
}
