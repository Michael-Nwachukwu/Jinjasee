import React from 'react'
import pic from '../assets/product-image.png'
import PrimBtn from '../micros/PrimBtn'

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
                    <PrimBtn primaryBtnText={'order now'} />
                    <p className='text-lg text-light-green font-light'>Our product, the Natural Paste Onion Plus, is an innovative product crafted from 100% natural and fresh onions, free from artificial additives. It offers a unique and versatile flavor profile, catering to health-conscious consumers and culinary enthusiasts. The product is positioned as a premium and convenient solution, targeting households, restaurants, and food manufacturers.</p>
                    <h1 className="text-light-green font-semibold text-5xl sm:text-7xl">Natural Paste Onion +</h1>
                </div>
            </div>
        </section>
    )
}

export default Products