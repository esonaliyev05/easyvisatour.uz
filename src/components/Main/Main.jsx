import React from 'react'
import "./Main.scss"
import Swiper from '../Main-swiper/Swiper'
import "aos/dist/aos.css";

const Main = () => {
  return (
    <>
    <main>

    <div className="Main-container">

      <div className="main-text">
        <h1>Populars</h1>
        <hr />
        {/* <span></span> */}
      </div>

     <Swiper/>


     <div className="Main-about" id='about'>

         <div className="about-text">
           
           <div className="text-about">
            <h1>About </h1>
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
        <h1  >Countries</h1>
        <hr />
        {/* <span></span> */}
      </div>

      <div className="countes-parent">
           
           <div className="boxses">
            <img src="./Countes/services-1.DwE9TaDf.jpg" alt="" />
             <div className="box-title">
              <h2>SHENGEN</h2>
              <img src="./Countes-geb/flag-1.Ba87b5UW.png" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses">
            <img src="./Countes/services-2.DTm5N94i.jpeg" alt="" />
             <div className="box-title">
              <h2>CANADA</h2>
              <img src="./Countes-geb/flag-2.HyNUznN3.png" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses">
            <img src="./Countes/services-3._CMGRBWr.jpg" alt="" />
             <div className="box-title">
              <h2>USA</h2>
              <img src="./Countes-geb/flag-3.C8KNAePY.jpg" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses">
            <img src="./Countes/services-4.lxqOn4Ol.jpg" alt="" />
             <div className="box-title">
              <h2>UK</h2>
              <img src="./Countes-geb/flag-4.3WmQLUuP.jpg" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses">
            <img src="./Countes/services-5.D6AmCmqA.jpg" alt="" />
             <div className="box-title">
              <h2>AUSTRALIA</h2>
              <img src="./Countes-geb/flag-5.B84Fukqc.jpg" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses">
            <img src="./Countes/services-6.CPgF6SGa.jpg" alt="" />
             <div className="box-title">
              <h2>NEW ZEALAND</h2>
              <img src="./Countes-geb/flag-6.Dudeuyg-.png" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses">
            <img src="./Countes/services-7.CYP_oeGi.jpg" alt="" />
             <div className="box-title">
              <h2>JAPAN</h2>
              <img src="./Countes-geb/flag-7.twQFoBkd.jpg" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses">
            <img src="./Countes/services-8.CbQBurqu.jpg" alt="" />
             <div className="box-title">
              <h2>KOREA</h2>
              <img src="./Countes-geb/flag-8.Db2W1jJP.jpg" alt="" className='img-slice' />
             </div>

           </div>
           <div className="boxses">
            <img src="./Countes/services-9.B8AYMP7B.jpg" alt="" />
             <div className="box-title">
              <h2>LATIN AMERICA</h2>
              <img src="./Countes-geb/flag-9.CL_qAoS4.png" alt="" className='img-slice' />
             </div>

           </div>
     

      </div>


    </div>     

     
    </div>

    </main>
    </>
  )
}

export default Main