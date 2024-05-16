import React from "react";
import { NavLink, Link } from "react-router-dom";
import '../../styles/Home/header.css';
import {FaRegUser} from 'react-icons/fa';
import {BsCart3} from 'react-icons/bs';
import {PiPhoneCallLight} from 'react-icons/pi';



const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-haeder-color">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
             <img className="logo_img" src="/Images/logo.png"/>
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
              <li className="nav-item d-flex">

               <input className="input_search" type="search" placeholder="Find Book here"   />
          
              </li>

              <li className="nav-item">
                <NavLink to="/contactus" className="nav-link" href="#">
                <PiPhoneCallLight/>
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                 <BsCart3/>
                </NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" href="#">
                 <FaRegUser/>
                </NavLink>
              </li>
           
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
