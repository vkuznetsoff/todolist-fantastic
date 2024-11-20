import { FunctionDeclaration } from "typescript";
import { FilterType } from "./App";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean

}

type PropsType = {
    title: string;
    tasks: Array<TaskType>,
    removeTask: (id: number) => void,
    filterTask: (type: FilterType) => void
}

export function Todolist(props: PropsType) {
    const handleClick = (id: number) => {
        props.removeTask(id)
    }

    return (
        <div className="">
            <h3>{props.title}</h3>
            <div>
                <input type="text" />
                <button></button>
            </div>
            <ul>
                {props.tasks.map(el =>

                    <li key={el.id}>
                        <input type="checkbox" checked={el.isDone} />
                        <span>{el.title}</span>
                        <button onClick={() => handleClick(el.id)}>x</button>
                    </li>


                )}

            </ul>


            <div>
                <button onClick={() => props.filterTask('all')}>All</button>
                <button onClick={() => props.filterTask('active')}>Active</button>
                <button onClick={() => props.filterTask('complited')}>Complited</button>
            </div>
        </div>
    );
}