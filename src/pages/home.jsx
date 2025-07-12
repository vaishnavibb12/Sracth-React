import React from "react";
import Slider from "../component/slider";
import Category from "../component/category.jsx";
import Contact from "../component/contact.jsx";
import Toast from "../component/toast.jsx";

import ToDoList from "../component/ToDoList.jsx";
import ContextForm from "../component/ContextForm.jsx";
import { EditProvider } from "../Usecontext/Usecontext.jsx";
import UseReftext from "../component/UseReftext.jsx";


function home() {
  return (
    <div>
      

      <UseReftext/>
      <EditProvider>
      <ContextForm />
      </EditProvider>
      <ToDoList />

      <Slider />
      <Category />
      <Contact />
      <Toast />
    </div>
  );
}

export default home;
