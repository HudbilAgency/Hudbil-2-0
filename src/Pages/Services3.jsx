import React, { useState, useEffect } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Services3 = () => {

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false]);

    const toggleDropdown = (index) => {
        const updatedStates = dropdownStates.map((state, i) => i === index ? !state : state);
        setDropdownStates(updatedStates);
    };

    const [dropdownStates2, setDropdownStates2] = useState([false, false, false, false, false, false]);

    const toggleDropdown2 = (index) => {
        const updatedStates2 = dropdownStates2.map((state, i) => i === index ? !state : state);
        setDropdownStates2(updatedStates2);
    };

    useEffect(() => {

        const tl8 = gsap.timeline({
            scrollTrigger: {
                trigger: "#moving-img",
                start: "top 70%",
                end: "bottom center",
                once: true
            },
        });

        tl8.fromTo(".scale-anm", { scale: 0.6 }, { scale: 1, ease: "linear" });

    }, []);

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

    return (
        <>
            <Helmet>
                <title>Creative Design Services in India | Innovative Branding & Digital Solutions</title>
                <meta name="description" content="Elevate your brand with our creative design services. From unique branding and eye-catching graphics to website design and digital solutions, our expert team brings your vision to life. Contact us for tailored, high-impact design!"></meta>
                <meta property="og:url" content="www.hudbil.com/services/creative-designing-agency"></meta>
                <meta name="keywords" content="Creative Design Services,Branding and Identity Design,Graphic Design Solutions,Custom Logo Design,Digital and Print Design,Website and UX/UI Design,Social Media Graphics,Visual Branding Services,Packaging Design Solutions,Innovative,Design Agency,Custom Illustration Services,Marketing Design Services,Creative Content Design,Digital Branding Services,Professional Design Services"></meta>
                <meta name="og:description" content="Bring your brand to life with our comprehensive creative design services. We provide impactful graphic design, website design, and branding solutions tailored"></meta>
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
            <div className="w-full h-[70vh] lg:h-[80vh] bg-no-repeat bg-cover bg-center">
                <video
                    src="/LandingVideos/video3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover h-[70vh] lg:h-[80vh] w-full fixed z-0"
                    onContextMenu={(e) => e.preventDefault()}
                >
                    <source src="/LandingVideos/video3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <main className='relative z-20'>
                <section className='bg-black py-20'>
                    <div className='md:w-3/5 xl:w-4/5 font-normal text-[2rem] xl:text-[50px] leading-tight text-white px-6 lg:px-16'>
                        We don’t just design and develop products; we create experiences backed by thorough research and a deep understanding of your users. Whether you're building a new product or optimising an existing one.
                    </div>
                    <div className="w-full flex items-start justify-end my-16 px-6 lg:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white text-base xl:text-[20px] leading-tight'>
                            <div>We are Hudbil – Our UI/UX and Development Research Services ensure your project is primed for success.</div>
                            <div>Our UI/UX and Development Research Services ensure that your project is rooted in data, innovation, and user insights, enabling you to create experiences that resonate with your audience and deliver measurable results.</div>
                            <div>
                                <a href="/faq">
                                    <button className="button hover:text-white self-end flex flex-row justify-between px-12 py-3 mx-auto leading-none bg-white text-black gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-lg mt-[2px]'>Faqs</h1>
                                        <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative my-24">
                        <div className="relative">
                            <img className='mx-auto transition duration-500 grayscale hover:grayscale-0' src="/sp11.png" alt="Creative Designing Services" />
                            <div className="absolute w-full inset-0 pointer-events-none flex justify-center items-center overflow-hidden">
                                <div className="marquee-text-container font-normal text-[1.7rem] uppercase">
                                    <div className="marquee-text text-white">Understand Your Users</div>
                                    <div className="marquee-text text-white">Reduce Risks</div>
                                    <div className="marquee-text text-white">Drive Success</div>
                                    <div className="marquee-text text-white">Enhance Usability</div>
                                    <div className="marquee-text text-white">Stay Ahead</div>
                                    <div className="marquee-text text-white">Understand Your Users</div>
                                    <div className="marquee-text text-white">Reduce Risks</div>
                                    <div className="marquee-text text-white">Drive Success</div>
                                    <div className="marquee-text text-white">Enhance Usability</div>
                                    <div className="marquee-text text-white">Stay Ahead</div>
                                    <div className="marquee-text text-white">Understand Your Users</div>
                                    <div className="marquee-text text-white">Reduce Risks</div>
                                    <div className="marquee-text text-white">Drive Success</div>
                                    <div className="marquee-text text-white">Enhance Usability</div>
                                    <div className="marquee-text text-white">Stay Ahead</div>
                                    <div className="marquee-text text-white">Understand Your Users</div>
                                    <div className="marquee-text text-white">Reduce Risks</div>
                                    <div className="marquee-text text-white">Drive Success</div>
                                    <div className="marquee-text text-white">Enhance Usability</div>
                                    <div className="marquee-text text-white">Stay Ahead</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-6 lg:px-16 flex flex-col lg:flex-row items-start justify-between w-full gap-12 xl:gap-0'>
                        <div className='font-normal text-3xl text-white'>Our UI/UX & Development Research
                            <br className='hidden xl:block' /> Services</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point11.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">User Research</div>
                                    </div>
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
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">Personas to guide</div>
                                    <div>We understand that the foundation of every successful product lies in understanding the people who use it. Our User Research Services are designed to uncover the motivations, behaviours, and needs of your target audience, enabling you to create intuitive, engaging, and impactful experiences. By putting the user at the enter of the design process, we help businesses build solutions that truly resonate.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-all duration-300">
                                            <h1 className='text-base mt-1 '>Know More</h1>
                                            <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point12.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Ethnographic Research</div>
                                    </div>
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
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[1] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">Deep User Understanding</div>
                                    <div>Ethnographic research is a qualitative research method that involves observing and interacting with users in their natural settings. This approach goes beyond surface-level understanding to uncover the "why" behind user actions and decisions, helping you create products and services that truly resonate.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-all duration-300">
                                            <h1 className='text-base mt-1 '>Know More</h1>
                                            <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point13.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Design Audit</div>
                                    </div>
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
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[2] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">Identify Friction Points</div>
                                    <div>A design audit is a comprehensive review of your product’s design elements, usability, and overall user experience. It identifies inconsistencies, inefficiencies, and areas for enhancement, ensuring your design not only looks great but functions effectively and meets user expectations.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-all duration-300">
                                            <h1 className='text-base mt-1 '>Know More</h1>
                                            <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point14.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Maturity Audit</div>
                                    </div>
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
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[3] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">Identify Gaps</div>
                                    <div>Whether you’re scaling your operations, implementing new technologies, or improving workflows, our audits provide a clear understanding of where you stand and how to advance. By identifying strengths, weaknesses, and growth opportunities, we empower you to reach new levels of operational and strategic excellence.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-all duration-300">
                                            <h1 className='text-base mt-1 '>Know More</h1>
                                            <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point15.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Competitor Analysis</div>
                                    </div>
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
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[4] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">Identify Market Trends</div>
                                    <div>Our Competitor Analysis Services provide you with the insights you need to outpace your rivals. We go beyond basic comparisons to uncover their strengths, weaknesses, strategies, and opportunities, helping you position your business for growth and differentiation.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-all duration-300">
                                            <h1 className='text-base mt-1 '>Know More</h1>
                                            <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point16.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Emerging Trends</div>
                                    </div>
                                    <div onClick={() => toggleDropdown(5)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates[5] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates[5] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[5] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">Drive Innovation</div>
                                    <div>We help businesses stay ahead of the curve by identifying and capitalising on the latest Emerging Trends. In today’s dynamic landscape, recognising new technologies, behaviours, and market shifts is critical to staying relevant and competitive. Our team dives deep into industry data, consumer insights, and global developments to provide actionable strategies that position your business for future success.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-all duration-300">
                                            <h1 className='text-base mt-1 '>Know More</h1>
                                            <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className='text-[#917D7D] font-normal text-sm py-12 w-full md:w-5/6'>
                                Get in touch to find out how our team enjoys tinkering, most importantly empower your organisation.
                            </div>
                            <div className='w-fit'>
                                <Link to="/services/strategy-agency">
                                    <button className="button self-end flex flex-row justify-between px-12 py-3 mb-4 leading-none hover:bg-white hover:text-black text-white gap-8 rounded-[1000px] max-md:px-5 bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-base mt-1 '>Next service</h1>
                                        <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="moving-img" className='bg-black'>
                    <img
                        src="/sp12.png"
                        className="scale-anm w-full"
                    />
                </div>
                <section className='bg-black py-20'>
                    <div className='md:w-1/2 xl:w-3/4 font-normal text-[2rem] xl:text-[50px] leading-tight text-white px-6 lg:px-16'>
                        Research is the foundation of everything we do. It’s what allows us to deliver solutions that are not only functional but also strategically aligned with your business objectives. Here’s why research is our secret sauce:
                    </div>
                    <div className="w-full flex items-start justify-end my-16 px-6 lg:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white text-base xl:text-[20px] leading-tight'>
                            <div>We believe that the key to creating exceptional websites and digital solutions lies in thorough, data-backed research. Our approach to design and development is grounded in understanding user behaviour, industry trends, and business goals. We don’t just build websites; we build insight-driven digital experiences that captivate and convert.</div>
                            <div>From the first consultation to post-launch optimisation, our research-driven approach ensures that every decision we make is backed by data, insights, and a deep understanding of your business.</div>
                        </div>
                    </div>

                    <div className='px-6 lg:px-16 flex flex-col items-start justify-between w-full gap-12 mt-4'>
                        <div className='font-normal text-2xl text-white'>Our Process</div>

                        <div className='w-full text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>1</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Discovery & Research</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(0)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates2[0] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates2[0] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[0] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">The first phase of our process is all about understanding your goals, target audience, and project requirements. This critical step sets the foundation for everything that follows.
                                        <li className='pt-6 pb-1'>Client Consultation: We begin by getting to know your business, objectives, and vision for the project.</li>
                                        <li>User Research: We gather data about your target audience’s needs, behaviours, and preferences to inform the design and development process.</li>

                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>2</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Strategy & Planning</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(1)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates2[1] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates2[1] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[1] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">With a deep understanding of your brand and target users, we move into the planning phase to set clear goals and define the roadmap for success.
                                        <li className='pt-6 pb-1'>UX Strategy: We define the user journey, mapping out how users will interact with your product, and prioritize key actions to optimize engagement and conversions.</li>
                                        <li>Wireframing & Prototyping: We create wireframes and low-fidelity prototypes to visualize layout and flow, allowing us to test ideas early on.</li>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>3</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">UI/UX Design</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(2)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates2[2] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates2[2] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[2] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">The design phase is where creativity meets user-centered thinking. We focus on crafting intuitive interfaces and delightful experiences that reflect your brand identity.
                                        <li className='pt-6 pb-1'>UI Design: We create high-fidelity mockups that bring your vision to life with visually appealing design elements, color schemes, typography, and imagery.</li>
                                        <li>Responsive Design: We ensure the design is mobile-first, optimizing for various screen sizes and devices.</li>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>4</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Development & Testing</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(3)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates2[3] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates2[3] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[3] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">Once the design is finalized, we move into development, where our team works to turn your vision into a fully functional website or app. We follow best practices in coding, testing, and quality assurance.
                                        <li className='pt-6 pb-1'>Front-End Development: We build the interactive elements of your website or application, focusing on user experience, responsiveness, and smooth performance.</li>
                                        <li>Back-End Development: We develop the server-side logic, databases, and APIs that power the front-end experience, ensuring stability and security.</li>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>5</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Launch & Development</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(4)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates2[4] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates2[4] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[4] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">
                                        With everything tested and optimized, we prepare for launch. We ensure a smooth transition from development to live deployment.
                                        <li className='pt-6 pb-1'>Pre-Launch Review: We conduct a final review and ensure all performance and security aspects are addressed.</li>
                                        <li>Deployment: We deploy the website or application to the live server, ensuring minimal downtime and a smooth transition.</li>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>6</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Post - Launch Support</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(5)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates2[5] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates2[5] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[5] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">Our work doesn’t end at launch. We provide ongoing support to ensure the continued success of your digital solution.
                                        <li className='pt-6 pb-1'>Performance Monitoring: We monitor your website’s performance, checking for speed, uptime, and security issues.</li>
                                        <li>User Feedback Collection: We continue to collect feedback from users to improve functionality and address any usability concerns.</li>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                        </div>
                    </div>

                    <div className="w-full flex items-start justify-end mt-24 px-6 lg:px-16">
                        <div className='md:w-1/2 xl:text-[20px] flex flex-col gap-12 md:gap-8 text-white'>
                            <div>Among leading brand agencies India, Hudbil has a reputation for creating distinctive and
                                successful brands. Known as brand transformation specialists, Hudbil’s track record justifies
                                a place among these top-tier brand agencies India. Our process is designed to ensure that every project is executed with precision, creativity, and user-centric thinking. From initial research to post-launch optimisation, we work closely with you at every step to deliver an outstanding digital experience that exceeds your expectations.</div>
                            <button className="button self-end flex hover:text-white flex-row justify-between mt-6 mb-4 px-12 py-3 ml-auto leading-none bg-white text-black gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-all duration-300">
                                <h1 className='text-base mt-1 '>Work With hudbil</h1>
                                <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                            </button>

                        </div>
                    </div>
                </section>
                <section className=' bg-[#2C2C2C] py-20'>
                    <div className='px-6 lg:px-16 flex flex-col lg:flex-row items-start justify-between w-full gap-16 lg:gap-0'>
                        <div className='font-normal text-3xl text-white'>The minds behind our success </div>

                        <div className='w-full md:w-1/2 text-white flex flex-col items-start gap-20'>

                            <div className='flex flex-col items-start gap-8'>
                                <div className='flex items-center gap-5'>
                                    <div><img src="/sp2logo1.png" /></div>
                                    <div className='flex flex-col items-start gap-1'>
                                        <div>Thomas Cook</div>
                                        <div className='text-[#838383] text-sm'>Oinvest</div>
                                    </div>
                                </div>
                                <div>“ Working with the Hudbil team has been a great experience, they often came up with lean
                                    and creative solutions to meet our business challenges and requirements that we threw at
                                    them, they are very creative in terms of the design and clean development skills.”</div>
                                <div>
                                    <button className="button self-end  flex flex-row justify-between px-20 py-3 leading-none bg-[#505050] text-white hover:text-[#505050] gap-8 rounded-[1000px] max-md:px-5  hover:bg-white transition-all duration-300">
                                        <h1 className='text-base '>Contact Us</h1>
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-col items-start gap-8'>
                                <div className='flex items-center gap-5'>
                                    <div><img src="/sp2logo2.png" /></div>
                                    <div className='flex flex-col items-start gap-1'>
                                        <div>David Manson</div>
                                        <div className='text-[#838383] text-sm'>Bluemail</div>
                                    </div>
                                </div>
                                <div>The team at Hudbil are enthusiastic, friendly and great to work with. They really listened to our needs and came up with a design which encapsulates exactly the spirit and personality of the organisation, whilst still remaining practical and user-friendly.</div>
                                <div>
                                    <button className="button self-end  flex flex-row justify-between px-20 py-3 leading-none bg-[#505050] text-white hover:text-[#505050] gap-8 rounded-[1000px] max-md:px-5  hover:bg-white transition-all duration-300">
                                        <h1 className='text-base '>Contact Us</h1>
                                    </button>
                                </div>
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

export default Services3