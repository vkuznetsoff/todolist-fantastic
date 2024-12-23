import { AddCircleOutline } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";

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
      if (e.key === "Enter") {
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
      <TextField
      label="New task"
        type="text"
        value={title}
        onChange={handleChangeInput}
        onKeyDown={inputKeyDown}
        error={!!error}
        helperText={error}
      />
      <IconButton onClick={handleAddTask}>
       <AddCircleOutline />
      </IconButton>
      
    </div>
  }
  