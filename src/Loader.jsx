import React from 'react'
import './app.css'
import loadingCane from './assets/img/7up-cane-png.png'

export default function Loader() {
  return (
    <div className={`fixed loader z-20 w-full h-screen bg-bgClr1`}>
        <div className='w-full h-full flex justify-center items-center gap-2'>
            <div className='w-[60px] loader-img'>
                <img src={loadingCane} className='w-full' alt="7up Cane" />
            </div>

            <div className="loading-text flex text-3xl text-white">
                <p>Loading</p>
                <p className='dot'>.</p>
                <p className='dot'>.</p>
                <p className='dot'>.</p>
            </div>
        </div>

    </div>
  )
}
