import React from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Footer from '../Components/Footer'

const BlogPage2 = () => {

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
            <main>
                <div className='font-normal text-4xl pt-20 px-6 lg:px-16 lg:hidden leading-snug'>
                    The Evolution Of The Graphic Design
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-10 py-10 lg:py-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal text-4xl pb-12 hidden lg:block leading-snug'>
                                The Evolution Of The Graphic Design
                            </div>
                            <div>
                                <img className='w-full' src="./blogpage2.png" />
                            </div>
                            <div className='flex flex-col gap-8 pt-12'>

                                <div className='leading-7 font-normal text-base'>The graphic design industry is one of the oldest industries this world has witnessed and the nostalgia journey of its evolution makes this industry stands apart from other ones. Want to know why? Come and ride into the blog to have an answer.</div>
                                <div className='leading-7 font-normal text-base'>Can we imagine this world without the design industry our life revolves around for hundreds of decades? The answer will be NO. Graphic design is everywhere from what we wear to what we see around us, this industry has been chasing us for years. With thousands of years of old history when our early ancestors used to drawn pictures on the cave, walls, and rocks to the current digital techniques of daily implementing the abundant of design concepts, this industry has evolved so much and is still evolving.</div>
                                <div className='leading-7 font-normal text-base'>William Addison Dwiggins an American type designer, calligrapher, and book designer was the first person to call “Graphic Designer” in 1922 and hence he was the one who created the term “Graphic Design” to describe the art of designing with graphics.</div>
                                <div className='leading-7 font-normal text-base'>Graphic Design has begun to set its roots in the year 1440 after the invention of the printing press but caveman times brought the visual communication into the big picture. Talking about the era of 90’s it was actually the time for experimenting with art and design with so many inventions expanding their presence.</div>
                                <div className='leading-7 font-normal text-base'>In this section, we will take a deep throwback journey of the time of the ’90s where the evolution was slowly transforming into what we see today in the world of graphic design. After that, we will discuss the current design
                                    scenario abreasts of what the future is holding for this oldest industry.</div>
                                <div className='leading-7 font-normal text-base'>Graphic Design in the 19 th  Century: The beginning of technological advancements. The beginning of the modern era we know as the 20 th  century is a complete dynasty of the 19 th century where technologies had been evolving into new
                                    capabilities. Thanks to the 19 th century as what we watch in today’s date is actually exploitation of these capabilities to have more artistic aims.</div>

                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>The beginning of Advertising and Branding</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Talking about early centuries disco typography, cartoon-style iconic images, bell bottoms, neon lettering were on the peak but it was the time of the 1900s when branding and advertising in the form of posters actually came on board and became a form of expression. Posters printed with large wood types were used extensively to advertise new modes of
                                            transportation, entertainment, and manufactured goods throughout the 19th century and as a result, typefounders developed larger sizes of types for use on posted announcements and innovated new typefaces including sans serif, slab serif, and decorative designs.</div>
                                        <div>This is the time when the offset lithographic printer was invented in 1903 and printing onto almost any surface could now be done. Aloys Senefelder of Bavaria who discovered the lithography process in the 1790s and it’s color version, called chromolithographs, were widely used in the second half of the 19th century and changed the look of the packaging that the goods being advertised were sold in.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>The debut of Digital Design Technology</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>1984 was the year when the first MAC came into picture becoming the first mass-market personal computer that featured a graphical user interface, built-in screen, and mouse. It was referred to as Apple Macintosh. Later on, in 1985, John Warnock, Charles Geschke of Adobe systems had created a programming language PostScript to control output devices like laser printers. Moving forward, the era of the ’90s brought photoshop first version 1.0 on the screens. The emergence of photoshop in 1990 evolved designers ability to experiment more with new designs and photo manipulations become easy than before.</div>
                                        <div>It was the same time when Tim-Berners Lee developed the concept of the World Wide Web along with HTML and implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the internet.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Future</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Trends change from years to years and months to months but what will be going to stay in the graphics industry is the use of more personalized and interactive designs. No matter wherever design goes next, and no matter in which decade we enter next to, User experience designs will surely going at the upfront with us. Technology will become more advanced and digitalization is only going to step ahead of us.</div>
                                        <div>With thousands of years of history and another thousand years and much more. The graphic design industry has always surprised us with its varying nature of adopting new techniques that come in its way and will remain to surprise us with the new advancement in design techniques in the upcoming future.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Conclusion</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In this blog, we have experienced a walk down memory lane of the 19 th  century including the birth and evolution of some trends and platforms. We have also discussed how the graphic design industry transformed itself into the latest shift of digital technology, what is the graphics industry in today’s date and how we see the industry over the next decades.</div>
                                        <div>Now, Just a question, If there would be any time machine to take you in the back ’90s in which year you would like to drop in and what is the most exciting thing about that time?</div>
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
                                <div className='font-normal text-[1.4rem] leading-9'>
                                    <div>August 13, 2024</div>
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-1'>
                                <div className='leading-7 font-normal text-base text-[#454343]'>
                                    <div>Written By</div>
                                </div>
                                <div className='font-normal text-[1.4rem] leading-9'>
                                    <div>Malakh Jibril</div>
                                </div>
                            </div>
                            <div className='flex flex-col items-start gap-1'>
                                <div className='leading-7 font-normal text-base text-[#454343]'>
                                    <div>Reading Time</div>
                                </div>
                                <div className='font-normal text-[1.4rem] leading-9'>
                                    <div>8 Min</div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full border border-[#B0B0B0] border-opacity-75 rounded-lg'>
                            <div className='font-normal text-2xl leading-9 py-6 px-6'>Contents</div>
                            <div className='flex flex-col gap-4 pb-6 text-[#454343]'>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>1.</div>
                                    <div>Graphic Design Industry?</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>2.</div>
                                    <div>Important People</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>3.</div>
                                    <div>Beginning of Advertising and Branding</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>4.</div>
                                    <div>Debut of Digital Design Technology</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>5.</div>
                                    <div>Future</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>6.</div>
                                    <div>Top UX Research Methods</div>
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

export default BlogPage2