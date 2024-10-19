import React from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';
import ReachUs from '../Components/ReachUs';


const Hudbil_ai_chatbot = () => {

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
                Hudbil has introduced a AI Chatbot
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-10 py-10 lg:pt-10 lg:pb-20 2xl:pb-28 px-6 lg:px-10'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal xl:text-6xl w-[80%] text-4xl hidden lg:block leading-snug'>
                            Hudbil has introduced a AI Chatbot
                            </div>
                            <div className='flex flex-col gap-8 pt-6 px-2 lg:px-7'>

                                <div className='leading-5 font-normal text-base'>
                                    <p>Talk to Ella -</p>
                                    <p>Check us out</p>
                                    </div>

                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>HUDBIL PRIVATE LIMITED HAS INTRODUCED AI BASED CHATBOT FOR ITS CUSTOMERS</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Say Hello to Ella –</div>
                                        <div>Almost all major companies have adopted chatbots as a fundamental part of their internal
                                            and external communication strategies. They are used as an alternative to human workers
                                            who provide solutions to first-level queries, because of their ability to mimic human
                                            interaction with customers through a chat interface. In simple terms, a chatbot can initiate a
                                            conversation with users in the same way a human would do: it asks questions, answers
                                            queries of customers based on already set rules and logic.</div>
                                            <div>When it comes to the technical side, <Link to={'/talk-to-ella'}><span className='text-blue-800 underline'>Ella – www.hudbil.com/ella</span></Link> to perform certain tasks
                                            such as interacting with human end-users through text and we will introduce the audio
                                            messaging system in future.</div>
                                            <div>The performance of an AI-based chatbot is dependent on the knowledge input it has at the
                                            point in time. If a conversation with any user brings a query that they are not programmed
                                            to solve, they will skip that conversation or transfer it to a human operator.</div>
                                            <div>With this technology in place we are also the agency to design and develop the Artificial
                                            Intelligence Chatbot solutions for companies who are looking to integrate such system
                                            without manpower resource for their marketing management at ease.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Why are AI-based chatbots the best option?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Unlike rule-based chatbots that perform only on the basis of given commands, an AI-driven
                                            chatbot is designed in a way to function on its own with the help of Natural Language
                                            Processing (NLP) blended with Artificial Intelligence (AI), and interpretation of human
                                            conversation, which enables them to become smarter over time. Let us talk about some
                                            major advantages of AI-based chatbots and what makes them better than rule-based
                                            chatbots.</div>
                                        
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Sentiment analysis</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>AI bots can assemble large-scale data sets to recognize the sentiments of your customer’s
                                        reviews, mentions, and complaints throughout numerous platforms.</div>
                                        
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Understanding behavioural patterns</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Certain behavioural patterns cannot be identified by human agents. In such cases, AI
                                            chatbots can identify the behaviour patterns of end-users, which you may fail to do
                                            sometimes. These patterns and insights can be examined to improve decision-making in
                                            business.</div>
                                        
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Reduced customer waiting period</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Minimized waiting time indicates high customer satisfaction. AI chatbots offer an effective
                                                platform for customers to reach out for assistance without waiting a long time. Customers
                                                can register their complaints, queries, and reviews with chatbots and they provide an
                                                immediate solution to their queries most of the time.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>24/7 support</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Chatbots are available to provide customer service to the end-users 24/7 as they do not
                                            need rest or break like human agents. They will be active all day and night to provide
                                            support to the customers without making mistakes.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Delivering customized content</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>When you provide accurate resources for the customers to solve certain issues by
                                            themselves, it will indirectly provide better satisfaction to the customers. Today consumers
                                            prefer solving their issues by themselves rather than waiting for someone to assist them and
                                            this is what AI chatbots do for you. AI chatbots provide customized responses to users and
                                            guide them to the right sources with the help of natural language processing and text
                                            recognition. This also helps in gaining the loyalty of the customers.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Multi-language support</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>It is easy to program a chatbot as you can train them to learn and understand any language
                                            based on your requirements. This is a big advantage, especially in delivering high-quality
                                            customer service. You can operate your business and provide uninterrupted customer
                                            service from anywhere in the world, without considering language as a barrier.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Things to look for in an AI chatbot – Ella in Future.</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Once you have decided to implement an AI chatbot, the next question is ‘how to choose the
                                            right one for your brand?’ There are certain factors you should consider before opting for an
                                            AI-driven chatbot. Here are some of them:</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Multifunctionality</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>When you choose an AI-based chatbot, ensure that the chatbot enables website users to
                                            organize meetings, converse with customer support agents, sign-up for newsletters, and
                                            have a look at related articles. A chatbot that offers numerous purposes is the only ideal
                                            solution to meet all your needs today. If an AI chatbot is able to perform multiple functions,
                                            then there is no need for the customer service agents to interfere at all. Overall, it can
                                            provide you with an excellent customer experience.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Omnichannel support</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Understanding the platforms where you can deploy your chatbot is very crucial. The
                                            chances are high for increased customer experience and your brand to get noticed when
                                            you can implement AI chatbots on multiple platforms like your website, social media
                                            platforms, skype, messenger, etc.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Scalability</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>It is important to ensure that setting up your chatbot for the first time is not a difficult task.
                                            Your AI chatbot must be capable of dealing with queries and complaints according to the
                                            increase in complexity and volume of issues. Also, it should allow you to do it without or
                                            with the least help from your AI chatbot platform provider when it comes to customization
                                            and training of the chatbot.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Expertise and experience</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Deploying your AI chatbot is a major part of the entire process because if you do not get an
                                            experienced chatbot platform provider with sufficient knowledge, then the chances of you
                                            getting a perfect AI chatbot will be very less. Always choose your technology consulting
                                            service provider wisely in order to avoid future complications.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Wrap Up</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>AI-driven chatbots have already become an integral part of the technology stack in the
                                            workplace. Moreover, organizations that have already adopted AI chatbots have many
                                            benefits over those that have not yet moved to machine learning, automation, and artificial
                                            intelligence. AI-based chatbots can contribute a lot to improvise the customer service
                                            experience and brand recognition by offering an interactive tool to the customers who are
                                            already tired of the long queue in the customer support section. Another point to be noted
                                            is that these chatbots are never intended to replace human workers from their positions,
                                            instead, they aim to reduce their workload.</div>
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
                                    <div>May 17, 2024</div>
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
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>3.</div>
                                    <div>Understanding behavioural patterns</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>4.</div>
                                    <div>Reducing customer waiting period</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>5.</div>
                                    <div>24/7 Support</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>6.</div>
                                    <div>Delivering customized content</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>7.</div>
                                    <div>Multi-language support</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>8.</div>
                                    <div>Things to look for in an AI Chatbot - Ella in future</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>9.</div>
                                    <div>Multifunctionality</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>10.</div>
                                    <div>Omnichannel support</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>11.</div>
                                    <div>Scalibility</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>12.</div>
                                    <div>Expertise and experience</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>13.</div>
                                    <div>Warm up</div>
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
            < ReachUs/>
            <Footer />

        </>
    )
}

export default Hudbil_ai_chatbot