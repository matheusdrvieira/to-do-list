import { InputProps } from "../../interfaces";
import styles from "./index.module.css";

export function Input(props: InputProps) {
    return (
        <input
            className={styles.input}
            {...props}
        />
    )
}