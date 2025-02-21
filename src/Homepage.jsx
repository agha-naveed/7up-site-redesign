import React from 'react'
import './index.css'
import './app.css'
import Navbar from './Navbar'
import Header from './Header'
import bgVid from './assets/vid/bg.webm'
import HorizontalScroll from './extraComponent/HorizontalScroll'


export default function App() {
  return (
    <div>
      <header className='w-full h-full bg-bgClr1 overflow-hidden'>
        
        <div className="navbar flex justify-center">
          <Navbar />
        </div>
        <Header />
      </header>


      <section className='relative w-full bg-slate-700'>
        <HorizontalScroll />
        <video src={bgVid} loop autoPlay muted className='w-full'></video>
      </section>
        
    </div>
  )
}