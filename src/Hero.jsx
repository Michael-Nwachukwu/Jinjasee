import React from 'react'
import Typewriter from './micros/Typewriter'
import { motion } from 'framer-motion'
import PrimBtn from './micros/PrimBtn'

const Hero = () => {
    return (
        <>
            <div className="flex flex-col-reverse sm:flex-row justify-around gap-10 sm:gap-10 text-light-green px-5 pt-12 sm:pt-52 pb-10 bg-primary-green mt-10">
                <div className="flex flex-col justify-between items-start sm:pt-5 gap-8">
                    <Typewriter words={"We're a crop health company, here to change how the world grows."}/>
                    <PrimBtn text={'CONTACT US'} link={'/'} />
                </div>
                <motion.div 
                    className='flex justify-end items-end pt'
                    initial={{ opacity: 0, y:100 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 2, delay: 1 }}
                >
                    <h1 className='text-6xl sm:text-[8em] font-bold uppercase leading-none'>from Farm to Mouth.</h1>
                </motion.div>
            </div>
        </>
    )
}

export default Hero