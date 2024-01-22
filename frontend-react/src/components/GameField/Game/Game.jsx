import styles from "./Game.module.css";
import { Cell } from "../../Cell/Cell";

export function Game() {
  return (
    <div className={styles.game}>
      <div className={styles.col}>
        <Cell state="Default"></Cell>
        <Cell state="Zero"></Cell>
        <Cell state="Default"></Cell>
      </div>
      <div className={styles.col}>
        <Cell state="Default"></Cell>
        <Cell state="Zero"></Cell>
        <Cell state="Cross"></Cell>
      </div>
      <div className={styles.col}>
        <Cell state="Cross"></Cell>
        <Cell state="Default"></Cell>
        <Cell state="Default"></Cell>
      </div>
    </div>
  );
}
