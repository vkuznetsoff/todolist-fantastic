import { FunctionDeclaration } from "typescript";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean

}

type PropsType = {
    title: string;
    tasks: Array<TaskType>,
    removeTask: any
}

export function Todolist(props: PropsType) {
    const handleClick = (id: number) => {
        props.removeTask(id, props.tasks)
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
                <button>All</button>
                <button>Active</button>
                <button>Complited</button>
            </div>
        </div>
    );
}