import React from 'react'

const data = [
    {
        problem: "Wasting Time on Onion Preparation",
        solution: "Our onion paste eliminates the time-consuming process of peeling and chopping onions."
    },
    {
        problem: "Affordability Barrier",
        solution: "Our onion product meets high-quality standards, yet budget-friendly."
    },
    {
        problem: "Eye Irritation during Onion Preparation",
        solution: "A tear-free onion paste."
    },
    {
        problem: "Short Shelf Life of Onions",
        solution: "Ensuring a longer shelf life for our onion paste without compromising on freshness."
    },
    {
        problem: "Limited Culinary Creativity with Onions",
        solution: "Versatile onion paste that enhances a wide range of recipes, encourages you to do more."
    },
    {
        problem: "Missing Out on Onion's Natural Health Benefits",
        solution: "Retaining the natural health benefits of onions in our product, contributing to the overall well-being of our consumers."
    },
]

const Benefits = () => {
    return (
        <section className='px-5 py-10 sm:py-20 bg-sand-green'>
            <ul className='w-full'>
                <li className="flex justify-between items-center border-b border-primary-green pb-4">
                    <p className="text-[#a8a29e] text-2xl sm:text-5xl font-medium">
                        The Problem
                    </p>
                    <p className="text-primary-green text-2xl sm:text-5xl font-medium">
                        The Solution
                    </p>
                </li>

                {data.map((data, index) => {
                    return(
                        <li key={index} className="flex justify-between items-center border-b border-primary-green py-4">
                            <p className="text-[#a8a29e] text-sm sm:text-xl font-medium w-2/4">
                                {data.problem}
                            </p>
                            <p className="text-primary-green text-sm sm:text-xl font-medium text-right w-2/4">
                                {data.solution}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Benefits