import React from "react";
import logo from "../images/logo.svg";
import mobileMenuIcon from "../images/mobile-menu.svg";
import { Link, useLocation } from "react-router-dom";

function Header(props, isLoggedIn, openMobileMenu) {
  const userLocation = useLocation().pathname;

  return (
    <header className="header">
      <img
        id="site-logo"
        className="logo"
        src={logo}
        alt="Around the USA logo"
      />
{/* 

      <div className="header__menu">
        <p className="header__user-email">{props.email} displayUserEmail</p>
       

        {
        
        isLoggedIn ?
          <>
            {
              isMenuOpen ?
                <button className="menu__close" type="button" onClick={closeMenu}>&#10005;</button> :
                <img className="header__mobile-menu" src={mobileMenuIcon} alt="mobile menu" onClick={openMobileMenu} />
            }
          </> :  
                
        <>
        {
        (userLocation === "/signin") ? 
          <Link to="/signup" className="header__page-link">
            Sign up
          </Link>
         : 
          <>
            <Link to="/signin" className="header__page-link">
              Log in
            </Link>
        }
          </>
        } */}

      {/* </div> */}
    </header>
  );
}

export default Header;
