import styles from "./ActivePlayers.module.css";
import switcherFalse from "./switcherFalse.svg";
import switcherTrue from "./switcherTrue.svg";
import { useState } from "react";

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
    <div>
      <h1>Активные игроки</h1>
      <div>
        Только свободные <img src={activeSwitch} onClick={SwitchClick} />
      </div>
    </div>
  );
}
