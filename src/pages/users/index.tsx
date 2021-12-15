import { useEffect } from "react"
import { useState } from "react"
import { Theme } from "../../components/theme"
import { UserInfo } from "../../type"

export const Users = () => {
    const [user, setUser] = useState<UserInfo[]>([])
    const loadUsers = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let json = await response.json()
        setUser(json)
    }
    useEffect(()=> {
        loadUsers()
    },[])
    return(
        <Theme>
            <div className="bg-slate-900 min-h-screen">
            <h1 className="pt-14 text-center text-white text-3xl">Usuários puxados de api fake</h1>
            <div className="p-10 grid grid-cols-4 ">
                {user.map((i,k)=>
                    <div className="mb-4 mr-4 border-2 border-white bg-blue-100 p-2" key={k}>
                        <small>#{i.id}</small> <br />
                        <span className="font-bold p-0">Nome:</span>{i.name} <br />
                        <span className="font-bold">Nome de Usuário: </span> {i.username}  <br />
                        <span className="font-bold">Email: </span> {i.email}<br />
                        <p>
                            <span className="font-bold">Endereço:</span> <br />
                           <span className="font-bold">Rua:</span>  {i.address.street} <br />
                           <span className="font-bold">Apartamento:</span>  {i.address.suite} <br />
                           <span className="font-bold">Cidade: </span>{i.address.city} <br />
                           <span className="font-bold">Código Postal:</span>  {i.address.zipcode}
                        </p>
                        <span  className="font-bold">Posição Geográfica: </span> <br />
                        Lat: {i.address.geo.lat}  - Lon: {i.address.geo.lng} 
                    </div>
                )}
            </div>
            </div>
        </Theme>
    )
}