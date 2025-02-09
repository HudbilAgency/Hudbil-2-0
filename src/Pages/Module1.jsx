import React, { useState, useEffect, useRef } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const ProjectBasis = () => {

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
        "What is a Project-Based Engagement Model?",
        "How does the Project-Based Engagement Model differ from a retainer model?",
        "How do you determine the scope and cost of a project?",
        "What happens if the project scope changes during the engagement?",
        "How long does it take to complete a typical project?",
        "Will I have a dedicated project manager?",
        "What types of projects do you specialize in?",
        "How involved will I be in the process?",
        "Can I make changes or revisions during the project?",
        "What happens after the project is completed?",
        "How do you ensure the quality of your work?",
        "Do you offer support after the project is completed?",
        "Can you work with my internal team or other third-party vendors?",
        "How do you handle intellectual property and confidentiality?",
        "What happens if the project goes over budget or behind schedule?",
        "Can I see examples of past projects or case studies?",
        "What do I need to provide to get started on a project?",
        "What makes your company different from other design and development agencies?",
        "What types of projects are ideal for a project-based engagement?",
        "How do you manage changes in project scope?"
    ];


    const dropdownContent = [
        "A project-based engagement model means that we work with you on a defined project with specific goals, timelines, and deliverables. We collaborate closely with you from start to finish, ensuring your vision is realized within an agreed-upon scope and budget.",
        "Unlike a retainer model, where we work with you on an ongoing basis without a set end date, a project-based model is for a fixed scope with clear deliverables and a set timeline. This allows you to focus on a single project at a time, with defined goals and a predictable cost.",
        "The scope and cost are determined based on the specifics of your project, such as complexity, resources needed, timeline, and any particular challenges. After an initial consultation, we will provide you with a detailed proposal that outlines project phases, timelines, and associated costs.",
        "If the scope of the project changes after the initial agreement, we’ll assess the new requirements and provide a revised estimate. Any changes to timelines or costs will be discussed and approved before we proceed. We ensure transparency at every step.",
        "The timeline depends on the project’s complexity and scope. Smaller projects may take a few weeks, while larger, more intricate designs or development projects may take several months. We work with you to set realistic deadlines and keep you updated throughout the process.",
        "Yes! Each project is assigned a dedicated project manager who will be your point of contact throughout the engagement. Your project manager will ensure the project stays on track, meet milestones, and address any issues that may arise during development.",
        "We specialize in a wide range of design and development projects, including but not limited to:|<li>Web and mobile application development</li>|<li>UI/UX design and user experience optimization</li>|<li>Branding and visual design</li>|<li>E-commerce solutions</li>|<li>Custom software development</li>|<li>Digital marketing campaigns</li>",
        "You’ll be involved every step of the way! We prioritize collaboration and communication. You’ll provide feedback during key stages of the project—such as initial designs, wireframes, and prototypes—to ensure we’re on track to meet your vision.",
        "Yes! We include feedback rounds in our process to ensure the project meets your expectations. However, extensive changes outside the original scope may result in adjustments to timelines or costs. We work with you to balance quality, scope, and time.",
        "Once the project is completed, we conduct a final review with you to ensure everything meets your expectations. We also provide documentation and support as needed, and depending on the type of project, we can offer post-launch maintenance or ongoing optimization.",
        "We employ rigorous quality assurance processes throughout the project. From design review to coding standards and testing, we make sure that the work meets both your requirements and industry best practices. You’ll also have opportunities to review deliverables before finalization.",
        "Yes! We offer post-launch support to address any issues that arise after the project goes live. Whether it's debugging, performance optimization, or minor revisions, we’ll help ensure everything functions smoothly after handover.",
        "Absolutely! We’re flexible and can work alongside your internal team or other vendors. Our goal is to integrate seamlessly into your existing workflow and ensure your project is successful, whether we're working independently or in collaboration with other stakeholders.",
        "We take intellectual property and confidentiality seriously. All materials and ideas created during the project are yours. We are happy to sign non-disclosure agreements (NDAs) to protect your proprietary information and ensure that your data is kept secure throughout the project.",
        "We take proactive steps to manage timelines and budgets effectively. If any unforeseen challenges arise, we will immediately notify you and discuss how to proceed. We believe in clear communication and will work with you to minimize delays or extra costs.",
        "Yes! We have a portfolio showcasing our previous projects across various industries. We’d be happy to walk you through relevant case studies to demonstrate how we’ve successfully executed projects similar to yours.",
        "To get started, we’ll need:| <li>A basic overview of your project’s goals</li>|<li>Any existing designs, branding guidelines, or technical requirements</li>|<li>A rough timeline or key deadlines</li>|<li>A budget range (if applicable)</li>|<li>Once we have this information, we can schedule an initial consultation to discuss the project in more detail and determine next steps.</li>",
        "We focus on creating custom, high-quality solutions that are tailored specifically to your needs. Our collaborative, transparent, and flexible approach ensures that we work alongside you to bring your vision to life, and we prioritize clear communication and measurable outcomes throughout the project.",
        "This model suits well-defined projects like website development, app creation, or system upgrades that have clear goals and timelines. ",
        "Scope changes are handled via a formal change request process, ensuring mutual agreement on adjustments to timelines or budgets",
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
                        We believe that every project is unique and deserves a personalized approach. Our Project-Based Engagement Model provides clients with the flexibility, expertise, and dedicated resources needed to achieve their objectives efficiently and effectively. Whether you're working on a short-term initiative or a long-term strategic goal, we're here to ensure your project stays on track, within budget, and delivers real results.
                    </div>

                    <div className='px-6 lg:px-16 mt-24 flex flex-col lg:flex-row items-start justify-between w-full gap-12 xl:gap-0'>
                        <div className='font-normal text-3xl text-white'>Project-Based Engagement Model</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="/module1-pb-1.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Clearly Defined Scope</div>
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
                                    <div className="pt-10">Precise objectives and deliverables ensure project alignment with your business goals.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="/module1-pb-2.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Fixed Budget</div>
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
                                    <div className="pt-10">Pre-agreed costs provide transparency and financial predictability</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="/module1-pb-3.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Time-Bound Delivery</div>
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
                                    <div className="pt-10">Strict adherence to timelines ensures timely project completion.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="flex-shrink-0"><img src="/module1-pb-4.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Dedicated Resources</div>
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
                                    <div className="pt-10">Focused teams deliver superior results by concentrating solely on your project needs.</div>
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
                                    <div>Our experts engage with your team to identify business objectives, challenges, and technical requirements. This phase ensures we fully understand the project's scope.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Requirement Gathering</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(1, true)}
                            onMouseLeave={() => toggleShowDetails(1, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[1] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We craft a detailed project plan, including timelines, milestones, and cost estimates. This roadmap guarantees clarity and sets expectations from the outset.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Proposal & Planning</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(2, true)}
                            onMouseLeave={() => toggleShowDetails(2, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[2] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Leveraging agile methodologies, our dedicated team brings your vision to life. We maintain regular updates and feedback cycles to ensure alignment with your goals.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Execution & Development</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(3, true)}
                            onMouseLeave={() => toggleShowDetails(3, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[3] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Upon completion, we deliver the project along with comprehensive documentation. Our team ensures a seamless handover and provides post-delivery support to guarantee success.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Delivery & Handover</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(4, true)}
                            onMouseLeave={() => toggleShowDetails(4, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[4] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Our seasoned professionals deliver high-quality, tailor-made solutions that address your unique business challenges.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Proven Expertise</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(5, true)}
                            onMouseLeave={() => toggleShowDetails(5, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[5] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>From planning to delivery, we maintain open communication channels, keeping you informed at every stage of the project lifecycle.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Transparent Communication</div>
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
                            <div>Here are answers to the most common questions about Project Basis undertaking.</div>
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

export default ProjectBasis