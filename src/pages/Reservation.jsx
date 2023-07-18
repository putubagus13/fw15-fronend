import {Link, useNavigate, useParams} from "react-router-dom";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import {  } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import {FiMenu} from "react-icons/fi";
import {IoTicketSharp} from "react-icons/io5";
import {SiArtixlinux} from "react-icons/si";
import {ImPriceTags} from "react-icons/im";
import {FiLogOut} from "react-icons/fi";
import Place from "../assets/place.png";
import React from "react";
import http from "../helper/http";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/auth";
import {MdError} from "react-icons/md";

function Reservation(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const token = useSelector(state => state.auth.token);
  const [profile, setProfile] = React.useState({});
  const [message, setMessage] = React.useState("");
  const [section, setSection] = React.useState([]);
  const [filledSection, setFillSection] = React.useState({
    id: 0,
    quantity: 0
  });
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(()=>{
    async function getProfileUser(){
      try {
        const {data} = await http(token).get("/profile");
        console.log(data);
        setProfile(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getProfileUser();

    async function getSection(){
      try {
        const {data} = await http(token).get("/reservation/section");
        console.log(data);
        setSection(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getSection();
  },[]);

  function doLogout(){
    dispatch(logout());
    navigate("/");
  }
  function doSignUp(){
    navigate("/Signin");
  }
  function minusValue(id){
    const quantityMinus= filledSection.quantity - 1;
    if(quantityMinus < 0){
      setMessage("Add quantity");
    }else{
      setFillSection({
        id,
        quantity: quantityMinus
      });
      setMessage(" ");
    }
  }

  function plusValue(id){
    const quantityPlus = filledSection.quantity + 1;
    if(quantityPlus > 10){
      setMessage("Maximum is 10");
    }else{
      setFillSection({
        id,
        quantity: quantityPlus
      });
      setMessage(" ");
      setErrorMessage("");
    }
  }

  const selectSection = filledSection && section.filter(event => event.id === filledSection.id)[0];

  const doRegister = async()=>{
    const body = new URLSearchParams({
      eventId: id,
      sectionId: filledSection.id,
      quantity: filledSection.quantity
    });
    if(filledSection.quantity === 0){
      setErrorMessage("Ticket cannot be empty");
    }else{
      const {data} = await http(token).post("/reservation", body);
      console.log(data);
      if(token){
        navigate(`/Payment/${data.results.id}`);
      }
    }

        
  };
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
              {profile?.picture && (<img className='object-cover w-full h-full border-4 border-white rounded-full' src={profile?.picture.startsWith("https")? profile?.picture : `http://localhost:8888/uploads/${profile?.picture}`} alt={profile?.fullName} />)}
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
            {section.map(event =>{
              return(
                <React.Fragment key={`Section-${event.id}`}>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-6 justify-between">
                      <div className="flex rounded-xl bg-neutral p-2 w-10 h-10 items-center justify-center"><IoTicketSharp className="text-secondary" size={25}/></div>
                      <div className="">
                        <h1 className="font-bold text-sm text-secondary">{event.name}</h1>
                        <p className="text-neutral text-[13px]">12 Seats available</p>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-secondary font-bold text-sm text-center">${event.price}</p>
                        <p className="text-neutral text-[13px]">per person</p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex-1 text-[14px] text-secondary flex items-center justify-center">Quantity</div>
                      <div className="flex flex-col">
                        <div className="text-center text-[#be123c]">{message}</div>
                        <div className="flex gap-3 justify-end">
                          <button onClick={()=> minusValue(event.id)} className="h-8 w-8 rounded-lg border-[2px] border-neutral hover:bg-neutral hover:border-primary h-10 text-lg font-bold text-neutral hover:text-primary">-</button>
                          {event.id === filledSection.id ? filledSection.quantity: 0}
                          <button onClick={()=>plusValue(event.id)} className="h-8 w-8 rounded-lg border-[2px] border-neutral hover:bg-neutral hover:border-primary h-10 text-lg font-bold text-neutral hover:text-primary">+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
            <hr className="h-[0.5px] w-full border"/>
            <div className="flex flex-col gap-3">
              {errorMessage && (<div className="flex flex-row justify-center alert alert-error shadow-lg text-white text-lg my-3"><MdError size={30}/>{errorMessage}</div>)}
              <div className="flex justify-between">
                <p className="font-[600] text-lg text-secondary">Ticket Section</p>
                <p className="font-[600] text-lg text-accent">{(selectSection?.name || "-")}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-[600] text-lg text-secondary">Quantity</p>
                <p className="font-[600] text-lg text-accent">{filledSection.quantity}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-[600] text-lg text-secondary">Total Payment</p>
                <p className="font-[600] text-lg text-accent">${(selectSection?.price * filledSection.quantity) || "0"}</p>
              </div>
            </div>
            <button onClick={doRegister} type="submit" className="btn w-full lg:w-[60%] btn-primary">Checkout</button>
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
  );
}

export default Reservation;