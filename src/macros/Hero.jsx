import React from 'react'
import Typewriter from '../micros/Typewriter'
import { motion } from 'framer-motion'
import PrimBtn from '../micros/PrimBtn'

const Hero = ({words, heroText, primaryBtnLink, primaryBtnText}) => {
    return (
        <>
            <div className="flex flex-col-reverse sm:flex-row justify-around gap-10 sm:gap-1 text-light-green px-5 pt-24 sm:pt-52 pb-10 bg-primary-green mt-12">
                <div className="flex flex-col justify-between items-start sm:pt-5 gap-8 pr-4 sm:w-[40%]">
                    <Typewriter words={words}/>
                    <PrimBtn primaryBtnText={primaryBtnText} primaryBtnLink={primaryBtnLink} />
                </div>
                <motion.div 
                    className='flex justify-end items-end sm:w-[60%]'
                    initial={{ opacity: 0, y:100 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 2, delay: 1 }}
                >
                    <h1 className='text-6xl sm:text-[8em] font-bold uppercase leading-none sm:text-right'>{heroText}</h1>
                </motion.div>
            </div>
        </>
    )
}

export default Hero