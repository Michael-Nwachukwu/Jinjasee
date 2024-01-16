import React from 'react'
import pic from './assets/product-image.png'
import PrimBtn from './micros/PrimBtn'
import TextGenerateEffect from './micros/TextGenerateEffect'

const Products = () => {
    return (
        <section className='bg-primary-green pb-16 sm:pb-32 pt-3'>
            <div className='mb-3'>
                <h1 className='font-medium text-4xl sm:text-[7.5em] text-sand-green text-left uppercase leading-none py-12 pl-4 sm:p-14'>Our <br /> product</h1>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-0">
                <div className='px-4 sm:px-24'>
                    <img src={pic} className='rounded-2xl' alt="" />
                </div>
                <div className="flex flex-col-reverse pl-5 sm:flex-col justify-between items-start py-3 gap-5">
                    <PrimBtn text={"order"} link={'/'} />
                    <p className='text-2xl text-light-green font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima laboriosam ipsum tempore aut sunt deleniti explicabo animi odit.</p>
                    <h1 className="text-light-green font-semibold text-5xl sm:text-7xl">Natural Paste Onion +</h1>
                </div>
            </div>
        </section>
    )
}

export default Products