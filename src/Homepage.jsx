import React, { useEffect, useState } from 'react'
import './index.css'
import './app.css'
import Navbar from './Navbar'
import Header from './Header'
import bgVid from './assets/vid/bg.webm'
import HorizontalScroll from './extraComponent/HorizontalScroll'
import ProductsSlide from './ProductsSlide'
import { FaArrowUp } from "react-icons/fa";


export default function App() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);





  return (
    <>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }}
        className={`fixed bottom-5 right-5 z-[1000] transition-cane p-3 bg-green-700 text-white rounded-full shadow-lg hover:shadow-md hover:shadow-black/40 hover:bg-green-800 ${
          isVisible ? "bottom-5" : "-bottom-12"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>

      <header className='w-full h-fit bg-bgClr1 overflow-hidden'>
        <div className="navbar flex justify-center">
          <Navbar />
        </div>
        <Header />
      </header>


      <section className='relative w-full bg-black'>
        <HorizontalScroll />
      </section>

      <section>
        <video src={bgVid} loop autoPlay muted className='w-full'></video>
      </section>

      <section className='bg-green-800'>
        <ProductsSlide />
      </section>
    </>
  )
}