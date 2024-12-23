import { useState, useEffect } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';


function App() {
  
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setIsPageLoaded(true); // Sahifa yuklanganda holatni yangilash
    };

    // Sahifa to'liq yuklanishini kuzatish
    if (document.readyState === "complete") {
      handlePageLoad(); // Agar sahifa allaqachon yuklangan bo'lsa
    } else {
      window.addEventListener("load", handlePageLoad); // Yuklanishni kutish
    }

    // Tozalash funksiyasi
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);
  return (
    <>
      {!isPageLoaded ? (
        <div className="preloader">
          <img src="./Nav-imegs/logovector.C2wkqkZw.png" alt="Yuklanmoqda..." />
        </div>
      ) : (
        <>
          <Navbar />
          <Header />
          <Main />
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;

