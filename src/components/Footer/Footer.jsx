import React from 'react'
import "./Footer.scss"
import { IoLogoInstagram } from "react-icons/io5";
import { RiTelegramLine } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>


     <div className="footer-container">

        <div className="footer-parent">
              
              <div className="footer-text">

                  <div className="text">
                    <h1>Contact</h1>
                    <hr />
                  </div>

                  <div className="call">
                         <h3>For contact:</h3>

                     <a href="">+998 99 712 66 66</a><br />
                     <a href="">+998 97 483 99 99</a>
                     
                  </div>
                    
                    <div className="tabs">
                        <h3>Social media</h3>
                        <div className="tab">
                            <span> <IoLogoInstagram/> </span>
                            <a href="">easy.visa.uzb</a>
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
                            <a href="">Tashkent, Mustaqillik 59.</a>
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
               
               <form>
                  
                  <h1>Submit a request</h1>

                  <input type="text" placeholder='Name' />

                  <input type="text" placeholder='Surname' />
                  <input type="number" placeholder='telephone' />

                  <textarea placeholder='Comments'></textarea>

                  <button type='submit'>Submit a request</button>

               </form>

              </div>
         

        </div>


     </div>

     <div className="footer-end">
      
      <div className="container">
        <h3>© EASY VISA CONSULTING - ВСЕ ПРАВА ЗАЩИЩЕНЫ</h3>
        <p>Разработано сайтом Limsa</p>
      </div>

     </div>

    </footer>
  )
}

export default Footer