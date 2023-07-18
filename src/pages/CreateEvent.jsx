import {Link} from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import {AiFillEdit,
  AiFillCreditCard, 
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
import moment from "moment";
import propTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";
import Footer from "../components/Footer";

const validationSchema = Yup.object({
  title: Yup.string().required("title is invalid"),
  desciption: Yup.string().required("description is invalid"),
});

const FormCreateEvent = ( {values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting, 
  successMessage,
  setSelectedPicture})=>{
  const [category, setcategory] = React.useState([]);
  const [locations, setLocations] = React.useState([]);

  React.useEffect(()=>{
    const getCategories = async()=>{
      try {
        const {data} = await http().get("/categories");
        console.log(data);
        setcategory(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    };
    getCategories();

    const getLocaton = async()=>{
      try {
        const {data} = await http().get("/cities");
        console.log(data);
        setLocations(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    };
    getLocaton();

  },[]);
  return(
    <form className="modal-box" onSubmit={handleSubmit} >
      {successMessage && (<div className="flex flex-row justify-center alert alert-info shadow-lg text-white text-lg my-3"><BsCheckCircleFill size={30}/>{successMessage}</div>)}
      <h3 className="font-bold text-[24px] text-secondary">Create Event</h3>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex gap-10">
            <div className="flex-1">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-[16px] text-primary">Title</span>
                </label>
                <div className="form-control flex flex-col">
                  <input 
                    type="text" 
                    name="title" 
                    placeholder="Input event name" 
                    className= {`input input-bordered ${errors.title && touched.title && "input-error"} border-2 text-[14px] text-secondary w-full max-w-xs`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                  />
                  {errors.title && touched.title && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.title}</span>
                    </label>)
                  }
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-[16px] text-primary">Category</span>
                </label>
                <select 
                  name="categoryId" 
                  className={`text-[14px] text-secondary border-2 input input-bordered w-full max-w-xs ${errors.category && touched.category && "input-error"}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}>
                  <option className="hidden">choose category</option>
                  {category.map(event =>{
                    return(
                      <option className="text-secondary" key={`Category-createEvent${event.id}`} value={event.id}>{event.name}</option>
                    );
                  })}   
                  {errors.category && touched.category && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.category}</span>
                    </label>)
                  }
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex-1">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-[16px] text-primary">Location</span>
                </label>
                <select
                  name="cityId" 
                  placeholder="Input event location" 
                  className= {`text-[14px] text-secondary border-2 input input-bordered w-full max-w-xs${errors.location && touched.location && "input-error"}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}>
                  <option className="hidden">Choose Location</option>
                  {locations.map(event =>{
                    return(
                      <option className="text-secondary" key={`Location-createEvent${event.id}`} value={event.id}>{event.name}</option>
                    );
                  })}  
                  {errors.location && touched.location && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.location}</span>
                    </label>)
                  }
                </select>
              </div>
            </div>
            <div className="flex-1">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-[16px] text-primary">Date time show</span>
                </label>
                <div className="form-control flex flex-col">
                  <input 
                    type="date" 
                    name="date" 
                    placeholder="YYYY-MM-DD" 
                    className= {`input input-bordered border-2 ${errors.date && touched.date && "input-error"} text-[14px] text-secondary w-full max-w-xs`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                  />
                  {errors.date && touched.date && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.date}</span>
                    </label>)
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex-1">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-bold text-[16px] text-primary">Image</span>
                </label>
                <div className="form-control flex flex-col">
                  <input 
                    type="file" 
                    name="picture" 
                    placeholder="Input event price" 
                    className= {`file-input file-input-bordered ${errors.picture && touched.picture && "input-error"} text-[14px] text-secondary w-full max-w-xs`}
                    onChange={(e)=> setSelectedPicture(e.target.files[0])}
                    onBlur={handleBlur}
                  />
                  {errors.picture && touched.picture && (
                    <label className="label">
                      <span className="label-text-alt text-error">{errors.picture}</span>
                    </label>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-[16px] text-primary">Detail</span>
            </label>
            <div className="form-control flex flex-col">
              <input 
                type="text" 
                name="desciption" 
                placeholder="Input event detail" 
                className= {`input input-bordered border-2 ${errors.desciption && touched.desciption && "input-error"} text-[14px] text-secondary w-full max-w-xs`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.desciption}
              />
              {errors.desciption && touched.desciption && (
                <label className="label">
                  <span className="label-text-alt text-error">{errors.desciption}</span>
                </label>)
              }
            </div>
          </div>
        </div>

      </div>
            
      <div className="modal-action">
        <button type="submit" disabled={isSubmitting} className="rounded-2xl btn btn-primary w-3/12">Save</button>
        <label htmlFor="my-modal" className="rounded-2xl btn btn-neutral w-3/12">Close</label>
      </div>
    </form>
  );
};
FormCreateEvent.propTypes = {
  values: propTypes.objectOf(propTypes.string),
  errors: propTypes.objectOf(propTypes.string), 
  touched: propTypes.objectOf(propTypes.bool), 
  handleChange: propTypes.func,
  handleBlur: propTypes.func,
  handleSubmit: propTypes.func,  
  isSubmitting: propTypes.bool,
  errorMessage: propTypes.string, 
  successMessage: propTypes.string,
  setSelectedPicture: propTypes.func
};

function CreateEvent(){
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const [menuBar, setMenuBar] = React.useState("");
  const [profile, setProfile] = React.useState({});
  const [events, setEvents] = React.useState([]);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [selectedPIcture, setSelectedPicture] = React.useState(null);
    
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

    async function getEventMenage(){
      try {
        const {data} = await http(token).get("/events/manage?limit=5");
        console.log(data);
        setEvents(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getEventMenage();
  },[]);

  function doLogout(){
    dispatch(logout());
    navigate("/");
  }

  const createEvent = async (values)=>{
    const form = new FormData();
    Object.keys(values).forEach((key) => {
      if(values[key]){
        form.append(key, values[key]);
      }
            
    });
    if(selectedPIcture){
      form.append("picture", selectedPIcture);
    }
    if(token){
      const {data} = await http(token).post("/events", form, {
        headers: {
          "Content-Type" : "multipart/form-data"
        }
      });
      console.log(data);
      setSuccessMessage(data.masssage);
    }
    const {data} = await http(token).get("/events/manage?limit=5");
    console.log(data);
    setEvents(data.results);
    // setSuccessMessage(data.result)
    // for (var pair of form.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]); 
    // }
  };

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
            <div className="inline-block rounded-full w-12 h-12 p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400 mx-3 ">
              {profile?.picture && (<img className='object-cover w-full h-full border-4 border-white rounded-full' src={profile?.picture.startsWith("https")? profile?.picture : `http://localhost:8888/uploads/${profile?.picture}`} alt={profile?.fullName} />)}
            </div>
            <div className="text-secondary self-center font-bold text-[16px]">{profile?.fullName}</div>
          </div>
        </Link>
      </nav>
      <main className="px-[30px] md:flex md:bg-[#F4F7FF] p-[20px] md:px-[75px] md:py-[75px]">
        <aside id="menuBar" className={menuBar}>
          <div className="flex flex-col xl:flex-row items-center gap-3 mb-[56px]">
            <div className="inline-block rounded-full w-12 h-12 p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
              {profile?.picture && (<img className='object-cover w-full h-full border-4 border-white rounded-full' src={profile?.picture.startsWith("https")? profile?.picture : `http://localhost:8888/uploads/${profile?.picture}`} alt={profile?.fullName} />)}
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
              <li className="flex gap-3 py-3 text-accent"><AiOutlinePlusCircle size={20}/><Link to="/CreateEvent">Creat Event</Link></li>
              <li className="flex gap-3 py-3 text-primary"><AiOutlineUnorderedList size={20}/><Link to="/Booking">My Booking</Link></li>
              <li className="flex gap-3 py-3 text-primary"><AiOutlineHeart size={20}/><Link to="/Wishlist">My Wishlist</Link></li>
              <li className="flex gap-3 py-3 text-primary"><AiOutlineSetting size={20}/>Seting</li>
              <button onClick={doLogout} className="flex gap-3 py-3 text-primary pb-10"><FiLogOut size={20}/>Log out</button>
            </ul>
          </div>
        </aside>  

        <article className="inline-block w-full bg-white p-[20px] md:px-[100px] md:py-[70px] rounded-2xl flex-1">
          <div className="md:flex md:justify-between mb-6">
            <div className="mb-[30px] font-bold text-[20px] text-secondary">My Manage</div>
            <div className="font-[400] text-[14px]">
              <label htmlFor="my-modal" className="px-5 rounded-2xl btn btn-primary shadow-lg flex gap-3 py-3 w-[150px] md:w-full text-white">Create</label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal" className="modal-toggle" />
              <div className="modal">
                <Formik
                  initialValues={{ 
                    title: "" ,
                    categoryId: "",
                    cityId: "",
                    desciption: "",
                    date: "",
                    price: ""}}

                  validationSchema = {validationSchema}
                  onSubmit={createEvent}
                >
                  {(props) => (
                    <FormCreateEvent {...props} successMessage={successMessage} setSelectedPicture = {setSelectedPicture}/>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          {events.map(event =>{
            return(
              <div key={`eventsMenage-${event.id}`}>
                <div className="flex gap-x-10" >
                  <div className="self-center w-[50px] flex-1">
                    <p className="font-bold text-[24px] text-accent">{moment(event.date).format("DD")}</p>
                    <p className="font-[400] text-[16px] text-primary">{moment(event.date).format("ddd")}</p>
                  </div>
                  <div className="flex-initial w-full">
                    <h1 className="pb-2 font-[600] text-[24px] text-secondary">{event.title}</h1>
                    <p className="pb-2 font-[400] text-[14px] text-primary">{event.location}</p>
                    <p className="pb-2 font-[400] text-[14px] text-primary">{moment(event.date).format("MMMM Do YYYY, h:mm a")}</p>
                    <div className="flex gap-2">
                      <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Detail</Link>
                      <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Update</Link>
                      <Link to="" className="pb-2 font-[400] text-[14px] text-accent">Delete</Link>
                    </div>
                  </div>
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

export default CreateEvent;