import React, { useState } from "react";
import "../css/navbar.css";
import "../App.css";
import logo from "../assets/loog.png";
import { FiEdit3 } from "react-icons/fi";
import drop from "../assets/tabler_list.png";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [isOpen, serIsOpen] = useState(false);
  const toggler = () => {
    serIsOpen(!isOpen);
  };

  const [subOpen, setSubOpen] =useState();
  const subtoggler = () =>{
    setSubOpen(!subOpen);
  }
  return (
    <div className="header">
      <div className="container">
        <div className="nav-bar">
          <img src={logo}></img>
          <div className={`nav-but ${isOpen ? "active" : ""}`}>
            <ul className="navbar">
              <li>
                <Link to="home">Home</Link>
              </li>

              <li>
                <Link to="product">Category</Link>
              </li>
              <li>
                <Link to="shoppingCart">ShoppingCart</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>

            <div className="nav-but1">
              <FiEdit3 />
              Post Requirment
            </div>
            <div className="opendropdown" onClick={subtoggler}>
              
              {subOpen ? <ImCross /> : <FaUser />}
              <ul className={subOpen === true ? "mini-drop" : "disable"}>
                <li>My Account</li>
                <li>My Suncription</li>
                <li>My login</li>
              </ul>
            </div>
            <div className="togg" onClick={toggler}>
              {/* <img src={drop} alt="" /> */}
              {/* <ImCross /> */}
              {isOpen ? <ImCross /> : <img src={drop} />}
            </div>
          </div>
        </div>
      </div>

      {/* ++++++++ mobile view ++++++++++ */}
      <div className={isOpen === true ? "mobile-nav" : "disable"}>
        <ul className="mobile-navbar">
          <li>
            <Link to="home">Home</Link>
          </li>

          <li>
            <Link to="product">Category</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
