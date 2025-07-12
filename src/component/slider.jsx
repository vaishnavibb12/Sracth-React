import React, { useEffect, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import brand from "../assets/image 100.png";
import brand2 from "../assets/image 102.png";
import brand3 from "../assets/image 104.png";
import brand4 from "../assets/image 99.png";

import "../css/slider.css";
import slide from "../slider.js";

function slider() {
  const [currentSlider, setCurrentSlider] = useState(0);

  const nextSldier = () => {
    setCurrentSlider((prevIndex) =>
      prevIndex === slide.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSldier = () => {
    setCurrentSlider((prevIndex) =>
      prevIndex === 0 ? slide.length : prevIndex - 1
    );
  };
  const [sliderData, setSlidererData] = useState([]);
  const title = useRef();
  const handleChange = (e) => {
    e.preventDefault();
    const formData = {
      titleNew: title.current.value,
    };
    console.log(formData);
    setSlidererData((prev) => [...prev, formData]);
  };
  useEffect(() => {
    title.current.value = "";
    console.log(sliderData);
  }, [sliderData]);

  // console.log(slide);

  return (
    <>
      <div className="slider-bg">
        <div className="container">
          <div className="slide-cont">
            <h2>Supplier, Categories, Products & More</h2>
            <p style={{color:"white"}}>Get The Verified Suppliers on Pipex.ai</p>
          </div>
          <div className="inside-container">
            <div className="bg-sodebox">
              <div className="all-bg-sodebox">
                <form onSubmit={handleChange}>
                  <div className="bg-sodebox1">
                    <div className="under-box">
                      <IoMdSearch />

                      <input
                        type="text"
                        ref={title}
                        placeholder="Search for Product, Categories"
                      />
                    </div>
                    <button type="submit">Submit</button>
                  </div>
                </form>
                <ul className="new-table">
                  {sliderData.map((item, index) => {
                    return <li key={index}>{item.titleNew}</li>;
                  })}
                </ul>
                <div className="pro">
                  <p>Looking For.....</p>
                  <div className="sub-pro">
                    <div className="sub-ng">washener</div>
                    <div className="sub-ng">nut</div>
                    <div className="sub-ng">screws</div>
                    <div className="sub-ng">bolt</div>
                    <div className="sub-ng">washener</div>
                  </div>
                </div>
              </div>
              <div className="left">
                <p> *Direct Seller & Buyer Connection</p>
                <div className="right">
                  <img src={brand}></img>
                  <img src={brand2}></img>
                  <img src={brand3}></img>
                  <img src={brand4}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-cat">
        <div className="container">
          <div className="fg">
            {" "}
            <h6>Top Categories</h6>
          </div>

          <div className="top-inside">
            <div className="leftArrow" onClick={prevSldier}>
              {" "}
              &#9664;{" "}
            </div>

            {slide.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`top-otsite ${
                    index === currentSlider ? "active" : ""
                  }`}
                >
                  <img src={item.imgFile1}></img>
                </div>
              );
            })}
            <div className="rightArrow" onClick={nextSldier}>
              {" "}
              &#9654;
            </div>
          </div>

          {/* <div className="top-inside">
            <div className="leftArrow" onClick={prevSldier}>  &#9664; </div>
          
            {slide.map((item) =>{
              return(
               
                <div  className="top-otsite">
             
             

              <img src={item.imgFile1}></img>
      
            </div>
              )
            })}
            <div className="rightArrow" onClick={nextSldier}>  &#9654;</div>
            
          </div> */}
        </div>
      </div>
    </>
  );
}

export default slider;
