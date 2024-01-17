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
                    <p className="font-semibold text-2xl sm:text-xl">We're on a mission to help farmers provide for the planet, without harming the earth.</p>
                </div>
                <div>
                    <p className="font-medium text-md">We believe that creating the future the world wants requires changing how the world grows. That’s why Enko® discovers and develops novel products for farmers to protect their crops from pests and disease. Our discovery platform, ENKOMPASS™, uses DNA-encoded libraries, AI, Structure-Based Design, and Machine Learning to find and select the right treatments for the right targets faster and more effectively than traditional R&D methods. By providing farmers with new tools to grow their crops successfully and sustainably, we hope to open the door for increased adoption of other data-driven and emerging technologies in agriculture.
                    Led by a team of proven scientists, entrepreneurs, and industry veterans, Enko’s innovative science, agile design, and discovery of new modes of action is producing next-generation crop protection solutions that will overcome critical challenges facing the industry.</p>


                    <div className="w-full py-8">
                        <div className="w-full bg-white">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className={`flex w-full justify-between items-center py-5 text-left text-lg sm:text-2xl font-medium focus:outline-none ${ open ? 'border-t' : 'border-y'} border-primary-green`}>
                                            <span>What is your refund policy?</span>
                                            <ChevronUpIcon
                                                open={open}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-500 ease-in-out delay-150"
                                            enterFrom="transform -translate-y-full opacity-0"
                                            enterTo="transform translate-y-0 opacity-100"
                                            leave="transition duration-500 ease-out"
                                            leaveFrom="transform translate-y-0 opacity-100"
                                            leaveTo="transform -translate-y-full opacity-0"
                                        >
                                            <Disclosure.Panel className="border-b border-primary-green pb-4 pt-3 text-md sm:text-lg">
                                                If you're unhappy with your purchase for any reason, email us
                                                within 90 days and we'll refund you in full, no questions asked.
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className={`flex w-full justify-between items-center pt-3 pb-5 text-left text-lg sm:text-2xl font-medium focus:outline-none ${ open ? 'border-0' : 'border-b'} border-primary-green`}>
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon
                                                open={open}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-500 ease-in-out delay-150"
                                            enterFrom="transform -translate-y-full opacity-0"
                                            enterTo="transform translate-y-0 opacity-100"
                                            leave="transition duration-500 ease-out"
                                            leaveFrom="transform translate-y-0 opacity-100"
                                            leaveTo="transform -translate-y-full opacity-0"
                                        >    
                                            <Disclosure.Panel className="border-b border-primary-green pb-4 pt-3 text-md sm:text-lg">
                                                If you're unhappy with your purchase for any reason, email us
                                                within 90 days and we'll refund you in full, no questions asked.
                                            </Disclosure.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className={`flex w-full justify-between items-center pt-3 pb-5 text-left text-lg sm:text-2xl font-medium focus:outline-none ${ open ? 'border-0' : 'border-b'} border-primary-green`}>
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon
                                                open={open}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            enter="transition duration-500 ease-in-out delay-150"
                                            enterFrom="transform -translate-y-full opacity-0"
                                            enterTo="transform translate-y-0 opacity-100"
                                            leave="transition duration-500 ease-out"
                                            leaveFrom="transform translate-y-0 opacity-100"
                                            leaveTo="transform -translate-y-full opacity-0"
                                        >    
                                            <Disclosure.Panel className="border-b border-primary-green pb-4 pt-3 text-md sm:text-lg">
                                                If you're unhappy with your purchase for any reason, email us
                                                within 90 days and we'll refund you in full, no questions asked.
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
