import styles from "./HistoryGames.module.css";
import { ZeroIcon16px } from "./ZeroIcon16px";
import { CrossIcon16px } from "./CrossIcon16px";
import winner from "./winner.png";

export function Row(props) {
  const stateRow = {
    cross: (
      <div className={styles.row}>
        <div className={styles.cell}>
          <div className={styles.person}>
            <ZeroIcon16px></ZeroIcon16px>
            <span>Терещенко У. Р.</span>
          </div>
          <span className={styles.vs}>против</span>
          <div className={styles.person}>
            <CrossIcon16px></CrossIcon16px>
            <span>Многогрешный П. В.</span>
            <img src={winner} alt="" />
          </div>
        </div>
        <div className={styles.cell}>
          <span>12 февраля 2022</span>
        </div>
        <div className={styles.cell}>
          <span>43 мин 13 сек</span>
        </div>
      </div>
    ),
    zero: (
      <div className={styles.row}>
        <div className={styles.cell}>
          <div className={styles.person}>
            <ZeroIcon16px></ZeroIcon16px>
            <span>Терещенко У. Р.</span>
            <img src="winner.png" alt="" />
          </div>
          <span className={styles.vs}>против</span>
          <div className={styles.person}>
            <CrossIcon16px></CrossIcon16px>
            <span>Многогрешный П. В.</span>
          </div>
        </div>
        <div className={styles.cell}>
          <span>12 февраля 2022</span>
        </div>
        <div className={styles.cell}>
          <span>43 мин 13 сек</span>
        </div>
      </div>
    ),
  };
  return stateRow[props.winner];
}
