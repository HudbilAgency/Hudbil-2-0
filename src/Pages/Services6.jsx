import React, { useState, useEffect } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Services6 = () => {

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false]);

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
                        At Hudbil, we are at the forefront of this revolution, helping businesses harness the power of blockchain to enhance security, increase operational efficiency, and create innovative solutions. Our Blockchain Development Services empower companies to build robust and scalable decentralized applications (DApps), smart contracts, and blockchain-based solutions. Blockchain technology is transforming industries by providing secure, transparent, and decentralized solutions.
                    </div>
                    <div className="w-full flex items-start justify-end my-20 px-6 lg:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white text-base xl:text-[20px] leading-tight'>
                            <div>Whether you're looking to integrate blockchain into your existing infrastructure or build a new blockchain solution from scratch, Hudbil has the expertise and experience to guide you every step of the way.</div>
                            <div>We offer a comprehensive suite of blockchain development services tailored to your business needs. From consultation to deployment, we provide end-to-end blockchain solutions that are secure, efficient, and scalable.</div>
                            <div>
                                <a href="/services/blockchain/faq">
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
                                    <div className="marquee-text text-white">ETHEREUM </div>
                                    <div className="marquee-text text-white">HYPERLEDGER </div>
                                    <div className="marquee-text text-white">BINANCE SMART CHAIN </div>
                                    <div className="marquee-text text-white">SOLANA</div>
                                    <div className="marquee-text text-white">POLKADOT</div>
                                    <div className="marquee-text text-white">CARDANO</div>
                                    <div className="marquee-text text-white">TEZOS</div>
                                    <div className="marquee-text text-white">TOKENOMICS DESIGN</div>
                                    <div className="marquee-text text-white">SMART CONTRACT DEVELOPMENT</div>
                                    <div className="marquee-text text-white">LEGAL COMPLIANCE</div>
                                    <div className="marquee-text text-white">PLATFORM INTEGRATION</div>
                                    <div className="marquee-text text-white">MARKETING SUPPORT</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-6 lg:px-16 flex flex-col lg:flex-row items-start justify-between w-full gap-12 xl:gap-0'>
                        <div className='font-normal text-3xl text-white'>Our Blockchain Services</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="/service6-point1.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Custom Blockchain Development</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">We specialize in building custom blockchain platforms that cater to your business's specific needs. Our experts design and implement tailored solutions based on your requirements, whether it's for private blockchains (for internal use) or public blockchains (open-source and decentralized). We use cutting-edge technologies to create highly secure and scalable blockchain networks.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="/service6-point2.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Smart Contract Implementation</div>
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
                                    <div className="pt-10">Smart contracts are self-executing contracts with the terms of the agreement directly written into code. Our blockchain developers design and deploy smart contracts that are reliable, transparent, and tamper-proof. We use platforms like Ethereum, Binance Smart Chain, and Solidity to build contracts that automatically execute actions when pre-defined conditions are met. </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="/service6-point3.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Decentralized Apps (DApps)</div>
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
                                    <div className="pt-10">Our team specializes in developing Decentralized Applications (DApps) on top of blockchain platforms like Ethereum, Polkadot, and Cardano. DApps offer enhanced security, transparency, and user control by operating in a decentralized environment. Whether you need a DApp for finance, gaming, supply chain, or real estate, we can help you bring your idea to life. </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="/service6-point4.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Tokenization & NFTs</div>
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
                                    <div className="pt-10">We assist businesses in integrating blockchain into their existing systems to increase transparency, security, and efficiency. Whether you want to integrate blockchain with your CRM, ERP, or supply chain systems, we ensure a smooth and seamless integration that enhances data security, streamlines processes, and reduces costs.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="/service6-point5.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Blockchain Consulting</div>
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
                                    <div className="pt-10">Our team of blockchain experts provides consultation services to help you understand the potential benefits of blockchain for your business. From strategy to implementation, we provide insights into how blockchain can solve your current challenges and how it fits into your future business goals. We help you select the right blockchain platform, define use cases, and establish a roadmap for implementation.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className='text-[#917D7D] font-normal text-sm py-12 w-full md:w-5/6'>
                                Get in touch to find out how our team enjoys tinkering, most importantly empower your organisation.
                            </div>
                            <div className='w-fit'>
                                <Link to="/services/ui-ux-cx-design">
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
                        At Hudbil, we understand that every business has unique needs. That’s why we offer customized blockchain solutions tailored to meet your specific challenges. Whether it’s creating a secure payment system, managing supply chain logistics, or developing a decentralized financial application, we build solutions that add value to your business.
                    </div>
                    <div className="w-full flex items-start justify-end my-20 px-6 lg:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white text-base xl:text-[20px] leading-tight'>
                            <div>Our team of developers and blockchain experts have deep knowledge and experience in working with various blockchain technologies and platforms such as Ethereum, Hyperledger, Solana, Binance Smart Chain, Polkadot, Cardano, and more. We stay ahead of the curve by keeping up with the latest blockchain trends, ensuring that you get the best, most innovative solutions.</div>
                            <div>Blockchain is a rapidly evolving field, and we ensure that the solutions we build are scalable and future-proof. Our blockchain solutions are designed to grow with your business, enabling you to scale as your needs evolve without compromising on performance or security.</div>
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
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Consultation & Requirement Analysis</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[0] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">We begin by understanding your business goals, challenges, and vision for blockchain technology. We discuss potential use cases and define the scope of the project.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>2</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Blockchain Architecture Design</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[1] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">Based on your requirements, we design a robust, scalable, and secure blockchain architecture tailored to your needs.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>3</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Blockchain Development & Smart Contract Creation</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[2] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">Our blockchain developers build the custom solution, including writing and deploying smart contracts, integrating APIs, and setting up the blockchain network.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>4</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Testing & Security Audits</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[3] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">We conduct thorough testing and security audits to identify any vulnerabilities in the code and ensure the platform is secure and reliable.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>5</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Deployment & Integration</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[4] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">We deploy your blockchain solution to the production environment and integrate it with your existing systems to ensure seamless operations.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>6</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Ongoing Support & Maintenance</div>
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
                                <div className={`flex overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[5] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-lg pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">After deployment, we offer continuous monitoring, maintenance, and updates to ensure optimal performance and scalability.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                        </div>
                    </div>

                    <div className="w-full flex items-start justify-end mt-24 px-6 lg:px-16">
                        <div className='md:w-1/2 xl:text-[20px] flex flex-col gap-12 md:gap-8 text-white'>
                            <div>If you're ready to leverage the power of blockchain technology to transform your business, Hudbil is here to help. Our team of blockchain experts will guide you through the process, from concept to deployment, ensuring that your project is a success.</div>

                            <a href='/contact-us' className="button self-end flex hover:text-white flex-row justify-between mt-6 mb-4 px-12 py-3 ml-auto leading-none bg-white text-black gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-all duration-300">
                                <h1 className='text-base mt-1 '>Call us today</h1>
                                <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                            </a>

                        </div>
                    </div>
                </section>
                <section className=' bg-[#2C2C2C] py-20'>
                    <div className='px-6 lg:px-16 flex flex-col lg:flex-row items-start justify-between w-full gap-16 xl:gap-0'>
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

export default Services6