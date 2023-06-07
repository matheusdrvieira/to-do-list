import { Header } from "./components/Header"
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Tasks, TaskProps } from "./components/Tasks";
import { RiAddCircleLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import clipboard from "./assets/clipboard.png";
import styles from "./App.module.css"
import "./global.css"

export function App() {
  const [handleTasks, setHandleTasks] = useState<string[]>([]);
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const storedTasks = localStorage.getItem("@setTasks");

  const handleSavedTasks = () => {
    const savedTasks = JSON.parse(localStorage.getItem("@setTasks") || "[]");

    if (handleTasks.length === 0) {
      return;
    }

    const updatedTasks = [
      ...savedTasks,
      ...handleTasks.map((task) => ({ text: task, completed: false, id: Date.now() }))
    ];

    localStorage.setItem("@setTasks", JSON.stringify(updatedTasks));
    setHandleTasks([]);
  };

  useEffect(() => {
    async function fetchTasks() {
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    }

    fetchTasks();
  }, [storedTasks]);

  const completedTasksCount = tasks.filter(task => task.completed).length;

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <Input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={handleTasks}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHandleTasks([e.target.value])}
          />
          <Button
            title="Criar"
            icon={<RiAddCircleLine size={15} />}
            onClick={handleSavedTasks}
          />
        </div>
        <div className={styles.infoWrapper}>
          <p>
            Tarefas criadas{' '}
            <span>{tasks.length}</span>
          </p>
          <p>
            Concluídas{' '}
            <span>
              {completedTasksCount}
            </span>
          </p>
        </div>

        {tasks.length === 0 ?
          <section className={styles.section}>
            <img src={clipboard} alt="prancheta" />
            <h2>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </h2>
          </section> :
          <section className={styles.section}>
            {
              tasks.map(task => (
                <Tasks
                  key={task.id}
                  id={task.id}
                  text={task.text}
                  completed={task.completed}
                />
              ))
            }
          </section>}
      </main>
    </div>
  )
}