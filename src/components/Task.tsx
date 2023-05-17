import { CheckCircle, Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';
import { ITask } from '../App';

interface Props{
task: ITask;
onDelete:(task: string) => void;
onComplete:(task:string) => void;
}

export function Task({task, onDelete, onComplete}:Props){
  
  return(
    
    <div className={styles.task}>
      <button className={styles.checkContainer} 
      onClick={()=> onComplete(task.id)}>
      
        {task.isCompleted ? <CheckCircle size={20} />:<div/>}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
      <button className={styles.deleteButton} 
      onClick={() => onDelete (task.id)}>
      <Trash size={20} />
        
      </button>
    </div>
  );
}