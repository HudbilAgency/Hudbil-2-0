import React, { useState } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Services1 = () => {

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false]);

    const toggleDropdown = (index) => {
        const updatedStates = dropdownStates.map((state, i) => i === index ? !state : state);
        setDropdownStates(updatedStates);
    };

    const [dropdownStates2, setDropdownStates2] = useState([false, false, false, false, false, false]);

    const toggleDropdown2 = (index) => {
        const updatedStates2 = dropdownStates2.map((state, i) => i === index ? !state : state);
        setDropdownStates2(updatedStates2);
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-[80vh] bg-no-repeat bg-cover bg-center">
                <video
                    src="/LandingVideos/video3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover h-[80vh] w-full fixed z-0"
                >
                    <source src="/LandingVideos/video3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <main className='relative z-20'>
                <section className='bg-black py-20'>
                    <div className='md:w-3/5 font-normal text-[2rem] leading-tight text-white px-6 md:px-16'>
                        Hudbil is an insights creative design and development agency in India and London, we practice creative ideas that turn heads, draw eyes, distract, disrupt and engage – in short, strategic communication solutions that get attention.
                    </div>
                    <div className="w-full flex items-start justify-end my-16 px-6 md:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white'>
                            <div>We’re not your typical agency guys — and we don’t want to be. We’re here to get the job done: no politics, no suits, no ego. Just results. That said, we’re not robots — we’re a close
                                knit team of friends and family that love what we do.</div>
                            <div>We work hard, but we value balance. We’re out the door (or the home office!) at 5.30.We
                                use knowledge sharing, coaching and work-shopping to drive collective value across our
                                business; meaning every client succeeds from the testing, ideas and developments of our
                                total client pool.</div>
                            <div>
                                <button className="button self-end flex flex-row justify-between px-12 py-3 mx-auto leading-none bg-white text-black gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-colors duration-300">
                                    <h1 className='text-base mt-1 font-arial'>Get In Touch</h1>
                                    <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="relative my-24 ">
                        <div className="relative">
                            <img className='mx-auto' src="./sp11.png" alt="About Us" />
                            {/* Marquee Text */}
                            <div className="absolute w-full inset-0 flex justify-center items-center overflow-hidden">
                                <div className="marquee-text-container font-normal text-2xl uppercase">
                                    <div className="marquee-text text-white">Together we create belief</div>
                                    <div className="marquee-text text-white">We exist to help brands think differently</div>
                                    <div className="marquee-text text-white">Our vision is to build an agency that’s revered</div>
                                    <div className="marquee-text text-white">Together we create belief</div>
                                    <div className="marquee-text text-white">We exist to help brands think differently</div>
                                    <div className="marquee-text text-white">Our vision is to build an agency that’s revered</div>
                                    <div className="marquee-text text-white">Together we create belief</div>
                                    <div className="marquee-text text-white">We exist to help brands think differently</div>
                                    <div className="marquee-text text-white">Our vision is to build an agency that’s revered</div>
                                    <div className="marquee-text text-white">Together we create belief</div>
                                    <div className="marquee-text text-white">We exist to help brands think differently</div>
                                    <div className="marquee-text text-white">Our vision is to build an agency that’s revered</div>
                                    <div className="marquee-text text-white">Together we create belief</div>
                                    <div className="marquee-text text-white">We exist to help brands think differently</div>
                                    <div className="marquee-text text-white">Our vision is to build an agency that’s revered</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-6 md:px-16 flex flex-col lg:flex-row items-start justify-between w-full gap-12 lg:gap-0'>
                        <div className='font-normal text-3xl text-white'>Our Creative Designing Services</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point11.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Digital Branding</div>
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
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">Digital Transformation</div>
                                    <div>A strategic process to help your brand establish a platform-agnostic identity and presence. A design firm that can stand time with new verticals and scaling. Bold, memorable designs that define your brand at first glance.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-colors duration-300">
                                            <h1 className='text-base mt-1 font-arial'>Know More</h1>
                                            <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point12.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">User Interface Design</div>
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
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[1] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">UI is the power</div>
                                    <div>Designing aesthetic, delightful and visually appealing products that are functional and enjoyable to use. Creating the look, feel, and functionality of a product’s interface to make it easy and enjoyable for users.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-colors duration-300">
                                            <h1 className='text-base mt-1 font-arial'>Know More</h1>
                                            <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point13.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">User Experience Design</div>
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
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[2] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">UX is the experience</div>
                                    <div>Creating holistic, usable and well-structured digital experiences that incorporate best design practices and standards. Consider how users feel when interacting with a product, and how to make the experience seamless.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-colors duration-300">
                                            <h1 className='text-base mt-1 font-arial'>Know More</h1>
                                            <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point14.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Interaction Design</div>
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
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[3] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">Goal of design creativity</div>
                                    <div>While interaction design has an interest in form (similar to other design fields), its main area of focus rests on behaviour. Rather than analysing how things are, interaction design synthesizes and imagines things as they could be.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-colors duration-300">
                                            <h1 className='text-base mt-1 font-arial'>Know More</h1>
                                            <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point15.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Digital Prototyping</div>
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
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[4] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">Experience the best</div>
                                    <div>Making a prototype of the final product and testing it in real time to get inputs and reliable user feedback. It’s a key tool for designers and engineers to conceptualize and test product ideas before moving into production.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-colors duration-300">
                                            <h1 className='text-base mt-1 font-arial'>Know More</h1>
                                            <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point16.png" alt="point" /></div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Digital Illustrations</div>
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
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10">Solid brand face</div>
                                    <div>Crafting stunning, visually consistent sets of icon styles and illustrations, in line with all relevant brand guidelines. This comprehensive guide will help you fully master the art of digital illustration.</div>
                                    <div>
                                        <button className="button self-end flex flex-row justify-between px-5 py-3 leading-none border border-[#7811A5] text-white gap-8 rounded-[1000px]  hover:bg-[#7811A5] transition-colors duration-300">
                                            <h1 className='text-base mt-1 font-arial'>Know More</h1>
                                            <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className='text-[#917D7D] font-normal text-sm py-12 w-full md:w-5/6'>
                                Get in touch to find out how our team enjoys tinkering, most importantly empower your organisation.
                            </div>
                            <button className="button self-end flex flex-row justify-between px-12 py-3 mb-4 leading-none hover:bg-white hover:text-black text-white gap-8 rounded-[1000px] max-md:px-5 bg-[#7811A5] transition-colors duration-300">
                                <h1 className='text-base mt-1 font-arial'>Work With Us</h1>
                                <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                            </button>
                        </div>
                    </div>
                </section>
                <div>
                    <img className="w-full" src="./sp12.png" />
                </div>
                <section className='bg-black py-20'>
                    <div className='md:w-1/2 font-normal text-[2rem] leading-tight text-white px-6 md:px-16'>
                        Our Secret Ingredient?
                        We’d be lying if we said we weren’t playful, imaginative, and offbeat. (wink) Fun fact? The
                        best designs come from that same spark of creativity.
                    </div>
                    <div className="w-full flex items-start justify-end my-16 px-6 md:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white'>
                            <div>Within the creative process, it is essential not to lose sight of the end goal. By keeping the
                                bigger picture in mind, we can question the purpose and meaning of an idea, asking the
                                right questions to define a clearer and better vision for the brand.</div>
                            <div>Following our heart isn’t about disregarding insight and purpose; it’s about momentarily
                                setting aside ‘science,’ listening to our emotions, and embracing what feels right. It’s about
                                forging a genuine yet memorable connection.</div>
                        </div>
                    </div>

                    <div className='px-6 md:px-16 flex flex-col items-start justify-between w-full gap-12 mt-4'>
                        <div className='font-normal text-2xl text-white'>Our Process</div>

                        <div className='w-full text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>1</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Conversation</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(0)} className="cursor-pointer">
                                        <svg className={`transition-transform duration-300 ${dropdownStates2[0] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                            }`} width="46" height="25" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_7690_1453)">
                                                <g clip-path="url(#clip1_7690_1453)">
                                                    <path d="M45.2769 1.46875L22.9998 23.7459L0.722656 1.46875" stroke="#C0C2C4" stroke-width="0.657143" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7690_1453">
                                                    <rect width="46" height="23.66" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                                <clipPath id="clip1_7690_1453">
                                                    <rect width="46" height="23.6571" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[0] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">Conversation sparks imagination, facilitates creativity and ignites insights. This is about the joy of discovery and the love of exploration, to not sit back and wait for inspiration but actively search for meaning.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>2</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Discovery & Research</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(1)} className="cursor-pointer">
                                        <svg className={`transition-transform duration-300 ${dropdownStates2[1] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                            }`} width="46" height="25" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_7690_1453)">
                                                <g clip-path="url(#clip1_7690_1453)">
                                                    <path d="M45.2769 1.46875L22.9998 23.7459L0.722656 1.46875" stroke="#C0C2C4" stroke-width="0.657143" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7690_1453">
                                                    <rect width="46" height="23.66" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                                <clipPath id="clip1_7690_1453">
                                                    <rect width="46" height="23.6571" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[1] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">This is where the fun begins!  We start with researching deep into your brand, industry, and audience—like detectives on a caffeine high. We meticulously uncover your brand’s true potential, ensuring we’re aligned with the best branding agencies. It’s like a treasure hunt, but instead of gold, we find your brand’s true potential.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>3</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Collaboration</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(2)} className="cursor-pointer">
                                        <svg className={`transition-transform duration-300 ${dropdownStates2[2] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                            }`} width="46" height="25" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_7690_1453)">
                                                <g clip-path="url(#clip1_7690_1453)">
                                                    <path d="M45.2769 1.46875L22.9998 23.7459L0.722656 1.46875" stroke="#C0C2C4" stroke-width="0.657143" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7690_1453">
                                                    <rect width="46" height="23.66" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                                <clipPath id="clip1_7690_1453">
                                                    <rect width="46" height="23.6571" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[2] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">We embrace the power of collaboration, working together seamlessly to address challenges and overcome obstacles, delivering impactful solutions that are both commercially viable and meaningful.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>4</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Craft</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(3)} className="cursor-pointer">
                                        <svg className={`transition-transform duration-300 ${dropdownStates2[3] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                            }`} width="46" height="25" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_7690_1453)">
                                                <g clip-path="url(#clip1_7690_1453)">
                                                    <path d="M45.2769 1.46875L22.9998 23.7459L0.722656 1.46875" stroke="#C0C2C4" stroke-width="0.657143" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7690_1453">
                                                    <rect width="46" height="23.66" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                                <clipPath id="clip1_7690_1453">
                                                    <rect width="46" height="23.6571" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[3] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">It’s about elevating design from ordinary to extraordinary, striking the perfect balance between beauty and quality. It entails a deep appreciation for finer details while keeping the ‘bigger picture’ in mind, ensuring that the work is unmistakable and unforgettable.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>5</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Design & Refinement</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(4)} className="cursor-pointer">
                                        <svg className={`transition-transform duration-300 ${dropdownStates2[4] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                            }`} width="46" height="25" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_7690_1453)">
                                                <g clip-path="url(#clip1_7690_1453)">
                                                    <path d="M45.2769 1.46875L22.9998 23.7459L0.722656 1.46875" stroke="#C0C2C4" stroke-width="0.657143" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7690_1453">
                                                    <rect width="46" height="23.66" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                                <clipPath id="clip1_7690_1453">
                                                    <rect width="46" height="23.6571" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[4] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">Here’s where your ideas get dressed up for the show! We pour our creative energy into crafting designs that feel fresh. Then, we tweak, refine, and polish. It’s like giving your brand a stylish makeover that makes heads turn—again and again.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-8 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-8">
                                        <div className='border border-white rounded-full px-3 py-1'>6</div>
                                        <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">Launch & Support</div>
                                    </div>
                                    <div onClick={() => toggleDropdown2(5)} className="cursor-pointer">
                                        <svg className={`transition-transform duration-300 ${dropdownStates2[5] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                            }`} width="46" height="25" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_7690_1453)">
                                                <g clip-path="url(#clip1_7690_1453)">
                                                    <path d="M45.2769 1.46875L22.9998 23.7459L0.722656 1.46875" stroke="#C0C2C4" stroke-width="0.657143" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_7690_1453">
                                                    <rect width="46" height="23.66" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                                <clipPath id="clip1_7690_1453">
                                                    <rect width="46" height="23.6571" fill="white" transform="translate(0 0.8125)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[5] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">But we don’t just set it and forget it. We’re right there with you for the launch, making sure everything runs smoothly. Need ongoing support? Our branding agency services have got your back.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                        </div>
                    </div>

                    <div className="w-full flex items-start justify-end mt-24 px-6 md:px-16">
                        <div className='md:w-1/2 flex flex-col gap-12 md:gap-8 text-white'>
                            <div>Among leading brand agencies India, Hudbil has a reputation for creating distinctive and successful brands. Known as brand transformation specialists, Hudbil’s track record justifies a place among these top-tier brand agencies India. Our expertise is in brand strategy, design and management services for the identity and communications of companies and their products. When it comes to brand agencies India, Hudbil is a full service provider, with an aim of improving business for the companies who engage us.</div>

                            <button className="button self-end flex flex-row justify-between mt-6 mb-4 px-12 py-3 ml-auto leading-none bg-white text-black gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-colors duration-300">
                                <h1 className='text-base mt-1 font-arial'>Work With hudbil</h1>
                                <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                            </button>

                        </div>
                    </div>
                </section>
                <section className=' bg-[#2C2C2C] py-20'>
                    <div className='px-6 md:px-16 flex flex-col lg:flex-row items-start justify-between w-full gap-16 lg:gap-0'>
                        <div className='font-normal text-3xl text-white'>The minds behind our success </div>

                        <div className='w-full md:w-1/2 text-white flex flex-col items-start gap-20'>

                            <div className='flex flex-col items-start gap-8'>
                                <div className='flex items-center gap-5'>
                                    <div><img src="./sp2logo1.png" /></div>
                                    <div className='flex flex-col items-start gap-1'>
                                        <div>Thomas Cook</div>
                                        <div className='text-[#838383] text-sm'>Oinvest</div>
                                    </div>
                                </div>
                                <div>“ Working with the Hudbil team has been a great experience, they often came up with lean
                                    and creative solutions to meet our business challenges and requirements that we threw at
                                    them, they are very creative in terms of the design and clean development skills.”</div>
                                <div>
                                    <button className="button self-end  flex flex-row justify-between px-20 py-3 leading-none bg-[#505050] text-white hover:text-[#505050] gap-8 rounded-[1000px] max-md:px-5  hover:bg-white transition-colors duration-300">
                                        <h1 className='text-base font-arial'>Contact Us</h1>
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-col items-start gap-8'>
                                <div className='flex items-center gap-5'>
                                    <div><img src="./sp2logo2.png" /></div>
                                    <div className='flex flex-col items-start gap-1'>
                                        <div>David Manson</div>
                                        <div className='text-[#838383] text-sm'>Bluemail</div>
                                    </div>
                                </div>
                                <div>The team at Hudbil are enthusiastic, friendly and great to work with. They really listened to our needs and came up with a design which encapsulates exactly the spirit and personality of the organisation, whilst still remaining practical and user-friendly.</div>
                                <div>
                                    <button className="button self-end  flex flex-row justify-between px-20 py-3 leading-none bg-[#505050] text-white hover:text-[#505050] gap-8 rounded-[1000px] max-md:px-5  hover:bg-white transition-colors duration-300">
                                        <h1 className='text-base font-arial'>Contact Us</h1>
                                    </button>
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

export default Services1