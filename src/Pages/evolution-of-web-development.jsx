import React from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import ReachUs from '../Components/ReachUs';
import { Helmet } from 'react-helmet';

const Evolution_of_web_development = () => {

    const ReturntoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <Helmet>
                <title>The Global Web Evolution | Industries Shaped by Change</title>
                <meta name="description" content="Discover how the evolution of the web has shaped various industries worldwide. Explore our insights into the transformative impact of digital technologies."></meta>
                <meta property="og:url" content="www.hudbil.com/tabloids/evolution-of-web"></meta>
                <meta name="keywords" content="Evolution of the web, Global web development, Digital transformation, Web technology advancements, Industry impact of the web, Online business evolution, Digital landscape changes, Internet history, Web innovations, Transformative technologies"></meta>
                <meta name="og:description" content="highlighting the historical milestones in web development and their significance for different sectors."></meta>
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
                    <div className='font-normal text-sm text-[#838383]'>
                        <a href='/tabloids'>Return to Tabloids</a>

                    </div>

                </div>
                <div className='font-normal text-3xl md:text-4xl pt-10 px-6 lg:px-16 lg:hidden leading-snug'>
                    The Evolution of Web Development
                    (1995-2000)
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-10 py-10 lg:pt-10 lg:pb-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal xl:text-[3rem] w-[80%] text-4xl hidden lg:block leading-tight'>
                                The Evolution of Web Development
                                (1995-2000)
                            </div>
                            <div className='flex flex-col gap-8 pt-6'>

                                <div className='flex flex-col items-start gap-4'>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Once the novelty of simply having a website wore off, it was time to get serious about
                                            effective design. The evolution of web design and development that occurred from 1995 to
                                            1998 would drastically change the history of web design.
                                        </div>
                                        <div>Enter JavaScript. This is where design began to differentiate from development, as
                                            Javascript was the first programming language that could add motion to static websites with
                                            interactive effects.
                                        </div>
                                        <div>
                                            HTML 2.0 was released in 1995, supporting graphics, forms, tables, and more. This gave
                                            developers more creative liberties in page organization.
                                        </div>
                                        <div>
                                            As tools for design and development became more sophisticated, web users began to
                                            expect more from their online experiences. As a result, Apple coined the term, “User
                                            Experience” at a computer systems conference.
                                        </div>
                                        <div>
                                            In 1996, Cascading Style Sheets (CSS) became available and directed the display and style of
                                            HTML coded design elements like colour, layout, and typography. HTML and CSS were a
                                            power duo, but CSS would eventually replace HTML tables with the exception of data
                                            requiring true tabular layout.
                                        </div>
                                        <div>
                                            Web animation was next to the stage, and Macromedia Flash 1.0 took the web by storm.
                                            But it was not without its faults. Animations could only run if a website was equipped with
                                            the Flash plugin extension, otherwise the animation would show up blank. This posed a
                                            significant problem for websites built entirely on Flash. In addition, the heavy lifting that
                                            was required behind the scenes to bring the animations to life also meant slower page
                                            loading.
                                        </div>
                                        <div>
                                            Downfalls aside, Flash ushered in an era of page improvement through movement. It served
                                            the web well and played a significant role in the history of web design. That role, however,
                                            came to an end on December 31, 2020, when Adobe ended the support of Flash and
                                            Windows removed Flash from all browsers.
                                        </div>
                                        <div>
                                            In 1998, Stanford PhD students Larry Page and Sergey Brin launched Google Beta as part of
                                            a research project that explored indexing page results based on relevant search terms. Page
                                            and Brin could not have known the magnitude of what they had just created and how
                                            Google would influence and change both the internet and web designing.
                                            As Google became a major search engine, the term “Search Engine Optimization” began to
                                            be thrown around, and businesses sought ways to improve their rank.
                                            Interestingly, because Flash animation required a plugin extension to work, it was invisible
                                            to Google.
                                        </div>
                                        <div>
                                            Web capability was growing and ecommerce and online payments now allowed businesses
                                            to shift analogy payment processes to digital. PayPal (which was actually named Confinity
                                            for the first two years), launched in 2000 and established itself as a front runner in online
                                            transactions.
                                        </div>
                                        <div>Online shopping anyone?</div>
                                        <div className='flex gap-5 sm:gap-10 lg:gap-28'>
                                            <img src="../HudbilTabloidsImg/htmlImg.png" alt="htmlImg" className='h-9 sm:h-10 md:h-14' />
                                            <img src="../HudbilTabloidsImg/CssImg.png" alt="CssImg" className='h-9 sm:h-10 md:h-14' />
                                            <img src="../HudbilTabloidsImg/FImg.png" alt="Fimg" className='h-9 sm:h-10 md:h-14' />
                                        </div>
                                        <div className='font-normal mt-2 text-2xl leading-9'>
                                            <div>(2000 – 2006)</div>
                                        </div>
                                        <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                            <div>Up until the new millennium, websites had been created for desktop browser windows only.
                                                “Responsive web design” as we know it was still a ways out, but ideas were stirring. In 2000
                                                web design, developers started creating multiple versions of websites to be viewed on
                                                different browsers and devices. While this technically worked, it was time consuming and
                                                impractical. Devices and browsers were constantly evolving and having multiple versions
                                                meant that updates had to be made separately – desktop, tablet, and mobile. Triple the
                                                effort, triple the time.
                                            </div>
                                            <div>As time went on, more and more people created websites for business purposes,
                                                information distribution, and a growing trend – blogging. The need for content management
                                                systems (CMS) grew as it enabled dynamic design and smooth updates to content. And
                                                although various CMS’ had been around in the 1990s, the heavy hitter launched in 2003.
                                                WordPress was originally launched as an open source blogging platform, but steadily grew
                                                and evolved until it became the most popular content management system (CMS) in the
                                                world. In fact, WordPress now powers 35.9% of the internet.
                                            </div>
                                            <div>
                                                This timeline would be remiss if it didn’t acknowledge the entrance of Myspace (2003) and
                                                Facebook (2004). Tom Anderson and Chris DeWolf created Myspace to promote self-
                                                expression through online profile pages and allow users to connect with each other online.
                                                Facebook was founded by Mark Zuckerberg and co. at Harvard University as a campus social
                                                networking site and exploded in popularity worldwide when it went public in 2006. But you
                                                already knew that.
                                            </div>
                                            <div>
                                                The dawn of social media, self-expression, and online connection had arrived, whether we
                                                were ready for it or not, and Myspace and Facebook set the stage for a new level of
                                                interaction. This kicked web design into high gear as there was now a market for designing
                                                ads, widgets for websites, and graphics and images for social profiles.
                                            </div>
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
                                    <div>Oct 15, 2017</div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full border border-[#B0B0B0] border-opacity-75 rounded-lg'>
                            <div className='font-normal text-2xl leading-9 py-6 px-6'>Contents</div>
                            <div className='flex flex-col gap-4 pb-6 text-[#454343]'>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>1.</div>
                                    <div>Why are AI-based chatbots the best option?</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>2.</div>
                                    <div>Sentiments Analysis</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className='bg-[#2D2D2E] md:mt-8 2xl:mt-4 pt-28 pb-20 px-6 lg:px-16'>
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
                </section> */}

            </main>
            <ReachUs />
            <Footer />

        </>
    )
}

export default Evolution_of_web_development