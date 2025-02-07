import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import ReachUs from '../Components/ReachUs'
import Footer from '../Components/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Service2FAQ = () => {

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
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What is website development, and how does it differ from web design?</div>
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
                        <div>Website development refers to the process of creating the functional aspects of a website. It involves programming, coding, and structuring the backend (server-side) and frontend (client-side) elements to make the website interactive, user-friendly, and fully functional.</div>
                        <div>Web design, on the other hand, is focused on the visual appearance of the website—creating layouts, color schemes, fonts, and overall aesthetics.
                        </div>
                        <div>In short, web development builds the functionality of the site, while web design focuses on the user interface (UI) and user experience (UX).</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>2</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What types of websites do you build?</div>
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
                        <div>We specialize in building a wide variety of websites, including but not limited to:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Corporate Websites: Professional sites for businesses to showcase their services or products.</li>
                            <li>E-commerce Websites: Fully functional online stores with integrated payment gateways, product catalogs, and inventory management.
                            </li>
                            <li>Portfolio Websites: Personal websites to showcase work, skills, and achievements (for creatives like designers, photographers, or artists).
                            </li>
                            <li>Blogs: Simple, content-driven websites where you can share articles, posts, and media.
                            </li>
                            <li>Landing Pages: High-conversion, one-page websites designed for specific campaigns or goals.
                            </li>
                            <li>Web Applications: Complex, interactive applications with features like user accounts, databases, and dynamic content.
                            </li>
                            <li>Content Management Systems (CMS): Websites built on platforms like WordPress, Joomla, or Drupal that allow easy content management.
                            </li>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>3</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What’s the difference between a static and a dynamic website?</div>
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
                        <div>Static websites consist of fixed content (HTML, CSS) and are best suited for simple sites with minimal interaction (like informational websites or portfolios).
                            Dynamic websites are more complex and interact with databases, allowing content to change based on user input or other factors. These sites can have features like contact forms, search functionality, user login areas, and more. Content management systems (CMS) often power dynamic websites.
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>4</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How long will it take to build my website?</div>
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
                        <div>The timeline depends on several factors, such as:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Scope of the project: Is it a simple website or a more complex application?</li>
                            <li>Design and functionality: The more customizations and features, the longer it will take.</li>
                            <li>Feedback cycles: How quickly you provide feedback and revisions.</li>
                            <li>Size of the website: A single-page website takes far less time than a large multi-page website or an e-commerce platform.</li>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>On average:</div>
                            <li>Simple websites: 2-4 weeks</li>
                            <li>Medium-sized websites: 4-8 weeks</li>
                            <li>Complex websites or web apps: 8-12 weeks or more</li>
                        </div>
                        <div>We'll provide a more accurate timeline once we understand your project in detail.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>5</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How much does website development cost?</div>
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
                        <div>The cost of developing a website can vary widely depending on factors like:</div>
                        <div className='flex flex-col gap-4'>
                            <li>The complexity of the website (number of pages, features, integrations)
                            </li>
                            <li>The technology stack (e.g., WordPress, React, custom CMS)</li>
                            <li>Whether the website is e-commerce or a simple informational site</li>
                            <li>Design and user experience requirements</li>
                            <li>The development timeline and the number of revisions required</li>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>For a rough estimate:</div>
                            <li>Basic websites: Starting from ₹30,000–₹80,000</li>
                            <li>E-commerce websites: ₹1,00,000–₹5,00,000+</li>
                            <li>Custom web applications: ₹5,00,000–₹20,00,000+</li>
                        </div>
                        <div>We offer personalized quotes based on your specific needs, so reach out to us for a custom proposal.
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>6</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Will my website be mobile-friendly (responsive)?</div>
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
                        <div>Yes! All websites we build are mobile-responsive. This means your website will automatically adjust to look great and function smoothly on all screen sizes, from smartphones to desktops. We prioritize mobile-first design, ensuring users have an optimal experience across all devices.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>7</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Will my website be SEO-friendly?</div>
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
                        <div>Yes, we build SEO-friendly websites. While SEO is a complex field, we follow best practices during the development process to ensure that your website is set up for search engine optimization. This includes:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Proper use of header tags (H1, H2, etc.)</li>
                            <li>Optimized images for faster loading</li>
                            <li>SEO-friendly URLs and metadata</li>
                            <li>Mobile optimization
                            </li>
                            <li>Clean, semantic code
                            </li>
                        </div>
                        <div>However, full SEO services (keyword research, content optimization, link building, etc.) can be offered separately by an SEO specialist.
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>8</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Will I be able to update my website on my own?</div>
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
                        <div>Absolutely! We offer CMS-based websites (like WordPress or Joomla) or custom admin panels, which make it easy for you to manage and update content on your website without needing coding skills. Whether it's updating text, adding new pages, or uploading images, you’ll have the control to make changes.
                            If you prefer, we also offer training to guide you through the process, or we can handle updates for you as part of our ongoing support package.
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>9</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do you provide ongoing website maintenance and support?</div>
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
                        <div>Yes, we offer website maintenance services to ensure your website stays up-to-date, secure, and running smoothly. Our maintenance services include:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Regular software updates (CMS, plugins, security patches)</li>
                            <li>Content updates</li>
                            <li>Backup services</li>
                            <li>Bug fixes and troubleshooting</li>
                            <li>Performance optimization</li>
                        </div>
                        <div>We also offer long-term support for any technical issues, new feature additions, or updates that may arise.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>10</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Will my website be secure?</div>
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
                        <div>Security is one of our top priorities. We take several steps to protect your website, including:
                        </div>
                        <div className='flex flex-col gap-4'>
                            <li>Installing SSL certificates for secure communication (HTTPS).</li>
                            <li>Implementing security plugins (for CMS-based websites).</li>
                            <li>Keeping all software and plugins up-to-date to prevent vulnerabilities.</li>
                            <li>Using secure authentication methods and strong password policies.</li>
                            <li>Setting up regular backups to ensure data can be restored in case of an emergency.</li>
                        </div>
                        <div>Additionally, we follow best practices for data protection and comply with any legal regulations (like GDPR) if applicable.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>11</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do you offer custom web application development?</div>
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
                        <div>Yes, we specialize in custom web application development. If you need a web application with complex functionality, such as user login systems, database management, and real-time data processing, we can create a tailored solution for your business needs.</div>
                        <div>We have experience in building everything from CRM systems, inventory management tools, and social platformsto booking systems and custom dashboards.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>12</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Can you redesign my existing website?</div>
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
                        <div>Absolutely! If your current website is outdated, slow, hard to navigate, or not providing the results you want, we can help. Our redesign process involves:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Assessing the current website’s design, functionality, and performance.</li>
                            <li>Understanding your business goals and audience needs.</li>
                            <li>Creating a more modern, user-friendly design with updated features and better performance.</li>
                        </div>
                        <div>We focus on making the redesign process as smooth as possible and ensuring your new website is more effective than the old one.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>13</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do you provide hosting and domain registration?</div>
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
                        <div>Yes, we can help with web hosting and domain registration. We partner with reliable hosting providers and offer various hosting plans based on your website's needs. We can also guide you through the process of domain registration and ensure everything is set up properly for your new website.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>14</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How do I get started with website development?</div>
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
                        <div>Getting started is easy! Just contact us to schedule a consultation. During this call, we’ll discuss:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Your business goals and objectives</li>
                            <li>The features and functionality you need</li>
                            <li>Design preferences and branding</li>
                            <li>Timeline and budget</li>
                        </div>
                        <div>After the consultation, we’ll provide you with a detailed proposal and timeline for your project. Once we agree on the details, we’ll begin the development process.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>15</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What happens after my website is launched?</div>
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
                        <div>Once your website is live, we’ll:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Monitor performance to ensure everything runs smoothly.</li>
                            <li>Provide basic training on how to manage your site (if applicable).</li>
                            <li>Be available for any post-launch support and fixes.</li>
                            <li>Offer ongoing maintenance services to keep the site secure, updated, and optimized.</li>
                        </div>
                        <div>We also offer website optimization services for further performance enhancements and SEO improvements.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
        </div>
    );
};

export default Service2FAQ