import styles from "./Status.module.css";
import cn from "classnames";

export function Status({children, type, status}) {
    if (type == "activePlayers"){
        if (status == "true"){
            return <span className={cn(styles.activeStatus, styles.ready)}>{children}</span>
        }
        else {
            return <span className={cn(styles.activeStatus, styles.inGame)}>{children}</span>
        }
        
    }
    else if (type == "listPlayers"){
        if (status == "true"){
            return <span className={styles.banStatus}>{children}</span>
        }
        else {
            return <span className={styles.banStatus}>{children}</span>
        }
    }
  
}
