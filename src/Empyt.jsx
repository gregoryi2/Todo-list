import './Empyt.css';
import Clipboard from './assets/Clipboard.svg';

export function Empyt() {
    return (
        <div className='empyt'>
            <img src={Clipboard}></img>
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <h3>Crie tarefas e organize seus itens a fazer</h3>
        </div>
    )
}