import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="flex flex-col-reverse sm:flex-row justify-around gap-10 sm:gap-32 text-light-green px-5 pt-12 sm:pt-52 pb-10 bg-primary-green mt-10">
            <div className="flex flex-col justify-between items-start sm:pt-5 sm:pl-10 gap-8">
                <div className='text-xl'>We're a crop health company, here to change how the world grows.</div>
                <a href='#' className='inline-flex items-center gap-1 font-medium hover:border-b'>
                    CONTACT US 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>
            </div>
            <div className='flex justify-end items-end pt'>
                <h1 className='text-6xl sm:text-[8em] font-bold uppercase leading-none'>from Farm to Mouth.</h1>
            </div>
        </div>
    </>
  )
}

export default Hero