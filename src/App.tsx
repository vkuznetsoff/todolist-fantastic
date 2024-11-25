import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TaskType, Todolist } from "./Todolist";
import { v1 } from "uuid";
import { AddItemForm } from "./AddItemForm";



export type FilterType = "all" | "active" | "complited";

type TodolistType = {
  id: string,
  title: string,
  // tasks: Array<TaskType>,
  filter: FilterType
}

type TaskStateType = {
  [key: string]: Array<TaskType>
}

function App() {

  // const [filter, setFilter] = useState<FilterType>("all");


  const tdList1 = v1()
  const tdList2 = v1()

  const [todolists, setTodolists] = useState<Array<TodolistType>>(
    [
      {
        id: tdList1,
        title: 'T1',
        // tasks: tasks1,
        filter: 'all'
      },
      {
        id: tdList2,
        title: 'T2',
        // tasks: tasks2,
        filter: 'all'
      }
    ]
  )


  const [tasks, setTasks] = useState<TaskStateType>({
    [tdList1]: [
      { id: v1(), title: "HTML&CSS", isDone: true },
      { id: v1(), title: "CSS", isDone: true },
      { id: v1(), title: "JS", isDone: false }
    ],
    [tdList2]: [
      { id: v1(), title: "Begin", isDone: true },
      { id: v1(), title: "Matrix", isDone: false },
      { id: v1(), title: "Titanik", isDone: true }
    ]

  })

  function changeFilter(type: FilterType, todolistId: string) {
    let todolist = todolists.find(tl => tl.id === todolistId)
    if (todolist) {
      todolist.filter = type
      setTodolists([...todolists])
    }
  }


  function deleteTask(taskId: string, todolistId: string) {
    let result = tasks[todolistId].filter((el) => el.id != taskId)
    tasks[todolistId] = result
    setTasks({ ...tasks });
  }

  function addTask(title: string, todolistId: string) {
    let newTask = {
      id: v1(),
      title,
      isDone: false,
    };

    tasks[todolistId] = [newTask, ...tasks[todolistId]]
    setTasks(
      { ...tasks }
    );
  }

  function changeStatus(taskId: string, todolistId: string) {

    let task = tasks[todolistId].find(t => t.id === taskId)
    if (task) {
      task.isDone = !task.isDone
    }
    setTasks({ ...tasks })
  }

  function deleteTodolist(todolistId: string) {
    setTodolists(todolists.filter(td => td.id != todolistId))
    delete tasks[todolistId]
    setTasks({ ...tasks })
  }

  function addTodolist(title: string) {
    let tdId = v1()
    let newTodolist : TodolistType = {
      id: tdId,
      title,
      filter: "all"

    }
    setTodolists([ ...todolists, newTodolist])
    tasks[tdId] = []
    setTasks({...tasks})
  }

  function updateTask(newTitle: string, todolistId: string, taskId: string) {
    let updTask = tasks[todolistId].find(t => t.id === taskId)
    if (updTask) {
      updTask.title = newTitle
    }
    setTasks({...tasks})
  }

  function updateTodolistTitle(newTitle: string, todolistId: string) {
    let td = todolists.find(td => td.id === todolistId)
    if (td) {
      td.title = newTitle
    }
    setTodolists([...todolists])
  }

  return (
    <div className="App">
      <AddItemForm addItem={addTodolist}/>
      {
        todolists.map(tl => {
          let tasksForUI = tasks[tl.id]
          if (tl.filter == "active") tasksForUI = tasksForUI.filter((t) => t.isDone == false);
          if (tl.filter == "complited") tasksForUI = tasksForUI.filter((t) => t.isDone == true);
          if (tl.filter == "all") tasksForUI = tasksForUI;

          return <Todolist
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={tasksForUI}
            removeTask={deleteTask}
            filterTask={changeFilter}
            addTask={addTask}
            changeStatus={changeStatus}
            deleteTodolist={deleteTodolist}
            changeItemTitle={updateTask}
            changeTodolistTitle={updateTodolistTitle}
            filter={tl.filter}
          />
        }



        )
      }





    </div>
  );
}

export default App;
