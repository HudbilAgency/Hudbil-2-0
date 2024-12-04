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

  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const words = document.querySelectorAll(".main-title");

    gsap.fromTo(
      words,
      { y: 0, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.inOut",
      }
    ).then(() => {
      moveLoaderUp();
    });

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const moveLoaderUp = () => {
    gsap.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      display: "none",
      ease: 'power2.inOut',
      onComplete: () => {
        onLoadingComplete();
        document.body.style.overflow = 'auto';
      }
    });
  };

  const splitSentenceIntoWords = (sentence) => {
    return sentence.split(" ").map((word, index) => (
      <React.Fragment key={index}>
        <span className="inline-block main-title">{word}</span>
        {index < sentence.split(" ").length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));
  };

  return (
    <div ref={loaderRef} className="fixed z-[1100] inset-0 flex flex-col items-center justify-center bg-black">
      <img
        ref={birdRef}
        src="./FlippedbirdImg.png"
        alt="Loader logo"
        className="mb-8 w-48 h-48"
      />
      <div className="text-center">
        <h1 ref={textRef} className="text-white  text-2xl sm:text-4xl md:text-[50px] lg:text-[50px]">
          {splitSentenceIntoWords("Innovation At Your Fingertips")}
        </h1>
      </div>
    </div>
  );
};

export default Loader;
