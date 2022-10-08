import { Trash } from "phosphor-react";
import styles from './Tasks.module.css';

export function Tasks({ content, deleteTask, taskComplete }) {

    function deletar() {
        deleteTask(content);
    }

    function capturarConcluido() {
        taskComplete();
    }

    return (
        <div className={styles.tasks}>
            <label className={styles.container}>
                <input onChange={capturarConcluido} type="checkbox" />
                <p>{content.title}</p>
                <button type="submit">
                    <Trash size={20} onClick={deletar} />
                </button>
                <span className={styles.checkmark}></span>
          </label>
        </div>
    )
}

