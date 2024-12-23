import React from "react";
import "./Navbar.scss";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";

const Navbar = () => {
   
  const [open , setOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="nav-logo">
          <img src="./Nav-imegs/logovector.C2wkqkZw.png" alt="" />
        </div>

        <div className="nav-img">
          <img src="./Nav-imegs/navbar-bg.B8Uap9Oe.png" alt="" />
        </div>

        <div className="nav-concet">
          <ul>
            <a href="#about">About</a>
            <a href="#Countries">Countries</a>
            <a href="#services">Services</a>
            <a href="#excursion">Our Works</a>
            <a href="#concat">Contact</a>
            
          </ul>
            


          <select>
            <option value="">UZ</option>
            <option value="">EN</option>
            <option value="">RU</option>
          </select>
        </div>
        <div className="select-bars">
          <p>+998971449336</p>

          <HiBars3 className="bars" onClick={() => setOpen(!open)} />
          
        </div>

      </div>
      
      <div className={open ? "Open activ" : "Open"}>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Countries</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Our Works</a></li>
          <li><a href="">Contact</a></li>
        </ul>
          
        <select>
            <option value="">UZ</option>
            <option value="">EN</option>
            <option value="">RU</option>
          </select>

        {/* <button onClick={() => setOpen(false)}>Yopish</button> */}
      </div>

    </nav>
  );
};

export default Navbar;
