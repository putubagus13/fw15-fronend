import { BsCheckCircleFill } from "react-icons/bs";
import {Link} from "react-router-dom";
import {SiArtixlinux} from "react-icons/si";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import http from "../helper/http";
import {MdError} from "react-icons/md";
import propTypes from "prop-types";
import FooterAuth from "../components/FooterAuth";
import LeftsideAuth from "../components/LeftsideAuth";

const validationSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is invalid"),
  // code: Yup.required("Code is required"),
  password: Yup.string().required("Password is invalid"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match").required("Confirm Password is invalid")
});

const FormResetPassword = (
  {values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting, 
    errorMessage, 
    successMessage})=>{
  return(
    <form id="form" className="flex flex-col gap-3" onSubmit={handleSubmit}>
      {errorMessage && (<div className="flex flex-row justify-center alert alert-error shadow-lg text-white text-lg mb-3"><MdError size={30}/>{errorMessage}</div>)}
      {successMessage && (<div className="flex flex-row justify-center alert alert-info shadow-lg text-white text-lg mb-3"><BsCheckCircleFill size={30}/>{successMessage}</div>)}
      <div className="form-control flex flex-col">
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
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
          type="text" 
          name="code" 
          placeholder="Enter code verification" 
          className= {`input input-bordered ${errors.code && touched.code && "input-error"} text-secondary h-14 w-full border-2 rounded-2xl px-5`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.code}
        />
        {errors.code && touched.code && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.code}</span>
          </label>)
        }
      </div>
      <div className="form-control flex flex-col">
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
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
      <div className="form-control flex flex-col">
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
      <button disabled={isSubmitting} className="my-2 h-14 w-full btn btn-primary rounded-2xl shadow-lg" type="submit" >Send</button>
    </form>
  );
};
FormResetPassword.propTypes = {
  values: propTypes.objectOf(propTypes.string),
  errors: propTypes.objectOf(propTypes.string), 
  touched: propTypes.objectOf(propTypes.bool), 
  handleChange: propTypes.func,
  handleBlur: propTypes.func,
  handleSubmit: propTypes.func,  
  isSubmitting: propTypes.bool,
  errorMessage: propTypes.string, 
  successMessage: propTypes.string
};

function ResetPassword(){
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const requestForgotPass = async(values, {setSubmitting, setErrors})=>{
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const body = new URLSearchParams(values).toString();
      const {data} = await http().post("/auth/resetPassword", body);
      console.log(data);
      setSuccessMessage(data.message);
      setSubmitting(false);

    } catch (error) {
      const message = error?.response?.data?.message;
      if(message){
        if(error?.response?.data?.results){
          setErrors({
            code: error.response.data.results.filter(item => item.param === "code")[0].message,
          });
        }else{
          setErrorMessage(message);
        }
      }
    }
  };
  React.useEffect(()=>{
    console.log(errorMessage);
  },[errorMessage]);
    

  return(
    <div>
      <main className="flex h-[1024px]">
        <LeftsideAuth />
        <div className="px-[30px] w-full md:flex-initial md:pt-[214px] md:w-[516px] md:px-[100px]">
          <Link to="/">
            <div className="flex items-center pb-[57px]">
              <SiArtixlinux size={50} className="text-primary filter blur-[2.8px] pr-1"/>
              <div className="text-primary text-[24px] font-bold" >TIX</div><div className="text-accent text-[24px] font-bold" >Event</div>
            </div></Link>
          <h1 className="text-[24px] font-bold text-secondary" >Reset Password</h1>
          <p className="flex pb-6 pt-3 text-secondary">Enter the code in the form below</p>
          <Formik
            initialValues={{
              email: "",
              code: "" ,
              password: "",
              confirmPassword:""}}
            validationSchema = {validationSchema}
            onSubmit={requestForgotPass}
          >
            {(props) => (
              <FormResetPassword {...props} errorMessage={errorMessage} successMessage={successMessage}/>
            )}
          </Formik>
        </div>
      </main>
      <FooterAuth />
    </div>
  );
}

export default ResetPassword;