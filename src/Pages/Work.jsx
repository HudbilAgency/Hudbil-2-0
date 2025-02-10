import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {

    const [showDetails, setShowDetails] = useState([false, false, false, false, false, false]);
    const lastHoveredIndex = useRef(null);

    const toggleShowDetails = (index, isHovered) => {
        if (lastHoveredIndex.current !== index || !isHovered) {
            const updatedStates2 = showDetails.map((state, i) => (i === index ? isHovered : false));
            setShowDetails(updatedStates2);
            lastHoveredIndex.current = isHovered ? index : null;
        }
    };

    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        if (!isVisible) {
            setIsVisible(true);
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

    useLayoutEffect(() => {
        if (isVisible) {
            gsap.utils.toArray('.toggle-point-load-more').forEach((element) => {
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
        }
    }, [isVisible]);

    const WorkData = [
        {
            work: 'We Design + Developed their Hybrid Mobile Application',
            name: 'Acuraun Lock Your Energy',
            category: 'Mobile & Apps',
            path: 'https://acuraunlockyourenergy.com'
        },
        {
            work: 'We Design Illustration for their website project ',
            name: 'Ambiq',
            category: 'Illustration',
            path: 'https://ambiq.com'
        },
        {
            work: 'We Design Illustration for their website project',
            name: 'Astrid Mottes',
            category: 'Illustration',
            path: 'https://www.astridmottes.com'
        },
        {
            work: 'We Design Illustration for their website project',
            name: 'Be Smoke',
            category: 'Illustration',
            path: 'https://besmoke.com'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Bonollo',
            category: 'Business & Corporate',
            path: 'https://www.bonollo.it'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Casamon',
            category: 'Hotel / Restaurant',
            path: 'https://www.casamon.it'
        },
        {
            work: 'We Design + Developed their E-Commerce International Website',
            name: 'Chantelle',
            category: 'E-Commerce',
            path: 'https://chantelle.com/fr'
        },
        {
            work: 'We have Structured and Design their UI/UX for their website',
            name: 'Cotta Studio',
            category: 'Header Design',
            path: 'https://www.cotta-studio.com'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Dal House Iecastle',
            category: 'Hotel / Restaurant',
            path: 'https://www.dalhousiecastle.co.uk'
        },
        {
            work: 'We Design Illustration for their website project',
            name: 'Else',
            category: 'Illustration',
            path: 'https://www.else.biz'
        },
        {
            work: 'We Design + Developed their IOS Mobile Application',
            name: 'Enzos Legacy',
            category: 'Mobile & Apps',
            path: 'https://www.enzoslegacy.com'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Fern London',
            category: 'Hotel / Restaurant',
            path: 'https://fernlondon.co.uk'
        },
        {
            work: 'We Design + Developed their IOS Mobile Application',
            name: 'Flash Quad',
            category: 'Mobile & Apps',
            path: 'https://www.flashquad.com'
        },
        {
            work: 'We Design Illustration for their website project',
            name: 'Fleishigs',
            category: 'Illustration',
            path: 'https://fleishigs.com'
        },
        {
            work: 'We Design + Developed their IOS Mobile Application',
            name: 'Forgge Studio',
            category: 'Mobile & Apps',
            path: 'https://forgge-studio.webflow.io'
        },
        {
            work: 'We Design Illustration for their website project',
            name: 'Franco Bolli Montilessini',
            category: 'Illustration',
            path: 'https://www.francobollimontilessini.com'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Fxskin',
            category: 'Hotel / Restaurant',
            path: 'https://www.fxskin.co'
        },
        {
            work: 'We Design + Developed their E-Commerce International Website',
            name: 'Halodental',
            category: 'E-Commerce',
            path: 'https://halodental.com/'
        },
        {
            work: 'We Design Illustration for their website project',
            name: 'Hopen Vios',
            category: 'Illustration',
            path: 'https://www.hopenvios.com.ar'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Hypsos',
            category: 'Architecture',
            path: 'https://hypsos.com'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Idyllic',
            category: 'Hotel / Restaurant',
            path: 'https://idyllic.co.nz'
        },
        {
            work: 'We Design + Developed their IOS Mobile Application',
            name: 'In habit App',
            category: 'Mobile & Apps',
            path: 'https://www.inhabitapp.co'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Jef Techno',
            category: 'Business & Corporate',
            path: 'https://www.jefuae.com'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Landa',
            category: 'Business & Corporate',
            path: 'https://www.landa.as/es/'
        },
        {
            work: 'We Design + Developed their Hybrid Mobile Application',
            name: 'Mojek Money',
            category: 'Mobile & Apps',
            path: 'https://www.mojek.money'
        },
        {
            work: 'We Design + Developed their E-Commerce International Website',
            name: 'Monolith',
            category: 'E-Commerce',
            path: 'https://monolith.nyc'
        },
        {
            work: 'We Design + Developed their Hybrid Mobile Application',
            name: 'More Air',
            category: 'Mobile & Apps',
            path: 'https://moreair.co'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Mubien',
            category: 'Architecture',
            path: 'https://p10.mubien.com'
        },


        {
            work: 'We Design Illustration for their website project',
            name: 'Nod Coding',
            category: 'Illustration',
            path: 'https://nodcoding.com'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Noova Life',
            category: 'Business & Corporate',
            path: 'https://www.noovolife.com'
        },
        {
            work: 'We Design + Developed their E-Commerce International Website',
            name: 'Oaperfirmance',
            category: 'E-Commerce',
            path: 'https://www.oaperformance.com'
        },
        {
            work: 'We have Structured and Design their UI/UX for their website',
            name: 'Oggy Story',
            category: 'Header Design',
            path: 'https://oggy-story.com/en/'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Orizon',
            category: 'Hotel / Restaurant',
            path: 'https://orizon.group'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Paref Gestion',
            category: 'Business & Corporate',
            path: 'https://paref-gestion.com'
        },
        {
            work: 'We have Structured and Design their UI/UX for their website',
            name: 'Ross',
            category: 'Header Design',
            path: 'https://www.ross.nl'
        },
        {
            work: 'We Design + Developed their Hybrid Mobile Application',
            name: 'Ryan App',
            category: 'Mobile & Apps',
            path: 'https://ryan-app.com'
        },
        {
            work: 'We have Structured and Design their UI/UX for their website',
            name: 'Sauce Labs',
            category: 'Header Design',
            path: 'https://saucelabs.com'
        },
        {
            work: 'We have Structured and Design their UI/UX for their website',
            name: 'Scenik',
            category: 'Header Design',
            path: 'https://scenik.frostype.xyz'
        },
        {
            work: 'We have Structured and Design their UI/UX for their website',
            name: 'Sint',
            category: 'Header Design',
            path: 'https://sint.gg'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Slantis',
            category: 'Architecture',
            path: 'https://slantis.com'
        },
        {
            work: 'We Design Illustration for their website project',
            name: 'Sofi Health',
            category: 'Illustration',
            path: 'https://www.sofihealth.com'
        },
        {
            work: 'We have Structured and Design their UI/UX for their website',
            name: 'Spatial Innovation',
            category: 'Header Design',
            path: 'https://www.spatialinnovation.co.uk'
        },

        {
            work: 'We Design Illustration for their website project',
            name: 'Super Money',
            category: 'Illustration',
            path: 'https://super.money'
        },
        {
            work: 'We Design + Developed their Hybrid Mobile Application',
            name: 'Talk Pillow Talk',
            category: 'Mobile & Apps',
            path: 'https://talkpillowtalk.com'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'The Brecon',
            category: 'Hotel / Restaurant',
            path: 'https://thebrecon.com/en/'
        },
        {
            work: 'We Design Illustration for their website project',
            name: 'The Kookieboxco',
            category: 'Illustration',
            path: 'https://www.thekookieboxco.com'
        },
        {
            work: 'We Design + Developed their E-Commerce International Website',
            name: 'The Shirt - By Matthew',
            category: 'E-Commerce',
            path: 'https://the-shirt.bymatthew.com'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Theaid Studio',
            category: 'Architecture',
            path: 'https://www.theaid.studio'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Wearefound',
            category: 'Business & Corporate',
            path: 'https://wearefound.co.uk'
        },
        {
            work: 'We Design + Developed their International Website',
            name: 'Webflow',
            category: 'Architecture',
            path: 'https://heid.webflow.io'
        },
    ];

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
                        We use industry-leading research, strategic insights and relentless creativity to live our purpose: putting people first.
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
                            <div className='font-normal text-[2.7rem] leading-tight pb-10'>
                                Our Work
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            {WorkData.slice(0, 6).map((data, index) => (
                                <div key={index} className="w-full">
                                    <div className="py-12 toggle-point flex flex-col w-full">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex flex-col items-start justify-between gap-6 w-full">
                                                <div className="font-normal text-3xl md:text-[2.25rem] leading-snug flex justify-between w-full gap-6 md:gap-12">
                                                    <div>{data.work}</div>
                                                    <a href={data.path} target='_blank' className="mt-[10px] md:mt-[15px]">
                                                        <svg
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                                            <rect x="11" y="7" width="2" height="10" fill="white" />
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className='flex items-start md:items-center gap-4'>
                                                    <div className='bg-white rounded-full p-1 mt-[7px] md:mt-[0px]'></div>
                                                    <div className='text-base'>{data.name} &nbsp;  |  &nbsp; {data.category}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                                </div>
                            ))}
                            {isVisible && (
                                <div className='w-full'>
                                    {WorkData.slice(5).map((data, index) => (
                                        <div key={index} className="w-full">
                                            <div className="py-12 toggle-point-load-more flex flex-col w-full">
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="flex flex-col items-start justify-between gap-6 w-full">
                                                        <div className="font-normal text-3xl md:text-[2.25rem] leading-snug flex justify-between w-full gap-6 md:gap-12">
                                                            <div>{data.work}</div>
                                                            <a href={data.path} target='_blank' className="mt-[10px] md:mt-[15px]">
                                                                <svg
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <rect width="24" height="24" rx="12" fill="#7811A5" />
                                                                    <rect x="7" y="11" width="10" height="2" fill="white" />
                                                                    <rect x="11" y="7" width="2" height="10" fill="white" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                        <div className='flex items-start md:items-center gap-4'>
                                                            <div className='bg-white rounded-full p-1 mt-[7px] md:mt-[0px]'></div>
                                                            <div className='text-base'>{data.name} &nbsp;  |  &nbsp; {data.category}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                                        </div>
                                    ))}
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

                <section className='px-6 lg:px-16 pb-20'>

                    <div className='w-full flex items-start justify-between flex-col lg:flex-row gap-6 mb-20 text-white'>
                        <div className='text-[2.5rem]'>We get results</div>
                        <div className='w-full lg:w-2/5'>Using a unique Continuous Discovery / Continuous Delivery approach coupled with cutting-edge technologies, we design, develop and deliver your end to end to ensure you’re consistently meeting user needs and driving business value.. See below for just a few examples of the impact we've helped create for clients.</div>
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
                            <div className='flex flex-col items-start gap-2 uppercase'>
                                <div>Bonollo</div>
                                <div>Casamon</div>
                                <div>Dal House Iecastle</div>
                                <div>Enzos Legacy</div>
                                <div>Fern London</div>
                                <div>Flash Quad</div>
                                <div>Forgge Studio</div>
                                <div>Fxskin</div>
                                <div>Hypsos</div>
                                <div>Idyllic</div>
                                <div>In habit App</div>
                            </div>

                            <div className='flex flex-col items-start gap-2 uppercase'>
                                <div>Jef Techno</div>
                                <div>Landa</div>
                                <div>Mubien</div>
                                <div>Noova Life</div>
                                <div>Orizon</div>
                                <div>Paref Gestion</div>
                                <div>Slantis</div>
                                <div>The Brecon</div>
                                <div>Theaid Studio</div>
                                <div>Wearefound</div>
                                <div>Webflow</div>
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

export default Work