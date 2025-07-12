import React, { createContext, useContext, useState } from "react";
const EditContent = createContext();

export const EditProvider = ({ children }) => {
 const [formValues, setFormValues] = useState({
     name: "",
     phone: "",
     email: "",
     category: "",
     message: "",
     file: null,
     captcha: "",
   });


 
   const [submissions, setSubmissions] = useState([]);
   const [showErrors, setErrors] = useState(false);
 
   const handleChange = (e) => {
     const { name, value, files } = e.target;
     setFormValues((prev) => ({
       ...prev,
       [name]: files ? files[0] : value,
     }));
   };
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
     const { name, phone, email, category, message, captcha } = formValues;
 
     const hasErrors =
       name === "" ||
       phone === "" ||
       email === "" ||
       !isValidEmail(email) ||
       category === "" ||
       message === "" ||
       captcha === "";
 
     if (hasErrors) {
       setErrors(true);
       return;
     }
 
     if (parseInt(captcha) !== 3) {
       alert("Captcha incorrect");
       return;
     }
       console.log("Form Submitted:", {...formValues });
 
     setSubmissions((prev) => [...prev, formValues]);
     toast.success("Success Notification");
 
     
     setFormValues({
       name: "",
       phone: "",
       email: "",
       category: "",
       message: "",
       file: null,
       captcha: "",
     });
 
     setErrors(false);
   };
 
   const isValidEmail = (email) => {
     return email.includes("@") && email.includes(".");
   };
 
   const ErrorMessage = ({ message }) => {
     if (!message) return null;
     return <div className="reqiure">{message}</div>;
   };
 
  return (
    <EditContent.Provider value={{  formValues, setFormValues, submissions, setSubmissions,  showErrors, setErrors, handleSubmit, handleChange, ErrorMessage}}>
      {children}
    </EditContent.Provider>
  );
};
export const useEdit = () => useContext(EditContent);
