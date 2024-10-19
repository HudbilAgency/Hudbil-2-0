import React from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

const BlogPage4 = () => {

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
                    <a href='/insights'>Return to Insights</a>
                        
                    </div>

                </div>
                <div className='font-normal text-3xl md:text-4xl pt-10 px-6 lg:px-16 lg:hidden leading-snug'>
                Business Firms Suffer Because of not Finding Right B2B Design Agency.
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-10 py-10 lg:pt-10 lg:pb-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal text-4xl pb-12 hidden lg:block leading-snug'>
                            Business Firms Suffer Because of not Finding Right B2B Design Agency.
                            </div>
                            <div>
                                <img className='w-full' src="./Blogpage4.png" />
                            </div>
                            <div className='flex flex-col gap-8 pt-12'>

                                <div className='leading-7 font-normal text-base'>Brand identity is the array of elements that an organisation creates to convey the right image to its audience. Brand identity is partially different from brand image and branding. As branding is generally a marketing practice whereas brand refers to the company’s image or perception in the world’s eyes.</div>
                                <div className='leading-7 font-normal text-base'>A B2B web design agency will make sure your website’s content is written and organized in a way that helps buyers learn about your products and services. B2B agencies also know how to optimize your website so that it ranks well in search engines.</div>
                                <div className='leading-7 font-normal text-base'>Running a startup is always a balancing act. You have finite resources from time and people to capital, and you need to continuously optimise the allocation of each to get maximum returns. No matter what anyone says, you will have to cut some corners. It’s only a question of which ones.</div>
                                <div className='leading-7 font-normal text-base'>B2B SaaS startups, in particular, are used to working with a minimum viable product they can ship out quickly and iterate on. It’s natural to extend this approach to every aspect of the business, including the website.</div>

                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Why and When to Hire a B2B Website Design Agency for Your Business?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>While it’s not wrong to be frugal with your website, you need to carefully consider if your efforts to cut costs will end up making you pay more.</div>
                                        <div>So, how do you figure out if your approach is right? Let’s start by looking at your options when you decide to build a website.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>DIY Website Platforms: Quick but Limited?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>There are many platforms that let you develop a website quickly, without any coding or design experience. My personal favourite is Carrd.co, which lets you build beautiful one-page websites in a couple of hours. Wix.com is another popular option that allows for multi-page websites but is not as straightforward as Carrd.co.</div>
                                        <div>These DIY platforms are great if you’re a 2-week old startup that needs a website in time for a meeting you have tomorrow. However, they have scalability issues as your needs grow. Carrd.co, with its one-page limitation, makes the use-case very clear. But platforms like Wix can lead you down a rabbit hole of endless customizations until you finally realise a complex migration process is inevitable.</div>
                                        <div>Template-Based Websites: A Step Up, but Not the Final Solution</div>
                                        <div>After outgrowing the DIY website, startups often turn to web development companies that offer reasonably priced websites based on premium templates. Instead of you trying to figure out how to drag and drop and configure everything, you get a developer to do it. The idea is that you save costs by building off an existing template instead of starting from scratch.</div>
                                        <div>However, the relatively low cost of this option can be misleading. You’ll often need customisations that are not possible with the template, or require custom coding. Startups need to pivot everything from their positioning to their business model frequently. It can be unviable if your website can’t reflect those changes quickly. For example, adding a simple
                                        sub-header could take days and additional costs.</div>
                                        <div>The template-based packages also often lack design support, which you usually discover only once you’re deep into the process. The template might look great at the time of purchase because it has images and visual elements selected specifically for it, but when you need to insert your content, it can be incredibly tough to work backward to fit the template.</div>
                                        
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Websites build by Product Development Teams</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Most of the tech company’s first website is build by product development teams who don’t necessarily speak the marketing language. This can limit the website’s communication capabilities. Another limitation in this scenario is, most of the websites build by tech team is not scalable. Programming languages like React or Node will be used since they will be familiar with them, but not familiar for the marketing teams. So any change which the marketing team may require will takes weeks to get updated.</div>
                                        
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Who Owns Your Website? Tech? Sales? Marketing?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Even though the CTO takes the call on what platform/technologies to use to build it, it’s you the marketer who uses it to generate leads/sales from it. If the website is down (pencil runs out of lead) it’s the leads/sales that suffers – which by the way is your KRA and not the CTO’s. So you will have to ask the CTO to fix it but still, the website ownership resides with you, the marketer!</div>
                                        
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>The Comprehensive Solution: A Specialised B2B Website Design Company</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>The third option is to hire a website design agency that specialises in the B2B space. Many avoid this option until they learn the disadvantages of the other options the hard way. However, it can often save you money and, more importantly, deliver results while freeing up your mind to focus on building your business.</div>
                                        <div>Focus on Messaging First</div>
                                        <div>A B2B website should be designed to communicate your key value proposition to the right audience. A good design agency will start with a messaging strategy before diving into the design. A great one will understand your business landscape almost as well as you do and understand the psychology of the target audience even better. They will
                                            design everything from the site architecture to headers and sub-headers in a way that draws the readers eye, makes them feel like the product was built just for them, and nudges them to take a conversion action—like filling
                                            up a contact form or booking a demo.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Comprehensive Design and Development Services</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Website design and development require two separate skill sets. Typically, web development companies do not have good design capabilities, and good design companies do not have web development capabilities. A specialised website development company will have both teams in-house, working collaboratively and learning from each other so that every design idea is practically doable within a reasonable timeframe and cost.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>SEO Optimisation Without Losing the Message</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>One of the key purposes of a good website is to attract organic traffic and generate inbound leads. This can only happen if the website is discoverable. SEO of the website and its content is critical to make this happen. However, SEO can only help the customer find the website, not convert them. Good content strategy requires all copywriting on the website to be optimised for both search engine bots and human readers, without sacrificing one for the other.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Scale with the Business</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Startups need websites that pivot and change as often as the business does. This can only happen if you have a long-term partnership with an agency that understands your business, history, and needs. A good agency will set up a solid foundation for your website, give you access to a Content Management System (CMS) that lets you make changes yourself when needed, and be agile in taking on new phases of the website.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Effective Sales Funnel Integration</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>The goal of any website is to further the sales process and play a part in the funnel. This could mean acquiring new customers, convincing prospects about your credibility, or upselling and cross-selling to existing customers. A good website agency will understand the B2B buying cycle and personas well enough to do this, avoiding vanity projects that do not drive business results.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Who should work with specialised website companies like Everything Design?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>We mainly help B2B tech brands with their brand messaging, website content, and design and development. Our focus is on Webflow development which is easier for marketing teams to use than WordPress, especially for those who update their website often.</div>
                                        <div>The ideal partners for Everything Design are businesses that recognize the importance of a website and have a product that fits the market well. If you’re looking to expand into new areas, target new customers, or grow your business, our expertise in website design and development can be very valuable. A successful website clearly explains your product and brand to visitors. Complex information should be made simple, but not every person needs to find it appealing—just your target audience. It’s essential for a website to show what your brand is about, what problems your product solves, and to attract the right people while turning away the wrong ones.</div>
                                        <div>We manage everything from strategy to development. The process has eight steps, beginning with a discovery phase where we learn about your websites main goals, unique selling points (USPs), competition, industry trends, and how your team will use the site. We gather all brand materials like logos, product details, videos, FAQs, sales decks, and social media links. After aligning our team internally and understanding your product fully through a demo, we move on to research. This step involves studying the market and competitors to provide insights for design.</div>
                                        <div>Next is defining the brand and product offerings in detail. We create a sitemap and URL structure that helps with search engine optimization (SEO) while considering any previous URLs. We then present our findings to you for feedback.</div>
                                        <div>After this comes strategy development where we define the objectives of each page on the site and create hooks that engage visitors emotionally. Messaging is critical we refine the homepage content to address potential client objections clearly.</div>
                                        <div>Ideation follows strategy  our team brainstorms design approaches based on our earlier findings. Once you approve a visual direction, we create stylescapes with icons, typography, image styles, and animations that make information easy to understand.</div>
                                        <div>Then we draft low-fidelity wireframes of key pages and optimize the copy to be clear and concise. The design includes planning scalable components and CMS requirements.</div>
                                        <div>Development starts with Webflow by setting up a style guide and building out the homepage first as it contains most components. We consider technical SEO factors like image alt text and meta descriptions during this stage.</div>
                                        <div>Finally, after browser tests ensure compatibility across platforms and optimizing speed and responsiveness, we publish the website. We can maintain it or train your marketing team to manage updates.</div>
                                        <div>In short, hiring professionals like Everything Design ensures that as your business grows, your website can too without losing its core message or functionality. A well-built website by a professional team supports an effective sales funnel for growth.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>How does professional website agencies help business websites?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Everything Design is a top agency that makes great websites for businesses. We help companies look better online, get more people to visit their websites, and help them make more money from their sites. Our work starts with talking to you about what you need. Then we make and improve your website to help your business grow.</div>
                                        <div>We are in India and we focus on making websites that are easy to use. These websites help get more leads, which can change how you do business online. We help tech companies get better at marketing and selling things.</div>
                                        <div>Everything Design is one of the best because we care a lot about making creative and useful websites that do what each business needs. Our team has designers, writers, and people who know how to make websites that work well and look good. They make sure businesses stand out.</div>
                                        <div>We know a lot about B2B, which means selling things from one business to another. This can take longer and be more complicated than selling to regular people. But we’re good at it! We have clear prices, know how to get your website seen (SEO), can write good content, and support you for a long time. We always work closely with our clients and do more than they expect, which is why they like us so much for web design.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Building a website for your B2B or SaaS startup?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Building a website for your B2B or SaaS startup is best thought of as building a home. You can buy a pre-fabricated container home as a starting point, dress it up with Ikea furniture, or hire an architect and interior designer to build a dream home that explains who you are and what you care about to any visitor, even if you aren’t home to talk through it.</div>
                                        <div>There’s nothing wrong with any of these options, as long as you know what you’re getting into. What you want to avoid is cycling through all three options, losing money and time in the process. If you’re setting up your business to scale right from the start, go directly for the best option. If you’re unsure, start with a DIY website until you learn the ropes, and then hire a specialised B2B agency when you understand both what you want and the limitations of your current platform. It will pay for itself in the long run.</div>
                                        <div>Ready to invest in a website that grows with your business? At Everything.Design, we specialise in ideating, designing and developing high quality websites that increase sales for funded startups and medium-sized businesses. Drop us a note if you’d like to build a website that reflects your brands vision and achieves business goals.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Diagnosing website issues</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div className='flex gap-5'>
                                            <p>1.</p>
                                            <p>User Tests: Conducting user tests is crucial for gaining insights into your websites performance and identifying areas for improvement. This involves observing someone using your site, giving them specific tasks, watching them complete these tasks, asking for their thoughts, and recording the results for later analysis​​.</p>
                                        </div>
                                        <div className='flex gap-5'>
                                            <p>2.</p>
                                            <p>Feedback Button: Implementing a “Give Feedback” button on your website allows visitors to report issues at their convenience. This button acts as a continuous open invitation for feedback, making it easier for visitors to communicate their frustrations or suggestions​​.</p>
                                        </div>
                                        <div className='flex gap-5'>
                                            <p>3.</p>
                                            <p>Eye Tracking: Using eye-tracking technology during user tests can help identify where your visitors are looking on your pages. This method reveals which areas of your website are attracting attention and which are being overlooked​​.</p>
                                        </div>
                                        <div className='flex gap-5'>
                                            <p>4.</p>
                                            <p>Session Recording Tools: Tools like Hotjar can record visitors sessions, showing you how they navigate through your site. This includes capturing keystrokes and mouse movements, offering a clear view of user interactions and difficulties​​.</p>
                                        </div>
                                        <div className='flex gap-5'>
                                            <p>5.</p>
                                            <p>Websites Search Tool Analysis: Analyzing the search logs on your site can reveal what visitors are looking for but can’t find. This helps in understanding user intent and improving content visibility and relevance​​.</p>
                                        </div>
                                        <div className='flex gap-5'>
                                            <p>6.</p>
                                            <p>Method Marketing: Becoming a customer of your own or a competitors website helps understand customer experiences deeply. This involves empathizing with visitors and understanding the problems they face​​.</p>
                                        </div>
                                        <div className='flex gap-5'>
                                            <p>7.</p>
                                            <p>Click Maps and Analytics: Easy-to-interpret click maps and form analytics software can pinpoint exactly where visitors click and which form fields cause issues. Live chat and co-browsing options further allow direct interaction with visitors for real-time problem-solving​​.</p>
                                        </div>
                                        <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Each of these methods used by web design agency provides valuable insights into different aspects of website usability and customer experience, helping diagnose issues effectively.</div>
                                        <div>Your website is your online hub for lead generation — which makes B2B web design essential to your company’s growth. A company’s website is the first thing we all visit to find out about everything. A functional and attractive website draws people in and convinces them to convert, turning your site into a sales-generating machine. Skyrocket your business
                                        revenue by partnering with the B2B web design agency.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Your one-stop shop for B2B web design</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>If you’re looking for B2B web design, you may be tempted to hire a general web design agency. While this may seem convenient, it’s not necessarily a good idea. While a general web design agency may be able to provide you with a functional website, they won’t be able to create a specialized B2B website for your business. This may result in a website that fails to capture the attention of your target customers, which could lead to fewer conversions and less revenue. By partnering with a B2B web design agency that specializes in B2B web development, you can rest easy knowing that your website was designed with your specific business needs in mind.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Why partner with a B2B web development company?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>A B2B web design agency knows B2B marketing and B2B sales like the back of their hands. They have worked with businesses in a variety of industries and have the expertise to create B2B-specific web designs that convert. This means you can be confident that your B2B website design will be effective at driving business to your company. B2B agencies also know the ins and outs of the B2B buying process.</div>
                                        <div>For example, they know that decision-makers want access to information that helps them make informed purchasing decisions. A B2B web design agency will make sure your website’s content is written and organized in a way that helps buyers learn about your products and services. B2B agencies also know how to optimize your website so that it ranks well in search engines, which means you can drive organic traffic to your site.</div>
                                    </div>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>How can an expert agency help with your B2B web development?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>A B2B web design agency will work with you to create a plan for your website. This website design process will help you determine what features you want on your site, what your goals are for the website, and how to measure success.</div>
                                        <div>Your B2B web design agency will also help you create a content strategy for your website. This means they will help you develop your messaging, decide what content to include on your site, and determine where that content should be placed.</div>
                                        <div>The B2B web design agency’s B2B-savvy will help you create a website that complements your sales strategy, inspires trust in your customers, and converts leads into sales. B2B web design agencies also have access to a variety of website development tools and technologies, which means they can create a website that’s both functional and user-friendly.</div>
                                    </div>
                                    </div>
                                    
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Conclusion</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Addressing the challenges of modern B2B marketing and lead generation requires a strategic, integrated approach that goes beyond traditional advertising. It involves understanding and engaging with the buyers journey, investing in comprehensive messaging and positioning, adopting a long-term perspective, and ensuring sufficient budget to support these efforts. By focusing on building relationships and providing value at each stage of the buyers journey, B2B companies can create a sustainable pipeline of leads that are more likely to convert into loyal customers.</div>
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
                                    <div>Design Agency for Your Business?</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>2.</div>
                                    <div>The Comprehensive Solution: A Specialised B2B Website Design Company?</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>3.</div>
                                    <div>How does professional website agencies help business websites?</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>4.</div>
                                    <div>Building a website for your B2B or SaaS startup?</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>5.</div>
                                    <div>Diagnosing website issues</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>6.</div>
                                    <div>Your one-stop shop for B2B web design</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>7.</div>
                                    <div>Why partner with a B2B web development company?</div>
                                </div>
                                <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                    <div>8.</div>
                                    <div>How can an expert agency help with your B2B web development?</div>
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

export default BlogPage4