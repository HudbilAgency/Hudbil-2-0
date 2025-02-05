import React, { useState, useEffect, useRef } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Consultation = () => {

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

    const [dropdownStates2, setDropdownStates2] = useState(Array(20).fill(false));

    const toggleDropdown2 = (index) => {
        const updatedStates = dropdownStates2.map((state, i) => (i === index ? !state : state));
        setDropdownStates2(updatedStates);
    };

    const dropdownTitles = [
        "What is the Consultation Engagement Model?",
        "How does the consultation process work?",
        "What kind of services are included in the consultation?",
        "Do I need to commit to a long-term contract for consultation?",
        "How long does a consultation last?",
        "What’s included in a typical consultation session?",
        "How do I know if a consultation is the right fit for my business?",
        "Can I book a consultation for ongoing needs or is it only for one-time sessions?",
        "How do you determine pricing for consultation services?",
        "Will I get a written summary of the consultation?",
        "Can you help me implement the advice provided during a consultation?",
        "Do I need to prepare anything for the consultation?",
        "How do I schedule a consultation?",
        "Can I schedule a consultation if I’m not ready to move forward with a project?",
        "Will the consultant be an expert in my industry?",
        "How do I get the most value from my consultation?",
        "What happens if I need more consultations after the initial one?",
        "Do you offer consultations for specific tools or platforms?",
        "Can you help with ongoing support after the consultation?",
        "Do you offer remote consultations?",
    ];


    const dropdownContent = [
        "The Consultation Engagement Model provides businesses with expert advice, strategic guidance, and tailored solutions for specific design, development, and digital challenges. Rather than committing to long-term projects or retainer models, our consultation services offer flexibility for businesses seeking expert support on a short-term or as-needed basis.",
        "The process is simple and starts with an initial, no-obligation consultation where we discuss your needs, goals, and challenges. After understanding your requirements, we provide actionable recommendations and a tailored strategy. You can choose to continue with further consultations or implement the advice independently.",
        "We offer a wide range of consultation services, including:|<li><strong>UI/UX Design:</strong> Guidance on improving user interfaces, experience design, and usability.</li>|<li><strong>Web & Mobile App Development:</strong> Recommendations on technology stack, architecture, and best practices.</li>|<li><strong>Branding & Digital Strategy:</strong> Insights into brand positioning, messaging, and marketing strategies.</li>|<li><strong>E-commerce Solutions:</strong> Advice on optimizing your e-commerce platform, improving user journey, and increasing conversions.|<li><strong>Product Strategy:</strong> Help with product roadmap planning, feature prioritization, and go-to-market strategies.</li>|<li><strong>Tech & Platform Optimization:</strong> Tips for improving platform performance, security, and scalability.</li>",
        "No, our Consultation Engagement Model is flexible. You can book single-session consultations or opt for ongoing support depending on your needs. There is no long-term commitment, so you have the flexibility to get advice as required.",
        "The duration of each consultation depends on the scope of your needs. Typically, sessions last between 1 to 2 hours, but more extensive consultations can be scheduled if required. We’ll always tailor the length of the session to suit the complexity of your issue.",
        "Each session includes:|<li>A thorough understanding of your current situation or challenge.</li>|<li>Expert advice and best practices tailored to your specific problem.</li>|<li>Actionable steps and strategies to implement.</li>|<li>Follow-up recommendations and resources for continued improvement.</li>|<li>An opportunity for you to ask any questions and clarify any doubts.</li>",
        "If you're unsure, we can help assess whether a consultation is the right fit during our free initial consultation. The consultation model is ideal if:|<li>You need expert advice on a particular project, challenge, or area of growth.</li>|<li>You’re unsure about the direction of your design or development project and need professional input.</li>|<li>You want to optimize or improve existing designs, systems, or digital strategies.</li>|<li>You prefer expert guidance on a short-term basis rather than committing to large projects.</li>",
        "Our consultation model is flexible, allowing you to book both one-time consultations or ongoing sessions. If you need continuous guidance, we can create a custom plan for regular consultations, ensuring that you receive the ongoing support necessary to drive your business forward.",
        "Consultation pricing is based on the scope and duration of the session. Pricing is always transparent, and we discuss fees upfront before beginning any consultation work. We offer:|<li><strong>Hourly Rate:</strong> Ideal for quick advice or single-topic consultations.</li>|<li><strong>Project-Based Consultation:</strong> Custom pricing for more in-depth consultations, including a comprehensive strategy and actionable plan.</li>|<li><strong>Package Deals:</strong> For businesses looking for multiple sessions or ongoing consulting, we offer custom packages that provide better value.</li>",
        "Yes! After each consultation session, we provide a written summary of the key points, recommendations, and actionable steps discussed. This ensures you have a clear roadmap of what to do next and can reference our advice as you move forward.",
        "While the Consultation Engagement Model focuses on providing expert advice and strategy, we also offer implementation support if needed. If you choose to move forward with the execution of the recommendations, we can discuss separate engagement models (e.g., project-based or retainer) to assist you with the implementation phase.",
        "It’s helpful if you come prepared with a brief overview of your business, current challenges, or specific areas where you need advice. For example, if you need UX/UI design consultation, having user feedback or current design files would be beneficial. During the initial consultation, we’ll guide you on what to bring to ensure you get the most out of your session.",
        "Scheduling a consultation is easy! You can book directly through our website using our online booking system, or contact us via phone or email. We'll discuss your needs and schedule a time that works best for you.",
        "Absolutely! Our consultations are perfect even if you're in the early stages of planning or research. We can help you assess your options, evaluate the feasibility of your ideas, and guide you on next steps—whether you’re ready to start a project or just need expert input to make an informed decision.",
        "Yes! Our consultants come from diverse backgrounds and have extensive experience across multiple industries. We match you with a consultant who has the relevant expertise for your specific challenge, ensuring you get the best advice for your business.",
        "To get the most out of your consultation:|<li>Be clear about your goals and challenges upfront.</li>|<li>Ask questions and be open to suggestions and new perspectives.</li>|<li>Take notes and ask for clarification on any points that are unclear.</li>|<li>Follow through with the action steps and strategies provided after the consultation.</li>",
        "We’re happy to schedule additional consultations if you need further assistance or have new challenges to address. Whether you want a follow-up session or need ongoing advice, we can create a customized plan to support your evolving needs.",
        "Yes, we offer specialized consultations for various design, development, and digital tools or platforms. Whether you need advice on content management systems (CMS), mobile app frameworks, or design tools like Figma or Adobe XD, we can guide you through best practices, optimization, and troubleshooting.",
        "While the consultation model is typically for providing strategic advice, we offer the option to continue working together through other engagement models, such as project-based work, retainers, or implementation support, if needed.",
        "Yes, all our consultations can be conducted remotely via video calls, phone, or screen-sharing sessions. This allows us to work with clients worldwide, providing flexibility in scheduling and accessibility.",
    ];

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
                    We start with a free introductory consultation to understand your business, challenges, and goals. During this session, we discuss your objectives and determine how we can best assist you. There is no obligation—just an open discussion of your needs.
                    </div>

                    <div className='px-6 lg:px-16 mt-24 flex flex-col lg:flex-row items-start justify-between w-full gap-12 xl:gap-0'>
                        <div className='font-normal text-3xl text-white'>Consultation Engagement Model</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-1.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Specialized Expertise</div>
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
                                <div className={`flex md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Access to industry experts for actionable insights and innovative strategies.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img className='h-8 md:h-12' src="/modules-pb-2.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Objective Analysis</div>
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
                                <div className={`flex md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[1] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Unbiased assessments to identify opportunities and challenges.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-3.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Tailored Solutions</div>
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
                                <div className={`flex md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[2] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Customized recommendations that align with your unique business needs.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-4.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Cost-Effective</div>
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
                                <div className={`flex md:mr-20 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[3] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="pt-10">Engage experienced consultants without the overhead of full-time staff.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className='text-[#917D7D] font-normal text-sm py-12 w-full md:w-5/6'>
                                Get in touch to find out how our team enjoys tinkering, most importantly empower your organisation.
                            </div>
                            <div className='w-fit'>
                                <Link to="/contact-us">
                                    <button className="button self-end flex flex-row justify-between px-12 py-3 mb-4 leading-none hover:bg-white hover:text-black text-white gap-8 rounded-[1000px] max-md:px-5 bg-[#7811A5] transition-all duration-300">
                                        <h1 className='text-base mt-1 '>Start Your Project today</h1>
                                        <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='px-6 lg:px-16 pt-8 pb-24 bg-black'>

                    <div className='w-full flex items-center justify-between flex-col lg:flex-row gap-12 lg:gap-6 mb-20 text-white'>
                        <div className='text-[2.5rem]'>How It Works</div>
                        <div className='w-full lg:w-1/2 lg:text-right'>A step-by-step approach to delivering tailored solutions with precision and efficiency.</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 text-white text-4xl font-normal">

                        <div onMouseEnter={() => toggleShowDetails(0, true)}
                            onMouseLeave={() => toggleShowDetails(0, false)}
                            className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[0] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Our consultation begins with a comprehensive review of your business goals, challenges, and current processes to identify areas of improvement.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Initial Assessment</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(1, true)}
                            onMouseLeave={() => toggleShowDetails(1, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[1] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We craft a customized strategy based on your needs, incorporating data-driven insights and best practices to achieve your objectives.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Strategy Development</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(2, true)}
                            onMouseLeave={() => toggleShowDetails(2, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[2] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Detailed recommendations and a clear action plan are provided to address your challenges and unlock growth opportunities.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Recommendations & Action Plan</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(3, true)}
                            onMouseLeave={() => toggleShowDetails(3, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[3] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Choose to continue working with our experts for implementation support, ensuring successful execution of the proposed strategies.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Ongoing Support</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(4, true)}
                            onMouseLeave={() => toggleShowDetails(4, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[4] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Our consultants bring years of experience across industries, offering practical advice that delivers results.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Experienced Advisors</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(5, true)}
                            onMouseLeave={() => toggleShowDetails(5, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[5] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Every recommendation is backed by thorough research and analysis, ensuring informed decision-making.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Data-Driven Strategies</div>
                            )}
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
                    <div className='md:w-3/5 xl:w-4/5 font-normal text-[2rem] xl:text-[50px] leading-tight text-white px-6 lg:px-16'>
                        FAQ’S
                    </div>
                    <div className="w-full flex items-start justify-end mt-16 mb-12 px-6 lg:px-16">
                        <div className='md:w-1/2 lg:w-3/5 flex flex-col items-end text-white text-base xl:text-[20px] leading-tight'>
                            <div>Here are answers to the most common questions about Consultation undertaking.</div>
                        </div>
                    </div>

                    <div className='mx-6 lg:mx-16 text-white py-6 flex items-start justify-end'>
                        <div className='w-full md:w-4/5 xl:w-3/4 2xl:w-[70%] flex flex-col'>
                            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
                            {dropdownTitles.map((title, index) => (
                                <div key={index}>

                                    <div className="py-8 flex flex-col toggle-point w-full">
                                        <div className="flex items-start xl:items-center justify-between gap-8 w-full">
                                            <div className="flex items-start justify-between gap-8 w-full">
                                                <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8] text-base md:text-[20px]'>{index + 1}</div>
                                                <div className="font-normal text-base md:text-[20px] leading-9 w-5/6 md:w-full">{title}</div>
                                            </div>
                                            <div onClick={() => toggleDropdown2(index)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`transition-transform duration-300 ${dropdownStates2[index] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                                        }`}
                                                >
                                                    <rect width="24" height="24" rx="12" fill="#7811A5" />
                                                    <rect x="7" y="11" width="10" height="2" fill="white" />
                                                    {!dropdownStates2[index] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={`flex items-end justify-end gap-6 w-full overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="text-base pt-10 w-full md:mr-20 md:ml-[71px]">
                                                {dropdownContent[index % dropdownContent.length]
                                                    .split('|')
                                                    .map((line, i) => {
                                                        if (line.includes("<li>")) {
                                                            return (
                                                                <ul key={i} className="list-disc pl-8 mt-4">
                                                                    <li dangerouslySetInnerHTML={{ __html: line.replace(/<li>|<\/li>/g, "") }} />
                                                                </ul>
                                                            );
                                                        } else if (line.includes("<strong>")) {
                                                            return (
                                                                <p key={i} className="whitespace-pre-line">
                                                                    <strong dangerouslySetInnerHTML={{ __html: line.replace(/<strong>|<\/strong>/g, "") }} />
                                                                </p>
                                                            );
                                                        } else {
                                                            return (
                                                                <p key={i} className="whitespace-pre-line">{line}</p>
                                                            );
                                                        }
                                                    })}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <ReachUs />
            <Footer />
        </>
    )
}

export default Consultation