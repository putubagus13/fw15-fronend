import { BsFacebook } from "react-icons/Bs"
import { BsWhatsapp } from "react-icons/Bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom"
import {FiUser} from "react-icons/fi"
import {AiFillCreditCard} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import {FiUnlock} from "react-icons/fi"
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineSetting} from "react-icons/ai"
import {BiChevronDown} from "react-icons/bi"
import {IoTicketSharp} from "react-icons/io5"
import {FiLogOut} from "react-icons/fi"
import MenuBar1 from "../components/MenuBar1"
import React from "react"
import http from "../helper/http"
import moment from "moment"

function Profile(){
    const navigate = useNavigate
    const [menuBar, setMenuBar] = React.useState('')
    const [profile, setProfile] = React.useState({})
    const [token, setToken] = React.useState("")
    const [initToken, setInitToken] = React.useState('')
    
    React.useEffect(()=>{
        if(window.localStorage.getItem("token")){
            setToken(window.localStorage.getItem("token"))
        }
        setInitToken(true)

        async function getProfileUser(){
            try {
                const token = window.localStorage.getItem("token")
                console.log(token)
                const {data} = await http(token).get("/profile")
                setProfile(data.results)
                console(data)
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }
        getProfileUser()
    },[])

    React.useEffect(()=>{
        if(initToken){
            if(!token){
                navigate("/login", {state: {warningMessage: "you have to login first"}})
            }
        }
    },[token, initToken, navigate])
    
    return(
        <div>
            <nav className="flex w-full items-center justify-between px-10 py-4">
                <div className="flex-1 flex items-center justify-between w-full md:w-0">
                    <MenuBar1 showMenuBarFunc ={setMenuBar} />
                    <Link to="/">
                        <div className="flex items-center">
                            <IoTicketSharp size={50} className="text-primary filter blur-[2.8px] pr-1"/>
                            <div className="text-primary text-[24px] font-bold" >We</div><div className="text-accent text-[24px] font-bold" >tick</div>
                        </div>
                    </Link>
                </div>
                <div className="flex-1 hidden lg:block">
                    <ul className="hidden lg:flex gap-x-10 font-bold text-[16px]">
                        <li className="text-primary hover:text-accent"><Link to="/">Home</Link></li>
                        <li className="text-primary hover:text-accent"><Link to="/CreateEvent">Create Event</Link></li>
                        <li className="text-primary hover:text-accent"><Link to="/Location">Location</Link></li>
                    </ul>
                </div>
                <Link to="/Profile" className="hidden lg:flex">
                    <div className="hidden lg:flex flex-1">
                        <div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400 mx-3 ">
                            <img className="w-11 h-11 object-cover rounded-full border-2 border-white" src={`http://localhost:8888/uploads/${profile.picture}`} alt="photo-profile"/>
                        </div>
                        <div className="text-secondary self-center font-bold text-[16px]">{profile?.fullName}</div>
                    </div>
                </Link>
            </nav>
            <main className="px-[30px] md:flex md:bg-[#F4F7FF] p-[20px] md:px-[75px] md:py-[75px]">
                <aside id="menuBar" className={menuBar}>
                    <div className="flex flex-col xl:flex-row items-center gap-3 mb-[56px]">
                        <div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
                            <img className="w-14 h-14 object-cover rounded-full border-2 border-white" src={`http://localhost:8888/uploads/${profile.picture}`} alt="photo-profile"/>
                        </div>
                        <div><h1  className="font-bold text-[14px] text-secondary">{profile?.fullName}</h1><p className="text-secondary">{profile?.profession}, {profile?.id}</p></div>
                    </div>
                    <div className="font-[500] text-[14p x]">
                        <ul className="cursor-pointer">
                            <li className="flex gap-3 py-3 text-primary "><FiUser size={20}/>Profile</li>
                            <li className="mx-5 py-3 text-primary">
                                <ul>
                                    <li className="flex gap-3 py-3 text-primary"><AiFillCreditCard size={20}/><Link to="/PaymentMethod">Card</Link></li>
                                    <li className="flex gap-3 py-3 text-accent"><AiFillEdit size={20}/><Link to="/Pofile">Edit Profil</Link></li>
                                    <li className="flex gap-3 py-3 text-primary"><FiUnlock size={20}/><Link to="/ChangePassword">Change Password</Link></li>
                                </ul>
                            </li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlinePlusCircle size={20}/><Link to="/CreateEvent">Creat Event</Link></li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlineUnorderedList size={20}/><Link to="/Booking">My Booking</Link></li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlineHeart size={20}/><Link to="/Wishlist">My Wishlist</Link></li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlineSetting size={20}/>Seting</li>
                            <li className="flex gap-3 py-3 text-primary pb-10"><FiLogOut size={20}/>Log out</li>
                        </ul>
                    </div>
                </aside> 

                <article className="flex flex-col-reverse md:flex-row inline-block w-full bg-white p-[20px] md:px-[100px] md:py-[70px] rounded-2xl">
                <div id="leftside" className="flex-1 ">
                        <div className="mb-[50px] font-bold text-[20px] text-secondary">Profile</div>
                        <div className="w-full text-center">
                            <div className="md:hidden relative inline-block rounded-full border-[6px] cursor-pointer bg-gradient-to-br from-primary to-secondary hover:from-primary hover:to-accent w-[137px] h-[137px]">
                                <img className="absolute object-cover rounded-full h-full w-full p-[6px]" src={`http://localhost:8888/uploads/${profile.picture}`} alt="change-photo"/>
                                <div className="absolute top-[50px] left-[50px] text-white"><i data-feather="camera"></i></div>
                            </div>
                        </div>
                        <div className="my-[30px] md:my-0 block md:flex items-center font-[400] text-[14px]">
                            <div className="w-[153px] text-secondary">Nama</div>
                            <div className="border-2 rounded-2xl h-[55px] text-left w-full px-[20px] py-[17px] text-[#777777] border-neutral ">{profile?.fullName}</div>
                        </div>
                        <div className="my-[30px] md:my-0 block md:flex items-center font-[400] text-[14px] font-[400] text-[14px]">
                            <div className="w-[153px] text-secondary">Username</div>
                            <div className="flex flex-row gap-3 h-[55px] text-left w-full md:px-[20px] py-[17px] text-[#777777] border-neutral ">{profile?.username}<a href=" " className="text-accent">Edit</a></div>
                        </div>
                        <div className="my-[30px] md:my-0 block md:flex items-center font-[400] text-[14px]">
                            <div className="w-[153px] text-secondary">Email</div>
                            <div className="flex flex-row gap-3 h-[55px] text-left w-full md:px-[20px] py-[17px] text-[#777777] ">{profile?.email} <a href=" " className="text-accent">Edit</a></div>
                        </div>
                        <div className="my-[30px] md:my-0 block md:flex items-center font-[400] text-[14px]">
                            <div className="w-[153px] text-secondary">Phone Number</div>
                            <div className="flex flex-row gap-3 h-[55px] text-left w-full md:px-[20px] py-[17px] text-[#777777] ">{profile?.phoneNumbe}<a href=" " className="text-accent">Edit</a></div>
                        </div>
                        <div className="my-[30px] md:my-0 block md:flex items-center font-[400] text-[14px]">
                            <div className="w-[153px] text-secondary">Gender</div>
                            <div className="flex gap-10 h-[55px] text-left w-full md:px-[20px] py-[17px] text-[#777777] ">
                                <div className="flex gap-1">
                                    <input type="radio" name="radio-2" className="radio radio-primary w-4 h-4"/><p className="pl-[5px]">Male</p>
                                </div>
                                <div className="flex gap-1">
                                    <input type="radio" name="radio-2" className="radio radio-primary w-4 h-4"/><p className="pl-[5px]">Famale</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-[30px] md:my-0 block md:flex items-center font-[400] text-[14px]">
                            <div className="w-[153px] text-secondary">Profession</div>
                            <div className="flex justify-between border-2 rounded-2xl h-[55px] text-left w-full px-[20px] py-[17px] text-[#777777] border-neutral ">{profile?.profession}
                                <div><BiChevronDown size={20}/></div>
                            </div>
                        </div>
                        <div className="my-[30px] md:my-3 block md:flex items-center font-[400] text-[14px]">
                            <div className="w-[153px] text-secondary">Nationality</div>
                            <div className="flex justify-between border-2 rounded-2xl h-[55px] text-left w-full px-[20px] py-[17px] text-[#777777] border-neutral ">{profile?.nasionality}
                                <div><BiChevronDown size={20}/></div>
                            </div>
                        </div>
                        <div className="my-[30px] block md:flex items-center font-[400] text-[14px]">
                            <div className="w-[153px] text-secondary">Birthday Date</div>
                            <div className="flex flex-row gap-3 h-[55px] text-left w-full md:px-[20px] py-[17px] text-[#777777] ">{moment(profile?.birtDate).format('DD/MM/YYYY')}<a href=" " className="text-yellow-600 px-[10px]">Edit</a></div>
                        </div>
                        <button className="h-[61px] w-full md:w-3/12 rounded-2xl md:my-[30px] btn btn-primary shadow-lg" type="input">Save</button>
                </div>

                <hr className="hidden md:block h-[314px] border-2 rounded-2xl mx-[50px]"/>

                <div id="rightside" className="text-center hidden md:block">
                        <div className="relative inline-block rounded-full border-[6px] cursor-pointer bg-gradient-to-br from-yellow-500 to-blue-400 hover:from-yellow-500 hover:to-blue-800 truncate w-[137px] h-[137px]">
                            <img className="absolute object-cover rounded-full h-full w-full p-[6px]" src={`http://localhost:8888/uploads/${profile.picture}`} alt="change-photo"/>
                            <div className="absolute top-[50px] left-[50px] text-white"><i data-feather="camera"></i></div>
                        </div>
                        <button className="hidden md:block mt-[50px] border-2 w-full h-[40px] rounded-2xl btn btn-outline btn-primary rounded-2xl" type="submit">Choose Photo</button>
                        <ul className="hidden md:block my-[25px] text-left">
                            <li>Image size: max, 2 MB</li>
                            <li>Image formats: .JPG, .JPEG, .PNG</li>
                        </ul>
                </div>
                </article>
            </main>
            <footer className="h-[476px] px-[30px] md:px-[20%] w-full md:py-10 md:bg-[#F4F7FF]">
                <div className="md:flex md:justify-between">
                <div className="mb-10">
                <Link to="/">
                        <div className="flex items-center">
                            <IoTicketSharp size={50} className="text-primary filter blur-[2.8px] pr-1"/>
                            <div className="text-primary text-[24px] font-bold" >We</div><div className="text-accent text-[24px] font-bold" >tick</div>
                        </div>
                    </Link>
                    <div className="flex gap-2 py-3 text-[14px] font-[400]">Find events you love with our</div>
                    <div>
                        <ul className="flex gap-6">
                            <BsFacebook size={20}/>
                            <BsWhatsapp size={20}/>
                            <AiFillInstagram size={25}/>
                            <AiFillTwitterCircle size={25}/>
                        </ul>
                    </div>
                    
                </div>
                <div>
                    <ul className="pb-[10px] ">
                        <li className="text-primary font-bold pb-[10px]">Wetick</li>
                        <li className="text-neutral pb-[10px]">About Us</li>
                        <li className="text-neutral pb-[10px]">Features</li>
                        <li className="text-neutral pb-[10px]">Blog</li>
                        <li className="text-neutral pb-[10px]">Payments</li>
                        <li className="text-neutral pb-[10px]">Mobile App</li>
                    </ul>
                </div>
                <div>
                    <ul className="pb-[10px] ">
                        <li className="text-primary font-bold pb-[10px]">Features</li>
                        <li className="text-neutral pb-[10px]">Booking</li>
                        <li className="text-neutral pb-[10px]">Create Event</li>
                        <li className="text-neutral pb-[10px]">Discover</li>
                        <li className="text-neutral pb-[10px]">Register</li>
                    </ul>
                </div>
                <div>
                    <ul className="pb-[10px] ">
                        <li className="text-primary font-bold pb-[10px]">Company</li>
                        <li className="text-neutral pb-[10px]">Partnership</li>
                        <li className="text-neutral pb-[10px]">Help</li>
                        <li className="text-neutral pb-[10px]">Terms of Service</li>
                        <li className="text-neutral pb-[10px]">Privacy Policy</li>
                        <li className="text-neutral pb-[10px]">Sitemap</li>
                    </ul>
                </div>
                </div>
                <p className="flex pt-[130px] text-neutral ">© 2020 Wetick All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Profile;