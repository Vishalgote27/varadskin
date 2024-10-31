import React from 'react'
import Navbar from './componands/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './componands/Footer'

const PublicLayout = () => {
    return <>
        {/* <Navbar /> */}
        <Outlet />
        <Footer />

    </>
}

export default PublicLayout