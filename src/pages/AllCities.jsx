import React from "react";
import http from "../helper/http";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import moment from "moment";
import {FiSearch} from "react-icons/fi";
import {BsFilterLeft} from "react-icons/bs";
import {MdEventBusy} from "react-icons/md";

function AllLocation(){
  const [locations, setLocations] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [limit, setLimit] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState();
  const [city, setCity] = React.useState("");

  async function getEventByCity(city, page, limit, sortBy, search){
    try {
      const {data} = await http().get("/events", {params: {
        location: city, 
        page: page, 
        limit: limit,
        sortBy: sortBy,
        search: search,
      }});
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
    async function getLocation(){
      try {
        const {data} = await http().get("/cities", {params: {limit: 20}});
        setLocations(data.results);
        console.log(data);
      } catch (error) {
        const message = error?.response?.data?.message;
        if(message){
          console.log(message);
        }
      }
    }
    getLocation();
    getEventByCity(city, page, limit, sortBy, search);
  },[city, page, limit, sortBy, search]);

  return(
    <>
      <MenuBar />
      <main className="w-full flex justify-center items-center py-12 px-[2%] md:bg-[#F4F7FF]">
        <div className="flex flex-col gap-10 items-center sm:py-24 px-[2%] sm:px-24 bg-white rounded-2xl sm:drop-shadow-lg gap-10">
          <div className="inline-flex gap-3">
            {locations.map(event=>{
              return(
                <div className="flex justify-center" key={`city-${event.id}`}>
                  {city !== event.name && <button onClick={()=> setCity(event.name)} type="submit" className="bg-primary hover:bg-accent px-3 h-8 rounded-md text-neutral font-[500] text-white normal-case">{event.name}</button>}
                  {city === event.name && <button onClick={()=> setCity(event.name)} type="submit" className="bg-accent px-3 h-8 rounded-md text-neutral font-[500] text-white normal-case">{event.name}</button>}
                </div>
              );
            })}
          </div>
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
            {events.length > 0 && <>
              {events.map(event =>{
                return(
                  <Link to={`/EventDetail/${event.id}`} key={`events${event.id}`}>
                    <div className="w-64 h-96 border rounded-3xl drop-shadow-lg flex-shrink-0 overflow-hidden relative">
                      {event?.picture && (<img className="w-full h-full object-cover" src={event?.picture.startsWith("https")? event?.picture : `http://localhost:8888/uploads/${event?.picture}`} alt={event?.fullName} />)}
                      <div className="absolute flex flex-col bg-gradient-to-t from-black/[0.9] to-transparent bottom-0 h-48 w-full px-6 py-10 gap-2">
                        <div className="text-white">{moment(event.date).format("MMMM Do YYYY, h:mm")}</div>
                        <div className="font-bold text-2xl text-white">{event.title}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </>}
          </div>
          {events.length < 1 && <div className="w-full flex flex-col justify-center items-center py-20">
            <MdEventBusy size={70}/>
            <p className="font-semibold text-2xl">Events not Found</p> 
          </div>}
          {events.length > 0 && 
          <div className="bottom-6 w-full flex gap-6 items-center justify-center">
            {page === 1 ? <button className="btn btn-neutral w-[80px] h-[40px] rounded-lg justify-center text-center font-semibold text-white normal-case">Back</button>
              : <button onClick={()=> setPage(page - 1)} className="btn btn-primary w-[80px] h-[40px] rounded-lg justify-center text-center font-semibold text-white normal-case">Back</button>}
            <p className="font-semibold text-primary text-lg">{page}</p>
            {page === totalPage ? <button className="btn btn-neutral w-[80px] h-[40px] rounded-lg justify-center text-center font-semibold text-white normal-case">Next</button>
              : <button onClick={()=> setPage(page + 1)} className="btn btn-primary w-[80px] h-[40px] rounded-lg justify-center text-center font-semibold text-white normal-case">Next</button>}
          </div>}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AllLocation;