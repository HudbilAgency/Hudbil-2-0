import React, { useState, useRef, useEffect } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const OurModules = () => {

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false]);

    const toggleDropdown = (index) => {
        const updatedStates = dropdownStates.map((state, i) => i === index ? !state : state);
        setDropdownStates(updatedStates);
    };

    const [showDetails, setShowDetails] = useState([false, false, false, false, false, false]);
    const lastHoveredIndex = useRef(null);

    const toggleShowDetails = (index, isHovered) => {
        if (lastHoveredIndex.current !== index || !isHovered) {
            const updatedStates2 = showDetails.map((state, i) => (i === index ? isHovered : false));
            setShowDetails(updatedStates2);
            lastHoveredIndex.current = isHovered ? index : null;
        }
    };

    useEffect(() => {
        gsap.utils.toArray('.toggle-point').forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        if (!isVisible) {
            setIsVisible(true);
        }
    };

    return (
        <>
            <Helmet>
                <title>Our Work | Showcasing Innovative Design & Development Projects</title>
                <meta name="description" content="Explore our portfolio of successful design and development projects. From captivating websites to cutting-edge applications, see how we bring ideas to life and drive results for our clients."></meta>
                <meta property="og:url" content="https://www.hudbil.com/our-work"></meta>
                <meta name="keywords" content="B2B UI/UX Designing Company in Bangalore, B2B Website Development Agency in Bangalore, B2C Mobile Application Development Company in Bangalore, B2C UI/UX for mobile application Agency in Bangalore, B2C branding designing Company in Bangalore, B2C website designing Company in Bangalore, B2C UI UX development Company in Bangalore, B2C Web Design Company in Bangalore"></meta>
                <meta name="og:description" content="Our Work - We have designed and developed amazing projects for the various sectors in B2B, B2C, D2C Branding and designing projects worldwide"></meta>
                <meta name="og:site_name" content="B2B UI/UX Designing Company in Bangalore India | B2C Website Development Agency in Bangalore | Top 10 B2B Website Developement Agencies in Bangalore Review | B2C Branding and designing Agency | B2C Software development Agency"></meta>
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
            <main className='pt-[80px] bg-black'>
                <section className='pt-20 pb-24'>
                    <div className='w-full lg:w-3/5 font-normal text-[2rem] xl:text-[50px] xl:w-5/6 leading-tight text-white px-6 lg:px-16'>
                        We believe that great work comes from great environments. Our modes of working has built a flexible and inclusive approach that allows our teams to thrive. Here’s how we work:
                    </div>

                    <div className='pl-6 lg:pl-0 pr-6 lg:pr-16 mt-20 flex flex-col lg:flex-row items-start w-full gap-16 lg:gap-12'>

                        <div className='flex items-center bg-no-repeat bg-cover bg-center justify-center w-full lg:w-1/2 lg:hidden'>
                            <video
                                src="/work-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full h-80"
                                onContextMenu={(e) => e.preventDefault()}
                            >
                                <source src="/work-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className='lg:flex hidden items-center justify-center w-full lg:w-1/2 bg-no-repeat bg-cover bg-center sticky top-0'>
                            <video
                                src="/work-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full h-screen"
                                onContextMenu={(e) => e.preventDefault()}
                            >
                                <source src="/work-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className='font-normal text-[2.8rem] leading-tight pb-12'>
                                Our Module
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="font-normal text-2xl md:text-4xl leading-9 ">Project Basis</div>
                                    <div onClick={() => toggleDropdown(0)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates[0] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates[0] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-8 md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">The best approach for a one-time project, where the scope is well defined and the deliverables are clear. It is a fixed-price model where the project is delivered within a specific timeline and budget</div>
                                    <a href='/modules/project-basis' className="button w-fit flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-base mt-1 '>Know More</h1>
                                        <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="font-normal text-2xl md:text-4xl leading-9 ">Monthly Retainer</div>
                                    <div onClick={() => toggleDropdown(1)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates[1] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates[1] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-8 md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[1] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Ideal for ongoing projects that require continuous support and maintenance. It is a flexible model where you can hire our team on a monthly basis to work on your project.</div>
                                    <a href='/modules/monthly-retainer' className="button w-fit flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-base mt-1 '>Know More</h1>
                                        <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="font-normal text-2xl md:text-4xl leading-9">Consultation</div>
                                    <div onClick={() => toggleDropdown(2)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates[2] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates[2] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-8 md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[2] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">We provide consultation services to help you make informed decisions about your technology stack, architecture, and development process.</div>
                                    <a href='/modules/consultation' className="button w-fit flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-base mt-1 '>Know More</h1>
                                        <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="font-normal text-2xl md:text-4xl leading-9">White Labelling</div>
                                    <div onClick={() => toggleDropdown(3)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates[3] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates[3] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-8 md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[3] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">If you are a marketing company or a design agency, we can work as your technology partner, providing you with the technical expertise you need to deliver high-quality projects to your clients.</div>
                                    <a href='/modules/white-labelling' className="button w-fit flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-base mt-1 '>Know More</h1>
                                        <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </a>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            {isVisible && (
                                <div>
                                    <div className="py-12 flex flex-col">
                                        <div className="flex items-center justify-between gap-6">
                                            <div className="font-normal text-2xl md:text-4xl leading-9">Offshore Development Centre</div>
                                            <div onClick={() => toggleDropdown(4)} className="cursor-pointer">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`transition-transform duration-300 ${dropdownStates[4] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                        }`}
                                                >
                                                    <rect width="24" height="24" rx="12" fill="#7811A5" />
                                                    <rect x="7" y="11" width="10" height="2" fill="white" />
                                                    {!dropdownStates[4] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={`flex flex-col gap-8 md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[4] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="pt-10">We can set up a dedicated team of developers, designers, and project managers to work on your projects. This model is ideal for companies that require a large team to work on multiple projects.</div>
                                            <a href='/modules/offshore-development-centre' className="button w-fit flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-all duration-300">
                                                <h1 className='text-base mt-1 '>Know More</h1>
                                                <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                                </div>
                            )}
                            {!isVisible && (
                                <button onClick={handleButtonClick} className="button self-end flex flex-row justify-between px-12 py-3 mt-20 mx-auto leading-none bg-white hover:text-white text-black gap-8 rounded-[1000px] max-md:px-5 hover:bg-[#7811A5] transition-all duration-300">
                                    <h1 className='text-base mt-1 '>Load More</h1>
                                    <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                <section className='px-6 lg:px-16 pt-10 pb-28'>

                    <div className='w-full flex items-start justify-between flex-col lg:flex-row gap-6 mb-20 text-white'>
                        <div className='text-[2.5rem]'>We get results</div>
                        <div className='w-full lg:w-2/5'>Using a unique Continuous Discovery / Continuous Delivery approach coupled with cutting-edge technologies, we design, develop and deliver your  end to end to ensure you’re consistently meeting user needs and driving business value.. See below for just a few examples of the impact we've helped create for clients.</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 text-white text-4xl font-normal">

                        <div onMouseEnter={() => toggleShowDetails(0, true)}
                            onMouseLeave={() => toggleShowDetails(0, false)}
                            className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[0] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We understand that people communicate best with people.</div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>95%</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(1, true)}
                            onMouseLeave={() => toggleShowDetails(1, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[1] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We are focused on three areas of business Strategy, Brand and Digital.</div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>+80k</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(2, true)}
                            onMouseLeave={() => toggleShowDetails(2, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[2] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We energise brands by unlocking opportunities to deliver real brand performance.</div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>99%</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(3, true)}
                            onMouseLeave={() => toggleShowDetails(3, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[3] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We build and develop highly optimised digital experiences </div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>185h</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(4, true)}
                            onMouseLeave={() => toggleShowDetails(4, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[4] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Experience of working in the B2B + B2C space allows us to seamlessly work</div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>10Y</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(5, true)}
                            onMouseLeave={() => toggleShowDetails(5, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[5] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We work with world’s most ambitious, innovative businesses.</div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>81%</div>
                            )}
                        </div>
                    </div>
                </section>

                <section className='px-6 lg:px-16 pb-20'>

                    <div className='w-full flex items-start justify-between flex-col lg:flex-row gap-6 pb-20 text-white'>
                        <div className='text-[2.5rem]'>We win awards</div>
                        <div className='w-full lg:w-2/5'>We are informed strategy and target audience, details of any challenges faced and why you think your campaign achieved the desired outcomes and succeeded globally. We are proud!!</div>
                    </div>

                    <div className='text-white'>

                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4 toggle-point'>
                            <div className='text-xl'>2023</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>SEO Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Global Agency Awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>PPC Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Global Agency Awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Integrated Search Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Global Agency Awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Social Media Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Global Agency Awards</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4 toggle-point'>
                            <div className='text-xl'>2022</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Business and Global Award</div>
                                    <div className='w-1/2 text-right md:text-left'>London, Best Market Research Agency</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Content Marketing Agency Award</div>
                                    <div className='w-1/2 text-right md:text-left'>Third Eye Awards 2022</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>AFR BOSS Most Innovative Companies</div>
                                    <div className='w-1/2 text-right md:text-left'>3rd Most Innovative Media and Marketing Company in Australasia</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4 toggle-point'>
                            <div className='text-xl'>2021</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Creative Marketing Agency India Award</div>
                                    <div className='w-1/2 text-right md:text-left'>Best Innovation Program of India</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4 toggle-point'>
                            <div className='text-xl'>2020</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>AFR BOSS Most Innovative Companies</div>
                                    <div className='w-1/2 text-right md:text-left'>Best Innovation Program</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4 toggle-point'>
                            <div className='text-xl'>2018</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>HUBDIL Innovation Awards 2017-2018</div>
                                    <div className='w-1/2 text-right md:text-left'>Research Effectiveness Awards, Gold Member</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Buzz Most Innovative Companies</div>
                                    <div className='w-1/2 text-right md:text-left'>Buzz Most Innovative Companies</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>AI Chatbot Most Innovative Companies</div>
                                    <div className='w-1/2 text-right md:text-left'>Most Innovative Company in India</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Silicon India Magazine Business Awards</div>
                                    <div className='w-1/2 text-right md:text-left'>Finalist, Company of the Year</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4 toggle-point'>
                            <div className='text-xl'>2017</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Start-up India Multi Business Awards</div>
                                    <div className='w-1/2 text-right md:text-left'>Silicon India 2017</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Start-up India Business Awards</div>
                                    <div className='w-1/2 text-right md:text-left'>Silicon India Innovation 2017</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4 toggle-point'>
                            <div className='text-xl'>2016</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>IOS Development Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Apple Innovation Award</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Marketing Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Winner Platinum - OQEM</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Integrated Search Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Winner Gold - Media & Advertising - In-house</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Creative/Design Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Finalist IVM Awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Independent Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Clutch awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>UX Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Silicon India Magazine Cover</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4 toggle-point'>
                            <div className='text-xl'>2015</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Use of AI in Client Campaign</div>
                                    <div className='w-1/2 text-right md:text-left'>Finalist in the World Conference</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4 toggle-point'>
                            <div className='text-xl'>2014</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Global Campaign</div>
                                    <div className='w-1/2 text-right md:text-left'>Google Global Campaign 2014</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Agency Culture</div>
                                    <div className='w-1/2 text-right md:text-left'>Covid Appreciation Awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Culture Transformation Initiative</div>
                                    <div className='w-1/2 text-right md:text-left'>In house team support Award</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Flexible Working Policy</div>
                                    <div className='w-1/2 text-right md:text-left'>In house team support Award</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4 toggle-point'>
                            <div className='text-xl'>2013</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Inclusion and Diversity Initiative</div>
                                    <div className='w-1/2 text-right md:text-left'>Indian Market Research Team Conference 2012-2013</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full mt-4"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='pb-0 px-6 lg:px-16'>

                    <div className='w-full flex items-start justify-between flex-col lg:flex-row gap-10 pb-20 text-white'>
                        <div className='text-[2.5rem] lg:w-1/4'>And we partner with the best</div>

                        <div className='w-full lg:w-1/2 2xl:w-2/5 flex flex-col md:flex-row items-start gap-2 md:gap-28 font-normal'>
                            <div className='flex flex-col items-start gap-2'>
                                <div>SILICON INDIA</div>
                                <div>CLUTCH</div>
                                <div>ACA</div>
                                <div>BBC WORLD</div>
                                <div>JUST DAIL</div>
                                <div>SUPERIU AWARDS</div>
                                <div>TOOLS OF INDIA </div>
                                <div>BEST AGENCY IN INDIA </div>
                                <div>DESIGN AND DEVELOPMENT</div>
                                <div>JEF TECHNO </div>
                                <div>H&M</div>
                                <div>HDFC BANK</div>
                                <div>INTERNATIONAL ASSOCIATION</div>
                            </div>

                            <div className='flex flex-col items-start gap-2'>
                                <div>PETVEX INDIA </div>
                                <div>LOTTOS FITNESS </div>
                                <div>BMW</div>
                                <div>KOTAL INTERNATIONAL</div>
                                <div>H&U</div>
                                <div>INFOTIK</div>
                                <div>GANESHA EK SANKIRITI</div>
                                <div>BLUE MAIL</div>
                                <div>SPARK INDIA</div>
                                <div>STARBUCKS INDIA</div>
                                <div>TATA CAPITAL</div>
                                <div>ZEPTO</div>
                                <div>RAPIDO INDIA</div>
                            </div>
                        </div>

                    </div>

                </section>

            </main>
            <ReachUs />
            <Footer />
        </>
    )
}

export default OurModules