import {Link} from "react-router-dom"
import Image1 from "../assets/pexels-jack-winbow-1559486.jpg"
import { BsFacebook } from "react-icons/Bs"
import { BsWhatsapp } from "react-icons/Bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import {FiUser} from "react-icons/fi"
import {AiFillCreditCard} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import {FiUnlock} from "react-icons/fi"
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineSetting} from "react-icons/ai"
import {AiTwotoneCalendar} from "react-icons/ai"
import {IoTicketSharp} from "react-icons/io5"

function MyBooking(){
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
            <main className="px-[30px] md:flex md:bg-[#F4F7FF] p-[20px] md:px-[75px] md:py-[75px]">
                <aside id="menuBar" className="bg-white relative md:block rounded-2xl px-[20px] md:px-0 md:bg-none md:static md:block w-[300px] md:w-[370px] md:flex-initial shadow-lg md:shadow-none hidden md:bg-[#F4F7FF]">
                    <div className="flex items-center gap-3 mb-[56px]">
                        <div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
                            <img className="w-14 h-14 object-cover rounded-full border-2 border-white" src={Image1} alt="photo-profile"/>
                        </div>
                        <div><h1  className="font-bold text-[14px] text-secondary">Jhon Thomson</h1><p className="text-secondary">Entrepreneur, ID</p></div>
                    </div>
                    <div className="font-[500] text-[14p x]">
                        <ul className="cursor-pointer">
                            <li className="flex gap-3 py-3 text-primary "><FiUser size={20}/>Profile</li>
                            <li className="mx-5 py-3 text-primary">
                                <ul>
                                    <li className="flex gap-3 py-3 text-primary"><AiFillCreditCard size={20}/><Link to="/PaymentMethod">Card</Link></li>
                                    <li className="flex gap-3 py-3 text-primary"><AiFillEdit size={20}/><Link to="/Pofile">Edit Profil</Link></li>
                                    <li className="flex gap-3 py-3 text-primary"><FiUnlock size={20}/><Link to="/ChangePassword">Change Password</Link></li>
                                </ul>
                            </li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlinePlusCircle size={20}/><Link to="/CreateEvent">Creat Event</Link></li>
                            <li className="flex gap-3 py-3 text-accent"><AiOutlineUnorderedList size={20}/><Link to="/Booking">My Booking</Link></li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlineHeart size={20}/><Link to="/Wishlist">My Wishlist</Link></li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlineSetting size={20}/>Seting</li>
                        </ul>
                    </div>
                </aside>  

                <article className="inline-block w-full bg-white p-[20px] md:px-[100px] md:py-[70px] rounded-2xl flex-1">
                    <div className="md:flex md:justify-between mb-6">
                        <div className="mb-[30px] font-bold text-[20px] text-secondary">My Booking</div>
                        <div className="font-[400] text-[14px]">
                            <button className="px-5 rounded-2xl btn btn-primary shadow-lg flex gap-3 py-3 w-[150px] md:w-full text-white"><AiTwotoneCalendar size={20}/>March</button>
                        </div>
                    </div>
                    <div className="flex gap-x-10">
                        <div className="self-center w-[50px] flex-1">
                            <p className="font-bold text-[24px] text-accent">15</p>
                            <p className="font-[400] text-[16px] text-primary">Wed</p>
                        </div>
                        <div className="flex-initial w-full">
                            <h1 className="pb-2 font-[600] text-[24px] text-secondary">Sights & Sounds Exhibition</h1>
                            <p className="pb-2 font-[400] text-[14px] text-primary">Jakarta, Indonesia</p>
                            <p className="pb-2 font-[400] text-[14px] text-primary">Wed, 15 Nov, 4:00 PM</p>
                            <a className="pb-2 font-[400] text-[14px] text-accent" href=" ">Detail</a>
                        </div>
                        <div className="w-[32px] flex-1 text-neutral"><AiOutlineHeart size={30}/></div>
                    </div>
                    <hr className="w-full my-6"/>
                    <div className="flex gap-x-10">
                        <div className="self-center w-[50px] flex-1">
                            <p className="font-bold text-[24px] text-accent">15</p>
                            <p className="font-[400] text-[16px] text-primary">Wed</p>
                        </div>
                        <div className="flex-initial w-full">
                            <h1 className="pb-2 font-[600] text-[24px] text-secondary">Sights & Sounds Exhibition</h1>
                            <p className="pb-2 font-[400] text-[14px] text-primary">Jakarta, Indonesia</p>
                            <p className="pb-2 font-[400] text-[14px] text-primary">Wed, 15 Nov, 4:00 PM</p>
                            <a className="pb-2 font-[400] text-[14px] text-accent" href=" ">Detail</a>
                        </div>
                        <div className="w-[32px] flex-1 text-neutral"><AiOutlineHeart size={30}/></div>
                    </div>
                    <hr className="w-full my-6"/>
                    <div className="flex gap-x-10">
                        <div className="self-center w-[50px] flex-1">
                            <p className="font-bold text-[24px] text-accent">15</p>
                            <p className="font-[400] text-[16px] text-primary">Wed</p>
                        </div>
                        <div className="flex-initial w-full">
                            <h1 className="pb-2 font-[600] text-[24px] text-secondary">Sights & Sounds Exhibition</h1>
                            <p className="pb-2 font-[400] text-[14px] text-primary">Jakarta, Indonesia</p>
                            <p className="pb-2 font-[400] text-[14px] text-primary">Wed, 15 Nov, 4:00 PM</p>
                            <a className="pb-2 font-[400] text-[14px] text-accent" href=" ">Detail</a>
                        </div>
                        <div className="w-[32px] flex-1 text-neutral"><AiOutlineHeart size={30}/></div>
                    </div>
                    <hr className="w-full my-6"/>
                    <div className="flex gap-x-10">
                        <div className="self-center w-[50px] flex-1">
                            <p className="font-bold text-[24px] text-accent">15</p>
                            <p className="font-[400] text-[16px] text-primary">Wed</p>
                        </div>
                        <div className="flex-initial w-full">
                            <h1 className="pb-2 font-[600] text-[24px] text-secondary">Sights & Sounds Exhibition</h1>
                            <p className="pb-2 font-[400] text-[14px] text-primary">Jakarta, Indonesia</p>
                            <p className="pb-2 font-[400] text-[14px] text-primary">Wed, 15 Nov, 4:00 PM</p>
                            <a className="pb-2 font-[400] text-[14px] text-accent" href=" ">Detail</a>
                        </div>
                        <div className="w-[32px] flex-1 text-neutral"><AiOutlineHeart size={30}/></div>
                    </div>
                    <hr className="w-full my-6"/>
                    <div className="flex gap-x-10">
                        <div className="self-center w-[50px] flex-1">
                            <p className="font-bold text-[24px] text-accent">15</p>
                            <p className="font-[400] text-[16px] text-primary">Wed</p>
                        </div>
                        <div className="flex-initial w-full">
                            <h1 className="pb-2 font-[600] text-[24px] text-secondary">Sights & Sounds Exhibition</h1>
                            <p className="pb-2 font-[400] text-[14px] text-primary">Jakarta, Indonesia</p>
                            <p className="pb-2 font-[400] text-[14px] text-primary">Wed, 15 Nov, 4:00 PM</p>
                            <a className="pb-2 font-[400] text-[14px] text-accent" href=" ">Detail</a>
                        </div>
                        <div className="w-[32px] flex-1 text-neutral"><AiOutlineHeart size={30}/></div>
                    </div>
                    <hr className="w-full my-6"/>
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
        </>
    )
}

export default MyBooking