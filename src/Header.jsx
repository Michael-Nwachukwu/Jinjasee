import React from 'react'
import logo from './assets/logo.png'

const Header = () => {
  return (
    <>
        <header class="body-font bg-primary-green text-light-green font-medium fixed top-0 left-0 right-0 z-10">
            <div class="mx-auto flex flex-wrap px-5 items-center justify-between">
                <a class="">
                    <img src={logo} className='h-14 sm:h-20' alt="" />
                </a>
                <a href="#" className='sm:hidden'>MENU</a>
                <nav class="flex-wrap items-center text-base justify-center gap-10 uppercase hidden sm:flex">
                    <a class="hover:text-gray-900 cursor-pointer">our products</a>
                    <a class="hover:text-gray-900 cursor-pointer">about</a>
                    <a class="hover:text-gray-900 cursor-pointer">updates</a>
                    <a class="hover:text-gray-900 cursor-pointer">contact</a>
                </nav>
            </div>
        </header>  
    </>
  )
}

export default Header