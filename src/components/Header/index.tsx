import rocket from "../../assets/rocket.png";
import styles from "./index.module.css";


export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="foto de um foguete" />
            <h1><span>to</span><span>do</span></h1>
        </header>
    )
}