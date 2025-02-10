import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'

const PaymentPolicy = () => {

    return (
        <>
            <Helmet>
                <title>Our Cookie Policy: Managing Your Online Experience</title>
                <meta name="description" content="Our Cookie Policy explains how cookies are used to enhance website functionality, and how you can manage or opt out of cookie usage at any time."></meta>
                <meta property="og:url" content="www.hudbil.com/cookie-policy"></meta>
                <meta name="keywords" content="cookie policy, website cookies usage, managing cookies, cookie preferences, online cookies policy, cookies and data privacy, how cookies work, cookie consent policy"></meta>
                <meta name="og:description" content="Find out why UX design is important for your business and how it can help retain customers and drive growth. Read on!."></meta>
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
                <div className='font-normal text-4xl pt-20 px-6 lg:px-16 lg:hidden'>
                    Payment Policy
                </div>
                <div className='flex flex-col-reverse lg:flex-row items-start justify-between gap-20 lg:gap-8 py-10 lg:py-20 2xl:pb-28 px-6 lg:px-16'>
                    <div className='w-full relative lg:w-2/3 2xl:w-3/4 flex items-start h-full gap-0 lg:gap-8 pb-16 lg:pb-0'>
                        <div className='w-full'>
                            <div className='font-normal text-4xl pb-12 hidden lg:block'>
                                Payment Policy
                            </div>
                            <div>
                                <img className='w-full' src="./payment-policy.png" />
                            </div>
                            <div className='flex flex-col gap-4 leading-7 font-normal text-base pt-12 pb-8'>
                                <div>Dear Clients –</div>
                                <div>At Hudbil Private Limited we provide complete 360-degree design and development services for websites, ensuring a seamless experience from concept to launch. Below is our payment policy that outlines the terms and conditions for all international clients.</div>
                            </div>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 1. Project Agreement and Scope</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Before we begin any project, a formal agreement will be signed by both parties. This agreement will clearly define:</div>
                                        <div className='flex flex-col gap-1 ml-6'>
                                            <li>The scope of work, including design and development services</li>
                                            <li>Project milestones and timelines</li>
                                            <li>Deliverables at each phase</li>
                                            <li>The total project cost</li>
                                        </div>
                                        <div>Upon finalizing the agreement, we’ll establish the payment schedule based on the milestones and timeline.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 2. Payment Structure</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Our payment structure is designed to ensure transparency and fairness for both parties. Payments for international clients will be structured as follows:</div>
                                        <div className='flex flex-col gap-2'>
                                            <div><strong>A. Initial Deposit / Advance Payment</strong></div>
                                            <div className='flex flex-col gap-1 ml-6'>
                                                <li>A non-refundable deposit of 50% of the total project cost is required before starting any work.</li>
                                                <li>This deposit secures your place in our development schedule and covers initial project planning, concept design, and resource allocation.</li>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div><strong>B. Milestone Payments</strong></div>
                                            <div>Payments will be based on specific project milestones. These milestones are set to align with key stages in the design and development process, such as:</div>
                                            <div className='flex flex-col gap-1 ml-6'>
                                                <li><strong>Milestone 1:</strong> Concept Design and Wireframes Approval – 50% of the total project cost</li>
                                                <li><strong>Milestone 2:</strong> Prototype/Initial Development Completion – 25% of the total project cost</li>
                                                <li><strong>Milestone 3:</strong> Final Design and Full Functionality Development – 25% of the total project cost</li>
                                            </div>
                                            <div>Payments are due upon completion of each milestone and before moving to the next stage.
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div><strong>C. Final Payment</strong></div>
                                            <div className='flex flex-col gap-1 ml-6'>
                                                <li>The final 25% of the project cost is due upon completion of the project, prior to the official launch and handover of all files.</li>
                                                <li>This ensures that both parties are satisfied with the final product.</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 3. Payment Methods</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>We accept a variety of international payment methods to make the process easy for clients across different countries. These include:</div>
                                        <div className='flex flex-col gap-1 ml-6'>
                                            <li><strong>Bank Transfer</strong> (SWIFT / IBAN)</li>
                                            <li><strong>PayPal</strong></li>
                                            <li><strong>Credit Card</strong> (Visa, MasterCard, American Express)</li>
                                            <li><strong>Wire Transfer</strong></li>
                                            <li><strong>Other Payment Gateways</strong> (Stripe, TransferWise, etc.)</li>
                                        </div>
                                        <div>Clients are responsible for any transaction or processing fees charged by their respective payment providers. All payments must be made in the agreed currency (RS, USD, EUR, GBP, etc.), based on the project's location and scope.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 4. Late Payments</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>We understand that circumstances may arise, but timely payments are crucial for project progress. Late payments are subject to:</div>
                                        <div className='flex flex-col gap-1 ml-6'>
                                            <li>A 5% late fee per week of delay, added to the outstanding amount.</li>
                                            <li>If payment is delayed for more than 2 weeks, the project may be paused until payment is received.</li>
                                            <li>In case of extended non-payment, the project may be terminated, and any completed work remains the intellectual property of Hudbil Private Limited</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 5. Refunds and Cancellations</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Due to the nature of design and development work, refunds are not available for any payments made after the initial deposit. However, we offer a refund option under the following conditions:</div>
                                        <div className='flex flex-col gap-1 ml-6'>
                                            <li>If the client decides to cancel the project before work begins, a refund of the initial deposit may be issued minus any applicable administrative fees.</li>
                                            <li>Once work has started, payments for work already completed are non-refundable.</li>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div><strong>Project Termination:</strong></div>
                                            <li className='ml-6'>Once work has started, payments for work already completed are non-refundable.</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 6. Revisions and Additional Work</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div className='flex flex-col gap-1 ml-6'>
                                            <li><strong>Included Revisions:</strong> The scope of revisions is clearly outlined in the initial agreement. Typically, this includes up to 2 rounds of revisions per design phase (e.g., web page designs, mockups).</li>
                                            <li><strong>Additional Work:</strong> Any additional work or changes requested outside the agreed-upon scope will be billed separately at an hourly rate of 5000/- or as a fixed cost.</li>
                                            <li><strong>Client Approval:</strong> No work will continue until the client signs off on each phase or milestone.</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 7. Taxes and Fees</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div className='flex flex-col gap-1 ml-6'>
                                            <li>Clients are responsible for any applicable taxes, including VAT, GST, TDS sales tax, or other local taxes, which may apply depending on the client's country of residence.</li>
                                            <li>Prices quoted do not include taxes unless explicitly stated. Taxes will be added to the invoice as per local regulations.</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 8. Project Delivery and Final Handover</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div className='flex flex-col gap-1 ml-6'>
                                            <li>Upon final payment, we will hand over all the project files (including code, design assets, and documentation) to the client.</li>
                                            <li>The client will be asked to sign a Final Approval Form confirming that the work meets the agreed-upon specifications.</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 9. Currency and Exchange Rate</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div className='flex flex-col gap-1 ml-6'>
                                            <li>International clients should be aware of currency fluctuations and potential exchange rates when making payments.</li>
                                            <li>The project quote will be provided in the agreed-upon currency, and the final invoice will reflect the same.</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 10. Dispute Resolution</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>In case of a dispute, both parties agree to attempt to resolve the matter amicably through direct negotiation or via an arbitration process. If necessary, the dispute may be resolved according to the laws and regulations in Indian Court.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 11. Employee Code of Conduct & Client Interaction</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>At Hudbil Private Limited or our other brands like Hudbil, Coltfox, Kalacode, Infotik, our team upholds the highest standards of professionalism. This includes:</div>
                                        <div className='flex flex-col gap-2 ml-6'>
                                            <li><strong>Confidentiality:</strong> All client information and project data will be treated with strict confidentiality.</li>
                                            <li><strong>Communication:</strong> Our team will maintain clear and consistent communication with clients, keeping them informed of project progress.</li>
                                            <li><strong>Collaboration:</strong> We work closely with clients to ensure that their needs and feedback are heard, and we strive to offer the best solutions.</li>
                                            <li><strong>No direct Communication:</strong> All clients’ needs to understand the project managers upholds the sharing information between, designer, developers and marketers no direct communication will be held between Hudbil’s employees or our partner brands.</li>
                                            <li><strong>Clients Interaction:</strong> Project heads are only and only medium between clients and its project, no direct communication will be held between designers, developers, marketers, accounts, direct interaction is prohibited and its strictly out of our policy.</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Policy : 12. Confidentiality and Data Protection</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div className='flex flex-col gap-2'>
                                            <div><strong>A. Confidentiality</strong></div>
                                            <div className='flex flex-col gap-1 ml-6'>
                                                <li>All client information and project data will be kept confidential and will not be shared with third parties without the client’s consent, except where required by law.</li>
                                                <li>Both parties will sign a Non-Disclosure Agreement (NDA) if needed.</li>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <div><strong>B. Data Protection</strong></div>
                                            <div className='flex flex-col gap-1 ml-6'>
                                                <li>We take data protection seriously and comply with all relevant laws, including the General Data Protection Regulation (GDPR) for clients in the EU.</li>
                                                <li>The client is responsible for ensuring that they have the necessary permissions to use any third-party content on their website.</li>
                                            </div>
                                        </div>
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
                                <div>1. &nbsp;</div>
                                <div>Project Agreement and Scope</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>2. &nbsp;</div>
                                <div>Payment Structure</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>3. &nbsp;</div>
                                <div>Payment Methods</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>4. &nbsp;</div>
                                <div>Late Payments</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>5. &nbsp;</div>
                                <div>Refunds and Cancellations</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>6. &nbsp;</div>
                                <div>Revisions and Additional Work</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>7. &nbsp;</div>
                                <div>Taxes and Fees</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>8. &nbsp;</div>
                                <div>Project Delivery and Final Handover</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>9. &nbsp;</div>
                                <div>Currency and Exchange Rate</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>10.</div>
                                <div>Dispute Resolution</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>11.</div>
                                <div>Employee Code of Conduct & Client Interaction</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>12.</div>
                                <div>Confidentiality and Data Protection</div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
            <Footer />

        </>
    )
}

export default PaymentPolicy