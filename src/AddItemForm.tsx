import { ChangeEvent, KeyboardEvent, useState } from "react";

type AddItemFormPropsType = {
    addItem: (title: string) => void,
  
  
  }
  
  export function AddItemForm(props: AddItemFormPropsType) {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)
  
    function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
      setError(null)
      setTitle(e.target.value);
    }
  
    function inputKeyDown(e: KeyboardEvent<HTMLInputElement>) {
      if (e.key == "Enter") {
        handleAddTask();
      }
    }
  
  
    function handleAddTask() {
      if (title.trim() !== '') {
        props.addItem(title);
        setTitle("");
      }
      else { setError('Title is required!') }
  
    }
  
    return <div>
      <input
        type="text"
        value={title}
        onChange={handleChangeInput}
        onKeyDown={inputKeyDown}
        className={error ? "error" : ""}
      />
      <button onClick={handleAddTask}>+</button>
      {error && <div className="error-msg">{error}</div>}
    </div>
  }
  