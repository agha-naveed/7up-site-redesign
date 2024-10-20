import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from './Loader'
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css'

export default function Layout() {

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        AOS.init();

        setTimeout(() => {
            setLoading(false)
        }, 1200)
    }, [])

  return (
    <>
        {
            loading ? <Loader /> :
            <Outlet />
        }
    </>
  )
}
