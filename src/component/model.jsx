import React, { useState } from "react";
import "../css/model.css";
import { ImCross } from "react-icons/im";

import { IoMdCloseCircle } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";


function model({ closModel }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
 
   const tooglePass = () => {
     setShowPassword((showPassword) => !showPassword);
   };

  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const handleToast = (type, message) => {
    setToast({ show: true, type, message });

    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 9000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === "" || formData.name === "") {
      setModelError(true);
      return;
    } else if (formData.email === "" || formData.email === "") {
      setModelError(true);
      return;
    } else if (formData.email != "" && !isValidEmail(formData.email)) {
      setModelError(true);
    } else if (formData.password != "" && !isValidPassword(formData.password)) {
      setModelError(true);
      return;
    } else {
       handleToast("success", "Form submitted successfully!");
  
    }
  };
  console.log(formData);

  const RenderError = ({ message }) => {
    if (!message) return null;
    return <div className="model-erro">{message}</div>;
  };
  const [showModelError, setModelError] = useState(false);
  const isValidEmail = (email) => {
    if (email && email.includes("@") && email.includes(".")) {
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

  return (
    <div className="modelbackground">
      <div className="register-container">
        <div className="tog" onClick={() => closModel(false)}>
          <h3>Register Now</h3>
          <ImCross />
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {showModelError && formData.name === "" && (
            <RenderError message="Name is reuquired" />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {showModelError && formData.email === "" && (
            <RenderError message="Email is reuquired" />
          )}
          {showModelError &&
            formData.email != "" &&
            !isValidEmail(formData.email) && (
              <RenderError message="Invalid Email is required" />
            )}
          <div className="added-new">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <p onClick={tooglePass}>{showPassword ? <FaEye /> : <FaEyeSlash />}</p>

            {showModelError && formData.password === "" && (
              <RenderError message="Password is reuquired" />
            )}
            {showModelError &&
              formData.password != "" &&
              !isValidPassword(formData.password) && (
                <RenderError message="Invalid Email is required" />
              )}
          </div>
        
          <button type="submit">Submit</button>
          {toast.show &&(
            <div className={`custom-toast ${toast.type}`}>
              <span>{toast.message}</span>
              <IoMdCloseCircle 
                className="close-btn"
                onClick={() => setToast({ ...toast, show: false })}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default model;
