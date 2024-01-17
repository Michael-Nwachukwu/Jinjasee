import React from 'react'
import onion from '../assets/red-onion.jpg'
import topView from '../assets/top-view-onion.jpg'
import rottenOnion from '../assets/rotten-onion.jpg'
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { wrap } from 'framer-motion';


const images = [
    {
        title: `"At Enko, I don't feel like an individual working a job.
        We're a company united working on a mission."`,
        img: rottenOnion
    },
    {
        title: `"At2 Enko, I don't feel like an individual working a job.
        We're a company united working on a mission."`,
        img: topView
    },
    {
        title: `"At3 Enko, I don't feel like an individual working a job.
        We're a company united working on a mission."`,
        img: onion
    },
]


const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    }
};


const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Stat = () => {

    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 10000); // Call paginate(1) every 4 seconds

        return () => clearInterval(interval);
    }, [page]);

    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    alt=""
                    className='img h-full w-full object-cover'
                    style={{ filter: 'brightness(50%)' }}
                    src={images[imageIndex].img}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30, duration:0.3 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
          
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                />
                    
                    <motion.div 
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30, duration:0.3 },
                          opacity: { duration: 0.2 }
                        }}
                        className="absolute flex justify-center items-center w-full h-full text-sand-green text-xl sm:text-5xl z-50 font-semibold text-center
                    ">{images[imageIndex].title}</motion.div>
                        
                   
            </AnimatePresence>
        </>
    );


  
}

export default Stat