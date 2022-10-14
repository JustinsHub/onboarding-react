import React, { useEffect, useState } from 'react'
import ToDoList from '../utils/api/todoListApi'

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
                    {todo.title}
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                )
            })}
        </div>
    )
}

export default Tasks