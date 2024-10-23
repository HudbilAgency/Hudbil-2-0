import React, { useState, useRef } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Work = () => {

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false]);

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

    return (
        <>
            <Navbar />
            <main className='pt-[80px] bg-black'>
                <section className='pt-20 pb-24'>
                    <div className='w-full lg:w-3/5 font-normal text-[2rem] xl:text-[50px] xl:w-5/6 leading-tight text-white px-6 md:px-16'>
                        We use industry-leading research, strategic insights and relentless creativity to live our purpose: putting people first.
                    </div>

                    <div className='pl-6 md:pl-16 lg:pl-0 pr-6 md:pr-16 mt-20 flex flex-col lg:flex-row items-start w-full gap-16 lg:gap-12'>

                        <div className='flex items-center justify-center w-full lg:w-1/2 lg:hidden'>
                            <img className='w-full ' src="./our-services.png" />
                        </div>
                        <div className='lg:flex hidden items-center justify-center w-full lg:w-1/2 bg-no-repeat bg-cover bg-center sticky top-0'>
                            <img className='w-full h-screen object-cover' src="./our-services.png" />
                        </div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className='font-normal text-[2.7rem] leading-tight pb-10'>
                                Our Work
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div onClick={() => toggleDropdown(0)} className="flex flex-col items-start justify-between cursor-pointer gap-6">
                                        <div className="font-normal text-4xl leading-tight">Developed International Website of Jef Techno</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>JEF Techno Case Study</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-2xl underline leading-7 pt-8 text-[#7811A5] "><a href="https://www.Jefuae.com" target='blank'>JEF TECHNO SOLUTIONS</a></div>
                                    <div className='flex flex-col items-start gap-6 leading-7'>
                                        <div>Hudbil has been developing all their national and international websites front-end and back-end with strategic insights ideas since 2016. During that time, Hudbil has transformed its brand and vision, lifting from organic marketing services in association with our parent brand COLTFOX. Core to our relationship is an ongoing digital marketing and design and development partner for years - Market Monitors that feed into brand and communications planning, optimisation and evaluation.</div>
                                        <div>We have designed and developed various nice websites for their brand requirements
                                            time-to-time and tracking and monitors market trends that feed into brand and
                                            communications planning, optimisation and evolution.</div>
                                        <div>Beyond this, Hudbil has also leverages the full spectrum of other marketing and
                                            branding design including brochure, email marketing, logo designs, marketing
                                            materials. We take a collaborative approach to this partnership, working closely with
                                            the entire JEF brand portfolio and their supporting.</div>
                                        <div>“Their collaborative, agile approach helps keep insights relevant an accessible and a
                                            highly strategic team is valued across our business.”</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div onClick={() => toggleDropdown(1)} className="flex flex-col items-start justify-between cursor-pointer gap-6">
                                        <div className="font-normal text-4xl leading-tight">Design & Developed International Website, logo, branding</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>Mabblyy case study</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[1] ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-2xl underline leading-7 pt-8 text-[#7811A5] "><a href="https://www.mabbly.com" target='blank'>Mabbly Group</a></div>
                                    <div className='flex flex-col items-start gap-6 leading-7'>
                                        <div>A human-first brand for the utilities market with empathy built in.</div>
                                        <div>We invested a whole lot of time at the start of the brand project to really get to know Mabbly – their commercial strategy, the leadership team, the service offer, their culture and the people throughout the company.</div>
                                        <div>This approach us a true understanding that helps to define and pin point what makes them distinct and how best to celebrate it in their new brand language.</div>
                                        <div>We ran a number of immersion sessions on this project that included a company
                                            onboarding, a demo sales pitch, one-to-one interviews with senior management, brand
                                            personification workshops with employees throughout the business, client interviews,
                                            competitor analysis and an existing communications audit.</div>
                                        <div>In response to this out of category behaviour the brand is deliberately design-driven and
                                            photographic to appear disruptive in the facilities management industry.
                                            The project included: Brand strategy, visual identity, full channel brand activation, motion
                                            design, website UX/UI & build and brand guidelines.</div>
                                        <div>To promote their business strategy and brand proposition the tagline of ‘powered by
                                            people’ was created and used across all headline communications.</div>
                                        <div>In addressing Mabbly’s unique challenge, we strategically devised a design-led and visually
                                            disruptive website that stands out in the facilities management industry. The deliberate
                                            design-driven and photographic elements not only reflect Mabbly’s out-of-category
                                            behaviour but also convey their human-centric approach, emphasising the sense of
                                            community within their team and among customers.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div onClick={() => toggleDropdown(2)} className="flex flex-col items-start justify-between cursor-pointer gap-6">
                                        <div className="font-normal text-4xl leading-tight">Campaigns, Internal Communications, Event Design, Bid Design</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>Zendesk case study</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[2] ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-2xl underline leading-7 pt-8 text-[#7811A5] "><a href="https://www.zendesk.com" target='blank'>Zendesk Group</a></div>
                                    <div className='flex flex-col items-start gap-6 leading-7'>
                                        <div>Enhancing brand recognition, engagement, and loyalty through impactful, cohesive design,
                                            leveraging our longstanding partnership with The Ardonagh Group.</div>
                                        <div>The Backstory</div>
                                        <div>The Zendesk is one of the worlds leading independent brokers, boasting a vast business
                                            portfolio that includes Ardonagh Specialty – the largest independent specialty broker in the
                                            London market with global distribution of highly complex risk products. We have partnered
                                            with them for several years, collaborating as their creative partner on marketing, branding,
                                            and digital projects.</div>
                                        <div>The Problem</div>
                                        <div>As a global organisation with over 200 offices worldwide, more than 10,000 employees, a
                                            significant public presence, and an extensive business portfolio, Ardonagh values a reliable
                                            design partner to create high-impact visuals for both their internal and external media.
                                            During a period of substantial growth and strategic realignment, they turned to us to
                                            leverage their brand for effective marketing both within the company and to the public.</div>
                                        <div>The Solution</div>
                                        <div>Working on a wide array of digital and print based projects, we craft innovative brand
                                            experiences, effectively communicating information to enhance customer engagement,
                                            trust, and loyalty, driving the organisation towards unprecedented success and growth.</div>
                                        <div>The Result</div>
                                        <div>A successful partnership that continues to grow and generate beautiful designs.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div onClick={() => toggleDropdown(3)} className="flex flex-col items-start justify-between cursor-pointer gap-6">
                                        <div className="font-normal text-4xl leading-tight">Brand Identity, Digital Strategy, UX, UI, Web Development, Web Maintenance, Social Media Strategy, Social Media Management, Paid Social Advertising</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>Harper Lane case study</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[3] ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-2xl underline leading-7 pt-8 text-[#7811A5] "><a href="https://harperlanedesign.com.au/" target='blank'>Harper Lane Interiors Group</a></div>
                                    <div className='flex flex-col items-start gap-6 leading-7'>
                                        <div></div>Building a bold brand system as exclusive as the fine, hand-crafted luxury Italian interiors from HARPER LANE
                                        <div>The Backstory</div>
                                        <div>Harper Lane, specialising in high-end residential and commercial interiors, deliver exclusive, Italian-crafted flooring and furniture for the luxury market, worldwide. Since 2018, HARPER has rapidly grown, playing a pivotal role in high-profile projects like Nobu Hotel and The Mandarin hotel. From family homes to penthouses in Mayfair and Knightsbridge, harper’s portfolio spans diverse residential endeavours, showcasing a commitment to excellence and sophistication.</div>
                                        <div>The Problem</div>
                                        <div>Initially equipped with only a logo, HARPER approached us with a wealth of industry experience and a desire to establish their distinct identity within the UK market. With a history deeply rooted in the field, they wanted to be recognised in their own right. Our task was to design a website and somewhat of a brand identity, that not only reflected the luxurious and high-end nature of their products and work but also stood out as a unique entity amid competitors. The challenge lay in crafting a digital presence that seamlessly embodied sophistication while also being functional and engaging.</div>
                                        <div>The Solution</div>
                                        <div>Firstly, we tackled the colour palette. White space communicates purity, sophistication, and simplicity, providing a neutral canvas that enhanced elements like product imagery. This minimalist style is synonymous with luxury. Deep blue adds richness and depth, symbolising stability and timelessness. Brown tones from wood evoke warmth and organic authenticity, connecting the brand with high-quality craftsmanship. Together, this palette exudes a luxurious and exclusive identity.</div>
                                        <div>Emphasising large imagery to showcase HARPER’s high-end products was a must, creating a visually stunning online environment that highlighted the exquisite details and craftsmanship. This strategic use of visuals enhances the user experience, effectively conveying the luxury and sophistication synonymous with HARPER’s brand.</div>
                                        <div>Another significant aspect of this project was the establishment and enhancement of HARPER’s social media presence. The solution strategically leveraged social media channels to drive customer engagement, actively directing users to the brand through compelling content.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div onClick={() => toggleDropdown(4)} className="flex flex-col items-start justify-between cursor-pointer gap-6">
                                        <div className="font-normal text-4xl leading-tight">Brand Strategy, Brand Identity, UX, UI, Web Design, Web Development, Web Maintenance</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>Gen Solution case study</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[4] ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-2xl underline leading-7 pt-8 text-[#7811A5] "><a href="https://gensolutionsllc.com" target='blank'>GEN Solutions</a></div>
                                    <div className='flex flex-col items-start gap-6 leading-7'>
                                        <div>Rapid growth can be a double-edged sword. When Exact Solutions, a leading IT provider for legal firms, found themselves facing this challenge, they knew it was time to rebrand.</div>
                                        <div>The Backstory</div>
                                        <div>Gen Solutions is a successful IT support and services company, with particular emphasis on supporting legal chambers and law firms. With over 20 years of experience, Gen Solutions navigates the ever-evolving technology landscape, ensuring they’re equipped to meet today’s and tomorrow’s demands.</div>
                                        <div>The Problem</div>
                                        <div>Rapid growth and a desire to enter new industries necessitated a revaluation of their brand identity. They needed a clear, compelling message to stand out in a crowded marketplace.</div>
                                        <div>The Solution</div>
                                        <div>Our collaboration with Gen Solutions began with a brand strategy workshop. By facilitating discussions on their mission, vision, and values, we laid the groundwork for crafting a powerful brand narrative. The core concept of “keeping you connected” emerged, reflecting Exacts expertise and unwavering dedication to client support. We built upon this with a powerful mission statement: “Always on, never off” – a reassuring constant in a world of change. Recognising the generic nature of ‘Solutions’ the decision was made to remove it from the logo, allowing Exact to stand out with a more unique brand identity.</div>
                                        <div>This strategic positioning became the foundation for defining Exacts overall brand personality: innovative, future-focused, customer-centric, and expert. Our logo design captured this essence, incorporating a forward-looking sense of motion with a subtle reference to a power button. The resulting symbol conveys reliability and strength while hinting at the companys commitment to “always on” service.</div>
                                        <div>The visual identity extends beyond the logo itself. We created a clean and professional aesthetic that prioritises innovation and expertise while maintaining the dynamic sense of movement.</div>
                                        <div>The Result</div>
                                        <div>Through this collaborative branding process, Gen Solutions has a clear and differentiated identity that resonates with its current and future client base. The new brand foundation empowers them to confidently expand into new industries while staying true to their core values and commitment to exceptional service.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            <div className="py-12 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div onClick={() => toggleDropdown(5)} className="flex flex-col items-start justify-between cursor-pointer gap-6">
                                        <div className="font-normal text-4xl leading-tight">Design and development of website and mobile app Content Strategy, Video, Social Media Strategy, Content Creation, Social Media Management, Paid Social Advertising</div>
                                        <div className='flex items-center gap-4'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>Deliveroo case study</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[5] ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="text-2xl underline leading-7 pt-8 text-[#7811A5] "><a href="https://deliveroo.co.uk/" target='blank'>Deliveroo</a></div>
                                    <div className='flex flex-col items-start gap-6 leading-7'>
                                        <div>Deliveroo is an exquisite Italian all day dining experience that was looking to enhance its digital presence and boost brand awareness. Located in the heart of London, Deliveroo offers artisanal bakery products crafted with exclusively sourced Italian ingredients.</div>
                                        <div>The Backstory</div>
                                        <div>With a commitment to quality and authenticity, Deliveroo was looking to elevate brand visibility and engage a wider audience. Understanding Deliveroo’s vision, we implemented a social media strategy to transform their online presence.</div>
                                        <div>The Solution</div>
                                        <div>1. &nbsp;&nbsp; Visual content creation: we crafted visually stunning content tailored for Instagram, Facebook, and TikTok, showcasing Deliveroo’s offerings and the essence of the Sicilian experience.</div>
                                        <div>2. &nbsp;&nbsp; Copywriting: engaging and compelling copywriting was crafted for each platform.</div>
                                        <div>3. &nbsp;&nbsp; Content management: our team took charge of content scheduling, ensuring a consistent and appealing presence on social media.</div>
                                        <div>4. &nbsp;&nbsp; Paid social media management: targeted paid campaigns were strategically designed to amplify Deliveroo’s reach.</div>
                                        <div>5. &nbsp;&nbsp; Photography and videography: we captured images and videos to highlight Deliveroo’s experience</div>
                                        <div>6. &nbsp;&nbsp; Image and video editing: we edited every piece of content to ensure it aligned with Deliveroo’s brand aesthetic</div>
                                        <div>The Result</div>
                                        <div>The implementation of our social media strategy shows remarkable results for Deliveroo:</div>
                                        <div className='flex items-center gap-6'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>Significant increase in engagement</div>
                                        </div>
                                        <div className='flex items-center gap-6'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>Expanded audience reach</div>
                                        </div>
                                        <div className='flex items-center gap-6'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>Elevating brand presence</div>
                                        </div>
                                        <div className='flex items-center gap-6'>
                                            <div className='bg-white rounded-full p-1'></div>
                                            <div className='text-base'>Driving tangible results in business</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                            <button className="button self-end flex flex-row justify-between px-12 py-3 mt-20 mx-auto leading-none bg-white hover:text-white text-black gap-8 rounded-[1000px] max-md:px-5 hover:bg-[#7811A5] transition-all duration-300">
                                <h1 className='text-base mt-1 font-arial'>Load More</h1>
                                <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                            </button>
                        </div>
                    </div>
                </section>

                <section className='px-6 md:px-16 pb-20'>

                    <div className='w-full flex items-start justify-between flex-col lg:flex-row gap-6 mb-20 text-white'>
                        <div className='text-[2.5rem]'>We get results</div>
                        <div className='w-full lg:w-2/5'>Using a unique Continuous Discovery / Continuous Delivery approach coupled with cutting-edge technologies, we design, develop and deliver your end to end to ensure you’re consistently meeting user needs and driving business value.. See below for just a few examples of the impact we've helped create for clients.</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 text-white text-4xl font-normal">

                        <div onMouseEnter={() => toggleShowDetails(0, true)}
                            onMouseLeave={() => toggleShowDetails(0, false)}
                            className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[0] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We understand that people communicate best with people.</div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>95%</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(1, true)}
                            onMouseLeave={() => toggleShowDetails(1, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[1] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We are focused on three areas of business Strategy, Brand and Digital.</div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>+80k</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(2, true)}
                            onMouseLeave={() => toggleShowDetails(2, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[2] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We energise brands by unlocking opportunities to deliver real brand performance.</div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>99%</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(3, true)}
                            onMouseLeave={() => toggleShowDetails(3, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[3] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We build and develop highly optimised digital experiences </div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>185h</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(4, true)}
                            onMouseLeave={() => toggleShowDetails(4, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[4] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>Experience of working in the B2B + B2C space allows us to seamlessly work</div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>10Y</div>
                            )}
                        </div>

                        <div onMouseEnter={() => toggleShowDetails(5, true)}
                            onMouseLeave={() => toggleShowDetails(5, false)} className="border relative hover:bg-[#7811A5] border-[#D8D8D8] w-full aspect-square flex items-center justify-center overflow-hidden p-6 transition-all duration-300">
                            {showDetails[5] ? (
                                <div className='text-lg text-center font-normal leading-7'>
                                    <div>We work with world’s most ambitious, innovative businesses.</div>
                                </div>
                            ) : (
                                <div className='text-5xl font-bold'>81%</div>
                            )}
                        </div>
                    </div>
                </section>

                <section className='px-6 md:px-16 pb-20'>

                    <div className='w-full flex items-start justify-between flex-col lg:flex-row gap-6 pb-20 text-white'>
                        <div className='text-[2.5rem]'>We win awards</div>
                        <div className='w-full lg:w-2/5'>We are informed strategy and target audience, details of any challenges faced and why you think your campaign achieved the desired outcomes and succeeded globally. We are proud!!</div>
                    </div>

                    <div className='text-white'>

                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4'>
                            <div className='text-xl'>2023</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>SEO Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Global Agency Awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>PPC Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Global Agency Awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Integrated Search Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Global Agency Awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Social Media Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Global Agency Awards</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4'>
                            <div className='text-xl'>2022</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Business and Global Award</div>
                                    <div className='w-1/2 text-right md:text-left'>London, Best Market Research Agency</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Content Marketing Agency Award</div>
                                    <div className='w-1/2 text-right md:text-left'>Third Eye Awards 2022</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>AFR BOSS Most Innovative Companies</div>
                                    <div className='w-1/2 text-right md:text-left'>3rd Most Innovative Media and Marketing Company in Australasia</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4'>
                            <div className='text-xl'>2021</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Creative Marketing Agency India Award</div>
                                    <div className='w-1/2 text-right md:text-left'>Best Innovation Program of India</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4'>
                            <div className='text-xl'>2020</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>AFR BOSS Most Innovative Companies</div>
                                    <div className='w-1/2 text-right md:text-left'>Best Innovation Program</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4'>
                            <div className='text-xl'>2018</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>HUBDIL Innovation Awards 2017-2018</div>
                                    <div className='w-1/2 text-right md:text-left'>Research Effectiveness Awards, Gold Member</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Buzz Most Innovative Companies</div>
                                    <div className='w-1/2 text-right md:text-left'>Buzz Most Innovative Companies</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>AI Chatbot Most Innovative Companies</div>
                                    <div className='w-1/2 text-right md:text-left'>Most Innovative Company in India</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Silicon India Magazine Business Awards</div>
                                    <div className='w-1/2 text-right md:text-left'>Finalist, Company of the Year</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4'>
                            <div className='text-xl'>2017</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Start-up India Multi Business Awards</div>
                                    <div className='w-1/2 text-right md:text-left'>Silicon India 2017</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Start-up India Business Awards</div>
                                    <div className='w-1/2 text-right md:text-left'>Silicon India Innovation 2017</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4'>
                            <div className='text-xl'>2016</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>IOS Development Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Apple Innovation Award</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Marketing Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Winner Platinum - OQEM</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Integrated Search Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Winner Gold - Media & Advertising - In-house</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Creative/Design Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Finalist IVM Awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Independent Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Clutch awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>UX Agency of the Year</div>
                                    <div className='w-1/2 text-right md:text-left'>Silicon India Magazine Cover</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4'>
                            <div className='text-xl'>2015</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Use of AI in Client Campaign</div>
                                    <div className='w-1/2 text-right md:text-left'>Finalist in the World Conference</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4'>
                            <div className='text-xl'>2014</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Global Campaign</div>
                                    <div className='w-1/2 text-right md:text-left'>Google Global Campaign 2014</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Agency Culture</div>
                                    <div className='w-1/2 text-right md:text-left'>Covid Appreciation Awards</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Culture Transformation Initiative</div>
                                    <div className='w-1/2 text-right md:text-left'>In house team support Award</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full my-4"></div>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Flexible Working Policy</div>
                                    <div className='w-1/2 text-right md:text-left'>In house team support Award</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#6C6C6C] h-[1px] w-full"></div>

                        <div className='flex flex-col md:flex-row items-start justify-between gap-8 py-4'>
                            <div className='text-xl'>2013</div>
                            <div className='w-full md:w-3/4'>
                                <div className='flex items-start md:items-center justify-between gap-12 w-full '>
                                    <div className='w-1/2'>Best Inclusion and Diversity Initiative</div>
                                    <div className='w-1/2 text-right md:text-left'>Indian Market Research Team Conference 2012-2013</div>
                                </div>
                                <div className="bg-[#6C6C6C] h-[1px] w-full mt-4"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='pb-0 px-6 md:px-16'>

                    <div className='w-full flex items-start justify-between flex-col lg:flex-row gap-10 pb-20 text-white'>
                        <div className='text-[2.5rem] lg:w-1/4'>And we partner with the best</div>

                        <div className='w-full lg:w-1/2 2xl:w-2/5 flex flex-col md:flex-row items-start gap-2 md:gap-28 font-normal'>
                            <div className='flex flex-col items-start gap-2'>
                                <div>SILICON INDIA</div>
                                <div>CLUTCH</div>
                                <div>ABB</div>
                                <div>BBC WORLD</div>
                                <div>JUST DAIL</div>
                                <div>SUPERIU AWARDS</div>
                                <div>TOOLS OF INDIA </div>
                                <div>BEST AGENCY IN INDIA </div>
                                <div>DESIGN AND DEVELOPMENT</div>
                                <div>JEF TECHNO </div>
                                <div>H&M</div>
                                <div>HDFC BANK</div>
                                <div>INTERNATIONAL ASSOCIATION</div>
                            </div>

                            <div className='flex flex-col items-start gap-2'>
                                <div>PETVEX INDIA </div>
                                <div>LOTTOS FITNESS </div>
                                <div>BMW</div>
                                <div>KOTAL INTERNATIONAL</div>
                                <div>H&U</div>
                                <div>INFOTIK</div>
                                <div>GANESHA EK SANKIRITI</div>
                                <div>BLUE MAIL</div>
                                <div>SPARK INDIA</div>
                                <div>STARBUCKS INDIA</div>
                                <div>TATA CAPITAL</div>
                                <div>ZEPTO</div>
                                <div>RAPIDO INDIA</div>
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

export default Work