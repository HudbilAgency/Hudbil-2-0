import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import ReachUs from '../Components/ReachUs'
import Footer from '../Components/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Service3FAQ = () => {

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
                <title>Common Questions | Design and Development FAQs</title>
                <meta name="description" content="Have questions about our design and development process? Check our FAQs to learn more about our services, pricing, and project timelines."></meta>
                <meta property="og:url" content="www.hudbil.com/faq"></meta>
                <meta name="keywords" content="Website design FAQs, Development agency questions, Common design questions, Web development FAQs, Client support inquiries, Service-related questions, Design process explained, Development project timelines, Pricing FAQs, Design and development insights"></meta>
                <meta name="og:description" content="highlighting key inquiries about the design and development agency's services and processes."></meta>
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
            <main className='pt-[40px]'>
                <div className='font-normal text-[#7811A5] text-4xl xl:text-5xl pt-28 pb-20 leading-snug px-6 lg:px-16'>
                    FAQs
                </div>
                <section className='w-full px-6 lg:px-16 mb-20'>
                    <DropdownComponent />
                </section>
            </main>
            <ReachUs />
            <Footer />
        </>
    )
}

const DropdownComponent = () => {

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

    const toggleDropdown = (index) => {
        const updatedStates = dropdownStates.map((state, i) => i === index ? !state : state);
        setDropdownStates(updatedStates);
    };

    return (
        <div className='w-full'>

            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>1</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What types of mobile apps do you develop?</div>
                    </div>
                    <div onClick={() => toggleDropdown(0)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
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
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>We specialize in developing a wide range of mobile applications, including:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Native Apps for iOS (Swift, Objective-C) and Android (Kotlin, Java)</li>
                            <li>Cross-Platform Apps using frameworks like Flutter and React Native</li>
                            <li>Enterprise Apps for internal business solutions</li>
                            <li>E-commerce Apps for online stores</li>
                            <li>Social Networking Apps with real-time features</li>
                            <li>On-Demand Apps for services like ride-sharing, food delivery, and more</li>
                            <li>Custom Apps tailored to your unique business needs</li>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>2</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What is the difference between native and cross-platform apps?</div>
                    </div>
                    <div onClick={() => toggleDropdown(1)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
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
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[1] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Native Apps are built specifically for one platform (iOS or Android) using platform-specific programming languages (Swift/Objective-C for iOS, Kotlin/Java for Android). They offer the best performance and access to platform-specific features.
                            Cross-Platform Apps are developed using a single codebase and run on both iOS and Android. Popular frameworks for cross-platform development include Flutter and React Native. They are more cost-effective and faster to develop but might not offer the same level of performance as native apps.
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>3</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How long does it take to develop a mobile app?</div>
                    </div>
                    <div onClick={() => toggleDropdown(2)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
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
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[2] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>The timeline for mobile app development depends on several factors, such as:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Complexity of the app (e.g., features, functionality, and integrations)</li>
                            <li>Platform (iOS, Android, or both)</li>
                            <li>Design (custom UI/UX design takes more time)</li>
                            <li>Testing and debugging</li>
                            <li></li>
                        </div>
                        <div>On average, the development time ranges from 2-4 months for a standard app. More complex apps could take 6+ months.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>4</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How much does it cost to develop a mobile app?</div>
                    </div>
                    <div onClick={() => toggleDropdown(3)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
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
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[3] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>The cost of developing a mobile app depends on the following factors:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Platform (iOS, Android, or both)</li>
                            <li>App complexity (basic vs. advanced features)</li>
                            <li>Design requirements (custom UI/UX design vs. template)</li>
                            <li>Third-party integrations (payment gateways, APIs, etc.)</li>
                            <li>Maintenance and updates after launch</li>
                        </div>
                        <div>On average, basic apps start at $10,000-$20,000, while more complex apps can cost upwards of $50,000 or more. We'll provide you with a detailed cost estimate based on your specific requirements.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>5</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do you offer app maintenance and support after launch?</div>
                    </div>
                    <div onClick={() => toggleDropdown(4)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
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
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[4] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes, we offer post-launch support and maintenance to ensure your app stays updated, secure, and fully functional. Our services include:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Bug fixes and troubleshooting</li>
                            <li>App updates for new OS versions</li>
                            <li>Feature upgrades and new releases</li>
                            <li>Performance monitoring and optimizations</li>
                        </div>
                        <div>We also provide ongoing support packages based on your needs.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>6</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Will my app be compatible with all devices?</div>
                    </div>
                    <div onClick={() => toggleDropdown(5)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
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
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[5] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes! We make sure that your app is compatible with various devices, screen sizes, and operating systems. We conduct thorough device compatibility testing during the development phase to ensure the app performs well across different smartphones, tablets, and operating systems.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>7</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Can you integrate third-party services like payment gateways, social media, and APIs into the app?</div>
                    </div>
                    <div onClick={() => toggleDropdown(6)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
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
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[6] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Absolutely! We can integrate various third-party services into your app, such as:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Payment gateways (Stripe, PayPal, Razorpay)</li>
                            <li>Social media logins (Facebook, Google, Twitter)</li>
                            <li>APIs for additional functionality (weather, maps, messaging)</li>
                            <li>Analytics tools (Google Analytics, Firebase) </li>
                        </div>
                        <div>We ensure seamless integration with these services to enhance the functionality of your app.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>8</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do you offer app design services?</div>
                    </div>
                    <div onClick={() => toggleDropdown(7)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[7] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[7] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[7] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes, we have a team of expert UI/UX designers who specialize in creating visually appealing and user-friendly interfaces. We follow the latest design trends and best practices to ensure that your app is not only functional but also engaging and easy to use.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>9</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Will my app be secure?</div>
                    </div>
                    <div onClick={() => toggleDropdown(8)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[8] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[8] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[8] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Security is one of our top priorities. We implement industry-leading practices and standards to ensure that your app is secure, including:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Data encryption (SSL/TLS for secure communication)</li>
                            <li>Authentication and authorization (OAuth, two-factor authentication)</li>
                            <li>Regular security audits</li>
                            <li>Privacy compliance (GDPR, CCPA)</li>
                        </div>
                        <div>We also make sure that your app is compliant with app store guidelines for security.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>10</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What happens if I need to make changes to the app after it's launched?</div>
                    </div>
                    <div onClick={() => toggleDropdown(9)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[9] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[9] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[9] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>We provide ongoing app updates and modifications after launch. If you need to make changes or add new features to the app, we can work with you to update the app with minimal downtime. Updates could involve anything from fixing bugs to adding new functionalities based on user feedback.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>11</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do you help with app store submission and app marketing?</div>
                    </div>
                    <div onClick={() => toggleDropdown(10)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[10] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[10] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[10] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes, we assist with both app store submission and app marketing to ensure your app gets noticed:</div>
                        <div className='flex flex-col gap-4'>
                            <li>App Store Optimization (ASO): We optimize your app’s metadata (title, description, keywords, and images) to help it rank higher in app store search results.</li>
                            <li>App Store Guidelines: We ensure that your app complies with the guidelines of both the Apple App Store and Google Play Store to avoid rejections.</li>
                            <li>Marketing: While we don't offer full-fledged marketing services, we can guide you on best practices for promoting your app and help with launch strategies.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>12</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do you provide analytics and performance tracking for the app?</div>
                    </div>
                    <div onClick={() => toggleDropdown(11)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[11] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[11] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[11] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes! We integrate analytics tools like Google Analytics and Firebase to provide you with detailed insights into user behaviour, app usage, and performance. We track key metrics such as:</div>
                        <div className='flex flex-col gap-4'>
                            <li>User retention</li>
                            <li>Downloads and installations</li>
                            <li>In-app purchases (if applicable)</li>
                            <li>Crash reports</li>
                        </div>
                        <div>These insights allow us to make data-driven decisions to improve the app's performance and user experience over time.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>13</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Can I update my app’s content or make changes myself after it's live?</div>
                    </div>
                    <div onClick={() => toggleDropdown(12)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[12] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[12] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[12] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes, depending on the app type and the content management system (CMS) we use, you may be able to make certain changes yourself. For example:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Content updates: You can update text, images, and other media directly through a CMS or admin panel if integrated.</li>
                            <li>Feature updates: For more complex changes (like adding new features), we recommend working with our team to ensure the app functions smoothly.</li>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>14</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What is the process for working with Hudbil on my mobile app project?</div>
                    </div>
                    <div onClick={() => toggleDropdown(13)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[13] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[13] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[13] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div className='flex flex-col gap-4'>
                            <li>Planning & Design: Our team creates wireframes, prototypes, and UI/UX designs.</li>
                            <li>Development: We develop the app and integrate any third-party services as required.</li>
                            <li>Testing & QA: We rigorously test the app to ensure it works seamlessly.</li>
                            <li>Launch: We assist with app store submission and launch.</li>
                            <li>Post-Launch Support: We provide ongoing maintenance and updates to keep the app running smoothly.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>15</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How can I get started with my mobile app project?</div>
                    </div>
                    <div onClick={() => toggleDropdown(14)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[14] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[14] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[14] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>To get started, simply contact us with your app idea, and we’ll set up an initial consultation to discuss your needs and goals. Once we understand your vision, we’ll provide a project plan, timeline, and cost estimate. From there, we can start the development process!</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
        </div>
    );
};

export default Service3FAQ