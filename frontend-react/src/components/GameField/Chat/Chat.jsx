import styles from "./Chat.module.css";
import { Bubble } from "../../Bubble/Bubble";
import { Input } from "../../Input/Input";
import { ButtonPrimary } from "../../ButtonPrimary/ButtonPrimary";

export function Chat() {
  return (
    <div className={styles.main}>
      <div className={styles.chat}>
        <Bubble gamer="Плюшкина Екатерина" time="13:40" state="Left">
          Ну что, готовься к поражению!!1
        </Bubble>
        <div className={styles.row}>
          <Bubble gamer="Пупкин Владлен" time="13:41" state="Right">
            Надо было играть за крестики. Розовый — мой не самый счастливый цвет
          </Bubble>
          <Bubble gamer="Пупкин Владлен" time="13:45" state="Right">
            Я туплю…
          </Bubble>
        </div>
        <Bubble gamer="Плюшкина Екатерина" time="13:47" state="Left">
          Отойду пока кофе попить, напиши в тг как сходишь
        </Bubble>
      </div>
      <div className={styles.chatInput}>
        <Input placeholder="Сообщение..."></Input>
        <ButtonPrimary size="M" icon="onlyIcon"></ButtonPrimary>
      </div>
    </div>
  );
}
