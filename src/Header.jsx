import React from 'react'
import Cane from './extraComponent/Cane'

export default function Header() {
  return (
    <div className='min-h-screen header-content flex justify-center pointer-events-none relative'>
        <div className="container flex justify-around items-center">
          <div className="header-content-texts py-56 w-fit z-10" data-aos="fade-up-right" data-aos-duration="1000" data-aos-easing="ease-in-out" >
              <h2 className='text-white text-[115px] font-bold'>Feels Good</h2>
              <p className='text-white text-[90px]'>to be you</p>
          </div>

          <Cane />
        </div>
    </div>
  )
}
