import {Link} from "react-router-dom"
import Image1 from "../assets/pexels-jack-winbow-1559486.jpg"
import { BsFacebook } from "react-icons/Bs"
import { BsWhatsapp } from "react-icons/Bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import {IoTicketSharp} from "react-icons/io5"
import {ImPriceTags} from "react-icons/im"
import Place from "../assets/place.png"

function Payment(){
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
                <div className="lg:flex sm:py-24 px-[3%] sm:px-24 bg-white rounded-2xl sm:drop-shadow-lg gap-10">
                    {/* left side */}
                    <div className="flex-[0.95] flex-col items-center overflow-hidden">
                        <img src={Place} className="w-full h-auto" alt="place"/>
                    </div>
                    {/* right side */}
                    <div className="flex-1 flex flex-col gap-8 px-[2%] sm:px-0">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-[30px] text-secondary text-sm">Ticket</p>
                            <p className="text-accent flex gap-2"><ImPriceTags className="drop-shadow-lg" size={20}/>By Price</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-6 justify-between">
                                <div className="flex rounded-xl bg-neutral p-2 w-10 h-10 items-center justify-center"><IoTicketSharp className="text-secondary" size={25}/></div>
                                <div className="">
                                    <h1 className="font-bold text-sm text-secondary">SECTION REG, ROW 1</h1>
                                    <p className="text-neutral text-[13px]">12 Seats available</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-secondary font-bold text-sm text-center">$15</p>
                                    <p className="text-neutral text-[13px]">per person</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-1 text-[14px] text-secondary flex items-center justify-center">Quantity</div>
                                <div className="flex gap-3 justify-end">
                                    <button className="h-8 w-8 rounded-lg border-[2px] border-neutral hover:bg-neutral hover:border-primary h-10 text-lg font-bold text-neutral hover:text-primary">-</button>
                                    <div className="flex-1 text-bold text-[14px] flex items-center">0</div>
                                    <button className="h-8 w-8 rounded-lg border-[2px] border-neutral hover:bg-neutral hover:border-primary h-10 text-lg font-bold text-neutral hover:text-primary">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-6 justify-between">
                                <div className="flex rounded-xl bg-neutral p-2 w-10 h-10 items-center justify-center"><IoTicketSharp className="text-secondary" size={25}/></div>
                                <div className="">
                                    <h1 className="font-bold text-sm text-secondary">SECTION REG, ROW 1</h1>
                                    <p className="text-neutral text-[13px]">12 Seats available</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-secondary font-bold text-sm text-center">$15</p>
                                    <p className="text-neutral text-[13px]">per person</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-1 text-[14px] text-secondary flex items-center justify-center">Quantity</div>
                                <div className="flex gap-3 justify-end">
                                    <button className="h-8 w-8 rounded-lg border-[2px] border-neutral hover:bg-neutral hover:border-primary h-10 text-lg font-bold text-neutral hover:text-primary">-</button>
                                    <div className="flex-1 text-bold text-[14px] flex items-center">0</div>
                                    <button className="h-8 w-8 rounded-lg border-[2px] border-neutral hover:bg-neutral hover:border-primary h-10 text-lg font-bold text-neutral hover:text-primary">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-6 justify-between">
                                <div className="flex rounded-xl bg-neutral p-2 w-10 h-10 items-center justify-center"><IoTicketSharp className="text-secondary" size={25}/></div>
                                <div className="">
                                    <h1 className="font-bold text-sm text-secondary">SECTION REG, ROW 1</h1>
                                    <p className="text-neutral text-[13px]">12 Seats available</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-secondary font-bold text-sm text-center">$15</p>
                                    <p className="text-neutral text-[13px]">per person</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-1 text-[14px] text-secondary flex items-center justify-center">Quantity</div>
                                <div className="flex gap-3 justify-end">
                                    <button className="h-8 w-8 rounded-lg border-[2px] border-neutral hover:bg-neutral hover:border-primary h-10 text-lg font-bold text-neutral hover:text-primary">-</button>
                                    <div className="flex-1 text-bold text-[14px] flex items-center">0</div>
                                    <button className="h-8 w-8 rounded-lg border-[2px] border-neutral hover:bg-neutral hover:border-primary h-10 text-lg font-bold text-neutral hover:text-primary">+</button>
                                </div>
                            </div>
                        </div>
                        <hr className="h-[0.5px] w-full border"/>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between">
                                <p className="font-[600] text-lg text-secondary">Ticket Section</p>
                                <p className="font-[600] text-lg text-accent">VIP</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-[600] text-lg text-secondary">Quantity</p>
                                <p className="font-[600] text-lg text-accent">2</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="font-[600] text-lg text-secondary">Total Payment</p>
                                <p className="font-[600] text-lg text-accent">$70</p>
                            </div>
                        </div>
                        <button className="btn w-full lg:w-[60%] btn-primary">Checkout</button>
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

export default Payment