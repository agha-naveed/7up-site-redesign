import React, { useEffect, useState } from 'react'
import cherry0Sugar from './assets/img/products/7up-cherry-zero-sugar.webp'
import tropical from './assets/img/products/7up-tropical.webp'
import sevenup from './assets/img/products/7up.webp'
import bgVid from './assets/vid/bg.webm'
import shadow from './assets/img/products/shadow.png'
import bg2 from './assets/vid/tropical_vid.webm'
import bg3 from './assets/vid/zerosugar_vid.webm'

export default function ProductsSlide() {

    let [selectedCane, setSelectedCane] = useState(1)

    useEffect(() => {
        
    })

  return (
    <div className='relative'>
        <div
          className='container mx-auto w-full h-screen relative text-white py-20'>
            <h2 className='font-semibold text-3xl text-center relative z-30 mb-6 transition-all'>
                {
                    selectedCane == 0 ?
                    "7up Cherry Zero Sugar" :
                    selectedCane == 1 ?
                    "7up Tropical" : "7up Lemon Lime"
                }
            </h2>
            <div className='w-full h-full flex gap-14 justify-center' >
                {/* Cane 0 */}
                <div
                title='7up Cherry Zero Sugar'
                className={`
                    cursor-pointer
                    content-center
                    transition-cane
                    relative z-10
                    ${
                        selectedCane == 0 ?
                        `
                            !z-20
                            w-56
                            translate-x-[246px]
                        `
                        :
                        selectedCane == 1 ?
                        `
                            translate-x-0
                            w-[170px]
                            blur-[3px] relative top-[-5px]
                        `
                        :
                        `
                            translate-x-[490px]
                            w-[170px] blur-[3px] relative top-[-5px]
                        `
                    }
                `}
                onClick={() => setSelectedCane(0)}
                >
                    <img src={cherry0Sugar} alt="7up Cherry Zero Sugar" className='w-full' />
                    <img src={shadow} className='opacity-80 mt-3' alt="" />
                </div>

                {/* Cane 1 */}
                <div
                title='7up Tropical'
                className={`
                    cursor-pointer
                    content-center
                    transition-cane
                    relative z-10
                    ${
                        selectedCane == 0 ?
                        `
                            w-[170px] blur-[3px] relative top-[-5px]
                            translate-x-[246px]
                        `
                        :
                        selectedCane == 1 ?
                        `
                            !z-20
                            translate-x-0
                            w-56
                        `
                        :
                        `
                            translate-x-[-246px]
                            w-[170px] blur-[3px] relative top-[-5px]
                        `
                    }
                `}
                onClick={() => setSelectedCane(1)}
                >
                    <img src={tropical} alt="7up Tropical" className='w-full' />
                    <img src={shadow} className='opacity-80 mt-3' alt="" />
                </div>

                {/* Cane 2 */}
                <div
                title='7up'
                className={`
                    cursor-pointer
                    content-center
                    transition-cane
                    relative z-10
                    ${
                        selectedCane == 0 ?
                        `
                            w-[170px] blur-[3px] relative top-[-5px]
                            translate-x-[-490px]
                        `
                        :
                        selectedCane == 1 ?
                        `
                            translate-x-0
                            w-[170px]
                            blur-[3px] relative top-[-5px]
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
                    <img src={sevenup} alt="7up" className='w-full' />
                    <img src={shadow} className='opacity-80 mt-3' alt="" />
                </div>
            </div>

        </div>


        <video src={selectedCane == 0 ? bg3 : selectedCane == 1 ? bg2 : bgVid} loop autoPlay muted className='w-full h-screen object-cover absolute top-0 z-0 opacity-40 blur-sm'></video>
    </div>
  )
}