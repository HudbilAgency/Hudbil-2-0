import React, { useState, useRef, useEffect } from 'react'
import ReachUs from '../Components/ReachUs';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {

    const data = [
        {
            text: "DesignRush is a B2B Marketplace for businesses to find agencies, select agency partners for your next project based on reviews, clients and agency.",
            image: "/partners-img3.png",
            path: "https://www.designrush.com/",
        },
        {
            text: "A ratings and reviews platform that helps connect businesses with service providers, including agencies specializing in IT, marketing, and design.",
            image: "/partners-img4.png",
            path: "https://clutch.co/",
        },
        {
            text: "A popular freelancing platform where businesses can find professional agencies and freelancers across various fields such as design, development, and marketing.",
            image: "/partners-img5.png",
            path: "https://www.upwork.com/",
        },
        {
            text: "A marketplace that connects businesses with top freelancers and agencies in software development, design, and finance.",
            image: "/partners-img6.png",
            path: "https://www.toptal.com/",
        },
        {
            text: "A platform where businesses can find a variety of services from freelancers and agencies at different price points ranging from simple tasks to full project solutions.",
            image: "/partners-img7.png",
            path: "https://www.fiverr.com/",
        },
        {
            text: "A platform that helps businesses find and connect with ad agencies, branding firms, and marketing agencies by providing detailed profiles and client reviews.",
            image: "/partners-img8.png",
            path: "https://www.sortlist.com/",
        },
        {
            text: "A global freelancing platform that allows businesses to post projects and find agencies or freelancers to undertake their needs.",
            image: "/partners-img9.png", 
            path: "https://www.freelancer.com/",
        },
        {
            text: "The best B2B companies offering development, marketing, design & IT services. The Manifest is a business news and B2B rating & reviews platform.",
            image: "/partners-img10.png",
            path: "https://themanifest.com/",
        },
        {
            text: " A marketplace specifically for finding designers and design agencies, ideal for branding, web design, and graphic design projects.",
            image: "/partners-img11.png",
            path: "https://99designs.com/",
        },
        {
            text: "GoodFirms is your trusted B2B Reviews & Rating platform, helping you choose the right partner from hand-picked lists of vetted companies using credible agencies.",
            image: "/partners-img12.png",
            path: "https://www.goodfirms.co/",
        },
    ];

    useEffect(() => {
        gsap.utils.toArray('.toggle-point').forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 70%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    return (
        <>
        <Helmet>
                <title>Partner with Us | Expert Website Designing & Development Solutions</title>
                <meta name="description" content="Join hands with Hudbil, a trusted partner for creative website designing, seamless development, and digital growth. Let's build innovative, results-driven solutions together!"></meta>
                <meta property="og:url" content="https://www.hudbil.com/our-partners"></meta>
                <meta name="keywords" content="Website designing partner, web development partner, website development solutions, creative website agency, digital growth partner, professional web design, custom web development, website collaboration"></meta>
                <meta name="og:title" content="Our Trusted Partners | Website Designing & Development Agency"></meta>
                <meta name="og:description" content="Explore our partnerships with leading brands and businesses. Together, we deliver cutting-edge website design, development, and digital solutions that inspire growth and success."></meta>
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
            <main className='pt-[80px] bg-black'>
                <section className='pt-20 pb-28'>
                    <div className="relative mt-16 md:mt-20 mb-40">
                        <div className="relative">
                            <img className='px-6 md:px-0 mx-auto transition duration-500 grayscale hover:grayscale-0' src="/partners-img1.png" alt="Our Partners" />
                            <div className="absolute w-full inset-0 pointer-events-none flex justify-center items-center overflow-hidden">
                                <div className="marquee-text-container font-normal text-[1.7rem] uppercase">
                                    <div className="marquee-text text-white">We believe in the power of collaboration. Our partners are not just allies, they are an integral part of our journey to deliver exceptional design and development solutions. With a shared commitment to innovation and excellence</div>
                                    <div className="marquee-text text-white">We believe in the power of collaboration. Our partners are not just allies, they are an integral part of our journey to deliver exceptional design and development solutions. With a shared commitment to innovation and excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-6 lg:px-16 mt-20 flex flex-col lg:flex-row items-stretch w-full gap-20 xl:gap-24'>

                        <div className='flex flex-col gap-16 lg:gap-40 text-white items-start w-full lg:w-1/2 min-h-full'>
                            <div className="flex flex-col gap-8 w-full lg:w-5/6">
                                <div className='font-normal text-[2.5rem] leading-tight'>
                                    Our Partners
                                </div>
                                <div className='font-normal text-[1.5rem] leading-[40px] mb-5 tracking-[0.29px]'>
                                    We have formed partnerships that enhance our capabilities and Expand our reach globally.
                                </div>

                                <div className='flex flex-col gap-6 font-normal text-base leading-8 tracking-[0.29px]'>
                                    <div>
                                        Synergistic Approach: We work together to leverage our collective expertise, ensuring that every project benefits from a broader knowledge base.
                                    </div>
                                    <div>
                                        Enhanced Solutions: Our partnerships enable us to provide comprehensive solutions that combine cutting-edge technology with creative design.
                                    </div>
                                    <div>
                                        Shared Vision: We align with partners who share our passion for delivering quality and value to clients, creating a unified goal for success.
                                    </div>
                                </div>
                            </div>

                            <div className='flex w-full lg:sticky lg:top-0 md:h-[700px] xl:h-screen'>
                                <img src="/partners-img2.png" className="transition duration-500 grayscale hover:grayscale-0 object-cover w-full h-full" />
                            </div>
                        </div>

                        <div className='w-full lg:w-2/3 xl:w-1/2 text-white'>
                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                            {data.map((item, index) => (
                                <div key={index} className='toggle-point'>
                                    <div className="py-10 flex flex-col md:flex-row items-stretch justify-between gap-12 w-full h-full">
                                        <div className='w-full md:w-3/5 flex items-center leading-7 tracking-[0.29px]'>
                                            <div>{item.text}</div>
                                        </div>

                                        <div className="flex items-center justify-between w-full md:w-1/4 gap-[60px] lg:min-h-full">
                                            <div className="bg-[#6C6C6C] w-[1px] h-full hidden md:block"></div>
                                            <div className="bg-[#6C6C6C] h-[1px] w-full md:hidden block opacity-0"></div>
                                            <a href={item.path} target="_blank" className='w-full'>
                                                <img src={item.image} alt={`Partner ${index + 1}`} className="w-full" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <ReachUs />
            <Footer />
        </>
    )
}

export default Partners