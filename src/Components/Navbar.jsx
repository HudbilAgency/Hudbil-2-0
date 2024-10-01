import React from 'react'
import { useState, useEffect } from 'react';

const Navbar = (props) => {

  const [ menuIcon , setMenuIcon ] = useState(true)

  const [currentSLide, setCurrentSLide] = useState(props);
  useEffect(() => {
       setCurrentSLide(props);
          }, [props]);


          const handleMenuslide = () => {
            // setCurrentSlide(currentSlide === 0 ? 1 : 0);
            setMenuIcon(false)
          };  
        
          const handleCloseslide = () => {
            // setCurrentSlide(currentSlide === 0 ? 1 : 0);
            setMenuIcon(true)
          };
            
  return (
   <>
                      
    <section className="absolute z-50 bg-transparent w-full">
  <div className='flex justify-between items-center mt-4 mx-4 lg:mx-20'>
    <button>
    { menuIcon ? <img
      onClick={handleMenuslide}
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6bbf331-ab16-4fef-8064-4b072c7d5894?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
      alt="Decorative circular image"
      className="object-contain mb-0 max-w-full -mt-4 fixed aspect-[2.34] bg-zinc-400 bg-opacity-50 rounded-[1000px] w-[7rem] lg:w-[8rem] max-md:mb-2.5"
      loading="lazy"
      /> :  <img
      onClick={handleCloseslide}
      loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/87266ae9-db86-4982-a442-a5fb555776bf?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
      alt="Circular logo" 
      className="object-contain mb-0 max-w-full -mt-4 fixed aspect-[2.34] bg-zinc-400 bg-opacity-50 rounded-[1000px] w-[7rem] lg:w-[8rem] max-md:mb-2.5" />
       }
    </button>
    <div className="flex items-center">
     {/* This part is to fix the bird and make the Menu relative */}
    </div>
    <img 
      loading="lazy" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0edf109802d3bb4716c771db4f908205dcee9a2708872d433f9c51f0ce2a1b8?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" 
      alt="" 
      className="object-contain max-w-full aspect-[0.95] w-[4rem] lg:w-[6rem]" 
    />
  </div>
</section>
   </>
  )
}

export default Navbar