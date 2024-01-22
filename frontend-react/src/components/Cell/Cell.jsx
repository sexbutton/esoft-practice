import styles from "./Cell.module.css";
import cn from "classnames";
import { Zero } from "./Zero";
import { Cross } from "./Cross";

export function Cell(props) {
  const stateCell = {
    Zero: (
      <div className={cn(styles.main, styles.zeroOrCross)}>
        <Zero></Zero>
      </div>
    ),
    Cross: (
      <div className={cn(styles.main, styles.zeroOrCross)}>
        <Cross></Cross>
      </div>
    ),
    Default: <div className={cn(styles.main, styles.default)}></div>,
  };

  return stateCell[props.state];
}
