import React, { useRef, useEffect } from 'react'
import Navbar from '../Components/Navbar'
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
            <main style={{ background: 'linear-gradient(180deg, #9AC2D0 0%, #AACDD8 41.72%, #ADCEDB 100%)' }}>
                <section className='flex flex-col lg:flex-row'>
                    <div className='h-[70vh] lg:h-[100vh] w-full lg:w-1/2 bg-no-repeat bg-cover bg-center lg:sticky lg:top-0'>
                        <video
                            src="/locations-video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="object-cover w-full h-[70vh] lg:h-[100vh] fixed lg:static z-0"
                        >
                            <source src="/locations-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div style={{ background: 'linear-gradient(180deg, #9AC2D0 0%, #AACDD8 41.72%, #ADCEDB 100%)' }} className='w-full lg:w-1/2 relative z-20'>
                        <div className='px-6 lg:px-16 w-full text-white pt-24 pb-24 lg:pt-40 lg:pb-32'>

                            <div className='text-[1.8rem] leading-9 mb-16'>Choose another country or region to see content specific to your location and select our services.</div>

                            <div className='mb-16'>
                                <div className='mb-8 text-[1.5rem] leading-7'>Africa, Middle East, and India</div>
                                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-0 lg:gap-10 xl:gap-0 w-full'>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Bahrain</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Egypt</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">India</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Israel</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Kenya</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Kuwait</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Nigeria</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Oman</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Qatar</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Saudi Arabia</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">South Africa</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Uganda</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">United Arab Emirates</a>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-16'>
                                <div className='mb-8 text-[1.5rem] leading-7'>Asia Pacific</div>
                                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-0 lg:gap-10 xl:gap-0 w-full'>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Australia</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">New Zealand</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Singapore</a>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-16'>
                                <div className='mb-8 text-[1.5rem] leading-7'>Latin America and the Caribbean</div>
                                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-0 lg:gap-10 xl:gap-0 w-full'>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Argentina</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Belize</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Brazil</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Colombia</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Mexico</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">The Bahamas</a>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Venezuela</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='mb-8 text-[1.5rem] leading-7'>The United States, Canada And Puerto Rico</div>
                                <div className='flex flex-col md:flex-row items-start gap-2 md:gap-0 lg:gap-10 xl:gap-0 w-full'>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Canada (English)</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">Puerto Rico (English)</a>
                                    </div>
                                    <div className='flex flex-col gap-2 text-[#B2514E] md:w-1/3'>
                                        <a className="hover:text-gray-500 transition-all duration-300 cursor-pointer">United States</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Locations