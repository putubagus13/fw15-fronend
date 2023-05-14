import {Link} from "react-router-dom"
import { BsFacebook } from "react-icons/Bs"
import { BsWhatsapp } from "react-icons/Bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import {FiUser} from "react-icons/fi"
import {AiFillCreditCard} from "react-icons/ai"
import {AiFillEdit} from "react-icons/ai"
import {FiUnlock} from "react-icons/fi"
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineSetting} from "react-icons/ai"
import {IoTicketSharp} from "react-icons/io5"
import {FiLogOut} from "react-icons/fi"
import MenuBar1 from "../components/MenuBar1"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout} from "../redux/reducers/auth"
import http from "../helper/http"
import { useNavigate } from "react-router-dom"

function CreateEvent(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const [menuBar, setMenuBar] = React.useState('')
    const [profile, setProfile] = React.useState({})
    
    React.useEffect(()=>{
        async function getProfileUser(){
            try {
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

    function doLogout(){
        dispatch(logout())
        navigate("/")
    }
    return(
        <>
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
                            {profile?.picture && (<img className='w-12 h-12 border-4 border-white rounded-full' src={profile?.picture.startsWith('https')? profile?.picture : `http://localhost:8888/uploads/${profile?.picture}`} alt={profile?.fullName} />)}
                        </div>
                        <div className="text-secondary self-center font-bold text-[16px]">{profile?.fullName}</div>
                    </div>
                </Link>
            </nav>
            <main className="px-[30px] md:flex md:bg-[#F4F7FF] p-[20px] md:px-[75px] md:py-[75px]">
                <aside id="menuBar" className={menuBar}>
                    <div className="flex flex-col xl:flex-row items-center gap-3 mb-[56px]">
                        <div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
                        {profile?.picture && (<img className='w-12 h-12 border-4 border-white rounded-full' src={profile?.picture.startsWith('https')? profile?.picture : `http://localhost:8888/uploads/${profile?.picture}`} alt={profile?.fullName} />)}
                        </div>
                        <div><h1  className="font-bold text-[14px] text-secondary">{profile?.fullName}</h1><p className="text-secondary">{profile?.profession}, {profile?.id}</p></div>
                    </div>
                    <div className="font-[500] text-[14p x]">
                        <ul className="cursor-pointer">
                        <li className="flex gap-3 py-3 text-primary "><FiUser size={20}/>Profile</li>
                            <li className="mx-5 py-3 text-primary">
                                <ul>
                                    <li className="flex gap-3 py-3 text-primary"><AiFillCreditCard size={20}/><Link to="/PaymentMethod">Card</Link></li>
                                    <li className="flex gap-3 py-3 text-primary"><AiFillEdit size={20}/><Link to="/Profile">Edit Profil</Link></li>
                                    <li className="flex gap-3 py-3 text-primary"><FiUnlock size={20}/><Link to="/ChangePassword">Change Password</Link></li>
                                </ul>
                            </li>
                            <li className="flex gap-3 py-3 text-accent"><AiOutlinePlusCircle size={20}/><Link to="/CreateEvent">Creat Event</Link></li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlineUnorderedList size={20}/><Link to="/Booking">My Booking</Link></li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlineHeart size={20}/><Link to="/Wishlist">My Wishlist</Link></li>
                            <li className="flex gap-3 py-3 text-primary"><AiOutlineSetting size={20}/>Seting</li>
                            <button onClick={doLogout} className="flex gap-3 py-3 text-primary pb-10"><FiLogOut size={20}/>Log out</button>
                        </ul>
                    </div>
                </aside>  

        <article className="inline-block w-full bg-white p-[20px] md:px-[100px] md:py-[70px] rounded-2xl flex-1">
            <div className="md:flex md:justify-between mb-6">
                <div className="mb-[30px] font-bold text-[20px] text-secondary">My Manage</div>
                <div className="font-[400] text-[14px]">
                    <label htmlFor="my-modal" className="px-5 rounded-2xl btn btn-primary shadow-lg flex gap-3 py-3 w-[150px] md:w-full text-white">Create</label>

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
                                                <input type="text" placeholder="Input event name" className="text-[14px] text-secondary border-neutral input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[16px] text-primary">Category</span>
                                                </label>
                                                <input type="text" placeholder="Input event category" className="text-[14px] text-secondary border-neutral input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-10">
                                        <div className="flex-1">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[16px] text-primary">Location</span>
                                                </label>
                                                <input type="text" placeholder="Input event location" className="text-[14px] text-secondary border-neutral input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[16px] text-primary">Date time show</span>
                                                </label>
                                                <input type="date" placeholder="YYYY-MM-DD" className="text-[14px] text-secondary border-neutral input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-10">
                                        <div className="flex-1">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[16px] text-primary">Price</span>
                                                </label>
                                                <input type="text" placeholder="Input event price" className="text-[14px] text-secondary border-neutral input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="form-control w-full max-w-xs">
                                                <label className="label">
                                                    <span className="label-text font-bold text-[16px] text-primary">Image</span>
                                                </label>
                                                <input type="file" className="file-input w-full max-w-xs input-neutral" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text font-bold text-[16px] text-primary">Detail</span>
                                        </label>
                                        <input type="text" placeholder="Input detail event" className="text-[14px] text-secondary border-neutral input input-bordered w-full" />
                                    </div>
                                </div>

                            </div>
                            
                            <div className="modal-action">
                                <label htmlFor="my-modal" className="rounded-2xl btn btn-primary w-3/12">Save</label>
                                <label htmlFor="my-modal" className="rounded-2xl btn btn-neutral w-3/12">Close</label>
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

export default CreateEvent