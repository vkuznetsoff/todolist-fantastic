import { ChangeEvent, useState } from "react"
import { AddItemForm } from "./AddItemForm"

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
            // <AddItemForm addItem={}/>
            <input autoFocus placeholder={title} 
            value={title}
            onBlur={submitEditHandle} 
            onChange={(e) => changeItemTitle(e)}
            />
            : <span onDoubleClick={activeModeHandle}>{props.title}</span>
    )
}