import { useEffect, useState } from "react";
import "./Global.css";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import {v1 as uuidv1} from 'uuid';

export interface ITask{
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const LOCAL_STORAGE_KEY = "todo:saved"

function setTasksAndSave(newTasks:ITask[]){
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newTasks))
}
  const [tasks, setTasks] = useState<ITask[]>([]);
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    function loadSavedTasks(){
    if(saved){
    setTasks(JSON.parse(saved))
    }
    }

    useEffect(()=>{
      loadSavedTasks()
    },[]);

  function addTask(taskTile:string){
    setTasksAndSave([
      ...tasks,
      {
      
        id: uuidv1(),
        title: taskTile,
        isCompleted: false
      }
    ]);
  }

  function deleteTaskById(taskId:string){
  const newTasks = tasks.filter((task)=>task.id !== taskId)
  setTasksAndSave(newTasks);
  }
  
  function toggleTaskCompletedById(taskId:string){
    const newTasks = tasks.map((task) => {
    if(task.id !== taskId){
      return{
        ...task,
        isCompleted: !task.isCompleted
      }
    }
    
    return task;
    });
    setTasksAndSave(newTasks);
  }

  
  
  return(
    <>
    <Header onAddTask={addTask}/>
    <Tasks tasks={tasks} 
    onDelete={deleteTaskById}
    onComplete={toggleTaskCompletedById}
    />
    </>
  )
}


