import React from "react"
import { Link, useNavigate } from "react-router-dom"
import {FiMenu} from "react-icons/fi"
import {IoTicketSharp} from "react-icons/io5"
import http from "../helper/http"
import {FiUser} from "react-icons/fi"
import {AiFillCreditCard} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import {FiUnlock} from "react-icons/fi"
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineSetting} from "react-icons/ai"
import {FiLogOut} from "react-icons/fi"

function MenuBar(){
    const navigate = useNavigate()

    const [hiddened, setHiddened] = React.useState("hidden lg:hidden w-full h-auto flex flex-col gap-1 pl-10 bg-white py-3")
    const [profile, setProfile] = React.useState({})
    const [token, setToken] = React.useState('')
    function clickBtn(){
        if(hiddened === "hidden lg:hidden w-full h-auto flex flex-col gap-1 pl-10 bg-white py-3"){
            setHiddened("lg:hidden w-full h-auto flex flex-col gap-1 pl-10 bg-white py-3")
        }else{
            setHiddened("hidden lg:hidden w-full h-auto flex flex-col gap-1 pl-10 bg-white py-3")
        }
    }

    React.useEffect(()=>{
        async function getProfileUser(){
            try {
                const token = window.localStorage.getItem("token")
                const {data} = await http(token).get("/profile")
                console.log(data)
                setProfile(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }
        getProfileUser()

        if(window.localStorage.getItem("token")){
            console.log(window.localStorage.getItem("token"))
            setToken(window.localStorage.getItem("token"))
        }

    },[])
   
    function doLogout(){
        window.localStorage.removeItem("token")
        navigate("/login")
         
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
                {token ? <div className="hidden flex-1 lg:flex md:gap-10 md:justify-end items-center">
                    <div className="flex items-center gap-3">
                    <Link to="/Profile"><div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
                            {profile?.picture && <img className="w-14 h-14 object-cover rounded-full border-2 border-white" src={`http://localhost:8888/uploads/${profile.picture}`} alt="photo-profile"/>}
                        </div></Link>
                        <div>
                            <h1  className="font-bold text-[14px] text-secondary">{profile?.fullName}</h1><p className="text-secondary">{profile?.profession}, ID: {profile?.id}</p>
                            <button onClick={doLogout} className="flex gap-1 items-center text-secondary font-bold text-[14px] hover:text-accent" type="submit"><FiLogOut size={15}/>Log Out</button>
                        </div></div></div> : <div className="lg:flex gap-6 hidden flex-row items-center">
                    <p className="flex items-center text-primary hover:text-neutral text-[16px] font-bold"><Link to="/Login">Log In</Link></p>
                    <button className="bg-primary text-white rounded-2xl h-[40px] px-10 shadow-lg font-bold text-[16px] hover:bg-secondary lg-shadow" type="submit"><Link to="/Signin">Sign Up</Link></button>
                </div>}
            </nav>
            <div className={hiddened}>
                {token ? 
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
                                {profile?.picture && <img className="w-14 h-14 object-cover rounded-full border-2 border-white" src={`http://localhost:8888/uploads/${profile.picture}`} alt="photo-profile"/>}
                            </div>
                            <div><h1  className="font-bold text-[14px] text-secondary">{profile?.fullName}</h1><p className="text-secondary">{profile?.profession}, ID: {profile?.id}</p></div>
                        </div>
                        <div className="font-[500] text-[14p x]">
                            <ul className="cursor-pointer">
                                <Link to="/Profile"><li className="flex gap-3 py-3 text-primary "><FiUser size={20}/>Profile</li></Link>
                                <li className="mx-5 py-3 text-primary">
                                    <ul>
                                        <li className="flex gap-3 py-3 text-primary hover:text-accent"><AiFillCreditCard size={20}/><Link to="/PaymentMethod">Card</Link></li>
                                        <li className="flex gap-3 py-3 text-primary hover:text-accent"><AiFillEdit size={20}/><Link to="/Profile">Edit Profil</Link></li>
                                        <li className="flex gap-3 py-3 text-primary hover:text-accent"><FiUnlock size={20}/><Link to="/ChangePassword">Change Password</Link></li>
                                    </ul>
                                </li>
                                <li className="flex gap-3 py-3 text-primary hover:text-accent"><AiOutlinePlusCircle size={20}/><Link to="/CreateEvent">Creat Event</Link></li>
                                <li className="flex gap-3 py-3 text-primary hover:text-accent"><AiOutlineUnorderedList size={20}/><Link to="/Booking">My Booking</Link></li>
                                <li className="flex gap-3 py-3 text-primary hover:text-accent"><AiOutlineHeart size={20}/><Link to="/Wishlist">My Wishlist</Link></li>
                                <li className="flex gap-3 py-3 text-primary hover:text-accent"><AiOutlineSetting size={20}/>Seting</li>
                                <button onClick={doLogout} className="flex gap-3 py-3 text-primary pb-10 hover:text-accent" type="submit"><FiLogOut size={20}/>Log Out</button>
                            </ul>
                        </div></div>:<div>
                        <ul className="flex flex-col gap-1 font-[500] text-[16px] items-center">
                            <li className="text-primary hover:text-accent"><Link to="/">Home</Link></li>
                            <li className="text-primary hover:text-accent"><Link to="/CreateEvent">Create Event</Link></li>
                            <li className="text-primary hover:text-accent"><Link to="/Location">Location</Link></li>
                        </ul>
                        <div className="flex gap-2 flex-col lg:flex-row items-center">
                            <p className="flex items-center text-primary hover:text-neutral text-[16px] font-bold"><Link to="/Login">Log In</Link></p>
                            <button className="bg-primary text-white rounded-2xl h-[40px] px-10 shadow-lg font-bold text-[16px] hover:bg-secondary lg-shadow" type="submit"><Link to="/Signin">Sign Up</Link></button>
                        </div></div>
                }
               
            </div>
        </>
        
    )
}

export default MenuBar