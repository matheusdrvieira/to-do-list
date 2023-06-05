import styles from "./index.module.css";

export function Input(props: any) {
    return (
        <input
            className={styles.input}
            type={props.type}
            placeholder={props.placeholder}
        />
    )
}