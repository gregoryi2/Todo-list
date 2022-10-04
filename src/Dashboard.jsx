import './Dashboard.css';
import IconCriar from './assets/IconCriar.svg';

export function Dashboard() {
    return(
        <div className='dashboard'>
            <div className='container'>
                <div className='criarTarefa'>
                    <input type="text" placeholder="Adicione uma nova tarefa"></input>
                    <button type="submit" className='btnCriar'>
                        Criar
                        <img src={IconCriar}/>
                    </button>
                </div>
            </div>
        </div>
    )
}