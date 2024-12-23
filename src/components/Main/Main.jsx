import React, { useState } from 'react'
import "./Main.scss"
import Swiper from '../Main-swiper/Swiper'
import "aos/dist/aos.css";
import Aos from 'aos';
import { useEffect } from 'react';
import Plags from "../../components/MainPlags/Plags"


const Main = () => {

    // AOSni ishga tushirish
    useEffect(() => {
      Aos.init({ once: false });
      Aos.refresh();  // Har safar yangilash
    }, [])
 
   
  const [btn , setBtn] = useState(false)
  const [content, setContent] = useState(
    "We assist in obtaining tourist visas for comfortable travel to popular countries, including Europe, North America, and Asia. Our experts provide full support at every stage."
  );

  const handleButtonClick = (service) => {
    let text = "";

    switch (service) {
      case "Visa Consultations":
        text =
          "EASY VISA CONSULTING specialists provide detailed consultations on visa applications for countries such as Schengen, Canada, the USA, the United Kingdom, Japan, and Korea. We explain all the nuances of document submission and help you prepare for the process.";
        break;
      case "Tourist Visas":
        text =
          "We assist in obtaining tourist visas for comfortable travel to popular countries, including Europe, North America, and Asia. Our experts provide full support at every stage.";
        break;
      case "Business Visas":
        text =
          "For business trips, EASY VISA CONSULTING offers comprehensive solutions for visa applications to the world's leading countries. We ensure a fast and professional document submission process.";
        break;
      case "Document Preparation":
        text =
          "We carefully check all your documents to ensure they meet the requirements of visa centers. We also assist in gathering the necessary certificates and extracts for a successful visa acquisition. ";
        break;
      case "Tour Packages":
        text =
          "We offer the selection of optimal tourist packages, including trip organization, hotel reservations, and excursions, to make your vacation as comfortable as possible";
        break;
      case "Insurance":
        text =
          "We arrange travel insurance that will protect you and your loved ones during your trip, ensuring safety and confidence in any situation.";
        break;
      default:
        text = "Please select a service.";
    }

    setContent(text);
  }
  
  return (
    <>
    <main>

    <div className="Main-container">

      <div className="main-text">
        <h1 >Populars</h1>
        <hr />
        {/* <span></span> */}
      </div>

     <Swiper/>


     <div className="Main-about" id='about'>

         <div className="about-text">
           
           <div className="text-about">
            <h1 data-aos="fade-right">About </h1>
            <hr />
           </div>

           <p>EASY VISA CONSULTING is a rapidly growing company specializing in visa support for travelers. We ensure that your trips are comfortable and worry-free.</p>

            <p> EASY VISA CONSULTING provides visa services for leisure and business trips to the Schengen Area, Canada, the USA, the UK, Japan, and Korea. Our team of experienced professionals ensures a high level of service, allowing you to focus on your travel plans.</p>

             <p> We are committed to making the visa application process simple and understandable for clients from Uzbekistan, enabling them to easily and quickly access the best travel destinations in the world.</p>
 

         </div>

         <div className="about-img">

          <img src="./Main-img/about-photo.B5ncCcLk.jpg" alt="" />

         </div>


     </div>

    <div className="Main-countes">
    <div className="main-text">
        <h1 data-aos="fade-right" >Countries</h1>
        <hr />
        {/* <span></span> */}
      </div>

      <div className="countes-parent" >
           
           <div className="boxses" data-aos="zoom-in">
            <div className="box-img">
            <img src="./Countes/services-1.DwE9TaDf.jpg" alt="" />
            </div>
             <div className="box-title">
              <h2>SHENGEN</h2>
              <img src="./Countes-geb/flag-1.Ba87b5UW.png" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses" data-aos="zoom-in">
           <div className="box-img">
              
            <img src="./Countes/services-2.DTm5N94i.jpeg" alt="" />
              </div>
             <div className="box-title">
              <h2>CANADA</h2>
              <img src="./Countes-geb/flag-2.HyNUznN3.png" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses" data-aos="zoom-in">
           <div className="box-img">
              
            <img src="./Countes/services-3._CMGRBWr.jpg" alt="" />
              </div>
             <div className="box-title">
              <h2>USA</h2>
              <img src="./Countes-geb/flag-3.C8KNAePY.jpg" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses" data-aos="zoom-in">
           <div className="box-img">
              
            <img src="./Countes/services-4.lxqOn4Ol.jpg" alt="" />
              </div>
             <div className="box-title">
              <h2>UK</h2>
              <img src="./Countes-geb/flag-4.3WmQLUuP.jpg" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses" data-aos="zoom-in">
           <div className="box-img">
              
            <img src="./Countes/services-5.D6AmCmqA.jpg" alt="" />
              </div>
             <div className="box-title">
              <h2>AUSTRALIA</h2>
              <img src="./Countes-geb/flag-5.B84Fukqc.jpg" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses" data-aos="zoom-in">
           <div className="box-img">
              
            <img src="./Countes/services-6.CPgF6SGa.jpg" alt="" />
              </div>
             <div className="box-title">
              <h2>NEW ZEALAND</h2>
              <img src="./Countes-geb/flag-6.Dudeuyg-.png" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses" data-aos="zoom-in">
           <div className="box-img">
              
            <img src="./Countes/services-7.CYP_oeGi.jpg" alt="" />
              </div>
             <div className="box-title">
              <h2>JAPAN</h2>
              <img src="./Countes-geb/flag-7.twQFoBkd.jpg" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses" data-aos="zoom-in">
           <div className="box-img">
            <img src="./Countes/services-8.CbQBurqu.jpg" alt="" />
              
              </div>
             <div className="box-title">
              <h2>KOREA</h2>
              <img src="./Countes-geb/flag-8.Db2W1jJP.jpg" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses" data-aos="zoom-in">
           <div className="box-img">
            <img src="./Countes/services-9.B8AYMP7B.jpg" alt="" />
              
              </div>
             <div className="box-title">
              <h2>LATIN AMERICA</h2>
              <img src="./Countes-geb/flag-9.CL_qAoS4.png" alt="" className='img-slice' />
             </div>

           </div>
     

      </div>


    </div>     

     <div className="Main-excursion">
         
     <div className="main-text">
        <h1 data-aos="fade-right">Excursion</h1>
        <hr />
        {/* <span></span> */}
      </div>

       <div className="Excursion-video">

        <div className="ext-vido"> 
         
         <video src="https://www.easyvisatour.uz/_nuxt/Tur-1.CSw71yk-.mp4" controls></video>
         <img src="./public/Nav-imegs/logovector.C2wkqkZw.png" alt="" />

         </div>
        <div className="ext-vido">
          <video src="https://www.easyvisatour.uz/_nuxt/Tur-2._fNf8ipk.mp4" controls></video>
          <img src="./public/Nav-imegs/logovector.C2wkqkZw.png" alt="" />
        </div>
        <div className="ext-vido">
              
              <video src="https://www.easyvisatour.uz/_nuxt/Tur-3.CVnwjvBy.mp4" controls></video>
              <img src="./public/Nav-imegs/logovector.C2wkqkZw.png" alt="" />
        </div>

       </div>

     </div>

     <div className="Main-client">

     <div className="main-text">
        <h1 data-aos="fade-right">Client Reviews</h1>
        <hr />
        {/* <span></span> */}
      </div>
           
           <div className="Client-parent-video">

                 <div className="clinet-video">
                  <video src="https://www.easyvisatour.uz/_nuxt/Client-1.BV6NKnVm.mp4" controls></video>
                  <img src="./public/Nav-imegs/logovector.C2wkqkZw.png" alt="" />
                 </div>
                 <div className="clinet-video">
                  <video src="https://www.easyvisatour.uz/_nuxt/Client-2.BL9vfObs.mp4" controls></video>
                  <img src="./public/Nav-imegs/logovector.C2wkqkZw.png" alt="" />
                 </div>
                 <div className="clinet-video">
                  <video src="https://www.easyvisatour.uz/_nuxt/Client-3.CpjT8gFj.mp4" controls></video>
                  <img src="./public/Nav-imegs/logovector.C2wkqkZw.png" alt="" />
                 </div>
             

             

           </div>

     </div>

     
    </div>

    <div className="Main-Priorities">
        
        <div className="priorities-parent">

          <div className="text">

            <div className="pr-h1">
              <h1 data-aos="fade-up">Priorities in Tourism and Visas</h1>
              <hr />
            </div>

            <p data-aos="zoom-in">We provide a high level of service and reliability in obtaining tourist visas. Our team has experience in the tourism industry and is ready to quickly resolve issues related to obtaining visas. We strive to make our clients' travels comfortable and carefree, providing support at every stage—from choosing a visa to obtaining documentation.</p>

          </div>
          
           <div className="boxses">
            <div className="box-tab" data-aos="zoom-in" >
            <img src="./public/Imeg/image.png" alt="" />

            <h3>Saving Your Time</h3>

            </div>
            <div className="box-tab" data-aos="zoom-in">
            <img src="./public/Imeg/prioritet-3.Dbi66kDf.svg fill.png" alt="" />
             <h3>Reliability</h3>
            </div>
            <div className="box-tab" data-aos="zoom-in">
            <img src="./public/Imeg/SVG.png" alt="" />
              <h3>Support</h3>
            </div>
            <div className="box-tab" data-aos="zoom-in">
            <img src="./public/Imeg/monney.png" alt="" />
             <h3>Convenience</h3>
            </div>
           </div>


        </div>

        <div className="Loders-parent">

          <div className="Loders">

            <div className="loders-text">
              <h1 data-aos="fade-up">We in Numbers</h1>
              <hr />
            </div>

            <div className="loders-box">
              <div className="box"  data-aos="zoom-in">
                 <h1>7320</h1>

                 <p>Issued Visas</p>

              </div>
              <div className="box"  data-aos="zoom-in">
                <h1>7257</h1>
                <p>Successful Trips</p>
              </div>
              <div className="box"  data-aos="zoom-in">
                <h1>7250</h1>
                <p>Satisfied Clients</p>
              </div>
            </div>

           


          </div>
           
           <hr className='Loder-hr' />
        </div>

     



    </div>

    <div className="services">
      
      <div className="services-text">
        <h1>Services</h1>
        <hr />
      </div>
        
      

      <div className="buttons">
        <button onClick={() => handleButtonClick("Visa Consultations")}>
          Visa Consultations
        </button>
        <button onClick={() => handleButtonClick("Tourist Visas")}>
          Tourist Visas
        </button>
        <button onClick={() => handleButtonClick("Business Visas")}>
          Business Visas
        </button>
        <button onClick={() => handleButtonClick("Document Preparation")}>
          Document Preparation
        </button>
        <button onClick={() => handleButtonClick("Tour Packages")}>
          Tour Packages
        </button>
        <button onClick={() => handleButtonClick("Insurance")}>
          Insurance
        </button>
      </div>
      <hr className='heth-hr' />
      <div className="content">
        <p>{content}</p>
      </div>
    </div>

      <Plags/>
    </main>
    </>
  )
}

export default Main