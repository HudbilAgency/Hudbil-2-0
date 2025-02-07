import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import ReachUs from '../Components/ReachUs'
import Footer from '../Components/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Service4FAQ = () => {

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
                <div className='font-normal text-[#7811A5] text-4xl xl:text-5xl pt-28 pb-20 leading-snug px-6 lg:px-16'>
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

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);

    const toggleDropdown = (index) => {
        const updatedStates = dropdownStates.map((state, i) => i === index ? !state : state);
        setDropdownStates(updatedStates);
    };

    return (
        <div className='w-full'>

            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>1</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What are Cloud Solutions?</div>
                    </div>
                    <div onClick={() => toggleDropdown(0)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[0] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[0] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Cloud solutions refer to a variety of services and technologies that allow businesses to store data, run applications, and manage IT infrastructure over the internet instead of on-premises. These solutions provide businesses with greater flexibility, scalability, and cost-efficiency by leveraging cloud platforms like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).</div>
                        <div>Our cloud solutions include consulting, migration, infrastructure management, application development, cloud security, data analytics, backup, and disaster recovery services.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>2</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Types of Cloud Models Do You Offer?</div>
                    </div>
                    <div onClick={() => toggleDropdown(1)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[1] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[1] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[1] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>We offer three primary types of cloud deployment models to best fit your business needs:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Public Cloud: Services and infrastructure are delivered over the internet and shared across multiple organizations. Examples include AWS, Azure, and Google Cloud.</li>
                            <li>Private Cloud: A cloud infrastructure dedicated exclusively to your business, either hosted on-premises or by a third-party provider. This is ideal for businesses requiring more control over their data and security.</li>
                            <li>Hybrid Cloud: A combination of both public and private cloud environments, allowing you to move workloads between private and public clouds based on your needs. This provides flexibility and optimization of your existing infrastructure.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>3</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Are the Benefits of Cloud Solutions?</div>
                    </div>
                    <div onClick={() => toggleDropdown(2)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[2] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[2] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[2] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Cloud solutions offer numerous advantages to businesses, including:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Scalability: Easily scale your infrastructure to meet changing business demands, without the need for significant upfront investments.</li>
                            <li>Cost-Efficiency: Reduce capital expenditures by paying only for the resources you actually use, rather than maintaining expensive on-premise infrastructure.</li>
                            <li>Flexibility: Access your data and applications from anywhere, enabling better collaboration and remote work capabilities.</li>
                            <li>Security: Cloud providers invest heavily in robust security measures, ensuring data protection and compliance with regulatory standards.</li>
                            <li>Business Continuity: Cloud solutions provide backup and disaster recovery, ensuring that your data is safe and recoverable in the event of an issue.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>4</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Is Cloud Migration and How Does It Work?</div>
                    </div>
                    <div onClick={() => toggleDropdown(3)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[3] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[3] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[3] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Cloud migration refers to the process of moving your applications, data, and IT resources from on-premise servers or other cloud environments to a new cloud platform. The migration process typically includes:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Assessment: We evaluate your current infrastructure, applications, and data to understand how they will migrate to the cloud.</li>
                            <li>Strategy & Planning: We create a migration roadmap that minimizes downtime and ensures the transition is smooth and secure.</li>
                            <li>Migration: We execute the migration, transferring data and applications while ensuring compatibility and security.</li>
                            <li>Optimization: Post-migration, we optimize your cloud environment for cost, performance, and security.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>5</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How Do You Ensure Cloud Security?</div>
                    </div>
                    <div onClick={() => toggleDropdown(4)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[4] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[4] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[4] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>At Hudbil, cloud security is a top priority. We implement a multi-layered approach to ensure that your data and applications are protected from external threats and vulnerabilities. Our security measures include:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Data Encryption: We use encryption both in transit and at rest to protect sensitive data.</li>
                            <li>Access Management: We implement Identity and Access Management (IAM) systems to ensure that only authorized users can access specific data and applications.</li>
                            <li>Regular Audits: We conduct routine security audits to identify and resolve any vulnerabilities.</li>
                            <li>Compliance: We ensure that your cloud solutions comply with industry standards and regulations like GDPR, HIPAA, and PCI-DSS.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>6</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Is Cloud Backup & Disaster Recovery?</div>
                    </div>
                    <div onClick={() => toggleDropdown(5)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[5] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[5] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[5] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Cloud backup and disaster recovery solutions are critical to ensure that your data is protected and recoverable in the event of an emergency, system failure, or data loss. These services involve:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Automated Backups: We set up regular automated backups of your critical data to ensure it’s always secure.</li>
                            <li>Disaster Recovery: In the event of a failure, we ensure your business can quickly recover by restoring your data and applications from the cloud with minimal downtime.</li>
                            <li>Geographic Redundancy: We store backups in multiple locations to prevent data loss in case of hardware failure or natural disasters.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>7</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Cloud Platforms Do You Work With?</div>
                    </div>
                    <div onClick={() => toggleDropdown(6)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[6] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[6] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[6] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>We work with the leading cloud platforms to deliver tailored solutions based on your business requirements. Our expertise spans across:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Amazon Web Services (AWS): Scalable, secure, and widely used cloud services for a variety of industries.</li>
                            <li>Microsoft Azure: Robust cloud services for enterprises with advanced AI, analytics, and IoT capabilities.</li>
                            <li>Google Cloud Platform (GCP): Advanced cloud services, including machine learning, big data, and AI.</li>
                            <li>IBM Cloud: Cloud services with a focus on AI, blockchain, and hybrid cloud infrastructure.</li>
                            <li>Salesforce: Cloud-based CRM and business solutions that enhance collaboration and customer relationships.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>8</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How Do Cloud Solutions Improve Collaboration?</div>
                    </div>
                    <div onClick={() => toggleDropdown(7)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[7] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[7] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[7] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Cloud solutions enable teams to collaborate seamlessly, no matter where they are located. With cloud-based tools like document sharing, project management platforms, and real-time communication tools, your team can work together in real time, reducing delays and improving productivity. Additionally, cloud services offer file synchronization, ensuring everyone is working with the latest data, and can securely access resources from any device or location.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>9</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Will Cloud Solutions Improve My Business Efficiency?</div>
                    </div>
                    <div onClick={() => toggleDropdown(8)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[8] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[8] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[8] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Yes! Cloud solutions can significantly enhance your business efficiency by:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Reducing Downtime: Cloud infrastructure ensures high availability, with automatic failover and backup systems in place.</li>
                            <li>Boosting Productivity: Cloud-based tools and applications improve collaboration and streamline workflows.</li>
                            <li>Cost Optimization: You only pay for what you use, reducing the need for large capital expenditures on physical hardware and maintenance.</li>
                            <li>Agility: Cloud solutions enable your business to quickly adapt to changing market conditions and scale resources as needed.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>10</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Is the Cost of Cloud Solutions?</div>
                    </div>
                    <div onClick={() => toggleDropdown(9)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[9] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[9] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[9] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>The cost of cloud solutions depends on several factors, including the scope of services, the cloud platform you choose, and your business's specific requirements. With cloud computing, you typically pay for what you use, meaning costs can vary based on the level of storage, compute power, and services you require.</div>
                        <div>We work with clients to provide cost-effective solutions by optimizing your cloud environment, ensuring that you only pay for the resources you need, and helping you achieve maximum return on investment.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>11</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do You Provide Ongoing Support for Cloud Solutions?</div>
                    </div>
                    <div onClick={() => toggleDropdown(10)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[10] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[10] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[10] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Absolutely! We offer ongoing support and maintenance to ensure your cloud environment is running efficiently. Our support services include:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Proactive monitoring to detect and resolve issues before they impact your business.</li>
                            <li>Optimization of cloud resources for better performance and reduced costs.</li>
                            <li>Security updates and patches to ensure that your cloud environment is secure and compliant.</li>
                            <li>24/7 technical support to address any concerns or issues.</li>
                        </div>
                        <div>We are committed to ensuring that your cloud infrastructure continues to meet your evolving business needs.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>12</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How Do I Get Started with Cloud Solutions?</div>
                    </div>
                    <div onClick={() => toggleDropdown(11)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[11] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[11] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[11] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Getting started with Hudbil's cloud solutions is easy! Simply contact us to schedule a consultation. Our team will assess your current infrastructure, understand your business goals, and create a tailored cloud strategy that aligns with your needs. From there, we’ll guide you through the process of migration, optimization, and ongoing management.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
        </div>
    );
};

export default Service4FAQ