import { useEffect } from "react"
import { useState } from "react"
import { Theme } from "../../components/theme"
import { List } from "../../type"

export const ListTasks = () => {
    const [tasks, setTasks] = useState<List[]>([])

    const loadTasks = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos') 
        let json = await response.json()
        setTasks(json)
    }
    useEffect(()=>{
        loadTasks()
    },[])
    return(
        <Theme>
            <div className=" min-h-screen bg-slate-900">
            <h1 className="p-10 pb-0 text-3xl text-center text-white">Lista de Tarefas puxadas de uma api fake</h1>
            <div className="p-10 px-56">
                {tasks.map((i,k)=>
                    <div  className="bg-blue-500 p-2 mb-2 flex items-center rounded" key={k}>
                        <input className="cursor-pointer font-lg w-5 h-5" type="checkbox" />
                        <p className="ml-2 font-medium">{i.title}</p>
                    </div>
                )}
            </div>
            </div>
        </Theme>
    )
}