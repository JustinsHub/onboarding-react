import React, { useEffect, useState } from 'react'
import ToDoList from '../utils/api/todoListApi'
import Task from './Task'

const Tasks:React.FC = () => {  
    const [todoList, setTodoList] = useState([])
    
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
            {todoList.map((todo:any) => {
                return(
                <div key={todo.id}>
                   <Task id={todo.id} title={todo.title}/>
                </div>
                )
            })}
        </div>
    )
}

export default Tasks