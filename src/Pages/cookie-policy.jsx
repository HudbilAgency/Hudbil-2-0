import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

const CookiePolicy = () => {

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
                                Cookie Policy
                            </div>
                            <div>
                                <img className='w-full' src="./cookiepolicy.png" />
                            </div>
                            <div className='flex flex-col gap-4 leading-7 font-normal text-base pt-12 pb-8'>
                                <div>This Cookie Policy explains how Capital Numbers Infotech Private Limited (“Company”, “we”, “us”, and “our”) uses cookies and similar technologies to recognize you when you visit our websites at https://www.hudbil.com/, (“Websites”). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</div>
                                <div>In some cases we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.</div>
                            </div>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>What are cookies?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</div>
                                        <div>Cookies set by the website owner (in this case, Capital Numbers Infotech Private Limited) are called “first party cookies”. Cookies set by parties other than the website owner are called “third party cookies”. Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Why do we use cookies?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>We use first and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Websites to operate, and we refer to these as “essential” or &”strictly necessary” cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Websites for advertising, analytics and other purposes. This is described in more detail below.</div>
                                        <div>The specific types of first and third party cookies served through our Websites and the purposes they perform are described below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>How can I control cookies?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with
                                            services.</div>
                                        <div>The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies. As the means by which you can refuse cookies through your web browser controls vary from browser-to-browser, you should visit your browsers help menu for more information.</div>
                                        <div>The specific types of first and third party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Online Properties you visit):</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Essential website cookies</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Analytics and customization cookies</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Advertising cookies:</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>What about other tracking technologies, like web beacons?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Cookies are not the only way to recognize or track visitors to a website. We may use other, similar technologies from time to time, like web beacons (sometimes called &”tracking pixels” or “clear gifs”). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Websites or opened an e-mail including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Do you use Flash cookies or Local Shared Objects?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Websites may also use so-called “Flash Cookies” (also known as Local Shared Objects or “LSOs”) to, among other things, collect and store information about your use of our services, fraud prevention and for other site operations.</div>
                                        <div>If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may include instructions that explain, for example, how to delete existing Flash Cookies (referred to “information” on the Macromedia site), how to prevent Flash LSOs from being placed on your computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not being delivered by the operator of the page you are on at the time). Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or impede the functionality of some Flash applications, including, potentially, Flash applications used in connection with our services or online content.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Do you serve targeted advertising?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>Third parties may serve cookies on your computer or mobile device to serve advertising through our Websites. These companies may use information about your visits to this and other websites in order to provide relevant advertisements about goods and services that you may be interested in. They may also employ technology that is used to measure the effectiveness of advertisements. This can be accomplished by them using cookies or web beacons to collect information about your visits to this and other sites in order to provide relevant advertisements about goods and services of potential interest to you. The information collected through this process does not enable us or them to identify your name, contact details or other details that directly identify you unless you choose to provide these.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>How often will you update this Cookie Policy?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</div>
                                        <div>The date at the top of this Cookie Policy indicates when it was last updated.</div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Where can I get further information?</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>If you have any questions about our use of cookies or other technologies, please email us <span><a href="mailto:info@hudbil.com" target='_blank' className="text-blue-700">info@hudbil.com</a></span> or by post to:</div>
                                        <div className='flex flex-col items-start'>
                                            <div className='text-blue-700'>Hudbil Private Limited</div>
                                            <div>NO 235, 2nd & 3rd Floor, 13th Cross Rd,</div>
                                            <div>Indiranagar II Stage, Hoysala Nagar,</div>
                                            <div>INDIRANAGAR, BANGALORE-38</div>
                                            <div>888-4409-369</div>
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
                                <div>1.</div>
                                <div>What are Cookies?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>2.</div>
                                <div>Why do we use cookies?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>3.</div>
                                <div>How can I control cookies?</div>
                            </div>
                            <div className='flex gap-8 items-start px-6 font-normal text-base leading-7'>
                                <div>4.</div>
                                <div>Essential website cookies</div>
                            </div>
                        </div>
                    </div>

                </div>

            </main>
            <Footer />

        </>
    )
}

export default CookiePolicy