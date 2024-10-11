import React from 'react'
import './index.css'
import './app.css'
import Cane from './cane'
import Navbar from './Navbar'

export default function App() {
  return (
    <div>
      <header className='w-full h-screen bg-bgClr1'>
        <div className="navbar flex justify-center">
          <Navbar />
        </div>
        {/* <Cane /> */}
      </header>
    </div>
  )
}