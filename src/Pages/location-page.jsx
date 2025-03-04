import React, { useRef, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet';

const Locations = () => {

    return (
        <>
            <Helmet>
                <title>Hudbil | Website designing and development agency in the world</title>
                <meta name="description" content="Hudbil offers professional designing and development services around the world. Discover design,website designing, website development, software development for your business today. Contact us today!"></meta>
                <meta property="og:url" content="www.hudbil.com/lo"></meta>
                <meta name="keywords" content="designing and development services"></meta>
                <meta name="og:description" content="Professional designing and development services around the world by hudbil Agency – Your Partner in Online Success."></meta>
                <meta name="og:site_name" content="UI/UX Designing Company in Bangalore India | Website Development Agency in Bangalore | Top 10 Website Developement Agencies in Bangalore Review | Branding and designing Agency | Software development Agency"></meta>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-3795MKLFX0"></script>
                <script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-3795MKLFX0');
                    `}
                </script>
            </Helmet>
            <Navbar />
            <main className="bg-black">
                <section className='flex flex-col lg:flex-row'>
                    <div className='h-[70vh] lg:h-[100vh] w-full lg:w-1/2 bg-no-repeat bg-cover bg-center lg:sticky lg:top-0'>
                        <video
                            src="/locations-video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-[70vh] lg:h-[100vh] fixed lg:static z-0"
                            onContextMenu={(e) => e.preventDefault()}
                        >
                            <source src="/locations-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='w-full lg:w-1/2 relative z-20 bg-black'>
                        <div className='px-6 lg:px-16 w-full text-white pt-24 pb-24 lg:pt-40 lg:pb-32'>

                            <div className='text-[1.8rem] leading-9 mb-16'>Choose another country or region to see content specific to your location and select our services.</div>

                            <div className='mb-16'>
                                <div className='mb-8 text-[1.5rem] leading-7'>Africa, Middle East, and India</div>
                                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-0 lg:gap-10 xl:gap-0 w-full'>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a href="https://www.hudbil.com/bh" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Bahrain</a>
                                        <a href="https://www.hudbil.com/eg" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Egypt</a>
                                        <a href="https://www.hudbil.com/in" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">India</a>
                                        <a href="https://www.hudbil.com/il" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Israel</a>
                                        <a href="https://www.hudbil.com/ke" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Kenya</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a href="https://www.hudbil.com/kw" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Kuwait</a>
                                        <a href="https://www.hudbil.com/ng" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Nigeria</a>
                                        <a href="https://www.hudbil.com/om" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Oman</a>
                                        <a href="https://www.hudbil.com/qa" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Qatar</a>
                                        <a href="https://www.hudbil.com/sa" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Saudi Arabia</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a href="https://www.hudbil.com/za" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">South Africa</a>
                                        <a href="https://www.hudbil.com/ug" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Uganda</a>
                                        <a href="https://www.hudbil.com/uae" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">United Arab Emirates</a>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-16'>
                                <div className='mb-8 text-[1.5rem] leading-7'>Asia Pacific</div>
                                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-0 lg:gap-10 xl:gap-0 w-full'>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a href="https://www.hudbil.com/au" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Australia</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a href="https://www.hudbil.com/nz" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">New Zealand</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a href="https://www.hudbil.com/sg" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Singapore</a>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-16'>
                                <div className='mb-8 text-[1.5rem] leading-7'>Latin America and the Caribbean</div>
                                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-0 lg:gap-10 xl:gap-0 w-full'>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a href="https://www.hudbil.com/ar" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Argentina</a>
                                        <a href="https://www.hudbil.com/bz" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Belize</a>
                                        <a href="https://www.hudbil.com/br" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Brazil</a>
                                        <a href="https://www.hudbil.com/co" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Colombia</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a href="https://www.hudbil.com/mx" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Mexico</a>
                                        <a href="https://www.hudbil.com/bs" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">The Bahamas</a>
                                        <a href="https://www.hudbil.com/ve" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Venezuela</a>
                                    </div>
                                    <div className='flex-col gap-2 text-[#B2514E] opacity-0 hidden md:flex md:w-1/3'>
                                        <div className="hover:text-gray-500 w-fit transition-all duration-300 cursor-default">Mexico</div>
                                        <div className="hover:text-gray-500 w-fit transition-all duration-300 cursor-default">The Bahamas</div>
                                        <div className="hover:text-gray-500 w-fit transition-all duration-300 cursor-default">Venezuela</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-8 text-[1.5rem] leading-7'>The United States, Canada And Puerto Rico</div>
                                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-0 lg:gap-10 xl:gap-0 w-full'>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a href="https://www.hudbil.com/ca-en" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Canada (English)</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a href="https://www.hudbil.com/pr-en" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">Puerto Rico (English)</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a href="https://www.hudbil.com/us" className="hover:text-gray-500 w-fit transition-all duration-300 cursor-pointer">United States</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Locations