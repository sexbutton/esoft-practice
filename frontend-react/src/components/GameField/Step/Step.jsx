import styles from "./Step.module.css";
import { UnionIcon26px } from "./UnionIcon26px";
import { ZeroIcon24px } from "./ZeroIcon24px";

export function Step() {
  return (
    <div className={styles.step}>
      <div className={styles.gamer}>
        <div className={styles.left}>
          <span>Ходит</span>
          <ZeroIcon24px></ZeroIcon24px>
          <span>Владлен Пупкин</span>
        </div>
      </div>
    </div>
  );
}
