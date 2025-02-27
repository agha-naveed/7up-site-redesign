import React from 'react'
import zeroSugar from './assets/img/products/7up-zero-sugar.webp'
import cherryZeroSugar from './assets/img/products/7up-cherry-zero-sugar.webp'
import { IoIosStar } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <>
        <div className='container mx-auto text-white relative py-32'>
            
            <div className='flex justify-center gap-16'>
                <div className='w-56'
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                >
                    <img src={zeroSugar} className='w-full' alt=""  />
                </div>


                <div className='flex flex-col gap-2 justify-center w-[480px]'>

                    <div
                      className='h-fit w-fit'
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000" 
                    >
                        <h2 className='text-4xl font-bold w-fit'>7UP Zero Sugar</h2>
                    </div>

                    <div 
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000" 
                      className='text-2xl flex'>
                        <IoIosStar className='text-orange-400' />
                        <IoIosStar className='text-orange-400' />
                        <IoIosStar className='text-orange-400' />
                        <IoIosStar className='text-gray-400' />
                        <IoIosStar className='text-gray-400' />
                    </div>

                    <div
                      className='h-fit'
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000" 
                    >
                        <p className='text-xl'>
                            Feel refreshed by the balanced taste of 7UP® Zero Sugar.
                        </p>
                    </div>

                    <button className='border border-white rounded-xl py-[10px] px-5 transition-all hover:bg-white hover:text-green-800 w-fit mt-6'
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-duration="1500"
                    >
                        Nutrition Facts
                    </button>

                </div>

            </div>

            <div className='flex flex-row-reverse justify-center gap-16 mt-20'>
                <div className='w-56'
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-duration="1000"
                >
                    <img src={cherryZeroSugar} className='w-full' alt=""  />
                </div>


                <div className='flex flex-col gap-2 justify-center w-[480px]'>

                    <div
                      className='h-fit w-fit'
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000" 
                    >
                        <h2 className='text-4xl font-bold w-fit'>7UP Cherry Zero Sugar</h2>
                    </div>

                    <div 
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000" 
                      className='text-2xl flex'>
                        <IoIosStar className='text-orange-400' />
                        <IoIosStar className='text-orange-400' />
                        <IoIosStar className='text-orange-400' />
                        <IoIosStar className='text-orange-400' />
                        <IoIosStar className='text-gray-400' />
                    </div>

                    <div
                      className='h-fit'
                      data-aos="fade-up"
                      data-aos-offset="300"
                      data-aos-duration="1000" 
                    >
                        <p className='text-xl'>
                            From cocktails to mocktails and cherry floats, mix it up a little at your next get-together with 7UP® Cherry Zero Sugar.
                        </p>
                    </div>

                    <button className='border border-white rounded-xl py-[10px] px-5 transition-all hover:bg-white hover:text-green-800 w-fit mt-6'
                      data-aos="fade-up"
                      data-aos-offset="100"
                      data-aos-duration="1500"
                    >
                        Nutrition Facts
                    </button>

                </div>

            </div>
            
        </div>

        <footer className='text-center text-white py-2 grid gap-3'>
            <div className='flex justify-center text-2xl gap-4'>
                <Link to={"https://facebook.com/naveedbalti31"} target='_blank' >
                    <FaFacebookF />
                </Link>
                <Link to={"https://www.linkedin.com/in/agha-naveed"} target='_blank' >
                    <FaLinkedinIn />
                </Link>
                <Link to={"https://x.com/naveed_kazmi31"} target='_blank' >
                    <RiTwitterXLine />
                </Link>
                <Link to={"https://instagram.com/aghanaveed_"} target='_blank' >
                    <IoLogoInstagram />
                </Link>
                <Link to={"https://github.com/agha-naveed"} target='_blank' >
                    <FiGithub />
                </Link>
            </div>
            <span>Designed @AghaNaveed_ 2025</span>
        </footer>
    </>
  )
}