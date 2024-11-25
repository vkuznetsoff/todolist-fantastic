import { FilterType } from "./App";
import { v1 } from "uuid";
import "./Todolist.css";
import { AddItemForm } from "./AddItemForm";
import { EditableSpan } from "./EditableSpan";
import { Button, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  id: string;
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string, todolistId: string) => void;
  filterTask: (type: FilterType, id: string) => void;
  addTask: (title: string, todolistId: string) => void;
  changeStatus: (taskId: string, todolistId: string) => void;
  changeItemTitle: (
    newTitle: string,
    todolistId: string,
    itemId: string
  ) => void;
  changeTodolistTitle: (newTitle: string, todolistId: string) => void;
  deleteTodolist: (todolistId: string) => void;
  filter: FilterType;
};

export function Todolist(props: PropsType) {
  const handleClick = (taskId: string) => {
    props.removeTask(taskId, props.id);
  };

  function deleteTodolistHandle() {
    props.deleteTodolist(props.id);
  }

  function addTask(title: string) {
    props.addTask(title, props.id);
  }

  function onChangeItemTitle(newTitle: string, itemId: string) {
    props.changeItemTitle(newTitle, props.id, itemId);
  }

  function changeTodolistTitle(title: string) {
    props.changeTodolistTitle(title, props.id);
  }

  return (
    <div className="">
      <div className="todolist-title">
        <EditableSpan title={props.title} onChangeItem={changeTodolistTitle} />

        {/* <button onClick={deleteTodolistHandle}>x</button> */}

        <IconButton
          aria-label="delete"
          color="warning"
          onClick={deleteTodolistHandle}
        >
          <Delete />
        </IconButton>
      </div>

      <AddItemForm addItem={addTask} />

      <ul>
        {props.tasks.map((el) => (
          <li key={el.id} className={el.isDone ? "is-done" : ""}>
            <input
              type="checkbox"
              checked={el.isDone}
              onChange={() => props.changeStatus(el.id, props.id)}
            />

            <EditableSpan
              title={el.title}
              onChangeItem={(value) => onChangeItemTitle(value, el.id)}
            />
           
            <IconButton aria-label="delete" size="small" onClick={() => handleClick(el.id)}>
              <Delete fontSize="inherit"  />
            </IconButton>
          </li>
        ))}
      </ul>

      <div>
        <Button
        color="primary"
          variant={props.filter === "all" ? "outlined" : "text"}
          // className={props.filter === "all" ? "btn-active" : ""}
          onClick={() => props.filterTask("all", props.id)}
        >
          All
        </Button>

        <Button
          color="error"
          variant={props.filter === "active" ? "outlined" : "text"}
          // className={props.filter === "active" ? "btn-active" : ""}
          onClick={() => props.filterTask("active", props.id)}
        >
          Active
        </Button>

        <Button
        color="success"
         variant={props.filter === "complited" ? "outlined" : "text"}
          // className={props.filter === "complited" ? "btn-active" : ""}
          onClick={() => props.filterTask("complited", props.id)}
        >
          Complited
        </Button>
      </div>
    </div>
  );
}
