import React, { useState } from "react";
import "./Main.scss";
import Swiper from "../Main-swiper/Swiper";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Plags from "../../components/MainPlags/Plags";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Main = () => {
  // AOSni ishga tushirish
  useEffect(() => {
    Aos.init({ once: false });
    Aos.refresh(); // Har safar yangilash
  }, []);

  const [btn, setBtn] = useState(false);
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
  };
  const { t, i18n } = useTranslation();
  const HandelChange = (event) => {
    const selectedLanugage = event.target.value;

    i18n.changeLanguage(selectedLanugage);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Agar scroll holati 110vh (110% viewport height) dan oshsa, tugma ko'rinadi
      if (window.scrollY > window.innerHeight * 1.1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main>
        <div className="Main-container">
          <div className="main-text">
            <h1>{t("Populars")}</h1>
            <hr />
            {/* <span></span> */}
          </div>

          <Swiper />

          <div className="Main-about" id="about">
            <div className="about-text">
              <div className="text-about">
                <h1 data-aos="fade-right"> {t("Haqida")} </h1>
                <hr />
              </div>

              <p>
                {" "}
                {t(
                  "EASY VISA CONSULTING — bu sayohatchilar uchun viza yordami ko'rsatishga ixtisoslashgan tez rivojlanayotgan kompaniya. Biz sizning sayohatlaringizni qulay va xavfsiz qilishni ta'minlaymiz."
                )}{" "}
              </p>

              <p>
                {" "}
                {t(
                  "EASY VISA CONSULTING sayohat va biznes safarlari uchun Schengen hududi, Kanada, AQSH, Buyuk Britaniya, Yaponiya va Koreyaga viza xizmatlarini taqdim etadi. Bizning tajribali mutaxassislar jamoamiz yuqori darajadagi xizmatni ta'minlab, sizning sayohat rejalaringizga e'tibor qaratishga imkon beradi."
                )}{" "}
              </p>

              <p>
                {" "}
                {t(
                  "Biz viza ariza jarayonini O'zbekistondan kelgan mijozlarimiz uchun oddiy va tushunarli qilishga sodiqmiz, ularga dunyoning eng yaxshi sayohat manzillariga oson va tez kirish imkonini yaratamiz."
                )}{" "}
              </p>
            </div>

            <div className="about-img">
              <img src="./Main-img/about-photo.B5ncCcLk.jpg" alt="" />
            </div>
          </div>

          <div className="Main-countes" id="Countries">
            <div className="main-text">
              <h1 data-aos="fade-right"> {t("Mamlakatlar")} </h1>
              <hr />
              {/* <span></span> */}
            </div>

            <div className="countes-parent">
              <div className="boxses" data-aos="zoom-in">
                <div className="box-img">
                  <img src="./Countes/services-1.DwE9TaDf.jpg" alt="" />
                </div>
                <div className="box-title">
                  <h2>SHENGEN</h2>
                  <img
                    src="./Countes-geb/flag-1.Ba87b5UW.png"
                    alt=""
                    className="img-slice"
                  />
                </div>
              </div>
              <div className="boxses" data-aos="zoom-in">
                <div className="box-img">
                  <img src="./Countes/services-2.DTm5N94i.jpeg" alt="" />
                </div>
                <div className="box-title">
                  <h2>CANADA</h2>
                  <img
                    src="./Countes-geb/flag-2.HyNUznN3.png"
                    alt=""
                    className="img-slice"
                  />
                </div>
              </div>
              <div className="boxses" data-aos="zoom-in">
                <div className="box-img">
                  <img src="./Countes/services-3._CMGRBWr.jpg" alt="" />
                </div>
                <div className="box-title">
                  <h2>USA</h2>
                  <img
                    src="./Countes-geb/flag-3.C8KNAePY.jpg"
                    alt=""
                    className="img-slice"
                  />
                </div>
              </div>
              <div className="boxses" data-aos="zoom-in">
                <div className="box-img">
                  <img src="./Countes/services-4.lxqOn4Ol.jpg" alt="" />
                </div>
                <div className="box-title">
                  <h2>UK</h2>
                  <img
                    src="./Countes-geb/flag-4.3WmQLUuP.jpg"
                    alt=""
                    className="img-slice"
                  />
                </div>
              </div>
              <div className="boxses" data-aos="zoom-in">
                <div className="box-img">
                  <img src="./Countes/services-5.D6AmCmqA.jpg" alt="" />
                </div>
                <div className="box-title">
                  <h2>AUSTRALIA</h2>
                  <img
                    src="./Countes-geb/flag-5.B84Fukqc.jpg"
                    alt=""
                    className="img-slice"
                  />
                </div>
              </div>
              <div className="boxses" data-aos="zoom-in">
                <div className="box-img">
                  <img src="./Countes/services-6.CPgF6SGa.jpg" alt="" />
                </div>
                <div className="box-title">
                  <h2>NEW ZEALAND</h2>
                  <img
                    src="./Countes-geb/flag-6.Dudeuyg-.png"
                    alt=""
                    className="img-slice"
                  />
                </div>
              </div>
              <div className="boxses" data-aos="zoom-in">
                <div className="box-img">
                  <img src="./Countes/services-7.CYP_oeGi.jpg" alt="" />
                </div>
                <div className="box-title">
                  <h2>JAPAN</h2>
                  <img
                    src="./Countes-geb/flag-7.twQFoBkd.jpg"
                    alt=""
                    className="img-slice"
                  />
                </div>
              </div>
              <div className="boxses" data-aos="zoom-in">
                <div className="box-img">
                  <img src="./Countes/services-8.CbQBurqu.jpg" alt="" />
                </div>
                <div className="box-title">
                  <h2>KOREA</h2>
                  <img
                    src="./Countes-geb/flag-8.Db2W1jJP.jpg"
                    alt=""
                    className="img-slice"
                  />
                </div>
              </div>
              <div className="boxses" data-aos="zoom-in">
                <div className="box-img">
                  <img src="./Countes/services-9.B8AYMP7B.jpg" alt="" />
                </div>
                <div className="box-title">
                  <h2>LATIN AMERICA</h2>
                  <img
                    src="./Countes-geb/flag-9.CL_qAoS4.png"
                    alt=""
                    className="img-slice"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="Main-excursion" id="excursion">
            <div className="main-text">
              <h1 data-aos="fade-right"> {t("Ekskursiya")} </h1>
              <hr />
              {/* <span></span> */}
            </div>

            <div className="Excursion-video">
              <div className="ext-vido">
                <video
                  src="https://www.easyvisatour.uz/_nuxt/Tur-1.CSw71yk-.mp4"
                  controls
                ></video>
                <img src="./Nav-imegs/logovector.C2wkqkZw.png" alt="" />
              </div>
              <div className="ext-vido">
                <video
                  src="https://www.easyvisatour.uz/_nuxt/Tur-2._fNf8ipk.mp4"
                  controls
                ></video>
                <img src="./Nav-imegs/logovector.C2wkqkZw.png" alt="" />
              </div>
              <div className="ext-vido">
                <video
                  src="https://www.easyvisatour.uz/_nuxt/Tur-3.CVnwjvBy.mp4"
                  controls
                ></video>
                <img src="./Nav-imegs/logovector.C2wkqkZw.png" alt="" />
              </div>
            </div>
          </div>

          <div className="Main-client">
            <div className="main-text">
              <h1 data-aos="fade-right"> {t("Mijozlar Sharhlari")} </h1>
              <hr />
              {/* <span></span> */}
            </div>

            <div className="Client-parent-video">
              <div className="clinet-video">
                <video
                  src="https://www.easyvisatour.uz/_nuxt/Client-1.BV6NKnVm.mp4"
                  controls
                ></video>
                <img src="./Nav-imegs/logovector.C2wkqkZw.png" alt="" />
              </div>
              <div className="clinet-video">
                <video
                  src="https://www.easyvisatour.uz/_nuxt/Client-2.BL9vfObs.mp4"
                  controls
                ></video>
                <img src="./Nav-imegs/logovector.C2wkqkZw.png" alt="" />
              </div>
              <div className="clinet-video">
                <video
                  src="https://www.easyvisatour.uz/_nuxt/Client-3.CpjT8gFj.mp4"
                  controls
                ></video>
                <img src="./Nav-imegs/logovector.C2wkqkZw.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="Main-Priorities">
          <div className="priorities-parent">
            <div className="text">
              <div className="pr-h1">
                <h1 data-aos="fade-up">
                  {" "}
                  {t("Sayohat va Vizalar bo'yicha Prioritetlar")}{" "}
                </h1>
                <hr />
              </div>

              <p data-aos="zoom-in">
                {t(
                  "Biz sayohat vizalarini olishda yuqori darajadagi xizmat va ishonchlilikni ta'minlaymiz. Bizning jamoamiz turizm sohasida tajribaga ega bo'lib, vizalar olish bilan bog'liq masalalarni tezda hal qilishga tayyor. Biz mijozlarimizning sayohatlarini qulay va xavfsiz qilishga intilamiz, har bir bosqichda yordam ko'rsatamiz—vizani tanlashdan to hujjatlarni olishgacha."
                )}
              </p>
            </div>

            <div className="boxses">
              <div className="box-tab" data-aos="zoom-in">
                <img src="./Imeg/image.png" alt="" />

                <h3>{t("Vaqtingizni Saqlash")}</h3>
              </div>
              <div className="box-tab" data-aos="zoom-in">
                <img src="./Imeg/prioritet-3.Dbi66kDf.svg fill.png" alt="" />
                <h3>{t("Ishonchlilik")}</h3>
              </div>
              <div className="box-tab" data-aos="zoom-in">
                <img src="./Imeg/SVG.png" alt="" />
                <h3>{t("Yordam")}</h3>
              </div>
              <div className="box-tab" data-aos="zoom-in">
                <img src="./Imeg/monney.png" alt="" />
                <h3>{t("Qulaylik")}</h3>
              </div>
            </div>
          </div>

          <div className="Loders-parent">
            <div className="Loders">
              <div className="loders-text">
                <h1 data-aos="fade-up"> {t("Biz raqamlarda")} </h1>
                <hr />
              </div>

              <div className="loders-box">
                <div className="box" data-aos="zoom-in">
                  <h1>
                    <CountUp end={7320} redraw={true} separator="">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h1>

                  <p> {t("Berilgan vizalar")} </p>
                </div>
                <div className="box" data-aos="zoom-in">
                  <h1>
                    <CountUp end={7257} redraw={true} separator="">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h1>
                  <p>{t("Muvaffaqiyatli sayohatlar")}</p>
                </div>
                <div className="box" data-aos="zoom-in">
                  <h1>
                    <CountUp end={7250} redraw={true} separator="">
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h1>
                  <p> {t("Qoniqgan mijozlar")} </p>
                </div>
              </div>
            </div>

            <hr className="Loder-hr" />
          </div>
        </div>

        <div className="services" id="services">
          <div className="services-text" data-aos="fade-right">
            <h1>{t("Xizmatlar")}</h1>
            <hr />
          </div>

          <div className="buttons">
            <button
              onClick={() => handleButtonClick("Visa Consultations")}
              data-aos="zoom-in"
              data-aos-duration="9000"
            >
              {t("Viza maslahatlari")}
            </button>
            <button
              onClick={() => handleButtonClick("Tourist Visas")}
              data-aos="zoom-in"
            >
              {t("Turistik vizalar")}
            </button>
            <button
              onClick={() => handleButtonClick("Business Visas")}
              data-aos="zoom-in"
            >
              {t("Biznes vizalar")}
            </button>
            <button
              onClick={() => handleButtonClick("Document Preparation")}
              data-aos="zoom-in"
            >
              {t("Hujjatlarni tayyorlash")}
            </button>
            <button
              onClick={() => handleButtonClick("Tour Packages")}
              data-aos="zoom-in"
            >
              {t("Sayohat paketlari")}
            </button>
            <button
              onClick={() => handleButtonClick("Insurance")}
              data-aos="zoom-in"
            >
              {t("Sug'urta")}
            </button>
          </div>
          <hr className="heth-hr" />
          <div className="content">
            <p>{content}</p>
          </div>
        </div>
        <a
          href="#"
          className="btn-top"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            display: isVisible ? "block" : "none",
            // backgroundColor: 'white',
            border: "3px solid red",
            color: "red",
            textAlign: "center",
            borderRadius: "50%",
            padding: "10px 15px",
            fontSize: "25px",
            textDecoration: "none",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          ↑{/* <GoChevronUp/> */}
        </a>
        <Plags />
      </main>
    </>
  );
};

export default Main;
