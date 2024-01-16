import React from 'react'
import logo from './assets/logo.png'
// import logo from './assets/jinijasee.png'
import bldn from './assets/bldn-wheat.png'

const Footer = () => {
    return (
        <>
            <footer className='footer min-h-[30em] flex flex-col justify-around space-y-12 pt-6 pb-12 sm:pt-0 sm:pb-0'>
                <div className='pl-5 sm:pl-20'>
                    <a className='text-3xl sm:text-[5em] text-light-green font-bold uppercase leading-none inline-flex items-center gap-2 border-b border-light-green border-opacity-30 cursor-pointer hover:text-opacity-40'>
                        About jinjasee <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 sm:w-20 h-8 sm:h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                    </a>
                </div>
                <div className="grid sm:grid-cols-4 gap-6 sm:gap-0 ml-5 sm:ml-0 sm:place-items-center text-sand-green text-sm uppercase">
                    <div className='space-y-1'>
                        <h3>contact</h3>
                        <ul className='text-muted'>
                            <li>info@jinijasee.on</li>
                            <li>tel. +234-947-8347-098</li>
                        </ul>
                    </div>
                    <div className='space-y-1'>
                        <h3>Reach out</h3>
                        <ul className='text-muted'>
                            <li>Yaba drive</li>
                            <li>Mainland Lagos</li>
                            <li>Nigeria</li>
                        </ul>
                    </div>
                    <div className='space-y-1'>
                        <h3>Blog</h3>
                    </div>
                    <div className='space-y-1'>
                        <h3>socials</h3>
                        <ul className='text-muted'>
                            <li>linkedin</li>
                            <li>x</li>
                            <li>twitter</li>
                            <li>facebook</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 sm:items-center uppercase text-xs text-muted ml-5 sm:mx-24 font-extralight">
                    <p>
                        Jinjasee global ltd
                    </p>
                    <p className='inline-flex items-center gap-2'>Made with ❤️ in Nigeria🇳🇬 by <img src={bldn} className='w-8 pb-0.5' alt="" /> </p>
                </div>
            </footer>
        </>
    )
}

export default Footer