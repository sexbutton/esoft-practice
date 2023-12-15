import styles from "./Button.module.css";
import cn from "classnames"

export function Button({ children , type}) {
    if (type == "auth"){
      return <button className={styles.auth}>{children}</button>;
    }
    else{
      return <button className={styles.button}>{children}</button>;
    }
    
}
