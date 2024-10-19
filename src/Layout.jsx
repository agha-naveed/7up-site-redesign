import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from './Loader'

export default function Layout() {

    const [loading, setLoading] = useState(true);
    const [loadingEffect, setLoadingEffect] = useState(false);
    
    useEffect(() => { 

        setTimeout(() => {
            setLoadingEffect(true)

            setTimeout(() => {
                setLoading(false)
            }, 100)
        }, 1000)
    }, [])

  return (
    <>
        {
            loading ? <Loader loadingEffect = {loadingEffect} /> :
            <Outlet />
        }
    </>
  )
}
