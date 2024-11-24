import { FunctionDeclaration } from "typescript";
import { FilterType } from "./App";
import {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  useState,
} from "react";
import { EventType } from "@testing-library/react";
import "./Todolist.css"
import { v1 } from "uuid";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  id: string,
  title: string;
  tasks: Array<TaskType>;
  removeTask: (taskId: string, todolistId: string) => void;
  filterTask: (type: FilterType, id: string) => void;
  addTask: (title: string, todolistId: string) => void;
  changeStatus: (taskId: string, todolistId: string) => void;
  deleteTodolist: (todolistId: string) => void,
  filter: FilterType
};

export function Todolist(props: PropsType) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null)

  const handleClick = (taskId: string) => {
    props.removeTask(taskId, props.id);
  };

  function handleAddTask() {
    if (title.trim() !== '') {
      props.addTask(title, props.id);
      setTitle("");
    }
    else { setError('Title is required!') }

  }

  function inputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      handleAddTask();
    }
  }

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setError(null)
    setTitle(e.target.value);
  }

  function deleteTodolistHandle() {
    props.deleteTodolist(props.id)
  }

  return (
    <div className="">
      <div className="todolist-title">
        <h3>{props.title}</h3>
        <button onClick={() => deleteTodolistHandle()}>x</button>
      </div>

      <div className="todolist-content">
        <input
          type="text"
          value={title}
          onChange={handleChangeInput}
          onKeyDown={inputKeyDown}
          className={error ? "error": ""}
        />
        <button onClick={handleAddTask}>+</button>
        {error && <div className="error-msg">{error}</div>}

      </div>
      <ul>
        {props.tasks.map((el) => (
          <li key={el.id} className={el.isDone ? 'is-done' : ''}>
            <input type="checkbox" checked={el.isDone}
              onChange={() => props.changeStatus(el.id, props.id)} />
            <span>{el.title}</span>
            <button onClick={() => handleClick(el.id)}>x</button>
          </li>
        ))}
      </ul>

      <div>
        <button key={v1()} className={props.filter == 'all' ? 'btn-active' : ''}
          onClick={() => props.filterTask("all", props.id)}>All</button>

        <button key={v1()} className={props.filter == "active" ? 'btn-active' : ''}
          onClick={() => props.filterTask("active", props.id)}>Active</button>

        <button key={v1()} className={props.filter == "complited" ? 'btn-active' : ''}
          onClick={() => props.filterTask("complited", props.id)}>Complited</button>
      </div>
    </div>
  );
}
