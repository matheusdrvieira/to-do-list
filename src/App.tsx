import { Header } from "./components/Header"
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Questions } from "./components/Questions";
import { RiAddCircleLine } from "react-icons/ri";
import clipboard from "./assets/clipboard.png";
import styles from "./App.module.css"
import "./global.css"

import { useState } from "react";

export function App() {
  const [showSection, setShowSection] = useState<boolean>(true);

  const handleToggleSection = () => {
    setShowSection(!showSection);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <Input type="text" placeholder="Adicione uma nova tarefa" />
          <Button
            title="Criar"
            icon={<RiAddCircleLine size={15} />}
            onClick={handleToggleSection}
          />
        </div>
        <div className={styles.infoWrapper}>
          <p>Tarefas criadas <span>0</span></p><p>Concluídas <span>0</span></p>
        </div>

        {showSection ?
          <section className={styles.section}>
            <img src={clipboard} alt="prancheta" />
            <h2>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </h2>
          </section> :
          <section className={styles.section}>
            <Questions quest="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
            <Questions quest="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
            <Questions quest="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
            <Questions quest="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
          </section>}
      </main>
    </div>
  )
}