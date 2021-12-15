import { useEffect } from "react";
import { useState } from "react";
import { Theme } from "../../components/theme";
import { PhotoList } from "../../type";
import * as C from '../styles'

export const Photos = () => {
    const [photos, setPhotos] = useState<PhotoList[]>([])
    const [loading, setLoading] = useState(false)


    const loadPhotos = async () => {
        setPhotos([])
        try {
            setLoading(true)
        let response = await fetch('https://jsonplaceholder.typicode.com/photos') 
        let json = await response.json()
        setLoading(false)
        setPhotos(json)
    } catch(e){
        setLoading(false)
        setPhotos([])
    }
    }

    useEffect(()=>{
        loadPhotos()
    },[])
    return(
        <Theme>
            <div className="bg-slate-900 min-h-screen pt-4 text-white">
                <h1 className="mt-8 mb-10 text-3xl text-center">Lista de imagens puxadas de uma api fake</h1>
                {loading && 
                            <C.ScreeanWarning>
                                <div className="c-loader"></div>
                            </C.ScreeanWarning>
                }
                <div className=" grid grid-cols-4 gap-4 p-10">
                    {photos.map((i,k)=>
                        <div className="p-3 border-2 border-gray-900 bg-gray-200 text-black " key={k}>
                        <p className="flex">
                                <small className="mr-2">{i.id}</small>
                                <img className="w-10 h-10" width={20} height={20} src={i.thumbnailUrl} alt="" />
                            </p> 
                            <p className="mr-5 flex flex-col items-center mt-10">
                                <h4 className="mb-2 font-bold text-center w-1/2">{i.title}</h4>
                                <img width={150} height={150} src={i.url} alt="" />
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Theme>
    )
}