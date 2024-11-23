import React, { useState, useRef, useEffect } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false]);

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

    return (
        <>
            <Helmet>
                <title>Creative Design & Bespoke Development Services | Custom Solutions for Your Brand</title>
                <meta name="description" content="Elevate your brand with our creative design and bespoke development services. From custom design and branding to tailored web and software development, we create impactful solutions designed for your business. Contact us for innovative, high-quality design and development!"></meta>
                <meta property="og:url" content="www.hudbil.com/services"></meta>
                <meta name="keywords" content="Creative Design and Bespoke Development, Custom Branding and Development Services, Tailored Web and Software Development, Unique Brand Identity Solutions,Custom Website Design and Development,Professional Creative Services, Digital Design and Development Services, Bespoke Development Solutions, Brand Growth Design Services, Personalized Branding and Development"></meta>
                <meta name="og:description" content="Stand out with our creative design and bespoke development services. We provide custom solutions in branding, web design, and digital development for businesses ready to grow."></meta>
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
            <main className='pt-[80px] bg-black'>
                <section className='py-20'>
                    <div className='w-full lg:w-3/5 font-normal text-[2rem] xl:text-[50px] xl:w-5/6 leading-tight text-white px-6 lg:px-16'>
                        Whether you need to design your first MVP to get development, redesign your product to improve business metrics - our designer’s and developer’s are here to help.
                    </div>

                    <div className='pl-6 lg:pl-0 pr-6 lg:pr-16 mt-20 flex flex-col lg:flex-row items-start w-full gap-16 lg:gap-12'>

                        <div className='flex items-center justify-center w-full lg:w-1/2 lg:hidden'>
                            <video
                                src="/services-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full"
                                onContextMenu={(e) => e.preventDefault()}
                            >
                                <source src="/services-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className='lg:flex hidden items-center justify-center w-full lg:w-1/2 bg-no-repeat bg-cover bg-center sticky top-0'>
                            <video
                                src="/services-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full h-screen"
                                onContextMenu={(e) => e.preventDefault()}
                            >
                                <source src="/services-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className='font-normal text-[2.5rem] leading-tight pb-10'>
                                Our Services
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 toggle-point flex flex-col">
                                <div className="flex items-start justify-between">
                                    <div onClick={() => toggleDropdown(0)} className="flex flex-col items-start justify-between cursor-pointer gap-6">
                                        <div className="font-normal text-4xl leading-9">Research</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>What do we serve?</div>
                                        </div>
                                    </div>
                                    <div className='mt-[10px]'>
                                        <a href="/services/research-agency">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className='button'
                                            >
                                                <rect width="24" height="24" rx="12" fill="#7811A5" />
                                                <rect x="7" y="11" width="10" height="2" fill="white" />
                                                <rect x="11" y="7" width="2" height="10" fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-base leading-7 pt-6">Our extensive research helps us understand exactly what your audiences are looking for, and our process accountability helps us offer UX Solutions as a core service in the studio.</div>
                                    <div className='flex flex-col items-start gap-4'>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>UX Research</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Ethnographic Research</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Design Audit</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Maturity Audit</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Competitor Analysis</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Emerging Trends</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 toggle-point flex flex-col">
                                <div className="flex items-start justify-between">
                                    <div onClick={() => toggleDropdown(1)} className="flex flex-col items-start justify-between cursor-pointer gap-6">
                                        <div className="font-normal text-4xl leading-9">Strategy</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>What do we serve?</div>
                                        </div>
                                    </div>
                                    <div className='mt-[10px]'>
                                        <a href="/services/strategy-agency">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className='button'
                                            >
                                                <rect width="24" height="24" rx="12" fill="#7811A5" />
                                                <rect x="7" y="11" width="10" height="2" fill="white" />
                                                <rect x="11" y="7" width="2" height="10" fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[1] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-base leading-7 pt-6">Understanding your brand, identifying your pain points, empathizing with your audience, and strategizing delightful user experiences are some of the things we do as your UX Partners</div>
                                    <div className='flex flex-col items-start gap-4'>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Brand Strategy</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Product Strategy</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>UX Strategy</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Scale up Strategy</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Digital Transformation</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>User Acquisition Strategy</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 toggle-point flex flex-col">
                                <div className="flex items-start justify-between">
                                    <div onClick={() => toggleDropdown(2)} className="flex flex-col items-start justify-between cursor-pointer gap-6">
                                        <div className="font-normal text-4xl leading-9">Design</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>What do we serve?</div>
                                        </div>
                                    </div>
                                    <div className='mt-[10px]'>
                                        <a href="/services/creative-designing-agency">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className='button'
                                            >
                                                <rect width="24" height="24" rx="12" fill="#7811A5" />
                                                <rect x="7" y="11" width="10" height="2" fill="white" />
                                                <rect x="11" y="7" width="2" height="10" fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[2] ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-base leading-7 pt-6">Our scientifically proven UX design process means you can simultaneously release products users love and check off business goals.</div>
                                    <div className='flex flex-col items-start gap-4'>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>UI Design</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>UI Development</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>UI Guidelines</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Design System</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>UX Design</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>User Research</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>UX Consultancy</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>UX Writing</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Animations</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Iconography</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Illustrations</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 toggle-point flex flex-col">
                                <div className="flex items-start justify-between">
                                    <div onClick={() => toggleDropdown(3)} className="flex flex-col items-start justify-between cursor-pointer gap-6">
                                        <div className="font-normal text-4xl leading-9">Development</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>What do we serve?</div>
                                        </div>
                                    </div>
                                    <div className='mt-[10px]'>
                                        <a href="/services/development-agency">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className='button'
                                            >
                                                <rect width="24" height="24" rx="12" fill="#7811A5" />
                                                <rect x="7" y="11" width="10" height="2" fill="white" />
                                                <rect x="11" y="7" width="2" height="10" fill="white" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[3] ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-base leading-7 pt-6">We spend time understanding your unique business challenge, creating flexible software roadmaps, and developing secure, scalable solutions that deliver ROI.</div>
                                    <div className='flex flex-col items-start gap-4'>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Web Design</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Software Development</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Front-End</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Back-End</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>E-Commerce</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Mobile App Development</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Native</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Hybrid</div>
                                        </div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div>Android</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <Link to={'/our-industry'}>
                                <button className="button self-end flex flex-row justify-between px-12 py-3 mt-20 mx-auto leading-none bg-white hover:text-white text-black gap-8 rounded-[1000px] max-md:px-5 hover:bg-[#7811A5] transition-colors duration-300">
                                    <h1 className='text-base mt-1 '>Our Industries</h1>
                                    <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className='px-6 lg:px-16 pb-20'>

                    <div className='w-full flex items-start lg:items-center justify-between flex-col lg:flex-row gap-6 mb-16 text-white'>
                        <div className='text-[2.5rem]'>Our Approach</div>
                        <div>Going the extra mile with an extra bit of effort at every step.</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 text-white text-4xl font-normal">

                        <div onMouseEnter={() => toggleShowDetails(0, true)}
                            onMouseLeave={() => toggleShowDetails(0, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[0] ? (
                                <div className='text-base text-center leading-7'>
                                    <div>As a client-focused web and mobile app development company, we gain in-depth insights into your digital requirements, consumer behaviours, technology platforms, functionalities, etc., to help you gain a competitive edge.</div>
                                </div>
                            ) : (
                                <div>Understanding</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(1, true)}
                            onMouseLeave={() => toggleShowDetails(1, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[1] ? (
                                <div className='text-base text-center leading-7'>
                                    <div>From elegant designs to a custom-coded website, the radical development phase is driven by our digital mindfulness to translate your digital vision.</div>
                                </div>
                            ) : (
                                <div>Documented</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(2, true)}
                            onMouseLeave={() => toggleShowDetails(2, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[2] ? (
                                <div className='text-base text-center leading-7'>
                                    <div>When you decide to work with a thriving web and mobile app development company like us, you unlock the best tech-driven solutions that stand the test of time across multiple environments, including staging and production.</div>
                                </div>
                            ) : (
                                <div>Deployment</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(3, true)}
                            onMouseLeave={() => toggleShowDetails(3, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[3] ? (
                                <div className='text-base text-center leading-7'>
                                    <div>Empowered with tech-heavy centricity, our solutions transcend the usual methods of solving problems. We ensure a sophisticated frontend experience and develop a user-friendly backend by considering the bigger picture for tech-focused digital transformation that was once impossible.</div>
                                </div>
                            ) : (
                                <div>Technology</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(4, true)}
                            onMouseLeave={() => toggleShowDetails(4, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[4] ? (
                                <div className='text-base text-center leading-7'>
                                    <div>With our great knowledge in tech engineering, we employ a rigorous QA testing process that encompasses testing speed, security, user-friendly interface experience, and overall functionality and eliminates flaws before the product goes live.</div>
                                </div>
                            ) : (
                                <div>Testing</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(5, true)}
                            onMouseLeave={() => toggleShowDetails(5, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[5] ? (
                                <div className='text-base text-center leading-7'>
                                    <div>Our technology experts are conversant with cutting-edge technology and software trends, maintaining a website and ensuring smooth app performance. Moreover, our foolproof AMC support lends best-in-class customer assistance equipped with hassle-free backend integration for our esteemed patrons.</div>
                                </div>
                            ) : (
                                <div>Support</div>
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
                                <div>ABB</div>
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

export default Services