import React from "react"
import { Link } from "react-router-dom"
import {FiMenu} from "react-icons/fi"
import {IoTicketSharp} from "react-icons/io5"
function MenuBar1(){
    const [hiddened, setHiddened] = React.useState("lg:hidden w-full h-auto flex flex-col gap-1 items-center bg-white py-3")
    function clickBtn(){
        if(hiddened === "lg:hidden w-full h-auto flex flex-col gap-1 items-center bg-white py-3"){
            setHiddened("hidden lg:hidden w-full h-auto flex flex-col gap-1 items-center bg-white py-3")
        }else{
            setHiddened("lg:hidden w-full h-auto flex flex-col gap-1 items-center bg-white py-3")
        }
    }

    return(
        <>
           
        </>
        
    )
}

export default MenuBar1