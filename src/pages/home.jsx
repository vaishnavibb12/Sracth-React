import React from "react";
import Slider from "../component/slider";
import Category from "../component/category.jsx";
import Contact from "../component/contact.jsx";
import Toast from "../component/toast.jsx";

import Todaytodolist from "../component/todaytodolist.jsx";
import Context1 from "../context/context1.jsx";


function home() {
  return (
    <div>
     
    <Context1/>
         <Todaytodolist />
      <Slider />
      <Category />
      <Contact />
      <Toast />
   
     
    </div>
  );
}

export default home;
