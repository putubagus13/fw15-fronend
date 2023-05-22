import ToyFace2 from "../assets/ToyFaces2.png"
import ToyFace1 from "../assets/ToyFaces1.png"
import { BsWhatsapp, BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle,
        AiFillInstagram } from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {Link, useNavigate} from "react-router-dom"
import {MdError} from "react-icons/md"
import {SiArtixlinux} from "react-icons/si"
import React from "react"
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux"
import { clearMessage } from "../redux/reducers/auth"
import propTypes from 'prop-types'
import { asyncLoginAction } from "../redux/actions/auth"

const validationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is invalid"),
    password: Yup.string().required("Password is invalid")
})

 const FormLogin = ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) =>{
    const errorMessage = useSelector(state => state.auth.errorMessage)
    const warningMessage = useSelector(state => state.auth.warningMessage)
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 py-4" >
            <div>
                {errorMessage && (<div className="flex flex-row justify-center alert alert-error shadow-lg text-white text-lg"><MdError size={30}/>{errorMessage}</div>)}
                {warningMessage && (<div className="flex flex-row justify-center alert alert-warning shadow-lg text-white text-lg"><MdError size={30}/>{warningMessage}</div>)}
            </div>
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
            <div className="form-control flex flex-col">
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password" 
                    className= {`input input-bordered ${errors.password && touched.password && "input-error"} text-secondary h-14 w-full border-2 rounded-2xl px-5`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {errors.password && touched.password && (
                    <label className="label">
                        <span className="label-text-alt text-error">{errors.password}</span>
                    </label>)
                }
                
            </div>
            <div className="text-right">
                <Link to="/ForgotPassword" className="text-accent font-bold text-right">Forgot Password?</Link>
            </div>
            <button disabled={isSubmitting} className="my-2 h-14 w-full btn btn-primary rounded-2xl shadow-lg" type="submit">Sign in</button>
        </form>
    )}

FormLogin.propTypes = {
    values: propTypes.objectOf(propTypes.string),
    errors: propTypes.objectOf(propTypes.string), 
    touched: propTypes.objectOf(propTypes.bool), 
    handleChange: propTypes.func,
    handleBlur: propTypes.func,
    handleSubmit: propTypes.func,  
    isSubmitting: propTypes.bool
}


function Login(){ 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)
    const formError = useSelector(state => state.auth.formError)

    const doLogin = async (values, {setSubmitting, setErrors})=>{
        dispatch(clearMessage())
        dispatch(asyncLoginAction(values))
        if(formError.length){
            setErrors({
                email: formError.filter(item => item.param === "email")[0].message,
                password: formError.filter(item => item.param === "password")[0].message
            })
        }
        setSubmitting(false)
    }
    React.useEffect(()=>{
        console.log(token)
        if(token){
            navigate("/")
        }
    },[token, navigate]) 
    
    return(
        <div>
        <main className="flex h-full">
            <div className="hidden md:block md:flex-1 bg-primary relative">
                <img className="absolute top-[367px] right-[157px]" src={ToyFace2} alt="ToyFaces2"/>
                <div className="absolute rotate-180 h-[194px] w-[394px] top-[510px] right-[50px] bg-gradient-to-b from-primary to-transparent "></div>
                <img className="absolute top-[273px] right-[318px]" src={ToyFace1} alt="ToyFaces1"/>
                <div className="absolute rotate-180 h-[250px] w-[480px] top-[480px] right-[190px] bg-gradient-to-b from-primary to-transparent "></div>
            </div>
            <div className="px-[30px] w-full md:flex-initial md:pt-[214px] md:w-[516px] md:px-[100px]">
                <Link to="/">
                <div className="flex items-center pb-[57px]">
                    <SiArtixlinux size={50} className="text-primary filter blur-[2.8px] pr-1"/>
                    <div className="text-primary text-[24px] font-bold" >TIX</div><div className="text-accent text-[24px] font-bold" >Event</div>
                </div></Link>
                <h1 className="text-[24px] font-bold text-secondary" >Sign In</h1>
                <p className="flex gap-2 pb-11 pt-3 text-secondary">Hi, Welcome back to Urticket!</p>
                <Formik 
                    initialValues={{ 
                    email: "", 
                    password: "" 
                    }}
                    validationSchema = {validationSchema}
                    onSubmit={doLogin}
                >
                    {(props)=>(
                        <FormLogin {...props}/>
                    )}
                </Formik>
                <p className="text-secondary text-center pt-[30px]">or sign in with</p>
                <div className="flex gap-6 py-6 justify-center pb-36">
                    <button className="btn btn-outline btn-neutral w-24"><FcGoogle size={30}/></button>
                    <button className="btn btn-outline btn-neutral w-24"><BsFacebook size={30} className="text-[#1D4ED8]"/></button>
                </div>
                
            </div>
        </main>
        <footer className="h-[476px] px-[30px] md:px-[20%] w-full md:py-[60px]">
            <div className="md:flex md:justify-between">
            <div className="mb-10">
                <Link to="/">
                    <div className="flex items-center pb-[57px]">
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
        </div>
    )
}

export default Login;