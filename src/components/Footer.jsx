import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram,
  AiFillTwitterCircle} from "react-icons/ai";
import {SiArtixlinux} from "react-icons/si";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
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
  );
};

export default Footer;