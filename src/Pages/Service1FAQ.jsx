import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import ReachUs from '../Components/ReachUs'
import Footer from '../Components/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Service1FAQ = () => {

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
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What is UI/UX design, and why is it important?</div>
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
                        <div>UI (User Interface) design refers to the visual elements of a product, such as buttons, icons, layouts, and typography. It's the interface that users interact with.</div>
                        <div>UX (User Experience) design focuses on the overall experience a user has when interacting with a product or service. It ensures the product is easy to use, intuitive, and provides a positive experience.</div>
                        <div>A great UI/UX design enhances usability, builds trust with users, and improves overall customer satisfaction, which leads to better engagement, higher conversion rates, and a more successful product.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>2</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How does the UI/UX design process work?</div>
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
                        <div>Our process typically includes the following steps:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Discovery & Research: Understanding your business, target audience, and competitors. We may conduct user surveys, interviews, and analyze analytics.</li>
                            <li>Wireframing & Prototyping: Creating wireframes and interactive prototypes to establish the website or app's layout, user flows, and functionality.</li>
                            <li>UI Design: Designing the visual aspects (color schemes, typography, icons, buttons) and ensuring the interface is both aesthetically appealing and functional.</li>
                            <li>UX Testing & Validation: Conducting usability testing to ensure the design is intuitive and effective. This can include A/B testing, user interviews, and analytics review.
                            </li>
                            <li>Final Design & Handoff: Once approved, we provide final design files (such as PSD, Sketch, Figma) and hand them over for development.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>3</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How long does the UI/UX design process take?</div>
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
                        <div>The timeline depends on the complexity of the project. Generally, here’s an estimate:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Simple Website: 3–4 weeks</li>
                            <li>Complex Website or Web Application: 6–8 weeks or more</li>
                            <li>Mobile Apps: 6–12 weeks (depending on the scope)</li>
                        </div>
                        <div>We always provide a detailed timeline at the start of the project based on your needs and scope.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>4</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How much does UI/UX design cost?</div>
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
                        <div>UI/UX design costs can vary depending on the scope and complexity of the project. Pricing models can include:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Hourly Rates: Typically $50–$200 per hour, depending on the designer’s experience and location.</li>
                            <li>Project-Based Pricing: For websites or apps, prices can range from $5,000 to $50,000+, depending on features, custom designs, and the number of screens involved.</li>
                        </div>
                        <div>We offer custom quotes based on your specific requirements. Please reach out to us with your project details, and we’ll provide an accurate estimate.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>5</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do I need to provide content or images?</div>
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
                    <div className="text-base flex md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>While it's helpful if you can provide text content, images, and branding guidelines (like logos or color schemes), we can also assist in sourcing stock images or creating placeholders for content. If you need help creating content, we offer copywriting services and can suggest strategies for creating the right kind of text for your target audience.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>6</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Will the design be responsive for mobile and tablet devices?</div>
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
                    <div className="text-base flex md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes, we ensure that all UI/UX designs are responsive, meaning they’ll automatically adjust to fit various screen sizes, from mobile phones and tablets to desktops and large screens. The design is tested for responsiveness to provide a seamless experience across all devices.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>7</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Will my UI/UX design be SEO-friendly?</div>
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
                        <div>While UI/UX design focuses primarily on usability, aesthetics, and functionality, we ensure that your design also adheres to basic SEO best practices, like:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Clean and semantic code.</li>
                            <li>Fast load times (important for both UX and SEO).</li>
                            <li>Easy-to-navigate structures (important for both user experience and search engines).</li>
                            <li>Optimized images for faster page loads.</li>
                        </div>
                        <div>However, SEO specialists may be required for in-depth optimization, such as keyword research, metadata creation, and backlink strategies.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>8</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Will I be able to make changes to the design once it's finished?</div>
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
                    <div className="text-base flex md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>We provide revision rounds throughout the design process, and typically offer 2–3 rounds of revisions after the final design is presented. Once the design is handed off to developers for implementation, any changes will require additional work and may incur extra fees depending on the scope of the changes.
                            We always work closely with you to ensure you’re satisfied with the final design before moving forward.
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>9</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Can you redesign my existing website or app?</div>
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
                    <div className="text-base flex md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes, we specialize in UI/UX redesigns. If your current site or app has usability issues, outdated design, or isn’t converting as well as you’d like, we can help. We will conduct an analysis of the existing design, gather feedback from users, and propose improvements based on modern design trends and usability best practices.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>10</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Will I own the rights to the design?</div>
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
                    <div className="text-base flex md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes! Once the project is complete and payment is finalized, you will own the intellectual property and rights to the design, including the layout, graphics, and prototypes. We will provide you with all the necessary files, assets, and documentation needed for implementation.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>11</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do you provide UI/UX design for mobile apps?</div>
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
                    <div className="text-base flex md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes, we provide UI/UX design services for mobile apps (iOS and Android). Our process ensures that the app is not only visually appealing but also intuitive and easy to navigate, keeping the best practices for mobile user experience in mind.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>12</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do you also handle website development?</div>
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
                    <div className="text-base flex md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>While we specialize in UI/UX design, we can collaborate with your development team or offer full-stack development services through trusted partners. We ensure smooth handoff of design files, design specifications, and prototypes to developers, but if you need end-to-end services, we can arrange to handle the development as well.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>13</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What’s the difference between a UI/UX designer and a web developer?</div>
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
                        <div>A UI/UX designer focuses on creating the visual and interaction design of a website or app, ensuring that it’s user-friendly, engaging, and visually appealing.</div>
                        <div>A web developer takes the design and turns it into a functional website or app by writing the code (HTML, CSS, JavaScript, etc.) and ensuring the site works as expected.</div>
                        <div>In short: designers create the look and feel; developers make it work.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>14</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do you offer user testing as part of your services?</div>
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
                        <div>Yes, user testing is a critical part of our process. We conduct usability testing to evaluate the effectiveness of the design by observing how real users interact with the product. We gather feedback, iterate on the design, and make necessary adjustments to improve the user experience. Testing can include:</div>
                        <div className='flex flex-col gap-4'>
                            <li>A/B testing: Comparing two versions of a design to see which performs better.</li>
                            <li>Usability testing: Observing real users to identify pain points.</li>
                            <li>Beta testing: Offering early access to users for final feedback.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>15</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Can you help with ongoing design support after the project is completed?</div>
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
                    <div className="text-base flex md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes! We offer ongoing support and maintenance for UI/UX design projects. Whether you need design updates, optimizations, or adjustments to the user interface, we can continue working with you to keep your product or website up-to-date.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
        </div>
    );
};

export default Service1FAQ