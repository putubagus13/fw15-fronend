import ToyFace2 from "../assets/ToyFaces2.png"
import ToyFace1 from "../assets/ToyFaces1.png"
import {Link} from "react-router-dom"
import {FiMenu} from "react-icons/fi"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {RiSearch2Line} from "react-icons/ri"
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {RxDotFilled} from "react-icons/rx"
import { BsFacebook } from "react-icons/Bs"
import { BsWhatsapp } from "react-icons/Bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import {IoTicketSharp} from "react-icons/io5"
import Elips1 from "../assets/Ellipse-right-1.png"
import Elips2 from "../assets/center-elips.png"
import Elips3 from "../assets/top-elips.png"
import Elips4 from "../assets/left-bottom.png"
import Elips5 from "../assets/bottom-center.png"
import Elips6 from "../assets/top-right.png"
import axios from "axios"
import React from "react"
import moment from "moment"



function Home(){
    const [events, setEvents] = React.useState([])
    const [cities, setCities] = React.useState([])
    const [partners, setPartners] = React.useState([])
    const [category, setcategory] = React.useState([])
    
    React.useEffect(()=>{
        async function getDataEvent(){
            const {data} = await axios.get('http://localhost:8888/events?limit=7')
            console.log(data)
            setEvents(data.results)
        }
        getDataEvent()

        async function getDataCities(){
            const {data} = await axios.get('http://localhost:8888/cities?limit=7')
            console.log(data)
            setCities(data.results)
        }
        getDataCities()

        async function getCategory(){
            const {data} = await axios.get('http://localhost:8888/categories?limit=7')
            console.log(data)
            setcategory(data.results)
        }
        getCategory()

        async function getDataPartners(){
            const {data} = await axios.get('http://localhost:8888/partners?limit=7')
            console.log(data)
            setPartners(data.results)
        }
        getDataPartners()
    },[])
    return(
        <>
            <nav className="flex w-full items-center justify-between px-10 py-4">
                <div className="flex-1 flex items-center justify-between w-full md:w-0">
                    <div className="flex-1 md:hidden">
                        <button id="tongler" className=" bg-primary p-2 rounded-[5px] shadow-lg"><FiMenu className="text-white" size={30}/></button>
                    </div>
                    <div className="flex-1 flex justify-end items-center md:justify-start">
                        <IoTicketSharp size={50} className="text-primary filter blur-[2.8px] pr-1"/>
                        <div className="text-primary text-[24px] font-bold" >We</div><div className="text-accent text-[24px] font-bold" >tick</div>
                    </div>
                </div>
                <div className="hidden md:block md:flex-1 md:flex md:justify-center">
                    <ul className="hidden md:flex gap-x-10 font-bold text-[16px]">
                        <li className="text-primary hover:text-accent"><Link to="/">Home</Link></li>
                        <li className="text-primary hover:text-accent"><Link to="/CreateEvent">Create Event</Link></li>
                        <li className="text-primary hover:text-accent"><Link to="/Location">Location</Link></li>
                    </ul>
                </div>
                <div className="hidden flex-1 md:flex md:gap-10 md:justify-center md:block">
                    <p className="flex items-center text-primary hover:text-neutral text-[16px] font-bold"><Link to="/Login">Log In</Link></p>
                    <button className="bg-primary text-white rounded-2xl h-[40px] px-10 shadow-lg font-bold text-[16px] hover:bg-secondary lg-shadow" type="submit"><Link to="/Signin">Sign Up</Link></button>
                </div>
            </nav>
            <header>
                <div className="flex h-[660px] w-full bg-primary md:items-center px-20 relative overflow-hidden">
                    <div className="">
                        <img src={ToyFace2} className="absolute bottom-0 right-16 md:top-48 w-[225px] h-auto"/>
                        <div className="absolute bottom-0 right-16 md:bottom-[170px] bg-gradient-to-t from-primary via-primary to-transparent h-36 w-[225px]"/>
                        <img src={ToyFace1} className="absolute bottom-0 right-52 md:top-20 h-auto w-[358px]"/>
                        <div className="absolute bottom-0 right-52 md:bottom-[135px] bg-gradient-to-t from-primary via-primary to-transparent h-36 w-[358px]"/>
                    </div>
                    <div className="relative flex justify-around md:justify-center flex-col gap-10 w-[700px] h-full">
                        <div className="text-white font-bold text-6xl text-center md:text-left">Find events you <br/>love with our</div>
                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:bg-white rounded-2xl items-center px-6 py-3 sm:py-0">
                            <RiSearch2Line size={100} className="hidden sm:block"/>
                            <input type="text" placeholder="Search Event" className="text-secondary rounded-2xl input w-full max-w-xs h-12" />
                            <hr className="hidden sm:block h-12 border-[1.5px] rounded-2xl my-2 mx-6"/>
                            <HiOutlineLocationMarker size={100} className="hidden sm:block"/>
                            <input type="text" placeholder="Where?" className="text-secondary rounded-2xl input w-full max-w-xs h-12" />
                            <button className="btn btn-square rounded-2xl btn-accent">
                                <AiOutlineArrowRight size={20} className="text-white"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="h-[196px] w-full flex justify-center items-end">
                    <div className="flex gap-2 py-1 px-10 rounded-2xl font-bold text-[16px] bg-accent text-white"><AiOutlineMinus size={30} className="text-white"/>Events</div>
                </div>
                <h1 className="w-full flex justify-center py-[25px] text-primary font-bold text-[36px]">Event For You</h1>
                <div className="flex gap-10 justify-center items-center py-10 px-10">
                    <button className="btn btn-square rounded-1xl btn-neutral">
                        <AiOutlineArrowLeft size={20} className="text-white"/>
                    </button>
                    <div className="w-12 h-20 py-2 border-white hover:border-accent rounded-[10px] text-neutral hover:text-accent border-2 text-center">
                        <p className="text-[14px] font-bold">13</p>
                        <p className="text-[14px]">Mon</p>
                        <div className="flex justify-center"><RxDotFilled size={20}/></div>
                    </div>
                    <div className="w-12 h-20 py-2 border-white hover:border-accent rounded-[10px] text-neutral hover:text-accent border-2 text-center">
                        <p className="text-[14px] font-bold">14</p>
                        <p className="text-[14px]">Tue</p>
                        <div className="flex justify-center"><RxDotFilled size={20}/></div>
                    </div>
                    <div className="w-12 h-20 py-2 border-white hover:border-accent rounded-[10px] text-neutral hover:text-accent border-2 text-center">
                        <p className="text-[14px] font-bold">15</p>
                        <p className="text-[14px]">Wed</p>
                        <div className="flex justify-center"><RxDotFilled size={20}/></div>
                    </div>
                    <div className="hidden md:block w-12 h-20 py-2 border-white hover:border-accent rounded-[10px] text-neutral hover:text-accent border-2 text-center">
                        <p className="text-[14px] font-bold">16</p>
                        <p className="text-[14px]">thu</p>
                        <div className="flex justify-center"><RxDotFilled size={20}/></div>
                    </div>
                    <div className="hidden md:block w-12 h-20 py-2 border-white hover:border-accent rounded-[10px] text-neutral hover:text-accent border-2 text-center">
                        <p className="text-[14px] font-bold">17</p>
                        <p className="text-[14px]">Fri</p>
                        <div className="flex justify-center"><RxDotFilled size={20}/></div>
                    </div>
                    <button className="btn btn-square rounded-1xl btn-neutral">
                        <AiOutlineArrowRight size={20} className="text-white"/>
                    </button>
                </div>
            </header>
            <main>
                <section className="List-Event flex justify-center">
                    <div className="flex w-11/12 overflow-x-scroll scrollbar-hidden scrollbar-w-0 gap-4">
                        {events.map(event =>{
                            return(
                                <div className="w-64 h-96 border rounded-3xl drop-shadow-lg flex-shrink-0 overflow-hidden relative" key={event.id}>
                                    <img src={`http://localhost:8888/uploads/${event.picture}`} className="w-full h-full object-cover"/>
                                    <div className="absolute flex flex-col bg-gradient-to-t from-black/[0.9] to-transparent bottom-0 h-48 w-full px-6 py-10 gap-2">
                                        <div className="text-white">{moment(event.date).format('DD MMMM YYYY')}</div>
                                        <div className="font-bold text-2xl text-white">{event.title}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <div className="flex w-full justify-center py-10">
                    <button type="submit" className="font-bold text-accent hover:text-white h-9 px-16 py-1 border border-accent rounded-2xl hover:bg-accent">See All</button>
                </div>

                {/* section Cities */}
                <div className="flex w-full justify-center pt-36">
                    <div className="relative w-11/12 h-auto bg-primary rounded-[50px] px-[20%] md:px-[10%] py-16 flex flex-col gap-6 items-center overflow-hidden">
                        <img src={Elips1} className="absolute bottom-0 right-0 w-96 h-auto" />
                        <img src={Elips2} className="absolute bottom-0 right-80 w-72 h-auto" />
                        <img src={Elips3} className="absolute top-0 left-0 w-70 h-auto" />
                        <div className="relative flex flex-col gap-6">
                            <div className="flex justify-start w-full">
                                <p className="flex bg-neutral/[0.5] w-48 rounded-2xl text-xl text-white font-bold gap-2 items-center justify-start font-[500]"><AiOutlineMinus size={40} className="text-white"/>Location</p>
                            </div>
                            {/* Top side location */}
                            <div className="flex flex-col md:flex md:flex-row items-center gap-6 md:gap-6">
                                <h1 className="w-60 font-bold text-white text-4xl ">Discover <br/> Events Near <br/> You</h1>
                                {cities.map((event,  i) =>{
                                    if ( i < 3) {
                                        return (
                                        <div className="flex flex-col justify-between items-center" key={event.id}>
                                            <div className="w-60 h-36 overflow-hidden rounded-2xl">
                                                <img src={`http://localhost:8888/uploads/${event.picture}`} className="object-cover"/>
                                            </div>
                                            <p className="text-white">{event.name}</p>
                                        </div>
                                    )}
                                })}
                            </div>
                            {/* bottom side location */}
                            <div className="hidden md:flex h-48 items-center justify-between gap-6">
                                {cities.map((event,  i)=>{
                                    if( i > 2){
                                        return(
                                            <div className=" flex flex-col justify-between items-center" key={event.id}>
                                                <div className="w-60 h-36 overflow-hidden rounded-2xl">
                                                    <img src={`http://localhost:8888/uploads/${event.picture}`} className="object-cover"/>
                                                </div>
                                                <p className="text-white">{event.name}</p>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <div className="w-full flex justify-center">
                                <button type="submit" className="font-bold bg-white text-accent hover:text-white h-9 px-6 md:w-48 py-1 border border-accent rounded-2xl hover:bg-accent">See All</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section event category */}
                <div className="h-[196px] w-full flex justify-center items-end">
                    <div className="flex gap-2 py-1 px-10 rounded-2xl font-bold text-[16px] bg-accent text-white"><AiOutlineMinus size={30} className="text-white"/>Category</div>
                </div>
                <h1 className="w-full flex justify-center text-center py-[25px] text-primary font-bold text-[36px]">Browse Event By Category</h1>
                <div className="w-full flex gap-10 justify-center">
                    {category.map(event =>{
                        return(
                            <div className="flex justify-center" key={event.id}>
                                <button type="submit" className="h-10 text-neutral font-[500] hover:text-accent hover:border-2 border-white hover:border-b-accent">{event.category}</button>
                            </div>
                        )
                    })}
                </div>
                
                <div className="List-Event flex justify-center py-16">
                    <div className="flex w-11/12 overflow-x-scroll scrollbar-hidden scrollbar-w-0 gap-4">
                        {category.map(event =>{
                            return(
                                <div className="flex flex-col w-80 h-96 border rounded-3xl drop-shadow-lg flex-shrink-0 overflow-hidden" key={event.id}>
                                    <div className="flex-1 overflow-hidden">
                                        <img src={`http://localhost:8888/uploads/${event.picture}`} className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="flex-[0.5] flex justify-end gap-3 flex-col bg-primary h-48 w-full text-white p-10">
                                        <div className="text-white">{moment(event.date).format('DD MMMM YYYY')}</div>
                                        <div className="font-bold text-2xl">{event.title}</div>
                                    </div>
                                </div>
                            )
                         })}
                    </div>
                </div>

                {/* section partners */}
                <div className="w-full h-auto flex flex-col gap-10 py-20 px-6 justify-center bg-[#374151] mb-20 relative">
                    <img src={Elips4} className="absolute bottom-0 left-0 w-[600px] h-auto" />
                    <img src={Elips5} className="absolute bottom-0 left-[500px] w-72 h-auto" />
                    <img src={Elips6} className="absolute top-0 right-0 w-70 h-auto" />
                    <div className="w-full flex justify-center items-end">
                        <div className="flex gap-2 py-1 px-10 rounded-2xl font-bold text-[16px] bg-neutral/[0.3] text-white"><AiOutlineMinus size={30} className="text-white"/>Partner</div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <h1 className="font-bold text-2xl text-white text-center">Our Trusted Partners</h1>
                        <p className="text-[14px] text-neutral">By companies like :</p>
                    </div>
                    <div className="flex flex-row gap-10 justify-center">
                        {/* left side */}
                        <div className="flex flex-col md:flex-row items-center gap-10 ">
                            {partners.map((event, i)=>{
                                if( i < 3){
                                    return(
                                        <div className="w-[83px] h-[63px] overflow-hidden " key={event.id}>
                                            <img className="object-cover" src={`http://localhost:8888/uploads/${event.picture}`} />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        {/* right side */}
                        <div className="flex flex-col md:flex-row items-center gap-10 ">
                            {partners.map((event, i)=>{
                                if( i > 2){
                                    return(
                                        <div className="w-[83px] h-[63px] overflow-hidden " key={event.id}>
                                            <img className="object-cover" src={`http://localhost:8888/uploads/${event.picture}`} />
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </main>
            <footer className="h-[476px] px-[30px] md:px-[20%] w-full md:py-10">
                <div className="md:flex md:justify-between">
                <div className="mb-10">
                    <div className="flex items-center">
                        <IoTicketSharp size={50} className="text-primary filter blur-[2.8px] pr-1"/>
                        <div className="text-primary text-[24px] font-bold" >We</div><div className="text-accent text-[24px] font-bold" >tick</div>
                    </div>
                    <div className="flex gap-2 py-3 text-[14px] font-[400]">Find events you love with our</div>
                    <div>
                        <ul className="flex gap-6 ">
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

export default Home;