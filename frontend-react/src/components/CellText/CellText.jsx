import styles from "./CellText.module.css";
import cn from "classnames";

export function CellText(props) {
  const stateCellText = {
    Yes: <div className={cn(styles.main, styles.Header)}>{props.children}</div>,
    No: (
      <div className={cn(styles.main, styles.noHeader)}>{props.children}</div>
    ),
  };
  return stateCellText[props.header];
}
