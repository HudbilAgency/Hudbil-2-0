import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import ReachUs from '../Components/ReachUs'
import Footer from '../Components/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

const Service6FAQ = () => {

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

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

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
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What is Blockchain Development?</div>
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
                        <div>Blockchain development refers to the creation of applications or systems that leverage blockchain technology. It involves the design, development, and deployment of decentralized applications (DApps), smart contracts, and blockchain platforms to solve real-world problems such as improving security, transparency, and reducing intermediaries. Blockchain development also includes setting up and maintaining blockchain networks, ensuring they are scalable, secure, and efficient.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>2</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Industries Can Benefit from Blockchain Technology?</div>
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
                        <div>Blockchain technology has the potential to revolutionize a wide range of industries, including:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Finance: Digital payments, decentralized finance (DeFi), asset tokenization, and secure transactions.</li>
                            <li>Healthcare: Secure medical records, patient data sharing, and drug traceability.</li>
                            <li>Supply Chain: Improved transparency, traceability, and secure transaction history.</li>
                            <li>Real Estate: Property tokenization, smart contracts for property transactions.</li>
                            <li>Gaming: Decentralized platforms, in-game tokens, and NFTs.</li>
                            <li>Government: Transparent voting systems, digital identities, and anti-corruption measures.</li>
                            <li>Retail & E-commerce: Secure transactions, loyalty programs, and decentralized marketplaces.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>3</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Are Smart Contracts?</div>
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
                        <div>Smart contracts are self-executing contracts with the terms of the agreement directly written into code. Once the contract’s conditions are met, the code executes the agreed-upon actions automatically, without the need for intermediaries. This reduces costs, speeds up processes, and ensures security by eliminating the potential for human error or manipulation.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>4</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Is a Decentralized Application (DApp)?</div>
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
                        <div>A Decentralized Application (DApp) is an application that runs on a decentralized network, rather than a centralized server. DApps use blockchain technology to ensure transparency, security, and user control. They can range from finance apps (DeFi) to gaming apps and even social platforms. The key difference from traditional apps is that DApps operate on a peer-to-peer network, making them less vulnerable to centralized points of failure.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>5</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Is the Difference Between Public and Private Blockchains?</div>
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
                        <div className='flex flex-col gap-4'>
                            <li>Public Blockchains: These are open to anyone who wants to participate. They are decentralized, transparent, and anyone can view the data and participate in the consensus mechanism. Examples include Ethereum and Bitcoin.</li>
                            <li>Private Blockchains: These are controlled by a central authority or a group of authorized participants. They are typically used by businesses for internal applications where privacy and confidentiality are important. They offer greater control over who can access the network and read/write data.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>6</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How Long Does It Take to Develop a Blockchain Solution?</div>
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
                        <div>The time required for blockchain development depends on several factors, including the complexity of the project, the features required, and the type of blockchain network being developed (e.g., public or private). Typically, a blockchain project can take anywhere from a few weeks to several months to complete. Hudbil works closely with clients to define timelines and milestones to ensure timely delivery without compromising on quality.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>7</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Are the Costs of Blockchain Development?</div>
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
                        <div>The cost of blockchain development depends on various factors such as the complexity of the solution, the blockchain platform used, the level of customization, and the features required (e.g., smart contracts, DApps, security, etc.). We offer flexible pricing based on project scope and can provide an estimate after understanding your business needs and requirements. Reach out to us for a personalized consultation and quote.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>8</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Can Blockchain Be Integrated with Existing Systems?</div>
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
                        <div>Yes! Blockchain can be integrated with existing systems such as CRM, ERP, or other enterprise solutions. Integration enables businesses to improve data security, traceability, and transparency in their operations. Hudbil helps clients seamlessly incorporate blockchain into their existing infrastructure to enhance business processes and create more efficient workflows.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>9</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">What Blockchain Platforms Do You Work With?</div>
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
                        <div>We work with a variety of blockchain platforms depending on the needs of the project. Some of the most popular platforms include:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Ethereum (for DApps and smart contracts)</li>
                            <li>Hyperledger (for enterprise-grade, permissioned blockchains)</li>
                            <li>Binance Smart Chain (for decentralized finance applications)</li>
                            <li>Solana (for high-speed applications)</li>
                            <li>Polkadot (for cross-chain interoperability)</li>
                            <li>Cardano (for secure, scalable solutions)</li>
                            <li>Tezos (for self-amending blockchains)</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>10</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How Secure Is Blockchain Technology?</div>
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
                        <div>Blockchain technology is inherently secure due to its decentralized nature. It uses cryptographic hashing and consensus mechanisms to validate and store transactions, ensuring transparency and immutability. However, the security of your specific blockchain solution depends on factors such as:</div>
                        <div className='flex flex-col gap-4'>
                            <li>The consensus algorithm used (Proof of Work, Proof of Stake, etc.)</li>
                            <li>The proper implementation of smart contracts</li>
                            <li>The security of private keys and wallet management</li>
                            <li>Regular auditing and monitoring of the blockchain network</li>
                        </div>
                        <div>At Hudbil, we prioritize security and compliance, ensuring that your blockchain solution is robust and protected against vulnerabilities.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>11</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Can You Help with ICO/IEO Launches?</div>
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
                        <div>Yes, we offer end-to-end support for Initial Coin Offerings (ICO) and Initial Exchange Offerings (IEO), including:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Tokenomics design (structure of the token economy)</li>
                            <li>Smart contract development for token creation</li>
                            <li>Legal compliance (ensuring adherence to relevant regulations)</li>
                            <li>Platform integration for ICO/IEO launch</li>
                            <li>Marketing support to promote the ICO/IEO</li>
                            <li>We ensure that your token offering is compliant, secure, and well-positioned to attract investors.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>12</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How Do You Ensure Blockchain Solutions Are Scalable?</div>
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
                        <div>Scalability is a critical factor in blockchain development, and we use best practices and technologies to ensure that your blockchain solution can handle future growth. This includes:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Layer 2 solutions like state channels or sidechains to offload transactions and improve scalability.</li>
                            <li>Sharding to divide the blockchain into smaller, more manageable parts.</li>
                            <li>Choosing platforms and frameworks with high transaction throughput.</li>
                            <li>Regular performance testing and optimization.</li>
                        </div>
                        <div>Our team will ensure that the blockchain solution we build is not only secure and functional but also capable of scaling as your business grows.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>13</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">Do You Provide Ongoing Support After the Project Is Launched?</div>
                    </div>
                    <div onClick={() => toggleDropdown(12)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[12] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[12] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[12] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Absolutely! We offer post-launch support to ensure your blockchain solution continues to function smoothly and securely. Our ongoing services include:</div>
                        <div className='flex flex-col gap-4'>
                            <li>Maintenance and updates to the platform.</li>
                            <li>Bug fixing and performance optimization.</li>
                            <li>Security audits and compliance checks.</li>
                            <li>Scaling and new feature development as your business evolves.</li>
                        </div>
                        <div>Our team is available for long-term support to make sure your blockchain solution remains effective and secure.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
            <div className="py-8 flex flex-col toggle-point">
                <div className="flex items-start xl:items-center justify-between gap-8">
                    <div className="flex items-start justify-between gap-8 w-full">
                        <div className='border rounded-full text-center w-9 p-1 border-[#D8D8D8]'>14</div>
                        <div className="font-normal text-xl md:text-3xl leading-9 w-5/6 md:w-full">How Do I Get Started with Blockchain Development at Hudbil?</div>
                    </div>
                    <div onClick={() => toggleDropdown(13)} className="cursor-pointer mt-[8px] xl:mt-[0px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`transition-transform duration-300 ${dropdownStates[13] ? 'rotate-[-180deg]' : 'rotate-[0deg]'
                                }`}
                        >
                            <rect width="24" height="24" rx="12" fill="#7811A5" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            {!dropdownStates[13] && <rect x="11" y="7" width="2" height="10" fill="white" />}
                        </svg>
                    </div>
                </div>
                <div className={`flex xl:items-end xl:justify-end overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[13] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-base flex flex-col gap-6 md:text-xl pt-10 w-full xl:w-2/3 2xl:w-2/3 md:ml-[70px] md:mr-20">
                        <div>Getting started is easy! Simply contact us to schedule a consultation, where we’ll discuss your business needs and explore how blockchain can benefit your company. We’ll work with you to identify the best approach, technology, and blockchain platform to build a solution that delivers maximum value. Whether you’re in the early stages of planning or ready to start development, Hudbil is here to guide you through the process.</div>
                    </div>
                </div>
            </div>
            <div className="bg-[#D8D8D8] h-[0.5px] w-full"></div>
        </div>
    );
};

export default Service6FAQ