import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';

const Our_products = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const locations = [
    { name: 'New York' },
    { name: 'Los Angeles' },
    { name: 'Chicago' },
    { name: 'Houston' },
    { name: 'Phoenix' },
  ];

  const handleSelect = (location) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState('');
  const themes = [
    { name: 'White' },
    { name: 'Black' },
    { name: 'Blue' }
  ];

  const handleSelect2 = (theme) => {
    setSelectedTheme(theme);
    setIsOpen2(false);
  };

  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');
  const contents = [
    { name: 'Media' },
    { name: 'Blogs' },
    { name: 'Website' },
    { name: 'News' }
  ];

  const handleSelect3 = (content) => {
    setSelectedContent(content);
    setIsOpen3(false);
  };

  const clearSelections = () => {
    setSelectedLocation('');
    setSelectedTheme('');
    setSelectedContent('');
    setIsOpen(false);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  return (
    <>
      <Navbar />
      {/* Header */}
      <section className='pt-36 px-6 lg:px-16'>
        <div className='flex flex-col md:flex-row gap-10 items-start justify-between font-normal'>
          <div className='text-4xl xl:text-[50px] leading-10'>OUR PRODUCTS</div>
          <div className='text-2xl md:text-3xl xl:text-[32px] leading-tight md:w-1/2'>Latest thinking from across the world of insights informed by behaviour change, brand, development, customer experience to innovation.</div>
        </div>

        <div className='flex flex-col md:flex-row md:items-start xl:items-end justify-between my-16 gap-12'>

          <div className='flex items-center border-b border-[#D8D8D8] md:w-1/2'>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-3 text-lg border-none outline-none font-normal leading-7 placeholder-[#CECECE] text-black"
            />
            <button>
              <img
                src="./search-glass.png"
                alt="Search"
                className='w-5 h-5'
              />
            </button>
          </div>

          <div className='md:w-[45%] flex flex-col items-start gap-6'>

            <div className='w-full flex items-center justify-between text-sm font-normal'>
              <div>Filter by</div>
              <div className='text-[#C2C2C2]'><button onClick={clearSelections}>CLEAR ALL</button></div>
            </div>

            <div className='w-full flex flex-col xl:flex-row items-center justify-between gap-5'>
              <div className="relative w-full xl:w-1/3 border rounded-lg border-[#D8D8D8]">
                <div
                  className="flex justify-between items-center py-2 px-4 text-base cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span>{selectedLocation || 'Location'}</span>
                  <img
                    src="./filter-dropdown.png"
                    alt="Dropdown Icon"
                  />
                </div>
                {isOpen && (
                  <div className="absolute w-full left-0 right-0 mt-1 bg-white text-base border shadow-lg z-[10000]">
                    {locations.map((location) => (
                      <div
                        key={location.name}
                        onClick={() => handleSelect(location.name)}
                        className="flex items-center py-2 px-4 hover:bg-gray-200 cursor-pointer"
                      >
                        {location.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative w-full xl:w-1/3 border rounded-lg border-[#D8D8D8]">
                <div
                  className="flex justify-between items-center py-2 px-4 text-base cursor-pointer"
                  onClick={() => setIsOpen2(!isOpen2)}
                >
                  <span>{selectedTheme || 'Theme'}</span>
                  <img
                    src="./filter-dropdown.png"
                    alt="Dropdown Icon"
                  />
                </div>
                {isOpen2 && (
                  <div className="absolute w-full left-0 right-0 mt-1 bg-white text-base border shadow-lg z-[10000]">
                    {themes.map((theme) => (
                      <div
                        key={theme.name}
                        onClick={() => handleSelect2(theme.name)}
                        className="flex items-center py-2 px-4 hover:bg-gray-200 cursor-pointer"
                      >
                        {theme.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative w-full xl:w-1/3 border rounded-lg border-[#D8D8D8]">
                <div
                  className="flex justify-between items-center py-2 px-4 text-base cursor-pointer"
                  onClick={() => setIsOpen3(!isOpen3)}
                >
                  <span>{selectedContent || 'Content Type'}</span>
                  <img
                    src="./filter-dropdown.png"
                    alt="Dropdown Icon"
                  />
                </div>
                {isOpen3 && (
                  <div className="absolute w-full left-0 right-0 mt-1 bg-white text-base border shadow-lg z-[10000]">
                    {contents.map((content) => (
                      <div
                        key={content.name}
                        onClick={() => handleSelect3(content.name)}
                        className="flex items-center py-2 px-4 hover:bg-gray-200 cursor-pointer"
                      >
                        {content.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full px-6 lg:px-16'>

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

          <ProductSection />

        </section>


      </section>
      <Footer />
    </>
  )
}


const ProductCard = ({ imgSrc, title, description, path }) => {
  return (
    <div className=' space-y-5 my-10'>
      <img src={imgSrc} alt={title} className='grayscale hover:grayscale-0 transition-all duration-500' />
      <h1 className='text-3xl'>{title}</h1>
      <h2 className='text-xl'>{description}</h2>
      <Link to={path}><button className='bg-purple-800 transition-all duration-300 text-base text-white px-20 mt-5 py-2 self-center rounded-full hover:bg-black'>Download</button></Link>
    </div>
  );
};

const ProductSection = () => {
  const products = [
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
      path: '/coming-soon'
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
      path: '/coming-soon'
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
      path: '/coming-soon'
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
      path: '/coming-soon'
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
      path: '/coming-soon'
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
      path: '/coming-soon'
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
      path: '/coming-soon'
    },
    {
      imgSrc: './ProductsImg.jpg',
      title: 'We are developings',
      description: 'We are in process of developing a software solution soon.',
      path: '/coming-soon'
    },
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20'>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imgSrc={product.imgSrc}
          title={product.title}
          description={product.description}
          path={product.path}
        />
      ))}
    </div>
  );
};


export default Our_products