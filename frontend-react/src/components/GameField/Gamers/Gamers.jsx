import styles from "./Gamers.module.css";
import { UnionIcon26px } from "./UnionIcon26px";
import { ZeroIcon24px } from "./ZeroIcon24px";

export function Gamers() {
  return (
    <div className={styles.gamers}>
      <span className={styles.textGamers}>Игроки</span>
      <div className={styles.list}>
        <div className={styles.gamer}>
          <ZeroIcon24px></ZeroIcon24px>
          <div className={styles.text}>
            <span>Пупкин Владлен Игоревич</span>
            <span>63% побед</span>
          </div>
        </div>
        <div className={styles.gamer}>
          <UnionIcon26px></UnionIcon26px>
          <div className={styles.text}>
            <span>Плюшкина Екатерина Викторовна</span>
            <span>23% побед</span>
          </div>
        </div>
      </div>
    </div>
  );
}
