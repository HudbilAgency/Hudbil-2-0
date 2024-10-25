import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

const PrivacyPolicy = () => {

    const tableRows = [
        { category: "A. Identifiers", examples: "Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier,online identifier, Internet Protocol address, email address, and account name" },
        { category: "B. Personal information categories listed in the California Customer Records statute", examples: "Name, contact information, education, employment, employment history, and financial information" },
        { category: "C. Protected classification characteristics under California or federal law", examples: "Gender and date of birth" },
        { category: "D. Commercial information", examples: "Transaction information, purchase history, financial details, and payment information" },
        { category: "E. Biometric information", examples: "Fingerprints and voiceprints" },
        { category: "F. Internet or other similar network activity", examples: "Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications,systems, and advertisements" },
        { category: "G. Geolocation data", examples: "Device location" },
        { category: "H. Audio, electronic, visual, thermal, olfactory, or similar information", examples: "Images and audio, video or call recordings created in connection with our business activities" },
        { category: "I. Professional or employment-related information", examples: "Business contact details in order to provide you our services at a business level or job title, work history, and professional qualifications if you apply for a job with us" },
        { category: "J. Education Information", examples: "Student records and directory information" },
        { category: "K. Inferences drawn from other personal information", examples: "Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics" },
    ];

    return (
        <>
        <Navbar />
            <main className='pt-[40px]'>
                <div className='font-normal text-4xl pt-20 px-6 lg:px-16 lg:hidden'>
                    Privacy Policy
                </div>
                <div className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-8 py-10 lg:py-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 2xl:w-3/4 flex items-start h-full gap-0 lg:gap-8 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal text-4xl pb-12 hidden lg:block'>
                                Privacy Policy
                            </div>
                            <div>
                                <img className='w-full' src="./privacypolicy.png" />
                            </div>
                            <div className='flex flex-col gap-4 leading-7 font-normal text-base pt-12 pb-8'>
                                <div>This privacy notice for Hudbil Private Limited (doing business as Hudbil Private Limited)(“Hudbil Private Limited” “we”  “us” or
                                    ”our”), describes how and why we might collect, store, use, and/or share (“process”) your information when you use our services (“Services”), such as when you:</div>
                                <div className='flex items-start gap-6'>
                                    <div>1.</div>
                                    <div>Visit our website at <span>
                                        <a href="https://www.hudbil.com" className="underline text-blue-700">
                                            https://www.hudbil.com
                                        </a>
                                    </span>, or any website of ours that links to this privacy notice</div>
                                </div>
                                <div className='flex items-start gap-6'>
                                    <div>2.</div>
                                    <div>Engage with us in other related ways, including any sales, marketing, or events</div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col gap-4 items-start'>
                                    <div className='font-normal text-2xl leading-9'>Questions or concerns?</div>
                                    <div className='leading-7 font-normal text-base'>concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@hudbil.com.</div>
                                </div>
                                <div className='flex flex-col gap-4 items-start'>
                                    <div className='font-normal text-2xl leading-9'>SUMMARY OF KEY POINTS</div>
                                    <div className='leading-7 font-normal text-base'>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</div>
                                </div>
                                <div className='flex flex-col gap-4 items-start'>
                                    <div className='font-normal text-2xl leading-9'>What personal information do we process?</div>
                                    <div className='leading-7 font-normal text-base'>When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Hudbil Private Limited and the Services, the choices you make, and the products and features you use.</div>
                                </div>
                                <div className='flex flex-col gap-4 items-start'>
                                    <div className='font-normal text-2xl leading-9'>Do we process any sensitive personal information? </div>
                                    <div className='leading-7 font-normal text-base'>We do not process sensitive personal information.</div>
                                </div>
                                <div className='flex flex-col gap-4 items-start'>
                                    <div className='font-normal text-2xl leading-9'>Do you receive any information from third parties?</div>
                                    <div className='leading-7 font-normal text-base'>We do not receive any information from third parties.</div>
                                </div>
                                <div className='flex flex-col gap-4 items-start'>
                                    <div className='font-normal text-2xl leading-9'>How do you process my information?</div>
                                    <div className='leading-7 font-normal text-base'>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</div>
                                </div>
                                <div className='flex flex-col gap-4 items-start'>
                                    <div className='font-normal text-2xl leading-9'>In what situations and with which parties do we share personal information? </div>
                                    <div className='leading-7 font-normal text-base'>We may share information in specific situations and with specific third parties.</div>
                                </div>
                                <div className='flex flex-col gap-4 items-start'>
                                    <div className='font-normal text-2xl leading-9'>How do we keep your information safe? </div>
                                    <div className='leading-7 font-normal text-base'>We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to
                                        defeat our security and improperly collect, access, steal, or modify your information.</div>
                                </div>
                                <div className='flex flex-col gap-4 items-start'>
                                    <div className='font-normal text-2xl leading-9'>What are your rights?</div>
                                    <div className='leading-7 font-normal text-base'>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</div>
                                </div>
                                <div className='flex flex-col gap-4 items-start'>
                                    <div className='font-normal text-2xl leading-9'>How do I exercise my rights? </div>
                                    <div className='leading-7 font-normal text-base'>The easiest way to exercise your rights is by filling out our data subject request form available here, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</div>
                                </div>
                            </div>
                            <div className='py-8 leading-7 font-normal text-base'>Want to learn more about what Hudbil Private Limited does with any information we collect?</div>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>1.</div>
                                        <div>WHAT INFORMATION DO WE COLLECT?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Personal information you disclose to us</div>
                                        <div>In Short: We collect personal information that you provide to us. We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</div>
                                        <div>Personal Information Provided by You. </div>
                                        <div>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</div>
                                        <div className='flex gap-2'><div>1.</div><div>Names</div></div>
                                        <div className='flex gap-2'><div>2.</div><div>Phone Number</div></div>
                                        <div className='flex gap-2'><div>3.</div><div>Email Address</div></div>
                                        <div className='flex gap-2'><div>4.</div><div>Billing Address</div></div>
                                        <div className='flex gap-2'><div>5.</div><div>IP Address</div></div>
                                        <div className='flex gap-2'><div>6.</div><div>Browsing History</div></div>
                                        <div className='flex gap-2'><div>7.</div><div>Mailing Address</div></div>
                                        <div className='flex gap-2'><div>8.</div><div>Job titles</div></div>
                                        <div className='text-2xl leading-9'>Sensitive Information</div>
                                        <div>We do not process sensitive information. All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</div>
                                        <div className='text-2xl leading-9'>Information automatically collected</div>
                                        <div>In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services. We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</div>
                                        <div>Like many businesses, we also collect information through cookies and similar technologies. The information we collect includes: Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on
                                            how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called “crash dumps”), and hardware settings).</div>
                                        <div>Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</div>
                                        <div>Location Data. We collect location data such as information about your devices location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing
                                            access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>2.</div>
                                        <div>HOW DO WE PROCESS YOUR INFORMATION?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</div>
                                        <div>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</div>
                                        <div>To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service. To respond to user inquiries/offer support to users. We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service. To fulfill and manage your orders. We may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services. To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.</div>
                                        <div>To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see “WHAT ARE YOUR PRIVACY RIGHTS?” below).</div>
                                        <div>To send you marketing and promotional communications. We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see “WHAT ARE YOUR PRIVACY RIGHTS?” below).</div>
                                        <div>To deliver targeted advertising to you. We may process your information to develop and display personalized content and advertising tailored to your interests, location, and more.</div>
                                        <div>To determine the effectiveness of our marketing and promotional campaigns. We may process your information to
                                            better understand how to provide marketing and promotional campaigns that are most relevant to you.</div>
                                        <div>To determine the effectiveness of our marketing and promotional campaigns. We may process your information to
                                            better understand how to provide marketing and promotional campaigns that are most relevant to you.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>3.</div>
                                        <div>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</div>
                                        <div>If you are located in the EU or UK, this section applies to you. The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</div>
                                        <div>Consent. - We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Click here to learn more.</div>
                                        <div>Performance of a Contract - We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</div>
                                        <div>Legitimate Interests. We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:</div>
                                        <div>Send users information about special offers and discounts on our products and services. Develop and display personalized and relevant advertising content for our users Support our marketing activities Understand how our users use our products and services so we can improve user experience</div>
                                        <div>Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved. Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</div>
                                        <div className='text-2xl leading-9'>If you are located in Canada, this section applies to you.</div>
                                        <div>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</div>
                                        <div>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</div>
                                        <div className='flex gap-6'>
                                            <div>1.</div>
                                            <div>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>2.</div>
                                            <div>For investigations and fraud detection and prevention</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>3.</div>
                                            <div>For business transactions provided certain conditions are met</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>4.</div>
                                            <div>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>5.</div>
                                            <div>For identifying injured, ill, or deceased persons and communicating with next of kin</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>6.</div>
                                            <div>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>7.</div>
                                            <div>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>8.</div>
                                            <div>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>9.</div>
                                            <div>If the collection is solely for journalistic, artistic, or literary purposes</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>10.</div>
                                            <div>If the information is publicly available and is specified by the regulations</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>4.</div>
                                        <div>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In Short: We may share information in specific situations described in this section and/or with the following third parties. We may need to share your personal information in the following situations:</div>
                                        <div>Business Transfers -  We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</div>
                                        <div>Affiliates - We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</div>
                                        <div>Business Partners -  We may share your information with our business partners to offer you certain products, services, or promotions.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>5.</div>
                                        <div>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In Short -  We may use cookies and other tracking technologies to collect and store your information. We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific
                                            information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>6.</div>
                                        <div>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In Short -  We may transfer, store, and process your information in countries other than your own.</div>
                                        <div>Our servers are located inthe United States, India, and Australia. If you are accessing our Services from outside the United States,India, and Australia, please be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your personal information (see “WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?” above), in the United States, India, Australia, and other countries.</div>
                                        <div>If you are a resident in the European Economic Area (EEA) or United Kingdom (UK), then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this privacy notice and applicable law.</div>
                                        <div>European Commissions Standard Contractual Clauses - We have implemented measures to protect your personal information, including by using the European Commissions Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>7.</div>
                                        <div>HOW LONG DO WE KEEP YOUR INFORMATION?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In Short -  We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</div>
                                        <div>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than 2 years.</div>
                                        <div>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>8.</div>
                                        <div>HOW DO WE KEEP YOUR INFORMATION SAFE?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In Short - We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third
                                            parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>9.</div>
                                        <div>DO WE COLLECT INFORMATION FROM MINORS?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In Short - We do not knowingly collect data from or market to children under 18 years of age. We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <span><a href="mailto:info@hudbil.com" target='_blank' className="underline text-blue-700">info@hudbil.com</a></span></div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>10.</div>
                                        <div>WHAT ARE YOUR PRIVACY RIGHTS?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In Short: In some regions, such asthe European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</div>
                                        <div>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You
                                            can make such a request by contacting us by using the contact details provided in the section “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?” below.</div>
                                        <div>We will consider and act upon any request in accordance with applicable data protection laws.</div>
                                        <div>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here:</div>
                                        <div>https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</div>
                                        <div>If you are located in Switzerland, the contact details for the data protection authorities are available here:</div>
                                        <div>https://www.edoeb.admin.ch/edoeb/en/home.html.</div>
                                        <div>Withdrawing your consent - If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?” below.</div>
                                        <div>However, please note that this will not affect the lawfulness of the processing before its withdrawal, nor when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</div>
                                        <div>Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional
                                            communications at any time by clicking on the unsubscribe link in the emails that we send, replying “STOP” or “UNSUBSCRIBE” to the SMS messages that we send, or by contacting us using the details provided in the section “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?” below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</div>
                                        <div>Cookies and similar technologies - Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.</div>
                                        <div>If you have questions or comments about your privacy rights, you may email us at <span><a href="mailto:info@hudbil.com" target='_blank' className="underline text-blue-700">info@hudbil.com</a></span></div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>11.</div>
                                        <div>CONTROLS FOR DO-NOT-TRACK FEATURES</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that
                                            we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>12.</div>
                                        <div>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In Short - Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information. California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</div>
                                        <div>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g., backups, etc.).</div>
                                        <div className='text-2xl'>CCPA Privacy Notice</div>
                                        <div>The California Code of Regulations defines a “resident” as:</div>
                                        <div className='flex gap-6'>
                                            <div>1.</div>
                                            <div>Every individual who is in the State of California for other than a temporary or transitory purpose and</div>
                                        </div>
                                        <div className='flex gap-6'>
                                            <div>2.</div>
                                            <div>Every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose</div>
                                        </div>
                                        <div>All other individuals are defined as”non-residents.” If this definition of “resident” applies to you, we must adhere to
                                            certain rights and obligations regarding your personal information.</div>
                                        <div className='text-2xl'>What categories of personal information do we collect?</div>
                                        <div>We have collected the following categories of personal information in the past twelve (12) months:</div>
                                        <div>
                                            <div className="border border-b-0 border-black border-opacity-50">
                                                <div className="flex border-b border-black border-opacity-50">
                                                    <div className="py-2 px-4 md:px-6 text-left border-r border-opacity-50 border-black w-1/2 font-normal text-xl">Category</div>
                                                    <div className="py-2 px-4 md:px-12 text-left w-1/2 font-normal text-xl">Examples</div>
                                                </div>
                                                {tableRows.map((row, index) => (
                                                    <div key={index} className="flex border-b border-black border-opacity-50">
                                                        <div className="py-2 px-4 md:px-6 text-left border-r border-opacity-50 border-black w-1/2 flex items-center justify-between"><div>{row.category}</div></div>
                                                        <div className="py-2 px-4 md:px-12 text-left w-1/2 flex items-center justify-between"><div>{row.examples}</div></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div>We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of:</div>
                                        <div>Receiving help through our customer support channels; Participation in customer surveys or contests; and Facilitation in the delivery of our Services and to respond to your inquiries.</div>
                                        <div className='text-2xl'>How do we use and share your personal information?</div>
                                        <div>More information about our data collection and sharing practices can be found in this privacy notice. You may contact us by email at <span>
                                            <a className="underline text-blue-700" href="mailto:info@hudbil.com" target='_blank'>info@hudbil.com</a>
                                        </span>, or by referring to the contact details at the bottom of this document. If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized agent does not submit
                                            proof that they have been validly authorized to act on your behalf.</div>
                                        <div className='text-2xl'>Will your information be shared with anyone else?</div>
                                        <div>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf. We may use your personal information for our own business purposes, such as for undertaking internal research for
                                            technological development and demonstration. This is not considered to be “selling” of your personal information. Hudbil Private Limited has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Hudbil Private Limited will not sell personal information in the future belonging to website visitors, users, and other consumers. Hudbil Private Limited has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Hudbil Private Limitedwill not sell personal information in the future belonging to website visitors, users, and other consumers.</div>
                                        <div className='text-2xl'>Your rights with respect to your personal data</div>
                                        <div>Right to request deletion of the data — Request to delete You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities.</div>
                                        <div>Right to be informed — Request to know Depending on the circumstances, you have a right to know: whether we collect and use your personal information; the categories of personal information that we collect; the purposes for which the collected personal information is used; whether we sell your personal information to third parties; the categories of personal information that we sold or disclosed for a business purpose; the categories of third parties to whom the personal information was sold or disclosed for a business purpose; and the business or commercial purpose for collecting or selling personal information. In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.</div>
                                        <div>Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights</div>
                                        <div>We will not discriminate against you if you exercise your privacy rights.</div>
                                        <div>Verification process</div>
                                        <div>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g., phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate. We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.</div>
                                        <div>Other privacy rights</div>
                                        <div>You may object to the processing of your personal information. You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information.</div>
                                        <div>You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with the CCPA.</div>
                                        <div>You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission. To exercise these rights, you can contact us by email at <span>
                                            <a className="underline text-blue-700" href="mailto:info@hudbil.com" target='_blank'>info@hudbil.com</a>
                                        </span>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>13.</div>
                                        <div>DO WE MAKE UPDATES TO THIS NOTICE?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In Short -  Yes, we will update this notice as necessary to stay compliant with relevant laws.</div>
                                        <div>We may update this privacy notice from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting
                                            your information.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>14.</div>
                                        <div>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO), Mukul Gupta, by email at <span>
                                            <a className="underline text-blue-700" href="mailto:info@hudbil.com" target='_blank'>info@hudbil.com</a>
                                        </span>, by phone at <span><a className="underline text-blue-700" href="tel:+919886955551">9886955551</a></span>, or by post to: <span><button className="underline text-blue-700">Hudbil Private Limited</button></span></div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>15.</div>
                                        <div>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM  YOU?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='hidden lg:block w-[1px] absolute bg-[#7e7676] opacity-50 h-full'></div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/3 2xl:w-1/4 border border-[#B0B0B0] border-opacity-75 rounded-lg'>
                        <div className='font-normal text-2xl leading-9 py-6 px-6'>Contents</div>
                        <div className='flex flex-col gap-4 pb-6 text-[#454343]'>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>1.</div>
                                <div>WHAT INFORMATION DO WE COLLECT?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>2.</div>
                                <div>HOW DO WE PROCESS YOUR INFORMATION?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>3.</div>
                                <div>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>4.</div>
                                <div>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>5.</div>
                                <div>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>6.</div>
                                <div>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>7.</div>
                                <div>HOW LONG DO WE KEEP YOUR INFORMATION?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>8.</div>
                                <div>HOW DO WE KEEP YOUR INFORMATION SAFE?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>9.</div>
                                <div>DO WE COLLECT INFORMATION FROM MINORS?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>10.</div>
                                <div>WHAT ARE YOUR PRIVACY RIGHTS?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>11.</div>
                                <div>CONTROLS FOR DO-NOT-TRACK FEATURES</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>12.</div>
                                <div>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>13.</div>
                                <div>DO WE MAKE UPDATES TO THIS NOTICE?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>14.</div>
                                <div>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>15.</div>
                                <div>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
            <Footer />

        </>
    )
}

export default PrivacyPolicy