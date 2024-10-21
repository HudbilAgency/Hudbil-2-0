import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';

const Insights = () => {

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
            <main className='pt-36 pb-20 px-6 md:px-16'>

                <section>
                    <div className='flex flex-col md:flex-row gap-10 items-start justify-between font-normal'>
                        <div className='text-4xl xl:text-[50px] leading-10'>INSIGHTS</div>
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

                <section>

                    <div className='flex flex-col xl:flex-row items-start justify-between gap-24'>

                        <div className='w-full xl:w-[42%] flex flex-col items-start gap-20'>

                            <div className='flex flex-col items-start gap-5'>
                                <div><img className="filter grayscale transition duration-500 hover:grayscale-0" src="./mainblogimg1.png" alt="Blog1" /></div>
                                <div className='font-medium text-3xl'>Landing pages</div>
                                <div className='font-medium text-xl'>Increase Conversion Rate From Ad to Landing Page.</div>
                                <div>
                                    <button className="button self-end mt-5 flex flex-row justify-between px-12 py-2 bg-black leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px] hover:bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-base mt-1 font-arial'>Read More</h1>
                                        <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-col items-start gap-5'>
                                <div><img className="filter grayscale transition duration-500 hover:grayscale-0" src="./mainblogimg2.png" alt="Blog2" /></div>
                                <div className='font-medium text-3xl'>Chatbots</div>
                                <div className='font-medium text-xl'>What Are Chatbots? Everything Business Owners Should Know.</div>
                                <div>
                                    <button className="button self-end mt-5 flex flex-row justify-between px-12 py-2 bg-black leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px] hover:bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-base mt-1 font-arial'>Read More</h1>
                                        <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-col items-start gap-5'>
                                <div><img className="filter grayscale transition duration-500 hover:grayscale-0" src="./mainblogimg3.jpg" alt="Blog3" /></div>
                                <div className='font-medium text-3xl'>Business Websites</div>
                                <div className='font-medium text-xl'>What Are Chatbots? Everything Business Owners Should Know.</div>
                                <div>
                                    <button className="button self-end mt-5 flex flex-row justify-between px-12 py-2 bg-black leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px] hover:bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-base mt-1 font-arial'>Read More</h1>
                                        <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-col items-start gap-5'>
                                <div><img className="filter grayscale transition duration-500 hover:grayscale-0" src="./mainblogimg4.jpg" alt="Blog4" /></div>
                                <div className='font-medium text-3xl'>Website Page Speed</div>
                                <div className='font-medium text-xl'>How to Optimize Your Website for Mobile Page Speed</div>
                                <div>
                                    <button className="button self-end mt-5 flex flex-row justify-between px-12 py-2 bg-black leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px] hover:bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-base mt-1 font-arial'>Read More</h1>
                                        <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className='w-full xl:w-1/2 flex flex-col items-start gap-20'>

                            <div className='flex flex-col xl:flex-row items-start gap-20 xl:gap-12 justify-between'>
                                <div className='bg-[#6813AA] flex flex-col w-full xl:w-1/2 font-normal items-center justify-evenly py-8 px-8 gap-20 text-white'>
                                    <div className='text-3xl'>WEBINAR</div>
                                    <div className='text-lg text-center'>How Important is brand Labels: A better approach to knowing branding and its value.</div>
                                    <div className='w-full text-center border rounded-full py-2 mb-3 border-white'>Coming Soon</div>
                                </div>

                                <Link to="/blogpage-1" className='flex flex-col items-start gap-2 w-full xl:w-1/2'>
                                    <div className='w-full'><img className='w-full' src="./mainblogimg5.png" alt="Blog5" /></div>
                                    <div className='text-3xl leading-10 mt-3'>The Ultimate Guide for UX Research.</div>
                                    <div className='text-[#6A13AA] text-sm'>August 13, 2024</div>
                                </Link>
                            </div>

                            <div className='flex flex-col xl:flex-row items-start gap-20 xl:gap-12 justify-between w-full'>
                                <Link to="/blogpage-2" className='flex flex-col items-start gap-2 w-full xl:w-1/2'>
                                    <div className='w-full'><img className='w-full' src="./mainblogimg6.png" alt="Blog6" /></div>
                                    <div className='text-3xl leading-10 mt-3'>The Evolution Of The Graphic Design.</div>
                                    <div className='text-[#6A13AA] text-sm'>August 13, 2024</div>
                                </Link>

                                <Link to="/blogpage-3" className='flex flex-col items-start gap-2 w-full xl:w-1/2'>
                                    <div className='w-full'><img className='w-full' src="./mainblogimg7.png" alt="Blog7" /></div>
                                    <div className='text-3xl leading-10 mt-3'>Brand’s identity design aspects in Brief.</div>
                                    <div className='text-[#6A13AA] text-sm'>August 6, 2024</div>
                                </Link>
                            </div>

                            <div className='flex flex-col xl:flex-row items-start gap-20 xl:gap-12 justify-between'>
                                <Link to="/blogpage-4" className='flex flex-col items-start gap-2 w-full xl:w-1/2'>
                                    <div className='w-full'><img className='w-full' src="./mainblogimg8.png" alt="Blog8" /></div>
                                    <div className='text-3xl leading-10 mt-3'>Business Firms Suffer Because of Not Finding right B2B design Agency.</div>
                                    <div className='text-[#6A13AA] text-sm'>July 4, 2024</div>
                                </Link>

                                <Link to="/blogpage-5" className='flex flex-col items-start gap-2 w-full xl:w-1/2'>
                                    <div className='w-full'><img className='w-full' src="./mainblogimg9.png" alt="Blog9" /></div>
                                    <div className='text-3xl leading-10 mt-3'>User Experience Design and its Importance for Businesses.</div>
                                    <div className='text-[#6A13AA] text-sm'>June 24, 2024</div>
                                </Link>
                            </div>

                            <button className="button self-end mx-auto flex flex-row justify-between px-12 py-2 bg-black leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px] hover:bg-[#7811A5] transition-all duration-300">
                                <h1 className='text-base mt-1 font-arial'>Learn more</h1>
                                <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                            </button>

                        </div>

                    </div>

                </section>

            </main>
            <Footer />
        </>

    )
}

export default Insights