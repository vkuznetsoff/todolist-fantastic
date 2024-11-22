import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";
import { v1 } from "uuid";



export type FilterType = "all" | "active" | "complited";

type TodolistType = {
  id: string,
  title: string,
  // tasks: Array<TaskType>,
  filter: string
}

function App() {
  let tasks1: Array<TaskType> = [
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
  const [filter, setFilter] = useState<FilterType>("all");

  // const [todolists, setTodolists] = useState<Array<TodolistType>>([
  //   {
  //     id: v1(),
  //     title: 'T1',
  //     // tasks: tasks1,
  //     filter: 'all'
  //   },
  //   {
  //     id: v1(),
  //     title: 'T2',
  //     // tasks: tasks2,
  //     filter: 'active'
  //   }
  // ])

  const [todolists, setTodolists] = useState < Array<TodolistType> > (
    [
      {
        id: v1(),
        title: 'T1',
        // tasks: tasks1,
        filter: 'complited'
      },
      {
        id: v1(),
        title: 'T2',
        // tasks: tasks2,
        filter: 'active'
      }
    ]
  ) 

  function changeFilter(type: FilterType, todolistId: string) {
    let todolist = todolists.find(tl => tl.id === todolistId)
    if (todolist)  {
      todolist.filter = type
      setTodolists([...todolists])
    }
    



  }

  // let tasksForUI: Array<TaskType> = [];
  // if (filter == "active") tasksForUI = tasks.filter((t) => t.isDone == false);
  // if (filter == "complited") tasksForUI = tasks.filter((t) => t.isDone == true);
  // if (filter == "all") tasksForUI = tasks;

  function deleteTask(id: string) {
    let result
    // tasks = arr.filter((el) => el.id !== id)
    setTasks((tasks) => tasks.filter((el) => el.id !== id));
  }

  function addTask(title: string) {
    const task = {
      id: v1(),
      title,
      isDone: false,
    };
    setTasks([...tasks, task]);
  }

  function changeStatus(id: string) {
    setTasks(
      tasks.map((t) => {
        let newTask;
        if (t.id === id) {
          newTask = { ...t, isDone: !t.isDone };
          return newTask;
        } else return t;
      })
    );
  }

  return (
    <div className="App">


      {
        todolists.map(tl => {
          let tasksForUI = tasks
          if (tl.filter == "active") tasksForUI = tasks.filter((t) => t.isDone == false);
          if (tl.filter == "complited") tasksForUI = tasks.filter((t) => t.isDone == true);
          if (tl.filter == "all") tasksForUI = tasks;

          return <Todolist
            key={tl.id}
            id={tl.id}
            title="What to learn?"
            tasks={tasksForUI}
            removeTask={deleteTask}
            filterTask={changeFilter}
            addTask={addTask}
            changeStatus={changeStatus}
            filter={filter}
          />
        }



        )
      }





    </div>
  );
}

export default App;
