import React , { useState } from 'react'
import Navbar from '../Components/Navbar'
import ReachUs from '../Components/ReachUs'
import Footer from '../Components/Footer'

const Our_products = () => {



  return (
    <>
    < Navbar />
    {/* Header */}
    <section className='w-[90%] mx-auto  py-24 space-y-5 lg:py-32 md:flex'>
        <h1 className='text-xl sm:text-2xl md:text-4xl uppercase w-full tracking-wide'>Our products</h1>
        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl md:w-[60%]'>Latest thinking from across the world
            of insights informed by behaviour
            change, brand, development, 
            customer experience to innovation.
            </h2>
    </section>

    <section className='w-[90%] mx-auto '>

    {/* Search Section */}
    <div className='my-20'>
      < SearchComponent />
    </div>

    {/* images */}

    <section className='my-10'>

        {/* <div className='grid grid-cols-2 gap-x-20'>
            <div className='size-[95%] space-y-5'>
              <img src="./ProductsImg.jpg" alt="ProductsImg.jpg" />
              <h1 className='text-5xl'>We are developing</h1>
              <h2 className='text-3xl'>We are in process of developing a software solution soon.</h2>
              <button className='bg-purple-800 text-2xl text-white px-20 py-2 self-center rounded-full hover:bg-black'>Download</button>
            </div>
            <div className='size-[95%] space-y-5'>
              <img src="./ProductsImg.jpg" alt="ProductsImg.jpg" />
              <h1 className='text-5xl'>We are developing</h1>
              <h2 className='text-3xl'>We are in process of developing a software solution soon.</h2>
              <button className='bg-purple-800 text-2xl text-white px-20 py-2 self-center rounded-full hover:bg-black'>Download</button>
            </div>
        </div> */}

          < ProductSection />

    </section>


    </section>
    < Footer />
    </>
  )
}


const ProductCard = ({ imgSrc, title, description }) => {
  return (
    <div className='size-[95%] space-y-5 my-10'>
      <img src={imgSrc} alt={title} className='grayscale hover:grayscale-0'/>
      <h1 className='text-5xl'>{title}</h1>
      <h2 className='text-3xl'>{description}</h2>
      <button className='bg-purple-800 text-2xl text-white px-20 py-2 self-center rounded-full hover:bg-black'>Download</button>
    </div>
  );
};

const ProductSection = () => {
  // Array of product information
  const products = [
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
    },
    // Add more products here
  ];

  return (
    <div className='grid grid-cols-2 gap-x-20'>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imgSrc={product.imgSrc}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
};





const SearchComponent = () => {
  const filterOptions = [
    { label: 'Location', id: 'location' },
    { label: 'Theme', id: 'theme' },
    { label: 'Content type', id: 'contentType' }
  ];

  return (
    <main className="flex flex-wrap gap-8">
      <section className="flex flex-col grow shrink-0 self-end pr-5 mt-5 basis-0 w-fit max-md:max-w-full">
        <div className="flex relative justify-center w-full max-md:max-w-full">
          <label htmlFor="searchInput" className="sr-only">Search input</label>
          <input
            id="searchInput"
            type="text"
            placeholder="What are you looking for?"
            className="flex z-0 flex-col flex-1 shrink outline-none justify-center py-4 text-2xl tracking-wider bg-white border-b basis-0 border-zinc-300 min-w-[240px] text-black px-4 max-md:max-w-full"
            aria-label="Search input"
          />
          <div className="flex absolute inset-y-0 right-0 z-0 flex-col self-start min-h-[60px] w-[29px]">
            <div className="flex overflow-hidden flex-col justify-center items-center py-4 min-h-[60px] w-[29px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5da53ebac19afa1f0e6e153977b81de21bb4eea005be75d1ae096df460bfaecf?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-contain w-[80%] aspect-square" />
            </div>
          </div>
        </div>
      </section>


      <section className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="flex justify-center items-end w-full h-[81px] max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink pl-5 w-full basis-0 min-w-[240px] max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-center w-full text-base max-md:max-w-full">
              <h2 className="self-stretch pb-px my-auto tracking-wider leading-snug text-black">Filter by</h2>
              <button className="flex flex-col self-stretch my-auto tracking-wider leading-none uppercase text-stone-300">
                clear all
              </button>
            </div>
            <div className="flex flex-col pt-5 w-full max-md:max-w-full">
              <div className="flex items-start w-full max-md:max-w-full">
                {filterOptions.map((option) => (
                  <div key={option.id} className="flex bg-transparent flex-col grow shrink pr-5 min-h-[39px] w-[186px]">
                    <div className="flex relative flex-col justify-center p-px w-full rounded-md border border-black border-solid min-h-[39px]">
                      <label htmlFor={option.id} className="sr-only">{option.label}</label>
                      <select
                        id={option.id}
                        className="flex z-0 outline-none  flex-1 items-center px-3 text-base tracking-wider leading-none text-black whitespace-nowrap size-full appearance-none"
                        aria-label={option.label}
                      >
                        <option>{option.label}</option>
                      </select>
                      <div className="flex overflow-hidden absolute right-4 top-2/4 z-0 flex-col -translate-y-2/4 h-[9px] min-h-[9px] translate-x-[0%] w-[15px] pointer-events-none">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfd41a7a6d8851882ba79c14a61c687165a50674e23a024a546469d3a682d6d8?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-contain w-full aspect-[2]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};





export default Our_products