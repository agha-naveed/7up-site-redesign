import React from 'react'
import './app.css'
import loadingCane from './assets/img/7up-cane-png.png'

export default function Loader() {
  return (
    <div className='w-full h-screen bg-bgClr1 flex justify-center items-center'>
        <img src={loadingCane} alt="7up Cane" />
            <div className="loading-text flex text-white">
            <p>Loading</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
        </div>

    </div>
  )
}
