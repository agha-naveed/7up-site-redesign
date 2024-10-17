import React from 'react'
import './index.css'
import './app.css'
import Cane from './cane'
import Navbar from './Navbar'
import HorizontalScrollCarousel from './HorizontalScrollCarousel'

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


      <HorizontalScrollCarousel />
      <div className='h-screen w-full bg-slate-700'></div>
        
    </div>
  )
}