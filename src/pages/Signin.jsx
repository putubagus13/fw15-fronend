import ToyFace2 from "../assets/ToyFaces2.png"
import ToyFace1 from "../assets/ToyFaces1.png"
import Fill from "../assets/Fill-1.png"
import Facebook from "../assets/bx_bxl-facebook-square.png"
import WhatsApp from "../assets/bx_bxl-whatsapp-square.png"
import Instagram from "../assets/bx_bxl-instagram-alt.png"
import Twitter from "../assets/bx_bxl-twitter.png"

function Signin(){
    return(
        <div className="bg-white">
         <main className="flex h-[1024px]">
                <div className="hidden md:block md:flex-1 bg-primary relative">
                    <img className="absolute top-[367px] right-[157px]" src={ToyFace2} alt="ToyFaces2"/>
                    <div className="absolute rotate-180 h-[194px] w-[394px] top-[510px] right-[50px] bg-gradient-to-b from-primary to-transparent "></div>
                    <img className="absolute top-[273px] right-[318px]" src={ToyFace1} alt="ToyFaces1"/>
                    <div className="absolute rotate-180 h-[250px] w-[480px] top-[480px] right-[190px] bg-gradient-to-b from-primary to-transparent "></div>
                </div>
                <div className="px-[30px] w-full md:flex-initial md:pt-[214px] md:w-[516px] md:px-[100px]">
                    <div className="flex items-center pb-[57px]">
                        <a href="index.html"><img src={Fill} alt="logo"/></a>
                        <div className="text-sky-600 text-[24px] font-bold" >We</div><div className="text-amber-500 text-[24px] font-bold" >tick</div>
                    </div>
                    <h1 className="text-[24px] font-bold" >Sign Up</h1>
                    <p className="flex gap-2 pb-11 pt-3">Already have an account?<a className="text-yellow-600"  href="login.html">Log in</a></p>
                    <form id="form">
                        <input type="text" placeholder="Fullname" className="input input-bordered input-primary my-2 h-14 w-full border-2 rounded-2xl px-5"  />
                        <input type="email" placeholder="email" className="input input-bordered input-primary my-2 h-14 w-full border-2 rounded-2xl px-5"  />
                        <div className="flex relative">
                            <input id="password" name="password" type="password" placeholder="Password" className="input input-bordered input-primary my-2 h-14 w-full border-2 rounded-2xl px-5"  />
                            <button id="reveal" type="button" className="absolute right-[15px] top-[25px]"><i className="text-black" data-feather="eye"></i></button>
                        </div>
                        <div className="flex relative">
                        <input id="confirm" name="confirm" type="password" placeholder="Password" className="input input-bordered input-primary my-2 h-14 w-full border-2 rounded-2xl px-5"  />
                            <button id="revealConfirm" type="button" className="absolute right-[15px] top-[25px]"><i className="text-black" data-feather="eye"></i></button>
                        </div>
                        <div id="alertSignin" className="text-red-600"></div>
                        <div className="py-4">
                            <div className="flex"><input type="checkbox" className="checkbox checkbox-primary w-6 h-6" /><p className="px-2">Accept terms and condition</p></div>
                            <div id="accbox" className="text-zinc-400"></div>
                        </div>
                        <button className="my-2 h-14 w-full btn btn-primary rounded-2xl shadow-lg" type="submit">Sign in</button>
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
                            <li><img src={Facebook}/></li>
                            <li><img src={WhatsApp}/></li>
                            <li><img src={Instagram}/></li>
                            <li><img src={Twitter}/></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <ul className="pb-[10px] text-[#C1C5D0]">
                        <li className="color-[#373A42] pb-[10px] text-black" >Wetick</li>
                        <li className="color-[#373A42] pb-[10px]" >About Us</li>
                        <li className="color-[#373A42] pb-[10px]" >Features</li>
                        <li className="color-[#373A42] pb-[10px]" >Blog</li>
                        <li className="color-[#373A42] pb-[10px]" >Payments</li>
                        <li className="color-[#373A42] pb-[10px]" >Mobile App</li>
                    </ul>
                </div>
                <div>
                    <ul className="pb-[10px] text-[#C1C5D0]">
                        <li className="color-[#373A42] pb-[10px] text-black" >Features</li>
                        <li className="color-[#373A42] pb-[10px]" >Booking</li>
                        <li className="color-[#373A42] pb-[10px]" >Create Event</li>
                        <li className="color-[#373A42] pb-[10px]" >Discover</li>
                        <li className="color-[#373A42] pb-[10px]" >Register</li>
                    </ul>
                </div>
                <div>
                    <ul className="pb-[10px] text-[#C1C5D0]">
                        <li className="color-[#373A42] pb-[10px] text-black" >Company</li>
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

export default Signin;