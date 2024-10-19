import React from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import ReachUs from '../Components/ReachUs';


const Website_design_agency = () => {

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
                <div className='flex items-center gap-3 pt-20 px-6 lg:px-10'>
                    <div>
                        <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.6 1L1.5 6L6.6 11" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.4998 6H3.7998" stroke="#838383" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className='font-normal text-sm text-[#838383]'>
                    <a href='/hudbil-tabloids'>Return to Tabloids</a>
                        
                    </div>

                </div>
                <div className='font-normal text-3xl md:text-4xl pt-10 px-6 lg:px-10 lg:hidden leading-snug'>
                The Early Web Design Days
                (1991-1994)
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-10 py-10 lg:pt-10 lg:pb-20 2xl:pb-28 px-6 lg:px-10'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal xl:text-5xl w-[80%] text-4xl hidden lg:block leading-snug'>
                            The Early Web Design Days
                            (1991-1994)
                            </div>
                            <div className='flex flex-col gap-8 pt-6 px-2 lg:px-7'>

                                <div className='flex flex-col items-start gap-4'>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>The very first website on the World Wide Web was created by Tim Berners-Lee who
                                            designed the website at the Swiss research centre, CERN (European Organization for
                                            Nuclear Research). You can still access the basic CERN website which was developed for the
                                            purpose of distributing information to other researchers.
                                        </div>
                                        <div>Not only is Berners-Lee credited as the first web designer, he also created Hypertext
                                            Markup Language (HTML), with which he coded the CERN site. He would go on to found
                                            the World Wide Web Consortium which still oversees development of web standards today.
                                        </div>
                                        <div>
                                            In the early web design days, HTML’s &lt;table&gt; function was the only way to organize
                                            information by assigning data to columns and rows. No colour blocks, no images, no
                                            graphics, just text. A far cry from what we consider “web design” today.
                                        </div>
                                        <div>
                                            The World Wide Web continued to grow and only 2 years later, the world’s first search
                                            engine was born. ALIWEB (Archie Like Indexing for the Web), was a web page that organized
                                            links into the categories of computing, entertainment, living, money, newsstand, recreation,
                                            research, and shopping.
                                        </div>
                                        <div>
                                            ALIWEB also utilized a new form of organization – colour. A yellow background separated
                                            the categories and made it easier for users to quickly identify what they were looking for.
                                            Like the first website, ALIWEB is still alive today. In fact, clicking the “BMW” link in the Auto
                                            category will take you to BMW’s present-day site.
                                        </div>
                                        <div>
                                            As the number of websites grew, so did the concept of using website design to achieve
                                            business goals. Landing pages began to sprout up around 1993, and drew users in with
                                            colour and invitations to “Click Here to Enter”, or “Sign Up Now”.
                                        </div>
                                        <div>
                                            Hotwire (now Wired Magazine) pioneered the first web banner ad in 1994, and had the
                                            subtle message of, “Have you ever clicked your mouse right here? You will”. Brilliant.
                                            Websites exploded in popularity in the early 90s. One website in 1991. A total of 2,738 in
                                            1994. And for historical context, Jeff Bezos launched Amazon.com in 1994.
                                            Houston, we have liftoff.
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
            <ReachUs/>
            <Footer />

        </>
    )
}

export default Website_design_agency