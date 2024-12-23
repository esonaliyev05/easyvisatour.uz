import { useState, useEffect } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';


function App() {
  const [isLoading, setIsLoading] = useState(true); // Yuklanish holatini boshqarish

  useEffect(() => {
    // 3 soniyada yuklanishni tugatish (misol uchun)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Tozalash
  }, []);

  return (
    <>
      {isLoading ? (
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

