import styles from "./Auth.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import dog from "./dog.png";

export function Auth() {
  return (
    <div className={styles.container}>
      <img src={dog} alt="" />
      <h1>Войдите в игру</h1>
      <div className={styles.inputs}>
        <Input valid="" placeholder="Логин" type="input"></Input>
        <Input valid="" placeholder="Пароль" type="password"></Input>
      </div>
      <Button>Войти</Button>
    </div>
  );
}
