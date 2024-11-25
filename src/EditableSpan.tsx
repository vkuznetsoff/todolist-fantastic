import { ChangeEvent, useState } from "react"
import { AddItemForm } from "./AddItemForm"
import { TextField } from "@mui/material"

type EditableSpanPropsType = {
    title: string,
    onChangeItem: (title: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, setEditMode] = useState(false)
    const [title, setTilte] = useState(props.title)

    function activeModeHandle() {
        setEditMode(!editMode)
    }

    function submitEditHandle() {
        activeModeHandle()
        props.onChangeItem(title)

    }

    function changeItemTitle(e: ChangeEvent<HTMLInputElement>) {
        setTilte(e.currentTarget.value)

    }

    return (
        editMode ?
    
            <TextField autoFocus placeholder={title}
                value={title}
                onBlur={submitEditHandle}
                onChange={changeItemTitle} variant="standard" />
            : <span onDoubleClick={activeModeHandle}>{props.title}</span>
    )
}