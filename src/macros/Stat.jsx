import React from 'react'
import onion from '../assets/red-onion.jpg'
import topView from '../assets/top-view-onion.jpg'
import rottenOnion from '../assets/rotten-onion.jpg'
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { wrap } from 'framer-motion';


const images = [
    {
        title: `Did you know? The onion produced in Nigeria amount to more than N700bn but about 40 to 50 per cent of the product worth over N300 billion is wasted to post harvest losses.`,
        img: rottenOnion,
        alt: "Image of rotten wasted Onion lost to post harvest loss"
    },
    {
        title: `We are changing the narrative, promoting sustainable agriculture. We're a company united working on a mission.`,
        img: topView,
        alt: "Large scale onion farm. encouraging farmers to produce more without fear of loss"
    },
    {
        title: `All year availability; this means youll never lack onions in your kitchen... all year.`,
        img: onion,
        alt: "Harvested onion ready for processing and pasting for consumers"
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
          alt={images[imageIndex].alt}
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
          className="absolute flex justify-center items-center max-w-xs sm:max-w-2xl lg:max-w-6xl h-full text-sand-green text-xl sm:text-3xl lg:text-5xl z-40 font-semibold text-center
        ">
          {images[imageIndex].title}
        </motion.div>
        
        <motion.div key={page} className="absolute flex justify-center bottom-8 sm:bottom-20 z-20">
          <div className="border border-sand-green rounded-3xl inline-flex items-center gap-3 sm:gap-4 p-2">

            <div onClick={() => paginate(-1)} className="hover:bg-sand-green rounded-full p-1 text-sand-green hover:text-primary-green">
              <svg xmlns="http://www.w3.org/2000/svg" fill='none' stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="fill-sand-green w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
            </div>

            <div onClick={() => paginate(1)} className="hover:bg-sand-green rounded-full p-1 text-sand-green hover:text-primary-green">
              <svg xmlns="http://www.w3.org/2000/svg" fill='none' stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" className="fill-sand-green w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>

          </div>
        </motion.div>

      </AnimatePresence>
    </>
  );


  
}

export default Stat