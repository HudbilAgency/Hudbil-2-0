import React, { useState } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const AboutUs = () => {

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false]);

    const toggleDropdown = (index) => {
        const updatedStates = dropdownStates.map((state, i) => i === index ? !state : state);
        setDropdownStates(updatedStates);
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-[80vh] bg-no-repeat bg-cover bg-center">
                <video
                    src="/LandingVideos/video2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover h-[80vh] w-full fixed z-0"
                >
                    <source src="/LandingVideos/video2.mp4" type="video/mp4" />
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
                            <img className='mx-auto' src="./about-us2.png" alt="About Us" />
                            {/* Marquee Text */}
                            <div className="absolute w-full inset-0 flex justify-center items-center overflow-hidden">
                                <div className="marquee-text-container font-normal text-2xl uppercase">
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

                    <div className='px-6 md:px-16 flex flex-col lg:flex-row items-start justify-between w-full gap-12 lg:gap-0'>
                        <div className='font-normal text-4xl text-white'>The lenses</div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point1.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Innovation</div>
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
                                    <div className="text-xl pt-10">A force for change</div>
                                    <div>It’s easy for innovation programmes to underestimate the potential of innovation as a force for change. Innovation isn’t just a new product or service – it’s an instigator of change. Sparking a chain reaction towards a different future state.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point2.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Communication</div>
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
                                    <div className="text-xl pt-10">Be remembered, Be remarkable</div>
                                    <div>Communications are a pillar of great marketing. They create demand through long-term
                                        brand building and convert existing demand through short-term sales activation. Effective
                                        communication grabs and holds people’s attention.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point3.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Culture</div>
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
                                    <div className="text-xl pt-10">World is changing. Culture tells us how.</div>
                                    <div>Culture is shared meaning. It’s how we see the world and live our lives. Brands don’t exist outside of culture and neither do their customers or target audiences – it’s table stakes for organisations.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point4.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Creativity</div>
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
                                    <div className="text-xl pt-10">A task of reaching a goal.</div>
                                    <div>Creativity is the ability to form novel and valuable ideas or works using the imagination. Products of creativity may be intangible or a physical object. Creativity may also describe the ability to find new solutions to problems, or new methods of performing.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point5.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Development</div>
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
                                    <div className="text-xl pt-10">Brand building is a big job.</div>
                                    <div>Building a brand from start to finish is a demanding task. Whether you’re creating a new brand for a new business, designing a new brand after a merge, or rebranding an existing company, the process takes time, money, and lots of research.</div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-10 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center justify-between gap-6">
                                        <div><img src="./point6.png" alt="point" /></div>
                                        <div className="font-normal text-2xl md:text-4xl leading-9">Customer Experience (CX)</div>
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
                                    <div className="text-xl pt-10">A point of their buying journey.</div>
                                    <div>Customer experience, sometimes abbreviated to CX, is the totality of cognitive, affective, sensory, and behavioural customer responses during all stages of the consumption process including pre-purchase, consumption, and post-purchase stages.</div>
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
                    <img className="w-full" src="./about-us-main2.png" />
                </div>
                <section className='bg-black py-20'>
                    <div className='md:w-1/2 font-normal text-[2rem] leading-tight text-white px-6 md:px-16'>
                        A International team of curious represents a mix of experiences, talents, and skills that enrich our collective creativity.
                    </div>
                    <div className="w-full flex items-start justify-end my-16 px-6 md:px-16">
                        <div className='md:w-1/2 flex flex-col items-start gap-8 text-white'>
                            <div>Working hand in hand with our clients, our project are consistently awarded and we are proud of that. This means that we are moving in the right direction Founded in 2012, we have quietly scaled from a one-man band to a powerhouse of exceptional developers and designers, growing solely through the power of word of mouth.</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-0 items-start justify-between px-6 md:px-16 mt-20">
                        <div className='text-white font-normal text-2xl'>Our senior team</div>
                        <div className='w-full lg:w-2/3'>
                            <div className='flex items-center gap-7 w-full'>
                                <div className="w-14 h-12">
                                    <img src="./st-1.png" alt="Circular Image" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div className='w-full'>
                                    <div className='w-full h-[1px] bg-[#6C6C6C]'></div>
                                    <div className='flex items-center gap-8 md:gap-28 text-white py-6'>
                                        <div>Ms. Husna Zar</div>
                                        <div>Co-Founder and Managing Director</div>
                                    </div>
                                    <div className='w-full h-[1px] bg-[#6C6C6C]'></div>
                                </div>
                            </div>
                            <div className='flex items-center gap-7 w-full'>
                                <div className="w-14 h-12">
                                    <img src="./st-1.png" alt="Circular Image" className="w-full h-full rounded-full object-cover" />
                                </div>
                                <div className='w-full'>
                                    <div className='flex items-center gap-8 md:gap-28 text-white py-6'>
                                        <div>Ms. Husna Zar</div>
                                        <div>Co-Founder and Managing Director</div>
                                    </div>
                                    <div className='w-full h-[1px] bg-[#6C6C6C]'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="button self-end flex flex-row justify-between px-12 py-3 mt-20 leading-none hover:bg-white hover:text-black ml-auto mr-6 md:mr-16 text-white gap-8 rounded-[1000px] max-md:px-5 bg-[#7811A5] transition-colors duration-300">
                        <h1 className='text-base mt-1 font-arial'>Get In Touch</h1>
                        <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                    </button>

                </section>
            </main>
            <ReachUs />
            <Footer />
        </>
    )
}

export default AboutUs