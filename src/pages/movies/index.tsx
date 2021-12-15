import { useEffect } from "react"
import { useState } from "react"
import { Theme } from "../../components/theme"
import { Movie } from "../../type"
import * as C from '../styles'

export const Movies = () => {

    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(false)

    const loadMovies = async () => {
        setMovies([])
        try {
        setLoading(true)
        let res = await fetch('https://api.b7web.com.br/cinema/')
        let json = await res.json()
        setLoading(false)
        setMovies(json)
    } catch(e){
        setLoading(false)
        
    }
    }

    useEffect(()=>{
        loadMovies()
    },[])
    return(
        <Theme>
            <div className="bg-slate-900 min-h-screen">
            <h1 className="p-10 text-3xl text-center text-white">Filmes em Cartaz vindo de api teste</h1>
            {loading && 
                        <C.ScreeanWarning>
                            <div className="c-loader"></div>
                        </C.ScreeanWarning>
                    }
            <div className="grid grid-cols-5 gap-3 p-10">
            
               {movies.map((i,k)=>
                    <div className="border border-white text-white" key={k}>
                        <img src={i.avatar} alt="" />
                        <p className="text-center p-2">{i.titulo}</p>
                    </div>
               )}
            </div>
            {!loading && movies.length == 0 &&
                <div className="text-center text-lg text-white">Não deu certo. Tente mais tarde!</div>
            }
            </div>
        </Theme>
        
    )
}