import { Children } from "react"
import { Header } from "../header"
import {Footer} from '../footer'
import * as C from '../../pages/styles'

type Props = {
    children:any
}

export const Theme = ({children}:Props) => {
    return(
        <>
            <Header/>
            <div className=" pt-12 min-h-screen">
                {children}
            </div>
            <Footer/>
        </>
    )
}