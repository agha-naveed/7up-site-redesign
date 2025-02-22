import React from 'react'
import './index.css'
import './app.css'
import Navbar from './Navbar'
import Header from './Header'
import bgVid from './assets/vid/bg.webm'
import HorizontalScroll from './extraComponent/HorizontalScroll'
import ProductsSlide from './ProductsSlide'


export default function App() {
  return (
    <>
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