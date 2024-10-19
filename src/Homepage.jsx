import React, { useEffect, useState } from 'react'
import './index.css'
import './app.css'
import Cane from './cane'
import Navbar from './Navbar'

export default function App() {

  return (
    <div>
      <header className='w-full h-screen bg-bgClr1 overflow-hidden'>
        
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


      <div className='h-screen w-full bg-slate-700'></div>
        
    </div>
  )
}