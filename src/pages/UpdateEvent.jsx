import React from "react";
import http from "../helper/http";
import { BsCheckCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import propTypes from "prop-types";

const UpdateEvent = ({updateData})=>{
  const token = useSelector(state => state.auth.token);
  const [category, setcategory] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [pictureURI, setPictureURI] = React.useState("");
  const [selectedPIcture, setSelectedPicture] = React.useState(null);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [events, setEvents] = React.useState({});
  console.log(updateData);
  
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

  const updateEvent = async (values)=>{
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
      const {data} = await http(token).patch(`/events/${events.id}`, form, {
        headers: {
          "Content-Type" : "multipart/form-data"
        }
      });
      console.log(data);
      setSuccessMessage(data.message);
    }
    getEventManage();
    
  };

  const getEventManage = async() =>{
    try {
      const {data} = await http(token).get(`/events/detail/${updateData.id}`);
      setEvents(data.results);
    } catch (error) {
      const message = error?.response?.data?.message;
      if(message){
        console.log(message);
      }
    }
  };
  
  React.useEffect(()=>{
    getEventManage();

    const getCategories = async()=>{
      try {
        const {data} = await http().get("/categories");
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
    <Formik
      initialValues={{ 
        title: events?.title || "" ,
        categoryId: events?.category || "",
        cityId: events?.location || "",
        desciption: events?.desciption || "",
        date: events?.date || ""
      }}

      onSubmit={updateEvent}
    >{({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className="w-[90%] h-[100%] bg-white px-[5%] md:px-[10%] pt-10 rounded-xl flex flex-col" onSubmit={handleSubmit} >
          {successMessage && (<div className="flex flex-row justify-center alert alert-info shadow-lg text-white text-lg my-3"><BsCheckCircleFill size={30}/>{successMessage}</div>)}
          <h3 className="font-bold text-[24px] text-secondary text-center py-6 md:text-left">Update Event</h3>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-between items-center">
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
                          className= "input input-bordered border-2 text-[14px] text-secondary w-full max-w-xs"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title}
                        />
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
                        className="text-[14px] text-secondary border-2 input input-bordered w-full max-w-xs"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.category}>
                        <option className="hidden">{events?.category}</option>
                        {category.map(event =>{
                          return(
                            <option className="text-secondary" key={`Category-createEvent${event.id}`} value={event.id}>{event.name}</option>
                          );
                        })}   
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
                        className= "text-[14px] text-secondary border-2 input input-bordered w-full max-w-xs"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.location}>
                        <option className="hidden">{events?.location}</option>
                        {locations.map(event =>{
                          return(
                            <option className="text-secondary" key={`Location-createEvent${event.id}`} value={event.id}>{event.name}</option>
                          );
                        })}  
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
                          className= "input input-bordered border-2 text-[14px] text-secondary w-full max-w-xs"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.date}
                        />
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
                      <div className="md:hidden flex gap-2">
                        <div className="w-[150px] h-[200px] overflow-hidden rounded-xl border-2 p-2 mb-2">
                          {selectedPIcture ? <img src={pictureURI} alt='' className="w-full h-full object-cover rounded-xl" /> : 
                            <img src={events?.picture} alt='' className="w-full h-full object-cover rounded-xl" />}
                        </div>
                        <ul className="md:hidden my-[25px] text-left text-secondary">
                          <li>Image size: max, 2 MB</li>
                          <li>Image formats: .JPG, .JPEG, .PNG</li>
                        </ul>
                      </div>
                      <div className="form-control flex flex-col">
                        <input 
                          type="file" 
                          name="picture" 
                          placeholder="Input event price" 
                          className= "file-input file-input-bordered text-[14px] text-secondary w-full max-w-xs"
                          onChange={changePicture}
                          onBlur={handleBlur}
                        />
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
                      className= "input input-bordered border-2 text-[14px] text-secondary w-full max-w-xs"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.desciption}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-[300px] h-[500px] overflow-hidden rounded-xl border-2 p-2">
                {selectedPIcture ? <img src={pictureURI} alt='' className="w-full h-full object-cover rounded-xl" /> : 
                  <img src={events?.picture} alt='' className="w-full h-full object-cover rounded-xl" />}
              </div>
              <ul className="my-[25px] text-left text-center text-secondary">
                <li>Image size: max, 2 MB</li>
                <li>Image formats: .JPG, .JPEG, .PNG</li>
              </ul>
            </div>
          </div>
              
          <div className="modal-action justify-center md:justify-end">
            <button type="submit" disabled={isSubmitting} className="rounded-2xl btn btn-primary w-3/12 normal-case">Save</button>
          </div>
        </form>
      )}

    </Formik>
    
  );
};
UpdateEvent.propTypes = {
  updateData: propTypes.objectOf(propTypes.string),
};

export default UpdateEvent;