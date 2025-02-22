import React, { useEffect, useState } from 'react'
import cherry0Sugar from './assets/img/products/7up-cherry-zero-sugar.webp'
import tropical from './assets/img/products/7up-tropical.webp'
import sevenup0Sugar from './assets/img/products/7up-zero-sugar.webp'
import sevenup from './assets/img/products/7up.webp'

export default function ProductsSlide() {

    let [selectedCane, setSelectedCane] = useState(1)

    useEffect(() => {
        
    })

  return (
    <div className='container mx-auto w-full h-screen text-white py-20'>
        <div className="flex gap-14 justify-center">
            {/* Cane 0 */}
            <div
              className={`
                w-[190px]
                blur-[2px]
                content-center
                
              `}
              onClick={() => setSelectedCane(0)}
            >
                <img src={cherry0Sugar} alt="7up Cherry Zero Sugar" className='w-full' />
            </div>


            {/* Cane 1 */}
            <div
              className={`
                w-[190px]
                blur-[2px]
                content-center
                
              `}
              onClick={() => setSelectedCane(1)}
            >
                <img src={sevenup} alt="7up Cherry Zero Sugar" className='w-full' />
            </div>


            {/* Cane 2 */}
            <div
              className={`
                w-[190px]
                blur-[2px]
                content-center
                
              `}
              onClick={() => setSelectedCane(2)}
            >
                <img src={tropical} alt="7up Cherry Zero Sugar" className='w-full' />
            </div>
            
        </div>
    </div>
  )
}