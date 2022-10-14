const BASE_URL = "http://localhost:3000" || process.env.BASE_URL
class ToDoList {
    //GET
    static async getListData(){
        try {
            const getListData = await fetch(`${BASE_URL}/todos`)
            return getListData.json()
        } catch (error) {
            return error
        }
    }

    //POST 
    static async postListData(newTodo:string) {
        try {
            const postListData = await fetch(`${BASE_URL}/todos`, 
                {
                    method:"POST",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        title: newTodo,
                        completed: false
                    }),
                }
            )
            return postListData.json()
        } catch (error) {
            return error
        }
    }

    //PUT
    static async putListData(id:number, putList:any) {
        try {
            const putListData = await fetch(`${BASE_URL}/todos/${id}`, 
                {
                    method:"PUT",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        title: putList,
                        completed: false
                    }),
                }
            )
            return putListData.json()
        } catch (error) {
            return error
        }
    }

     //PATCH
    static async patchListData(id:number, patchToDo:any) {
        try {
            const patchListData = await fetch(`${BASE_URL}/todos/${id}`, 
                {
                    method:"PATCH",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({
                        title: patchToDo,
                        completed: false
                    })
                }
            )
            return patchListData.json()
        } catch (error) {
            return error
        }
    }

    //DELETE
    static async deleteListData(id:number) {
        try {
            await fetch(`${BASE_URL}/todos/${id}`, 
                {
                    method:"DELETE",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                }
            )
        } catch (error) {
            return error
        }
    }

}

export default ToDoList