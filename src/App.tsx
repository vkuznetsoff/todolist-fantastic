import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";

export type FilterType = "all" | "active" | "complited"

function App() {
 
  let tasks1 = [
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "CSS", isDone: true },
    { id: 3, title: "JS", isDone: false },
  ];

  let tasks2: Array<TaskType> = [
    { id: 1, title: "Begin", isDone: true },
    { id: 2, title: "Matrix", isDone: false },
    { id: 3, title: "Titanik", isDone: true },
  ];

  const [tasks, setTasks] = useState<Array<TaskType>>(tasks1);
  const [filter, setFilter] = useState<FilterType>('all');

  function handleFilter(type: FilterType) {
    setFilter(type);
  }

  let tasksForUI: Array<TaskType> = [];
    if (filter == "active") tasksForUI = tasks.filter((t) => t.isDone == false);
    if (filter == "complited") tasksForUI = tasks.filter((t) => t.isDone == true);
    if (filter == "all") tasksForUI = tasks
    

  function deleteTask(id: number) {
    // let result
    // tasks = arr.filter((el) => el.id !== id)
    setTasks(tasks => tasks.filter((el) => el.id !== id))

  }

  return (
    <div className="App">
      <Todolist
        title="What to learn?"
        tasks={tasksForUI}
        removeTask={deleteTask}
        filterTask={handleFilter}
      />
      {/* <Todolist title="Movies2" tasks={tasks2} removeTask={deleteTask}/> */}
    </div>
  );
}

export default App;
