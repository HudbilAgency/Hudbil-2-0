import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'

const TableDiv = ({ dynamicContent }) => {

    const staticContent = [
        "Name",
        "Purpose",
        "Provider",
        "Service",
        "Country",
        "Type",
        "Expires in"
    ];

    return (
        <div className='w-full mt-3 flex flex-col gap-10'>
            <div className="table-div border border-b-0 border-[#5B5B5B] border-opacity-50 w-full">
                {staticContent.map((label, index) => (
                    <div key={index} className="flex border-b border-[#5B5B5B] border-opacity-50 w-full">
                        <div className="py-2 px-4 md:px-6 text-left border-r border-opacity-50 border-[#5B5B5B] flex items-start justify-between w-1/3 md:w-1/4">
                            <div>{label}:</div>
                        </div>
                        <div className="py-2 px-4 md:px-6 text-left border-opacity-50 border-[#5B5B5B] flex items-center justify-between w-2/3 md:w-3/4">
                            <div>{dynamicContent[index]}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const dynamicTexts1 = [
    "euds",
    "A session cookie of the eud cookie",
    ".rfihub.com",
    <>Rocketfuel&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "session"
];

const dynamicTexts2 = [
    "cu",
    "Determine new sessions/visits. It is persistent and expires after 365days",
    ".ipredictive.com",
    <>ipredictive&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts3 = [
    "ljt_reader",
    "Enables Lijit to recognize user browser or device when theyreturn to their site or one of their partner’s sites.",
    ".lijit.com",
    <>Lijit Reader&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];
const dynamicTexts4 = [
    "rxVisitor",
    "Used by DYnatrace service to monitor web application performance and errors",
    ".getresponse.com",
    <>Dynatrace&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "2 Years"
];
const dynamicTexts5 = [
    "bridge.gif",
    "Used by Adgear to redirect to client endpoint",
    "www.hudbil.com",
    <>Adgear&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];
const dynamicTexts6 = [
    "ssi",
    "Registers a unique ID that identifies a returning users device. The ID is used for targeted ads. expires after 1 year",
    ".sitescout.com",
    <>SiteScout&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];
const dynamicTexts7 = [
    "dtCookie",
    "It is a Dynatrace cookie that uses session storage to monitor the performance of a site. Its structure includes a random value together with an encoded application information. It expires at the end of a session and uses a maximum size of 100B.",
    ".getresponse.com",
    <>Dynatrace&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "session"
];

const dynamicTexts8 = [
    "sync/",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts9 = [
    "#.gif",
    "Used by Towerdata to gather data about website clients to help site owners target better ads at them",
    "www.hudbil.com",
    <>Towerdata&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts10 = [
    "out",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts11 = [
    "_rxuuid",
    "This cookie carries out information about how the end user uses the website and any advertising that the end user may have seen before visiting the said website.",
    ".targeting.unrulymedia.com",
    <>RhythmOne&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts12 = [
    "__stid",
    "The __stid cookie is set as part of the ShareThis service and monitors user-activity, e.g. Web pages viewed, navigation from page to page, time spent on each page etc.",
    ".sharethis.com",
    <>ShareThis&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "11 months 30 days"
];

const dynamicTexts13 = [
    "merge",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts14 = [
    "m",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts15 = [
    "dcm",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts16 = [
    "AFFICHE_W",
    "Used by the advertising platform Weborama to determine the visitors interests based on pages visits, content clicked and other actions on the website.",
    ".weborama.fr",
    <>Weborama&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "France",
    "server_cookie",
    "1 year 27 days"
];

const dynamicTexts17 = [
    "_gat",
    "Used to monitor number of Google Analytics server requests when using Google Tag Manager",
    ".ted.com",
    <>Google Analytics&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 minute"
];

const dynamicTexts18 = [
    "c745aa170b",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts19 = [
    "validateCookie",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts20 = [
    "i",
    "Used by Yandex Metrica for identifying site users. This cookie exists for a period of 1 year maximum.",
    ".openx.net",
    <>Yandex Metrica&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts21 = [
    "log",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts22 = [
    "c/",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts23 = [
    "sd",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts24 = [
    "ab",
    "Used by Neustar to collect data on user visits to a site, such as what pages have been accessed. The registered data is used to categorise the user’s interest and demographic profiles in terms of resales for targeted marketing.",
    <>Neustar&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts25 = [
    "_ga",
    "It records a particular ID used to come up with data about website usage by the user. It is a HTTP cookie that expires after 2 years.",
    ".capitalnumbers.com",
    <>Google Analytics&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts26 = [
    "mako_uid",
    "Collects data on user visits to the website, such as what pages have been accessed. The registered data is used to categorise the users interest and demographic profiles in terms of resalesfor targeted marketing. Persistent cookie that is saved for a year",
    ".eyeota.net",
    <>Eyeota&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "Singapore",
    "http_cookie",
    "11 months 30 days"
];

const dynamicTexts27 = [
    "pxrc",
    "Used to analyse how user interacts with the site to optimise ads shown to them. Expires after 2 months",
    ".rlcdn.com",
    <>Liveramp&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "1 month 29 days"
];

const dynamicTexts28 = [
    "xuid",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts29 = [
    "v3/",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts30 = [
    "MUID",
    "Sets a unique user id for tracking how the user uses the site. Persistent cookie that is saved for 3 years",
    ".bing.com",
    <>Bing Analytics&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 year 24 days"
];

const dynamicTexts31 = [
    "p2",
    "Set by Scorecardresearch on sites to help websites count users who have visited and seen a page or various parts of a page.",
    ".owneriq.net",
    <>Scorecardresearch&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "10 days"
];

const dynamicTexts32 = [
    "demdex",
    "Used by Adobe Analytics to help identify a unique visitor across domains. The demdex cookie is set in the third-party, demdex.net domain in the browser.",
    ".demdex.net",
    <>Adobe Analytics&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "5 months 27 days"
];

const dynamicTexts33 = [
    "usermatchredir",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts34 = [
    "_rxuuid",
    "This cookie carries out information about how the end user uses the website and any advertising that the end user may have seen before visiting the said website.",
    ".1rx.io",
    <>RhythmOne&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts35 = [
    "rlas3",
    "Used to collect anonymous data related to the users visits to the website, such as the number of visits, average time spent on the website and what pages have been loaded, with the purpose of displaying targeted ads.",
    ".rlcdn.com",
    <>Rapleaf&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "http_cookie",
    "11 months 30 days"
];

const dynamicTexts36 = [
    "pxrc",
    "Used to analyse how user interacts with the site to optimise ads shown to them. Expires after 2 months",
    ".pippio.com",
    <>Liveramp&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "1 month 29 days"
];

const dynamicTexts37 = [
    "Pug",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts38 = [
    "tap.php",
    "Used to register anonymised user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the users movement on websites that use the same ad network.",
    "www.hudbil.com",
    <>Rubicon Project&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts39 = [
    "pixel.gif",
    "A session cookie used to measure how users interact with the ads placed on a site by Upsales CRM.",
    "www.hudbil.com",
    <>Upsales&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts40 = [
    "current",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts41 = [
    "10751/",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts42 = [
    "mxpim",
    "Collects unidentifiable data that is sent to Valasis for analysis and improve adverts. Persistent cookie that is saved for 730 days",
    ".mxptint.net",
    <>Valasis Digital&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "2 years"
];

const dynamicTexts43 = [
    "audit",
    "Set by Rubicon Project to record cookie consent data.",
    ".rubiconproject.com",
    <>Rubycon Project&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts44 = [
    "cookiesync",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts45 = [
    "c.gif",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts46 = [
    "img",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts47 = [
    "khaos",
    "Set by Rubicon Project as an Internal user identifier used for analytics. Persistent cookie that stays for 2920 days",
    ".rubiconproject.com",
    <>Rubicon Project&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "11 months 30 days"
];

const dynamicTexts48 = [
    "_dc_gtm_UA-#",
    "Google Tag Manager uses it to control how a Google Analytics script tag loads. This is a HTTP cookie whose data is deleted after a session.",
    ".capitalnumbers.com",
    <>Google Tag Manager&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 minute"
];

const dynamicTexts49 = [
    "NID",
    "Set by Google to set a unique user ID to remember user preferences. Persistent cookie that stays for 182 days",
    ".google.com",
    <>Google&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "6 months"
];

const dynamicTexts50 = [
    "p",
    "Set by Scorecardresearch on sites to help site owners collect information about general visitation patterns of the site visitors",
    "www.hudbil.com",
    <>Scorecardresearch&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts51 = [
    "setuid",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts52 = [
    "_ga",
    "It records a particular ID used to come up with data about website usage by the user. It is a HTTP cookie that expires after 2 years.",
    ".ted.com",
    <>Google Analytics&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts53 = [
    "obuid",
    "Holds the anonymous users ID. Used for tracking user actions, such as clicks on the recommendations. Persistent cookie that is saved for 3 months",
    ".outbrain.com",
    <>Outbrain&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "2 months 29 days"
];

const dynamicTexts54 = [
    "MUID",
    "Sets a unique user id for tracking how the user uses the site. Persistent cookie that is saved for 3 years",
    ".clarity.ms",
    <>Bing Analytics&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 year 24 days"
];

const dynamicTexts55 = [
    "image.sbxx",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts56 = [
    "#collect",
    "Sends data such as visitor’s behavior and device to Google Analytics. It is able to keep track of the visitor across marketing channels and devices. It is a pixel tracker type cookie whose activity lasts within the browsing session.",
    "www.hudbil.com",
    <>Google Analytics&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts57 = [
    "771910212/",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts58 = [
    "_gid",
    "Keeps an entry of unique ID which is then used to come up with statistical data on website usage by visitors. It is a HTTP cookie type and expires after a browsing session.",
    ".capitalnumbers.com",
    <>Google Analytics&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 day"
];

const dynamicTexts59 = [
    "px/",
    "__________",
    "www.hudbil.com",
    <>__________</>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts60 = [
    "VISITOR_INFO1_LIVE",
    "YouTube is a Google-owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. Used by Google in combination with SID to verify Google user account and most recent login time.",
    ".youtube.com",
    <>YouTube&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "5 months 27 days"
];

const dynamicTexts61 = [
    "SRM_B",
    "Atlast Adserver used in conjunction with Bing services. Expires after 180 days",
    ".c.bing.com",
    <>Atlas&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "1 year 24 days"
];

const dynamicTexts62 = [
    "adrl",
    "This cookie is set by Outbrain and it is used to analyse technical data about the website",
    ".outbrain.com",
    <>Outbrain&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "20 days"
];

const dynamicTexts63 = [
    "bkpa",
    "Used to present the visitor with relevant content and advertisement - The service is provided by third party advertisement hubs, which facilitate real-time bidding for advertisers.",
    ".bluekai.com",
    <>BlueKai&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "6 months 1 day"
];

const dynamicTexts64 = [
    "lidid",
    "A unique anonymous user identifier set for a site visitor so as to track their usage on the site for better targeted advertising. A persistent cookie that stays saved for 730 days",
    ".liadm.com",
    <>LiveIntent&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts65 = [
    "KRTBCOOKIE_#",
    "Used by Pubmatic to correlate user IDs with those of their partners (such as demand side platform clients or other advertising technology companies). Pubmatic passes the information stored by the partner in this cookie to the partner when it is considering whether to purchase advertisements. This enables the partner to make better decisions about whether to display an advertisement to a site visitor",
    ".pubmatic.com",
    <>Pubmatic&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "2 months 29 days"
];

const dynamicTexts66 = [
    "sync",
    "A session cookie used to show relevant ads to a user on a site based on their interests.",
    "www.hudbil.com",
    <>Connexity&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts67 = [
    "YSC",
    "YouTube is a Google-owned platform for hosting and sharing videos. YouTube collects user data through videos embedded in websites, which is aggregated with profile data from other Google services in order to display targeted advertising to web visitors across a broad range of their own and other websites. Used by Google in combination with SID to verify Google user account and most recent login time.",
    ".youtube.com",
    <>YouTube&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "session"
];

const dynamicTexts68 = [
    "bku",
    "This cookie is used to deliver adverts more relevant to a visitor more relevant with their interests. It is also used to limit the number of times they see an advertisement as well as help measure the effectiveness of the advertising campaign.",
    ".bluekai.com",
    <>BlueKai&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "6 months 1 day"
];

const dynamicTexts69 = [
    "uuid2",
    "This cookie is owned by App Nexus and used to buy, sell, and deliver online advertising, including interest-based advertising, mostly through real-time bidding.",
    ".adnxs.com",
    <>Ap Nexus&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "2 months 29 days"
];

const dynamicTexts70 = [
    "_cc_dc",
    "Used by Lotame to store an indicator which tells them what data center a profile originated in (for international operations)",
    ".crwdcntrl.net",
    <>Lotame&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "8 months 26 days"
];

const dynamicTexts71 = [
    "IDE",
    "Used to measure the conversion rate of ads presented to the user. Expires in 1.5 years.",
    ".doubleclick.net",
    <>DoubleClick&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts72 = [
    "bcookie",
    "Used to optimize the range of advertising on Linkedin",
    ".linkedin.com",
    <>Linkedin Ad Analytics&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 year 11 months 30 days"
];

const dynamicTexts73 = [
    "_omappvs",
    "Cookie set by OptinMonster to determine if a visitor is new",
    "www.hudbil.com",
    <>OptinMonster&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "20 minutes"
];

const dynamicTexts74 = [
    "_gcl_au",
    "Used by Google AdSense for experimenting with advertisement efficiency across websites using their services.",
    ".capitalnumbers.com",
    <>AdSense&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "2 months 29 days"
];

const dynamicTexts75 = [
    "c",
    "Regulates synchronisation of user identification and exchange of user data between various ad services.",
    ".bidswitch.net",
    <>Bidswitch&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United Kingdom",
    "http_cookie",
    "11 months 30 days"
];

const dynamicTexts76 = [
    "sa-user-id-v2",
    "Used by Stackadapt to save unique visitor ID to monitor how they use the site and show them relevant ads. Persistent cookie that is saved for 5 years.",
    ".srv.stackadapt.com",
    <>Stackadapt&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts77 = [
    "fr",
    "Used by Facebook to collect a unique browser and user ID, used for targeted advertising.",
    ".facebook.com",
    <>Facebook&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "2 months 29 days"
];

const dynamicTexts78 = [
    "tuuid",
    "Unique value to identify individual users.",
    ".fg8dgt.com",
    <>Platform161&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts79 = [
    "tk_ui_third",
    "Used for targeted advertising by Adventori. Expires after 3 months.",
    ".adventori.com",
    <>ADventori&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "2 months 29 days"
];

const dynamicTexts80 = [
    "ruds",
    "A session cookie used to register anonymised user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the users movement on websites that use the same ad network.",
    ".rfihub.com",
    <>Rocket Fuel&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "session"
];

const dynamicTexts81 = [
    "ANONCHK",
    "Used by Bing as a unique user identifier for users seeing bing ads",
    ".c.clarity.ms",
    <>Bing&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "10 minutes"
];

const dynamicTexts82 = [
    "pbw",
    "Used by SmartAdserver to identify user browser information and screen size.Persistent cookie that expires after 13 monthsUsed by SmartAdserver to identify user browser information and screen size.Persistent cookie that expires after 13 months",
    ".smartadserver.com",
    <>Smart AdServer&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "1 year 1 month"
];

const dynamicTexts83 = [
    "UserMatchHistory",
    "These cookies are associated with a B2B marketing platform, formerly known as Bizo, which is now owned by LinkedIn, the business networking platform. This sub-domain is connected with LinkedIns marketing services that enable website owners to gain insight into types of users on their site based on LinkedIn profile data, to improve targeting.",
    ".linkedin.com",
    <>LinkedIn&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "30 days"
];

const dynamicTexts84 = [
    "_fbp",
    "Facebook tracking pixel used to identify visitors for personalized advertising.",
    ".capitalnumbers.com",
    <>Facebook&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "2 months 29 days"
];

const dynamicTexts85 = [
    "DW",
    "A session cookie used for targeted ads and to document efficacy of each individual ad.",
    ".insightexpressai.com",
    <>kantar Millward Brown Advertising&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "6 months 14 days"
];

const dynamicTexts86 = [
    "tuuid_lu",
    "Contains a unique visitor ID, which allows Bidswitch.com to track the visitor across multiple websites. This allows Bidswitch to optimize advertisement relevance and ensure that the visitor does not see the same ads multiple times.",
    ".company-target.com",
    <>bidswitch.net</>,
    "__________",
    "server_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts87 = [
    "PugT",
    "This cookie tracks when cookies were updated on the browser, in order to limit the number of calls to the server-side cookie store. Persistent cookie that expires in 30 days",
    ".pubmatic.com",
    <>Pubmatic&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "30 days"
];

const dynamicTexts88 = [
    "uid",
    "Contains a unique ID to identify a user",
    "www.swpsvc.com",
    <>Adform&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "9 years 11 months 28 days"
];

const dynamicTexts89 = [
    "anj",
    "This cookie contains data denoting whether a cookie ID is synced with an AppNexus partner",
    ".adnxs.com",
    <>AppNexus&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "http_cookie",
    "2 months 29 days"
];

const dynamicTexts90 = [
    "KADUSERCOOKIE",
    "Used by Pubmatic to uniquely identify each browser or device from which an individual user visits our partners’ websites. Persistent cookie that stays for 121 days",
    ".pubmatic.com",
    <>Pubmatic&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "2 months 29 days"
];

const dynamicTexts91 = [
    "_li_ss",
    "Used by Liveintent for target based advertising by collecting unique visitor information",
    "i.liadm.com",
    <>Liveintent&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "30 days"
];

const dynamicTexts92 = [
    "c",
    "Regulates synchronisation of user identification and exchange of user data between various ad services.",
    ".myvisualiq.net",
    <>Bidswitch&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "http_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts93 = [
    "uid",
    "Contains a unique ID to identify a user",
    ".turn.com",
    <>Adform&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "5 months 27 days"
];

const dynamicTexts94 = [
    "TapAd_DID",
    "Used to determine what type of devices (smartphones, tablets, computers, TVs etc.) is used by a user. Expires after 2 months.",
    ".tapad.com",
    <>Tapad&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "1 month 29 days"
];

const dynamicTexts95 = [
    "pi",
    "Enables Pubmatic to determine which set of pixels needs to be executed on the browser.",
    ".ml314.com",
    <>Pubmatic&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts96 = [
    "auid",
    "Holds the advertising ID of the user in mobile devices. Used for tracking user actions, such as clicks on the recommendations",
    ".apolloprogram.io",
    <>ApolloProgram&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "2 months 29 days"
];

const dynamicTexts97 = [
    "nnls",
    "Used by Liveramp for Target advertising. Persistent cookie that is saved for 60 days",
    ".pippio.com",
    <>Liveramp&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 month 29 days"
];

const dynamicTexts98 = [
    "A3",
    "Cookies set in third party websites and apps",
    ".yahoo.com",
    <>Yahoo&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 year"
];

const dynamicTexts99 = [
    "tuuid_lu",
    "Contains a unique visitor ID, which allows Bidswitch.com to track the visitor across multiple websites. This allows Bidswitch to optimize advertisement relevance and ensure that the visitor does not see the same ads multiple times.",
    ".myvisualiq.net",
    <>bidswitch.net</>,
    "__________",
    "server_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts100 = [
    "auid",
    "Collects data on the users visits to the website, such as what pages have been loaded. The registered data is used for targeted ads.",
    ".adstir.com",
    <>Mediamath&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "2 months 29 days"
];

const dynamicTexts101 = [
    "bito",
    "Used by Beeswax as a unique Client ID when the client isbidding for an ad",
    ".bidr.io",
    <>Beeswax&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "http_cookie",
    "1 year 29 days"
];

const dynamicTexts102 = [
    "test_cookie",
    "A session cookie used to check if the user’s browser supports cookies.",
    ".doubleclick.net",
    <>DoubleClick&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "15 minutes"
];

const dynamicTexts103 = [
    "TDID",
    "Is a third party cookie that contains a unique randomly-generated value that enables the platform to distinguish browsers and devices.",
    ".adsrvr.org",
    <>The Trade Desk&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts104 = [
    "ANON_ID",
    "Stores anonymous user information for the purpose of serving relevant ads",
    "www.hudbil.com",
    <>Exponential&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "2 months 29 days"
];

const dynamicTexts105 = [
    "_uetvid",
    "Used to track visitors on multiple websites, in order to present relevant advertisement based on the visitors preferences.",
    "www.hudbil.com",
    <>Google Tag Manager&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "html_local_storage",
    "persistent"
];

const dynamicTexts106 = [
    "tk_ui",
    "Used for targeted advertising by Adventori. Expires after 3 months.",
    ".adventori.com",
    <>ADventori&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "2 months 29 days"
];

const dynamicTexts107 = [
    "_cc_cc",
    "Used by Lotame to store encoded profile behaviors for interest based advertising",
    ".crwdcntrl.net",
    <>Lotame&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "session"
];

const dynamicTexts108 = [
    "auid",
    "Holds the advertising ID of the user in mobile devices. Used for tracking user actions, such as clicks on the recommendations",
    ".acuityplatform.com",
    <>ApolloProgram&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "11 months 30 days"
];

const dynamicTexts109 = [
    "pid",
    "Registers a unique ID that identifies a returning users device. The ID is used for targeted ads. Persistent cookie that expires after 13 months",
    ".smartadserver.com",
    <>Smart AdServer&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "1 year 1 month"
];

const dynamicTexts110 = [
    "tluid",
    "Set by Triplelift as a uniques user ID to collect anonymous information about the user browsing habits. Expires in 90 days.",
    ".3lift.com",
    <>Triplelift&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "2 months 29 days"
];

const dynamicTexts111 = [
    "_uetsid",
    "Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement - This also allows the website to limit the number of times that they are shown the same advertisement.",
    ".capitalnumbers.com",
    <>Google Tag Manager&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 day"
];

const dynamicTexts112 = [
    "cm",
    "A persistent cookie used to save unique user ID to monitor user and for targeted advertising",
    "www.hudbil.com",
    <>Rocketfuel&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts113 = [
    "cid_#",
    "Used by Adriver as a specific advert ID for a specific user",
    ".ctnsnet.com",
    <>Adriver&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts114 = [
    "uid",
    "Contains a unique ID to identify a user",
    ".addthis.com",
    <>Adform&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "Netherlands",
    "http_cookie",
    "1 year 24 days"
];

const dynamicTexts115 = [
    "dyn_u",
    "Used for user interaction analysis for target advertising. Persistent cookie that stays for 1 year",
    ".dyntrk.com",
    <>Dynadmic&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts116 = [
    "__ar_v4",
    "This domain is owned by Doubleclick (Google). We use Doubleclick to manage real-time bidding advertising exchange.",
    "www.hudbil.com",
    <>DoubleClick&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "111 months 30 days"
];

const dynamicTexts117 = [
    "tuuid_lu",
    "Contains a unique visitor ID, which allows Bidswitch.com to track the visitor across multiple websites. This allows Bidswitch to optimize advertisement relevance and ensure that the visitor does not see the same ads multiple times.",
    ".bidswitch.net",
    <>bidswitch.net</>,
    "United Kingdom",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts118 = [
    "tuuid",
    "Unique value to identify individual users.",
    ".bidswitch.net",
    <>Platform161&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United Kingdom",
    "http_cookie",
    "11 months 30 days"
];

const dynamicTexts119 = [
    "tr/",
    "Facebook tracking pixel used to identify visitors for personalized advertising.",
    "www.hudbil.com",
    <>Facebook&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts120 = [
    "IMRID",
    "Used to collect behavioral information such as a users navigation of a website to build an online profile that can be used for the targeting of advertisements.",
    ".imrworldwide.com",
    <>DoubleClick&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "1 year 24 days"
];

const dynamicTexts121 = [
    "EE",
    "Used by Exelate for Target advertising. A persistent cookie that stays active for 120 days",
    ".exelator.com",
    <>Exelate&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "3 months 28 days"
];

const dynamicTexts122 = [
    "EE",
    "Used by Exelate for Target advertising. A persistent cookie that stays active for 120 days",
    ".exelator.com",
    <>Exelate&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "3 months 28 days"
];

const dynamicTexts123 = [
    "sa-user-id",
    "Used by Stackadapt to save unique visitor ID to monitor how they use the site and show them relevant ads. Persistent cookie that is saved for 5 years.",
    "sync.srv.stackadapt.com",
    <>Stackadapt&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "11 months 30 days"
];

const dynamicTexts124 = [
    "_kuid_",
    "Registers a unique ID that identifies a returning users device. The ID is used for targeted ads.",
    ".krxd.net",
    <>Salesforce DMP&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "5 months 27 days"
];

const dynamicTexts125 = [
    "dpm",
    "Data management platforms use this cookie to record information around synchronisation of the user IDs they have collected.",
    ".dpm.demdex.net",
    <>Adobe Audience Manager&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "5 months 27 days"
];

const dynamicTexts126 = [
    "CMST",
    "Persistent cookies set by CasaleMedia for anonymous user tracking, and using the data used for targeted advertising",
    ".casalemedia.com",
    <>Casale Media&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "Canada",
    "server_cookie",
    "1 day"
];

const dynamicTexts127 = [
    "audience",
    "Used to deliver targeted adverts to users based on browsing activity",
    ".spotxchange.com",
    <>Spotxchange&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts128 = [
    "tuuid",
    "Unique value to identify individual users.",
    ".myvisualiq.net",
    <>Platform161&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "http_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts129 = [
    "tuuid",
    "Unique value to identify individual users.",
    ".company-target.com",
    <>Platform161&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "http_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts130 = [
    "rud",
    "Used to register anonymised user data, such as IP address, geographical location, visited websites, and what ads the user has clicked, with the purpose of optimising ad display based on the users movement on websites that use the same ad network. Expires in 1 year.",
    ".rfihub.com",
    <>Rocket Fuel&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "http_cookie",
    "1 year 24 days"
];

const dynamicTexts131 = [
    "TapAd_3WAY_SYNCS",
    "__________",
    ".tapad.com",
    <>Tapad&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "1 month 29 days"
];

const dynamicTexts132 = [
    "_uetvid_exp",
    "Contains the expiry-date for the cookie with corresponding name.",
    "www.hudbil.com",
    <>Google Tag Manager&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "html_local_storage",
    "persistent"
];

const dynamicTexts133 = [
    "_uetvid",
    "Used to track visitors on multiple websites, in order to present relevant advertisement based on the visitors preferences.",
    ".capitalnumbers.com",
    <>Google Tag Manager&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 year 24 days"
];

const dynamicTexts134 = [
    "everest_g_v2",
    "Media Optimizer sets this cookie after a user clicks on a clients ad. This cookie maps clicks to other events on the clients website. Persistent cookie that is saved for 2 years",
    ".everesttech.net",
    <>Adobe Media Optimizer&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts135 = [
    "lidc",
    "These cookies are associated with a B2B marketing platform, formerly known as Bizo, which is now owned by LinkedIn, the business networking platform. This sub-domain is connected with LinkedIns marketing services that enable website owners to gain insight into types of users on their site based on LinkedIn profile data, to improve targeting.",
    ".linkedin.com",
    <>LinkedIn&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "1 day"
];

const dynamicTexts136 = [
    "CMPRO",
    "Persistent cookies set by CasaleMedia for anonymous user tracking, and using the data used for targeted advertising",
    ".casalemedia.com",
    <>Casale Media&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "Canada",
    "http_cookie",
    "2 months 29 days"
];

const dynamicTexts137 = [
    "c",
    "Regulates synchronisation of user identification and exchange of user data between various ad services.",
    ".fg8dgt.com",
    <>Bidswitch&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts138 = [
    "B",
    "Used by Yahoo to collect user info so as to send targeted ads based on web-surfing activity and interests",
    ".yahoo.com",
    <>Flickr&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 year"
];

const dynamicTexts139 = [
    "_uetsid_exp",
    "Contains the expiry-date for the cookie with corresponding name.",
    "www.hudbil.com",
    <>Google Tag Manager&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "html_local_storage",
    "persistent"
];

const dynamicTexts140 = [
    "uuid",
    "Collects data on the users visits to the website, such as what pages have been loaded. The registered data is used for targeted ads.",
    ".innovid.com",
    <>Mediamath&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "Spain",
    "server_cookie",
    "2 months 29 days"
];

const dynamicTexts141 = [
    "_uetsid",
    "Collects data on visitor behaviour from multiple websites, in order to present more relevant advertisement - This also allows the website to limit the number of times that they are shown the same advertisement.",
    "www.hudbil.com",
    <>Google Tag Manager&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "html_local_storage",
    "persistent"
];

const dynamicTexts142 = [
    "DW_Time",
    "A session cookie used to record the times DW cookie is set.",
    ".insightexpressai.com",
    <>Kantar Millward Brown Advertising&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "6 months 14 days"
];

const dynamicTexts143 = [
    "uid",
    "Contains a unique ID to identify a user",
    ".crsspxl.com",
    <>Adform&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "1 month 29 days"
];

const dynamicTexts144 = [
    "ad-id",
    "Used by Amazon Advertising to register user actions and target content on the website based on ad clicks on a different website.",
    ".amazon-adsystem.com",
    <>Amazon Advertising&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "7 months 12 days"
];

const dynamicTexts145 = [
    "uuid",
    "Collects data on the users visits to the website, such as what pages have been loaded. The registered data is used for targeted ads.",
    "fzlnk.com",
    <>Mediamath&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts146 = [
    "uid",
    "Contains a unique ID to identify a user",
    ".criteo.com",
    <>Adform&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "1 year 24 days"
];

const dynamicTexts147 = [
    "anProfile",
    "Used to personalise online ads based on past actions of Datonics online customers.",
    ".pro-market.net",
    <>Datonics&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "5 months 27 days"
];

const dynamicTexts148 = [
    "checkForPermission",
    "Ensures that only ads that may be of interest to a user are visible.",
    ".bidr.io",
    <>Beeswax</>,
    "__________",
    "server_cookie",
    "10 minutes"
];

const dynamicTexts149 = [
    "TestIfCookieP",
    "Used to identify new users and generates a unique ID for each user. Expires after 13 months.",
    ".smartadserver.com",
    <>Smart AdServer&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 year 1 month"
];

const dynamicTexts150 = [
    "TDCPM",
    "Set by the CloudFlare service to register a unique ID that identifies a returning user’s device. The ID is used for targeted ads. Expires after 1 year.",
    ".adsrvr.org",
    <>The Trade Desk&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts151 = [
    "cid",
    "Used by Adriver to deliver targeted ads to a user based on their browsing habits",
    ".ctnsnet.com",
    <>Adriver&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts152 = [
    "cb",
    "Set by Clickargy to collect data for target advertising",
    ".clickagy.com",
    <>Clickargy&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts153 = [
    "CMID",
    "Persistent cookies set by CasaleMedia for anonymous user tracking, and using the data used for targeted advertising",
    ".casalemedia.com",
    <>Casale Media&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "Canada",
    "http_cookie",
    "11 months 30 days"
];

const dynamicTexts154 = [
    "_omappvp",
    "Cookie set by OptinMonster to determine if a visitor is returning",
    "www.hudbil.com",
    <>OptinMonster&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "10 years 11 months 11 days"
];

const dynamicTexts155 = [
    "CMPS",
    "Persistent cookies set by CasaleMedia for anonymous user tracking, and using the data used for targeted advertising",
    ".casalemedia.com",
    <>Casale Media&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "Canada",
    "server_cookie",
    "2 months 29 days"
];

const dynamicTexts156 = [
    "tuuid_lu",
    "Contains a unique visitor ID, which allows Bidswitch.com to track the visitor across multiple websites. This allows Bidswitch to optimize advertisement relevance and ensure that the visitor does not see the same ads multiple times.",
    ".fg8dgt.com",
    <>bidswitch.net</>,
    "United States",
    "server_cookie",
    "1 year 11 months 29 days"
];

const dynamicTexts157 = [
    "uuid",
    "Collects data on the users visits to the website, such as what pages have been loaded. The registered data is used for targeted ads.",
    ".mathtag.com",
    <>Mediamath&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "Switzerland",
    "server_cookie",
    "1 year 27 days"
];

const dynamicTexts158 = [
    "uuid",
    "Collects data on the users visits to the website, such as what pages have been loaded. The registered data is used for targeted ads.",
    "ads.avct.cloud",
    <>Mediamath&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "Switzerland",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts159 = [
    "ga-audiences",
    "Used by Google AdWords to re-engage visitors that are likely to convert to customers based on the visitors online behaviour across websites",
    "www.hudbil.com",
    <>AdWords&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts160 = [
    "t_gid",
    "Used to give a user an ID that is used for attribution and reporting.",
    ".taboola.com",
    <>Taboola&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts161 = [
    "ad-privacy",
    "Used by Amazon Advertising to register user actions and target content on the website based on ad clicks on a different website.",
    ".amazon-adsystem.com",
    <>Amazon Advertising&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "__________",
    "server_cookie",
    "5 years 1 month 11 days"
];

const dynamicTexts162 = [
    "a",
    "Registers a unique ID that identifies a returning users device. The ID is used for targeted ads.",
    "www.hudbil.com",
    <>Cox Digital Solutions (Fomerly Adify)&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts163 = [
    "tidal_ttid",
    "Used to registers the ads provided by Videology that the user has seen and/or clicked. Used to generate a demographic profile of the user. Expires after 1 year.",
    ".tidaltv.com",
    <>Videology&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts164 = [
    "TCID",
    "Used to register a unique ID that identifies a returning user’s device. The ID is used for targeted ads. Expires after 1 year.",
    ".commander1.com",
    <>The Trade Desk&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "France",
    "server_cookie",
    "11 months 30 days"
];

const dynamicTexts165 = [
    "OAID",
    "Used by Site owners to manage ads placed on a site and monitor the clicks on them. A persistent cookie that stays for 12 months",
    ".adswizz.com",
    <>OpenX Adserver&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "server_cookie",
    "30 days"
];

const dynamicTexts166 = [
    "_cc_id",
    "Used by Lotame to collect anonymous statistical data related to the users website visits",
    ".crwdcntrl.net",
    <>Lotame&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "8 months 26 days"
];

const dynamicTexts167 = [
    "rum",
    "Used by the advertising platform Casadale Media to determine the visitors interests based on pages visits, content clicked and other actions on the website.",
    "www.hudbil.com",
    <>Casale Media&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "pixel_tracker",
    "session"
];

const dynamicTexts168 = [
    "TapAd_TS",
    "Used to determine what type of devices (smartphones, tablets, computers, TVs etc.) is used by a user. Expires after 2 months.",
    ".tapad.com",
    <>Tapad&nbsp; <span className='text-blue-700 underline'><a href="/privacy-policy">View Service Privacy Policy</a></span></>,
    "United States",
    "http_cookie",
    "1 month 29 days"
];

const CookiePolicy = () => {

    return (
        <>
            <Navbar />
            <main className='pt-[40px]'>
                <div className='font-normal text-4xl pt-20 px-6 lg:px-16 lg:hidden'>
                    Cookie Policy
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
                                <div>This Cookie Policy explains how Capital Numbers Infotech Private Limited (“Company”, “we”, “us”, and “our”) uses cookies and similar technologies to recognize you when you visit our websites at https://www.hudbil.com/, (“Websites”). It explains what these technologies are and why we use them, as well as your rights to control our use of them.</div>
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
                                    <div className='w-full flex flex-col gap-6'>
                                        <TableDiv dynamicContent={dynamicTexts1} />
                                        <TableDiv dynamicContent={dynamicTexts2} />
                                        <TableDiv dynamicContent={dynamicTexts3} />
                                        <TableDiv dynamicContent={dynamicTexts4} />
                                        <TableDiv dynamicContent={dynamicTexts5} />
                                        <TableDiv dynamicContent={dynamicTexts6} />
                                        <TableDiv dynamicContent={dynamicTexts7} />
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Analytics and customization cookies</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>These cookies collect information that is used either in aggregate form to help us understand how our Websites are being used or how effective our marketing campaigns are, or to help us customize our Websites for you.</div>
                                    </div>
                                    <div className='w-full flex flex-col gap-6'>
                                        <TableDiv dynamicContent={dynamicTexts8} />
                                        <TableDiv dynamicContent={dynamicTexts9} />
                                        <TableDiv dynamicContent={dynamicTexts10} />
                                        <TableDiv dynamicContent={dynamicTexts11} />
                                        <TableDiv dynamicContent={dynamicTexts12} />
                                        <TableDiv dynamicContent={dynamicTexts13} />
                                        <TableDiv dynamicContent={dynamicTexts14} />
                                        <TableDiv dynamicContent={dynamicTexts15} />
                                        <TableDiv dynamicContent={dynamicTexts16} />
                                        <TableDiv dynamicContent={dynamicTexts17} />
                                        <TableDiv dynamicContent={dynamicTexts18} />
                                        <TableDiv dynamicContent={dynamicTexts19} />
                                        <TableDiv dynamicContent={dynamicTexts20} />
                                        <TableDiv dynamicContent={dynamicTexts21} />
                                        <TableDiv dynamicContent={dynamicTexts22} />
                                        <TableDiv dynamicContent={dynamicTexts23} />
                                        <TableDiv dynamicContent={dynamicTexts24} />
                                        <TableDiv dynamicContent={dynamicTexts25} />
                                        <TableDiv dynamicContent={dynamicTexts26} />
                                        <TableDiv dynamicContent={dynamicTexts27} />
                                        <TableDiv dynamicContent={dynamicTexts28} />
                                        <TableDiv dynamicContent={dynamicTexts29} />
                                        <TableDiv dynamicContent={dynamicTexts30} />
                                        <TableDiv dynamicContent={dynamicTexts31} />
                                        <TableDiv dynamicContent={dynamicTexts32} />
                                        <TableDiv dynamicContent={dynamicTexts33} />
                                        <TableDiv dynamicContent={dynamicTexts34} />
                                        <TableDiv dynamicContent={dynamicTexts35} />
                                        <TableDiv dynamicContent={dynamicTexts36} />
                                        <TableDiv dynamicContent={dynamicTexts37} />
                                        <TableDiv dynamicContent={dynamicTexts38} />
                                        <TableDiv dynamicContent={dynamicTexts39} />
                                        <TableDiv dynamicContent={dynamicTexts40} />
                                        <TableDiv dynamicContent={dynamicTexts41} />
                                        <TableDiv dynamicContent={dynamicTexts42} />
                                        <TableDiv dynamicContent={dynamicTexts43} />
                                        <TableDiv dynamicContent={dynamicTexts44} />
                                        <TableDiv dynamicContent={dynamicTexts45} />
                                        <TableDiv dynamicContent={dynamicTexts46} />
                                        <TableDiv dynamicContent={dynamicTexts47} />
                                        <TableDiv dynamicContent={dynamicTexts48} />
                                        <TableDiv dynamicContent={dynamicTexts49} />
                                        <TableDiv dynamicContent={dynamicTexts50} />
                                        <TableDiv dynamicContent={dynamicTexts51} />
                                        <TableDiv dynamicContent={dynamicTexts52} />
                                        <TableDiv dynamicContent={dynamicTexts53} />
                                        <TableDiv dynamicContent={dynamicTexts54} />
                                        <TableDiv dynamicContent={dynamicTexts55} />
                                        <TableDiv dynamicContent={dynamicTexts56} />
                                        <TableDiv dynamicContent={dynamicTexts57} />
                                        <TableDiv dynamicContent={dynamicTexts58} />
                                        <TableDiv dynamicContent={dynamicTexts59} />
                                    </div>
                                </div>
                                <div className='flex flex-col items-start gap-4'>
                                    <div className='flex items-start gap-4 font-normal text-2xl leading-9'>
                                        <div>Advertising cookies:</div>
                                    </div>
                                    <div className='leading-7 font-normal text-base flex flex-col gap-4'>
                                        <div>These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.</div>
                                    </div>
                                    <div className='w-full flex flex-col gap-6'>
                                        <TableDiv dynamicContent={dynamicTexts60} />
                                        <TableDiv dynamicContent={dynamicTexts61} />
                                        <TableDiv dynamicContent={dynamicTexts62} />
                                        <TableDiv dynamicContent={dynamicTexts63} />
                                        <TableDiv dynamicContent={dynamicTexts64} />
                                        <TableDiv dynamicContent={dynamicTexts65} />
                                        <TableDiv dynamicContent={dynamicTexts66} />
                                        <TableDiv dynamicContent={dynamicTexts67} />
                                        <TableDiv dynamicContent={dynamicTexts68} />
                                        <TableDiv dynamicContent={dynamicTexts69} />
                                        <TableDiv dynamicContent={dynamicTexts70} />
                                        <TableDiv dynamicContent={dynamicTexts71} />
                                        <TableDiv dynamicContent={dynamicTexts72} />
                                        <TableDiv dynamicContent={dynamicTexts73} />
                                        <TableDiv dynamicContent={dynamicTexts74} />
                                        <TableDiv dynamicContent={dynamicTexts75} />
                                        <TableDiv dynamicContent={dynamicTexts76} />
                                        <TableDiv dynamicContent={dynamicTexts77} />
                                        <TableDiv dynamicContent={dynamicTexts78} />
                                        <TableDiv dynamicContent={dynamicTexts79} />
                                        <TableDiv dynamicContent={dynamicTexts80} />
                                        <TableDiv dynamicContent={dynamicTexts81} />
                                        <TableDiv dynamicContent={dynamicTexts82} />
                                        <TableDiv dynamicContent={dynamicTexts83} />
                                        <TableDiv dynamicContent={dynamicTexts84} />
                                        <TableDiv dynamicContent={dynamicTexts85} />
                                        <TableDiv dynamicContent={dynamicTexts86} />
                                        <TableDiv dynamicContent={dynamicTexts87} />
                                        <TableDiv dynamicContent={dynamicTexts88} />
                                        <TableDiv dynamicContent={dynamicTexts89} />
                                        <TableDiv dynamicContent={dynamicTexts90} />
                                        <TableDiv dynamicContent={dynamicTexts91} />
                                        <TableDiv dynamicContent={dynamicTexts92} />
                                        <TableDiv dynamicContent={dynamicTexts93} />
                                        <TableDiv dynamicContent={dynamicTexts94} />
                                        <TableDiv dynamicContent={dynamicTexts95} />
                                        <TableDiv dynamicContent={dynamicTexts96} />
                                        <TableDiv dynamicContent={dynamicTexts97} />
                                        <TableDiv dynamicContent={dynamicTexts98} />
                                        <TableDiv dynamicContent={dynamicTexts99} />
                                        <TableDiv dynamicContent={dynamicTexts100} />
                                        <TableDiv dynamicContent={dynamicTexts101} />
                                        <TableDiv dynamicContent={dynamicTexts102} />
                                        <TableDiv dynamicContent={dynamicTexts103} />
                                        <TableDiv dynamicContent={dynamicTexts104} />
                                        <TableDiv dynamicContent={dynamicTexts105} />
                                        <TableDiv dynamicContent={dynamicTexts106} />
                                        <TableDiv dynamicContent={dynamicTexts107} />
                                        <TableDiv dynamicContent={dynamicTexts108} />
                                        <TableDiv dynamicContent={dynamicTexts109} />
                                        <TableDiv dynamicContent={dynamicTexts110} />
                                        <TableDiv dynamicContent={dynamicTexts111} />
                                        <TableDiv dynamicContent={dynamicTexts112} />
                                        <TableDiv dynamicContent={dynamicTexts113} />
                                        <TableDiv dynamicContent={dynamicTexts114} />
                                        <TableDiv dynamicContent={dynamicTexts115} />
                                        <TableDiv dynamicContent={dynamicTexts116} />
                                        <TableDiv dynamicContent={dynamicTexts117} />
                                        <TableDiv dynamicContent={dynamicTexts118} />
                                        <TableDiv dynamicContent={dynamicTexts119} />
                                        <TableDiv dynamicContent={dynamicTexts120} />
                                        <TableDiv dynamicContent={dynamicTexts121} />
                                        <TableDiv dynamicContent={dynamicTexts122} />
                                        <TableDiv dynamicContent={dynamicTexts123} />
                                        <TableDiv dynamicContent={dynamicTexts124} />
                                        <TableDiv dynamicContent={dynamicTexts125} />
                                        <TableDiv dynamicContent={dynamicTexts126} />
                                        <TableDiv dynamicContent={dynamicTexts127} />
                                        <TableDiv dynamicContent={dynamicTexts128} />
                                        <TableDiv dynamicContent={dynamicTexts129} />
                                        <TableDiv dynamicContent={dynamicTexts130} />
                                        <TableDiv dynamicContent={dynamicTexts131} />
                                        <TableDiv dynamicContent={dynamicTexts132} />
                                        <TableDiv dynamicContent={dynamicTexts133} />
                                        <TableDiv dynamicContent={dynamicTexts134} />
                                        <TableDiv dynamicContent={dynamicTexts135} />
                                        <TableDiv dynamicContent={dynamicTexts136} />
                                        <TableDiv dynamicContent={dynamicTexts137} />
                                        <TableDiv dynamicContent={dynamicTexts138} />
                                        <TableDiv dynamicContent={dynamicTexts139} />
                                        <TableDiv dynamicContent={dynamicTexts140} />
                                        <TableDiv dynamicContent={dynamicTexts141} />
                                        <TableDiv dynamicContent={dynamicTexts142} />
                                        <TableDiv dynamicContent={dynamicTexts143} />
                                        <TableDiv dynamicContent={dynamicTexts144} />
                                        <TableDiv dynamicContent={dynamicTexts145} />
                                        <TableDiv dynamicContent={dynamicTexts146} />
                                        <TableDiv dynamicContent={dynamicTexts147} />
                                        <TableDiv dynamicContent={dynamicTexts148} />
                                        <TableDiv dynamicContent={dynamicTexts149} />
                                        <TableDiv dynamicContent={dynamicTexts150} />
                                        <TableDiv dynamicContent={dynamicTexts151} />
                                        <TableDiv dynamicContent={dynamicTexts152} />
                                        <TableDiv dynamicContent={dynamicTexts153} />
                                        <TableDiv dynamicContent={dynamicTexts154} />
                                        <TableDiv dynamicContent={dynamicTexts155} />
                                        <TableDiv dynamicContent={dynamicTexts156} />
                                        <TableDiv dynamicContent={dynamicTexts157} />
                                        <TableDiv dynamicContent={dynamicTexts158} />
                                        <TableDiv dynamicContent={dynamicTexts159} />
                                        <TableDiv dynamicContent={dynamicTexts160} />
                                        <TableDiv dynamicContent={dynamicTexts161} />
                                        <TableDiv dynamicContent={dynamicTexts162} />
                                        <TableDiv dynamicContent={dynamicTexts163} />
                                        <TableDiv dynamicContent={dynamicTexts164} />
                                        <TableDiv dynamicContent={dynamicTexts165} />
                                        <TableDiv dynamicContent={dynamicTexts166} />
                                        <TableDiv dynamicContent={dynamicTexts167} />
                                        <TableDiv dynamicContent={dynamicTexts168} />
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