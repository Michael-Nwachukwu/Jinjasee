import React from 'react'
import Header from '../macros/Header'
import Footer from '../macros/Footer'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default Layout