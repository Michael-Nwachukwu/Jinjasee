import React from 'react'
import logo from './assets/jinijasee.png'

const Header = () => {
  return (
    <>
        <header className="body-font bg-primary-green text-light-green font-medium fixed top-0 left-0 right-0 z-10 -mt-1">
            <div className="mx-auto flex flex-wrap px-5 items-center justify-between pt-3 pb-5">
                <a className="">
                    <img src={logo} className='h-8 sm:h-10' alt="" />
                </a>
                <a href="#" className='sm:hidden mobile-menu-btn'>MENU</a>
                <nav className="flex-wrap items-center text-base justify-center gap-10 uppercase hidden sm:flex">
                    <a className="hover:text-gray-900 cursor-pointer">our products</a>
                    <a className="hover:text-gray-900 cursor-pointer">about</a>
                    <a className="hover:text-gray-900 cursor-pointer">updates</a>
                    <a className="hover:text-gray-900 cursor-pointer">contact</a>
                </nav>
            </div>
        </header>  
    </>
  )
}

export default Header