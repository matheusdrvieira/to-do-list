import styles from "./index.module.css";

export function Input(props: any) {
    return (
        <input
            className={styles.input}
            type={props.type}
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            required {...props}
        />
    )
}