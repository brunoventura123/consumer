import {Posts} from './pages/Posts'
import { Users } from './pages/users';
import { Movies } from './pages/movies'
import { Weather } from './pages/weather';
import { ListTasks } from './pages/listTasks';
import { Photos } from './pages/Photos';
import { BrowserRouter, Route, Routes } from "react-router-dom";


export const Router = () => {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Posts/>}/>
          <Route path="/weather" element={<Weather/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/listtasks" element={<ListTasks/>}/>
          <Route path="/photos" element={<Photos/>}/>
        </Routes>
            
        </BrowserRouter>
    )
}