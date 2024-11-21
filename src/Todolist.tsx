import { FunctionDeclaration } from "typescript";
import { FilterType } from "./App";
import {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  useState,
} from "react";
import { EventType } from "@testing-library/react";

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  filterTask: (type: FilterType) => void;
  addTask: (title: string) => void;
  changeStatus: (id: string) => void;
};

export function Todolist(props: PropsType) {
  const [title, setTitle] = useState("");
  const handleClick = (id: string) => {
    props.removeTask(id);
  };

  function handleAddTask() {
    props.addTask(title);
    setTitle("");
  }

  function inputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      handleAddTask();
    }
  }

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  return (
    <div className="">
      <h3>{props.title}</h3>
      <div>
        <input
          type="text"
          value={title}
          onChange={handleChangeInput}
          onKeyDown={inputKeyDown}
        />
        <button onClick={handleAddTask}>+</button>
      </div>
      <ul>
        {props.tasks.map((el) => (
          <li key={el.id}>
            <input type="checkbox" checked={el.isDone} onChange={() => props.changeStatus(el.id)}/>
            <span>{el.title}</span>
            <button onClick={() => handleClick(el.id)}>x</button>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={() => props.filterTask("all")}>All</button>
        <button onClick={() => props.filterTask("active")}>Active</button>
        <button onClick={() => props.filterTask("complited")}>Complited</button>
      </div>
    </div>
  );
}
