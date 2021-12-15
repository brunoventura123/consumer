import { useEffect } from "react"
import { useState } from "react"
import { Theme } from "../../components/theme"
import { GetClimate } from "../../type"
import * as C from '../styles'

export const Weather = () => {
    const [climate, setClimate] = useState<GetClimate[]>([])
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState('')
    
    
    const loadWeather = async () => {
        setShow('')
        setClimate([])
        if(city !== ''){
        setLoading(true)
        

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)}&appid=2393ed22a8edf4f976a3eeafee67e208&units=metric&lang=pt_br`)
        let json = await response.json()

        setLoading(false)

        if(json.cod === 200){
            setClimate([
                json.name,
                json.sys.country,
                json.main.temp,
                json.main.temp_max,
                json.main.temp_min,
                json.weather[0].description,
                json.weather[0].icon,
                json.main.humidity
            ])
            console.log(json)
        } else{
            setShow('Localização não encontrada!') 
            
        }
    } else {
        setShow('Digite o nome de uma cidade')
        
    }
    }
    
    return(
        <Theme>
            
            <div className="p-10 text-center bg-slate-900 h-screen">
            <h1 className="text-2xl text-white m-auto">Clima - API teste</h1>
                <div className="mt-4">
                    <input className="outline-none mr-4 p-2 text-xl" type="text" value={city} onChange={e=>setCity(e.target.value)} />
                    <button className="text-white p-2 text-xl bg-blue-500 hover:opacity-90 " onClick={loadWeather}>Buscar</button>
                </div>
                {loading && 
                        <C.ScreeanWarning>
                            <div className="c-loader mt-10"></div>
                        </C.ScreeanWarning>
                    }
                {climate.length > 0 &&
                <fieldset className="border-2 border-white w-1/3 m-auto bg-blue-500 p-3 mt-8 mb-20">
                    <legend className="text-left text-white text-2xl">Clima</legend>
                    
                    
                    <>
                    <p className="mt-2 mb-12 text-3xl text-center">{climate[0]} / {climate[1]}<br /></p>
                    <p className="my-2 text-left text-xl font-bold"><span className="font-normal">Temp:</span> {climate[2]} °C <br /></p>
                    <p className="my-2 text-left text-xl font-bold"><span className="font-normal">Temp Máx:</span> {climate[3]} °C<br /></p>
                    <p className="my-2 text-left text-xl font-bold"><span className="font-normal">Temp Min:</span> {climate[4]} °C<br /></p>
                    <p className="my-2 text-left text-xl font-bold"><span className="font-normal">Humidade do Ar:</span> {climate[7]}%<br /></p>
                    <p className="my-2 flex items-center justify-center text-uppercase font-bold text-xl"> {climate[5]} <img className="ml-6" src={`http://openweathermap.org/img/wn/${climate[6]}@2x.png`} alt="" /></p>
                    </>
                    </fieldset>
                    }
                    {climate.length === 0 &&
                        <C.ScreeanWarning>
                            <div className="text-white mt-10">{show}</div>
                        </C.ScreeanWarning>
                    }
            </div>
        </Theme>
    )
}