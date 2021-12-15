import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <div className="z-40 bg-blue-500 w-screen h-20 py-2 px-10 flex items-center  fixed ">
            <nav>
                <ul className="flex w-auto ">
                    <li className="mr-8 text-xl font-bold hover:text-white active"><Link to="/">Posts</Link></li>
                    <li className="mr-8 text-xl font-bold hover:text-white"><Link to="/weather">Weather</Link></li>
                    <li className="mr-8 text-xl font-bold hover:text-white"><Link to="/movies">Movies</Link></li>
                    <li className="mr-8 text-xl font-bold hover:text-white"><Link to="/users">Users</Link></li>
                    <li className="mr-8 text-xl font-bold hover:text-white"><Link to="/listtasks">List Tasks</Link></li>
                    <li className="mr-8 text-xl font-bold hover:text-white"><Link to="/photos">Photos</Link></li>
                </ul>
            </nav>
        </div>
    )
}