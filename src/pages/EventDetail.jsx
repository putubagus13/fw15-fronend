import {Link, useNavigate} from "react-router-dom";
import { AiOutlineHeart, AiOutlineClockCircle, AiFillHeart } from "react-icons/ai";
import {FiMenu, FiLogOut} from "react-icons/fi";
import {SiArtixlinux} from "react-icons/si";
import {HiOutlineLocationMarker} from "react-icons/hi";
import Profile1 from "../assets/pexels-pixabay-220453.jpg";
import Location1 from "../assets/Rectangle.png";
import { useParams } from "react-router-dom";
import React from "react";
import http from "../helper/http";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/auth";
import Footer from "../components/Footer";
import User from "../assets/user.png";
import MenuBar from "../components/MenuBar";

function EventDetail(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  let {id} = useParams();
  const [events, setEvent] = React.useState({});
  const [profile, setProfile] = React.useState({});

  async function getDataEvent(){
    try {
      const {data} = await http().get(`/events/detail/${id}`);
      console.log(data.results);
      setEvent(data.results);
    } catch (error) {
      const message = error?.response?.data?.message;
      if(message){
        console.log(message);
      }
    }
  }

  React.useEffect(()=>{
    async function getProfileUser(){
      try {
        const {data} = await http(token).get("/profile");
        setProfile(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getProfileUser();
    getDataEvent();

  },[token, id]);

  function doLogout(){
    dispatch(logout());
    navigate("/");
  }

  function doSignUp(){
    navigate("/Signin");
  }

  async function doReservation(){
    navigate(`/Reservation/${id}`);
  }

  const addRemoveWishlist = async() => {
    try {
      const form = new URLSearchParams({eventId: events.id}).toString();
      const {data} = await http(token).get(`/wishList/${events.id}`);
      console.log(data.results);
      if (data.results) {
        const dltWishlist = await http(token).delete(`/wishList/${events.id}`);
        console.log(dltWishlist);
      } else if (data.message === "wishlist not found") {
        await http(token).post("/wishList", form);
      }
      getDataEvent();
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message) {
        console.log(message);
      }
    }
  };
  return(
    <>
      <MenuBar />
      <main className="w-full flex justify-center items-center py-12 px-[5%] md:bg-[#F4F7FF]">
        <div className="sm:flex sm:py-24 px-[3%] sm:px-24 bg-white rounded-2xl sm:drop-shadow-lg gap-10">
          {/* left side */}
          <div className="flex-[0.7] flex flex-col gap-10 items-center">
            <div className="Relative w-64 h-96 border rounded-3xl drop-shadow-lg flex-shrink-0 overflow-hidden">
              {events?.picture && <img src={events?.picture.startsWith("https")? events?.picture : `http://localhost:8888/uploads/${events?.picture}`} className="w-full h-full object-cover" alt={events?.fullName}/>}
              <div className="absolute flex flex-col bg-gradient-to-t from-black/[0.9] to-transparent bottom-0 h-80 sm:h-60 w-full px-6 py-10 gap-2">
                <h1 className="sm:hidden font-bold text-2xl text-white">{events?.title}</h1>
                <div className="sm:hidden flex gap-2 flex flex-col">
                  <p className="flex gap-1 text-white items-center"><HiOutlineLocationMarker size={20} className="text-accent"/>{events.location}</p>
                  <p className="flex gap-1 text-white items-center"><AiOutlineClockCircle size={20} className="text-accent"/>{moment(events.date).format("MMMM Do YYYY, h:mm")}</p>
                </div>
                <div className="flex sm:hidden text-white font-[500] justify-between gap-1 items-center">
                  <div className="flex flex-col gap-1">
                    <p>Attendees</p>
                    <div className="flex">
                      <div className="w-6 h-6 rounded-full overflow-hidden ml:[-5px]">
                        <img src={Profile1} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px]">
                        <img src={Profile1} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px]">
                        <img src={Profile1} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px] bg-accent">
                        <p className="pt-[4px] text-white text-[10px] text-center">+99</p>
                      </div>
                    </div>
                  </div>
                  {events?.id === events?.eventId ? <button onClick={addRemoveWishlist}>
                    <AiFillHeart size={25} className="text-error hover:text-[#f43f5e]"/>
                  </button> : <button onClick={addRemoveWishlist}>
                    <AiOutlineHeart size={25} className="text-white hover:text-[#f43f5e]"/>
                  </button> }
                </div>
              </div>
            </div>
            <div className="hidden sm:flex w-full justify-center gap-3 items-center text-secondary">
              {events?.id === events?.eventId ? <button onClick={addRemoveWishlist}>
                <AiFillHeart size={25} className="text-error hover:text-[#f43f5e]"/>
              </button> : <button onClick={addRemoveWishlist}>
                <AiOutlineHeart size={25} className="text-neutral hover:text-[#f43f5e]"/>
              </button> }
              Add to Wishlist</div>
          </div>
          {/* right side */}
          <div className="flex-1 flex flex-col gap-6 px-[2%] sm:px-0">
            <h1 className="hidden sm:block font-bold text-2xl text-secondary mr-[30%]">{events?.title}</h1>
            <div className="hidden sm:flex gap-6 flex flex-col md:flex-row">
              <p className="flex gap-1 text-secondary items-center"><HiOutlineLocationMarker size={20} className="text-accent"/>{events?.location}</p>
              <p className="flex gap-1 text-secondary items-center"><AiOutlineClockCircle size={20} className="text-accent"/>{moment(events.date).format("MMMM Do YYYY, h:mm")}</p>
            </div>
            <div className="hidden sm:flex text-secondary font-[500] flex-col gap-1">
              <p>Attendees</p>
              <div className="flex">
                <div className="w-6 h-6 rounded-full overflow-hidden ml:[-5px]">
                  <img src={Profile1} className="w-full h-full object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px]">
                  <img src={Profile1} className="w-full h-full object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px]">
                  <img src={Profile1} className="w-full h-full object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden drop-shadow-lg ml-[-7px] bg-accent">
                  <p className="pt-[4px] text-white text-[10px] text-center">+99</p>
                </div>
              </div>
            </div>
            <hr className="hidden md:block border-[1.5px] h-[0.5px] w-full rounded-2xl"/>
            <div className="flex flex-col gap-2">
              <h1 className="pt-10 sm:pt-0 font-bold text-2xl text-secondary">Event Detail</h1>
              <p className="text-secondary">{events?.desciption}</p>
              <Link to=""><p className="text-neutral font-[450] hover:text-accent">Read more</p></Link>
            </div>
            <div className="flex flex-col gap-2"> 
              <h1 className="font-bold text-2xl text-secondary">Location</h1>
              <div className="w-80 h-auto rounded-2xl overflow-hidden">
                <img src={Location1} className="w-full h-auto object-cover" />
              </div>
            </div>
            <button onClick={doReservation} className="btn btn-primary w-80">Buy Ticket</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EventDetail;