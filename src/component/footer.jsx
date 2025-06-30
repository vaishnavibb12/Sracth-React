import React from "react";
import logo from "../assets/loog.png";
import "../css/footer.css";
import m1 from "../assets/basil_instagram-solid.png";
import m2 from "../assets/basil_linkedin-solid.png";
import m3 from "../assets/ri_facebook-fill.png";
import m4 from "../assets/ri_twitter-x-fill.png";
import m5 from "../assets/ri_youtube-fill.png";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import foot, { foot1 } from "../footer.js";

function footer() {
  return (
    <>
      <div className="catt1">
        <div className="container">
          {foot.map((item) => {
            return (
              <div className="fit-foot">
                <h6> {item.Maintext}</h6>
               {
                item.heading.map((child)=>(
                   <span className="ghgj">{child.text} |</span>
                ))
               }
              </div>
            );
          })}
          <div className="fit-foot">
            {foot1.map((item)=>{
              return(
                <span className="ghgj">{item.text} |</span>
              )
            })}
          </div>
          <div className="bg-foot">
            <div className="all-foot">
              <div className="left-foot">
                <img src={logo}></img>
                <div className="foot-co">
                  The Final Destination of your
                  <br />
                  search of steel & metal material
                  <br />
                  products
                </div>
                <div className="foot-ico">
                  <img src={m1}></img>
                  <img src={m2}></img>
                  <img src={m3}></img>
                  <img src={m4}></img>
                  <img src={m5}></img>
                </div>
              </div>
              <div className="center-fot">
                <h6>Quick Link</h6>
                <div className="ql">
                  <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Product</li>
                    <li>Material</li>
                    <li>Weight Chart</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="right-foot">
                <h6>Top Countries Regular Deliveries</h6>
                <div className="def">
                  <FaSquareArrowUpRight />
                  <p>Bangladesh</p>
                </div>
                <div className="def">
                  <FaSquareArrowUpRight />
                  <p>Vietnam</p>
                </div>
                <div className="def">
                  <FaSquareArrowUpRight />
                  <p>UAE</p>
                </div>
                <div className="def">
                  <FaSquareArrowUpRight />
                  <p>USA</p>
                </div>
                <div className="def">
                  <FaSquareArrowUpRight />
                  <p>Canada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last-ft">
        <div className="container">
          <div className="allft">
            <div className="leftft">
              <p>
                Made with &nbsp; <FaHeart /> &nbsp; in India | Copyright © 2024
                Pipex.ai.
              </p>
            </div>
            <div className="rightft">
              <p>Terms & Conditions | Privacy Policy | Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
