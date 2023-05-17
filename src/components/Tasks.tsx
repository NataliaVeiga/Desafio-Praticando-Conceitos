import styles from './Tasks.module.css';
import {Task} from './Task.tsx'
import { ITask } from '../App.tsx';
import { ClipboardText } from '@phosphor-icons/react';

interface Props{
  tasks: ITask[];
  onDelete:(task:string) => void;
  onComplete:(task:string) => void;
}

export function Tasks({tasks, onDelete, onComplete}:Props){
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task)=>task.isCompleted).length;
  
  return(
    <section className={styles.tasks}>
      <header className={styles.header}>
      <div>
        <p>Tarefas criadas</p>
        <span>{tasksQuantity}</span>
      </div>

      <div>
        <p className={styles.textPurple}>Concluídas</p>
        <span>{completedTasks} de {tasksQuantity}</span>
      </div>
      
    </header>
    <div className={styles.list}>
      {tasks.map((task)=>(
      <Task key={task.id} task={task} onDelete={onDelete} 
      onComplete={onComplete}/>
      ))}
      {tasks.length <= 0  &&(
        <section className={styles.empyt}>
          <ClipboardText size={56} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
      )}
    </div>
    </section>
    
    
      
  )
}