import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Bean from "@/public/gallery/bean.jpeg";
import Cat from "@/public/gallery/cat.jpeg";
// import Sas from "@/public/gallery/sas.jpg";
import Grad from "@/public/gallery/grad.jpeg";
import Beach from "@/public/gallery/beach.jpeg";
// import Tacos from "@/public/gallery/tacos.jpeg";
import Norm from "@/public/gallery/norm.jpeg";

const images = [
  { image: Cat, alt: "Mika with Cat" },
  { image: Bean, alt: "Mika in a Beanie" },
  { image: Grad, alt: "Grad Pic" },
  { image: Beach, alt: "Beach" },
  { image: Norm, alt: "Norm the Navel" },
];
const delay = 5000;
const swipeThreshold = 0; // Adjust this value for touch sensitivity

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  function handleTouchStart(e) {
    setTouchStart(e.touches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.touches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > swipeThreshold) {
      // Swipe right to left
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }

    if (touchEnd - touchStart > swipeThreshold) {
      // Swipe left to right
      setIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 2 } }}
      exit={{ opacity: 0, y: 0 }}
      // whileHover={{ scale: 1.005 }}
      // transition={{ duration: 0, ease: "linear" }}
      // className="w-full h-full md:w-[38%] duration-300 md:hover:-translate-y-1"
      className="w-full h-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden rounded-[20px] duration-700 md:hover:-translate-y-[3px] md:hover:drop-shadow-xl drop-shadow-sm">
        <div
          className="whitespace-nowrap transition-ease rounded-[20px] duration-[650ms] md:hover:-translate-y-1"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.image}
              alt={image.alt}
              draggable="false"
              placeholder="blur"
              className="inline-block max-sm:h-[450px] aspect-square h-[480px] w-full rounded-[20px]"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// const images = [Bean, Sas, Rod, Norm];
// const delay = 5000;

// const Gallery = () => {
//   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   React.useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <div className="w-full sm:w-1/3 overflow-hidden rounded-[20px]">
//       <div
//         className="whitespace-nowrap transition-ease duration-1000 rounded-[20px]"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {images.map((image, index) => (
//           <Image
//             src={image}
//             alt="image"
//             className="inline-block h-[500px] w-full rounded-40"
//             key={index}
//             style={{ image }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

export default Gallery;
