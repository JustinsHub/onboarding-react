import React, { useEffect, useState } from 'react'
import ToDoInput from './ToDoInput'
import Tasks from './Tasks'
import ToDoList from '../utils/api/todoListApi'

const ToDoMain:React.FC = () => {
    const [todoList, setTodoList] = useState([])

    //fetch data here, store it on todolist state
    //pass that as prop

    useEffect(() => {
        const getTodoList = async() => {
            try {
                const data = await ToDoList.getListData()
                setTodoList(data)
            } catch (error) {
                return error
            }
        }
        getTodoList()
        }, [])

    return (
        <div>
            <ToDoInput/>
            <Tasks todoList={todoList}/>
        </div>
    )
}

export default ToDoMain