
export type TaskType = {
    id: number;
    title: string;
    isDone: boolean

}

type PropsType = {
    title: string;
    tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {

    return (
        <div className="">
            <h3>{props.title}</h3>
            <div>
                <input type="text" />
                <button></button>
            </div>
            <ul>
            {props.tasks.map(el =>
                
                    <li key={el.id}><input type="checkbox" checked={el.isDone} /><span>{el.title}</span> </li>
                    
                
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