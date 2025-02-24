import React from 'react'
import './index.css'
import './app.css'
import Navbar from './Navbar'
import Header from './Header'
import bgVid from './assets/vid/bg.webm'
import HorizontalScroll from './extraComponent/HorizontalScroll'
import ProductsSlide from './ProductsSlide'
import Footer from './Footer'


export default function App() {

  return (
    <>

      <header className='select-none w-full h-fit bg-bgClr1 overflow-hidden relative z-[500]'>
        <div className="navbar flex justify-center">
          <Navbar />
        </div>
        <Header />
      </header>


      <section className='relative z-[500] w-full bg-black'>
        <HorizontalScroll />
      </section>

      <section className='relative flex justify-center items-center bg-black select-none'>
        <h1 className='font-extrabold text-transparent text-heading-xl fixed z-20 bottom-52'
          style={{WebkitTextStroke: "3px white"}}
        >Advertisment</h1>
        <video src={bgVid} loop autoPlay muted className='w-full opacity-80'></video>
      </section>

      <section className='bg-green-800 relative z-[500] select-none'>
        <ProductsSlide />
      </section>

      <section className='bg-green-800 relative z-[500] select-none'>
        <Footer />
      </section>
    </>
  )
}