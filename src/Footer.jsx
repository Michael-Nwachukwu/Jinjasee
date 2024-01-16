import React from 'react'
import logo from './assets/logo.png'
// import logo from './assets/jinijasee.png'


const Footer = () => {
    return (
        <>
            <footer className='footer h-[30em] flex flex-col justify-around'>
                <div className='sm:pl-10'>
                    <img src={logo} className='w-64 sm:w-96' alt="" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-0 ml-8 sm:ml-0 sm:place-items-center text-sand-green text-sm uppercase">
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
            </footer>
        </>
    )
}

export default Footer