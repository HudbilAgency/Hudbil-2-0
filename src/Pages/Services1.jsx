import React, { useState, useEffect } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Services1 = () => {

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false, false]);

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
                        Hudbil is the place where you can meet the comprehensive UI/UX Design Services – We create experiences backed by thorough research and a deep understanding of your users. Whether you're building a new product or optimising an existing one.
                    </div>
                    <div className="w-full flex items-start justify-end my-20 px-6 lg:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white text-base xl:text-[20px] leading-tight'>
                            <div>We at Hudbil – Our UI/UX/CX Services ensure your project is primed for success. Our holistic approach ensures intuitive, engaging, and seamless experiences across all digital platforms. Crafting tailored digital solutions to drive business success.</div>
                            <div>We also ensure that your project is rooted in data, innovation, and user insights, enabling you to create experiences that resonate with your audience and deliver measurable results.</div>
                            <div>
                                <a href="/services/ui-ux-cx-design/faq">
                                    <button className="button hover:text-white self-end flex flex-row justify-between px-12 py-3 mx-auto leading-none bg-white text-black gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-lg mt-[2px]'>Faq's</h1>
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
                                    <div className="marquee-text text-white">ZENDESK</div>
                                    <div className="marquee-text text-white">QUALTRICS</div>
                                    <div className="marquee-text text-white">SURVEYMONKEY</div>
                                    <div className="marquee-text text-white">CX JOURNEY </div>
                                    <div className="marquee-text text-white">TYPEFORM</div>
                                    <div className="marquee-text text-white">INTERCOM</div>
                                    <div className="marquee-text text-white">MEDALLIA</div>
                                    <div className="marquee-text text-white">SKETCH</div>
                                    <div className="marquee-text text-white">MARVEL</div>
                                    <div className="marquee-text text-white">ADOBE XD</div>
                                    <div className="marquee-text text-white">FRAMER</div>
                                    <div className="marquee-text text-white">PROTOPIE</div>
                                    <div className="marquee-text text-white">FIGMA</div>
                                    <div className="marquee-text text-white">LOOKBACK.IO</div>
                                    <div className="marquee-text text-white">USABILITYHUB</div>
                                    <div className="marquee-text text-white">MAZE</div>
                                    <div className="marquee-text text-white">TRELLO</div>
                                    <div className="marquee-text text-white">ASANA</div>
                                    <div className="marquee-text text-white">NOTION</div>
                                    <div className="marquee-text text-white">ZEPLIN</div>
                                    <div className="marquee-text text-white">ABSTRACT</div>
                                    <div className="marquee-text text-white">INVISION INSPECT</div>
                                    <div className="marquee-text text-white">ZENDESK</div>
                                    <div className="marquee-text text-white">QUALTRICS</div>
                                    <div className="marquee-text text-white">SURVEYMONKEY</div>
                                    <div className="marquee-text text-white">CX JOURNEY </div>
                                    <div className="marquee-text text-white">TYPEFORM</div>
                                    <div className="marquee-text text-white">INTERCOM</div>
                                    <div className="marquee-text text-white">MEDALLIA</div>
                                    <div className="marquee-text text-white">SKETCH</div>
                                    <div className="marquee-text text-white">MARVEL</div>
                                    <div className="marquee-text text-white">ADOBE XD</div>
                                    <div className="marquee-text text-white">FRAMER</div>
                                    <div className="marquee-text text-white">PROTOPIE</div>
                                    <div className="marquee-text text-white">FIGMA</div>
                                    <div className="marquee-text text-white">LOOKBACK.IO</div>
                                    <div className="marquee-text text-white">USABILITYHUB</div>
                                    <div className="marquee-text text-white">MAZE</div>
                                    <div className="marquee-text text-white">TRELLO</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-6 lg:px-16 flex flex-col lg:flex-row items-start justify-between w-full gap-12 xl:gap-0'>
                        <div className='font-normal text-3xl text-white'>Our UI/UX/CX Design Services</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point11.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">UI Designing</div>
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
                                    <div className="pt-10">Craft Visually Appealing And User-Friendly Interfaces That Reflect Your Brand Identity And Captivate Your Audience. Our UI Design Services Focus On Creating Intuitive Layouts That Enhance User Interaction And Satisfaction.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point12.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">User Interviews</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[1] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Gain Valuable Insights Into User Needs And Preferences Through Structured User Interviews. We Conduct Comprehensive Sessions To Understand Your Target Audience, Informing Design Decisions That Enhance Usability And Engagement.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point13.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">User Research</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[2] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Employ Data-Driven User Research Methodologies To Uncover User Behaviours And Motivations. Our Research Informs Design Strategies That Align With User Expectations, Resulting In Intuitive And Effective User Experiences.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point14.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Usability Testing</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[3] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Ensure Your Digital Products Are User-Friendly And Efficient Through Rigorous Usability Testing. We Identify And Address Usability Issues, Enhancing Overall User Satisfaction And Product Effectiveness.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point15.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Omni-Channel Experience Design</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[4] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Create Cohesive And Seamless User Experiences Across Multiple Platforms And Devices. Our Omni-Channel Design Approach Ensures Consistent Interactions, Enhancing User Engagement And Brand Loyalty.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point16.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">UI/UX Audit</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[5] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Identify Areas For Improvement In Your Digital Products With A Comprehensive UI/UX Audit. We Assess Usability, Accessibility, And Design Consistency, Providing Actionable Recommendations To Enhance User Experience.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point16.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Motion Graphics & Micro-Interactions</div>
                                    </div>
                                    <div onClick={() => toggleDropdown(6)} className="cursor-pointer">
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`transition-transform duration-300 ${dropdownStates[6] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                }`}
                                        >
                                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                                            <rect x="7" y="11" width="10" height="2" fill="white" />
                                            {!dropdownStates[6] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[6] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Enhance User Engagement With Dynamic Motion Graphics And Subtle Micro-Interactions. Our Designs Add Interactive Elements That Delight Users, Improving Usability And Creating Memorable Experiences.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className='text-[#917D7D] font-normal text-sm py-12 w-full md:w-5/6'>
                                Get in touch to find out how our team enjoys tinkering, most importantly empower your organisation.
                            </div>
                            <div className='w-fit'>
                                <Link to="/services/website-development">
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
                    <div className='font-normal text-2xl text-white mb-12 px-6 lg:px-16'>Why Choose Hudbil ?</div>
                    <div className='md:w-1/2 xl:w-3/4 font-normal text-[2rem] xl:text-[50px] leading-tight text-white px-6 lg:px-16'>
                        Designs that work, not just look good – <br className='hidden xl:block' />
In the vast ocean of agencies across India, Hudbil stands out not just as another design agency, but as a trusted partner that’s deeply committed to transforming user experiences, elevating interfaces, and creating customer-centric solutions that drive measurable business results. Here's why Hudbil is the ideal choice for your UI/UX and CX design needs:
                    </div>
                    <div className="w-full flex items-start justify-end my-20 px-6 lg:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white text-base xl:text-[20px] leading-tight'>
                            <div>We stay ahead of the curve by using the latest tools and technologies in the industry. Whether it’s Figma, Sketch, Adobe XD, Invision, or prototyping tools like Axure, we leverage the best tools to create innovative, high-quality designs that are ready for both development and deployment. Our design files are clean, structured, and easily handoff-ready, ensuring smooth collaboration with developers.</div>
                            <div>In a sea of design agencies, Hudbil rises above by combining deep user insights, business strategy, and creative expertise into a single, cohesive offering. We focus on customer satisfaction, innovation, and measurable impact, which are the hallmarks of our design philosophy.</div>
                        </div>
                    </div>

                    <div className='px-6 lg:px-16 flex flex-col items-start justify-between w-full gap-12 mt-4'>
                        <div className='font-normal text-2xl text-white'>Why us from the Ocean ?</div>

                        <div className='w-full text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>1</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">User-Centric Approach</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">At Hudbil, we don’t just design; we design for the user. Every decision we make is driven by real user data, insights, and feedback. We prioritize the user experience (UX) from the very beginning of every project, ensuring that your product is intuitive, easy to use, and emotionally engaging. Whether it’s a website, mobile app, or enterprise software, we focus on crafting experiences that delight users and create lasting relationships.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>2</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Holistic Design Philosophy (UI/UX/CX)</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">We believe UI (User Interface), UX (User Experience), and CX (Customer Experience) go hand in hand. While UI design ensures the visual aesthetics and interactions are beautiful and cohesive, UX design optimizes functionality and usability. CX design takes it a step further by ensuring the overall journey a customer takes with your brand is seamless, rewarding, and emotionally engaging. We don’t just create interfaces; we create end-to-end experiences that speak to your users’ needs, desires, and pain points.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>3</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Deep Understanding of Business and Design</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">We understand that great design is not just about creating something visually appealing—it’s about meeting your business objectives. Whether you want to increase conversions, improve customer retention, or strengthen your brand identity, we align our UI/UX/CX design strategies with your business goals. Our designs are not just creative—they are crafted to deliver measurable impact and solve real business challenges.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>4</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Tailored Solutions for Every Client</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">We don’t believe in one-size-fits-all. Every brand is unique, and so are its customers. That’s why we offer customized design solutions that are perfectly aligned with your brand, industry, and target audience. Whether you’re in eCommerce, healthcare, fintech, or any other domain, our team tailors every detail—from wireframes to final design—to match your specific needs and objectives.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>5</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Data-Driven Design Decisions</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">We are data-driven, not just intuition-driven. Our team uses advanced tools, analytics, and user testing to base our design decisions on real user behaviours, feedback, and market trends. This approach ensures that every design choice is backed by insights that help us create interfaces and experiences that work for your audience. We also implement A/B testing and user validation to ensure that our designs are continuously optimized for performance.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>6</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Proven Track Record of Success</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">At Hudbil, we don’t just promise exceptional design; we deliver. Our portfolio includes successful projects across various industries, with a proven record of boosting conversions, increasing user engagement, and delivering ROI through top-notch UI/UX/CX design. We take pride in being a results-driven agency that helps brands scale, grow, and succeed in a competitive market.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                        </div>
                    </div>

                    <div className="w-full flex items-start justify-end mt-24 px-6 lg:px-16">
                        <div className='md:w-1/2 xl:text-[20px] flex flex-col gap-12 md:gap-8 text-white'>
                            <div>At Hudbil, we’re eager to bring your vision to life. Let’s create designs that not only look amazing but also drive real results. Get in touch with us today to begin your UI/UX/CX design journey!</div>

                            <a href='/contact-us' className="button self-end flex hover:text-white flex-row justify-between mt-6 mb-4 px-12 py-3 ml-auto leading-none bg-white text-black gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-all duration-300">
                                <h1 className='text-base mt-1 '>Call us today</h1>
                                <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                            </a>

                        </div>
                    </div>
                </section>
                <section className=' bg-[#2C2C2C] py-20'>
                    <div className='px-6 lg:px-16 flex flex-col lg:flex-row items-start justify-between w-full gap-16 lg:gap-0'>
                        <div className='font-normal text-3xl text-white uppercase'>The minds behind our success </div>

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
<a href='/contact-us' className="button self-end  flex flex-row justify-between px-20 py-3 leading-none bg-[#505050] text-white hover:text-[#505050] gap-8 rounded-[1000px] max-md:px-5  hover:bg-white transition-all duration-300">
                                        <h1 className='text-base '>Contact Us</h1>
                                    </a>
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
<a href='/contact-us' className="button self-end  flex flex-row justify-between px-20 py-3 leading-none bg-[#505050] text-white hover:text-[#505050] gap-8 rounded-[1000px] max-md:px-5  hover:bg-white transition-all duration-300">
                                        <h1 className='text-base '>Contact Us</h1>
                                    </a>
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

export default Services1