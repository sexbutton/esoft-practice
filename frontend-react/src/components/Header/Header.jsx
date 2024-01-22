import styles from "./Header.module.css";
import { Tab } from "../Tab/Tab";
import { ExitToApp } from "../ExitToApp/ExitToApp";
import { LogoIcon } from "./LogoIcon";

export function Header() {
  return (
    <div className={styles.main}>
      <LogoIcon></LogoIcon>
      <div className={styles.links}>
        <Tab state="Active">Игровое поле</Tab>
        <Tab>Рейтинг</Tab>
        <Tab>Активные игроки</Tab>
        <Tab>История игр</Tab>
        <Tab>Список игроков</Tab>
      </div>
      <ExitToApp></ExitToApp>
    </div>
  );
}
