import styles from "./index.module.css";
import { useState, ChangeEvent } from 'react';
import { HiOutlineTrash } from "react-icons/hi";

export function Questions(props: any) {
    const [checked, setChecked] = useState<boolean>(false);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
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
                    {props.quest}
                </label>
            </div>
            <button className={styles.button}><HiOutlineTrash size={20} /></button>
        </div>
    )
}