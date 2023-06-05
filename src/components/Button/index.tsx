import styles from "./index.module.css";

interface ButtonProps {
    title: string;
    icon: React.ReactNode;
    onClick: () => void;
}

export function Button(props: ButtonProps) {
    return (
        <button
            className={styles.button}
            onClick={props.onClick}
        >
            {props.title}{props.icon}
        </button>
    )
}