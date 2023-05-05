import ToyFace2 from "../assets/ToyFaces2.png"
import ToyFace1 from "../assets/ToyFaces1.png"
import Fill from "../assets/Fill-1.png"
import { BsFacebook } from "react-icons/Bs"
import { BsWhatsapp } from "react-icons/Bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import {Link} from "react-router-dom"

function Login(){
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
                    <div className="flex items-center pb-[57px]">
                        <Link to="/Home"><img src={Fill} alt="logo"/></Link>
                        <div className="text-primary text-[24px] font-bold" >We</div><div className="text-accent text-[24px] font-bold" >tick</div>
                    </div>
                    <h1 className="text-[24px] font-bold text-secondary" >Log In</h1>
                    <p className="flex gap-2 pb-11 pt-3 text-secondary">Hi, Welcome back to Urticket!</p>
                    <form id="form">
                        <input type="email" placeholder="email" className="input input-bordered input-primary my-2 h-14 w-full border-2 rounded-2xl px-5"  />
                        <div className="flex relative">
                            <input id="password" name="password" type="password" placeholder="Password" className="input input-bordered input-primary my-2 h-14 w-full border-2 rounded-2xl px-5"  />
                            <button id="reveal" type="button" className="absolute right-[15px] top-[25px]"><i className="text-black" data-feather="eye"></i></button>
                        </div>
                        <div id="alertSignin" className="text-red-600"></div>
                        <div className="py-4 text-right">
                            <Link to="/ForgotPassword" className="text-accent font-bold text-right">Forgot Password?</Link>
                        </div>
                        <button className="my-2 h-14 w-full btn btn-primary rounded-2xl shadow-lg" type="submit">Log in</button>
                    </form>
                    
                </div>
            </main>
            <footer className="hidden md:block h-[476px] px-[30px] md:px-[330px] w-full  md:pt-[100px] md:px-[218px]">
                <div className="md:flex md:justify-between">
                <div className="mb-10">
                    <div className="flex items-center">
                        <img src={Fill} alt="logo"/>
                        <div className="text-sky-600 text-[24px] font-bold" >We</div><div className="text-amber-500 text-[24px] font-bold" >tick</div>
                    </div>
                    <div className="flex gap-2 py-3">Find events you love with our</div>
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
                        <li className="color-[#373A42] pb-[10px] text-primary font-bold" >Wetick</li>
                        <li className="color-[#373A42] pb-[10px]" >About Us</li>
                        <li className="color-[#373A42] pb-[10px]" >Features</li>
                        <li className="color-[#373A42] pb-[10px]" >Blog</li>
                        <li className="color-[#373A42] pb-[10px]" >Payments</li>
                        <li className="color-[#373A42] pb-[10px]" >Mobile App</li>
                    </ul>
                </div>
                <div>
                    <ul className="pb-[10px] text-[#C1C5D0]">
                        <li className="color-[#373A42] pb-[10px] text-primary font-bold" >Features</li>
                        <li className="color-[#373A42] pb-[10px]" >Booking</li>
                        <li className="color-[#373A42] pb-[10px]" >Create Event</li>
                        <li className="color-[#373A42] pb-[10px]" >Discover</li>
                        <li className="color-[#373A42] pb-[10px]" >Register</li>
                    </ul>
                </div>
                <div>
                    <ul className="pb-[10px] text-[#C1C5D0]">
                        <li className="color-[#373A42] pb-[10px] text-primary font-bold" >Company</li>
                        <li className="color-[#373A42] pb-[10px]" >Partnership</li>
                        <li className="color-[#373A42] pb-[10px]" >Help</li>
                        <li className="color-[#373A42] pb-[10px]" >Terms of Service</li>
                        <li className="color-[#373A42] pb-[10px]" >Privacy Policy</li>
                        <li className="color-[#373A42] pb-[10px]" >Sitemap</li>
                    </ul>
                </div>
                </div>
                <p className="flex pb-[68px] pt-[130px] color-[#5A7184] text-[#C1C5D0]">© 2020 Wetick All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Login;