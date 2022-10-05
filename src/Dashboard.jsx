import './Dashboard.css';

import { PlusCircle } from "phosphor-react";
import { Empyt } from './Empyt';
import { Tasks } from './Tasks';

export function Dashboard() {
    return(
        <div className='dashboard'>
            <div className='container'>
                <div className='criarTarefa'>
                    <input type="text" placeholder="Adicione uma nova tarefa"></input>
                    <button type="submit" className='btnCriar'>
                        Criar
                        <PlusCircle size={18} />
                    </button>
                </div>

                <div className='score'>
                    <div className='createdTasks'>
                        <p>Tarefas criadas</p>
                        <div className='borderNumber'>
                            <p>0</p>
                        </div>
                    </div>
                    <div className='completed'>
                        <p>Concluídas</p>
                        <div className='borderNumber'>
                            <p>0</p>
                        </div>
                    </div> 
                </div>
                {/* O componente Empyt está com display none. */}
                <Empyt />
                <Tasks />
            </div>
        </div>
    )
}