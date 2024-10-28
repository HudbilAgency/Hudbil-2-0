import React, { useRef } from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet';

const BlogPage10 = () => {

    const ReturntoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const pointsRefs = useRef([]);

    const handleScroll = (index) => {
        if (pointsRefs.current[index]) {
            pointsRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Helmet>
                <title>Accessible Design in Our Industries | Enhancing Inclusivity</title>
                <meta name="description" content="Discover how prioritizing accessible design benefits businesses across sectors. Our insights explore the positive impact on customer engagement and brand reputation"></meta>
                <meta property="og:url" content="www.hudbil.com/blogs/the-importance-of-accessible-design"></meta>
                <meta name="keywords" content="Accessible design, Inclusive design principles, User experience for all, Industry-specific accessibility, Design for disabilities,Usability enhancements, Importance of accessibility, Digital inclusivity, Best practices in accessible design, Accessibility in web design"></meta>
                <meta name="og:description" content="Meta description highlighting the role of accessible design in enhancing usability and inclusivity across various industries."></meta>
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
                <div className='flex items-center gap-3 pt-20 px-6 lg:px-16'>
                    <div>
                        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.6 1L1.5 6L6.6 11" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.4998 6H3.7998" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='font-normal transition-all hover:text-gray-400 duration-300 text-sm text-[#838383]'>
                        <a href='/our-blogs'>Return to Insights</a>

                    </div>

                </div>
                <div className='font-normal text-3xl md:text-4xl pt-10 px-6 lg:px-16 lg:hidden leading-snug'>
                    The Importance of Accessible Design
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-10 py-10 lg:pt-10 lg:pb-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal text-4xl pb-12 hidden lg:block leading-snug'>
                                The Importance of Accessible Design
                            </div>
                            <div>
                                <img className='w-full' src="/blogpage10.png" />
                            </div>
                            <div className='flex flex-col gap-8 pt-12'>

                                <div className='leading-7 font-normal text-base'>Thousands of possible customers may be lost if website accessibility is not offered to
                                    users. For this reason, accessible web designs aim to create frontend designs and
                                    interfaces which can be easily understood by audiences both with and without a
                                    disability. Globally, many people have differing accessibility requirements such as the
                                    elderly, colour blind, dyslexic, autistic or visually impaired. The aim of web accessible
                                    design is not to meet the needs of all these people but rather to improve usability for
                                    all types of users in general.</div>
                                <div className='leading-7 font-normal text-base'>Following the global Web Content Accessibility Guidelines (WCAG) 2.1, compliant designs can accommodate for low vision, low hearing, speech disabilities,
                                    photosensitivity, as well as other cognitive limitations. Aside from being morally
                                    correct, designing for web accessibility brings vast benefits for businesses and users
                                    alike.</div>
                                <div ref={(el) => (pointsRefs.current[0] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Expand Your Market Potential</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>The concept of web accessibility focuses on reaching the widest audience possible
                                            by not excluding certain demographics. More often than not, accessibility is the first
                                            element to be culled from a creative brief due to budget or time constraints.</div>
                                        <div>However, these concerns can be offset by the potential wider audience. One
                                            example of a web accessible design solution is to add legible, high-contrast captions
                                            to videos. Whilst not always necessary, these inclusive measures increase the
                                            receptivity of your content and can even enhance the user experience in certain
                                            contexts. These simple creative additions ensure that content can be received by
                                            individuals of all abilities and ultimately expand your userbase.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[1] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Boost Your Brand Image</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>There is nothing consumers love more than a customer-centric brand. Hence, the
                                            website behaviour of your users must be aligned with the design of your digital
                                            interface. Pineapples are not everyone’s ideal pizza topping but any website visitor
                                            should be easily able to add this to their order, whether they like them or not. The
                                            addition of web accessible design elements tells consumers that your brand is
                                            inclusive, considerate, and capable.</div>
                                        <div>An accessible web interface can be the deciding factor when consumers are
                                            navigating heavily congested webpages. It should also be noted that web
                                            accessibility does not have to be bland and boring, but rather, the correct digital
                                            design can be used to make interfaces aesthetic and reflect your brand image
                                            adequately.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[2] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Website Accessibility Standards</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Visual accessible design is more than just increasing font size or using contrasting
                                            colours. It’s about using an array of various design elements to enhance inclusivity
                                            as much as possible.</div>
                                        <div>Think Creative Agency has a wealth of experience designing web accessible
                                            projects for both government agencies and clients within the disability sector. We
                                            strive to adhere to the WCAG’s four key POUR principles:</div>
                                        <div className='flex flex-col gap-2 md:ml-6'>
                                            <li>Perceivable- such as larger text, Braille, speech, symbols, simple language options.</li>
                                            <li>Operable – including buttons to help users navigate and find content.</li>
                                            <li>Understandable – web pages should appear and operate in predictable intuitive ways.</li>
                                            <li>Robust – including assistive technologies such as Voice recognition.</li>
                                        </div>
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
                                <div onClick={() => handleScroll(0)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>1.</div>
                                    <div>Expand Your Market Potential</div>
                                </div>
                                <div onClick={() => handleScroll(1)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>2.</div>
                                    <div>Boost Your Brand Image</div>
                                </div>
                                <div onClick={() => handleScroll(2)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>3.</div>
                                    <div>Website Accessibility Standards</div>
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
                                <div><img src="/malakhlogo.png" alt="malakh jibril" /></div>
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
                        <CarouselBlogPage />
                    </div>
                </section>

            </main>
            <Footer />

        </>
    )
}

export default BlogPage10