import ToyFace2 from "../assets/ToyFaces2.png"
import ToyFace1 from "../assets/ToyFaces1.png"
import { BsWhatsapp, BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai"
import {Link} from "react-router-dom"
import {IoTicketSharp} from "react-icons/io5"
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup'
import http from "../helper/http"
import {MdError} from "react-icons/md"

const validationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is invalid"),
    password: Yup.string().required("Password is invalid")
})

function ForgotPassword(){
    const [message, setMessage] = React.useState([])
    const [showMessage, setShowMessage] = React.useState("")
    React.useEffect(()=>{
        const RequestForgotPass = async()=>{
            try {
                const {data} = await http().post("/forgotRequest")
                console.log(data)
                setMessage(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                console.log(message)
                }
            }
        }
        RequestForgotPass()
    })

    function ShowRequest(){
        if(message){
            setShowMessage(message)
        }
    }
    return(
        <div>
         <main className="flex h-[1024px]">
                <div className="hidden md:block md:flex-1 bg-primary relative">
                    <img className="absolute top-[367px] right-[157px]" src={ToyFace2} alt="ToyFaces2"/>
                    <div className="absolute rotate-180 h-[194px] w-[394px] top-[510px] right-[50px] bg-gradient-to-b from-primary to-transparent "></div>
                    <img className="absolute top-[273px] right-[318px]" src={ToyFace1} alt="ToyFaces1"/>
                    <div className="absolute rotate-180 h-[250px] w-[480px] top-[480px] right-[190px] bg-gradient-to-b from-primary to-transparent "></div>
                </div>
                <div className="px-[30px] w-full md:flex-initial md:pt-[214px] md:w-[516px] md:px-[100px]">
                    <Link to="/">
                    <div className="flex items-center pb-[57px]">
                        <IoTicketSharp size={50} className="text-primary filter blur-[2.8px] pr-1"/>
                        <div className="text-primary text-[24px] font-bold" >We</div><div className="text-accent text-[24px] font-bold" >tick</div>
                    </div></Link>
                    <h1 className="text-[24px] font-bold text-secondary" >Forgot Password</h1>
                    <p className="flex pb-6 pt-3 text-secondary">You’ll get mail soon on your email</p>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema = {validationSchema}
                        onSubmit={ ShowRequest}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form id="form" onSubmit={handleSubmit}>
                                {showMessage && (<div className="flex flex-row justify-center alert alert-error shadow-lg text-white text-lg"><MdError size={30}/>{showMessage}</div>)}
                                <div className="form-control flex flex-col">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="email" 
                                        className= {`input input-bordered ${errors.email && touched.email && "input-error"} text-secondary h-14 w-full border-2 rounded-2xl px-5`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    {errors.email && touched.email && (
                                        <label className="label">
                                            <span className="label-text-alt text-error">{errors.email}</span>
                                        </label>)
                                    }
                                </div>
                                <button className="my-2 h-14 w-full btn btn-primary rounded-2xl shadow-lg" type="submit" disabled={isSubmitting}>Send</button>
                            </form>
                        )}
                        </Formik>
                </div>
            </main>
            <footer className="h-[476px] px-[30px] md:px-[20%] w-full md:py-[60px]">
                <div className="md:flex md:justify-between">
                <div className="mb-10">
                    <Link to="/">
                    <div className="flex items-center pb-[57px]">
                        <IoTicketSharp size={50} className="text-primary filter blur-[2.8px] pr-1"/>
                        <div className="text-primary text-[24px] font-bold" >We</div><div className="text-accent text-[24px] font-bold" >tick</div>
                    </div></Link>
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
        </div>
    )
}

export default ForgotPassword;