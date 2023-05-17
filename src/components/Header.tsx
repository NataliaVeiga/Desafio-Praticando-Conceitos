import styles from './Header.module.css';
import todoLogo from '../assets/Logo.svg';
import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props{
  onAddTask:(taskTitle:string) => void;
}

export function Header({onAddTask}:Props){
const [title, setTitle] = useState("");

  function handleSubmit(event:FormEvent){
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event:ChangeEvent<HTMLInputElement>){
  setTitle(event.target.value);
  }

  return(
    <section className={styles.header}>
      <img src={todoLogo} />
      <form className={styles.newTaskForm}
      onSubmit={handleSubmit}
      >
      <input placeholder='Adicione uma nova tarefa' onChange={onChangeTitle} value={title}/>
      <button>criar
      <PlusCircle size={20} />
      </button>
      </form>
    </section>
  )
}