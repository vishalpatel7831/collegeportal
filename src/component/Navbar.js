import React from 'react';
import {
    FaSistrix,
    FaTelegramPlane,
    FaRegCompass,
    FaRegHeart,
  } from "react-icons/fa";
  import { MdHome } from "react-icons/md";
  import {ContextProvider} from "../global/Context";
  // import {NavBar, Nav, NavItem,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';
  // import 'bootstrap/dist/css/bootstrap.min.css';
  import {Link} from "react-router-dom";
export const Navbar = () => {
  const {model,openModel}=React.useContext(ContextProvider);
  console.log("my model",model);
  const openForms = () => {
    openModel();
  };
    return (
        <div className="navbar">
      <div className="navbar__first">
        <div className="navbar__first-logo">
          <img src="/images/download.jpg" alt=""  className="hgcelogo"/>
        </div>
      </div>
      <div className="navbar__middle">
        <div className="navbar__middle-search">
          <input type="text" className="navbar__search" placeholder="Search" />
          <FaSistrix className="searchIcon" />
        </div>
      </div>
      <div className="navbar__last">
        <li>
          <MdHome className="navbar__icons" />
        </li>
        <li>
          <FaTelegramPlane className="navbar__icons" />
        </li>
        <li>
          <FaRegCompass className="navbar__icons" />
        </li>
        <li>
          <FaRegHeart className="navbar__icons" />
        </li>
        <Link to="/job">
        <li >Job</li>
        </Link>
        <Link to="/profile">
        <li >profile</li>
        </Link>
      </div>
    </div>
  
   
    )
}

export default Navbar