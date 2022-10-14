import React, { useEffect, useState } from 'react'
import { TasksProps } from '../interfaces/todo.interface'
import ToDoList from '../utils/api/todoListApi'
import Task from './Task'
import '../styles/tasks.css'


const Tasks:React.FC<TasksProps> = ({input}) => {  
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
    }, [input])
   
    return (
        <div className="tasks__container">
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