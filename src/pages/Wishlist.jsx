import {Link} from "react-router-dom";
import {
  AiFillCreditCard,
  AiFillEdit,
  AiOutlinePlusCircle,
  AiOutlineUnorderedList,
  AiOutlineHeart,
  AiOutlineSetting } from "react-icons/ai";
import {FiLogOut, FiUnlock, FiUser} from "react-icons/fi";
import {SiArtixlinux} from "react-icons/si";
import MenuBar1 from "../components/MenuBar1";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout} from "../redux/reducers/auth";
import http from "../helper/http";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Wishlist(){
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
        <Link to="/Profile" className="hidden lg:flex">
          <div className="hidden lg:flex flex-1">
            <div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400 mx-3 ">
              {profile?.picture && (<img className='w-12 h-12 border-4 border-white rounded-full' src={profile?.picture.startsWith("https")? profile?.picture : `http://localhost:8888/uploads/${profile?.picture}`} alt={profile?.fullName} />)}
            </div>
            <div className="text-secondary self-center font-bold text-[16px]">{profile?.fullName}</div>
          </div>
        </Link>
      </nav>
      <main className="px-[30px] md:flex md:bg-[#F4F7FF] p-[20px] md:px-[75px] md:py-[75px]">
        <aside id="menuBar" className={menuBar}>
          <div className="flex flex-col xl:flex-row items-center gap-3 mb-[56px]">
            <div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
              {profile?.picture && (<img className='w-12 h-12 border-4 border-white rounded-full' src={profile?.picture.startsWith("https")? profile?.picture : `http://localhost:8888/uploads/${profile?.picture}`} alt={profile?.fullName} />)}
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
              <li className="flex gap-3 py-3 text-primary"><AiOutlineUnorderedList size={20}/><Link to="/Booking">My Booking</Link></li>
              <li className="flex gap-3 py-3 text-accent"><AiOutlineHeart size={20}/><Link to="/Wishlist">My Wishlist</Link></li>
              <li className="flex gap-3 py-3 text-primary"><AiOutlineSetting size={20}/>Seting</li>
              <button onClick={doLogout} className="flex gap-3 py-3 text-primary pb-10"><FiLogOut size={20}/>Log out</button>
            </ul>
          </div>
        </aside>  

        <article className="inline-block w-full bg-white p-[20px] md:px-[100px] md:py-[70px] rounded-2xl flex-1">
          <div className="mb-[30px] font-bold text-[20px] text-secondary">My Wishlist</div>
          <div className="flex gap-x-10">
            <div className="self-center w-[50px] flex-1">
              <p className="font-bold text-[24px] text-accent">15</p>
              <p className="font-[400] text-[16px] text-primary">Wed</p>
            </div>
            <div className="flex-initial w-full">
              <h1 className="pb-2 font-[600] text-[24px] text-secondary">Sights & Sounds Exhibition</h1>
              <p className="pb-2 font-[400] text-[14px] text-primary">Jakarta, Indonesia</p>
              <p className="pb-2 font-[400] text-[14px] text-primary">Wed, 15 Nov, 4:00 PM</p>
            </div>
            <div className="w-[32px] flex-1 text-neutral"><AiOutlineHeart size={30}/></div>
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
            </div>
            <div className="w-[32px] flex-1 text-neutral"><AiOutlineHeart size={30}/></div>
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
            </div>
            <div className="w-[32px] flex-1 text-neutral"><AiOutlineHeart size={30}/></div>
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
            </div>
            <div className="w-[32px] flex-1 text-neutral"><AiOutlineHeart size={30}/></div>
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
            </div>
            <div className="w-[32px] flex-1 text-neutral"><AiOutlineHeart size={30}/></div>
          </div>
          <hr className="w-full my-6"/>
          <div className="pl-[75px] flex">
            <div className="flex-initial w-full">
              <h1 className="pb-2 font-bold text-[24px] text-secondary">Sights & Sounds Exhibition</h1>
              <p className="pb-2 font-[400] text-[14px] text-primary">Jakarta, Indonesia</p>
              <p className="pb-2 font-[400] text-[14px] text-primary">Wed, 15 Nov, 4:00 PM</p>
            </div>
            <div className="w-[32px] flex-1 text-amber-600"><i data-feather="heart"></i></div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default Wishlist;