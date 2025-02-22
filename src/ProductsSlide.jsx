import React, { useEffect, useState } from 'react'
import cherry0Sugar from './assets/img/products/7up-cherry-zero-sugar.webp'
import tropical from './assets/img/products/7up-tropical.webp'
import sevenup0Sugar from './assets/img/products/7up-zero-sugar.webp'
import sevenup from './assets/img/products/7up.webp'
import bgVid from './assets/vid/bg.webm'

export default function ProductsSlide() {

    let [selectedCane, setSelectedCane] = useState(1)

    useEffect(() => {
        
    })

  return (
    <div className='relative'>
        <div className='container mx-auto w-full h-screen relative text-white flex gap-14 justify-center py-20'>
            {/* Cane 0 */}
            <div
            className={`
                flex flex-col
                content-center
                transition-all
                relative z-10
                ${
                    selectedCane == 0 ?
                    `
                        w-56
                        translate-x-[246px]
                    `
                    :
                    selectedCane == 1 ?
                    `
                        translate-x-0
                        w-[190px]
                        blur-[2px]
                    `
                    :
                    `
                        translate-x-[530px]
                        w-[190px] blur-[2px]
                    `
                }
            `}
            onClick={() => setSelectedCane(0)}
            >
                <img src={cherry0Sugar} alt="7up Cherry Zero Sugar" className='w-full' />
                
            </div>

            {/* Cane 1 */}
            <div
            className={`
                content-center
                transition-all
                relative z-10
                ${
                    selectedCane == 0 ?
                    `
                        w-[190px] blur-[2px]
                        translate-x-[246px]
                    `
                    :
                    selectedCane == 1 ?
                    `
                        translate-x-0
                        w-56
                    `
                    :
                    `
                        translate-x-[-246px]
                        w-[190px] blur-[2px]
                    `
                }
            `}
            onClick={() => setSelectedCane(1)}
            >
                <img src={tropical} alt="7up Cherry Zero Sugar" className='w-full' />
            </div>

            {/* Cane 2 */}
            <div
            className={`
                content-center
                transition-all
                relative z-10
                ${
                    selectedCane == 0 ?
                    `
                        w-[190px] blur-[2px]
                        translate-x-[-530px]
                    `
                    :
                    selectedCane == 1 ?
                    `
                        translate-x-0
                        w-[190px]
                        blur-[2px]
                    `
                    :
                    `
                        translate-x-[-246px]
                        w-56
                    `
                }
            `}
            onClick={() => setSelectedCane(2)}
            >
                <img src={sevenup} alt="7up Cherry Zero Sugar" className='w-full' />
            </div>
        </div>

        <video src={bgVid} loop autoPlay muted className='w-full h-screen object-cover absolute top-0 z-0 opacity-20'></video>
    </div>
  )
}