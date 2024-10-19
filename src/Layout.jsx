import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loader from './Loader'

export default function Layout() {

    const [loading, setLoading] = useState(true);
    
    useEffect(() => { 

        setTimeout(() => {
            setLoading(false)
        }, 1000)
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
