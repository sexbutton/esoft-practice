import styles from "./Auth.module.css";
import { Input } from "../Input/Input";
import { Status } from "../Status/Status";
import dog from "./dog.png";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { ButtonSecondary } from "../ButtonSecondary/ButtonSecondary";
import { Tab } from "../Tab/Tab";
import { Cell } from "../Cell/Cell";
import { Bubble } from "../Bubble/Bubble";
import { ExitToApp } from "../ExitToApp/ExitToApp";
import { CellText } from "../CellText/CellText";
import { Header } from "../Header/Header";

export function Auth() {
  return (
    <div className={styles.container}>
      <Header></Header>
    </div>
  );
}
