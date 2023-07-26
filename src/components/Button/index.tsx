import { ButtonProps } from "../../interfaces";
import styles from "./index.module.css";

export function Button(props: ButtonProps) {
    return (
        <button
            className={styles.button}
            {...props}
        >
            {props.title}{props.icon}
        </button>
    )
}