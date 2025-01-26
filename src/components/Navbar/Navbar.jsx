import React, { useEffect } from "react";
import "./Navbar.scss";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsXCircle } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   
  const [open , setOpen] = useState(false);

  const {t,i18n} = useTranslation();
  const HandelChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
    

  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 350) {
      if (currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    } else {
      setIsHidden(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isHidden ? "hidden" : ""}`}>
      <div className="container">
        <div className="nav-logo">
          {/* <NavLink to={""}> */}
          <img src="./Nav-imegs/logovector.C2wkqkZw.png" alt="" />
          {/* </NavLink> */}
        </div>

        <div className="nav-img">
          <img src="./Nav-imegs/navbar-bg.B8Uap9Oe.png" alt="" />
        </div>

        <div className="nav-concet">
          <ul>
            <a href="#about">{t("Haqida")}</a>
            <a href="#Countries">{t("Mamlakatlar")}</a>
            <a href="#services">{t("Xizmatlar")}</a>
            <a href="#excursion">{t("Bizning Ishlarimiz")}</a>
            <a href="#concat">{t("Bog'lanish")}</a>
            
          </ul>
            


          <select name="Lng" id="lng" onChange={HandelChange}>
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
        </div>
        <div className="select-bars">
          <p>+998971449336</p>

          <HiBars3 className="bars" onClick={() => setOpen(!open)} />
          
        </div>

      </div>
      
      <div className={open ? "Open activ" : "Open"}>
          
          <div className="edit" onClick={() => setOpen(false)}>
            <BsXCircle/>
          </div>

          <ul>
            <a href="#about"  onClick={() => setOpen(false)}>{t("Haqida")}</a>
            <a href="#Countries"  onClick={() => setOpen(false)}>{t("Mamlakatlar")}</a>
            <a href="#services"  onClick={() => setOpen(false)}>{t("Xizmatlar")}</a>
            <a href="#excursion"  onClick={() => setOpen(false)}>{t("Bizning Ishlarimiz")}</a>
            <a href="#concat"  onClick={() => setOpen(false)}>{t("Bog'lanish")}</a>
            
          </ul>
          
        <select name="Lng" id="lng" onChange={HandelChange}>
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>

        {/* <button onClick={() => setOpen(false)}>Yopish</button> */}
      </div>

    </nav>
  );
};

export default Navbar;
