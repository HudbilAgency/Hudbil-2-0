import React, { useEffect, useState, useRef } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const OurApproach = () => {

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false]);

    const toggleDropdown = (index) => {
        const updatedStates = dropdownStates.map((state, i) => i === index ? !state : state);
        setDropdownStates(updatedStates);
    };

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#moving-img",
                start: "top 70%",
                once: true
            },
        });

        tl.fromTo(".scale-anm", { scale: 0.6 }, { scale: 1, ease: "linear" });

    }, []);

    const teamRefs = useRef([]);

    useEffect(() => {
        teamRefs.current.forEach((ref, index) => {
            if (ref) {
                gsap.fromTo(
                    ref,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: ref,
                            start: 'top 70%',
                            toggleActions: 'play none none none',
                        },
                    }
                );
            }
        });
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

    const teamMembers = [
        { name: "Ms. Husna Zar", role: "Co-Founder and Managing Director", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0400ef3defb4412846f96cdbcc6dfad916ad863f212c8bd073c33a6840521557?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Mohammed Shujjath", role: "Co-Founder", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/afeb8f0d64d97a95e78443f5c5078e2a506912e583550bd7f67b1a73cd098b81?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Satvik Mahajan", role: "Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/849b5ef3d218c3b2505c1d528d6457da4feddbdc62b8131fdb4232e322fb913f?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Manu Parasuraman", role: "Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0a09d07c1cea7127b2cdd7e3642a6998f8c91d94da42198cc96b43030b8c087f?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Malakh Jibril", role: "Managing Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4182ac2612d9681f48d1063ea5a103579bf403abb016e74c8ff09bd247a66f7a?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Nikhil Pathak", role: "Designing Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e81a7e4937fb1e7a5d34ed1c874755c6ba6cc0f87f8a919356319e77f95982a?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Lalit Kumar", role: "Developer Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/881214917571dc7f1d318f1a0183f7a7547abb44a6b9262d9a894e6a05580f77?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Ankit Chauhan", role: "Developer Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6d0d340e4b44cb770be9454d7915cd1726de205f8d2ab9dcee408044cc358d3?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Pratik Panchal", role: "Content Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4182ac2612d9681f48d1063ea5a103579bf403abb016e74c8ff09bd247a66f7a?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Kumar Sigh", role: "UI Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5182d04697ebd8f3f443349070996511f55b9c508d1214ed888554f251838c9b?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Naveen Kumar", role: "Account Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/edf647bd6e1d2482c1a9ec9aa621850d2f17b44165d5508345ac506f34db7870?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Ajay Singh", role: "Digital Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b24967caa05ea84ca4c7b1cf8330d90adb4f9f02e45cc5699edfe3b138b7cdbc?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Ramesh Sash", role: "Marketing Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1bca4720dffaed665fded616f7e5e892311b628470499277a8bf6c8d84c3079a?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Bishop Das", role: "Quality Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0276278b04a3aa5b03dafc5ce760fefd7d2258a71726f98184f3b49653488435?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Ms. Nisha Jain", role: "Business Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6b98e1b98875eb5ac00ee4ec148961529521fcd86ef5118134c4c3b23959cde?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Ms. Anjali Saren", role: "Qualitative Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f9ad317652b9ce7674e2f83f413df0a13cf715db602748cef1f2c67036384ca?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Daniel Share", role: "AR Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/201bd41b9c633e7b38d3e6e127b5c21858b0edc9010c82bd6e0ed7160b6b9298?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Manu Boose", role: "Strategy Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/06678d4e26ca352874cd211ef7977cc12f260017b984490d6d1eb1b78f4e35a5?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Ms. Lucia Philip", role: "VR Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6275f9b33ca42705b37d30c5b3bdca3bb298afd795c53be4233624c560d17bab?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Thomson Jack", role: "Acquisitions Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/39b418e91277b65c374abe99e428cebbecbf208f8a30658b9c757d2c23649da0?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Thoi John", role: "Project Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/22e65d0742d47bc30c523ccdcf64c856f5d7de5d296d204e60b52c9ae0e4d705?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Bruce Mil", role: "Design Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ad19721216927cf61b0c2196fedad32739a28db831a702318cf851996dfc07c?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Moses Rose", role: "Lead Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6757a3765858c6cca6c4eee81586bfb131b2d0135977050d201e73531b2cac3c?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Ravichandran Singh", role: "Report Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/11b5a1cce33d897f3da6aa69cc4ecc1cff51457d1533e86f115d1e0b9ef4298e?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Jay Singh", role: "Client Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/492063c5c7b0a3d034b1c2c9f09e90ee232cbb428097171f29c4303a98857d48?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Mohan Das", role: "IT Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ad19721216927cf61b0c2196fedad32739a28db831a702318cf851996dfc07c?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Ms. George Rose", role: "Brand Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bba8cd3c515827b32ef3f51d6644280ac6698de19289785a187d9d1ad63b8fa?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Mohammed Akbar", role: "Marketing Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/015f13e1c50d089a1462114653b7721aee413845327a7dcb59dceb7cfd47b528?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Syed Basheer", role: "Content Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/178e7a20e7cabe329cf3b365d9a5b25ae1e628a3d988e3e73294f3c24a2e9d19?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Arjun Das", role: "Design Intern", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba1e2fd7c68a50d9a054f2c5f024aeae83637f4a36363e7b6dbfedbd6b8728e8?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Basker Gokul", role: "Design Intern", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd818468e135158b979ca107e3945116848c4e910590fa401404df5ff077fdb2?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" },
        { name: "Mr. Tejas Das", role: "Legal Partner", image: "https://cdn.builder.io/api/v1/image/assets/TEMP/11b5a1cce33d897f3da6aa69cc4ecc1cff51457d1533e86f115d1e0b9ef4298e?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" }
    ];

    return (
        <>
            <Helmet>
                <title>About Us | Leading Creative Design & Development Agency</title>
                <meta name="description" content="Discover the passion behind our creative design and development agency. Our dedicated team combines innovation and expertise to deliver exceptional digital solutions tailored to elevate your brand."></meta>
                <meta property="og:url" content="https://www.hudbil.com/about-us"></meta>
                <meta name="keywords" content="UI/UX Designing Company in Bangalore, Website Development Agency in Bangalore,Mobile Application Development Company in Bangalore, UI/UX for mobile application Agency in Bangalore, branding designing Company in Bangalore, website designing Company in Bangalore, UI UX development Company in Bangalore, Web Design Company in Bangalore"></meta>
                <meta name="og:description" content="About Us - Originated in 2017, Hudbil Private Limited is today an ISO certified UI/UX designing, website, mobile application and software development company."></meta>
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
                    src="/approach-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover h-[70vh] lg:h-[80vh] w-full fixed z-0"
                    onContextMenu={(e) => e.preventDefault()}
                >
                    <source src="/approach-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <main className='relative z-20'>
                <section className='bg-black py-20'>
                    <div className='md:w-3/5 xl:w-4/5 font-normal text-[2rem] xl:text-[50px] leading-tight text-white px-6 lg:px-16'>
                        Crafting Excellence Through Strategic Steps Every project is a journey. We guide you through a well-defined process, ensuring each step brings you closer to success.
                    </div>
                    <div className="w-full flex items-start justify-end my-16 px-6 lg:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white text-base xl:text-[20px] leading-tight'>
                            <div>Our approach is simple yet effective. We follow a systematic process to deliver the best results. We are always looking for new opportunities to collaborate with businesses and individuals. If you have a project in mind, let's discuss how we can help you achieve your goals.</div>
                            <div>At Hudbil, collaboration is key to every successful project. From discovery to delivery, we work closely with you to bring your vision to life, ensuring open communication and adaptability throughout the process.</div>
                            <div>Our team is dedicated to turning your goals into reality through a thoughtful, client-centered approach. We ensure that every step of the journey is aligned with your objectives, providing results that drive meaningful impact and long-term success</div>
                            <div>
                                <Link to="/contact-us">
                                    <button className="button self-end hover:text-white flex flex-row justify-between px-12 py-3 mx-auto leading-none bg-white text-black gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-base mt-1 '>Book a Call</h1>
                                        <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative my-24 ">
                        <div className="relative">
                            <img className='mx-auto transition duration-500 grayscale hover:grayscale-0' src="./approach-midimg.png" alt="About Us" />
                            <div className="absolute w-full inset-0 pointer-events-none flex justify-center items-center overflow-hidden">
                                <div className="marquee-text-container font-normal text-[1.7rem] uppercase">
                                    <div className="marquee-text text-white">Innovation at your fingertips</div>
                                    <div className="marquee-text text-white">SPARK IGNITING</div>
                                    <div className="marquee-text text-white">BETWEEN AUDIENCES</div>
                                    <div className="marquee-text text-white">BETWEEN BRANDS</div>
                                    <div className="marquee-text text-white">CREATIVE IDEAS</div>
                                    <div className="marquee-text text-white">THAT TURN HEADS</div>
                                    <div className="marquee-text text-white">THAT DRAW EYES</div>
                                    <div className="marquee-text text-white">DISRUPT AND ENGAGE</div>
                                    <div className="marquee-text text-white">Innovation at your fingertips</div>
                                    <div className="marquee-text text-white">SPARK IGNITING</div>
                                    <div className="marquee-text text-white">BETWEEN AUDIENCES</div>
                                    <div className="marquee-text text-white">BETWEEN BRANDS</div>
                                    <div className="marquee-text text-white">CREATIVE IDEAS</div>
                                    <div className="marquee-text text-white">THAT TURN HEADS</div>
                                    <div className="marquee-text text-white">THAT DRAW EYES</div>
                                    <div className="marquee-text text-white">DISRUPT AND ENGAGE</div>
                                    <div className="marquee-text text-white">Innovation at your fingertips</div>
                                    <div className="marquee-text text-white">SPARK IGNITING</div>
                                    <div className="marquee-text text-white">BETWEEN AUDIENCES</div>
                                    <div className="marquee-text text-white">BETWEEN BRANDS</div>
                                    <div className="marquee-text text-white">CREATIVE IDEAS</div>
                                    <div className="marquee-text text-white">THAT TURN HEADS</div>
                                    <div className="marquee-text text-white">THAT DRAW EYES</div>
                                    <div className="marquee-text text-white">DISRUPT AND ENGAGE</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-6 lg:px-16 flex flex-col lg:flex-row items-start justify-between w-full gap-12 xl:gap-0'>
                        <div className='font-normal text-4xl text-white'>Our Tech Stack</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="./approach-point1.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Design & UI/UX Tools</div>
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
                                <div className={`flex flex-col gap-8 md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">We use the latest design tools to create stunning designs and user interfaces.
                                        Like – Figma, Adobe Photoshop, Adobe Illustrator, Adobe After Effects.</div>
                                    <img className='w-fit' src="/approach-1.png" />
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="./approach-point2.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Frontend Technologies</div>
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
                                <div className={`flex flex-col gap-8 md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[1] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">We are always up to date with the latest frontend technologies to create user interfaces ready for the future. </div>
                                    <img className='w-fit' src="/approach-2.png" />
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="./approach-point3.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Backend Technologies</div>
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
                                <div className={`flex flex-col gap-8 md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[2] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Our backend technologies are robust and scalable to handle any kind of projects. Like – Django, Node.js, Express.js, Gin/Gonic</div>
                                    <img className='w-fit' src="/approach-3.png" />
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="./approach-point4.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Database Technologies</div>
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
                                <div className={`flex flex-col gap-8 md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[3] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Versatility is key when it comes to databases. We are capable of handling all kind of data challenges using upto date database technologies. </div>
                                    <img className='w-fit' src="/approach-4.png" />
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="./approach-point5.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Cloud Technologies</div>
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
                                <div className={`flex flex-col gap-8 md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[4] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Cloud and on-prem solutions are our forte. We understand that every project is unique and requires a unique solution, so we are always ready to adapt.</div>
                                    <img className='w-fit' src="/approach-5.png" />
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="./approach-point6.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Web3 Technologies</div>
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
                                <div className={`flex flex-col gap-8 md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[5] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">We are a step ahead in future of the internet and We are ready to help you build your next decentralized application. Like – Solidity, Binance Smart Chain (BSC), Ethereum, Web3.js, Ethers.js</div>
                                    <img className='w-fit' src="/approach-6.png" />
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className='text-[#917D7D] font-normal text-sm py-12 w-full md:w-5/6'>
                                Get in touch to find out how our team enjoys tinkering, most importantly empower your organisation.
                            </div>
                            <Link to="/our-modules">
                                <button className="button self-end flex flex-row justify-between px-12 py-3 mb-4 leading-none hover:bg-white hover:text-black text-white gap-8 rounded-[1000px] max-md:px-5 bg-[#7811A5] transition-all duration-300">
                                    <h1 className='text-base mt-1 '>Know Our Modules</h1>
                                    <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>

                <div id="moving-img" className='bg-black'>
                    <img
                        src="./approach-video-ss.png"
                        className="scale-anm w-full"
                    />
                </div>

                <section className='bg-black py-20'>
                    <div className='md:w-1/2 xl:w-3/4 font-normal text-[2rem] xl:text-[50px] leading-tight text-white px-6 lg:px-16'>
                        A International team of curious represents a mix of experiences, talents, and skills that
                        enrich our collective creativity.
                    </div>
                    <div className="w-full flex items-start justify-end my-16 px-6 lg:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white text-base xl:text-[20px] leading-tight'>
                            <div>Working hand in hand with our clients, our project are consistently awarded and we are
                                proud of that. This means that we are moving in the right direction Founded in 2012, we
                                have quietly scaled from a one-man band to a powerhouse of exceptional developers and
                                designers, growing solely through the power of word of mouth.</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-0 items-start justify-between px-6 lg:px-16 mt-20">
                        <div className='text-white font-normal text-2xl'>Our senior team</div>
                        <div className='w-full lg:w-2/3'>
                            <div>
                                {teamMembers.map((member, index) => (
                                    <div
                                        key={index}
                                        className='flex items-center gap-7 w-full team-member'
                                        ref={el => (teamRefs.current[index] = el)}
                                    >
                                        <div className="w-16 sm:w-14 h-12">
                                            <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                                        </div>
                                        <div className='w-full'>
                                            {index === 0 && <div className='w-full h-[1px] bg-[#6C6C6C]'></div>}
                                            <div className='flex flex-col sm:flex-row items-start gap-5 sm:gap-8 md:gap-28 tracking-wider text-white py-6'>
                                                <div className='w-full sm:w-[27vw] lg:w-[15vw]'>{member.name}</div>
                                                <div>{member.role}</div>
                                            </div>
                                            <div className='w-full h-[1px] bg-[#6C6C6C]'></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link to="/contact-us">
                        <button className="button self-end flex flex-row justify-between px-12 py-3 mt-20 leading-none hover:bg-white hover:text-black ml-auto mr-6 md:mr-16 text-white gap-8 rounded-[1000px] max-md:px-5 bg-[#7811A5] transition-all duration-300">
                            <h1 className='text-base mt-1 '>Get In Touch</h1>
                            <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                        </button>
                    </Link>
                </section>
            </main>
            <ReachUs />
            <Footer />
        </>
    )
}

export default OurApproach