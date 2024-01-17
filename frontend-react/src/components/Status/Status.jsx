import styles from "./Status.module.css";
import cn from "classnames";

export function Status(props) {
  const stateComponent = {
    M: {
      ready: (
        <div className={cn(styles.container, styles.sizeM, styles.ready)}>
          Свободен
        </div>
      ),
      blocked: (
        <div className={cn(styles.container, styles.sizeM, styles.blocked)}>
          Заблокирован
        </div>
      ),
      inGame: (
        <div className={cn(styles.container, styles.sizeM, styles.inGame)}>
          Играет
        </div>
      ),
      outOfTheGame: (
        <div
          className={cn(styles.container, styles.sizeM, styles.outOfTheGame)}
        >
          Вне игры
        </div>
      ),
    },
    S: {
      ready: (
        <div className={cn(styles.container, styles.sizeS, styles.blocked)}>
          Заблокирован
        </div>
      ),
      blocked: (
        <div className={cn(styles.container, styles.sizeS, styles.blocked)}>
          Заблокирован
        </div>
      ),
      inGame: (
        <div className={cn(styles.container, styles.sizeS, styles.inGame)}>
          Играет
        </div>
      ),
      outOfTheGame: (
        <div
          className={cn(styles.container, styles.sizeS, styles.outOfTheGame)}
        >
          Вне игры
        </div>
      ),
    },
  };
  const component = stateComponent[props.size][props.state] || null;
  return component;
}
