import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

const Layout = () => {
  return (

    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default Layout