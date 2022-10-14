import React, { ChangeEvent, FormEvent, useState } from 'react'
import { TaskProps } from '../interfaces/todo.interface'
import ToDoList from '../utils/api/todoListApi'
import '../styles/globalTodo.css'
import '../styles/tasks.css'


const Task:React.FC<TaskProps> = ({id, title}) => {


    const [editInput, setEditInput] = useState(title)
    const [editToggle, setEditToggle] = useState(true)
    const [isError, setIsError] = useState('')

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setEditInput(value)
    }


    const handleEdit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await ToDoList.patchListData(id, editInput)
            setEditToggle((state) => !state)
        } catch (error) {
            setIsError(error as string)
        }
    }

    const handleDelete = async() => {
        try {
            await ToDoList.deleteListData(id)
        } catch (error) {
            setIsError(error as string)
        }
    }

    const handleEditToggle = () => setEditToggle((state) => !state)
    const handleEditCancel = () => setEditToggle((state) => !state)

    return (
        <div>
            <div key={id}>
                {editToggle ? 
                <div>
                    <span>
                        {title}    
                    </span>
                    <button className="global-btn" onClick={handleEditToggle}>Edit</button>
                    <button className="global-btn" onClick={handleDelete}>Delete</button>
                    {isError && <div>{isError}</div>}
                </div>
                :
                <form onSubmit={handleEdit}>
                    <input
                    className="global-input"
                    name={editInput}
                    value={editInput}
                    onChange={handleChange}
                    />
                    <button className="global-btn">Edit</button>
                    <button className="global-btn" onClick={handleEditCancel}>Cancel</button>
                    {isError && <div>{isError}</div>}
                </form>
                }
            </div>
        </div>
    )
    }

export default Task