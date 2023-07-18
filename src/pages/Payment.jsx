import {Link, useNavigate} from "react-router-dom";
import { BsFacebook, BsWhatsapp, BsFillCreditCard2BackFill, BsBank } from "react-icons/bs";
import { AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlinePlus } from "react-icons/ai";
import {FiMenu, FiLogOut} from "react-icons/fi";
import {SiArtixlinux} from "react-icons/si";
import {MdStore, MdAttachMoney} from "react-icons/md";
import { useParams } from "react-router-dom";
import React from "react";
import http from "../helper/http";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/auth";
import Card from "../assets/card.png";

const Payment = ()=>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  let {id} = useParams();
  const [profile, setProfile] = React.useState({});
  const [ticket, setTicket] = React.useState({});
  const [paymentMethod, setPaymentMethode] = React.useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState("");
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

    async function getTicketDetail(){
      try {
        const {data} = await http(token).get(`/payment/${id}`);
        console.log(data);
        setTicket(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getTicketDetail();

    async function getAllPaymentMethode(){
      try {
        const {data} = await http(token).get("/payment");
        console.log(data);
        setPaymentMethode(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getAllPaymentMethode();
  },[]);

  function doLogout(){
    dispatch(logout());
    navigate("/");
  }
  function doSignUp(){
    navigate("/Signin");
  }
  async function doPayment(){
    try {
      const body = new URLSearchParams({
        reservationId: id,
        paymentMethodId: selectedPaymentMethod
      });
      const {data} = await http(token).post("/payment", body);
      console.log(data);
      if(data.results.id){
        navigate("/Booking");
      }
    } catch (error) {
      const message = error?.response?.data?.message;
      if(message){
        console.log(message);
      }
    }
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
        <div className="flex flex-col sm:flex-row w-full bg-white border rounded-2xl px-24 py-20 gap-20">
          <div className="flex-1 flex flex-col gap-14">
            <h1 className="text-secondary font-bold text-2xl">Payment Methode</h1>
            <div className="flex flex-col gap-11">
              {paymentMethod.map(item =>{
                return(
                  <div className="flex flex-col gap-3" key={`paymentMethode${item.id}`}>
                    <div className="flex gap-6 items-center">
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        className="radio radio-info" 
                        value={item.id} 
                        onChange={(e) => setSelectedPaymentMethod(e.target.value)}/>

                      {item.name === "Transfer" && (<div className="p-3 bg-[#884DFF] rounded-xl "><BsFillCreditCard2BackFill className="text-white" size={20}/></div>)}
                      {item.name === "Bank Transfer" && (<div className="p-3 bg-[#FC1055] rounded-xl "><BsBank className="text-white" size={20}/></div>)}
                      {item.name === "Retail" && (<div className="p-3 bg-[#FF8900] rounded-xl "><MdStore className="text-white" size={20}/></div>)}
                      {item.name === "E-Money" && (<div className="p-3 bg-[#3366FF] rounded-xl "><MdAttachMoney className="text-white" size={20}/></div>)}
                      <section>
                        <option className="text-secondary text-xl font-bold" value="">{item.name}</option>
                      </section>
                    </div>
                    {item.name === "transfer" && (
                      <div className="flex gap-6 px-12">
                        <img src={Card} className="w-96 h-full object-cover" />
                        <div className="flex items-center">
                          <div className="p-3 border-2 border-dashed rounded-xl"><AiOutlinePlus size={20}/></div>
                        </div>
                      </div>
                    )}
                                        
                  </div>
                );
              })}
            </div>
          </div>
          <hr className="hidden md:block h-[314px] border-[1px] rounded-2xl mx-[50px]"/>
          <div className="flex-[0.8] flex flex-col gap-14">
            <h1 className="text-secondary font-bold text-2xl">Ticket Detail</h1>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <div className="text-primary text-[16px] font-bold">Event</div>
                <div className="text-accent text-[16px] font-bold">{ticket?.event}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-primary text-[16px] font-bold">Ticket Section</div>
                <div className="text-accent text-[16px] font-bold">{ticket?.sectionName}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-primary text-[16px] font-bold">Quantiry</div>
                <div className="text-accent text-[16px] font-bold">{ticket?.quantity}</div>
              </div>
              <div className="flex justify-between">
                <div className="text-primary text-[16px] font-bold">Total Payment</div>
                <div className="text-accent text-[16px] font-bold">${ticket?.totalPrice}</div>
              </div>
            </div>
            <button onClick={doPayment} type="submit" className="btn btn-primary">Payment</button>
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
};

export default Payment;