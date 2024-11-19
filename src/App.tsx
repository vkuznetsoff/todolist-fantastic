import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskType, Todolist } from './Todolist';



function App() {
  

  function deleteTask(id:number, arr: Array<TaskType>){
    setTasks( arr.filter(el => el.id !== id))
  }

  let tasks1 = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "CSS", isDone: true},
    {id: 3, title: "JS", isDone: false}
  ]

  let tasks2: Array<TaskType> = [
    {id: 1, title: "Begin", isDone: true},
    {id: 2, title: "Matrix", isDone: false},
    {id: 3, title: "Titanik", isDone: true}
  ]

  const [tasks, setTasks] = useState(tasks1)

  return (
    <div className="App">
      <Todolist title="What to learn?" tasks={tasks} removeTask={deleteTask}/>
      {/* <Todolist title="Movies2" tasks={tasks2} removeTask={deleteTask}/> */}
      
     
    </div>
  );
}



export default App;
