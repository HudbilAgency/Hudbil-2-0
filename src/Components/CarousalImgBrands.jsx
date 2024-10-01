import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';



// Main component for the carousel
const CarousalImgBrands = () => {
  return <HorizontalScrollResources />;
};

// Horizontal scrolling component
const HorizontalScrollResources = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Transform the scroll progress to translate the cards horizontally
  const x = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]); // Adjusted for two cards

  return (
    <section ref={targetRef} className="w-full h-screen bg-white flex items-center justify-center">
      <div className="sticky flex-shrink-0 top-0 flex items-start overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">        
            <BrandCard/>
        </motion.div>
      </div>
    </section>
  );
};

// BrandCard component for displaying individual brand information
const BrandCard = () => {

  gsap.registerPlugin(ScrollTrigger);


  const  animationRef = useRef(null);
 
  const  fadeInRef = useRef(null);
  return (
   <>
    <section>
    <div className="flex overflow-hidden flex-col items-center px-10 pt-24 pb-9 mt-24 max-w-full bg-black w-full max-md:px-5 max-md:mt-10" ref={animationRef}>
                  <div className="flex flex-col items-center max-w-full w-[587px]">
                    <h2 className="text-5xl font-Glory font-bold tracking-normal leading-none text-center text-white max-md:text-4xl">Our Brands</h2>
                    <div className="flex overflow-hidden relative flex-col mt-14 max-w-full text-xs font-extralight tracking-wider text-center aspect-[0.866] text-teal-950 w-[304px] max-md:mt-10">
                      <div className="flex overflow-hidden relative flex-col px-11 py-40 bg-white max-md:px-5 max-md:py-24 ">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7281482c86da59f833039df7a3ec6c277db84f6759a3e18d14449941f4081705?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="Brand logo" className="filter grayscale hover:grayscale-0 transition-all duration-300 object-contain -mt-12 aspect-[2.87] w-[284px]" />
                        <div className="self-center mt-5 mb-0 rotate-[1.5943215445712004e-16rad] max-md:mb-2.5">impression at your fingertips</div>
                      </div>
                    </div>
                    <h3 
                      ref={fadeInRef}
                      className="self-stretch mt-20 text-4xl font-bold tracking-normal text-center text-white leading-[50px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10 opacity-0"
                    >
                      We drive your business success value through tailor-made <br /> digital marketing solutions.
                    </h3>
                    
                    <button className="px-14 py-5  hover:bg-[#7811A5] hover:text-white bg-white text-black transition-colors duration-300  mt-14 w-80 max-w-full text-base tracking-wider leading-none  rounded-[1000px] max-md:px-5 max-md:mt-10">
                      Learn about coltfox →
                    </button>
                    <div className="flex gap-5 items-center mt-16 max-md:mt-10">
                      {[...Array(9)].map((_, index) => (
                        <div key={index} className={`flex shrink-0 self-stretch my-auto ${index === 0 ? 'w-4' : 'w-2.5 h-2.5'} ${index === 0 ? '' : 'bg-white'} rounded-full`}>
                          {index === 0 && <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/106b85d9bdf23f12b14c19ee3b4ba20fbcc84e5ff2ee3a13ecd680f9ddf00929?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain w-full aspect-square " />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
    </section>
    <section className="flex overflow-hidden flex-col items-start px-20 pt-24 pb-9 bg-neutral-950 max-w-[864px] max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[596px] max-md:max-w-full">
        <h1 className="ml-6 text-5xl font-bold tracking-normal leading-none text-center text-white max-md:text-4xl">
          Our Brands
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/729a8e41337d7249fba79168c23ddd91ff9ea83d937e32249ea81c826fca1063?apiKey=7904fd7afaaf4ee2b0837ab86d91b244&"
          alt="Brand illustration"
          className="object-contain mt-20 ml-5 max-w-full aspect-[0.87] w-[374px] max-md:mt-10"
        />
        <h2 className="self-stretch mt-20 text-4xl font-bold tracking-normal text-center text-white leading-[50px] max-md:mt-10 max-md:max-w-full">
          We drive your product success <br /> in the future with our AI, AR & VR development solutions.
        </h2>
            <button className="px-14 py-5  hover:bg-[#7811A5] hover:text-white bg-white text-black transition-colors duration-300  mt-14 w-80 max-w-full text-base tracking-wider leading-none  rounded-[1000px] max-md:px-5 max-md:mt-10">
                      Learn about Kalacode →
                </button>
        <div className="flex gap-5 items-center mt-16 ml-6 max-md:mt-10">
                  {[...Array(9)].map((_, index) => (
                        <div key={index} className={`flex shrink-0 self-stretch my-auto ${index === 1 ? 'w-4' : 'w-2.5 h-2.5'} ${index === 1 ? '' : 'bg-white'} rounded-full`}>
                          {index === 1 && <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/106b85d9bdf23f12b14c19ee3b4ba20fbcc84e5ff2ee3a13ecd680f9ddf00929?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="" className="object-contain w-full aspect-square " />}
                        </div>
                      ))}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/106b85d9bdf23f12b14c19ee3b4ba20fbcc84e5ff2ee3a13ecd680f9ddf00929?apiKey=7904fd7afaaf4ee2b0837ab86d91b244&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
   </>
  );
};

export default CarousalImgBrands;