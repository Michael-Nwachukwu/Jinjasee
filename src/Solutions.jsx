import React from 'react'
import landscape from './assets/landscape.png'

const Solutions = () => {
  return (
    <>
        <div className="grid grid-cols-2">
            <div>
                <img src={landscape} alt="" />
            </div>
            <div className="flex justify-center items-center bg-[#c0e8c0]">
                <h1 className='uppercase text-6xl font-semibold text-center px-20 text-primary-green'>
                    A new way <br /> to feed the world
                </h1>
            </div>
        </div>
    </>
  )
}

export default Solutions