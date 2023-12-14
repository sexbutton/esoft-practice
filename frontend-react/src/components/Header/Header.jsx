import styles from "./Header.module.css";
import logo from "./logo.svg";
import exit from "./exit.svg";

export function Header() {
  return (
    <div className={styles.container}>
      <img src={logo} />
      <div className={styles.actionBar}>
        <span>Игровое поле</span>
        <span className={styles.active}>Рейтинг</span>
        <span>Активные игроки</span>
        <span>История игр</span>
        <span>Список игроков</span>
      </div>
      <img src={exit} />
    </div>
  );
}
