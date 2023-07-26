import { BsCameraFill } from "react-icons/bs";
import {AiOutlinePlusCircle,
  AiFillEdit, 
  AiFillCreditCard, 
  AiOutlineHeart,
  AiOutlineSetting,
  AiOutlineUnorderedList,
  AiFillCamera } from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import {FiUnlock, FiUser, FiLogOut} from "react-icons/fi";
import {SiArtixlinux} from "react-icons/si";
import MenuBar1 from "../components/MenuBar1";
import React from "react";
import http from "../helper/http";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { logout} from "../redux/reducers/auth";
import { Formik } from "formik";
import Footer from "../components/Footer";
import User from "../assets/user.png";

function Profile(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const [menuBar, setMenuBar] = React.useState("");
  const [profile, setProfile] = React.useState({});
  const [editEmail, setEditEmail] = React.useState(false);
  const [editUsername, setEditUsername] = React.useState(false);
  const [editPhoneNumber, setEditPhoneNumber] = React.useState(false);
  const [editBirthDate, setEditBirthDate] = React.useState(false);
  const [selectedPIcture, setSelectedPicture] = React.useState({});
  const [nationalityValue, setNationalityValue] = React.useState("");
  const [professionValue, setProfessionValue] = React.useState("");
  const [editGender, setEditGender] = React.useState(false);
  const [pictureURI, setPictureURI] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const profession = [
    {
      label: "Developer",
      value: "Developer",
    },
    {
      label: "Bisnisman",
      value: "Bisnisman",
    },
    {
      label: "Farmer",
      value: "Farmer",
    },
    {
      label: "Driver",
      value: "Driver",
    },
  ];

  const nationality = [
    {
      label: "Indonesia",
      value: "Indonesia",
    },
    {
      label: "Malaysia",
      value: "Malaysia",
    },
    {
      label: "Singapure",
      value: "Singapure",
    },
    {
      label: "Dubai",
      value: "Dubai",
    },
  ];
  console.log(nationalityValue, professionValue);
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

  const fileToDataUrl = (file) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setPictureURI(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const changePicture = (e) => {
    const file = e.target.files[0];
    setSelectedPicture(file);
    fileToDataUrl(file);
  };

  const editProfile = async (values)=>{
    setLoading(true);
    const form = new FormData();
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        form.append(key, values[key]);
      }
    });

    if(selectedPIcture){
      form.append("picture", selectedPIcture);
    }
    if (professionValue) {
      form.append("profession", professionValue);
    }
    if (nationalityValue) {
      form.append("nasionality", nationalityValue);
    }
    const {data} = await http(token).patch("/profile", form, {
      headers: {
        "Content-Type" : "multipart/form-data"
      }
    });
    setProfile(data.result);
    setLoading(false);
    setEditUsername(false);
    setEditEmail(false);
    setEditPhoneNumber(false);
    setEditBirthDate(false);
  };

  React.useEffect(()=>{
    console.log(selectedPIcture);
  },[selectedPIcture]);
  function doLogout(){
    dispatch(logout());
    navigate("/");
  }
    
  return(
    <div>
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
            <div className="inline-block w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400 mx-3 ">
              {profile?.picture && (<img className='w-full h-full object-cover border-4 border-white rounded-full' src={profile?.picture.startsWith("https")? profile?.picture : User} alt={profile?.fullName} />)}
            </div>
            <div className="text-secondary self-center font-bold text-[16px]">{profile?.fullName}</div>
          </div>
        </Link>
      </nav>
      <main className="px-[30px] md:flex md:bg-[#F4F7FF] p-[20px] md:px-[75px] md:py-[75px]">
        <aside id="menuBar" className={menuBar}>
          <div className="flex flex-col xl:flex-row items-center gap-3 mb-[56px]">
            <div className="inline-block w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
              {profile?.picture && (<img className='object-cover w-full h-full border-4 border-white rounded-full' src={profile?.picture.startsWith("https")? profile?.picture : User} alt={profile?.fullName} />)}
            </div>
            <div><h1  className="font-bold text-[14px] text-secondary">{profile?.fullName}</h1><p className="text-secondary">{profile?.profession}, {profile?.id}</p></div>
          </div>
          <div className="font-[500] text-[14p x]">
            <ul className="cursor-pointer">
              <li className="flex gap-3 py-3 text-primary "><FiUser size={20}/>Profile</li>
              <li className="mx-5 py-3 text-primary">
                <ul>
                  <li className="flex gap-3 py-3 text-primary"><AiFillCreditCard size={20}/><Link to="/PaymentMethod">Card</Link></li>
                  <li className="flex gap-3 py-3 text-accent"><AiFillEdit size={20}/><Link to="/Pofile">Edit Profil</Link></li>
                  <li className="flex gap-3 py-3 text-primary"><FiUnlock size={20}/><Link to="/ChangePassword">Change Password</Link></li>
                </ul>
              </li>
              <li className="flex gap-3 py-3 text-primary"><AiOutlinePlusCircle size={20}/><Link to="/CreateEvent">Creat Event</Link></li>
              <li className="flex gap-3 py-3 text-primary"><AiOutlineUnorderedList size={20}/><Link to="/Booking">My Booking</Link></li>
              <li className="flex gap-3 py-3 text-primary"><AiOutlineHeart size={20}/><Link to="/Wishlist">My Wishlist</Link></li>
              <li className="flex gap-3 py-3 text-primary"><AiOutlineSetting size={20}/>Seting</li>
              <button onClick={doLogout} className="flex gap-3 py-3 text-primary pb-10"><FiLogOut size={20}/>Log out</button>
            </ul>
          </div>
        </aside> 
        <Formik initialValues={{ 
          fullName: profile?.fullName ,
          username: profile?.username,
          email: profile?.email,
          phoneNumber: profile?.phoneNumber,
          birtDate: profile?.birtDate,
          gender: profile?.gender,
        }}
        onSubmit={editProfile}
        enableReinitialize>
          {({values,
            handleChange,
            handleBlur,
            handleSubmit
          }) =>(
            <form onSubmit={handleSubmit} className="flex flex-col-reverse md:flex-row inline-block w-full bg-white p-[20px] md:px-[100px] md:py-[70px] rounded-2xl">
              <div id="leftside" className="flex flex-col md:gap-3 flex-1 ">
                <div className="mb-[50px] font-bold text-[20px] text-secondary">Profile</div>
                <div className="w-full text-center">
                  <div className="md:hidden relative inline-block rounded-full border-[6px] cursor-pointer bg-gradient-to-br from-primary to-secondary hover:from-primary hover:to-accent w-[137px] h-[137px]">
                    <input 
                      name="picture"
                      type="file" 
                      className="hidden"
                      onChange={changePicture}
                      onBlur={handleBlur}
                    />
                    {selectedPIcture && <img src={pictureURI} alt={profile?.fullName} className="absolute z-10 object-cover rounded-full h-full w-full p-[6px]" />}
                    {profile?.picture && <img src={profile?.picture || User} alt={profile?.fullName} className="absolute object-cover rounded-full h-full w-full p-[6px]" />}
                    <div className="absolute top-[50px] left-[50px] text-white"><i data-feather="camera"></i></div>
                    <AiFillCamera className="absolute z-20 top-12 left-12" size={30} />
                  </div>
                </div>
                <div className="my-[30px] md:my-0 flex flex-col md:flex-row gap-2 font-[400] text-[14px]">
                  <div className="w-[153px] text-secondary flex items-center">Nama</div>
                  <input 
                    name="fullName" 
                    type="text" 
                    className="border-2 rounded-2xl h-12 text-left w-full px-[20px] py-[17px] text-[#777777] border-neutral " 
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}/>
                </div>
                <div className="my-[30px] md:my-0 block md:flex font-[400] text-[14px] font-[400] text-[14px]">
                  <div className="flex w-[140px] text-secondary items-center">Username</div>
                  <div className="flex gap-3">
                    {!editUsername && <span className="flex flex-row h-12 items-center text-left  text-[#777777] border-neutral ">{profile?.username}</span>}
                    {editUsername && <input name="username" 
                      type="text" 
                      className="border-2 rounded-2xl h-12 text-left w-full px-[20px] py-[17px] text-[#777777] border-neutral " 
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}/>}
                    {!editUsername && <button onClick={()=> setEditUsername(true)} className="text-accent">Edit</button>}
                  </div>
                </div>
                <div className="my-[30px] md:my-0 block flex flex-col md:flex-row font-[400] text-[14px]">
                  <div className="flex w-[140px] text-secondary items-center">Email</div>
                  <div className="flex gap-3">
                    {!editEmail && <span className="flex flex-row h-12 items-center text-left  text-[#777777] ">{profile?.email}</span>}
                    {editEmail && <input 
                      name="email" 
                      type="email" 
                      className="border-2 rounded-2xl h-12 text-left w-full px-[20px] py-[17px] text-[#777777] border-neutral " 
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}/>}
                    {!editEmail && <button onClick={()=> setEditEmail(true)} className="text-accent">Edit</button>}
                  </div>
                </div>
                <div className="my-[30px] md:my-0 block flex flex-col md:flex-row font-[400] text-[14px]">
                  <div className="flex w-[140px] text-secondary items-center">Phone Number</div>
                  <div className="flex gap-3">
                    {!editPhoneNumber && <span className="flex flex-row h-12 items-center text-left  text-[#777777] ">{profile?.phoneNumber}</span>}
                    {editPhoneNumber && <input 
                      name="phoneNumber" 
                      type="text" 
                      className="border-2 rounded-2xl h-12 text-left w-full px-[20px] py-[17px] text-[#777777] border-neutral " 
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}/>}
                    {!editPhoneNumber && <button onClick={()=> setEditPhoneNumber(true)} className="text-accent">Edit</button>}
                  </div>
                </div>
                <div className="my-[30px] md:my-0 block flex flex-col md:flex-row font-[400] text-[14px]">
                  <div className="flex w-[153px] text-secondary items-center">Gender</div>
                  <div className="flex gap-10 h-12 text-left w-full md:px-[20px] py-[17px] text-[#777777] ">
                    {!editGender && 
                    <>
                      <div className="flex gap-1">
                        <input 
                          type="radio" 
                        
                          name="gender" 
                          className="radio radio-primary w-4 h-4"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={false}
                          checked={profile?.gender === false}/>
                        <span className="pl-[5px]">Male</span>
                      </div>
                      <div className="flex gap-1">
                        <input 
                          type="radio" 
                          name="gender" 
                          className="radio radio-primary w-4 h-4"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={true}
                          checked={profile?.gender === true}/>
                        <span className="pl-[5px]">Famale</span>
                      </div>
                    </>}
                    {editGender && 
                    <>
                      <div className="flex gap-1">
                        <input 
                          type="radio" 
                        
                          name="gender" 
                          className="radio radio-primary w-4 h-4"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={false}/>
                        <span className="pl-[5px]">Male</span>
                      </div>
                      <div className="flex gap-1">
                        <input 
                          type="radio" 
                          name="gender" 
                          className="radio radio-primary w-4 h-4"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={true}/>
                        <span className="pl-[5px]">Famale</span>
                      </div>
                    </>}
                    {!editGender && <button onClick={()=> setEditGender(!editGender)} className="text-accent">Edit</button>}
                  </div>
                </div>
                <div className="my-[30px] md:my-0 block md:flex items-center font-[400] text-[14px]">
                  <div className="w-[153px] text-secondary">Profession</div>
                  <select 
                    className="flex border-2 rounded-2xl h-12 text-left w-full px-3 text-[#777777] border-neutral"
                    onChange={(e)=> setProfessionValue(e.target.value)}>
                    <option className="hidden">{profile?.profession}</option>
                    {profession.map(items => (
                      <option className="my-2" key={`profession-${items.value}`}>{items.value}</option>
                    ))}
                  </select>
                </div>
                <div className="my-[30px] md:my-3 block md:flex items-center font-[400] text-[14px]">
                  <div className="w-[153px] text-secondary">Nationality</div>
                  <select 
                    className="flex border-2 rounded-2xl h-12 w-full px-3 text-[#777777] border-neutral "
                    onChange={(e)=> setNationalityValue(e.target.value)}>
                    <option className="hidden">{profile?.nasionality}</option>
                    {nationality.map(items => (
                      <option key={`nationality-${items.value}`}>{items.value}</option>
                    ))}
                  </select>
                </div>
                <div className="my-[30px] md:my-0 block flex flex-col gap-3 md:flex-row font-[400] text-[14px]">
                  <div className="flex w-[100px] text-secondary items-center">Birthday Date</div>
                  <div className="flex gap-3">
                    {!editBirthDate && <span className="flex flex-row gap-3 h-12 items-center text-left text-[#777777] ">{moment(profile?.birthDate).format("DD/MM/YYYY")}</span>}
                    {editBirthDate && <input 
                      type="date"
                      name="birthDate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.date}/>}
                    {!editBirthDate && <button onClick={()=> setEditBirthDate(true)} className="text-yellow-600 px-[10px]">Edit</button>}
                  </div>
                </div>
                {!loading && <button className="h-[61px] w-full md:w-3/12 rounded-2xl md:my-[30px] btn btn-primary shadow-lg normal-case text-lg" type="input">Save</button>}
                {loading && <button className="h-[61px] w-full md:w-3/12 rounded-2xl md:my-[30px] btn btn-primary shadow-lg normal-case text-lg" type="input"><span className="loading loading-dots loading-sm"></span></button>}
              </div>
            
              <hr className="hidden md:block h-[314px] border-2 rounded-2xl mx-[50px]"/>
            
              <div id="rightside" className="pt-16 text-center hidden md:block">
                <div className="relative inline-block rounded-full border-[6px] cursor-pointer bg-gradient-to-br from-yellow-500 to-blue-400 hover:from-yellow-500 hover:to-blue-800 truncate w-[137px] h-[137px]">
                  {selectedPIcture && <img src={pictureURI} alt={profile?.fullName} className="absolute object-cover rounded-full h-full w-full p-[6px]" />}
                  {profile?.picture && <img src={profile?.picture || User} alt={profile?.fullName} className="absolute object-cover rounded-full h-full w-full p-[6px]" />}
                  <div className="absolute top-[50px] left-[50px] text-white  w-[137px] h-[137px]"><i data-feather="camera"></i></div>
                  <label className="md:hidden absolute w-full h-full top-0 left-0 bg-neutral/[0.5]"><BsCameraFill className="absolute top-11 left-11 text-white" size={35}/>
                    <input type="file" className="hidden"/>
                  </label>
                </div>
                <label className="flex items-center mt-[50px] border-2 w-full h-[40px] rounded-2xl btn btn-outline btn-primary rounded-2xl" >
                  <input 
                    name="picture"
                    type="file" 
                    className="hidden"
                    onChange={changePicture}
                    onBlur={handleBlur}
                  />
                  Choose Photo
                </label>
                <ul className="hidden md:block my-[25px] text-left">
                  <li>Image size: max, 2 MB</li>
                  <li>Image formats: .JPG, .JPEG, .PNG</li>
                </ul>
              </div>
            </form>
          )}
        </Formik>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;