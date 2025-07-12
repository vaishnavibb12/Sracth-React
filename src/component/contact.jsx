import React, { useState } from "react";
import { GrAttachment } from "react-icons/gr";
import "../css/contact.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import accordion from "../accordion";
import { ToastContainer, toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import Model from "../component/model.jsx"

function contact() {
  const [showModel, setModel] =useState(false);

  const [data, setData] = useState(false);
  const handleToggle = (id) => {
    if (data === id) {
      setData(false);
    } else {
      setData(id);
    }
  };
  const RenderError = ({ message }) => {
    if (!message) return null;
     return <div className="reqiure">{message}</div>;
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });


  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((showPassword) => !showPassword);
  };


  const handleChange = (e) => {
    // e.stopPropagation();
    // console.log(e.target.value);
    // console.log(e.target.name);
    
    
    const { name, value } = e.target;
    // setFormData((prev) => ({ ...prev, [name]: value }));
        setFormData( ({ ...formData, [name]: value }));

      
  };

  // const validate = () => {
  //   const errors = {};
  //   if (!formData.name) errors.name = "Name is required";
  //   if (!formData.email) {
  //     errors.email = "Email is required";
  //   } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
  //     errors.email = "Email is invalid";
  //   }

  //   return errors;
  // };

  const [showErrors, setErrors] = useState(false);
  const isValidEmail = (email) => {
    if (email && 
      email.includes("@") && 
      email.includes(".")) {
      return true;
    }
    return false;
  };

const isValidPassword = (password) => {
  const minLength = 8;
  const hasNumber = /\d/; 
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/; 

  return (
    password.length >= minLength &&
    hasNumber.test(password) &&
    hasSpecialChar.test(password)
  );
};
  

  const handleSubmit = (e) => {
    console.log("enter text");
  
    e.preventDefault();
    if (formData.name === "" || formData.name === "") {
      setErrors(true);
      return;
    } else if (formData.email === "" || formData.email === "") {
      setErrors(true);
      return;
    } else if (formData.email != "" && !isValidEmail(formData.email)) {
      setErrors(true);
    } else if (formData.phone === "" || formData.phone === "") {
      setErrors(true);
      return;
    } else if (formData.password != "" && !isValidPassword (formData.password)) {
      setErrors(true);
      return;
    }
    
    else {
      toast.success("Success Notification");
    }

    console.log(formData);
  };

  return (
    <div className="catt2">
      <div className="container">
        <div className="cont">
          <h2>
            We are here for you
            <br />
            Contact us <span className="vv">Anytime</span>
          </h2>
        </div>

        <div className="all-cont">
        
<div className="lefft-cont">
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            {/* <div className="reqiure">Name is Required</div> */}
            {/* {RenderError("Name is required")} */}
            {showErrors && formData.name === "" && (
              <RenderError message="Name is reuquired" />
            )}

            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {/* <div className="reqiure">Email is Required</div> */}
            {showErrors && formData.email === "" && (
              <RenderError message="Email is required" />
            )}
            {showErrors &&
              formData.email != "" &&
              !isValidEmail(formData.email) && (
                <RenderError message="Invalid Email is required" />
              )}

            <input
              type="number"
              value={formData.phone}
             onChange={(e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 10); 
    setFormData({ ...formData, phone: input });
  }}
              name="phone"
              maxLength="10"
              id="phone"
              className="form-control"
              placeholder="Number"
              
            />
              {showErrors && formData.phone === "" && (
              <RenderError message="Number is required" />
            )}
<div className="add-new">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />

            {/* <div className="reqiure">Password is Required</div> */}

            {showErrors && formData.password === "" && (
              <RenderError message="Password is required" />
            )}
            {showErrors &&
              formData.password != "" &&
              !isValidPassword(formData.password) && (
                <RenderError message="Password must be at least 8 characters and include a number and a special character." />
              )}
            <p  onClick={togglePassword}> {showPassword ?      <FaEye /> : <FaEyeSlash /> }</p>
              </div>
            <button type="submit" className="cont-but">
              Submit
            </button>
            <ToastContainer />
          
          </form>
            <div className="register" onClick={()=>{
              setModel(true)
            }}><p>Register Now</p></div>
            {showModel && <Model closModel={setModel}/>}
            </div>

          {/* ++++++++++++++++ */}

          {/* ++++++++ faq ++++++++++*/}
          <div className="right-contt">
            <div className="right-con">
              <h2>Frequently Asked Questions</h2>
              <p>View More</p>
            </div>

            {accordion.map((item) => {
              return (
                <div className="faqs">
                  <div className="fgs">
                    <p>{item.Question}</p>
                    <p onClick={() => handleToggle(item.id)}>
                      {data === item.id ? <FaMinus /> : <FaPlus />}
                    </p>
                  </div>
                  <div className="content">
                    {data === item.id && <p>{item.Answer}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
