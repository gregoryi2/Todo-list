import { Header } from './Header';
import './App.css'
import { useState } from 'react' 

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Teste - 1",
      isComplet: true
    },
    {
      id: 2,
      title: "Teste - 2",
      isComplet: true
    },
    {
      id: 3,
      title: "Teste - 3",
      isComplet: true
    }
  ]);

  return (
    <>
      <Header />
      <div>
        {console.log(tasks)}
      </div>
    </>
  )
}
