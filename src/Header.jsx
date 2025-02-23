import React from 'react'
import Cane from './extraComponent/Cane'
import SmoothScroll from './extraComponent/SmoothScroll'
import Typewriter from 'typewriter-effect';

export default function Header() {
  return (
    <SmoothScroll>
      <div data-scroll-speed="2" className='min-h-screen header-content flex justify-center pointer-events-none relative'>
          <div className="container flex justify-around items-center">
            <div className="header-content-texts py-56 w-fit z-10" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="300" data-aos-easing="ease-in-out" >
                <h2 className='text-white text-heading-xl font-bold'>Feels Good</h2>
                <div className='text-white text-heading-lg relative -top-10'>
                  <Typewriter
                    options={{
                      strings: ['to be you', '& just Chill!'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
            </div>

            <Cane />
          </div>
      </div>
    </SmoothScroll>
  )
}
