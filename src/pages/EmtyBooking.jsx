import {Link} from "react-router-dom";
import {
  AiFillCreditCard,
  AiFillEdit,
  AiOutlinePlusCircle,
  AiOutlineUnorderedList,
  AiOutlineHeart,
  AiOutlineSetting,
  AiTwotoneCalendar } from "react-icons/ai";
import {  } from "react-icons/ai";
import {FiLogOut, FiUnlock, FiUser} from "react-icons/fi";
import {IoTicketSharp} from "react-icons/io5";
import {} from "react-icons/fi";
import MenuBar1 from "../components/MenuBar1";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout} from "../redux/reducers/auth";
import http from "../helper/http";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function EmtyBooking(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const [menuBar, setMenuBar] = React.useState("");
  const [profile, setProfile] = React.useState({});
    
  React.useEffect(()=>{
    async function getProfileUser(){
      try {
        const {data} = await http(token).get("/profile");
        setProfile(data.results);
        console(data);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getProfileUser();
  },[]);

  function doLogout(){
    dispatch(logout());
    navigate("/");
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
              <img className="w-11 h-11 object-cover rounded-full border-2 border-white" src={`http://localhost:8888/uploads/${profile.picture}`} alt="photo-profile"/>
            </div>
            <div className="text-secondary self-center font-bold text-[16px]">{profile?.fullName}</div>
          </div>
        </Link>
      </nav>
      <main className="px-[30px] md:flex md:bg-[#F4F7FF] p-[20px] md:px-[75px] md:py-[75px]">
        <aside id="menuBar" className={menuBar}>
          <div className="flex flex-col xl:flex-row items-center gap-3 mb-[56px]">
            <div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
              <img className="w-14 h-14 object-cover rounded-full border-2 border-white" src={`http://localhost:8888/uploads/${profile.picture}`} alt="photo-profile"/>
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
              <li className="flex gap-3 py-3 text-primary"><AiOutlinePlusCircle size={20}/><Link to="/CreateEvent">Creat Event</Link></li>
              <li className="flex gap-3 py-3 text-accent"><AiOutlineUnorderedList size={20}/><Link to="/Booking">My Booking</Link></li>
              <li className="flex gap-3 py-3 text-primary"><AiOutlineHeart size={20}/><Link to="/Wishlist">My Wishlist</Link></li>
              <li className="flex gap-3 py-3 text-primary"><AiOutlineSetting size={20}/>Seting</li>
              <button onClick={doLogout} className="flex gap-3 py-3 text-primary pb-10"><FiLogOut size={20}/>Log out</button>
            </ul>
          </div>
        </aside>  

        <article className="inline-block w-full bg-white p-[20px] md:px-[100px] md:py-[70px] rounded-2xl flex-1">
          <div className="md:flex md:justify-between mb-6">
            <div className="mb-[30px] font-bold text-[20px] text-secondary">My Booking</div>
            <div className="font-[400] text-[14px]">
              <button className="px-5 rounded-2xl btn btn-primary shadow-lg flex gap-3 py-3 w-[150px] md:w-full text-white"><AiTwotoneCalendar size={20}/>March</button>
            </div>
          </div>
          <div className="flex flex-col text-center h-full py-[100px] md:py-auto md:px-auto">
            <div className="font-bold text-[26px] text-secondary">No tickets bought</div>
            <div className="text-primary justify-center font-[400] text-[16px]">It appears you haven’t bought any tickets yet. Maybe try searching these?</div>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}

export default EmtyBooking;