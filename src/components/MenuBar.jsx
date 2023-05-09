import React from "react"
import { Link } from "react-router-dom"
import {FiMenu} from "react-icons/fi"
import {IoTicketSharp} from "react-icons/io5"
function MenuBar(){
    const [hiddened, setHiddened] = React.useState("hidden lg:hidden w-full h-auto flex flex-col gap-1 items-center bg-white py-3")
    function clickBtn(){
        if(hiddened === "hidden lg:hidden w-full h-auto flex flex-col gap-1 items-center bg-white py-3"){
            setHiddened("lg:hidden w-full h-auto flex flex-col gap-1 items-center bg-white py-3")
        }else{
            setHiddened("hidden lg:hidden w-full h-auto flex flex-col gap-1 items-center bg-white py-3")
        }
    }

    return(
        <>
            <nav className="flex w-full items-center justify-between px-10 py-4">
                <div className="flex-1 flex items-center justify-between w-full md:w-0">
                    <button onClick={clickBtn} className="lg:hidden btn btn-square rounded-1xl btn-primary">
                        <FiMenu className="text-white" size={30}/>
                    </button>
                    <Link to="/">
                        <div className="flex items-center">
                            <IoTicketSharp size={50} className="text-primary filter blur-[2.8px] pr-1"/>
                            <div className="text-primary text-[24px] font-bold" >We</div><div className="text-accent text-[24px] font-bold" >tick</div>
                        </div>
                    </Link>
                </div>
                <div className="flex-1 hidden lg:block">
                    <ul className="flex gap-x-10 font-bold text-[16px]">
                        <li className="text-primary hover:text-accent"><Link to="/">Home</Link></li>
                        <li className="text-primary hover:text-accent"><Link to="/CreateEvent">Create Event</Link></li>
                        <li className="text-primary hover:text-accent"><Link to="/Location">Location</Link></li>
                    </ul>
                </div>
                <div className="hidden flex-1 lg:flex md:gap-10 md:justify-center">
                    <p className="flex items-center text-primary hover:text-neutral text-[16px] font-bold"><Link to="/Login">Log In</Link></p>
                    <button className="bg-primary text-white rounded-2xl h-[40px] px-10 shadow-lg font-bold text-[16px] hover:bg-secondary lg-shadow" type="submit"><Link to="/Signin">Sign Up</Link></button>
                </div>
            </nav>
            <div className={hiddened}>
                <ul className="flex flex-col gap-1 font-[500] text-[16px] items-center">
                    <li className="text-primary hover:text-accent"><Link to="/">Home</Link></li>
                    <li className="text-primary hover:text-accent"><Link to="/CreateEvent">Create Event</Link></li>
                    <li className="text-primary hover:text-accent"><Link to="/Location">Location</Link></li>
                </ul>
                <p className="flex items-center text-primary hover:text-neutral text-[16px] font-bold"><Link to="/Login">Log In</Link></p>
                <button className="bg-primary text-white rounded-2xl h-[40px] px-10 shadow-lg font-bold text-[16px] hover:bg-secondary lg-shadow" type="submit"><Link to="/Signin">Sign Up</Link></button>            
            </div>
        </>
        
    )
}

export default MenuBar