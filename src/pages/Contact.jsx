import React from 'react'

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Jinjasee Global Ltd for Natural paste onion plus, Sustainable Post-Harvest Solutions and consulting services"
                description="Get in touch with Jinjasee Global Ltd for sustainable post-harvest technologies and premium food processing solutions. Our team is dedicated to enhancing the value of agricultural produce and reducing post-harvest loss."
                name="Jinjasee Global Ltd"
                type="website"
                keywords="Reduce Post Harvest Loss, Onion All Year Availability, Onion Farm Produce, Encouraging Farmers, Jinjasee Global LTD, Pioneering Food Processing Company, Sustainable Agriculture Lagos Nigeria, Business, Dedicated, Creating, Sustainable Post-Harvest Solutions, High-Quality Food Processing, Consulting Services, Reduce onion Waste, Enhance Value of Agricultural Produce, Fresh onion paste, Natural paste onion plus"
                siteName="Jinjasee Global Ltd"
            />
            <section className='min-h-96 bg-sand-green mt-12 pb-24 pt-16 sm:py-24 px-4 sm:px-8 text-primary-green'>
                <div className="grid sm:grid-cols-2 gap-10 sm:gap-0">
                    <div className='max-w-md flex flex-col justify-between gap-10'>
                        <div className='text-2xl sm:text-4xl font-medium'>
                            Thank you for your interest in Jinjasee! Please fill out our form here and a team member will be in touch.
                        </div>
                        <div className="flex flex-col gap-3 font-normal text-md">
                            <p>info@jinjasee.com</p>
                            <ul>
                                <li>Yaba drive</li>
                                <li>Mainland Lagos</li>
                                <li>Nigeria</li>
                            </ul>
                            <p>Messages are monitored during business hours.</p>
                        </div>
                    </div>
                    <div className=''>
                        <form action="" className='space-y-7'>
                            <div class="relative z-0 w-full">
                                <input type="text" id="full_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-sand-green border-0 border-b border-primary-green appearance-none focus:outline-none focus:ring-0 focus:border-primary-green peer" placeholder=" " />
                                <label for="full_name" class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Name *</label>
                            </div>
                            <div class="relative z-0 w-full">
                                <input type="text" id="title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-sand-green border-0 border-b border-primary-green appearance-none focus:outline-none focus:ring-0 focus:border-primary-green peer" placeholder=" " />
                                <label for="title" class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Title</label>
                            </div>
                            <div class="relative z-0 w-full">
                                <input type="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-sand-green border-0 border-b border-primary-green appearance-none focus:outline-none focus:ring-0 focus:border-primary-green peer" placeholder=" " />
                                <label for="email" class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Email *</label>
                            </div>
                            <div class="relative z-0 w-full">
                                <input type="text" id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-sand-green border-0 border-b border-primary-green appearance-none focus:outline-none focus:ring-0 focus:border-primary-green peer" placeholder=" " />
                                <label for="phone" class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Phone</label>
                            </div>

                            <div class="relative z-0 w-full">
                                <textarea type="text" id="message" class="min-h-32 block py-2.5 px-0 w-full text-sm text-gray-900 bg-sand-green border-0 border-b border-primary-green appearance-none focus:outline-none focus:ring-0 focus:border-primary-green peer" placeholder=" " />
                                <label for="message" class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">How can we help you?</label>
                            </div>
                            <div className="w-full">
                                <button type="submit" className='bg-primary-green rounded-[999px] text-sand-green text-md sm:text-lg uppercase w-full py-3 sm:py-4 hover:bg-light-green hover:text-primary-green font-medium'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact