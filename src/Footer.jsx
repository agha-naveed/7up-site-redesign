import React from 'react'
import zeroSugar from './assets/img/products/7up-zero-sugar.webp'
import { IoIosStar } from "react-icons/io";

export default function Footer() {
  return (
    <>
        <div className='container mx-auto text-white relative py-32'>
            <div className='flex justify-center gap-10'>
                <div className='w-56'
                  data-aos="fade-left"
                  data-aos-offset="3000"
                  data-aos-duration="1000"
                >
                    <img src={zeroSugar} className='w-full' alt=""  />
                </div>


                <div className='flex flex-col'>                
                    <div
                      className='h-fit'
                      data-aos="fade-up"
                      data-aos-offset="3000"
                      data-aos-duration="1000" 
                    >
                        <h2 className='text-4xl font-bold'>7UP Zero Sugar</h2>
                    </div>

                    <div
                      className='h-fit'
                      data-aos="fade-up"
                      data-aos-offset="3000"
                      data-aos-duration="1000" 
                    >
                        <p className='text-xl text-right'>
                            Feel refreshed by the balanced taste of 7UP® Zero Sugar.
                        </p>
                    </div>
                </div>

            </div>
            
        </div>
    </>
  )
}