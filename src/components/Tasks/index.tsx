import styles from "./index.module.css";
import { useState, ChangeEvent, useContext } from 'react';
import { HiOutlineTrash } from "react-icons/hi";
import { Context } from "../../App";
import { TaskProps } from "../../interfaces";

export function Tasks(props: TaskProps) {
    const { tasks, setTasks } = useContext(Context);
    const [checked, setChecked] = useState<boolean>(props.completed);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        const updatedTasks = tasks.map((task: TaskProps) => {
            if (task.id === props.id) {
                return { ...task, completed: event.target.checked };
            }
            return task;
        });

        setTasks(updatedTasks);
        localStorage.setItem("@setTasks", JSON.stringify({ tasks: updatedTasks }));
    };

    const handleDeletedTask = () => {
        const updatedTasks = tasks.filter(
            (task: TaskProps) => task.id !== props.id
        );

        localStorage.setItem("@setTasks", JSON.stringify({ tasks: updatedTasks }));
        setTasks(updatedTasks);
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