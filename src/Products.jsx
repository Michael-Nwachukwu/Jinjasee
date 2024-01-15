import React from 'react'
import pic from './assets/product-image.png'
import PrimBtn from './micros/PrimBtn'
import TextGenerateEffect from './micros/TextGenerateEffect'

const Products = () => {
  return (
    <section className='bg-primary-green pb-32'>
        <div className=''>
            <h1 className='font-semibold text-[8em] text-sand-green text-left uppercase leading-none p-14'>Our <br /> product</h1>
        </div>
        <div className="grid grid-cols-2">
            <div className='px-24'>
                <img src={pic} className='rounded-2xl' alt="" />
            </div>
            <div className="flex flex-col justify-between items-start py-3">
                <PrimBtn text={"order"} link={'/'} />
                <p className='text-2xl text-light-green font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima laboriosam ipsum tempore aut sunt deleniti explicabo animi odit.</p>
                <h1 className="text-light-green font-semibold text-7xl">Natural Paste Onion +</h1>
            </div>
        </div>
    </section>
  )
}

export default Products