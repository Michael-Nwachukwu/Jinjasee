import React, { useState } from 'react'
import lightLogo from '../assets/jinijasee.png'
import deepLogo from '../assets/Jinjasee-deep.png'
import single from '../assets/Jinjasee-deep-single.png'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
    {title: 'Our product', to: '/our-product'},
    {title: 'About', to: '/about-jinjasee'},
    {title: 'Updates', to: '/blog'},
    {title: 'Contact', to: '/contact-jinjasee'},
]


const Header = () => {

    const location = useLocation();

    let bg;
    let logo;
    let textColor
    
    if (location.pathname === '/contact-jinjasee') {
        bg = "bg-sand-green";
        logo = deepLogo;
        textColor = "text-primary-green";
    }else{
        bg = "bg-primary-green";
        logo = lightLogo;
        textColor = "text-light-green";
    }





    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(prevOpen => !prevOpen);
    }

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                // type: "spring",
                duration: 0.3,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    const navLinkVars = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1]
            }
        }, 
        open: {
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0, 0.55, 0.45, 1]
            }
        },
    }

    const containerVars = {
        initial: {
            // for when its enters and leaves
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1
            },
            // for when its open
            open: {
                transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.09,
                    staggerDirection: 1
                },
            }

        }
    }

    const NavLink = ({title, to}) => {
        return (
            <motion.div 
                variants={navLinkVars}
            >
                <Link to={to} className={`hover:text-opacity-50 cursor-pointer ${to === location.pathname ? 'sm:border-b border-light-green' : ''}`}>{title}</Link>
            </motion.div>
        )
    }

    return (
        <>
            
            <header className={`body-font ${bg} ${textColor} ${location.pathname === '/contact-jinjasee' ? 'border-b border-primary-green border-opacity-20' : ''} font-medium fixed top-0 left-0 right-0 z-10 -mt-1`}>
                <div className="mx-auto flex flex-wrap px-5 items-center justify-between pt-4 pb-3">
                    <Link to={'/'} className="">
                        <img src={logo} className='h-8 sm:h-10' alt="" />
                    </Link>
                    <p onClick={toggleMenu} href="#" className='sm:hidden mobile-menu-btn'>MENU</p>
                    <nav className="flex-wrap items-center text-base justify-center gap-10 uppercase hidden sm:flex">
                        {navLinks.map((link, index) => {
                            return <NavLink key={index} title={link.title} to={link.to} />
                        })}
                    </nav>
                </div>
                <AnimatePresence>
                    {
                        open && (
                            <motion.div 
                                variants={menuVars}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="fixed left-0 top-0 w-full h-screen origin-top bg-sand-green text-primary-green px-5 py-3">
                                <div className="flex h-full flex-col">
                                    <div className="flex justify-between items-center">
                                        <img src={single} className='h-9' alt="" />
                                        <p onClick={toggleMenu} className="uppercase text-xl">close</p>
                                    </div>
                                    <div className="flex flex-col justify-between h-full">
                                        <motion.nav 
                                            variants={containerVars}
                                            initial='initial'
                                            animate="open"
                                            exit={'initial'}
                                            className="flex flex-col justify-start items-start text-2xl font-medium gap-6 mt-16">
                                            {navLinks.map((link, index) => {
                                                return (
                                                    <div onClick={toggleMenu} className="overflow-hidden">
                                                        <NavLink key={index}  title={link.title} to={link.to} />
                                                    </div>
                                                )
                                            })}
                                        </motion.nav>
                                        <div className="mb-4">
                                            <p className="text-xl font-semibold pb-3">jinjasee@gmail.com</p>
                                            <span className='uppercase space-x-3 text-xs'>
                                                <a href="#">x</a>
                                                <a href="#">Whatsapp</a>
                                                <a href="#">linkedin</a>
                                                <a href="#">facebook</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>

            </header>  

        </>
    );
}

export default Header