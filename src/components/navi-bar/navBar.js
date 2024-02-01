import React from "react";
import { Link, useLocation } from "react-router-dom";

//login button
import LoginBtn from "../buttons/login";

//cart
import Cart from "../carts/cart";

const NavBar = () => {
  const location = useLocation();

  return (  
    <>
      <div className="d-flex justify-content-around pt-4 nav-bar-container">

        {/* brand */}

        <div className="brand-name col-lg-4">
          <h1>Furni<span className="dot">.</span></h1>
        </div>

        {/* brand end */}

        <div className="link-container col-lg-5 d-flex align-items-center justify-content-around">
          
          {/* navigation link */}
          <Link to="/"  className={`link-btn ${location.pathname === '/' ? 'active' : ''}`}> Home </Link>
          <Link to="/shopPages" className={`link-btn ${location.pathname === '/shopPages' ? 'active' : ''}`}>Shop</Link>
          <Link to="/aboutUs"  className={`link-btn ${location.pathname === '/aboutUs' ? 'active' : ''}`}>About us</Link>
          <Link to="/services"  className={`link-btn ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
          <Link to="/blog"  className={`link-btn ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link>
          <Link to="/contactUs"  className={`link-btn ${location.pathname === '/contactUs' ? 'active' : ''}`}>Contact Us</Link>
          {/* navigation link end */}
          
           {/* buttons */}
          <LoginBtn/>
          <Cart/> 
          {/* buttons end */}
          
        </div>
     
      </div>
    </>
  );
};

export default NavBar;