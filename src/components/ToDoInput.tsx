import React, {ChangeEvent, FormEvent, useState} from 'react'
import ToDoList from '../utils/api/todoListApi'
// import { ToDoInputProps } from '../interfaces/todo.interface'

const ToDoInput:React.FC = () => {
    const initTodoInput = {
        input: ''
    }

    const [todoInput, setTodoInput] = useState(initTodoInput)
    const [isError, setIsError] = useState('')

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setTodoInput((state) => ({...state, [name]:value}))
    }

    const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await ToDoList.postListData(todoInput.input)
            setTodoInput(initTodoInput)
        } catch (error) {
            setIsError(error as string)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Search bar"></label>
                <input
                name="input"
                value={todoInput.input}
                placeholder="Task"
                onChange={handleChange}
                />
                <button>
                    Submit
                </button>
            </form>
            {isError && <div>{isError}</div>}
        </div>
    )
}

export default ToDoInput