import style from './Dashboard.module.css';

import { PlusCircle } from "phosphor-react";
import { Empyt } from './Empyt';
import { Tasks } from './Tasks';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Dashboard() {

    const [tasks, setTasks] = useState([
        {
          id: uuidv4(),
          title: "Terminar esse projeto essa semana de preferência.",
          isComplet: false
        },
        {
          id: uuidv4(),
          title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
          isComplet: false
        },
        {
          id: uuidv4(),
          title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
          isComplet: false
        },
        {
          id: uuidv4(),
          title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
          isComplet: false
        },
        {
          id: uuidv4(),
          title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
          isComplet: false
        }
    ]);

    const totalTasks = tasks.length;

    const [completes, setCompletes] = useState([]);

    const totalCompletes = completes.length;

    function createTask() {
        event.preventDefault();

        const title = event.target.novaTask.value;

        const newTask = {
            id: uuidv4(),
            title: title,
            isComplet: false
        }

        setTasks([...tasks, newTask]);
    }

    function taskComplete() {
        const checkedComplete = event.target.checked;

        if(checkedComplete == true) {
            setCompletes([...completes, completes.length + 1]);
        } else {
            completes.pop()
            setCompletes([...completes]);
        }
    }

    function deleteTask(conteudoParaDeletar) {
        const novoArraySemTaskDeletada = tasks.filter(task => {
            return task !== conteudoParaDeletar;
        })

        setTasks(novoArraySemTaskDeletada);
    }

    return(
        <div className={style.dashboard}>
            <div className={style.container}>
                <form onSubmit={createTask} className={style.criarTarefa}>
                    
                    <input
                        name='novaTask'
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                    />

                    <button type="submit" className={style.btnCriar}>
                        Criar
                        <PlusCircle size={18} />
                    </button>
                </form>

                <div className={style.score}>
                    <div className={style.createdTasks}>
                        <p>Tarefas criadas</p>
                        <div className={style.borderNumber}>
                            <p>{totalTasks}</p>
                        </div>
                    </div>
                    <div className={style.completed}>
                        <p>Concluídas</p>
                        <div className={style.borderNumber}>
                            <p>{`${totalCompletes} de ${totalTasks}`}</p>
                        </div>
                    </div> 
                </div>

                <Empyt />

                {tasks.map(task => {
                    return(
                        <Tasks
                            key={task.id}
                            content={task}
                            deleteTask={deleteTask}
                            taskComplete={taskComplete}
                        />
                    )
                })}
                
            </div>
        </div>
    )
}