import React from 'react'
import logo from './assets/img/7up-logo.png'

export default function Navbar() {
  return (
    <nav className='container bg-slate-400 flex justify-between'>
        <div className="logo w-[70px]">
            <img src={logo} className='w-full' alt="7up Logo" />
        </div>
        <ul className='nav-links flex items-center'>
            <li className='bg-slate-50'>Home</li>
            <li>Products</li>
            <li>Stores</li>
        </ul>
    </nav>
  )
}
