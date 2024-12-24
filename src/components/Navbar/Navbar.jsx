import React from "react";
import "./Navbar.scss";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
   
  const [open , setOpen] = useState(false);

  const {t,i18n} = useTranslation();
  const HandelChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
    

  }


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
            X
          </div>

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

        {/* <button onClick={() => setOpen(false)}>Yopish</button> */}
      </div>

    </nav>
  );
};

export default Navbar;
