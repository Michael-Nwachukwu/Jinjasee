import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import Stat from './Stat'
import Heading from '../micros/Heading'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'

const ChevronUpIcon = ({open}) => {
    return (
        <svg 
            className={`transform ${open ? 'rotate-180' : ''} transition-transform ease-in-out duration-500 h-6 sm:h-8 w-6 sm:w-8`}
            viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="16" cy="16" r="16" transform="rotate(90 16 16)" fill="#004E35"/>
            <path d="M22 17.875L20.8449 16.6938L16.8877 20.7406L16.8877 10L15.0909 10L15.0909 20.7406L11.1551 16.7156L10 17.8969L15.9893 24L22 17.875Z" fill="#FBF4EB"/>
        </svg>
    )
    
}

const AboutBlock = () => {

    return (
        <section className='bg-sand-green'>
            <div className='mb-3 py-12 pl-4 sm:py-14'>
                <Heading heading={"Our\nMission"} />
            </div>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-24 mx-5 sm:mx-8 text-primary-green">
                <div>
                    <p className="font-semibold text-2xl sm:text-xl">We're on a mission to reduce post harvest loss. Provide all year availability of farm produce and  help farmers max their potential without fear of producing "too much"</p>
                </div>
                <div>
                    <div className="font-medium text-md space-y-4"> 
                    
                        <p>
                            Jinjasee Global LTD is a pioneering food processing company located in Lagos, Nigeria. Our business is dedicated to creating sustainable post-harvest solutions through a combination of high-quality food processing and consulting services. We understand the critical need to reduce food waste and enhance the value of agricultural produce. 
                        </p>

                        <p>
                            Our food processing endeavors focus on turning fresh, locally sourced ingredients, like onions, into long-lasting, convenient products, such as natural onion paste, that offer consumers both nutritional benefits and ease of use. Simultaneously, our consulting services extend support to farmers and producers, providing them with the knowledge and tools to improve post-harvest practices, reduce losses, and enhance the overall quality and shelf life of their products. 
                        </p>
                        
                        <p>
                            Our integrated approach not only reduces food wastage but also aids in boosting local economies, promoting sustainable agriculture, and ensuring that consumers have access to healthier options.
                        </p>
                    
                    </div>


                    <div className="w-full py-8">
                        <div className="w-full bg-white">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className={`flex w-full justify-between items-center py-5 text-left text-lg sm:text-2xl font-medium focus:outline-none ${ open ? 'border-t' : 'border-y'} border-primary-green`}>
                                            <span>Is it really natural farm fresh onions?</span>
                                            <ChevronUpIcon
                                                open={open}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-500 ease-in-out"
                                            enterFrom="transform -translate-y-full opacity-0"
                                            enterTo="transform translate-y-0 opacity-100"
                                            leave="transition duration-500 ease-out"
                                            leaveFrom="transform translate-y-0 opacity-100"
                                            leaveTo="transform -translate-y-full opacity-0"
                                        >
                                            <Disclosure.Panel className="border-b border-primary-green pb-4 pt-3 text-md sm:text-lg">
                                                Absolutely! Our Natural Paste Onion Plus is crafted from 100% natural and fresh onions, free from artificial additives. We take pride in delivering a product that retains the wholesome goodness of farm-fresh onions, ensuring a natural and authentic flavor.
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className={`flex w-full justify-between items-center pt-3 pb-5 text-left text-lg sm:text-2xl font-medium focus:outline-none ${ open ? 'border-0' : 'border-b'} border-primary-green`}>
                                            <span>How is the Natural Paste Onion Plus versatile?</span>
                                            <ChevronUpIcon
                                                open={open}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-500 ease-in-out"
                                            enterFrom="transform -translate-y-full opacity-0"
                                            enterTo="transform translate-y-0 opacity-100"
                                            leave="transition duration-500 ease-out"
                                            leaveFrom="transform translate-y-0 opacity-100"
                                            leaveTo="transform -translate-y-full opacity-0"
                                        >    
                                            <Disclosure.Panel className="border-b border-primary-green pb-4 pt-3 text-md sm:text-lg">
                                                Our product offers a unique and versatile flavor profile, making it suitable for a wide range of culinary applications. From soups and sauces to marinades and spreads, the Natural Paste Onion Plus adds a delicious twist to various dishes, catering to both health-conscious consumers and culinary enthusiasts.
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className={`flex w-full justify-between items-center pt-3 pb-5 text-left text-lg sm:text-2xl font-medium focus:outline-none ${ open ? 'border-0' : 'border-b'} border-primary-green`}>
                                            <span>Who is this product for?</span>
                                            <ChevronUpIcon
                                                open={open}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-500 ease-in-out"
                                            enterFrom="transform -translate-y-full opacity-0"
                                            enterTo="transform translate-y-0 opacity-100"
                                            leave="transition duration-500 ease-out"
                                            leaveFrom="transform translate-y-0 opacity-100"
                                            leaveTo="transform -translate-y-full opacity-0"
                                        >    
                                            <Disclosure.Panel className="border-b border-primary-green pb-4 pt-3 text-md sm:text-lg">
                                                Our target market includes households, restaurants, and food manufacturers. The Natural Paste Onion Plus is positioned as a premium and convenient solution, providing a time-saving and flavorful alternative for individuals and businesses in the food industry.
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className={`flex w-full justify-between items-center pt-3 pb-5 text-left text-lg sm:text-2xl font-medium focus:outline-none ${ open ? 'border-0' : 'border-b'} border-primary-green`}>
                                            <span>How does Jinjasee reduce post-harvest loss?</span>
                                            <ChevronUpIcon
                                                open={open}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-500 ease-in-out"
                                            enterFrom="transform -translate-y-full opacity-0"
                                            enterTo="transform translate-y-0 opacity-100"
                                            leave="transition duration-500 ease-out"
                                            leaveFrom="transform translate-y-0 opacity-100"
                                            leaveTo="transform -translate-y-full opacity-0"
                                        >    
                                            <Disclosure.Panel className="border-b border-primary-green pb-4 pt-3 text-md sm:text-lg">
                                                We are on a mission to reduce post-harvest loss by providing sustainable post-harvest solutions. Through our food processing and consulting services, we aim to ensure year-round availability of farm produce, enabling farmers to maximize their potential without the fear of producing "too much."
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className={`flex w-full justify-between items-center pt-3 pb-5 text-left text-lg sm:text-2xl font-medium focus:outline-none ${ open ? 'border-0' : 'border-b'} border-primary-green`}>
                                            <span>What are we doing differently?</span>
                                            <ChevronUpIcon
                                                open={open}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-500 ease-in-out"
                                            enterFrom="transform -translate-y-full opacity-0"
                                            enterTo="transform translate-y-0 opacity-100"
                                            leave="transition duration-500 ease-out"
                                            leaveFrom="transform translate-y-0 opacity-100"
                                            leaveTo="transform -translate-y-full opacity-0"
                                        >    
                                            <Disclosure.Panel className="border-b border-primary-green pb-4 pt-3 text-md sm:text-lg">
                                                Jinjasee Global LTD stands out for its integrated approach. Not only do we create high-quality food products like the Natural Paste Onion Plus, but we also offer consulting services to farmers, supporting them in improving post-harvest practices, reducing losses, and enhancing the overall quality of their produce. Our commitment extends beyond product creation to fostering sustainable agriculture and supporting local economies.
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutBlock
