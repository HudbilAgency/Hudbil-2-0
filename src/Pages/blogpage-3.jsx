import React from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

const BlogPage3 = () => {

    const ReturntoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const images = [
        {
            src: "/BlogPageImg/bp-21.png",
            alt: "Blog-1",
            content: "One-time actions to regular routines: A guide to strengthening habits",
            date: "August 13, 2024",
            routepath: "#",
        },
        {
            src: "/BlogPageImg/bp-22.png",
            alt: "Blog-2",
            content: "Ripple effect: Connecting with the connected",
            date: "June 19, 2024",
            routepath: "#",
        },
        {
            src: "/BlogPageImg/bp-23.png",
            alt: "Blog-3",
            content: "Podcast: In or out? How brands can look like insiders",
            date: "June 10, 2024",
            routepath: "#",
        },
        {
            src: "/BlogPageImg/bp-24.png",
            alt: "Blog-4",
            content: "Sustainability - who cares?",
            date: "November 29, 2023",
            routepath: "#",
        },
        {
            src: "/BlogPageImg/bp-24.png",
            alt: "Blog-5",
            content: "Sustainability - who cares?",
            date: "November 29, 2023",
            routepath: "#",
        }
    ];

    return (
        <>
            <Navbar />
            <main className='pt-[40px]'>
                <div className='flex items-center gap-3 pt-20 px-6 lg:px-16'>
                    <div>
                        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.6 1L1.5 6L6.6 11" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.4998 6H3.7998" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='font-normal text-sm text-[#838383]'>
                    <a href='/blogs'>Return to Insights</a>
                        
                    </div>

                </div>
                <div className='font-normal text-3xl md:text-4xl pt-10 px-6 lg:px-16 lg:hidden leading-snug'>
                Brand’s identity design aspects in Brief
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-10 py-10 lg:pt-10 lg:pb-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal text-4xl pb-12 hidden lg:block leading-snug'>
                            Brand’s identity design aspects in Brief
                            </div>
                            <div>
                                <img className='w-full' src="./blogpage3.png" />
                            </div>
                            <div className='flex flex-col gap-8 pt-12'>

                                <div className='leading-7 font-normal text-base'>Brand identity is the array of elements that an organisation creates to convey the right image to its audience. Brand identity is partially different from brand image and branding. As branding is generally a marketing practice whereas brand refers to the company’s image or perception in the world’s eyes.</div>
                                <div className='leading-7 font-normal text-base'>Brands’ image is everything, every brand has its characteristics, message and emotional connection with its audience and consumers. The emotional connection is crucial as it develops a connection between both the brand and consumers which somehow contributes to the overall brand experience.</div>
                                <div className='leading-7 font-normal text-base'>No matter what your business is, here are the most important aspects of a brand’s identity designs. These are essential aspects one needs to follow. There are branding companies that design and make your brand unique and stand out in the crowd.</div>
                                <div className='leading-7 font-normal text-base'>Let’s look at the key factors and important aspects of brand identity design.</div>
                                <div className='leading-7 font-normal text-base'>Clear purpose and positioning</div>
                                <div className='leading-7 font-normal text-base'>Every organisation has some purpose so your brand has a simple question in the initial stage of any company: what your product is? Is it better than your competitors? What are your targeted customers? Answers to all these questions can help you to define an overall brands design strategy of choosing a logo, tagline, colours and so on.</div>

                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Market research & Surveys</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Market research is an initial stage process that helps you to identify the needs of people and what they are looking for in any brand. You can conduct online surveys and telephonic interviews. The simplest way to complete this task is to talk with people and understand their needs and demands.</div>
                                        <div>There are multiple organisations, especially working to offer you a wide range of services to understand your brand market and in finding your products appealing to which section of society. This helps in understanding and developing the other major aspects of brand identity.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Logos & Tagline</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>This is the first and foremost factor we need to develop and is considered a vital part of any company or brand. it is something which your customers remember and identify, the minimalistic approach and choosing the right structure promote the purpose and name of your company. The logo needs to be something unique and memorable conveying the emotional attachment you want to build among your audience.</div>
                                        <div>The tagline is quite an important factor as it is usually placed below your company logo, and also portrays who you are? and the promise you make to your customers. It helps to highlight your mission, purpose and culture in a few words. Every brand wants to create uniqueness and brand identity designer are well-known persons to design that thoughtful logo.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Typography</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In delivering a clear brand identity, it is essential to use the professional font family and avoid mixing two font families. A good research or brand identity design agency can help you to find the designs of the suitable fonts which appeal to your brand.</div>
                                        <div>Investing in ‘brand identity designers’ is a good idea as they know what kind of font size, spacing, capitalization and maximum usage of font types and in making the consistency throughout.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Colour palate</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Colours are known to influence our mood, as they have psychological connotations. The relationship of humans with colours is too old and natural. Brands’ colours need to be appealing to their products and soothing to the heart, for example, pink is considered feminine, so if your company’s products are inclined towards females then it’s a good bet the same as purple is known to be a colour of royalty which means companies having a luxurious range of products can use this.</div>
                                        <div>A branding identity agency knows what colour combination suits your business and hiring one for this purpose is a win-win situation. They generally have data on each and their experienced team knows the ideology of common mind and perspective from old conducted survey data.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Patterns</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Every brand needs recognition among common people, patterns are a type of sub-mark or alternative design element of your marketing. In building consistency and uniqueness in business while creating more brand recognition.</div>
                                        <div>Every organisation wants to create an overall branding experience so putting patterns on shopping bags, business cards, brochures, shop walls and a lot more places contributes to Company Brand Design.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Images and animation</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Images of your brand’s product, which appeals to the major section of your targeted audience and fashion statement. The trend for animations is observed in the era of the digital industry as visual memories are considered the strongest memories so to attract customers via your websites and ads one can use animations.</div>
                                        <div>Lots of successful brand identity design services companies suggest having animations and the introduction of characters to promote the brand and products simultaneously.  If animations are not suitable for your company image then good images can add a unique perspective to the brand identity.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Graphics and iconography</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>The digital platforms and standard icons are the new age promotional way to create your business product posters or representation unique. The graphics are an effective way to convey your messages while iconography is used to define functionality, features and content.</div>
                                        <div>There are standard sets of icons which are globally accepted and using them on your websites and other marketing places helps in portraying in-depth messages and information. Also, it minimises the content spacing and creates simple, clean posters.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Conclusion</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>We hope you get informative knowledge about the brand’s identity design structure and the importance of it to use this in your business. If you wanted to create your business as a global brand.</div>
                                        <div>Then we are here to help you we are the leading player in the business and provide comprehensive service to make your brand recognition. At Hudbil we provide the best branding solutions for your business.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-16 md:mt-20 w-full flex items-center justify-center'>
                                <button onClick={ReturntoTop} className='w-fit bg-[#F0F0F0] text-black transition-all duration-500 hover:text-white hover:bg-black text-[0.9rem] border rounded-full gap-6 px-20 py-3'>
                                    <div>Return to top   ↑</div>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className='hidden lg:block w-[1px] absolute bg-[#7e7676] opacity-50 h-full'></div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/3'>

                        <div className='flex flex-col gap-4 pb-12'>
                            <div className='flex flex-col items-start gap-1'>
                                <div className='leading-7 font-normal text-base text-[#454343]'>
                                    <div>Published</div>
                                </div>
                                <div className='font-normal text-[1.3rem] leading-9'>
                                    <div>August 13, 2024</div>
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-1'>
                                <div className='leading-7 font-normal text-base text-[#454343]'>
                                    <div>Written By</div>
                                </div>
                                <div className='font-normal text-[1.3rem] leading-9'>
                                    <div>Malakh Jibril</div>
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-1'>
                                <div className='leading-7 font-normal text-base text-[#454343]'>
                                    <div>Reading Time</div>
                                </div>
                                <div className='font-normal text-[1.3rem] leading-9'>
                                    <div>8 Min</div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full border border-[#B0B0B0] border-opacity-75 rounded-lg'>
                            <div className='font-normal text-2xl leading-9 py-6 px-6'>Contents</div>
                            <div className='flex flex-col gap-4 pb-6 text-[#454343]'>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>1.</div>
                                    <div>Brand Identity Brief</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>2.</div>
                                    <div>Market research & Surveys</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>3.</div>
                                    <div>Logos & Tagline</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>4.</div>
                                    <div>Typography</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>5.</div>
                                    <div>Colour palate</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>6.</div>
                                    <div>Graphics and iconography</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-[#2D2D2E] md:mt-8 2xl:mt-4 pt-28 pb-20 px-6 lg:px-16'>
                    <div className='w-full flex flex-col md:flex-row gap-12 md:gap-0 items-start justify-between text-white'>
                        <div className='w-full md:w-1/2 text-3xl leading-6 font-normal'>ABOUT THE AUTHOR</div>
                        <div className='flex flex-col gap-5 w-full md:w-2/5 lg:w-1/3'>
                            <div className='flex items-start gap-5'>
                                <div><img src="./malakhlogo.png" alt="malakh jibril" /></div>
                                <div className='flex flex-col items-start text-lg font-normal leading-7'>
                                    <div>Malakh Jibril</div>
                                    <div className='text-[#838383] text-sm'>Brand Consultant</div>
                                </div>
                            </div>
                            <div className='leading-6'>I work with small companies, helping start-ups to launch and get off the ground. I have also worked with well-established SME's helping them to develop brand and or move into new markets and overseas. I have built, trained and monetised digital departments within agencies. I have also re-organised the marketing functions within a business building in-house agency style communications teams.</div>
                        </div>
                    </div>
                    <ReachUsBlog />
                    <div className='text-white text-3xl mb-16 md:mb-24 leading-snug'>
                        More on BEHAVIOUR CHANGE
                    </div>
                    <div className='-mx-6 lg:-mx-16'>
                        <CarouselBlogPage images={images} />
                    </div>
                </section>

            </main>
            <Footer />

        </>
    )
}

export default BlogPage3