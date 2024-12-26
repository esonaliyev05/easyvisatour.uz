// import React, { useState } from 'react'
// import "./Footer.scss"
// import { IoLogoInstagram } from "react-icons/io5";
// import { RiTelegramLine } from "react-icons/ri";
// import { FiPlusCircle } from "react-icons/fi";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import axios from 'axios';
// import { data } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// const Footer = () => {
//   const SendMassage = (event) => {
//     event.preventDefault();
  
//     const name = document.getElementById("name").value.trim();
//     const surname = document.getElementById("surname").value.trim();
//     const telephone = document.getElementById("telephone").value.trim();
//     const coment = document.getElementById("coment").value.trim();
  
//     if (!name || !surname || !telephone || !coment) {
//       alert("Barcha maydonlarni to'ldiring!");
//       return;
//     }
  
//     const token = "7345560299:AAFAwMyRQ9uHLpIdmo6T5nwPLUwV_KQJrcE";
//     const chat_id =  6992354984;
//     const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
//     const massangeContent = `Ismi: ${name}\nFamilyasi: ${surname}\nNomeri: ${telephone}\nKommentariya: ${coment}`;
  
//     axios.post(url, {
//       chat_id: chat_id,
//       text: massangeContent,
//     })
//       .then(() => {
//         alert("Muvoffaqiyatli yuborildi!");
//         document.getElementById("myForm").reset();
//       })
//       .catch((error) => {
//         console.error("Yuborishda hatolik:", error.response ? error.response.data : error);
//         alert("Yuborishda xatolik yuz berdi.");
//       });
//   };
//   const {t, i18n} = useTranslation();
//   const HandelChange = (event) => {
//     const selectedLanugage = event.target.value;

//     i18n.changeLanguage(selectedLanugage);
//   }
  
//   // const [phone, setPhone] = useState('');

//   // const handlePhoneChange = (event) => {
//   //   let value = event.target.value.replace(/\D/g, ''); // Faqat raqamlarni qoldirish
//   //   if (value.length > 9) {
//   //     value = value.slice(0, 9); // 9 raqamdan ko'p bo'lsa, kesish
//   //   }

//   //   // Formatlash: +998 (__) __ __ __
//   //   let formattedValue = '+998 ';
//   //   if (value.length > 0) formattedValue += `(${value.slice(0, 2)}) `;
//   //   if (value.length > 2) formattedValue += `${value.slice(2, 4)} `;
//   //   if (value.length > 4) formattedValue += `${value.slice(4, 6)} `;
//   //   if (value.length > 6) formattedValue += `${value.slice(6, 9)}`;

//   //   setPhone(formattedValue);  // Formatted value saqlanadi
//   // };

//   return (
//     <footer id='concat'>


//      <div className="footer-container">

//         <div className="footer-parent">
              
//               <div className="footer-text">

//                   <div className="text" data-aos="fade-right">
//                     <h1>{t("Aloqa")}</h1>
//                     <hr />
//                   </div>

//                   <div className="call"  data-aos="fade-right">
//                          <h3 data-aos="fade-right">{t("Aloqa uchun:")}</h3>

//                      <a  href="" >+998 99 712 66 66</a><br />
//                      <a   href="" >+998 97 483 99 99</a>
                     
//                   </div>
                    
//                     <div className="tabs">
//                         <h3 data-aos="fade-right">{t("Ijtimoiy tarmoqlar")}</h3>
//                         <div className="tab" data-aos="fade-right">
//                             <span> <IoLogoInstagram/> </span>
//                             <a href="">{t("easy.visa.uzb")}</a>
//                         </div>
//                         <div className="tab" data-aos="fade-right">
//                             <span> <RiTelegramLine/></span>
//                             <a href="">t.me/Ataev_Bakhodir90</a><br />
//                             {/* <a href="">t.me/sevaraataeva1986</a> */}
//                         </div>
//                         <div className="tab" data-aos="fade-right">
//                             <span><FiPlusCircle/> </span>
//                             <a href="">Telegram</a>
//                         </div>
//                         <div className="tab" data-aos="fade-right">
//                             <span><FaMapMarkerAlt/></span>
//                             <a href="">{t("Toshkent, Mustaqillik 59.")}</a>
//                         </div>
//                     </div>

                     
//               </div>

//               <div className="footer-maps"   data-aos="zoom-in">

//               <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11960.483246752573!2d69.2350!3d41.3195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3b4c7085e85%3A0xdeb7632ec6801b88!2sQo'qon%20City!5e0!3m2!1sen!2s!4v1699700000000"
                  
//                   className='inframe'
                
                  
//                 ></iframe>
//               </div>

//               <div className="footer-form">
               
//                <form id='myForm' onSubmit={SendMassage}>
                  
