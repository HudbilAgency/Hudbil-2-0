import React , { useState } from 'react'
import Navbar from '../Components/Navbar'
import ReachUs from '../Components/ReachUs'
import Footer from '../Components/Footer'

const Our_industry = () => {


   // Manage states for first set of dropdowns (15 cards)
   const [dropdownStates, setDropdownStates] = useState(Array(15).fill(false));
    
   const toggleDropdown = (index) => {
       const updatedStates = dropdownStates.map((state, i) => i === index ? !state : state);
       setDropdownStates(updatedStates);
   };

   // Manage states for second set of dropdowns (15 cards)
   const [dropdownStates2, setDropdownStates2] = useState(Array(15).fill(false));

   const toggleDropdown2 = (index) => {
       const updatedStates2 = dropdownStates2.map((state, i) => i === index ? !state : state);
       setDropdownStates2(updatedStates2);
   };

  return (
    <>
    < Navbar />
    {/* Header */}
    <section className='w-[90%] mx-auto  py-24 space-y-5 lg:py-32 md:flex'>
        <h1 className='text-xl sm:text-2xl md:text-4xl uppercase w-full tracking-wide'>Our industry</h1>
        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl md:w-[60%]'>Our capability and expertise to deliver a range of software design & development solutions is what make us the top software development Agency.</h2>
    </section>

    <section className='w-[90%] mx-auto '>
         < DropdownComponent/>
    </section>
   
    < ReachUs />
    < Footer />
    </>
  )
}



