import {Link} from "react-router-dom";
import {AiOutlinePlusCircle,
  AiFillEdit, 
  AiFillCreditCard, 
  AiOutlineHeart,
  AiOutlineSetting,
  AiOutlineUnorderedList, } from "react-icons/ai";
import {FiUnlock, FiUser, FiLogOut,} from "react-icons/fi";
import {AiTwotoneCalendar} from "react-icons/ai";
import {SiArtixlinux} from "react-icons/si";
import MenuBar1 from "../components/MenuBar1";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout} from "../redux/reducers/auth";
import http from "../helper/http";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Footer from "../components/Footer";

function MyBooking(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const [menuBar, setMenuBar] = React.useState("");
  const [profile, setProfile] = React.useState({});
  const [historyData, setHistoryData] = React.useState([]);
    
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

    async function getHistory(){
      try {
        console.log("test");
        const {data} = await http(token).get("/historys");
        console.log(data);
        setHistoryData(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getHistory();
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
          {historyData.map(event =>{
            return(
              <div key={`hstory-data${event.id}`}>
                <div className="flex gap-x-10" >
                  <div className="self-center w-[50px] flex-1">
                    <p className="font-bold text-[24px] text-accent">{moment(event.date).format("DD")}</p>
                    <p className="font-[400] text-[16px] text-primary">{moment(event.date).format("ddd")}</p>
                  </div>
                  <div className="flex-initial w-full">
                    <h1 className="pb-2 font-[600] text-[24px] text-secondary">{event.title}</h1>
                    <p className="pb-2 font-[400] text-[14px] text-primary">{event.location}</p>
                    <p className="pb-2 font-[400] text-[14px] text-primary">{moment(event.date).format("MMMM Do YYYY, h:mm")}</p>
                    <label htmlFor="my-modal" className="btn border-0 bg-white text-accent">detail</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box flex flex-col gap-6 justify-center items-center">
                        <div className="w-64 h-96 border rounded-3xl drop-shadow-lg flex-shrink-0 overflow-hidden relative">
                          {event.picture && <img src={event.picture.startsWith("https")? event.picture : `http://localhost:8888/uploads/${event.picture}`} className="w-full h-full object-cover"/>}
                          <div className="absolute flex flex-col bg-gradient-to-t from-black/[0.9] to-transparent bottom-0 h-48 w-full px-6 py-10 gap-2">
                            <div className="text-white">{moment(event.date).format("MMMM Do YYYY, h:mm")}</div>
                            <div className="font-bold text-2xl text-white">{event.title}</div>
                          </div>
                        </div>
                        <div className="gap-3">
                          <h1 className="pb-2 font-[500] text-[16px] text-secondary">Status: {event.status}</h1>
                          <h1 className="pb-2 font-[500] text-[16px] text-secondary">Section: {event.section}</h1>
                          <h1 className="pb-2 font-[500] text-[16px] text-secondary">Quantity: {event.quantity}</h1>
                          <h1 className="pb-2 font-[500] text-[16px] text-secondary">Price/Person: {event.price}</h1>
                          <h1 className="pb-2 font-[500] text-[16px] text-secondary">Payment Method: {event.PaymentMetode}</h1>
                        </div>
                        <div className="modal-action">
                          <label htmlFor="my-modal" className="btn">Close</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[32px] flex-1 text-neutral"><AiOutlineHeart size={30}/></div>
                </div>
                <hr className="w-full my-6"/>
              </div>
            );
          })}
        </article>
      </main>
      <Footer />
    </>
  );
}

export default MyBooking;