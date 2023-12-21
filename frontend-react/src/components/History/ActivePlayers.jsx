import styles from "./ActivePlayers.module.css";
import switcherFalse from "./switcherFalse.svg";
import switcherTrue from "./switcherTrue.svg";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Status } from "../Status/Status"

export function ActivePlayers() {
  // Состояние для отслеживания текущего активного свитчера
  const [activeSwitch, setActiveSwitch] = useState(switcherFalse); // 'first' или 'second', в зависимости от вашей логики

  // Обработчик события при нажатии на первый свитчер
  const SwitchClick = () => {
    if (activeSwitch == switcherFalse) {
      setActiveSwitch(switcherTrue);
    } else {
      setActiveSwitch(switcherFalse);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}><h1>Активные игроки</h1>
      <div className={styles.switcher}>
        <label htmlFor="">Только свободные</label> 
        <img src={activeSwitch} onClick={SwitchClick} />
      </div>
      </div>
      <table>
        <tbody>
          <tr className={styles.row}>
            <td className={styles.col1}>Александр Игнат Анатольевич</td>
            <td className={styles.col2}>
              <Status type="activePlayers" status="true">Свободен</Status>
              <Button>Позвать играть</Button>
            </td>
          </tr>
          <tr className={styles.row}>
            <td className={styles.col1}>Александр Игнат Анатольевич</td>
            <td className={styles.col2}>
              <Status type="activePlayers" status="false">В игре</Status>
              <Button>Позвать играть</Button>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}
