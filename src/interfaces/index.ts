import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface TaskProps {
    id: number;
    text: string;
    completed: boolean;
}

export interface ContextProps {
    tasks: TaskProps[];
    setTasks: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    icon: React.ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }
