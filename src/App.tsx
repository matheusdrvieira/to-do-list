import { Header } from "./components/Header"
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Tasks } from "./components/Tasks";
import { RiAddCircleLine } from "react-icons/ri";
import { createContext, useEffect, useState } from "react";
import clipboard from "./assets/clipboard.png";
import styles from "./App.module.css"
import "./global.css"
import { ContextProps, TaskProps } from "./interfaces";

export const Context = createContext({} as ContextProps)

export function App() {
  const [handleTasks, setHandleTasks] = useState("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = JSON.parse(localStorage.getItem("@setTasks")!);
      if (response) {
        setTasks(response.tasks)
      }
    }
    fetchTasks()
  }, [])

  const handleSavedTasks = () => {
    const newTask = {
      text: handleTasks,
      completed: false,
      id: Date.now()
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    localStorage.setItem("@setTasks", JSON.stringify({ tasks: [...tasks, newTask] }));
    setHandleTasks("");
  }

  const completedTasksCount = tasks.filter(task => task.completed).length;
  return (
    <Context.Provider value={{ tasks, setTasks }}>
      <div className={styles.container}>
        <Header />
        <main>
          <div className={styles.wrapper}>
            <Input
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={handleTasks}
              onChange={(e) => setHandleTasks(e.target.value)}
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
                {`${tasks.length} de ${completedTasksCount}`}
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
    </Context.Provider>
  )
}