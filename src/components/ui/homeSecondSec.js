// HomeSecond.js

import React from 'react';
import product1 from '../images/product-1.png';
import product2 from '../images/product-2.png';
import product3 from '../images/product-3.png';


const HomeSecond = () => {
  return (
    <>
      <div className="home-second-container d-flex container-fluid">
        <div className="second-container-text d-flex d-flex flex-column">
          <h1>Crafted with excellent material.</h1>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <button className="explrBtn-homeSec col-lg-3 pt-3 pb-3">Explore</button>
        </div>

        <div className="d-flex product-parent">
          <div className="col-lg-4 product-container">
            <div className="product-overlay">
                <button className='col-lg-2 fs-3 p-1'>+</button>
            </div>
            <img className="col-lg-12 product-image" src={product1} alt="Product 1" />
            <p className='text-center pt-3'>Nordic Chair</p>
            <p className='text-center '>$50.00</p>
          </div>
          <div className="col-lg-4 product-container">
          <div className="product-overlay">
                <button className='col-lg-2 fs-3 p-1'>+</button>
            </div>
            <img className="col-lg-12 product-image" src={product2} alt="Product 2" />
            <p className='text-center pt-3'>Kruzo Aero Chair</p>
            <p className='text-center '>$78.00</p>
          </div>
          <div className="col-lg-4 product-container">
            <div className="product-overlay">
                <button className='col-lg-2 fs-3 p-1'>+</button>
            </div>
            <img className="col-lg-12 product-image" src={product3} alt="Product 3" />
            <p className='text-center pt-3'>Ergonomic Chair</p>
            <p className='text-center '>$43.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSecond;