import React from 'react'
import './index.css'
import './app.css'
import Cane from './cane'
import Navbar from './Navbar'
import HorizontalScroll from './HorizontalScroll'

export default function App() {

  return (
    <div>
      <header className='w-full h-screen bg-bgClr1'>
        
        <div className="navbar flex justify-center">
          <Navbar />
        </div>
        <div className='header-content flex justify-center'>
          <div className='bgImg'></div>
          <div className="container flex justify-around">
            <div className="header-content-texts py-56 w-fit z-10">
              <h2 className='text-white text-9xl font-bold'>Feels Good</h2>
              <p className='text-white text-8xl'>to be you</p>
            </div>
            <Cane />
          </div>
        </div>
      </header>

      <section className='w-full h-screen flex bg-slate-800 py-96 overflow-x-scroll'>
        <HorizontalScroll />
      </section>
    </div>
  )
}