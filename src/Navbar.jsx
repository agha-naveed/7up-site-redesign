import React from 'react'
import logo from './assets/img/7up-logo.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-out"  className='container flex justify-between py-5 border-b-2'>
        <Link to={"/"} className="logo w-[70px]">
            <img src={logo} className='w-full' alt="7up Logo" />
        </Link>

        <ul className='nav-links flex items-center text-white text-[19px] gap-2'>
            <li><a href="#" className='hover:underline cursor-pointer px-4 py-2'>Home</a></li>
            <li><a href="#" className='hover:underline cursor-pointer px-4 py-2'>Products</a></li>
            <li><a href="#" className='hover:underline cursor-pointer px-4 py-2'>Stores</a></li>
        </ul>
    </nav>
  )
}
