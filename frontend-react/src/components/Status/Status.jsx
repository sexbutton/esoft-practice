import styles from "./Status.module.css";
import cn from "classnames";

export function Status({children, type}) {
    if (type == "activePlayers"){
        if (type == "true"){
            return <span className={cn(styles.activeStatus)}>{children}</span>
        }
        else {
            return <span className={cn(styles.activeStatus)}>{children}</span>
        }
        
    }
    else if (type == "listPlayers"){
        if (type == "true"){
            return <span className={styles.banStatus}>{children}</span>
        }
        else {
            return <span className={styles.banStatus}>{children}</span>
        }
    }
  
}
