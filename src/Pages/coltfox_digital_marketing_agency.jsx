import React from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import ReachUs from '../Components/ReachUs';


const Coltfox_digital_marketing_agency = () => {

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
                    <a href='/hudbil-tabloids'>Return to Tabloids</a>
                        
                    </div>

                </div>
                <div className='font-normal text-3xl md:text-4xl pt-10 px-6 lg:px-16 lg:hidden leading-snug'>
                Hudbil welcomes Coltfox of new
                hires; bolstering expertise
                across marketing segment
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-10 py-10 lg:pt-10 lg:pb-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                        <div className='font-normal xl:text-[3rem] w-[80%] text-4xl hidden lg:block leading-tight'>
                            Hudbil welcomes Coltfox of new
                            hires; bolstering expertise
                            across marketing segment 
                            </div>
                            <div className='flex flex-col gap-8 pt-6'>

                                <div className='flex flex-col items-start gap-4'>
                                <div className='font-normal text-2xl leading-9'>
                                        <div>Turn your customer journey map into optimized customer experiences by Coltfox Digital
                                        Marketing Agency</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Hudbil Private Limited has introduced Coltfox has the only creative digital marketing agency
                                            as a branch under Hudbil Umbrella. From fixed mindset to growth mindset</div>
                                        <div>Growth mindset is a strategic approach to Coltfox that focuses on driving rapid and
                                            sustainable growth for businesses. It involves using various content & marketing tactics,
                                            data analysis, and experimentation to acquire and retain customers, increase revenue, and
                                            expand the customer base.</div>
                                            <div>With more than two decades of experience, Hudbil has become a leader in branding,
                                                designing and development agency. We’ve reached here by giving several tests and we’re
                                                always ready for the next one. We have branched out a Coltfox to take care of the trending
                                                demand of Content and Digital marketing services for its customer who opt for the
                                                designing and development solutions by Hudbil, this creates a momentum among the
                                                customers and experts to handle tasks with goal ordinated system.</div>
                                            <div>It’s the reason of our existence.</div>
                                            <div>We love doing what</div>
                                            <div>we were meant to do.</div>
                                            <div>We keep working. We keep falling in love with what we have been doing. We keep enjoying
                                                the process. During this process, we keep adding new skills, we keep evolving and we keep
                                                taking risks. Sometimes, we get stuck. Sometimes, we move ahead. And sometimes, we feel
                                                that “Hudbil” is helping us. All through these years, we have learnt so many things and
                                                unlearnt some too. This is our story. And honestly, we are enjoying it to the fullest.</div>
                                            <div>Come lets celebrate this journey together and welcome <a href='https://coltfox.com/' className='text-blue-800 underline'>Coltfox – www.coltfox.com</a> to help
                                            you serve better with content and marketing services worldwide.</div>    
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
                                    <div>Dec 17, 2017</div>
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
            <ReachUs/>
            <Footer />

        </>
    )
}

export default Coltfox_digital_marketing_agency