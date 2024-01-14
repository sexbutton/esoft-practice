import styles from "./RatingTable.module.css";
import cn from "classnames";

export function RatingTable() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Рейтинг игроков</h1>
      <table>
        <thead>
          <tr className={styles.row}>
            <th className={cn(styles.col1, styles.th)}>ФИО</th>
            <th className={cn(styles.col2, styles.th)}>Всего игр</th>
            <th className={cn(styles.col3, styles.th)}>Победы</th>
            <th className={cn(styles.col4, styles.th)}>Проигрыши</th>
            <th className={cn(styles.col5, styles.th)}>Процент побед</th>
          </tr>
        </thead>
        <div className={styles.tableWrapper}>
          <tbody>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            <tr className={styles.row}>
              <td className={cn(styles.col1, styles.td)}>Александров Игнат Анатолиевич</td>
              <td className={cn(styles.col2, styles.td)}>24534</td>
              <td className={cn(styles.col3, styles.td)}>9824</td>
              <td className={cn(styles.col4, styles.td)}>1222</td>
              <td className={cn(styles.col5, styles.td)}>87%</td>
            </tr>
            
          </tbody>
        </div>
      </table>
    </div>
  );
}
