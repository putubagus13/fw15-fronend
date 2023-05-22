import {Link} from "react-router-dom"
import { BsWhatsapp, BsFacebook, BsCheckCircleFill } from "react-icons/bs"
import {AiOutlinePlusCircle,
        AiFillEdit, 
        AiFillCreditCard, 
        AiFillTwitterCircle, 
        AiFillInstagram,
        AiOutlineHeart,
        AiOutlineSetting,
        AiOutlineUnorderedList, } from "react-icons/ai"
import {FiUnlock, FiUser, FiLogOut} from "react-icons/fi"
import {SiArtixlinux} from "react-icons/si"
import MenuBar1 from "../components/MenuBar1"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout} from "../redux/reducers/auth"
import http from "../helper/http"
import { useNavigate } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
import propTypes from "prop-types"
import {MdError} from "react-icons/md"

const validationSchema = Yup.object({
    oldPassword: Yup.string().required("Old password is invalid"),
    newPassword: Yup.string().required("New password is invalid"),
    confirmPassword: Yup.string().oneOf([Yup.ref("newPassword"), null], "Password must match").required("Confirm Password is invalid"),
})

const FormChangePassword = ({values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errorMessage,
    successMessage
    })=>{
    return(
        <form id="form" onSubmit={handleSubmit} className="inline-block md:h-[900px] w-full bg-white px-[20px] md:px-[100px] py-[50px] md:py-[70px] rounded-2xl flex-1">
            <h1 className="font-bold text-[20px] text-secondary">Change Password</h1>
            {errorMessage && (<div className="flex flex-row justify-center alert alert-error shadow-lg text-white text-lg my-3"><MdError size={30}/>{errorMessage}</div>)}
            {successMessage && (<div className="flex flex-row justify-center alert alert-info shadow-lg text-white text-lg my-3"><BsCheckCircleFill size={30}/>{successMessage}</div>)}
            <div className="block md:flex justify-start items-center gap-[10px] my-[30px]">
                <div className="w-[230px] flex-initial font-[400] text-secondary">Old Password</div>
                <div className="flex-1 form-control flex flex-col">
                    <input 
                        type="password" 
                        name="oldPassword" 
                        placeholder="Old Password" 
                        className= {`input input-bordered ${errors.oldPassword && touched.oldPassword && "input-error"} text-secondary h-14 w-full border-2 rounded-2xl px-5`}
                        onChange={handleChange} onBlur={handleBlur}
                        value={values.oldPassword}
                    />
                    {errors.oldPassword && touched.oldPassword && (
                        <label className="label">
                            <span className="label-text-alt text-error">{errors.oldPassword}</span>
                        </label>)
                    }
                </div>
            </div>
            <div className="block md:flex justify-start items-center gap-[10px] my-[30px]">
                <div className="w-[230px] flex-initial font-[400] text-secondary">New Password</div>
                <div className="flex-1 form-control flex flex-col">
                    <input 
                        type="password" 
                        name="newPassword" 
                        placeholder="New Password" 
                        className= {`input input-bordered ${errors.newPassword && touched.newPassword && "input-error"} text-secondary h-14 w-full border-2 rounded-2xl px-5`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.newPassword}
                    />
                    {errors.newPassword && touched.newPassword && (
                        <label className="label">
                            <span className="label-text-alt text-error">{errors.newPassword}</span>
                        </label>)
                    }
                </div>
            </div>
            <div className="block md:flex justify-start items-center gap-[10px] my-[30px]">
                <div className="w-[230px] flex-initial font-[400] text-secondary">Confirm New Password</div>
                <div className="flex-1 form-control flex flex-col">
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm Password" 
                        className= {`input input-bordered ${errors.confirmPassword && touched.confirmPassword && "input-error"} text-secondary h-14 w-full border-2 rounded-2xl px-5`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                        <label className="label">
                            <span className="label-text-alt text-error">{errors.confirmPassword}</span>
                        </label>)
                    }
                </div>
            </div>
            <button disabled={isSubmitting} className="w-full h-[55px] rounded-2xl md:my-[30px] btn btn-primary shadow-lg my-3" type="submit">Update</button>

        </form>
    )
}
FormChangePassword.propTypes = {
    values: propTypes.objectOf(propTypes.string),
    errors: propTypes.objectOf(propTypes.string), 
    touched: propTypes.objectOf(propTypes.bool), 
    handleChange: propTypes.func,
    handleBlur: propTypes.func,
    handleSubmit: propTypes.func,  
    isSubmitting: propTypes.bool,
    errorMessage: propTypes.string, 
    successMessage: propTypes.string
}


function ChangePassword(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    const [menuBar, setMenuBar] = React.useState('')
    const [profile, setProfile] = React.useState({})
    const [successMessage, setSuccessMessage] = React.useState("")
    const [errorMessage, setErrorMessage] = React.useState("")
    
    React.useEffect(()=>{
        async function getProfileUser(){
            try {
                const {data} = await http(token).get("/profile")
                setProfile(data.results)
                console(data)
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }
        getProfileUser()
    },[])

    function doLogout(){
        dispatch(logout())
        navigate("/")
    }

    async function doChangePassword(values, {setSubmitting, setErrors}){
        setErrorMessage("")
        setSuccessMessage("")
        try {
            const body = new URLSearchParams(values).toString()
            const {data} = await http(token).patch("/changePassword", body)
            console.log(data)
            setSuccessMessage(data.message)
            setSubmitting(false)
        } catch (error) {
            const message = error?.response?.data?.message
            if(message){
                if(error?.response?.data?.results){
                    setErrors({
                        oldPassword: error.response.data.results.filter(item => item.param === "oldPassword")[0].message,
                        newPassword: error.response.data.results.filter(item => item.param === "newPassword")[0].message,
                        confirmPassword: error.response.data.results.filter(item => item.param === "confirmPassword")[0].message,
                    })
                }else{
                    setErrorMessage(message)
                }
            }
        }
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
                            {profile?.picture && (<img className='w-12 h-12 border-4 border-white rounded-full' src={profile?.picture.startsWith('https')? profile?.picture : `http://localhost:8888/uploads/${profile?.picture}`} alt={profile?.fullName} />)}
                        </div>
                        <div className="text-secondary self-center font-bold text-[16px]">{profile?.fullName}</div>
                    </div>
                </Link>
            </nav>
            <main className="px-[30px] md:flex md:bg-[#F4F7FF] p-[20px] md:px-[75px] md:py-[75px]">
                <aside id="menuBar" className={menuBar}>
                    <div className="flex flex-col xl:flex-row items-center gap-3 mb-[56px]">
                        <div className="inline-block rounded-full p-0.5 bg-gradient-to-br from-yellow-500 to-blue-400">
                        {profile?.picture && (<img className='w-12 h-12 border-4 border-white rounded-full' src={profile?.picture.startsWith('https')? profile?.picture : `http://localhost:8888/uploads/${profile?.picture}`} alt={profile?.fullName} />)}
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
                                    <li className="flex gap-3 py-3 text-accent"><FiUnlock size={20}/><Link to="/ChangePassword">Change Password</Link></li>
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
                <Formik
                        initialValues={{ 
                            oldPassword: "" ,
                            newPassword: "",
                            confirmPassword: ""}}
                        validationSchema = {validationSchema}
                        onSubmit={doChangePassword}
                        >
                        {(props) => (
                            <FormChangePassword {...props} errorMessage={errorMessage} successMessage={successMessage} />
                        )}
                </Formik>
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
    )
}

export default ChangePassword