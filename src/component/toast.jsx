import React, { useState } from "react";
import "../css/toster.css";
import { ImCross } from "react-icons/im";
import toastArray from "../toast";

function Toster() {
  const [toast, setToast] = useState({ show: false, type: "", message: "" });



  const handleToast = (type, message) => {
    setToast({ show: true, type, message });

    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 4000);
  };




  return (

 
    <div className="catt2">
      <div className="container">
        <div className="tost">
          <h3>Toaster Messages</h3>
        </div>

        <div className="tostsd">
          {toastArray.map((item) => (
            <button
           
              className={`toast-btn ${item.type}`}
              onClick={() => handleToast(item.type, item.message)}
            >
              {item.label}
            </button>
          ))}

          {toast.show && (
            <div className={`custom-toast ${toast.type}`}>
              <span>{toast.message}</span>
              <ImCross className="close-btn" onClick={() => setToast({ ...toast, show: false })} />
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Toster;
