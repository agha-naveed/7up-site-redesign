import React from 'react'
import './index.css'
import './app.css'
import Navbar from './Navbar'
import Cane from './extraComponent/Cane'


export default function App() {
  return (
    <div>
      <header className='w-full h-full bg-bgClr1 overflow-hidden'>
        
        <div className="navbar flex justify-center">
          <Navbar />
        </div>
        <div className='header-content flex justify-center'>
          <div className="container flex justify-around">
            <div className="header-content-texts py-56 w-fit z-10" data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="ease-in-out" >
              <h2 className='text-white text-9xl font-bold'>Feels Good</h2>
              <p className='text-white text-8xl'>to be you</p>
            </div>

            <Cane />
          </div>
        </div>
      </header>


      <section className='h-screen w-full bg-slate-700'>

      </section>
        
    </div>
  )
}