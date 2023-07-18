import React from "react";
import { useNavigate } from "react-router-dom";
import http from "../helper/http";
import { Link } from "react-router-dom";
import moment from "moment";
import { BsFacebook, BsFilterLeft } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import {FiMenu} from "react-icons/fi";
import {SiArtixlinux} from "react-icons/si";
import {FiLogOut, FiSearch} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/auth";

function AllEvents(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const [events, setEvents] = React.useState([]);
  const [profile, setProfile] = React.useState({});
  const [search, setSearch] = React.useState("");
  const [limit, setLimit] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");

  async function getSearchEvent(search, limit, sortBy){
    const {data} = await http().get(`/events?search=${search}&limit=${limit}&sortBy=${sortBy}`);
    setEvents(data.results);
  } 

  React.useEffect(()=>{
    getSearchEvent(search, limit, sortBy);
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
  },[token, search, limit, sortBy]);

  function doLogout(){
    dispatch(logout());
    navigate("/");
  }
  function doSignUp(){
    navigate("/Signin");
  }
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
            <Link to="/Profile"><div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
              {profile?.picture && (<img className='w-12 h-12 border-4 border-white rounded-full' src={profile?.picture.startsWith("https")? profile?.picture : `http://localhost:8888/uploads/${profile?.picture}`} alt={profile?.fullName} />)}
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
        <div className="flex flex-col gap-10 items-center sm:py-24 px-[3%] sm:px-24 bg-white rounded-2xl sm:drop-shadow-lg gap-10">
          <div className="w-full items-center px-16 relative flex flex-row">
            <input onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Search Event.." className="input input-bordered w-full drop-shadow-lg px-12 text-black" />
            <div className="dropdown dropdown-bottom dropdown-end">
              <label tabIndex={0} className="btn m-1 drop-shadow-lg"><BsFilterLeft size={28} className="text-white"/></label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 flex flex-col gap-1">
                <label>Sort</label>
                <div>
                  <label className="text-secondary font-medium">SortBy:</label>
                  <div className="flex gap-1">
                    <button onClick={(e)=> setSortBy(e.target.value)} value={"ASC"} className="btn btn-active w-[70px] normal-case text-white">ASC</button>
                    <button onClick={(e)=> setSortBy(e.target.value)} value={"DESC"} className="btn btn-active w-[70px] normal-case text-white">DESC</button>
                  </div>
                </div>
                <label className="text-secondary font-medium">Limit:</label>
                <select className="select select-ghost w-full max-w-xs text-primary" onChange={(e)=> setLimit(e.target.value)}>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                </select>
              </ul>
            </div>
            <FiSearch size={25} className="text-neutral absolute left-[80px] top-3"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
            {events.map(event =>{
              return(
                <Link to={`/EventDetail/${event.id}`} key={`events${event.id}`}>
                  <div className="w-64 h-96 border rounded-3xl drop-shadow-lg flex-shrink-0 overflow-hidden relative">
                    {event?.picture && (<img className="w-full h-full object-cover" src={event?.picture.startsWith("https")? event?.picture : `http://localhost:8888/uploads/${event?.picture}`} alt={event?.fullName} />)}
                    {/* <img src={`http://localhost:8888/uploads/${event.picture}`} className="w-full h-full object-cover"/> */}
                    <div className="absolute flex flex-col bg-gradient-to-t from-black/[0.9] to-transparent bottom-0 h-48 w-full px-6 py-10 gap-2">
                      <div className="text-white">{moment(event.date).format("MMMM Do YYYY, h:mm")}</div>
                      <div className="font-bold text-2xl text-white">{event.title}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
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

export default AllEvents;