import React, { useEffect, useState } from 'react'
import country from '../assets/country.webp'


const Solutions = () => {
    const titles = [
        "Sustain Agriculture",
        "support the farmers",
        "tackle demand"
    ]
    const [title, setTitle] = useState(titles[0]);
    

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTitle(titles[index]);
            index = (index + 1) % titles.length;
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const bgColors = ['bg-light-green', 'bg-peach-green', 'bg-lemon-green']; // Define the background colors
    

    return (
        <>
            <div className="grid sm:grid-cols-2">
                <div>
                    <img src={country} className='h-full' alt="Aerial view of huge farm meant to cultivating onions" />
                </div>
                <div className={`flex justify-center items-center  ${bgColors[titles.indexOf(title)]} min-h-[30em] sm:h-auto soln`}>
                    <h1 className='uppercase text-3xl sm:text-4xl lg:text-6xl font-semibold text-center px-10 sm:px-20 text-primary-green'>
                        A new way to<br /> {title}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Solutions