
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Animation = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const boxMainRef = useRef(null);
  useEffect(() => {
    gsap.to(boxMainRef.current, {
      x: `${currentSlide * -50}vw`,
      duration: 0.3,
      ease: "power2.inOut"
    });
  }, [currentSlide]);


  useEffect(() => {
    if (currentSlide === 0) {
      gsap.to(".menu-button", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(".menu-button", { display: "none" });
        }
      });
      gsap.to(".close-button", {
        opacity: 1,
        display: "block",
        duration: 0.3,
        ease: "power2.inOut"
      });
    } else {
      gsap.to(".close-button", {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(".close-button", { display: "none" });
        }
      });
      gsap.to(".menu-button", {
        opacity: 1,
        display: "block",
        duration: 0.3,
        ease: "power2.inOut"
      });
    }
  }, [currentSlide]);

  const handleMenuslide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : 0);
    
  };

  const handleCloseslide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : 0);
    
    
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <button 
        onClick={handleMenuslide}
        className="menu-button absolute top-4 left-4 px-4 py-2 bg-white rounded-full hover:bg-gray-300 z-10"
      >
        Menu
      </button>

      <div 
        ref={boxMainRef}
        className="w-[150vw] boxMain h-[100vh] flex"
      >
        <div className="w-[50vw] h-[100%] box1 bg-red-400 relative">
          <button
            onClick={handleCloseslide}
            className="absolute close-button top-4 left-4 px-4 py-2 bg-white rounded-full hover:bg-gray-300 "
          >
            Close
          </button>
          box1
        </div>
        <div className="w-[50vw] h-[100%] box2 bg-blue-700 relative">
          box2
        </div>
        <div className="w-[50vw] h-[100%] box3 bg-green-600">box3</div>
      </div>
    </div>
  );
};

export default Animation;
