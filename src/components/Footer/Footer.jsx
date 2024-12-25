import React, { useState } from 'react'
import "./Footer.scss"
import { IoLogoInstagram } from "react-icons/io5";
import { RiTelegramLine } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from 'axios';
import { data } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const SendMassage = (event) => {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const telephone = document.getElementById("telephone").value.trim();
    const coment = document.getElementById("coment").value.trim();
  
    if (!name || !surname || !telephone || !coment) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }
  
    const token = "7345560299:AAFAwMyRQ9uHLpIdmo6T5nwPLUwV_KQJrcE";
    const chat_id =  6992354984;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
    const massangeContent = `Ismi: ${name}\nFamilyasi: ${surname}\nNomeri: ${telephone}\nKommentariya: ${coment}`;
  
    axios.post(url, {
      chat_id: chat_id,
      text: massangeContent,
    })
      .then(() => {
        alert("Muvoffaqiyatli yuborildi!");
        document.getElementById("myForm").reset();
      })
      .catch((error) => {
        console.error("Yuborishda hatolik:", error.response ? error.response.data : error);
        alert("Yuborishda xatolik yuz berdi.");
      });
  };
  const {t, i18n} = useTranslation();
  const HandelChange = (event) => {
    const selectedLanugage = event.target.value;

    i18n.changeLanguage(selectedLanugage);
  }
  
  // const [phone, setPhone] = useState('');

  // const handlePhoneChange = (event) => {
  //   let value = event.target.value.replace(/\D/g, ''); // Faqat raqamlarni qoldirish
  //   if (value.length > 9) {
  //     value = value.slice(0, 9); // 9 raqamdan ko'p bo'lsa, kesish
  //   }

  //   // Formatlash: +998 (__) __ __ __
  //   let formattedValue = '+998 ';
  //   if (value.length > 0) formattedValue += `(${value.slice(0, 2)}) `;
  //   if (value.length > 2) formattedValue += `${value.slice(2, 4)} `;
  //   if (value.length > 4) formattedValue += `${value.slice(4, 6)} `;
  //   if (value.length > 6) formattedValue += `${value.slice(6, 9)}`;

  //   setPhone(formattedValue);  // Formatted value saqlanadi
  // };

  return (
    <footer id='concat'>


     <div className="footer-container">

        <div className="footer-parent">
              
              <div className="footer-text">

                  <div className="text">
                    <h1>{t("Aloqa")}</h1>
                    <hr />
                  </div>

                  <div className="call">
                         <h3>{t("Aloqa uchun:")}</h3>

                     <a href="">+998 99 712 66 66</a><br />
                     <a href="">+998 97 483 99 99</a>
                     
                  </div>
                    
                    <div className="tabs">
                        <h3>{t("Ijtimoiy tarmoqlar")}</h3>
                        <div className="tab">
                            <span> <IoLogoInstagram/> </span>
                            <a href="">{t("easy.visa.uzb")}</a>
                        </div>
                        <div className="tab">
                            <span> <RiTelegramLine/></span>
                            <a href="">t.me/Ataev_Bakhodir90</a><br />
                            {/* <a href="">t.me/sevaraataeva1986</a> */}
                        </div>
                        <div className="tab">
                            <span><FiPlusCircle/> </span>
                            <a href="">Telegram</a>
                        </div>
                        <div className="tab">
                            <span><FaMapMarkerAlt/></span>
                            <a href="">{t("Toshkent, Mustaqillik 59.")}</a>
                        </div>
                    </div>

                     

 
              </div>

              <div className="footer-maps">

              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11960.483246752573!2d69.2350!3d41.3195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3b4c7085e85%3A0xdeb7632ec6801b88!2sQo'qon%20City!5e0!3m2!1sen!2s!4v1699700000000"
                  
                  className='inframe'
                  
                ></iframe>
              </div>

              <div className="footer-form">
               
               <form id='myForm' onSubmit={SendMassage}>
                  
                  <h1> {t("So'rov yuborish")} </h1>

                  <input type="text" placeholder='Name' id='name' />

                  <input type="text" placeholder='Surname' id='surname' />
                  <input
        type="text"  // "number" emas, "text" ishlatiladi
        id="telephone"
        // value={phone}
        // onChange={handlePhoneChange}
        maxLength="18"
        placeholder="+998 (__) __ __ __"
      />

                  <textarea placeholder='Comments' id='coment'></textarea>

                  <button type='submit'>{t("So'rov yuborish")}</button>

               </form>

              </div>
         

        </div>


     </div>

     <div className="footer-end">
      
      <div className="container">
        <h3>{t("© EASY VISA CONSULTING - BARCHA HUQUQLAR HIMOYADA")}</h3>
        <p> {t("Limsa tomonidan ishlab chiqilgan")} </p>
      </div>

     </div>

    </footer>
  )
}

export default Footer