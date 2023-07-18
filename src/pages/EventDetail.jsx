import {Link, useNavigate} from "react-router-dom"
import { BsFacebook, BsWhatsapp } from "react-icons/bs"
import { AiFillInstagram,
        AiFillTwitterCircle, 
        AiOutlineHeart,
        AiOutlineClockCircle } from "react-icons/ai"
import {FiMenu, FiLogOut} from "react-icons/fi"
import {SiArtixlinux} from "react-icons/si"
import {HiOutlineLocationMarker} from "react-icons/hi"
import Profile1 from "../assets/pexels-pixabay-220453.jpg"
import Location1 from "../assets/Rectangle.png"
import { useParams } from "react-router-dom"
import React from "react"
import http from "../helper/http"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/reducers/auth"

function EventDetail(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    let {id} = useParams()
    const [events, setEvent] = React.useState({})
    const [profile, setProfile] = React.useState({})

    React.useEffect(()=>{
        async function getProfileUser(){
            try {
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

        async function getDataEvent(){
            try {
                const {data} = await http().get(`/events/detail/${id}`)
                console.log(data)
                setEvent(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                console.log(message)
                }
            }
        }
        getDataEvent()

    },[])

    function doLogout(){
        dispatch(logout())
        navigate("/")
    }

    function doSignUp(){
        navigate("/Signin")
    }

    async function doReservation(){
        navigate(`/Reservation/${id}`)
    }
    return(
        <>
            <nav className="flex w-full items-center justify-between px-10 py-4">
                <div className="flex-1 flex items-center justify-between w-full md:w-0">
                    <button className="lg:hidden btn btn-square rounded-1xl btn-primary">
                        <FiMenu className="text-white" size={30}/>
                    </button>
                    <Link to="/">
                        <div className="flex items-center">
                            <SiArtixlinux size={50} className="text-primary filter blur-[2.8px] pr-1"/>
                            <div className="text-primary text-[24px] font-bold" >TIX</div><div className="text-accent text-[24px] font-bold" >Event</div>
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
                {token ? <div className="hidden flex-1 lg:flex md:gap-10 md:justify-end items-center">
                    <div className="flex items-center gap-3">
                    <Link to="/Profile"><div className="inline-block w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
                        {profile?.picture && (<img className='object-cover w-full h-full border-4 border-white rounded-full' src={profile?.picture.startsWith('https')? profile?.picture : `http://localhost:8888/uploads/${profile?.picture}`} alt={profile?.fullName} />)}
                        </div></Link>
                        <div>
                            <h1  className="font-bold text-[14px] text-secondary">{profile?.fullName}</h1><p className="text-secondary">{profile?.profession}, ID: {profile?.id}</p>
                            <button onClick={doLogout} className="flex gap-1 items-center text-secondary font-bold text-[14px] hover:text-accent" type="submit"><FiLogOut size={15}/>Log Out</button>
                        </div></div></div> : <div className="lg:flex gap-6 hidden flex-row items-center">
                    <p className="flex items-center text-primary hover:text-neutral text-[16px] font-bold"><Link to="/Login">Log In</Link></p>
                    <button onClick={doSignUp} className="bg-primary text-white rounded-2xl h-[40px] px-10 shadow-lg font-bold text-[16px] hover:bg-secondary lg-shadow" type="submit">Sign Up</button>
                </div>}
            </nav>
            <main className="w-full flex justify-center items-center py-12 px-[5%] md:bg-[#F4F7FF]">
                <div className="sm:flex sm:py-24 px-[3%] sm:px-24 bg-white rounded-2xl sm:drop-shadow-lg gap-10">
                    {/* left side */}
                    <div className="flex-[0.7] flex flex-col gap-10 items-center">
                        <div className="Relative w-64 h-96 border rounded-3xl drop-shadow-lg flex-shrink-0 overflow-hidden">
                            {events?.picture && <img src={events?.picture.startsWith('https')? events?.picture : `http://localhost:8888/uploads/${events?.picture}`} className="w-full h-full object-cover" alt={events?.fullName}/>}
                            <div className="absolute flex flex-col bg-gradient-to-t from-black/[0.9] to-transparent bottom-0 h-80 sm:h-60 w-full px-6 py-10 gap-2">
                                <h1 className="sm:hidden font-bold text-2xl text-white">{events?.title}</h1>
                                <div className="sm:hidden flex gap-2 flex flex-col">
                                    <p className="flex gap-1 text-white items-center"><HiOutlineLocationMarker size={20} className="text-accent"/>{events.location}</p>
                                    <p className="flex gap-1 text-white items-center"><AiOutlineClockCircle size={20} className="text-accent"/>{moment(events.date).format('MMMM Do YYYY, h:mm')}</p>
                                </div>
                                <div className="flex sm:hidden text-white font-[500] justify-between gap-1 items-center">
                                    <div className="flex flex-col gap-1">
                                        <p>Attendees</p>
                                        <div className="flex">
                                            <div className="w-6 h-6 rounded-full overflow-hidden ml:[-5px]">
                                                <img src={Profile1} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px]">
                                                <img src={Profile1} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px]">
                                                <img src={Profile1} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px] bg-accent">
                                                <p className="pt-[4px] text-white text-[10px] text-center">+99</p>
                                            </div>
                                        </div>
                                    </div>
                                    <AiOutlineHeart size={25} className="text-white hover:text-[#f43f5e]"/>
                                </div>
                            </div>
                        </div>
                        <p className="hidden sm:flex w-full justify-center gap-3 items-center text-secondary"><AiOutlineHeart size={30} className="text-neutral hover:text-[#f43f5e]"/>Add to Wishlist</p>
                    </div>
                    {/* right side */}
                    <div className="flex-1 flex flex-col gap-6 px-[2%] sm:px-0">
                        <h1 className="hidden sm:block font-bold text-2xl text-secondary mr-[30%]">{events?.title}</h1>
                        <div className="hidden sm:flex gap-6 flex flex-col md:flex-row">
                            <p className="flex gap-1 text-secondary items-center"><HiOutlineLocationMarker size={20} className="text-accent"/>{events?.location}</p>
                            <p className="flex gap-1 text-secondary items-center"><AiOutlineClockCircle size={20} className="text-accent"/>{moment(events.date).format('MMMM Do YYYY, h:mm')}</p>
                        </div>
                        <div className="hidden sm:flex text-secondary font-[500] flex-col gap-1">
                            <p>Attendees</p>
                            <div className="flex">
                                <div className="w-6 h-6 rounded-full overflow-hidden ml:[-5px]">
                                    <img src={Profile1} className="w-full h-full object-cover" />
                                </div>
                                <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px]">
                                    <img src={Profile1} className="w-full h-full object-cover" />
                                </div>
                                <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px]">
                                    <img src={Profile1} className="w-full h-full object-cover" />
                                </div>
                                <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px] bg-accent">
                                    <p className="pt-[4px] text-white text-[10px] text-center">+99</p>
                                </div>
                            </div>
                        </div>
                        <hr className="hidden md:block border-[1.5px] h-[0.5px] w-full rounded-2xl"/>
                        <div className="flex flex-col gap-2">
                            <h1 className="pt-10 sm:pt-0 font-bold text-2xl text-secondary">Event Detail</h1>
                            <p className="text-secondary">{events?.desciption}</p>
                            <Link to=""><p className="text-neutral font-[450] hover:text-accent">Read more</p></Link>
                        </div>
                        <div className="flex flex-col gap-2"> 
                            <h1 className="font-bold text-2xl text-secondary">Location</h1>
                            <div className="w-80 h-auto rounded-2xl overflow-hidden">
                                <img src={Location1} className="w-full h-auto object-cover" />
                            </div>
                        </div>
                        <button onClick={doReservation} className="btn btn-primary w-80">Buy Ticket</button>
                    </div>
                </div>
            </main>
            <footer className="h-[476px] px-[30px] md:px-[20%] w-full md:py-10 md:bg-[#F4F7FF]">
                <div className="md:flex md:justify-between">
                <div className="mb-10">
                    <Link to="/">
                        <div className="flex items-center">
                            <SiArtixlinux size={50} className="text-primary filter blur-[2.8px] pr-1"/>
                            <div className="text-primary text-[24px] font-bold" >TIX</div><div className="text-accent text-[24px] font-bold" >Event</div>
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
        </>
    )
}

export default EventDetail