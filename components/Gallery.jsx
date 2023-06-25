import React from "react";
import Image from "next/image";
import Bean from "@/public/gallery/bean.jpeg";
import Sas from "@/public/gallery/sas.jpg";
import Rod from "@/public/gallery/rod.jpeg";
import Norm from "@/public/gallery/norm.jpeg";

const images = [Bean, Sas, Rod, Norm];
const delay = 5000;
const swipeThreshold = 0; // Adjust this value for touch sensitivity

const Gallery = () => {
  const [index, setIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
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
    <div
      className="w-full sm:w-1/3 overflow-hidden rounded-[20px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="whitespace-nowrap transition-ease duration-1000 rounded-[20px]"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <Image
            src={image}
            alt="image"
            draggable="false"
            className="inline-block h-[500px] w-full rounded-40"
            key={index}
            style={{ image }}
          />
        ))}
      </div>
    </div>
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
