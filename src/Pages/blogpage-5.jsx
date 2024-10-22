import React, { useRef } from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

const BlogPage5 = () => {

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
                    User Experience Design and its Importance for Businesses
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-10 py-10 lg:pt-10 lg:pb-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal text-4xl pb-12 hidden lg:block leading-snug'>
                                User Experience Design and its Importance for Businesses
                            </div>
                            <div>
                                <img className='w-full' src="./Blogpage-5.png" />
                            </div>
                            <div className='flex flex-col gap-8 pt-12'>

                                <div className='leading-7 font-normal text-base'>Companies and businesses across the world are competing in the global market. As a result, customer expectation has grown by leaps and bounds.</div>
                                <div className='leading-7 font-normal text-base'>So, to win customers and stay ahead of competitors, businesses have to innovate and improve their user experience. UX (user experience) design is a trendy jargon in the Information Industry. It’s completely fine if you are being introduced to UX design for the first time.</div>
                                <div className='leading-7 font-normal text-base'>It’s a straightforward concept of user experience, implementation of which helps businesses increase their customer base. Let’s understand what UX design is and how it can help your business beat competition and win customers.</div>

                                <div ref={(el) => (pointsRefs.current[0] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Defining UX</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>UX stands for ‘user experience,’ which defines the way customers interact with a product. This definition applies to both physical products and digital designs as well.</div>
                                        <div>To give you an example, a product that excels both in design and user experience is the Apple iPhone. The Apple team focuses not only on making the designs aesthetically pleasing but also on releasing improved versions of operating systems every year.</div>
                                        <div>Thus, to create a great product, a business must consider the end-user. Some intrinsic factors to UX design are usability, usefulness, desirability, accessibility, and credibility.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[1] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Why is UX design important?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Businesses run on revenue and profit. So, if you are thinking, “Why is user experience important,” that’s the right question to ask.</div>
                                        <div>You shouldn’t implement any strategy or process until you see a business value. So let’s look at some of the reasons why UX design is essential.</div>
                                        <div>The tagline is quite an important factor as it is usually placed below your company logo, and also portrays who you are? and the promise you make to your customers. It helps to highlight your mission, purpose and culture in a few words. Every brand wants to create uniqueness and brand identity designer are well-known persons to design that thoughtful logo.</div>
                                        <div className='my-2'>Reason 1 – Cost Reduction</div>
                                        <div>As the famous saying goes, prevention is better than cure, likewise resolving usability issues, in the beginning, is less expensive than redesigning a product after fixing bugs.</div>
                                        <div>Thus, in the initial prototyping phase, the core concept of UX design is critical for product design. In this process, the team works iteratively to improve the design and usability issues by testing the product periodically.</div>
                                        <div>It might look that the iterations of product development will consume a lot of investment, but this process saves a lot of money in the long run. So, let’s see how does prototyping help in reducing cost:</div>
                                        <div className='flex mt-2 gap-4'>
                                            <p>1.</p>
                                            <p>Avoid feature creep - By testing the designs, features, and architecture of products, you can develop a better time and cost estimate of product completion. By the time the product is complete, the probability of a big problem or bug is very low.</p>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>2.</p>
                                            <p>Right content - Content is essential in targeting the right audiences. Working on content in the prototyping phase before your product, app, or website is launched, you can optimize it for customer consumption. This, in turn, saves a lot of time and money for your business.</p>
                                        </div>
                                        <div className='ml-6'>Thus, user testing or feedback should be part of the initial design phases of product development.</div>
                                        <div className='my-2'>Reason 2 – Increase customer base</div>
                                        <div>The usability of a product defines whether your customers liked interacting with your product or website. The customers are looking for enjoyable experiences when they use an application or a website as they are impatient.</div>
                                        <div>A lot of websites have complicated designs, so they’re not getting as many hits. While designing a product, you should reduce the effort a user has to operate your app or website.</div>
                                        <div>Two important principles that are critical in optimizing apps and website applications are:</div>
                                        <div className='flex mt-2 gap-4'>
                                            <p>1.</p>
                                            <div className='space-y-3'>
                                                <p>Optimize the number of steps - A user should be able to interact with your app or website without any hassles. If they are unable to find the information they are looking for, then the current design is useless.</p>
                                                <p>The customers will immediately switch to another website or app. Thus, you must keep the design institute so that users are automatically guided to the correct information in minimal steps.</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-4'>
                                            <p>2.</p>
                                            <div className='space-y-3'>
                                                <p>Create clear CTAs - Call to action buttons increase customer interaction and communication on the website or an app.</p>
                                                <p>Buttons that read “Book Now,” or “subscribe here,” etc., are some excellent examples of this.</p>
                                            </div>
                                        </div>
                                        <div ref={(el) => (pointsRefs.current[2] = el)} className='my-2'>Reason 3 – SEO optimization</div>
                                        <div>A UX-optimised website or app can improve SEO rankings. Google advocates a good user experience. Thus, the landing page experience is scored while creating SEO rankings by Google.</div>
                                        <div>The search algorithm gives more weightage to the user experience. This is done so that Google search can provide the best options to the end-users. It impacts both SEO ranking and paid media marketing.</div>
                                        <div>A website with bad usability will have poor SEO ranking and be less likely to get search hits.</div>

                                        <div className='my-2'>Reason 4 – User retention</div>
                                        <div>A business needs to build trust with customers. This helps in creating a long-lasting relationship between customers and companies. If the customer interactions and experiences are satisfactory, then the customers tend to stick to the brand and its services.</div>
                                        <div>So, a good UX design not only helps in increasing the customer base but also retains them for eternity. A customer is going to come back for your product if they are happy and satisfied with the services.</div>

                                        <div className='my-2'>Reason 5 – Word of mouth referrals</div>
                                        <div>People believe the reviews shared by other people. So, if your product, website, or app provides a good user experience, then your customers will share it with others.</div>
                                        <div>They can share it through personal interactions or various social media forums. Good word of mouth coming from personal experience is one of the best ways of promotion as people trust people.</div>
                                        <div>The seamless interactions that customers have with your product will go a long way in establishing your business as a brand. Your brand will get more 5-star ratings, and hence more customers will get attracted to use your products and services.</div>

                                    </div>

                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>The bottom line</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Successful businesses are ones that hear the voice of the customers. Therefore, taking feedback from customers is critical to product design and improvement.</div>
                                        <div>If your website, product, or application helps the users in completing the tasks in the fastest way without any hassles, then you have left a lasting impression on them. Thus, by incorporating UX design in your product development phase, you invest upfront in making your product usable, accessible, practical, and credible.</div>
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
                                    <div>Defining UX</div>
                                </div>
                                <div onClick={() => handleScroll(1)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>2.</div>
                                    <div>Why is UX Design important</div>
                                </div>
                                <div onClick={() => handleScroll(2)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>3.</div>
                                    <div>SEO Optimization</div>
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

export default BlogPage5