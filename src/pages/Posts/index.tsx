import { useEffect } from "react"
import { useState } from "react"
import {Theme} from '../../components/theme'

type Post = {
  userId:number,
  id:number,
  title:string,
  body:string
}
 
 export const Posts = () => {
   const [post, setPost] = useState<Post[]>([])
   const [addTitle, setAddTitle] = useState('')
   const [addBody, setAddBody] = useState('')

  const getList = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    let json = await response.json()
    setPost(json)
  }
  const handleAddPost = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/',{
      method:'POST',
      body: JSON.stringify({
        title:addTitle,
        body:addBody,
        userId:2
      }),
      headers:{
        'Content-type':'aplication/json'
      }
    })
    let json = await response.json()
    setAddTitle('')
    setAddBody('')
    if(json.id){
      alert('Post adicionado com sucesso!')
    }
  }
   useEffect(()=>{
     getList()
   },[])
  return(
      <Theme>
        <div className="flex flex-col justify-center text-black p-10">
        <h1 className="text-5xl text-center">Posts puxados de uma api teste</h1>
          <fieldset className="font-bold border-2 border-blue-900 w-1/2 m-auto mt-5 mb-5 p-4">
            <legend>Adicionar Novo Post</legend>

            <input className="block rounded border-2 border-blue-900 mb-2 p-2" type="text" placeholder="Título" value={addTitle} onChange={(e)=>setAddTitle(e.target.value)} />
            <textarea className="block rounded border-2 border-blue-900 mb-2 p-2" placeholder="Texto..." value={addBody} onChange={(e)=>setAddBody(e.target.value)}></textarea>
            <button className="bg-blue-500 hover:opacity-90 text-white block rounded border-2 border-blue-900 py-2 px-3" onClick={handleAddPost}>Adicionar</button>
          </fieldset>
        <div className="h-auto">
            
            <div className=" h-auto  grid grid-cols-2 gap-4 p-10 ">
                {post.map((i,k)=>
                <div className="rounded  border-2 p-10 border-blue-800" key={k}>
                    <h3 className="mb-5 text-gray-900 text-2xl text-center ">{i.title}</h3>
                    <p className="mb-10 italic">{i.body}</p>
                </div>
                )}
            </div>
        </div>
        </div>
    </Theme>
  )
}