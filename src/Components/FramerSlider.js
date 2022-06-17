import React, { useState } from 'react'
import { images } from './image-data'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import '../framer-style.css'
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};
function FramerSlider() {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);
    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className='example-container'>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    className='img'
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 200, damping: 50 },
                        opacity: { duration: 1 }
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
            </AnimatePresence>
            <div className="next1" onClick={() => paginate(1)}>
                <TiArrowRight />
            </div>
            <div className="prev1" onClick={() => paginate(-1)}>
                <TiArrowLeft />
            </div>
        </div>
    )
}

export default FramerSlider
