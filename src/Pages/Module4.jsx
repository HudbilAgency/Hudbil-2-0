import React, { useState, useEffect, useRef } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const WhiteLabelling = () => {

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
        "What is white labeling in design and development services?",
        "How does the white labeling process work?",
        "Can I offer your services to my clients as my own?",
        "Do my clients know that you are involved in the project?",
        "Will you interact with my clients directly?",
        "What services can I white label?",
        "How do I ensure the white-label process goes smoothly?",
        "Can I offer your white-label services on an ongoing basis?",
        "How is pricing structured for white-label services?",
        "Can I customize the work you do for my clients?",
        "Do you provide support after the project is delivered?",
        "How do I manage multiple white-label projects at once?",
        "Can I include my branding in the deliverables?",
        "What if I need revisions or adjustments after the work is delivered?",
        "Will you sign an NDA (Non-Disclosure Agreement) for my projects?",
        "How do I get started with white-labeling services?",
        "Do you work with all types of businesses or only agencies?",
        "What happens if I want to stop white-labeling services in the future?",
        "Will my clients know if I stop working with you?",
        "Can I get a sample of your work before committing?",
    ];


    const dropdownContent = [
        "White labeling in design and development means that we provide our design and development services to you under your brand. You offer the services to your clients as if they came from your agency, while we work behind the scenes to deliver high-quality solutions. Your clients will never know we’re involved, and everything is branded with your agency’s name.",
        "Once we establish a partnership, we handle the design and development work according to your specifications and guidelines. We deliver the final product with your branding, and you manage the client relationship, communication, and project delivery. We ensure seamless integration, keeping everything aligned with your agency’s standards.",
        "Yes, that’s the essence of white labeling. You can offer our design and development services to your clients under your brand, without them knowing that we are the team behind the scenes. This allows you to expand your service offerings without having to invest in additional resources or expertise.",
        "No, your clients will never know we’re involved. All communications, deliverables, and results will come from your agency, and we will maintain a white-label relationship. We are your invisible partner, working behind the scenes to ensure top-quality results.",
        "No, we do not interact directly with your clients unless you specifically request it. You will remain the primary point of contact for your clients. We only communicate with you to provide progress updates, share deliverables, and collaborate on the details.",
        "We offer a wide range of design and development services that can be fully white-labeled, including:|<li><strong>Web Design and Development: Custom websites, landing pages, and web applications.</li>|<li><strong>Mobile App Development:</strong> Native and cross-platform mobile apps.</li>|<li><strong>UI/UX Design:</strong> Wireframes, prototypes, user research, and interface design.</li>|<li><strong>Branding and Graphic Design:</strong> Logos, branding guidelines, and marketing assets.</li>|<li><strong>E-commerce Solutions:</strong> Custom e-commerce platforms, payment integration, and product management.</li>|<li><strong>Software Development:</strong> Custom software solutions, CRM systems, internal tools.</li>|<li><strong>SEO and Digital Marketing:</strong> Website optimization, content strategies, and online campaigns.</li>",
        "To ensure a smooth process, we work closely with you during project planning to understand your needs, brand guidelines, and client expectations. Regular communication throughout the project ensures the work aligns with your standards. We’ll also provide progress updates and draft reviews to make sure everything meets your requirements before delivery.",
        "Yes! Our white-label model is flexible, and you can engage with us for one-time projects or ongoing collaborations. Many agencies use our white-label services on a retainer or project-based model, depending on their workload and client demands.",
        "Pricing is generally based on the scope of work and the specific services you require. We’ll work with you to understand your needs and offer a tailored pricing structure that fits your business. We offer several models:|<li><strong>Hourly Rate:</strong> For smaller projects or on-demand work.</li>|<li><strong>Project-Based Pricing:</strong> Fixed prices for specific, clearly defined projects.</li>|<li><strong>Retainer Model:</strong> A monthly fee for ongoing, long-term collaborations.</li>",
        "Absolutely! All of our work is fully customizable to meet your specific needs. We collaborate with you closely to ensure the work aligns with your vision, your client's requirements, and your brand identity. We’re here to bring your ideas to life with our technical expertise and creative input.",
        "Yes, we offer post-launch support for any updates, fixes, or additional features that your clients may require. Whether it's ongoing maintenance, bug fixes, or adding new functionality, we ensure your clients receive excellent support, and you stay in control of the client relationship.",
        "We streamline the process by providing clear timelines, regular progress reports, and a direct communication channel with our project management team. This helps you manage multiple projects without getting overwhelmed, and ensures everything stays on track. We can handle multiple projects simultaneously to meet your deadlines and ensure consistent quality.",
        "Yes! We make sure that all deliverables, including websites, apps, and design assets, are fully branded with your logo, colors, and brand guidelines. We’ll ensure that the work aligns perfectly with your agency’s aesthetic and that it looks as though it was developed entirely by your team.",
        "We offer revision rounds as part of our white-label service. If you or your clients require adjustments, we will work with you to make the necessary changes until the deliverables meet your satisfaction. We’re committed to providing high-quality work, and our team is available to make revisions based on your feedback.",
        "Yes, we are happy to sign an NDA to ensure the confidentiality of your client information and project details. We understand the importance of maintaining privacy in white-label relationships and are committed to keeping all information confidential.",
        "Getting started is easy! Reach out to us for an initial consultation to discuss your needs, goals, and how we can collaborate. Once we understand your requirements, we’ll establish a plan and pricing that works for you. From there, we can begin working on projects and delivering high-quality results under your brand.",
        "While many of our white-label partnerships are with agencies, we also work with freelancers, consultants, and businesses that need specialized design and development services. Whether you’re a boutique agency, a full-service marketing firm, or an individual freelancer, we can customize our services to meet your needs.",
        "If you decide to end our white-label partnership, we will ensure a smooth transition. We’ll provide you with all the necessary project files and documentation, so you can either handle the work in-house or find another solution. There are no long-term commitments, and you can cancel or adjust your engagement as needed.",
        "No, your clients won’t know if you decide to stop using our white-label services. Since we work as an invisible partner, your clients will only notice changes if you decide to communicate with them directly. We’re always discreet in our work, and we ensure the process remains seamless from your side.",
        "Yes! We’re happy to show you samples of our work or provide case studies of past white-label projects. This allows you to see the quality of our design and development services and understand how we can add value to your agency before committing to a partnership.",
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
                        If you’re ready to expand your offerings, improve your service delivery, and scale your business, our White Labelling Engagement Model is the perfect solution. Contact us today to discuss how we can help you achieve your goals and grow your business with high-quality, white-labelled design and development services.
                    </div>

                    <div className='px-6 lg:px-16 mt-24 flex flex-col lg:flex-row items-start justify-between w-full gap-12 xl:gap-0'>
                        <div className='font-normal text-3xl text-white'>White Labelling Engagement Model</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-1.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Brand Enhancement</div>
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
                                    <div className="pt-10">Offer additional services under your brand without building in-house expertise.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img className='h-8 md:h-12' src="/modules-pb-2.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Cost Savings</div>
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
                                    <div className="pt-10">Avoid the overhead costs of hiring and training a new team.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-3.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Scalable Solutions</div>
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
                                    <div className="pt-10">Expand your service portfolio with flexible and scalable resources.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 toggle-point flex flex-col">
                                <div className="flex items-center justify-between gap-6">
                                    <div className="flex items-center justify-between gap-6">
                                        <div className="w-8 md:w-12"><img src="/modules-pb-4.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Confidentiality Assured</div>
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
                                    <div className="pt-10">Maintain complete brand ownership with white-label confidentiality agreements.

                                    </div>
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
                                    <div>We begin by understanding your brand identity and the specific services you want to offer under a white-label agreement.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Understanding Your Brand and Needs</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(1, true)}
                            onMouseLeave={() => toggleShowDetails(1, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[1] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Once the scope is defined, we create a tailored agreement and customize our services to align seamlessly with your brand standards.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Service Agreement and Customization</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(2, true)}
                            onMouseLeave={() => toggleShowDetails(2, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[2] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Our team executes the project with precision, ensuring the deliverables meet the quality and timelines expected by your clients.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Execution and Delivery</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(3, true)}
                            onMouseLeave={() => toggleShowDetails(3, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[3] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We encourage regular feedback to refine the process and maintain the highest standards of service delivery on your behalf.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Feedback and Continuous Collaboration</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(4, true)}
                            onMouseLeave={() => toggleShowDetails(4, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[4] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Our team of seasoned professionals ensures the delivery of high-quality services that align with your brand expectations.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Expert Team</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(5, true)}
                            onMouseLeave={() => toggleShowDetails(5, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[5] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We operate as an extension of your business, ensuring a seamless experience for your clients without compromising confidentiality.</div>
                                </div>
                            ) : (
                                <div className='text-3xl font-bold text-center leading-normal'>Seamless Integration</div>
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
                            <div>Here are answers to the most common questions about White Labeling undertaking.</div>
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

export default WhiteLabelling