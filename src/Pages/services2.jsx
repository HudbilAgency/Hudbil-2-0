import React, { useState, useEffect } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Services2 = () => {

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
                        Hudbil is the place where you can get Custom Website Development solutions tailored to your business needs –
                        We specialize in delivering custom website development solutions to meet your unique business challenges.
                        From SaaS platforms to ERP systems, we create scalable, secure, and high-performance websites designed to drive success.
                    </div>
                    <div className="w-full flex items-start justify-end my-20 px-6 lg:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white text-base xl:text-[20px] leading-tight'>
                            <div>We are Hudbil – A creative development agency A hardworking collective with 10 years under our belt, specialising in brand identity and packaging.</div>
                            <div>We develop adaptive and versatile apps that solve your hardest challenges, scale with your business, and maximise your ROI. Using a unique Continuous Discovery / Continuous Delivery approach coupled with cutting-edge technologies, we develop and deliver end to end to ensure you’re consistently meeting user needs and driving business value.</div>
                            <div>
                                <a href="/services/website-development/faq">
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
                                    <div className="marquee-text text-white">HTML</div>
                                    <div className="marquee-text text-white">CSS</div>
                                    <div className="marquee-text text-white">JAVASCRIPT</div>
                                    <div className="marquee-text text-white">REACT.JS</div>
                                    <div className="marquee-text text-white">ANGULAR.JS</div>
                                    <div className="marquee-text text-white">VUE.JS</div>
                                    <div className="marquee-text text-white">JQUERY</div>
                                    <div className="marquee-text text-white">SVELTE</div>
                                    <div className="marquee-text text-white">SASS </div>
                                    <div className="marquee-text text-white">LESS</div>
                                    <div className="marquee-text text-white">BOOTSTRAP</div>
                                    <div className="marquee-text text-white">TAILWIND CSS</div>
                                    <div className="marquee-text text-white">NODE.JS</div>
                                    <div className="marquee-text text-white">PHP</div>
                                    <div className="marquee-text text-white">PYTHON</div>
                                    <div className="marquee-text text-white">RUBY</div>
                                    <div className="marquee-text text-white">JAVA</div>
                                    <div className="marquee-text text-white">ASP.NET</div>
                                    <div className="marquee-text text-white">EXPRESS.JS</div>
                                    <div className="marquee-text text-white">LARAVEL</div>
                                    <div className="marquee-text text-white">DJANGO.</div>
                                    <div className="marquee-text text-white">RUBY ON RAILS</div>
                                    <div className="marquee-text text-white">SPRING BOOT</div>
                                    <div className="marquee-text text-white">MYSQL</div>
                                    <div className="marquee-text text-white">POSTGRESQL</div>
                                    <div className="marquee-text text-white">MONGODB</div>
                                    <div className="marquee-text text-white">SQLITE</div>
                                    <div className="marquee-text text-white">MARIADB</div>
                                    <div className="marquee-text text-white">GITHUB</div>
                                    <div className="marquee-text text-white">GITLAB</div>
                                    <div className="marquee-text text-white">BITBUCKET</div>
                                    <div className="marquee-text text-white">WORDPRESS</div>
                                    <div className="marquee-text text-white">DRUPAL</div>
                                    <div className="marquee-text text-white">JOOMLA</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-6 lg:px-16 flex flex-col lg:flex-row items-start justify-between w-full gap-12 xl:gap-0'>
                        <div className='font-normal text-3xl text-white'>Our Website Development Services</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point31.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Custom Web Development</div>
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
                                    <div className="pt-10">Build Bespoke Websites With Our Custom Web Development Services, Designed To Align With Your Brand Identity And Business Objectives. We Deliver Functionality-Rich Solutions For Diverse Industries.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point32.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Ecommerce Development</div>
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
                                    <div className="pt-10">Drive Online Sales With Robust E-Commerce Development Solutions. We Create Secure Platforms Equipped With Payment Gateways, Shopping Carts, And User-Friendly Interfaces To Enhance The Shopping Experience.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point33.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Content Management Systems(CMS)</div>
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
                                    <div className="pt-10">Streamline Content Updates And Management With Our Tailored CMS Solutions. Our Platforms Empower Your Team To Maintain Dynamic And Engaging Websites Effortlessly.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point34.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Software As Service Development(SaaS)</div>
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
                                    <div className="pt-10">Leverage Our Expertise In SaaS Development To Create Scalable, Cloud-Based Solutions. We Design And Implement User-Friendly SaaS Platforms Tailored To Streamline Operations And Enhance Customer Engagement.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point35.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Enterprise Resource Planning Development(ERP)</div>
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
                                    <div className="pt-10">Transform Your Business Processes With Customized ERP Development Solutions. Our Systems Integrate Seamlessly Into Your Operations, Enhancing Efficiency And Decision-Making Capabilities.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point36.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Front-End Development</div>
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
                                    <div className="pt-10">Design Responsive, User-Friendly Interfaces With Our Front-End Development Services. We Ensure Your Website Captivates Users And Delivers A Seamless Experience Across All Devices.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="/point36.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Back-End Development</div>
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
                                    <div className="pt-10">Develop Secure, Reliable Back-End Infrastructures With Our Back-End Development Solutions. We Focus On Scalability, Ensuring Optimal Performance For Your Website Or Application.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className='text-[#917D7D] font-normal text-sm py-12 w-full md:w-5/6'>
                                Get in touch to find out how our team enjoys tinkering, most importantly empower your organisation.
                            </div>
                            <div className='w-fit'>
                                <Link to="/services/mobile-app-development">
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
                        Development that work, without bugs and hangover – <br className='hidden xl:block' />
                        In the vast ocean of agencies across India, Hudbil means partnering with a website development agency that puts your business first. With a focus on innovation, collaboration, UX & CX design, and long-term success, we are committed to building digital solutions that not only look great but also deliver measurable results. In a crowded market, we rise above the noise by combining cutting-edge technology with personalized service and a results-driven approach.
                    </div>
                    <div className="w-full flex items-start justify-end my-20 px-6 lg:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white text-base xl:text-[20px] leading-tight'>
                            <div>While we’re based in India, our team has worked with clients from all around the world. We combine the technical expertise of global trends with a deep understanding of the local market to create the perfect balance for your web development needs.</div>
                            <div>We don’t just want to build your website and walk away. At Hudbil, we aim to be your long-term digital partner, helping you grow and evolve over time.</div>
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
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Expertise in Tailored Solutions</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">Unlike agencies that offer cookie-cutter solutions, we specialize in creating customized websites tailored to your specific business needs. We don't just build websites—we craft digital experiences designed to help your brand grow and stand out in a competitive market.
                                    </div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">
                                        End-to-End Solutions: From concept to launch, we handle everything—front-end and back-end development, user experience (UX) design, quality testing, deployment, and ongoing support.
                                    </div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">
                                        Bespoke Designs: Our development and design teams collaborate closely to create websites that are visually appealing and functionally robust, ensuring that the final product is as unique as your business.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>2</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Cutting-Edge Technology & Innovation</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">We stay ahead of the curve with the latest web development trends and tools. By embracing innovative technologies, we ensure your website isn’t just current—it’s future-ready.
                                    </div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">Responsive Web Design: Our websites are built to be fully responsive, ensuring they look and function beautifully across all devices—desktop, tablet, and mobile.
                                    </div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">Modern Tech Stack: We use advanced frameworks and technologies like React, Angular, Node.js, and Djangoto deliver highly performant and scalable websites.</div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">Speed & Security: We ensure your website runs smoothly with fast load times and robust security features, building trust with your visitors.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>3</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Proven Track Record</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">With years of experience and a portfolio filled with successful projects, Hudbil has built a strong reputation in the industry. Our track record speaks for itself:
                                    </div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">Diverse Clientele: We've successfully developed websites for various industries, from small startups to large enterprises, ensuring we understand the unique requirements of different sectors.</div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">Customer-Centric Approach: Our clients love us because we prioritize their needs. From the initial consultation to ongoing maintenance, we provide an exceptional, results-driven experience.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>4</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Transparent Process & Collaboration</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">Our process is clear, collaborative, and client-centric. We work closely with you every step of the way to ensure your vision is realized:
                                    </div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">Dedicated Project Manager: A single point of contact throughout the development process ensures clear communication and seamless project management.</div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">Clear Milestones & Timelines: We believe in transparency, so you’re never left wondering about the status of your project. We set realistic timelines and provide regular progress updates.</div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">Involve You in the Process: We believe your feedback is crucial. We encourage your involvement in design and functionality choices to ensure the final product aligns perfectly with your goals.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>5</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Results-Driven Approach</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">At Hudbil, we’re committed to not just building beautiful websites but creating web solutions that drive results. Whether you're looking to generate leads, increase sales, or build brand awareness, we make sure your website serves as an effective marketing tool.
                                    </div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">SEO Optimization: All our websites are built with SEO best practices in mind, helping your site rank well in search engines and attract organic traffic.</div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]"> Conversion-Driven Design: We design websites that engage users and guide them to take desired actions—whether it's filling out a form, making a purchase, or signing up for a newsletter.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>6</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Focus on User Experience (UX) & Customer Journey (CX)</div>
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
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">We place significant importance on UX and CX design, ensuring that your website provides a seamless, intuitive experience for your visitors.
                                    </div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">User-Centric Design: We design with the end-user in mind, ensuring your website is easy to navigate, visually appealing, and accessible.</div>
                                    <div className="text-lg w-full lg:w-2/3 ml-auto md:mr-[6%]">                                        Customer Journey Mapping: We help you map out the user journey to ensure that every touchpoint, from the landing page to the final conversion, is optimized for your audience.
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                        </div>
                    </div>

                    <div className="w-full flex items-start justify-end mt-24 px-6 lg:px-16">
                        <div className='md:w-1/2 xl:text-[20px] flex flex-col gap-12 md:gap-8 text-white'>
                            <div>Our commitment to your project doesn’t end once your website is launched. We provide ongoing maintenance and support to ensure your website stays up-to-date, secure, and optimized. We believe in delivering value without hidden costs. Our pricing models are transparent, ensuring there are no surprises along the way.</div>

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

export default Services2