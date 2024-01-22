import styles from "./HistoryGames.module.css";
import { CellText } from "../CellText/CellText";
import { Row } from "./Row";
export function HistoryGames() {
  return (
    <div className={styles.body}>
      <span className={styles.headerText}>История игр</span>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <CellText header="Yes">Игроки</CellText>
          <CellText header="Yes">Дата</CellText>
          <CellText header="Yes">Время игры</CellText>
        </thead>
        <Row winner="zero"></Row>
      </table>
    </div>
  );
}
