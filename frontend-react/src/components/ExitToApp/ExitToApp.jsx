import styles from "./ExitToApp.module.css";
import cn from "classnames";
import { ExitToAppIcon } from "./ExitToAppIcon";

export function ExitToApp(props) {
  return (
    <div className={styles.main}>
      <ExitToAppIcon></ExitToAppIcon>
    </div>
  );
}
