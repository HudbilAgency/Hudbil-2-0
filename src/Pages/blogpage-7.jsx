import React, { useRef } from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet';

const BlogPage7 = () => {

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
                <title>Chatbots in Industry | Transforming Customer Engagement</title>
                <meta name="description" content="Learn about the impact of chatbots across multiple sectors. Our insights showcase the benefits of integrating chatbots into your industry strategy."></meta>
                <meta property="og:url" content="www.hudbil.com/blogs/what-are-chatbots"></meta>
                <meta name="keywords" content="Chatbots, Industry applications of chatbots, Customer engagement solutions, Business operations optimization, AI-powered chatbots, Chatbot technology, Transformative tools, Chatbot integration, Sector-specific chatbot use, Intelligent customer service"></meta>
                <meta name="og:description" content="Our Industries' section focused on the benefits and applications of chatbots across various sectors."></meta>
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
                    What Are Chatbots? Everything Business Owners Should Know.
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-10 py-10 lg:pt-10 lg:pb-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal text-4xl pb-12 hidden lg:block leading-snug'>
                                What Are Chatbots? Everything Business Owners Should Know.
                            </div>
                            <div>
                                <img className='w-full' src="/blogpage7.png" />
                            </div>
                            <div className='flex flex-col gap-8 pt-12'>

                                <div className='leading-7 font-normal text-base'>There are so many benefits for chatbots in business. But, everyone’s favourite tends
                                    to be the cold hard cash you’ll save. That and not having to respond to the same
                                    message over and over and over again.</div>
                                <div className='leading-7 font-normal text-base'>Here are eight reasons why you should work chatbots into your digital strategy.</div>

                                <div ref={(el) => (pointsRefs.current[0] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Improve response time for customer service queries</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Slow, unreliable customer service is a profit-killer. One of the best ways to improve
                                            sales is to improve your response time. In our current age of instant communication,
                                            people expect faster response times.</div>
                                        <div>By using chatbots to automate responses, you can help your customers feel seen,
                                            even if it’s just to say you’ll match them up with a representative as soon as possible.
                                            People who feel heard and respected are much more inclined to buy from your
                                            brand.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[1] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Automate sales</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Chatbots can automate sales tasks for you. They can help lead your customers
                                            through the sales funnel, even processing payments.</div>
                                        <div>Chatbots can also qualify leads for your agents. They’ll take them through an
                                            automated process, eventually pulling out quality prospects for your agents to
                                            nurture. Your sales team can then turn those prospects into lifelong customers.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[2] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>FAQ</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>By relieving your team from answering frequently asked questions, chatbots free up
                                            your team to concentrate on more complex tasks. FAQ chatbots can improve office
                                            productivity, save on labour costs, and ultimately increase your sales.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[3] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Automate customer service tasks</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>You can outsource simple customer service tasks to your chatbot. Use them for
                                            things like comparing two of your products or services, suggesting alternate products
                                            for customers to try, or helping with returns.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[4] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>24/7 support</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>One of the most significant advantages that chatbots have is their always-on
                                            capabilities. Having 24/7 support in place means your employees can take valued
                                            time off, and your customers can have their questions answered during holidays and
                                            after-hours.</div>
                                        <div>Chatbots won’t be short or sarcastic with your customers — unless you program
                                            them to be that way. They have endless patience for questions they’ve already
                                            answered a million times. You can trust chatbots not to make the same mistakes
                                            humans might.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[5] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Save on time and labour</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>With chatbots, you’re buying a computer program, not paying someone’s salary.
                                            You’ll be saving from paying a human being to do the same work. And this way, the
                                            human beings on your team are free to do more complex and engaging work.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[6] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Multi-language support</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>If they’re programmed to be multilingual (and many are), then chatbots can speak to
                                            your audience in their own language. This will increase your customer base and
                                            make it easier for folks to interact with your brand.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[7] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>The dos and don’ts of using chatbots for business</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Chatbots are a great resource, but they shouldn’t be your one and only tool. Make
                                            sure you’re not relying on them for more than you should be. And that you are using
                                            them correctly to maximize your investment.</div>
                                        <div>There are a few basic do’s and don’ts to follow to get the most out of your chatbot.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>DO let human agents handle complicated inquiries</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>There are some things that need to be handled by a human being. Complicated
                                            inquiries or ones full of emotion are among those. Program your bot to hand queries
                                            they can’t answer off to someone on your team.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[8] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>DON’T spam</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>The last thing your customers want is a ton of marketing junk about how great your
                                            brand is. It’s a fast way to get someone to bounce off your page and never return.</div>
                                        <div>Don’t use chatbots for evil. Don’t spam.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[9] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>DO give your chatbot some flair</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Chatbots with personalities make it easier for folks to relate to them. When you
                                            create your bot, give it a name, a distinct voice, and an avatar.</div>
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
                                    <div>Customer Services</div>
                                </div>
                                <div onClick={() => handleScroll(1)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>2.</div>
                                    <div>Automate Sales</div>
                                </div>
                                <div onClick={() => handleScroll(2)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>3.</div>
                                    <div>Faq’s</div>
                                </div>
                                <div onClick={() => handleScroll(3)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>4.</div>
                                    <div>Automate Sales</div>
                                </div>
                                <div onClick={() => handleScroll(4)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>5.</div>
                                    <div>24/7 Support</div>
                                </div>
                                <div onClick={() => handleScroll(5)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>6.</div>
                                    <div>Save time and labour</div>
                                </div>
                                <div onClick={() => handleScroll(6)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>7.</div>
                                    <div>Multiple language support</div>
                                </div>
                                <div onClick={() => handleScroll(7)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>8.</div>
                                    <div>Do’s and Don’ts in Chatbots</div>
                                </div>
                                <div onClick={() => handleScroll(8)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>9.</div>
                                    <div>Don’t Spam</div>
                                </div>
                                <div onClick={() => handleScroll(9)} className='flex gap-6 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>10.</div>
                                    <div>Chatbot flairs</div>
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

export default BlogPage7