//                   <h1 data-aos="fade-left"> {t("So'rov yuborish")} </h1>

//                   <input type="text" placeholder='Name' id='name' data-aos="fade-left" />

//                   <input type="text" placeholder='Surname' id='surname' data-aos="fade-left" />
//                   <input
//         type="text"  // "number" emas, "text" ishlatiladi
//         id="telephone"
//         // value={phone}
//         // onChange={handlePhoneChange}
//         maxLength="18"
//         placeholder="+998 (__) __ __ __"
//         data-aos="fade-left" />

//                   <textarea placeholder='Comments' id='coment' data-aos="fade-left" ></textarea>

//                   <button type='submit' data-aos="fade-left" >{t("So'rov yuborish")}</button>

//                </form>

//               </div>
         

//         </div>


//      </div>

//      <div className="footer-end">
      
//       <div className="container">
//         <h3>{t("© EASY VISA CONSULTING - BARCHA HUQUQLAR HIMOYADA")}</h3>
//         <p> {t("Limsa tomonidan ishlab chiqilgan")} </p>
//       </div>

//      </div>

//     </footer>
//   )
// }

// export default Footer

import React, { useState } from 'react';
import "./Footer.scss";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTelegramLine } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [file, setFile] = useState(null);

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
    const chat_id = 6992354984;
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

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const sendFileToTelegram = () => {
    if (!file) return alert("Faylni tanlang!");

    const formData = new FormData();
    formData.append("chat_id", 6992354984);
    formData.append("document", file); // Faylni yuborish

    const token = "7345560299:AAFAwMyRQ9uHLpIdmo6T5nwPLUwV_KQJrcE";
    const url = `https://api.telegram.org/bot${token}/sendDocument`;

    axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        alert("Fayl muvaffaqiyatli yuborildi!");
      })
      .catch(error => {
        console.error("Faylni yuborishda xato:", error);
        alert("Faylni yuborishda xatolik yuz berdi.");
      });
  };

  const HandelChange = (event) => {
    const selectedLanugage = event.target.value;
    i18n.changeLanguage(selectedLanugage);
  };

  return (
    <footer id='concat'>
      <div className="footer-container">
        <div className="footer-parent">
          <div className="footer-text">
            <div className="text" data-aos="fade-right">
              <h1>{t("Aloqa")}</h1>
              <hr />
            </div>
            <div className="call" data-aos="fade-right">
              <h3>{t("Aloqa uchun:")}</h3>
              <a href="">+998 99 712 66 66</a><br />
              <a href="">+998 97 483 99 99</a>
            </div>
            <div className="tabs">
              <h3 data-aos="fade-right">{t("Ijtimoiy tarmoqlar")}</h3>
              <div className="tab" data-aos="fade-right">
                <span> <IoLogoInstagram /> </span>
                <a href="">{t("easy.visa.uzb")}</a>
              </div>
              <div className="tab" data-aos="fade-right">
                <span> <RiTelegramLine /></span>
                <a href="">t.me/Ataev_Bakhodir90</a><br />
              </div>
              <div className="tab" data-aos="fade-right">
                <span><FiPlusCircle /> </span>
                <a href="">Telegram</a>
              </div>
              <div className="tab" data-aos="fade-right">
                <span><FaMapMarkerAlt /></span>
                <a href="">{t("Toshkent, Mustaqillik 59.")}</a>
              </div>
            </div>
          </div>

          <div className="footer-maps" data-aos="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11960.483246752573!2d69.2350!3d41.3195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3b4c7085e85%3A0xdeb7632ec6801b88!2sQo'qon%20City!5e0!3m2!1sen!2s!4v1699700000000"
              className='inframe'
            ></iframe>
          </div>

          <div className="footer-form">
            <form id='myForm' onSubmit={SendMassage}>
              <h1 data-aos="fade-left"> {t("So'rov yuborish")} </h1>
              <input type="text" placeholder='Name' id='name' data-aos="fade-left" />
              <input type="text" placeholder='Surname' id='surname' data-aos="fade-left" />
              <input
                type="text"
                id="telephone"
                maxLength="18"
                placeholder="+998 (__) __ __ __"
                data-aos="fade-left"
              />
              <textarea placeholder='Comments' id='coment' data-aos="fade-left"></textarea>
              <input type="file" onChange={handleFileChange} className='fail' />
              <button type='submit' onClick={sendFileToTelegram} data-aos="fade-left" >{t("So'rov yuborish")}</button>
            </form>

      
          
          </div>
        </div>
      </div>

      <div className="footer-end">
        <div className="container">
          <h3>{t("© EASY VISA CONSULTING - BARCHA HUQUQLAR HIMOYADA")}</h3>
          <p>{t("Limsa tomonidan ishlab chiqilgan")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
