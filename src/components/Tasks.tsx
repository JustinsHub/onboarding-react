import React, { useEffect, useState } from 'react'
import { TasksProps } from '../interfaces/todo.interface'
import Task from './Task'
import '../styles/tasks.css'


const Tasks:React.FC<TasksProps> = ({todoList}) => {  
    const [renderList, setRenderList] = useState([])
    
    useEffect(() => {
        setRenderList(todoList)
    }, [todoList])
   
    return (
        <div className="tasks__container">
            {renderList.map((todo:any) => {
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