import {Link} from "react-router-dom"
import Image1 from "../assets/pexels-jack-winbow-1559486.jpg"
import { BsFacebook } from "react-icons/Bs"
import { BsWhatsapp } from "react-icons/Bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import {AiOutlineHeart} from "react-icons/ai"
import {IoTicketSharp} from "react-icons/io5"
import {AiOutlineClockCircle} from "react-icons/ai"
import {HiOutlineLocationMarker} from "react-icons/hi"
import Event1 from "../assets/Bitmap.png"
import Profile1 from "../assets/pexels-pixabay-220453.jpg"
import Location1 from "../assets/Rectangle.png"

function EventDetail(){
    return(
        <>
            <nav className="flex w-full items-center justify-between px-10 py-4">
                <div className="flex-1 flex items-center justify-between w-full md:w-0">
                    <button className="lg:hidden btn btn-square rounded-1xl btn-primary">
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
                    <ul className="hidden lg:flex gap-x-10 font-bold text-[16px]">
                        <li className="text-primary hover:text-accent"><Link to="/">Home</Link></li>
                        <li className="text-primary hover:text-accent"><Link to="/CreateEvent">Create Event</Link></li>
                        <li className="text-primary hover:text-accent"><Link to="/Location">Location</Link></li>
                    </ul>
                </div>
                <Link to="/Profile" className="hidden lg:flex">
                    <div className="hidden lg:flex flex-1">
                        <div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400 mx-3 ">
                            <img className="w-11 h-11 object-cover rounded-full border-2 border-white" src={Image1} alt="photo-profile"/>
                        </div>
                        <div className="text-secondary self-center font-bold text-[16px]">Jhon Tomson</div>
                    </div>
                </Link>
            </nav>
            <main className="w-full flex justify-center items-center py-12 px-[5%] md:bg-[#F4F7FF]">
                <div className="sm:flex sm:py-24 px-[3%] sm:px-24 bg-white rounded-2xl sm:drop-shadow-lg gap-10">
                    {/* left side */}
                    <div className="flex-[0.7] flex flex-col gap-10 items-center">
                        <div className="Relative w-64 h-96 border rounded-3xl drop-shadow-lg flex-shrink-0 overflow-hidden">
                            <img src={Event1} className="w-full h-full object-cover" alt="Event1"/>
                            <div className="absolute flex flex-col bg-gradient-to-t from-black/[0.9] to-transparent bottom-0 h-80 sm:h-60 w-full px-6 py-10 gap-2">
                                <h1 className="sm:hidden font-bold text-2xl text-white">Sights & Sounds Exhibition</h1>
                                <div className="sm:hidden flex gap-2 flex flex-col">
                                    <p className="flex gap-1 text-white items-center"><HiOutlineLocationMarker size={20} className="text-accent"/>Jakarta, Indonesia</p>
                                    <p className="flex gap-1 text-white items-center"><AiOutlineClockCircle size={20} className="text-accent"/>Wed, 15 Nov, 4:00 PM</p>
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
                        <h1 className="hidden sm:block font-bold text-2xl text-secondary mr-[30%]">Sights & Sounds Exhibition</h1>
                        <div className="hidden sm:flex gap-6 flex flex-col md:flex-row">
                            <p className="flex gap-1 text-secondary items-center"><HiOutlineLocationMarker size={20} className="text-accent"/>Jakarta, Indonesia</p>
                            <p className="flex gap-1 text-secondary items-center"><AiOutlineClockCircle size={20} className="text-accent"/>Wed, 15 Nov, 4:00 PM</p>
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
                        <hr className="border-1 h-[0.5px] w-full rounded-2xl"/>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold text-2xl text-secondary">Event Detail</h1>
                            <p className="text-secondary">After his controversial art exhibition Tear and Consume back in November 2018, in which guests were invited to tear up…</p>
                            <Link to=""><p className="text-neutral font-[450] hover:text-accent">Read more</p></Link>
                        </div>
                        <div className="flex flex-col gap-2"> 
                            <h1 className="font-bold text-2xl text-secondary">Location</h1>
                            <div className="w-80 h-auto rounded-2xl overflow-hidden">
                                <img src={Location1} className="w-full h-auto object-cover" />
                            </div>
                        </div>
                        <button className="btn btn-primary w-80">Buy Ticket</button>
                    </div>
                </div>
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
        </>
    )
}

export default EventDetail