import ToyFace2 from "../assets/ToyFaces2.png"
import ToyFace1 from "../assets/ToyFaces1.png"
import {Link} from "react-router-dom"
import { BsFacebook } from "react-icons/Bs"
import { BsWhatsapp } from "react-icons/Bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import {IoTicketSharp} from "react-icons/io5"
function Signin(){
    return(
        <div>
         <main className="flex h-[1024px]">
                <div className="hidden md:block md:flex-1 bg-primary relative">
                    <img className="absolute top-[367px] right-[157px]" src={ToyFace2} alt="ToyFaces2"/>
                    <div className="absolute rotate-180 h-[194px] w-[394px] top-[510px] right-[50px] bg-gradient-to-b from-primary to-transparent "></div>
                    <img className="absolute top-[273px] right-[318px]" src={ToyFace1} alt="ToyFaces1"/>
                    <div className="absolute rotate-180 h-[250px] w-[480px] top-[480px] right-[190px] bg-gradient-to-b from-primary to-transparent "></div>
                </div>
                <div className="px-[30px] w-full md:flex-initial md:pt-[214px] md:w-[516px] md:px-[100px]">
                    <Link to="/">
                        <div className="flex items-center pb-[57px]">
                            <IoTicketSharp size={50} className="text-primary filter blur-[2.8px] pr-1"/>
                            <div className="text-primary text-[24px] font-bold" >We</div><div className="text-accent text-[24px] font-bold" >tick</div>
                        </div>
                    </Link>
                    <h1 className="text-[24px] font-bold text-secondary" >Sign Up</h1>
                    <p className="flex gap-2 pb-11 pt-3 text-secondary">Already have an account?<Link to="/Login" className="text-accent font-bold">Log in</Link></p>
                    <form id="form">
                        <input type="text" placeholder="Fullname" className="input input-bordered input-primary text-secondary my-2 h-14 w-full border-2 rounded-2xl px-5"  />
                        <input type="email" placeholder="email" className="input input-bordered input-primary text-secondary my-2 h-14 w-full border-2 rounded-2xl px-5"  />
                        <div className="flex relative">
                            <input id="password" name="password" type="password" placeholder="Password" className="input text-secondary text-secondary input-bordered input-primary my-2 h-14 w-full border-2 rounded-2xl px-5"  />
                            <button id="reveal" type="button" className="absolute right-[15px] top-[25px]"><i className="text-black" data-feather="eye"></i></button>
                        </div>
                        <div className="flex relative">
                        <input id="confirm" name="confirm" type="password" placeholder="Password" className="input input-bordered text-secondary input-primary my-2 h-14 w-full border-2 rounded-2xl px-5"  />
                            <button id="revealConfirm" type="button" className="absolute right-[15px] top-[25px]"><i className="text-black" data-feather="eye"></i></button>
                        </div>
                        <div id="alertSignin" className="text-red-600"></div>
                        <div className="py-4">
                            <div className="flex"><input type="checkbox" className="checkbox checkbox-primary w-6 h-6" /><p className="px-2 text-primary">Accept terms and condition</p></div>
                            <div id="accbox" className="text-zinc-400"></div>
                        </div>
                        <button className="my-2 h-14 w-full btn btn-primary rounded-2xl shadow-lg" type="submit">Sign in</button>
                    </form>
                    
                </div>
            </main>
            <footer className="h-[476px] px-[30px] md:px-[20%] w-full md:py-[60px]">
                <div className="md:flex md:justify-between">
                <div className="mb-10">
                    <Link to="/">
                        <div className="flex items-center pb-[57px]">
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

export default Signin;