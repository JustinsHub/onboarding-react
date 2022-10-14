import React, {ChangeEvent, FormEvent, useState} from 'react'
import ToDoList from '../utils/api/todoListApi'
import Tasks from './Tasks'
import '../styles/globalTodo.css'

const ToDoInput:React.FC = () => {
    const INIT_TODO_INPUT = {
        input: ''
    }

    const [todoInput, setTodoInput] = useState(INIT_TODO_INPUT)
    const [isError, setIsError] = useState('')

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setTodoInput((state) => ({...state, [name]:value}))
    }

    const handleSubmit = async(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await ToDoList.postListData(todoInput.input)
            setTodoInput(INIT_TODO_INPUT)
        } catch (error) {
            setIsError(error as string)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Search bar"></label>
                <input
                className="global-input"
                name="input"
                value={todoInput.input}
                placeholder="Task"
                onChange={handleChange}
                />
                <button className="global-btn">
                    Submit
                </button>
            </form>
            {isError && <div>{isError}</div>}
            <div>
                <Tasks input={todoInput}/>
            </div>
        </div>
    )
}

export default ToDoInput