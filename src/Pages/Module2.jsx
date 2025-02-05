import React, { useState, useEffect, useRef } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const MonthlyRetainer = () => {

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
        "What is a Monthly Retainer Engagement Model?",
        "What services are included in the retainer model?",
        "How does the retainer model work?",
        "How is the cost determined?",
        "How many hours do I get per month?",
        "What happens if I need more hours than my package allows?",
        "Can I change the services or hours included in the retainer at any time?",
        "How often will I receive updates or reports?",
        "What if I only need design or development work sporadically?",
        "How do you ensure quality and consistency?",
        "Can I cancel the retainer at any time?",
        "How is the retainer billed?",
        "How do you prioritize my requests?",
        "Will I have a dedicated point of contact?",
        "How do you handle urgent requests or emergencies?",
        "Is the retainer model right for my business?",
        "Do you offer any guarantees with the retainer model?",
        "Can I combine a retainer with one-off projects?",
        "work with my internal team or other contractors?",
        "How do I get started with a monthly retainer?",
    ];

    const dropdownContent = [
        "A Monthly Retainer Engagement Model is a flexible, ongoing partnership where you pay a fixed monthly fee for continuous design, development, and strategic services. Rather than working on one-off projects, we collaborate with you over the long term, providing regular updates, maintenance, and improvements as your needs evolve.",
        "Our retainer model offers a range of services, including:|<li><strong>Web & Mobile App Development:</strong> Ongoing feature development, updates, and bug fixes.</li>|<li><strong>UI/UX Design:</strong> Continuous design iterations, user interface improvements, and optimization.</li>|<li><strong>Branding & Graphic Design:</strong> Ongoing design work for marketing materials, banners, logos, etc.</li>|<li><strong>Digital Strategy & Marketing:</strong> SEO, social media campaigns, content marketing, and more.</li>|<li><strong>Consulting & Product Strategy:</strong> Regular business and product consulting sessions.</li>|<li><strong>Maintenance & Support:</strong> Regular maintenance, troubleshooting, and technical support.",
        "We begin by discussing your goals, priorities, and ongoing needs. Based on that, we create a custom retainer agreement with clear deliverables each month. You’ll receive priority support, regular updates, and continuous strategic consultation. Each month, we execute the agreed-upon tasks, track progress, and adjust as necessary.",
        "The cost of a monthly retainer is based on the scope of services required, the number of hours needed, and the complexity of your ongoing needs. We offer different tiers of retainer packages to fit various budgets and requirements. Once we understand the full scope of work, we provide a clear, fixed monthly price.",
        "The number of hours you receive depends on the retainer package you select. We can also customize the hours based on your specific needs. Typical packages include:|<li><strong>Basic:</strong> Up to 20 hours/month</li>|<li><strong>Standard:</strong> Up to 40 hours/month</li>|<li><strong>Premium:</strong> 80+ hours/month</li>",
        "If you need additional hours beyond your monthly package, we’ll notify you beforehand. You can either approve the additional work or adjust priorities for the month. We offer flexible options to ensure you receive the support you need, even if it goes slightly beyond the initial scope.",
        "Yes! The retainer model is designed to be flexible. If your needs evolve over time, we can adjust the services, hours, or budget accordingly. We’ll review the engagement periodically to ensure it continues to align with your business goals.",
        "You’ll receive regular updates and monthly reports detailing the work completed, ongoing tasks, and any new goals. We’ll schedule a monthly strategy session to review progress, discuss adjustments, and plan for the next phase. Communication is key, and you’ll always be in the loop.",
        "The retainer model is ideal for businesses with ongoing needs but it can also work for more sporadic requirements. If you only need occasional updates or fixes, a retainer may still provide value by keeping your design and development team available when needed, reducing wait times.",
        "We assign a dedicated project manager and a core team to your account, ensuring continuity and consistency across all work. Our team becomes familiar with your brand, goals, and objectives, allowing us to provide high-quality work that aligns with your vision. We also employ thorough review and quality assurance processes to ensure every deliverable meets your standards.",
        "We understand that business needs can change. While we typically ask for a minimum commitment (e.g., 3-6 months) to ensure stability and effective collaboration, you can cancel or adjust the retainer with proper notice, as defined in our agreement. We’ll work with you to ensure a smooth transition.",
        "The retainer is typically billed on a monthly basis, and payment is due at the start of each month. We provide detailed invoices that break down the services, hours, and deliverables included, ensuring full transparency.",
        "As a retainer client, you’ll receive priority access to our team. We prioritize your requests based on urgency, scope, and strategic alignment with your business goals. Regular communication and monthly planning sessions help us stay aligned on what needs to be addressed first.",
        "Yes! Each retainer client is assigned a dedicated project manager who will act as your main point of contact. Your project manager will coordinate the work, ensure smooth communication, and keep everything on track. You'll also have access to our broader team of experts as needed.",
        "For urgent requests or emergencies, you’ll receive priority support as part of the retainer. We’ll work with you to resolve critical issues as quickly as possible, ensuring minimal disruption to your operations. Retainer clients receive faster turnaround times and immediate attention for time-sensitive matters.",
        "If your business requires ongoing design, development, or strategic services, the retainer model could be an ideal fit. It’s particularly beneficial if you’re looking for consistent, long-term collaboration rather than one-off projects. A retainer ensures you have a dedicated team ready to support your needs as they evolve.",
        "While we cannot guarantee specific outcomes, we do guarantee our commitment to delivering high-quality work that aligns with your goals. Our team’s focus is on providing continuous value, adapting to your changing needs, and helping you achieve measurable success over time.",
        "Yes! Many of our clients combine their retainer with occasional one-off projects. This approach allows you to have ongoing support while also tackling specific initiatives or larger projects as needed. We’ll work with you to determine how to best allocate resources for both types of work.",
        "Yes! We can seamlessly collaborate with your internal team or other contractors you may be working with. Whether we’re supporting a larger team or handling specific aspects of a project, we adapt to fit into your workflow and help achieve your goals.",
        "Getting started is easy! Simply reach out to us for a consultation. We’ll discuss your goals, assess your needs, and create a custom retainer plan tailored to your business. Once we agree on the terms, we’ll set up an initial kick-off meeting and begin working on your ongoing projects.",
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
                        A Monthly Retainer Engagement Model provides you with ongoing support and a dedicated team of professionals who are available to meet your design, development, and strategy needs as they arise. Instead of working on isolated projects, our retainer model ensures a consistent, flexible partnership that adapts to your changing business requirements.
                    </div>

                    <div className='px-6 lg:px-16 mt-24 flex flex-col lg:flex-row items-start justify-between w-full gap-12 xl:gap-0'>
                        <div className='font-normal text-3xl text-white'>Monthly Retainer Engagement Model</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-1.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Ongoing Support</div>
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
                                    <div className="pt-10">Continuous access to our expertise for long-term success and growth.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img className='h-8 md:h-12' src="/modules-pb-2.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Flexible Resource Allocation</div>
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
                                    <div className="pt-10">Adaptable services to align with your evolving priorities.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-3.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Cost-Effective</div>
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
                                    <div className="pt-10">Predictable monthly fees enable efficient budget management.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-4.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Priority Service</div>
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
                                    <div className="pt-10">Retainer clients enjoy prioritized attention and expedited response times.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className='text-[#917D7D] font-normal text-sm py-12 w-full md:w-5/6'>
                                Get the flexibility and expertise you need to achieve your project goals, on time and within budget.
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
                                    <div>We collaborate with you to identify your business goals and determine the services required on a monthly basis. This ensures alignment with your strategic priorities.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Define Scope and Objectives</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(1, true)}
                            onMouseLeave={() => toggleShowDetails(1, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[1] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Based on the defined scope, we establish a retainer agreement with clear deliverables, timelines, and budget. A detailed plan ensures seamless execution.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Agreement and Planning</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(2, true)}
                            onMouseLeave={() => toggleShowDetails(2, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[2] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Our team works consistently on the agreed tasks, providing regular updates and progress reports to keep you informed and ensure transparency.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Monthly Execution and Reporting</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(3, true)}
                            onMouseLeave={() => toggleShowDetails(3, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[3] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We conduct periodic reviews to assess progress and refine the scope of work, ensuring that our efforts align with your changing business needs.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Review and Adjust</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(4, true)}
                            onMouseLeave={() => toggleShowDetails(4, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[4] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Our skilled professionals are committed to providing top-notch services tailored to your business objectives.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Dedicated Expertise</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(5, true)}
                            onMouseLeave={() => toggleShowDetails(5, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[5] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>With detailed monthly reports and clear communication, we ensure you’re always aware of the progress and impact of our efforts.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Scalable Services</div>
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
                        <div className='md:w-1/2 lg:w-2/3 flex flex-col items-end text-white text-base xl:text-[20px] leading-tight'>
                            <div>Here are answers to the most common questions about Monthly Retainer undertaking.</div>
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

export default MonthlyRetainer