import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import ReachUs from '../Components/ReachUs'
import Footer from '../Components/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {

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
                <title>Common Questions | Design and Development FAQs</title>
                <meta name="description" content="Have questions about our design and development process? Check our FAQs to learn more about our services, pricing, and project timelines."></meta>
                <meta property="og:url" content="www.hudbil.com/faq"></meta>
                <meta name="keywords" content="Website design FAQs, Development agency questions, Common design questions, Web development FAQs, Client support inquiries, Service-related questions, Design process explained, Development project timelines, Pricing FAQs, Design and development insights"></meta>
                <meta name="og:description" content="highlighting key inquiries about the design and development agency's services and processes."></meta>
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
                <div className='font-normal text-4xl xl:text-5xl pt-28 pb-20 leading-snug px-6 lg:px-16'>
                    FAQs
                </div>
                <section className='w-full px-6 lg:px-16 mb-20'>
                    <DropdownComponent />
                </section>
            </main>
            <ReachUs />
            <Footer />
        </>
    )
}

const DropdownComponent = () => {
    const [dropdownStates2, setDropdownStates2] = useState(Array(20).fill(false));

    const toggleDropdown2 = (index) => {
        const updatedStates = dropdownStates2.map((state, i) => (i === index ? !state : state));
        setDropdownStates2(updatedStates);
    };

    const dropdownTitles = [
        "What services does your design and development agency offer?",
        "How long does it take to complete a web development project?",
        "What is your design process?",
        "Do you provide ongoing maintenance and support after launch?",
        "How do you ensure that the websites you design are mobile-friendly?",
        "Can you work with existing branding and design materials?",
        "What technologies do you use for web development?",
        "How do you handle SEO during the development process?",
        "Will my website be secure?",
        "What if I need changes after the project is completed?",
        "How do you approach UX/UI design?",
        "Can you help with e-commerce solutions?",
        "What is your pricing structure?",
        "Do you offer custom software development?",
        "How do you ensure project transparency and communication?",
        "What industries do you serve?",
        "Can you assist with digital marketing strategies?",
        "What happens if I don’t like the initial design concepts?",
        "How do you measure the success of a project?",
        "Do you offer training for using the website or application?"
    ];


    const dropdownContent = [
        "We offer a range of services, including web design, web development, mobile app development, UX/UI design, digital marketing, branding, and e-commerce solutions.",
        "The timeline varies based on project complexity. Generally, small projects take 4-6 weeks, while larger, more complex projects may take several months.",
        "Our design process typically includes research, wireframing, prototyping, design iteration, and final implementation, ensuring we meet client needs at each stage.",
        "Yes, we offer ongoing maintenance and support packages to ensure your website or application remains updated and secure.",
        "We use responsive design techniques to ensure that all websites function seamlessly on various devices and screen sizes.",
        "Absolutely! We can incorporate your existing branding and design elements into new projects or help you refresh your current materials.",
        "We work with various technologies, including HTML, CSS, JavaScript, PHP, Python, Ruby on Rails, and popular content management systems like WordPress and Shopify.",
        "We implement SEO best practices during the design and development stages, including optimizing page speed, mobile responsiveness, meta tags, and clean URL structures.",
        "Yes, we prioritize security by following best practices, such as implementing SSL certificates, using secure hosting, and regular updates.",
        "We can accommodate changes based on your feedback. Depending on the scope of the changes, additional costs may apply.",
        "Our approach focuses on user-centered design, involving user research, usability testing, and iterative design processes to ensure optimal user experiences.",
        "Yes, we provide comprehensive e-commerce development services, including payment gateway integration, product management, and user experience optimization.",
        "Our pricing varies depending on the project scope and complexity. We offer both fixed-price and hourly-rate options tailored to your needs.",
        "Yes, we specialize in custom software development to meet specific business requirements, ensuring tailored solutions that align with your goals.",
        "We maintain regular communication through project management tools, updates, and scheduled meetings to keep you informed and involved throughout the process.",
        "We work with a variety of industries, including e-commerce, healthcare, education, finance, technology, and non-profit organizations.",
        "Yes, we provide digital marketing services, including SEO, content marketing, social media marketing, and email marketing, to help boost your online presence.",
        "We encourage client feedback and provide multiple design concepts to ensure you’re satisfied with the direction before moving forward.",
        "Success is measured through various KPIs, including user engagement, conversion rates, website traffic, and client satisfaction.",
        "Yes, we provide training sessions and documentation to ensure you and your team can effectively use and manage your new website or application."
    ];

    return (
        <div>
            {dropdownTitles.map((title, index) => (
                <div key={index}>

                    <div className="py-4 flex flex-col toggle-point">
                        <div className="flex items-start xl:items-center justify-between gap-8">
                            <div className="flex items-start justify-between gap-8 w-full">
                                <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>{index + 1}</div>
                                <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">{title}</div>
                            </div>
                            <div onClick={() => toggleDropdown2(index)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`transition-transform duration-300 ${dropdownStates2[index] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                        }`}
                                >
                                    <rect width="24" height="24" rx="12" fill="#7811A5" />
                                    <rect x="7" y="11" width="10" height="2" fill="white" />
                                    {!dropdownStates2[index] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                                </svg>
                            </div>
                        </div>
                        <div className={`flex items-end justify-end gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="text-base md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 pl-auto md:pr-[8.5%] md:pl-[8.5%] xl:pl-[0%] 2xl:pr-[20%] xl:pr-[8.5%]">
                                {dropdownContent[index % dropdownContent.length]
                                    .split('|')
                                    .map((line, i) => (
                                        <p key={i} className="whitespace-pre-line">{line}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="bg-[#D8D8D8] h-[0.5px] w-full mt-6"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Faq