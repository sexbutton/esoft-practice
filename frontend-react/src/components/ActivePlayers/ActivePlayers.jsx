import styles from "./ActivePlayers.module.css";
import { Status } from "../Status/Status";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { SwitcherFalseIcon } from "./switcherFalseIcon";
import { SwitcherTrueIcon } from "./switcherTrueIcon";
import { useState } from "react";

export function ActivePlayers() {
  const [isTrue, setIsTrue] = useState(false);

  // Создайте функцию-обработчик для изменения состояния
  const handleToggle = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.textHeader}>Активные игроки</span>
          <div className={styles.switcher}>
            <span>Только свободные</span>
            {isTrue ? (
              <SwitcherTrueIcon onClick={handleToggle}></SwitcherTrueIcon>
            ) : (
              <SwitcherFalseIcon onClick={handleToggle}></SwitcherFalseIcon>
            )}
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.row}>
            <span>Александров Игнат Анатолиевич</span>
            <div className={styles.right}>
              <Status size="M" state="ready"></Status>
              <ButtonPrimary size="M" icon="nonIcon">
                Позвать играть
              </ButtonPrimary>
            </div>
          </div>
          <div className={styles.row}>
            <span>Александров Игнат Анатолиевич</span>
            <div className={styles.right}>
              <Status size="M" state="inGame"></Status>
              <ButtonPrimary size="M" icon="nonIcon" disabled>
                Позвать играть
              </ButtonPrimary>
            </div>
          </div>
          <div className={styles.row}>
            <span>Александров Игнат Анатолиевич</span>
            <div className={styles.right}>
              <Status size="M" state="ready"></Status>
              <ButtonPrimary size="M" icon="nonIcon">
                Позвать играть
              </ButtonPrimary>
            </div>
          </div>
          <div className={styles.row}>
            <span>Александров Игнат Анатолиевич</span>
            <div className={styles.right}>
              <Status size="M" state="ready"></Status>
              <ButtonPrimary size="M" icon="nonIcon">
                Позвать играть
              </ButtonPrimary>
            </div>
          </div>
          <div className={styles.row}>
            <span>Александров Игнат Анатолиевич</span>
            <div className={styles.right}>
              <Status size="M" state="ready"></Status>
              <ButtonPrimary size="M" icon="nonIcon">
                Позвать играть
              </ButtonPrimary>
            </div>
          </div>
          <div className={styles.row}>
            <span>Александров Игнат Анатолиевич</span>
            <div className={styles.right}>
              <Status size="M" state="ready"></Status>
              <ButtonPrimary size="M" icon="nonIcon">
                Позвать играть
              </ButtonPrimary>
            </div>
          </div>
          <div className={styles.row}>
            <span>Александров Игнат Анатолиевич</span>
            <div className={styles.right}>
              <Status size="M" state="ready"></Status>
              <ButtonPrimary size="M" icon="nonIcon">
                Позвать играть
              </ButtonPrimary>
            </div>
          </div>
          <div className={styles.row}>
            <span>Александров Игнат Анатолиевич</span>
            <div className={styles.right}>
              <Status size="M" state="ready"></Status>
              <ButtonPrimary size="M" icon="nonIcon">
                Позвать играть
              </ButtonPrimary>
            </div>
          </div>
          <div className={styles.row}>
            <span>Александров Игнат Анатолиевич</span>
            <div className={styles.right}>
              <Status size="M" state="ready"></Status>
              <ButtonPrimary size="M" icon="nonIcon">
                Позвать играть
              </ButtonPrimary>
            </div>
          </div>
          <div className={styles.row}>
            <span>Александров Игнат Анатолиевич</span>
            <div className={styles.right}>
              <Status size="M" state="ready"></Status>
              <ButtonPrimary size="M" icon="nonIcon">
                Позвать играть
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
