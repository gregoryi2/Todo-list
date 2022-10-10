import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from './Tasks.module.css';

export function Tasks({ content, deleteTask, taskComplete }) {

    const [isChecked, setIsChecked] = useState(false);

    function handleOnChecked() {
        setIsChecked(!isChecked);
    }

    function deletar() {
        deleteTask(content);
    }

    function capturarConcluido() {
        taskComplete();
        handleOnChecked();
    }

    return (
        <div className={styles.tasks}>
            <label className={styles.container}>
                <input onChange={capturarConcluido} type="checkbox" />
                {
                    (isChecked == true) ? <p className={styles.concluido}>{content.title}</p> : <p>{content.title}</p>
                }
                <button type="submit">
                    <Trash size={20} onClick={deletar} />
                </button>
                <span className={styles.checkmark}></span>
          </label>
        </div>
    )
}

