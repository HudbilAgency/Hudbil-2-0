import React, { useState, useEffect, useRef } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const ODC = () => {

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
        "What is an Offshore Development Centre (ODC)?",
        "How does the ODC model work?",
        "What types of projects are suitable for an Offshore Development Centre?",
        "How do I manage an offshore team?",
        "What are the key benefits of using an Offshore Development Centre?",
        "How do I ensure the quality of work from an offshore team?",
        "Will the offshore team work exclusively on my projects?",
        "Can I interview and select the members of my offshore team?",
        "How do you ensure seamless communication between the offshore team and my in-house team?",
        "What happens if there are time zone differences?",
        "How do you handle security and confidentiality?",
        "Can I scale my offshore team as my project grows?",
        "What if I have an urgent requirement or deadline?",
        "How do you ensure the offshore team aligns with my company culture?",
        "How do you handle project management and reporting?",
        "What happens if the offshore team doesn't meet expectations?",
        "Do you provide post-development support?",
        "What is the cost of setting up an Offshore Development Centre?",
        "How do I get started with setting up an Offshore Development Centre?",
        "Can I terminate the contract if the offshore team isn’t performing?",
    ];


    const dropdownContent = [
        "An Offshore Development Centre (ODC) is a dedicated, remote team of design and development experts who work on your projects from an offshore location. This team operates as an extension of your own company, handling your development tasks while you focus on core business operations. The ODC model allows you to scale your resources, reduce costs, and accelerate time-to-market.",
        "The ODC model involves building a dedicated team of developers, designers, and other tech professionals who work exclusively on your projects. This team operates under your management but with us providing the infrastructure, recruitment, and support. You have full control over project direction, communication, and deadlines, while we handle the day-to-day operations of the offshore team.",
        "It’s particularly beneficial for businesses that need scalable, cost-effective solutions with high-quality standards. ODCs are perfect for long-term projects or continuous development needs such as:|<li>Web and mobile app development</li>|<li>Custom software development</li>|<li>UI/UX design and prototyping</li>|<li>E-commerce platforms</li>|<li>Ongoing maintenance and support</li>|<li>Quality assurance and testing</li>",
        "Managing an offshore team is made easy with clear communication and the right tools. You’ll work closely with a dedicated project manager who acts as your point of contact and helps coordinate tasks, timelines, and team performance. We use collaboration tools such as Slack, Jira, Trello, and Zoom to ensure smooth communication, so you can manage the team as if they were in your office.",
        "<li><strong>Cost Efficiency:</strong> Save on hiring, training, and infrastructure costs. Offshore teams typically cost less than in-house teams in higher-cost regions.</li>|<li><strong>Access to Global Talent:</strong> Tap into a diverse pool of skilled professionals with expertise in various technologies.</li>|<li><strong>Scalability:</strong> Easily scale your team up or down based on your project needs, ensuring flexibility and quick resource allocation.</li>|<li><strong>Time Zone Advantage:</strong> If needed, offshore teams can work in different time zones, allowing for round-the-clock development and faster turnaround times.</li>|<li><strong>Focus on Core Business:</strong> Offload technical work and focus on what you do best, whether it’s strategy, marketing, or client acquisition.</li>",
        "Quality is a priority in our Offshore Development Centre. We implement strict quality control processes, adhere to coding standards, and follow agile methodologies to ensure high-quality outputs. Regular code reviews, testing, and performance monitoring ensure the end product meets your expectations. Additionally, we keep you informed with regular updates and review cycles throughout the development process.",
        "Yes, your offshore team will be dedicated solely to your projects. You can scale the team size as per your requirements, and they will only work on tasks related to your business, ensuring full focus and uninterrupted service.",
        "Absolutely! You have full control over the hiring process. Once we understand your project requirements, we will source and present candidates with the skills you need. You can then interview these candidates and select the team members who best fit your business needs and culture.",
        "We prioritize open and consistent communication. We’ll set up regular meetings (e.g., daily standups, weekly check-ins) to ensure smooth collaboration. You’ll also have a dedicated project manager who acts as the liaison between your team and the offshore team. We use a variety of collaboration tools such as Slack, Jira, Trello, and Zoom to ensure smooth workflows and real-time updates.",
        "Our team works flexibly across different time zones to ensure continuous development. Depending on your requirements, we can arrange for overlapping work hours or even operate during your office hours to ensure quick responses and project updates. The flexibility of the ODC model allows you to take advantage of time zone differences to speed up development.",
        "We take data security and confidentiality seriously. We sign Non-Disclosure Agreements (NDAs) with all offshore team members, ensuring your project and business information is protected. Additionally, we implement strict security measures and follow industry best practices to secure your data, including secure communication channels, VPNs, and regular security audits.",
        "Yes! One of the biggest advantages of the ODC model is the flexibility to scale your team according to project needs. Whether you need additional developers, designers, or specialists, we can quickly add more resources to your team. Similarly, if the scope of your project reduces, we can scale down the team to match your new requirements.",
        "We understand that deadlines are important. Our offshore development team is equipped to handle urgent projects and deadlines. If you have critical timelines, we will prioritize your tasks and align the team accordingly to ensure timely delivery without compromising quality.",
        "We work with you to understand your company’s culture, communication style, and expectations. When assembling your offshore team, we make sure to align team members who will fit well with your working style. Regular communication and collaboration ensure that everyone stays on the same page and the team becomes an extension of your business.",
        "You’ll have a dedicated project manager who will oversee your offshore team, ensuring tasks are completed on time and within budget. We provide regular progress reports, status updates, and milestone tracking to keep you informed about the project’s progress. You’ll have full visibility into timelines, deliverables, and any potential issues, allowing you to manage and adjust accordingly.",
        "If the offshore team doesn’t meet your expectations, we will immediately address the issue, whether it’s a skills gap, communication problem, or performance issue. Our goal is to ensure your satisfaction, and if needed, we can adjust the team, provide additional training, or pivot the project strategy to meet your requirements.",
        "Yes, we offer ongoing maintenance and support services after the development is complete. Whether you need to fix bugs, add features, or ensure the platform remains up-to-date, our offshore team is available for long-term support. This can be handled through a retainer or as per specific project needs.",
        "The cost of setting up an Offshore Development Centre depends on several factors, including the size of the team, the skill sets required, and the duration of the engagement. We work with you to define your needs and provide a customized pricing structure that offers maximum value for your budget.",
        "Getting started is simple! Reach out to us for an initial consultation where we’ll discuss your project goals, requirements, and desired team structure. From there, we’ll propose a tailored solution and help you set up the right team for your business. Our team will guide you through every step of the process to ensure a seamless experience.",
        "Yes, you can terminate the contract if the offshore team isn’t performing to your expectations. We provide flexible terms, and we aim for the highest level of client satisfaction. If you need to make adjustments, we will work with you to ensure that you have a positive experience.",
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
                        An Offshore Development Centre (ODC) is a dedicated team of experts working remotely from our offshore location, seamlessly integrated with your business to handle all aspects of your design and development needs. This model provides you with access to high-quality talent at a fraction of the cost, allowing you to scale quickly, enhance productivity, and reduce operational overhead.
                    </div>

                    <div className='px-6 lg:px-16 mt-24 flex flex-col lg:flex-row items-start justify-between w-full gap-12 xl:gap-0'>
                        <div className='font-normal text-3xl text-white'>ODC Engagement Model</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-1.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Cost Efficiency</div>
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
                                    <div className="pt-10">Save significantly on operational and development costs by leveraging offshore resources.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img className='h-8 md:h-12' src="/modules-pb-2.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Access to Global Talent</div>
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
                                    <div className="pt-10">Gain access to a diverse pool of skilled professionals to accelerate your projects.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-3.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Dedicated Team</div>
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
                                    <div className="pt-10">Enjoy a fully committed team working exclusively on your projects.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-4.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Scalability</div>
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
                                    <div className="pt-10">Flexibly scale your resources up or down based on project demands.</div>
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
                                    <div>We begin by understanding your project goals, resource needs, and preferred technologies to build a tailored offshore team.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Define Requirements</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(1, true)}
                            onMouseLeave={() => toggleShowDetails(1, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[1] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Our recruitment experts identify and onboard skilled professionals who align with your specific requirements, ensuring a seamless setup.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Team Selection and Setup</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(2, true)}
                            onMouseLeave={() => toggleShowDetails(2, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[2] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>The offshore team operates as an extension of your in-house team, collaborating closely to ensure smooth project execution and communication.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Collaboration and Execution</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(3, true)}
                            onMouseLeave={() => toggleShowDetails(3, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[3] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We provide continuous management, tracking progress, and optimizing workflows to ensure your offshore team delivers exceptional results.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Ongoing Management and Optimization</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(4, true)}
                            onMouseLeave={() => toggleShowDetails(4, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[4] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We specialize in building dedicated offshore teams with expertise in various domains, ensuring top-notch performance and quality.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Experienced Offshore Teams</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(5, true)}
                            onMouseLeave={() => toggleShowDetails(5, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[5] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Our teams work in close collaboration with your in-house staff, maintaining transparency and effective communication across time zones.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Seamless Communication</div>
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
                        <div className='md:w-1/2 lg:w-3/4 xl:w-4/5 flex flex-col items-end text-white text-base xl:text-[20px] leading-tight'>
                            <div>Here are answers to the most common questions about Offshore Development Center undertaking.</div>
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

export default ODC