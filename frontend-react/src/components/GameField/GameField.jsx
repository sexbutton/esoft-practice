import styles from "./GameField.module.css";
import { Gamers } from "./Gamers/Gamers";
import { Timer } from "./Timer/Timer";
import { Chat } from "./Chat/Chat";
import { Game } from "./Game/Game";
import { Step } from "./Step/Step";

export function GameField() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Gamers></Gamers>
      </div>
      <div className={styles.container}>
        <Timer></Timer>
        <Game></Game>
        <Step></Step>
      </div>
      <div className={styles.container}>
        <Chat></Chat>
      </div>
    </div>
  );
}
