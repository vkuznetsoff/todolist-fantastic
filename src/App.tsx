import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";
import { v1 } from "uuid";

export type FilterType = "all" | "active" | "complited"

function App() {
 
  let tasks1 = [
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "CSS", isDone: true },
    { id: v1(), title: "JS", isDone: false },
  ];

  let tasks2: Array<TaskType> = [
    { id: v1(), title: "Begin", isDone: true },
    { id: v1(), title: "Matrix", isDone: false },
    { id: v1(), title: "Titanik", isDone: true },
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
    

  function deleteTask(id: string) {
    // let result
    // tasks = arr.filter((el) => el.id !== id)
    setTasks(tasks => tasks.filter((el) => el.id !== id))
  }

    function addTask(title: string) {
      const task = {
        id: v1(),
        title,
        isDone: false
      }

      setTasks([...tasks, task])
    }

  return (
    <div className="App">
      <Todolist
        title="What to learn?"
        tasks={tasksForUI}
        removeTask={deleteTask}
        filterTask={handleFilter}
        addTask={addTask}
      />
      {/* <Todolist title="Movies2" tasks={tasks2} removeTask={deleteTask}/> */}
    </div>
  );
}

export default App;
