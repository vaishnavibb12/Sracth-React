import React from "react";
import q1 from "../assets/Group 40596.png";
import q2 from "../assets/Group 40597.png";
import "../css/category.css";
import categoty_2 from "../category.js";

function category() {
  return (
    <div className="catt">
      <div className="container">
        <div className="head-cat">
          <h2 style={{color:"black"}}>
            Category <span>wise Listing</span>
          </h2>
          <div className="min-ic">
            <img src={q1}></img>
            <img src={q2}></img>
          </div>
        </div>

      
        {/* +++++++++++++++++++++++++++++++ */}
        {/* +++++++++++++++++++++++++++++++ */}
        <div className="all-sites">
          {categoty_2.map((item) => {
            return (
              <div className="left-site">
                <div className="left-cont">
                  <h6>{item.sectionTitle}</h6>
                  <img src={q2}></img>
                </div>

                <div className="left-topimg">
                  {
                    item.mainSection.map((child) => (
                      <div className="img1">
                        <img src={child.imgFile}></img>
                        <div className="pg">{child.imageName}</div>
                      </div>
                    ))}
                </div>

                
              </div>
            );
          })}
        </div>
        {/* +++++++++++++++++++++++++++++++ */}
        {/* +++++++++++++++++++++++++++++++ */}
      </div>
    </div>
  );
}

export default category;
