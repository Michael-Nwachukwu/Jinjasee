import React from 'react'

const PrimBtn = ({ link, text }) => {
    return (
        <>
            <a href={link} className='inline-flex items-center gap-1 font-medium hover:border-b text-light-green uppercase'>
                {text} 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </a>
        </>
    )
}

export default PrimBtn