const DropdownComponent = () => {
    // Manage state for 15 dropdowns
    const [dropdownStates2, setDropdownStates2] = useState(Array(15).fill(false));

    const toggleDropdown2 = (index) => {
        const updatedStates = dropdownStates2.map((state, i) => (i === index ? !state : state));
        setDropdownStates2(updatedStates);
    };

    // Dynamic titles for each dropdown
    const dropdownTitles = [
        "Automotive", "BFSI", "Edu Tech", "Energy and Mining", "Fintech",
        "Food & Beverage", "Health Tech", "Insurance", "Manufacturing", "Media and Entertainment",
        "Travel and Hospitality", "Transportation", "Technology","Retailer", "Real Estate"
    ];
    

    // Simulate content for each dropdown
    const dropdownContent = [
        "Advanced Automotive Software Solutions, Website Designing & Development, Mobile App. |The automotive industry is witnessing a sea change. One after the other, technological breakthroughs are causing disruption in the industry. To be the frontrunner, you need to adopt these before your competitors.",
        "Advanced Banking Software Solutions, Website Designing & Development, Mobile App.|Banking and financial software solutions play a major role in streamlining financial services. It personalises to create smart user-centric solutions. And manages to assist in reducing costs, boosting loyalty, finances, business image, and more. So, integrating the BFSI solutions can help to enhance transparency among users which increases satisfaction.",
        "Advanced Education Software Solutions, Website Designing & Development, Mobile App.| We have worked with some leading educational institutions to build customised, secure, and adaptive online learning software solutions. Our expertise in E-Learning software, mobile learning apps and the Student Information System with solid knowledge of the client requirements are just a few more reasons to choose us as your technology partner.",
        "Advanced Energy and Mining Software Solutions, Website Designing & Development.|Energy and mining software help your business to streamline operations, boost efficiency, and improve safety standards. These industries have unique set of requirements owing to diverse challenges and regulatory standards.",
        "Advanced Banking & Financial Consulting Software Solutions, Website Designing & Development.|We offer a variety of services such as digital transformation, compliance, risk management, security, etc. We help to offer experts to build practical plans made with real-time analysis and understanding of user experiences for a reliable and efficient investment.",
        "Advanced Food and Hotel Software Solutions, Website Designing & Development. Mobile App.|Software developed for the food and beverage industry serve the needs of restaurants, food delivery services, catering firms and more. The features of software can vary based on its actual requirement for an establishment.",
        "Advanced Healthcare Software Solutions, Website Designing & Development. Mobile App.|We are experts in building remote monitoring and telemedicine solutions. Through these healthcare IT services, medical practitioners are able to supervise patients & health status from a distance and deliver virtual consultations, broadening access to care and lowering healthcare costs.",
        "Advanced Insurance Software Solutions, Website Designing & Development. Mobile App.|Our seasoned insurance software developers will help transform your insurance company into a digitally mature insurance enterprise. We will define, create, implement, and provide constant support for the state-of-the-art insurance software solutions for your insurance business that maximise revenue, reduce operational costs, improve governance, and establish long-term customer relationships.",
        "Advanced Manufacturing Software Solutions, Website Designing & Development.|In manufacturing world, staying competitive requires embracing innovation. Our IT solutions for the manufacturing industry offer a range of features and are designed to improve overall efficiency, reduce errors, and provide a competitive edge in today’s manufacturing industry.",
        "Advanced Media & Entertainment Software Solutions, Website Designing & Development. Mobile App.|Media and Publishing is a challenging domain, with success being driven by the ability to reach the intended audience and deliver them just the right content they are looking for. The landscape of the industry has been redefined by the advent of online, social, and mobile technologies as all businesses need to embrace these technologies to stay in the race.",
        "Advanced Travel and Hospitality Software Solutions, Website Designing & Development. Mobile App.|A leading hospitality & travel software development company in India. We have the specialised expertise and experience needed to deliver sophisticated, yet custom-made travel & hospitality solutions to help your scale and succeed.",
        "Advanced Transportation Software Solutions, Website Designing & Development. Mobile App.|Transportation and logistics domains are under constant transformation to deliver excellence. So, to align your transportation business with the latest tech stack you need a reliable partner. We at OrangeMantra is one of the leading transportation software development company to help you deliver the best value-driven transportation solutions. So, you can upgrade your business success to the next level.",
        "Advanced Technology Software Solutions, Website Designing & Development. Mobile App.|We understand the unique challenges and opportunities that technology businesses face. Our business technology solutions are meticulously crafted to empower your technology-focused organisation. Few are some standout features of technology solutions tailored specially for the technology industry:",
        "Advanced Retail Software Solutions, Website Designing & Development. Mobile App.|We aim to revolutionise your company operations, going beyond transaction management. With our creative and customised solutions, you can stay ahead of the curve in the retail space while streamlining processes and making the most use of available resources.",
        "Advanced Real Estate Software Solutions, Website Designing & Development. Mobile App.|We take pride in offering real estate software solutions designed to revolutionise the way you manage, market and grow your real estate business. Our feature-rich software is built to streamline operations, enhance customer experiences and drive results. Here are some key features of real estate software development solutions.",
    ];

    return (
        <div>
            {dropdownTitles.map((title, index) => (
                <div key={index}>
                    
                    <div className="py-4 flex flex-col">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center text-center justify-between gap-8">
                                <div className='border rounded-full p-1 px-3 border-gray-400'>{index + 1}</div>
                                <div className="font-normal text-xl sm:text-2xl md:text-4xl leading-9">{title}</div>
                            </div>
                            <div onClick={() => toggleDropdown2(index)} className="cursor-pointer">
                                <svg className={`transition-transform duration-300 ${dropdownStates2[index] ? 'rotate-[-180deg]' : 'rotate-[0deg]'}`} width="30" height="25" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_7690_1453)">
                                        <g clipPath="url(#clip1_7690_1453)">
                                            <path d="M45.2769 1.46875L22.9998 23.7459L0.722656 1.46875" stroke="#C0C2C4" strokeWidth="0.657143" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7690_1453">
                                            <rect width="46" height="23.66" fill="white" transform="translate(0 0.8125)" />
                                        </clipPath>
                                        <clipPath id="clip1_7690_1453">
                                            <rect width="46" height="23.6571" fill="white" transform="translate(0 0.8125)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates2[index] ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="text-xl pt-10 w-full lg:w-2/3 ml-auto md:mr-[6%]">
                            {dropdownContent[index % dropdownContent.length]
                                .split('|')  // Split the content by the pipe symbol
                                .map((line, i) => (
                                    <p key={i} className="whitespace-pre-line mt-5">{line}</p>  // Render each part as a new paragraph
                                ))
                            }
                        </div>
                    </div>
                    <div className="bg-[#6C6C6C] h-[0.5px] w-full mt-6"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};




export default Our_industry