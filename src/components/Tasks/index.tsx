import styles from "./index.module.css";
import { useState, ChangeEvent } from 'react';
import { HiOutlineTrash } from "react-icons/hi";

export interface TaskProps {
    id: number
    text: string;
    completed: boolean;
};

export function Tasks(props: TaskProps) {
    const [checked, setChecked] = useState<boolean>(props.completed);
    const storedTasks = JSON.parse(localStorage.getItem("@setTasks") || "[]");

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        const updatedTasks = storedTasks.map((task: TaskProps) => {
            if (task.text === props.text) {
                return { ...task, completed: event.target.checked };
            }
            return task;
        });

        localStorage.setItem("@setTasks", JSON.stringify(updatedTasks));
    };

    const handleDeletedTask = () => {
        const updatedTasks = storedTasks.filter(
            (task: TaskProps) => task.id !== props.id
        );

        localStorage.setItem("@setTasks", JSON.stringify(updatedTasks));
        alert("Tarefa Excluída")
    };

    return (
        <div className={styles.checkboxContainer}>
            <div>
                <input
                    type="checkbox"
                    className={styles.checkboxInput}
                    checked={checked}
                    onChange={handleCheckboxChange}
                />
                <span className={styles.checkboxCustom}></span>
                <label className={styles.checkboxLabel}>
                    {props.text}
                </label>
            </div>
            <button className={styles.button}
                onClick={handleDeletedTask}>
                <HiOutlineTrash size={20} />
            </button>
        </div>
    )
}