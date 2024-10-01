import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onLoadingComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const birdRef = useRef(null)

  useEffect(() => {
    
    const animation = gsap.fromTo(birdRef.current, 
      { rotation: 5 },
      {
        rotation: -5,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.6,
        repeat: -1
      }
    );

    // Cleanup function to stop the animation if needed
    
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const words = textRef.current.innerText.split(' ');
    textRef.current.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
    
    const tl = gsap.timeline();

    tl.from('.word', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    }).then(() => {
      moveLoaderUp();
    });

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const moveLoaderUp = () => {
    gsap.to(loaderRef.current, {
      opacity: 0,
      duration: 0.8,
      display:"none",
      ease: 'power2.inOut',
      onComplete: () => {
        onLoadingComplete();
        document.body.style.overflow = 'auto';
      }
    });
  };

  return (
    <div ref={loaderRef} className="fixed z-[10000] inset-0 flex flex-col items-center justify-center bg-black">
      <img 
        ref={birdRef}
        src="./FlippedbirdImg.png" 
        alt="Loader logo" 
        className="mb-8 w-48 h-48"
      />
      <div className="text-center">
        <h1 ref={textRef} className="text-white font-arial text-[60px]">Innovation At Your fingertips</h1>
      </div>
    </div>
  );
};

export default Loader;
