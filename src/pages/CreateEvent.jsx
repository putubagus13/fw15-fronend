import {Link} from "react-router-dom"
import Fill from "../assets/Fill-1.png"
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

function CreateEvent(){
    return(
        <>
            <nav className="flex w-full items-center justify-between px-10 py-4">
                <div className="flex items-center justify-between w-full md:w-0">
                    <button id="tongler" className="md:hidden bg-primary p-2 rounded-[5px] shadow-lg"><FiMenu className="text-white" size={30}/></button>
                    <div className="flex">
                        <img className="w-11 h-11" src={Fill} alt="logo"/>
                        <div className="text-primary text-[24px] font-bold" >We</div><div className="text-accent text-[24px] font-bold" >tick</div>
                    </div>
                </div>
                <div>
                    <ul className="hidden md:flex gap-x-10 font-bold text-[16px]">
                        <li className="text-primary hover:text-secondary"><Link to="/Home"/>Home</li>
                        <li className="text-primary hover:text-secondary"><Link to="/CreateEvent"/>Create Event</li>
                        <li className="text-primary hover:text-secondary"><Link to="/Location"/>Location</li>
                    </ul>
                </div>
                <Link to="/Profile">
                    <div className="hidden md:flex">
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
                                    <li className="flex gap-3 py-3 text-primary"><AiFillCreditCard size={20}/><a href="payment metode.html">Card</a></li>
                                    <li className="flex gap-3 py-3 text-primary"><AiFillEdit size={20}/>Edit Profil</li>
                                    <li className="flex gap-3 py-3 text-primary"><FiUnlock size={20}/><a href="change-password.html">Change Password</a></li>
                                </ul>
                            </li>
                            <li className="flex gap-3 py-3 text-accent"><AiOutlinePlusCircle size={20}/><a href="creat-event.html">Creat Event</a></li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlineUnorderedList size={20}/><a href="my-booking1.html">My Booking</a></li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlineHeart size={20}/><a href="my-wishlist1.html">My Wishlist</a></li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlineSetting size={20}/>Seting</li>
                        </ul>
                    </div>
                </aside>  

        <article className="inline-block w-full bg-white p-[20px] md:px-[100px] md:py-[70px] rounded-2xl flex-1">
            <div className="md:flex md:justify-between mb-6">
                <div className="mb-[30px] font-bold text-[20px] text-secondary">My Manage</div>
                <div className="font-[400] text-[14px]">
                    <label htmlFor="my-modal" className="btn btn-primary">Create</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal" className="modal-toggle" />
                        <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-[24px] text-secondary">Create Event</h3>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-6">
                                    <div className="flex gap-10">
                                        <div className="flex-1">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[16px] text-primary">Name</span>
                                                </label>
                                                <input type="text" placeholder="Input event name" className="text-[12px] text-neutral border-neutral input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[16px] text-primary">Category</span>
                                                </label>
                                                <input type="text" placeholder="Input event category" className="text-[12px] text-neutral border-neutral input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-10">
                                        <div className="flex-1">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[16px] text-primary">Location</span>
                                                </label>
                                                <input type="text" placeholder="Input event location" className="text-[12px] text-neutral border-neutral input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[16px] text-primary">Date time show</span>
                                                </label>
                                                <input type="text" placeholder="Input dat time show" className="text-[12px] text-neutral border-neutral input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-10">
                                        <div className="flex-1">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[16px] text-primary">Price</span>
                                                </label>
                                                <input type="text" placeholder="Input event price" className="text-[12px] text-neutral border-neutral input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[16px] text-primary">Image</span>
                                                </label>
                                                <input type="text" placeholder="Input image event" className="text-[12px] text-neutral border-neutral input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-bold text-[16px] text-primary">Detail</span>
                                        </label>
                                        <input type="text" placeholder="Input detail event" className="text-[12px] text-neutral border-neutral input input-bordered w-full" />
                                    </div>
                                </div>

                            </div>
                            
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="btn btn-primary w-3/12">Save</label>
                            </div>
                        </div>
                        </div>
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
                    <div className="flex gap-2">
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Detail</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Update</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Delete</Link>
                    </div>
                </div>
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
                    <div className="flex gap-2">
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Detail</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Update</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Delete</Link>
                    </div>
                </div>
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
                    <div className="flex gap-2">
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Detail</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Update</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Delete</Link>
                    </div>
                </div>
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
                    <div className="flex gap-2">
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Detail</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Update</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Delete</Link>
                    </div>
                </div>
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
                    <div className="flex gap-2">
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Detail</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Update</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Delete</Link>
                    </div>
                </div>
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
                    <div className="flex gap-2">
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Detail</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Update</Link>
                        <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Delete</Link>
                    </div>
                </div>
            </div>
            <hr className="w-full my-6"/>
        </article>
    </main>
    <footer className="h-[476px] px-[30px] md:px-[330px] w-full  md:pt-[100px] md:px-[218px] md:bg-[#F4F7FF]">
                <div className="md:flex md:justify-between">
                <div className="mb-10">
                    <div className="flex items-center">
                        <img src={Fill} alt="logo"/>
                        <div className="text-primary text-[24px] font-bold" >We</div><div className="text-accent text-[24px] font-bold" >tick</div>
                    </div>
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
                    <ul className="pb-[10px] text-[#C1C5D0]">
                        <li className="color-[#373A42] pb-[10px] text-black">Wetick</li>
                        <li className="color-[#373A42] pb-[10px]">About Us</li>
                        <li className="color-[#373A42] pb-[10px]">Features</li>
                        <li className="color-[#373A42] pb-[10px]">Blog</li>
                        <li className="color-[#373A42] pb-[10px]">Payments</li>
                        <li className="color-[#373A42] pb-[10px]">Mobile App</li>
                    </ul>
                </div>
                <div>
                    <ul className="pb-[10px] text-[#C1C5D0]">
                        <li className="color-[#373A42] pb-[10px] text-black">Features</li>
                        <li className="color-[#373A42] pb-[10px]">Booking</li>
                        <li className="color-[#373A42] pb-[10px]">Create Event</li>
                        <li className="color-[#373A42] pb-[10px]">Discover</li>
                        <li className="color-[#373A42] pb-[10px]">Register</li>
                    </ul>
                </div>
                <div>
                    <ul className="pb-[10px] text-[#C1C5D0]">
                        <li className="color-[#373A42] pb-[10px] text-black">Company</li>
                        <li className="color-[#373A42] pb-[10px]">Partnership</li>
                        <li className="color-[#373A42] pb-[10px]">Help</li>
                        <li className="color-[#373A42] pb-[10px]">Terms of Service</li>
                        <li className="color-[#373A42] pb-[10px]">Privacy Policy</li>
                        <li className="color-[#373A42] pb-[10px]">Sitemap</li>
                    </ul>
                </div>
                </div>
                <p className="flex pb-[68px] pt-[130px] color-[#5A7184] text-[#C1C5D0]">© 2020 Wetick All Rights Reserved</p>
            </footer>
        </>
    )
}

export default CreateEvent