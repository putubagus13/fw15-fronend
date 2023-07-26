import ToyFace2 from "../assets/ToyFaces2.png";
import ToyFace1 from "../assets/ToyFaces1.png";
import {Link, useNavigate} from "react-router-dom";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {RiSearch2Line} from "react-icons/ri";
import {AiOutlineMinus,
  AiOutlineArrowLeft,
  AiOutlineArrowRight} from "react-icons/ai";
import {RxDotFilled} from "react-icons/rx";
import Elips1 from "../assets/Ellipse-right-1.png";
import Elips2 from "../assets/center-elips.png";
import Elips3 from "../assets/top-elips.png";
import Elips4 from "../assets/left-bottom.png";
import Elips5 from "../assets/bottom-center.png";
import Elips6 from "../assets/top-right.png";
import React from "react";
import moment from "moment";
import MenuBar from "../components/MenuBar";
import http from "../helper/http";
import { Formik } from "formik";
import Footer from "../components/Footer";

function Home(){
  const navigate = useNavigate();
  const [events, setEvents] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  const [partners, setPartners] = React.useState([]);
  const [category, setcategory] = React.useState([]);
  const [eventCategory, setEventCategory] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [pg, setPg] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState();
  const [totalPg, setTotalPg] = React.useState();

  async function getEventCategory(name){
    try {
      const {data} = await http().get("/events", {params: {category: name, page: pg, limit: 8}});
      setEventCategory(data.results);
      setTotalPg(data.pageInfo.totalPage);
    } catch (error) {
      const message = error?.response?.data?.message;
      if(message){
        console.log(message);
      }
    }
  }

  async function getDataEvent(page){
    try {
      const {data} = await http().get("/events", {params : {page: page, limit: 8}});
      setEvents(data.results);
      setTotalPage(data.pageInfo.totalPage);
    } catch (error) {
      const message = error?.response?.data?.message;
      if(message){
        console.log(message);
      }
    }
  }

  React.useEffect(()=>{
    getEventCategory();
    getDataEvent(page);

    async function getDataCities(){
      try {
        const {data} = await http().get("/cities?limit=7");
        setCities(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getDataCities();

    async function getCategory(){
      try {
        const {data} = await http().get("/categories?limit=10");
        setcategory(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getCategory();

    async function getDataPartners(){
      try {
        const {data} = await http().get("/partners?limit=10");
        console.log(data);
        setPartners(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getDataPartners();

  },[page, pg]);

  function doSearch(values){
    const query = new URLSearchParams(values).toString();
    navigate(`/Search?${query}`);
  }

  function doAllEvents(){
    navigate("/allEvents");
  }
  function doAllCities(){
    navigate("/allCities");
  }

  return(
    <>
      <MenuBar/>
      <header>
        <div className="flex h-[660px] w-full bg-primary md:items-center px-20 relative overflow-hidden">
          <div className="">
            <img src={ToyFace2} className="absolute bottom-0 right-16 md:top-48 w-[225px] h-auto"/>
            <div className="absolute bottom-0 right-16 md:bottom-[170px] bg-gradient-to-t from-primary via-primary to-transparent h-36 w-[225px]"/>
            <img src={ToyFace1} className="absolute bottom-0 right-52 md:top-20 h-auto w-[358px]"/>
            <div className="absolute bottom-0 right-52 md:bottom-[135px] bg-gradient-to-t from-primary via-primary to-transparent h-36 w-[358px]"/>
          </div>
          <div className="relative flex justify-around md:justify-center flex-col gap-10 w-[700px] h-full">
            <div className="text-white font-bold text-6xl text-center md:text-left">Find events you <br/>love with our</div>
            <Formik initialValues={
              {search: "",
                location:""}
            }onSubmit={doSearch}
            >{({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:bg-white rounded-2xl items-center px-6 sm:py-0">
                  <RiSearch2Line size={100} className="hidden sm:block"/>
                  <input 
                    name="search" 
                    type="text" 
                    placeholder="Search Event" 
                    className="text-secondary rounded-2xl input w-full max-w-xs h-12"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.search} />
                  <hr className="hidden sm:block h-12 border-[1.5px] rounded-2xl mx-6"/>
                  <HiOutlineLocationMarker size={100} className="hidden sm:block"/>
                  <select 
                    name="location" 
                    className="select w-full max-w-xs"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}>
                    <option disabled value="">Pick location</option>
                    {cities.map(event =>{
                      return(
                        <option className="text-secondary" key={`citySearch${event.id}`} value={event.name}>{event.name}</option>
                      );
                    })}   
                  </select>
                  <button type="submit" className="btn btn-square rounded-2xl btn-accent">
                    <AiOutlineArrowRight size={20} className="text-white"/>
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="h-[196px] w-full flex justify-center items-end">
          <div className="flex gap-2 py-1 px-10 rounded-2xl font-bold text-[16px] bg-accent text-white"><AiOutlineMinus size={30} className="text-white"/>Events</div>
        </div>
        <h1 className="w-full flex justify-center py-[25px] text-primary font-bold text-[36px]">Event For You</h1>
        <div className="flex gap-10 justify-center items-center py-10 px-10">
          {page === 1 ? <button className="btn btn-square rounded-1xl btn-neutral">
            <AiOutlineArrowLeft size={20} className="text-white"/>
          </button> :<button onClick={()=>setPage(page - 1)} className="btn btn-square rounded-1xl btn-primary">
            <AiOutlineArrowLeft size={20} className="text-white"/>
          </button>}
          <div className="w-12 h-20 py-2 border-white hover:border-accent rounded-[10px] text-neutral hover:text-accent border-2 text-center">
            <p className="text-[14px] font-bold">13</p>
            <p className="text-[14px]">Mon</p>
            <div className="flex justify-center"><RxDotFilled size={20}/></div>
          </div>
          <div className="w-12 h-20 py-2 border-white hover:border-accent rounded-[10px] text-neutral hover:text-accent border-2 text-center">
            <p className="text-[14px] font-bold">14</p>
            <p className="text-[14px]">Tue</p>
            <div className="flex justify-center"><RxDotFilled size={20}/></div>
          </div>
          <div className="w-12 h-20 py-2 border-white hover:border-accent rounded-[10px] text-neutral hover:text-accent border-2 text-center">
            <p className="text-[14px] font-bold">15</p>
            <p className="text-[14px]">Wed</p>
            <div className="flex justify-center"><RxDotFilled size={20}/></div>
          </div>
          <div className="hidden md:block w-12 h-20 py-2 border-white hover:border-accent rounded-[10px] text-neutral hover:text-accent border-2 text-center">
            <p className="text-[14px] font-bold">16</p>
            <p className="text-[14px]">thu</p>
            <div className="flex justify-center"><RxDotFilled size={20}/></div>
          </div>
          <div className="hidden md:block w-12 h-20 py-2 border-white hover:border-accent rounded-[10px] text-neutral hover:text-accent border-2 text-center">
            <p className="text-[14px] font-bold">17</p>
            <p className="text-[14px]">Fri</p>
            <div className="flex justify-center"><RxDotFilled size={20}/></div>
          </div>
          {page === totalPage ? <button className="btn btn-square rounded-1xl btn-neutral">
            <AiOutlineArrowRight size={20} className="text-white"/>
          </button> :<button onClick={()=> setPage(page + 1)} className="btn btn-square rounded-1xl btn-primary">
            <AiOutlineArrowRight size={20} className="text-white"/>
          </button>}
        </div>
      </header>
      <main>
        <section className="List-Event flex justify-center">
          <div className="flex w-11/12 overflow-x-scroll scrollbar-hidden scrollbar-w-0 gap-4">
            {events.map(event =>{
              return(
                <Link to={`/EventDetail/${event.id}`} key={`events${event.id}`}>
                  <div className="w-64 h-96 border rounded-3xl drop-shadow-lg flex-shrink-0 overflow-hidden relative">
                    {event.picture && <img src={event.picture.startsWith("https")? event.picture : `http://localhost:8888/uploads/${event.picture}`} className="w-full h-full object-cover" alt={event.fullName}/>}
                    <div className="absolute flex flex-col bg-gradient-to-t from-black/[0.9] to-transparent bottom-0 h-48 w-full px-6 py-10 gap-2">
                      <div className="text-white">{moment(event.date).format("MMMM Do YYYY, h:mm")}</div>
                      <div className="font-bold text-2xl text-white">{event.title}</div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <div className="flex w-full justify-center py-10">
          <button onClick={doAllEvents} type="submit" className="font-bold text-accent hover:text-white h-9 px-16 py-1 border border-accent rounded-2xl hover:bg-accent">See All</button>
        </div>

        {/* section Cities */}
        <div id="location" className="flex w-full justify-center pt-36 px-3">
          <div className="relative w-full h-auto bg-primary rounded-[50px] py-16 px-10 flex flex-col gap-6 items-center overflow-hidden">
            <img src={Elips1} className="absolute bottom-0 right-0 w-96 h-auto" />
            <img src={Elips2} className="absolute bottom-0 right-80 w-72 h-auto" />
            <img src={Elips3} className="absolute top-0 left-0 w-70 h-auto" />
            <div className="relative flex flex-col gap-6">
              <div className="flex justify-start w-full">
                <p className="flex bg-neutral/[0.5] w-48 rounded-2xl text-xl text-white font-bold gap-2 items-center justify-start font-[500]"><AiOutlineMinus size={40} className="text-white"/>Location</p>
              </div>
              {/* Top side location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6">
                <h1 className="w-60 font-bold text-white text-4xl ">Discover <br/> Events Near <br/> You</h1>
                {cities.map(event =>{
                  return (
                    <div key={`cities${event.id}`}>
                      <div className="flex flex-col justify-between items-center" >
                        <div className="w-60 h-36 overflow-hidden rounded-2xl">
                          <img src={event?.picture} className="object-cover"/>
                        </div>
                        <p className="text-white">{event.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex justify-center">
                <button onClick={doAllCities} type="submit" className="font-bold bg-white text-accent hover:text-white h-9 px-6 md:w-48 py-1 border border-accent rounded-2xl hover:bg-accent">See All</button>
              </div>
            </div>
          </div>
        </div>

        {/* section event category */}
        <div className="h-[196px] w-full flex justify-center items-end">
          <div className="flex gap-2 py-1 px-10 rounded-2xl font-bold text-[16px] bg-accent text-white"><AiOutlineMinus size={30} className="text-white"/>Category</div>
        </div>
        <h1 className="w-full flex justify-center text-center py-[25px] text-primary font-bold text-[36px]">Browse Event By Category</h1>
        <div className="w-full flex gap-10 justify-center overflow-hidden">
          {category.map(event =>{
            return(
              <div className="flex justify-center" key={`categories${event.id}`}>
                <button onClick={()=>getEventCategory(event.name)} type="submit" className="h-10 text-neutral font-[500] hover:text-accent hover:border-2 border-white hover:border-b-accent">{event.name}</button>
              </div>
            );
                        
          })}
        </div>
                
        <div className="List-Event flex flex-col justify-center gap-3 py-16">
          <div className="px-[5%]">
            <div className="flex w-full overflow-x-scroll scrollbar-hidden scrollbar-w-0 gap-4">
              {eventCategory.length > 0 &&
             <>
               {eventCategory.map(event =>{
                 return(
                   <Link to={`/EventDetail/${event.id}`} key={`eventssection${event.id}`}>
                     <div className="flex flex-col w-80 h-96 border rounded-3xl drop-shadow-lg flex-shrink-0 overflow-hidden">
                       <div className="flex-1 overflow-hidden">
                         {event.picture && <img src={event.picture.startsWith("https")? event.picture : `http://localhost:8888/uploads/${event.picture}`} className="w-full h-full object-cover" alt={event.fullName}/>}
                       </div>
                       <div className="flex-[0.5] flex justify-end gap-3 flex-col bg-primary h-48 w-full text-white p-10">
                         <div className="text-white">{moment(event.date).format("MMMM Do YYYY, h:mm")}</div>
                         <div className="font-bold text-2xl">{event.title}</div>
                       </div>
                     </div>
                   </Link>
                 );
               })}
             </>}
              {eventCategory.length < 1 &&
             <div className="w-full flex justify-center items-center font-semibold h-20 text-[30px] text-secondary">Event Not Found</div> 
              }
            </div>
          </div>
          <div className="w-full flex gap-3 justify-center">
            {pg === 1 ? <button className="btn btn-square rounded-1xl btn-neutral">
              <AiOutlineArrowLeft size={20} className="text-white"/>
            </button> : <button onClick={()=>setPg(pg - 1)} className="btn btn-square rounded-1xl btn-primary">
              <AiOutlineArrowLeft size={20} className="text-white"/>
            </button>}
            {pg === totalPg ? <button className="btn btn-square rounded-1xl btn-neutral">
              <AiOutlineArrowRight size={20} className="text-white"/>
            </button> : <button onClick={()=> setPg(pg + 1)} className="btn btn-square rounded-1xl btn-primary">
              <AiOutlineArrowRight size={20} className="text-white"/>
            </button>}
          </div>
        </div>

        {/* section partners */}
        <div className="w-full h-auto flex flex-col gap-10 py-20 px-6 justify-center bg-[#374151] mb-20 relative">
          <img src={Elips4} className="absolute bottom-0 left-0 w-[600px] h-auto" />
          <img src={Elips5} className="absolute bottom-0 left-[500px] w-72 h-auto" />
          <img src={Elips6} className="absolute top-0 right-0 w-70 h-auto" />
          <div className="w-full flex justify-center items-end">
            <div className="flex gap-2 py-1 px-10 rounded-2xl font-bold text-[16px] bg-neutral/[0.3] text-white"><AiOutlineMinus size={30} className="text-white"/>Partner</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-bold text-2xl text-white text-center">Our Trusted Partners</h1>
            <p className="text-[14px] text-neutral">By companies like :</p>
          </div>
          <div className="flex flex-row gap-10 justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {partners.map(event=>{
                return(
                  <div className="w-[83px] h-[63px] overflow-hidden " key={`partners${event.id}`}>
                    <img className="object-cover" src={`http://localhost:8888/uploads/${event.picture}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
                
    </>
  );
}

export default Home;