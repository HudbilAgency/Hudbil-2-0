import React, { useRef } from 'react'
import CarouselBlogPage from '../Components/CarouselBlogPage';
import ReachUsBlog from '../Components/ReachUsBlog';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet';

const BlogPage8 = () => {

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
                <title>Creating a Service Website | Best Practices Across Industries</title>
                <meta name="description" content="Unlock the potential of your service website with our expert tips! Explore how different industries can leverage effective website design to attract and engage clients."></meta>
                <meta property="og:url" content="www.hudbil.com/blogs/how-to-create- a-service-website"></meta>
                <meta name="keywords" content="Create a service website, Service website design, Best practices for service websites, Industry-specific website tips, Website development for services, Service-oriented web design, User experience for service websites, Website functionality, Designing effective service sites, Web design strategies for services"></meta>
                <meta name="og:description" content="an 'Our Industries' section detailing how to create effective service websites tailored to various sectors."></meta>
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
                    How to create a service website in 10 steps
                </div>
                <section className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-10 py-10 lg:pt-10 lg:pb-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 flex items-start h-full gap-0 lg:gap-10 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal text-4xl pb-12 hidden lg:block leading-snug'>
                                How to create a service website in 10 steps
                            </div>
                            <div>
                                <img className='w-full' src="/blogpage8.png" />
                            </div>
                            <div className='flex flex-col gap-8 pt-12'>

                                <div className='leading-7 font-normal text-base'>As a service provider in today’s world, you know that the best way to reach potential
                                    customers is online. Most customers likely prefer to schedule a service through your
                                    website instead of calling or stopping by in person. To keep up with these
                                    expectations and maximize your sales, you’ll need online scheduling software that
                                    allows you to accept bookings and payments through your business website.</div>
                                <div className='leading-7 font-normal text-base'>The best part of it all is that you don’t have to be a Fortune 500 company, hire staff or know how to code to create a website and start making money online. We’re here
                                    to show you how you can easily create a site yourself—with the highest level of
                                    performance, reliability and payment security, across a variety of types of
                                    businesses.</div>
                                <div className='font-normal text-2xl leading-9'>Waste no time reach us to create your website design and development with most effective price in the industry</div>

                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>What is a service website?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>A service website is a type of website thats designed to showcase and promote a
                                            specific service or set of services from a business or individual. The main purpose of
                                            a service website is to inform potential clients or customers about the services you
                                            offer while highlighting the benefits of those services. Your website should encourage
                                            potential users to take action, such as contacting you for a quote or booking a
                                            service..</div>
                                        <div>Service websites are used by a wide range of professionals and businesses,
                                            including consultants, freelancers, agencies, contractors, healthcare providers and
                                            more.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[0] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Pick an Agency</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>The first step is to select us to make your business website that meets all your
                                            design and business needs at once. Chosen by millions of businesses around the
                                            world, Hudbil is one of the best website builders on the market. It’s a user-friendly,
                                            professional option filled with advanced web design features and business
                                            capabilities.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[1] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Choose a layout</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>When it comes to the layout of your site, there are two main schools of design: the
                                            classic website and the one-pager. Both are great options, and your choice depends
                                            on your business’s specific needs.</div>
                                        <div>The classic option includes separate pages for each section of your service-based
                                            website. This is an excellent choice if you have a wide variety of content—say, a
                                            blog, photo gallery or FAQ page—that you’d like to distribute across different
                                            locations of your site.</div>
                                        <div>A one-page website, on the other hand, is limited to a single page. Each menu item
                                            takes the user to a different section of the same page, rather than leading to
                                            separate ones. The advantage of this method is that you can control the order in
                                            which viewers see your content, plus it works great on mobile. An increasing number
                                            of businesses are opting for the latter due to its strong design and simplicity.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[2] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Brand your website</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>We know you’ve put a lot of thought into creating the look and feel of your brand. To
                                            maintain the brand identity your customers recognize and love, make sure those
                                            elements are carried over onto your website.</div>
                                        <div>Here are some tips to customize your site so that it reflects your brand:</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Get a domain</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Your <span className='text-[#7811A5]'>domain name</span>  is your online address. Typically, this will be the name of your business, as this makes your site look professional and puts your brand’s stamp on the web.</div>
                                        <div>You’ll also need to consider what domain extension you want to use:</div>
                                        <div className='flex flex-col gap-2 text-[#7811A5]'>
                                            <li>.de domain</li>
                                            <li>.xyz domain</li>
                                            <li>.co domain</li>
                                            <li>.ch domain</li>
                                            <li>.be domain</li>
                                            <li>.store domain</li>
                                            <li>.info domain</li>
                                            <li>.tv domain</li>
                                            <li>.company domain</li>
                                            <li>.digital domain</li>
                                            <li>.ca domain</li>
                                            <li>.fr domain</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Create a custom logo</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>As small as it may be, your logo plays a huge role in your business. Your logo must
                                            occupy a prominent place on your site since this is crucial for building brand
                                            recognition and awareness.</div>
                                        <div>The logo becomes a visual representation of the businesss values and emotions in
                                            a single glance. Simplicity is key for memorability and adaptability across platforms.</div>
                                        <div>If you don’t already have a logo, you can easily create your own using a logo maker.
                                            You can then use your logo across all platforms, including your website, newsletters
                                            and even your favicon (the small icon that appears on a tab in your browser). Lastly,
                                            don’t forget to always link your logo back to your homepage—it’s a long-standing
                                            web convention.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Choose your colours</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Your choice of colours has a powerful impact on your brand identity. Not only do
                                            colours add beauty to your site, but they also evoke emotions or connote certain
                                            associations with your brand.</div>
                                        <div>Your colour palette plays an important role in the overall performance of your site,
                                            bolstering both conversion rates and the time spent on a page. Research suggests that up to 90% of a person’s assessment of your website is based on colours alone. Moreover, colour is shown to improve brand recognition by 80%.</div>
                                        <div>For that reason, it’s critical that you choose a strongly branded design—including a
                                            powerful colour scheme, logo and domain name—as you create a website for your
                                            service business.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[3] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div> Add the right pages</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-6'>
                                        <div>Now it’s time for the fun part. Think of all the content you want to add to your service
                                            website and determine the most strategic way to organize it. It’s your business, so
                                            you can decide how many (and which) pages to include. Here are the most popular
                                            options:</div>
                                        <div className='flex flex-col gap-4'>
                                            <div className='text-xl'>Homepage</div>
                                            <div>This is the central hub of your website. Since it’s often people’s first impression of
                                                your brand, it should be both attention-grabbing and informative. Make sure it
                                                prominently displays your company’s name and clearly explains what you do.</div>
                                            <div>Since the purpose of your site is to initiate bookings, you should also have a Book
                                                Now button placed above the fold. This gives users the option to book or schedule
                                                your services immediately upon arriving at your site.</div>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <div className='text-xl'>Bookings page</div>
                                            <div>To drive more revenue, you’ll want to add an online scheduling system that lets
                                                customers book and pay for your services online. While you can place your online
                                                scheduling platform anywhere on your site, many businesses opt to include a
                                                separate bookings page. That way, you’ll be able to lay out your services in an
                                                intuitive, organized way that includes all the essential details, like name, pricing and
                                                availability.</div>
                                            <div>You could even organize your services into packages (a.k.a. productized services)
                                                on your Bookings page.</div>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <div className='text-xl'>About page</div>
                                            <div>The About Us page offers a personal description of your business. It’s a great place
                                                to share the story of who you are, from the origins of your business to your professional achievements and the company mission statement. If you work with
                                                multiple staff members, you can also include a Meet the Team section that makes it
                                                easy for visitors to get to know your organization.</div>
                                            <div>People should be able to get a sense of the personality behind your brand, as this
                                                will ultimately help you build deep connections with customers. As a service provider,
                                                forming relationships is the essence of acquiring and cultivating loyal clients.</div>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <div className='text-xl'>Contact page</div>
                                            <div>If visitors need to spend time looking for your contact information, they may decide
                                                it’s not worthwhile reaching out or purchasing your service. For that reason, add a
                                                separate page or section dedicated to all of your contact information. This should
                                                include phone numbers, email, social media accounts, a contact form and any other
                                                possible way clients can get in touch with you.</div>
                                            <div>People have also come to expect this information in the footers of websites. Make
                                                sure your footer is filled with up-to-date contact details, as well as your company’s
                                                address and operational hours.</div>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <div className='text-xl'>Blog</div>
                                            <div>A blog is an invaluable platform for building a loyal community, establishing yourself
                                                as an authority in the field, and driving traffic to your site.</div>
                                            <div>Blogs don’t get enough credit for their long-term advantages. In the long run, a blog
                                                can serve as a huge traffic driver and a way to connect with future customers (case
                                                in point: our Wix Blog is the first touchpoint for millions of people who may have
                                                never stumbled onto our site otherwise). That said, a blog is a long-term
                                                commitment—it requires a well thought-out strategy and consistent maintenance.
                                                Beyond saying ‘I want to get traffic,’ you need to understand your blog’s overall value
                                                to your brand, and acknowledge that two readers may come across your blog with
                                                two very different intentions and varying levels of familiarity with your brand.</div>
                                            <div>In fact, 72% of online marketers say that content creation is their most effective SEO,
                                                or search engine optimization, tactic when it comes to ranking high on search
                                                engines and increasing your number of site visitors.</div>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <div className='text-xl'>Testimonials</div>
                                            <div>Nothing is more impressive to a potential client than positive, unbiased reviews of
                                                your excellent service. For many customers, good reviews are the driving factor in their decision to convert. With that in mind, include a testimonials page on your
                                                site—it’s an important marketing tactic that can lead to sales.</div>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <div className='text-xl'>PR coverage</div>
                                            <div>If you get published in notable publications, make this a point on your website. Just
                                                like testimonials, this will improve your brand’s credibility and further position your
                                                company as an industry leader.</div>
                                        </div>
                                        <div className='flex flex-col gap-4'>
                                            <div className='text-xl'>FAQ page</div>
                                            <div>By including an FAQ page, you can provide answers to questions that may naturally
                                                come up while clients browse your site. This helps potential customers feel
                                                comfortable about your product and builds trust in your brand.</div>
                                        </div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[4] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Add a scheduling system to sell your services</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Next, add a scheduling system to your site so that customers can book and pay for
                                            your services online. Using Wix Bookings, you’ll be able to drive revenue to your
                                            business in a way that’s convenient and efficient for both you and your customers.</div>
                                        <div>In just minutes, you can take your offerings and package them as a
                                            service—whether it’s a one-on-one appointment with clients, a video class, or a
                                            multi-session course. Here’s how to do it:</div>
                                        <div className='flex gap-6'>
                                            <div>1.</div>
                                            <div>Create your services. This can include appointments, classes, and online
                                                courses.</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>2.</div>
                                            <div>Add staff members, if you’re working with a team.</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>3.</div>
                                            <div>Set availability. You can do this by specifying your business’s operating hours,
                                                as well as the hours of staff who provide the service.</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>4.</div>
                                            <div>Choose how to display bookings on your site, whether you want to show them
                                                all together or place them on separate pages.</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>5.</div>
                                            <div>Set how you collect payment. Wix Bookings lets you easily accept full or
                                                partial payment through a reputable and secure online system.</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>6.</div>
                                            <div>Add business details such as your address, currency and time zone.</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>7.</div>
                                            <div>Upgrade your site to ensure the best Bookings plan for your business.</div>
                                        </div>
                                        <div>In addition, scheduled appointments can be automatically synced with both your
                                            business and customers’ calendars. You and your staff will receive real-time booking
                                            updates when a client schedules an appointment. You’ll also have access to your
                                            client’s details, including their contact information, birthdays and relevant notes so
                                            that you can create the best possible customer experience.</div>
                                        <div>Manage your entire business on the go through the Wix App. From both the app and
                                            your desktop version, you’ll be able to promote your services and related coupons,
                                            send invoices, and accept bookings in real time via live chat.</div>
                                        <div>For more information, take a look at the essential checklist for setting up, managing,
                                            and growing your online service business.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[5] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Pay attention to SEO</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>SEO is the practice of optimizing your site so that your pages can rank higher in
                                            search engine results. While this may sound daunting, you can get started in a few
                                            simple steps:</div>
                                        <div className='flex flex-col gap-2 ml-2'>
                                            <li>Choose the right domain name</li>
                                            <li>Sign up to Google My Business</li>
                                            <li>Use strategic keywords throughout your site</li>
                                        </div>
                                        <div><span className='text-[#7811A5] underline'>Coltfox</span> is a creative digital marketing and content agency that can help you with an comprehensive and free audit solution that efficiently guides you through these steps.</div>
                                        <div>Leveraging SEO and integrating it into the website creation process is vital. Various
                                            studies have shown that organic search is the single greatest provider of traffic to
                                            websites - with that being even more pronounced within the B2B context. To that,
                                            traffic from organic search, when done correctly is essentially built to last (with
                                            proper maintenance over time, of course) and forms a crucial part of a site’s long-
                                            term growth. Reach out the creative digital marketing agency Coltfox based in
                                            Bangalore, Karnataka, India.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[6] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Make your website mobile-friendly</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>More than 50% of all website traffic worldwide comes through smartphones. This
                                            number is only increasing, which means that it’s crucial to make your booking
                                            services easily accessible to everyone through mobile.</div>
                                        <div>To optimize for mobile browsing, you’ll need to make sure your site is readable and
                                            navigable on a small screen. Wix takes care of that for you, ensuring the mobile
                                            version of your site looks beautiful on any device.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[2] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Brand your website</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>We know you’ve put a lot of thought into creating the look and feel of your brand. To
                                            maintain the brand identity your customers recognize and love, make sure those
                                            elements are carried over onto your website.</div>
                                        <div>Here are some tips to customize your site so that it reflects your brand:</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[7] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Get a second opinion and feedback</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Before you hit publish to take your site live, make sure everything looks and works
                                            the way you intended. Preview your website and browse the layout, and remember
                                            to proofread it a couple of times.</div>
                                        <div>You can even ask a trusted companion to look over things – the more eyes that can
                                            spot mistakes ahead of time, the better.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[8] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Promote your services via your website</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Once you’ve published your service website, whether it’s a wellness website, a hotel
                                            website, a salon website or healthcare website, promote it so that people learn about
                                            your brand. A great way to get started is by spreading the word on social media.</div>
                                    </div>
                                </div>
                                <div ref={(el) => (pointsRefs.current[9] = el)} className='flex flex-col items-start gap-4'>
                                    <div className='font-normal text-2xl leading-9'>
                                        <div>Keep your site up-to-date</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>To achieve the best possible results, keep your site fresh and up-to-date. This
                                            includes adapting to the latest trends (check out these great service business
                                            examples) and adding new blog content to build up your authority in your field.</div>
                                        <div>To get a better understanding of your online performance, you can view Analytics for
                                            Wix Bookings. This gives you valuable insights into your booking statistics, such as
                                            the number of new and returning customers and your most popular pricing plans.</div>
                                        <div>By creating a website that enables customers to purchase your services online, you’ll
                                            take your business to new heights—and increase your revenue as a result.</div>
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
                                    <div>Pick an agency that is us</div>
                                </div>
                                <div onClick={() => handleScroll(1)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>2.</div>
                                    <div>Choose a layout</div>
                                </div>
                                <div onClick={() => handleScroll(2)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>3.</div>
                                    <div>Brand your website</div>
                                </div>
                                <div onClick={() => handleScroll(3)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>4.</div>
                                    <div>Add the right pages</div>
                                </div>
                                <div onClick={() => handleScroll(4)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>5.</div>
                                    <div>Add a scheduling system to sell your services</div>
                                </div>
                                <div onClick={() => handleScroll(5)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>6.</div>
                                    <div>Pay attention to SEO (Coltfox Agency)</div>
                                </div>
                                <div onClick={() => handleScroll(6)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>7.</div>
                                    <div>Make your website mobile-friendly</div>
                                </div>
                                <div onClick={() => handleScroll(7)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>8.</div>
                                    <div>Get a second opinion</div>
                                </div>
                                <div onClick={() => handleScroll(8)} className='flex gap-8 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>9.</div>
                                    <div>Promote your services</div>
                                </div>
                                <div onClick={() => handleScroll(9)} className='flex gap-6 cursor-pointer transition-all hover:text-gray-500 duration-300 items-start px-6 font-normal text-base leading-7'>
                                    <div>10.</div>
                                    <div>Keep your site up-to-date</div>
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

export default BlogPage8