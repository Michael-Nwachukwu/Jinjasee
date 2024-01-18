import React from 'react'

const data = [
    {
        problem: "From massive physical infrastructure",
        solution: "To small, scalable footprint"
    },
    {
        problem: "From massive physical infrastructure",
        solution: "To small, scalable footprint"
    },
    {
        problem: "From massive physical infrastructure",
        solution: "To small, scalable footprint"
    },
    {
        problem: "From massive physical infrastructure",
        solution: "To small, scalable footprint"
    },
    {
        problem: "From massive physical infrastructure",
        solution: "To small, scalable footprint"
    },
    {
        problem: "From massive physical infrastructure",
        solution: "To small, scalable footprint"
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
                            <p className="text-[#a8a29e] text-sm sm:text-xl font-medium">
                                {data.problem}
                            </p>
                            <p className="text-primary-green text-sm sm:text-xl font-medium text-right">
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