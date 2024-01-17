import styles from "./Auth.module.css";
import { Input } from "../Input/Input";
import { Status } from "../Status/Status";
import dog from "./dog.png";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";

export function Auth() {
  return (
    <div className={styles.container}>
      <ButtonPrimary disabled size="S" icon="nonIcon">
        Отправить
      </ButtonPrimary>
    </div>
  );
}
