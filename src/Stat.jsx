import React from 'react'
import onion from './assets/onion.jpg'
// import onionTwo from './assets/onion-2.jpg'
import rottenOnion from './assets/rotten-onion.jpg'
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { wrap } from 'framer-motion';


const images = [
    {
        title: "1 Did you know? Over $450 million is lost to onion wastage every year.",
        img: onion
    },
    {
        title: "2 Did you know? Over $450 million is lost to onion wastage every year.",
        img: onion
    },
    {
        title: "3 Did you know? Over $450 million is lost to onion wastage every year.",
        img: rottenOnion
    },
]


const variants = {
    enter: (direction) => {
      return {
        // x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        duration: 4
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      duration: 4
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        // x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        duration: 4
      };
    }
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const Stat = () => {

    const [[page, direction], setPage] = useState([0, 0]);

    // const [ref, inView] = useInView({ threshold: 0.5 });

    const ref = useRef(null);
    const inView = useInView(ref);

    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        if (inView) {
            setPage([page + newDirection, newDirection]);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, 10000); // Call paginate(1) every 4 seconds

        return () => clearInterval(interval);
    }, [page, inView]);

    return (
        <>
            <div ref={ref}>
                <AnimatePresence initial={false} custom={direction}>
                    <AnimatePresence
                        key={page}
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
                    >
                        <motion.div
                            className="relative w-full h-auto sm:h-[35em]"
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "easeIn", duration:2 },
                                opacity: { duration: 1 }
                            }}
                        >
                            <div className="absolute bottom-[70%] top-[30%] sm:bottom-[60%] sm:top-[40%] sm:left-10 w-full h-full text-sand-green text-2xl sm:text-5xl z-40 font-semibold text-opacity-70 px-5">{images[imageIndex].title}</div>
                            <img src={images[imageIndex].img} className='w-full h-full object-cover' style={{ filter: 'brightness(50%)' }} alt="" />
                        </motion.div>
                    </AnimatePresence>
                </AnimatePresence>
            </div>
        </>
    );


  
}

export default Stat