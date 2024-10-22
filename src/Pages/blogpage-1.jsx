import React, { useRef } from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

const BlogPage1 = () => {

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
                        <a href='/blogs'>Return to Insights</a>

                    </div>

                </div>
                <div className='font-normal text-3xl md:text-4xl pt-10 px-6 lg:px-16 lg:hidden leading-snug'>
                    The Evolution Of The Graphic Design
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-10 py-10 lg:pt-10 lg:pb-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal text-4xl pb-12 hidden lg:block leading-snug'>
                                The Ultimate Guide for UX Research
                            </div>
                            <div>
                                <img className='w-full' src="./Blpgpage1Img.png" />
                            </div>
                            <div className='flex flex-col gap-8 pt-12'>

                                <div className='leading-7 font-normal text-base'>UX research methods are primarily used to understand the needs and objectives of your customers so you can design a product/website that serves the whole purpose of your brand. Without knowing your users’ real needs and the purpose of your brand’s objective, you will fail to design a product/website or solution that will serve the whole purpose of your sales structure.</div>
                                <div className='leading-7 font-normal text-base'>Understanding your users’ preferences and goals on a deeper level helps you design an experience that will truly hold the whole magic of your product/service sales in the market.</div>
                                <div className='leading-7 font-normal text-base'>With this article, we’ll look at the deeper level to understand UX research and its top benefits to implement for your product or service to get the brand’s full potential. We would also, how to create a solid UX research plan and the top UX research methods.</div>
                                <div className='leading-7 font-normal text-base'>Let’s understand the whole subject on a deeper level and then we will have the “Ultimate Guide for UX Research” available for download in our courses section on our website.</div>

                                <div ref={(el) => (pointsRefs.current[0] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>What is UX Research?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>User Experience Research is the systematic study of user’s behaviours and the content of your product, whether it’s a website or mobile application, to add realistic contexts and insights to design processes. UX researchers adopt various
                                            methodologies to uncover problems and design opportunities. Doing so, they reveal valuable information that can be fed into the design process to bring a real sense to brand purpose.</div>
                                        <div>UX researchers adopt various methods to uncover problems and design opportunities. Doing so, reveal valuable information which can be fed into the design process.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[1] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>What is the UX Research Process?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>When you do UX research, you’ll be better able to give users the best solutions—because you can discover exactly what they need. You can apply UX research at any stage of the design process. UX researchers often begin with qualitative measures, to determine users’ motivations and needs. Later, they might use quantitative measures to test their results.</div>
                                        <div>To do UX research well, you must take a structured approach when you gather data from your users. It’s vital to use methods that <br /> 1) are right for your research and <br /> 2) will give you the clearest information. Then, you can interpret your findings so you can build valuable insights into your design.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[2] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>We can divide UX research into two subsets:</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div className='flex gap-4'>
                                            <p>•</p>
                                            <p>Qualitative Research – Using methods such as interviews and ethnographic field studies, you work to get an in-depth understanding of why users do what they do (e.g., why they missed a call to action, why they feel how they do about a website). For example, you can do user interviews with a small number of users and ask open-ended questions to get personal insights into their exercise habits. Another aspect of qualitative research is usability testing, to monitor (e.g.) users’ stress responses. You should do qualitative research carefully. As it involves collecting non-numerical data (e.g., opinions, motivations), there’s a risk that your personal opinions will influence findings.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>•</p>
                                            <p>Quantitative Research – Using more structured methods (e.g., surveys, analytics), you gather measurable data about what users do and test assumptions you drew from qualitative research. For example, you can give
                                                users an online survey to answer questions about their exercise habits (e.g., “How many hours do you work out per week?”). With this data, you can discover patterns among a large user group. If you have a large enough
                                                sample of representative test users, you’ll have a more statistically reliable way of assessing the population of target users. Whatever the method, with careful research design you can gather objective data that’s unbiased by your presence, personality or assumptions. However, quantitative data alone can’t reveal deeper human insights.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>We can additionally divide UX research into two approaches:</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Attitudinal – you listen to what users say—e.g., in interviews.</div>
                                        <div>Behavioural – you see what users do through observational studies.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[3] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Benefits of UX research</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div className='flex gap-4'>
                                            <p>1.</p>
                                            <p>Achieve product-market fit - When you create a product that is built on user research methods, you are in a
                                                position to achieve product-market fit. Why? Because you would have researched already on how your product can adapt to the needs of the market. By talking to prospective customers, observing them, and iterating, you will find the right combination to achieve product-market fit.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>2.</p>
                                            <p>Usability & Accessibility - The usability of your product has a direct impact on how users engage with your
                                                product and the kind of conversions that it can bring about. With the help of UX research methods, you will be able to understand the various limitations that the product might have and put yourself in a position to increase the user experience.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>3.</p>
                                            <p>Increase your chances for success - When you have an in-depth understanding of your users, you will be able to predict their choices better. The products that you create will be those that are enjoyable for your target market. Thanks to the extensive use of UX research methods, you can identify the early adopters, understand how your product fares in front of your competitors, and even add features that others might have overlooked.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>4.</p>
                                            <p>Reduce unnecessary spending -  When you know what your customers want, you won’t be working on models that do not give you the best ROI. UX research is a great way for you to have a clear vision of the product. It will prevent you from making mistakes that should have been avoided in the first place. By not doing all of this, you will end up saving your business a lot of time.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>5.</p>
                                            <p>React swiftly to market changes - When you have a firm grip on what your customers want from you, you will be better prepared to face the ever-changing market scenarios. While a pandemic might not be something that could have allowed for any kind of preparation, you will be better positioned to make swifter changes in most situations.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>6.</p>
                                            <p>Faster go-to-market -  The UX research phase is usually considered an ornamental addition, but if done right, you will have a much swifter development process. How? Thanks to a clear idea of what you want and the fact that you know a lot about your product, you will be able to avoid a lot of changes to your product.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>7.</p>
                                            <p>Prioritize features
                                                -  With the help of UX research methodologies such as prioritizing and story mapping, you will know in advance about the kind of functionalities that you plan to employ during each stage of the development process. All of this will reduce the risk involved as well as reduce the cost of your product development.</p>
                                        </div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[4] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>How to create a UX research plan</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div className='flex gap-4'>
                                            <p>1.</p>
                                            <p>Define the pain point
                                                - In a UX research plan, the first step is to identify what you would like to do with the
                                                research and identify the areas where there are issues. There are different methods to arrive at the pain point. You can check out the data that already exists and see if there is something that puts off your customers or your team members showing up on the first few pages of search results. To speed up the entire process you can utilize a top SERP scraper API that can provide the most relevant and real-time results. Please note that it’s unnecessary to browse all the competitor’s products.
                                                <p className='mt-4'>The pain point that you arrive at should provide enough information about what the project is about and pass along any information that will add to understanding it.</p>
                                            </p>

                                        </div>
                                        <div className='flex gap-4'>
                                            <p>2.</p>
                                            <p>Have clear objectives
                                                -  Once you have identified the pain points, the next step is to think about the objectives for doing the UX research. You need to know what you are doing, why you plan to do that, and what can be expected from the entire process. You must set clear goals as it will help you define the scope of the entire exercise. When you are doing research, you need to be clear about the quantum of work that is expected of you.
                                                <p className='mt-5'>Here are a few questions that you could use to streamline the research objectives:</p>
                                                <p className='mt-5'>Who are the people we are designing the product for?</p>
                                                <p className='mt-5'>How do these people benefit from the product?</p>
                                                <p className='mt-5'>What are the pain points they have while using the product?</p>
                                                <p className='mt-5'>How do you plan to use the results from this exercise?</p>
                                                <p className='mt-5'>What are the decisions that we are going to make based on the results?</p>
                                                <p className='mt-5'>By getting answers to the above questions, they will be able to identify the areas that require research and it makes everyone’s job easier.</p>
                                            </p>
                                        </div>
                                        <div ref={(el) => (pointsRefs.current[5] = el)} className='flex gap-4'>
                                            <p>3.</p>
                                            <p>Using the right UX research methods - The kind of UX research method that you choose depends on the goals that you have set for yourself, the design stage that you are currently in, the resources that you have set aside for this, the timeline, and other constraints. For example, if you want to see how a new design is performing, you might want to perform usability tests to see the performance. If you want to know the preferences of your customers about certain features, you can use online surveys. No matter what research method you use, make sure that it helps you reach the objectives that you have set for yourself.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>4.</p>
                                            <p>Add participants - For your UX research plan, you should add information about the participants who are going to be a part of it. You should consider all the other resources that are available at your disposal. When you are selecting participants for the research, make sure that all of them are a part of your customer persona. Otherwise, the results that you get will be inconsistent with what you really should have found.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>5.</p>
                                            <p>Prepare the UX research guide -  The next part of this process is to create a guide that can be used for the various UX design research methods that you will employ. It can be used as a guide that will remind the stakeholders about the kind of questions that should be posed and to make sure that everything is on track.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>6.</p>
                                            <p>Determine the timeline
                                                -  You need to have a clear-cut timeline that will help you estimate the project. It is one
                                                of the most important steps in your UX research plan. The stakeholders should know when the project will be underway and at what time the findings can be expected to be shared. It will help you have a handle on the proceedings and prepare for further action.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>7.</p>
                                            <p>Sharing the findings - At this stage, you would have had the findings with you. How do you plan to present the findings to the stakeholders? Do remember that the findings need to be presented to the right people which will help them implement it across the organization.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Final Thoughts</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Despite it being considered an additional burden, using UX research methods for the benefit of your customers is a great way to show love to them. While there are many UX research methods that you can use for the benefit of your product, you can make a lot of impact just by using a few of them. By gathering insightful data, you will be able to validate your design decisions and provide an end product that your customers will love using.</div>
                                        <div>We have created a booklet that will give you complete insights into UX Research for your custom product build. The download link is above for purchase.</div>
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
                                    <div>9 Min</div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full border border-[#B0B0B0] border-opacity-75 rounded-lg'>
                            <div className='font-normal text-2xl leading-9 py-6 px-6'>Contents</div>
                            <div className='flex flex-col gap-4 pb-6 text-[#454343]'>
                                <div onClick={() => handleScroll(0)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>1.</div>
                                    <div>What is UX Research?</div>
                                </div>
                                <div onClick={() => handleScroll(1)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>2.</div>
                                    <div>What is the UX Research Process? </div>
                                </div>
                                <div onClick={() => handleScroll(2)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>3.</div>
                                    <div>Divide UX research</div>
                                </div>
                                <div onClick={() => handleScroll(3)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>4.</div>
                                    <div>Benefits of UX Research</div>
                                </div>
                                <div onClick={() => handleScroll(4)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>5.</div>
                                    <div>How to Create a UX Research Plan</div>
                                </div>
                                <div onClick={() => handleScroll(5)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
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
                        <CarouselBlogPage />
                    </div>
                </section>

            </main>
            <Footer />

        </>
    )
}

export default BlogPage1