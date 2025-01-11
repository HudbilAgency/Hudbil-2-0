import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import axios from "axios";
import { gsap } from 'gsap';
import ReCAPTCHA from "react-google-recaptcha";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const WebDesign8 = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        if (!isVisible) {
            setIsVisible(true);
        }
    };

    const clients = [
        "Jef Techno", "Infotik", "Bluemail", "Finesoft", "Valleycovers",
        "Capixai", "Shimmer", "Nettango", "Monstrack", "Sky",
        "Kathmandu", "LMG", "DSG", "Spring", "Collabera", "Ezetap"
    ];

    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
        }
        setCurrentIndex(index);
    };
    const fadeInRef = useRef(null);

    const DotContainer = ({ index, currentIndex, handleDotClick }) => {
        const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
        const [debouncedPos, setDebouncedPos] = useState({ x: 0, y: 0 });
        const [isHovering, setIsHovering] = useState(false);
        const dotBorderRef = useRef(null);

        const handleMouseMove = (e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setCursorPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedPos(cursorPos);
            }, 20);

            return () => {
                clearTimeout(handler);
            };
        }, [cursorPos]);

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        useEffect(() => {
            if (currentIndex === index && dotBorderRef.current) {
                gsap.to(dotBorderRef.current, {
                    strokeDashoffset: 0,
                    duration: 0.8,
                    ease: "linear",
                    repeat: 0,
                    repeatDelay: 1,
                });
            } else {
                gsap.to(dotBorderRef.current, {
                    strokeDashoffset: 47.1,
                    duration: 0,
                });
            }
        }, [currentIndex, index]);

        return (
            <div
                className="dot-container w-9 h-9 cursor-effect cursor-pointer flex items-center justify-center relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleDotClick(index)}
            >
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={
                        isHovering
                            ? {
                                position: "absolute",
                                left: debouncedPos.x,
                                top: debouncedPos.y,
                                transform: "translate(-50%, -50%)",
                                transition: "left 0.3s ease-out, top 0.3s ease-out",
                            }
                            : {}
                    }
                >
                    <circle
                        ref={dotBorderRef}
                        strokeDasharray="47.1"
                        strokeDashoffset="47.1"
                        stroke="white"
                        strokeWidth="1"
                        fill="none"
                        className={`dot-border ${currentIndex === index ? "block" : "hidden"
                            }`}
                        cx="8"
                        cy="8"
                        r="7.5"
                    />
                    <circle className="dot" cx="8" cy="8" r="4" fill="white" />
                </svg>
            </div>
        );
    };


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        ref: sliderRef,
        beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    };

    const [dropdownStates, setDropdownStates] = useState([false, false, false, false, false, false]);

    const toggleDropdown = (index) => {
        const updatedStates = dropdownStates.map((state, i) => i === index ? !state : state);
        setDropdownStates(updatedStates);
    };

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


    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [jobtitle, setJobTitle] = useState("");
    const [country, setCountry] = useState("");
    const [subscribe, setSubscribe] = useState("not subscribed");
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showVerification, setShowVerification] = useState(false);
    const recaptchaRef = useRef(null);
    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const toggleConfirmation = () => {
        setShowConfirmation(!showConfirmation);
    };

    const handleSubmitForm = async () => {

        if (!recaptchaToken) {
            setShowVerification(true);
            return;
        }

        const ReachUs = {
            email,
            firstname,
            lastname,
            jobtitle,
            company,
            country,
            subscribe,
            recaptchaToken,
        };

        setShowVerification(false);
        toggleConfirmation();
        setTimeout(() => {
            const element = document.querySelector('.thank-you');
            const elementRect = element.getBoundingClientRect();
            const elementTop = elementRect.top + window.scrollY;
            const centerPosition = elementTop - (window.innerHeight / 2) + (elementRect.height / 2);

            window.scrollTo({
                top: centerPosition,
                behavior: 'smooth'
            });
        }, 0);

        setFirstName("");
        setLastName("");
        setEmail("");
        setJobTitle("");
        setCompany("");
        setCountry("");
        setSubscribe("");
        setRecaptchaToken(null);

        try {
            const response = await axios.post(
                "https://hudbil-server.onrender.com/contact-form-hudbil",
                JSON.stringify(ReachUs),
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Server response:", response.data);

        } catch (error) {
            console.error("Error sending data to server:", error);
        }
    };

    const onRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const countries = [
        { name: 'Afghanistan', code: 'AF' },
        { name: 'Åland Islands', code: 'AX' },
        { name: 'Albania', code: 'AL' },
        { name: 'Algeria', code: 'DZ' },
        { name: 'American Samoa', code: 'AS' },
        { name: 'AndorrA', code: 'AD' },
        { name: 'Angola', code: 'AO' },
        { name: 'Anguilla', code: 'AI' },
        { name: 'Antarctica', code: 'AQ' },
        { name: 'Antigua and Barbuda', code: 'AG' },
        { name: 'Argentina', code: 'AR' },
        { name: 'Armenia', code: 'AM' },
        { name: 'Aruba', code: 'AW' },
        { name: 'Australia', code: 'AU' },
        { name: 'Austria', code: 'AT' },
        { name: 'Azerbaijan', code: 'AZ' },
        { name: 'Bahamas', code: 'BS' },
        { name: 'Bahrain', code: 'BH' },
        { name: 'Bangladesh', code: 'BD' },
        { name: 'Barbados', code: 'BB' },
        { name: 'Belarus', code: 'BY' },
        { name: 'Belgium', code: 'BE' },
        { name: 'Belize', code: 'BZ' },
        { name: 'Benin', code: 'BJ' },
        { name: 'Bermuda', code: 'BM' },
        { name: 'Bhutan', code: 'BT' },
        { name: 'Bolivia', code: 'BO' },
        { name: 'Bosnia and Herzegovina', code: 'BA' },
        { name: 'Botswana', code: 'BW' },
        { name: 'Bouvet Island', code: 'BV' },
        { name: 'Brazil', code: 'BR' },
        { name: 'British Indian Ocean Territory', code: 'IO' },
        { name: 'Brunei Darussalam', code: 'BN' },
        { name: 'Bulgaria', code: 'BG' },
        { name: 'Burkina Faso', code: 'BF' },
        { name: 'Burundi', code: 'BI' },
        { name: 'Cambodia', code: 'KH' },
        { name: 'Cameroon', code: 'CM' },
        { name: 'Canada', code: 'CA' },
        { name: 'Cape Verde', code: 'CV' },
        { name: 'Cayman Islands', code: 'KY' },
        { name: 'Central African Republic', code: 'CF' },
        { name: 'Chad', code: 'TD' },
        { name: 'Chile', code: 'CL' },
        { name: 'China', code: 'CN' },
        { name: 'Christmas Island', code: 'CX' },
        { name: 'Cocos (Keeling) Islands', code: 'CC' },
        { name: 'Colombia', code: 'CO' },
        { name: 'Comoros', code: 'KM' },
        { name: 'Congo', code: 'CG' },
        { name: 'Congo, The Democratic Republic of the', code: 'CD' },
        { name: 'Cook Islands', code: 'CK' },
        { name: 'Costa Rica', code: 'CR' },
        { name: 'Cote D\'Ivoire', code: 'CI' },
        { name: 'Croatia', code: 'HR' },
        { name: 'Cuba', code: 'CU' },
        { name: 'Cyprus', code: 'CY' },
        { name: 'Czech Republic', code: 'CZ' },
        { name: 'Denmark', code: 'DK' },
        { name: 'Djibouti', code: 'DJ' },
        { name: 'Dominica', code: 'DM' },
        { name: 'Dominican Republic', code: 'DO' },
        { name: 'Ecuador', code: 'EC' },
        { name: 'Egypt', code: 'EG' },
        { name: 'El Salvador', code: 'SV' },
        { name: 'Equatorial Guinea', code: 'GQ' },
        { name: 'Eritrea', code: 'ER' },
        { name: 'Estonia', code: 'EE' },
        { name: 'Ethiopia', code: 'ET' },
        { name: 'Falkland Islands (Malvinas)', code: 'FK' },
        { name: 'Faroe Islands', code: 'FO' },
        { name: 'Fiji', code: 'FJ' },
        { name: 'Finland', code: 'FI' },
        { name: 'France', code: 'FR' },
        { name: 'French Guiana', code: 'GF' },
        { name: 'French Polynesia', code: 'PF' },
        { name: 'French Southern Territories', code: 'TF' },
        { name: 'Gabon', code: 'GA' },
        { name: 'Gambia', code: 'GM' },
        { name: 'Georgia', code: 'GE' },
        { name: 'Germany', code: 'DE' },
        { name: 'Ghana', code: 'GH' },
        { name: 'Gibraltar', code: 'GI' },
        { name: 'Greece', code: 'GR' },
        { name: 'Greenland', code: 'GL' },
        { name: 'Grenada', code: 'GD' },
        { name: 'Guadeloupe', code: 'GP' },
        { name: 'Guam', code: 'GU' },
        { name: 'Guatemala', code: 'GT' },
        { name: 'Guernsey', code: 'GG' },
        { name: 'Guinea', code: 'GN' },
        { name: 'Guinea-Bissau', code: 'GW' },
        { name: 'Guyana', code: 'GY' },
        { name: 'Haiti', code: 'HT' },
        { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
        { name: 'Holy See (Vatican City State)', code: 'VA' },
        { name: 'Honduras', code: 'HN' },
        { name: 'Hong Kong', code: 'HK' },
        { name: 'Hungary', code: 'HU' },
        { name: 'Iceland', code: 'IS' },
        { name: 'India', code: 'IN' },
        { name: 'Indonesia', code: 'ID' },
        { name: 'Iran, Islamic Republic Of', code: 'IR' },
        { name: 'Iraq', code: 'IQ' },
        { name: 'Ireland', code: 'IE' },
        { name: 'Isle of Man', code: 'IM' },
        { name: 'Israel', code: 'IL' },
        { name: 'Italy', code: 'IT' },
        { name: 'Jamaica', code: 'JM' },
        { name: 'Japan', code: 'JP' },
        { name: 'Jersey', code: 'JE' },
        { name: 'Jordan', code: 'JO' },
        { name: 'Kazakhstan', code: 'KZ' },
        { name: 'Kenya', code: 'KE' },
        { name: 'Kiribati', code: 'KI' },
        { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
        { name: 'Korea, Republic of', code: 'KR' },
        { name: 'Kuwait', code: 'KW' },
        { name: 'Kyrgyzstan', code: 'KG' },
        { name: 'Lao People\'S Democratic Republic', code: 'LA' },
        { name: 'Latvia', code: 'LV' },
        { name: 'Lebanon', code: 'LB' },
        { name: 'Lesotho', code: 'LS' },
        { name: 'Liberia', code: 'LR' },
        { name: 'Libyan Arab Jamahiriya', code: 'LY' },
        { name: 'Liechtenstein', code: 'LI' },
        { name: 'Lithuania', code: 'LT' },
        { name: 'Luxembourg', code: 'LU' },
        { name: 'Macao', code: 'MO' },
        { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
        { name: 'Madagascar', code: 'MG' },
        { name: 'Malawi', code: 'MW' },
        { name: 'Malaysia', code: 'MY' },
        { name: 'Maldives', code: 'MV' },
        { name: 'Mali', code: 'ML' },
        { name: 'Malta', code: 'MT' },
        { name: 'Marshall Islands', code: 'MH' },
        { name: 'Martinique', code: 'MQ' },
        { name: 'Mauritania', code: 'MR' },
        { name: 'Mauritius', code: 'MU' },
        { name: 'Mayotte', code: 'YT' },
        { name: 'Mexico', code: 'MX' },
        { name: 'Micronesia, Federated States of', code: 'FM' },
        { name: 'Moldova, Republic of', code: 'MD' },
        { name: 'Monaco', code: 'MC' },
        { name: 'Mongolia', code: 'MN' },
        { name: 'Montserrat', code: 'MS' },
        { name: 'Morocco', code: 'MA' },
        { name: 'Mozambique', code: 'MZ' },
        { name: 'Myanmar', code: 'MM' },
        { name: 'Namibia', code: 'NA' },
        { name: 'Nauru', code: 'NR' },
        { name: 'Nepal', code: 'NP' },
        { name: 'Netherlands', code: 'NL' },
        { name: 'Netherlands Antilles', code: 'AN' },
        { name: 'New Caledonia', code: 'NC' },
        { name: 'New Zealand', code: 'NZ' },
        { name: 'Nicaragua', code: 'NI' },
        { name: 'Niger', code: 'NE' },
        { name: 'Nigeria', code: 'NG' },
        { name: 'Niue', code: 'NU' },
        { name: 'Norfolk Island', code: 'NF' },
        { name: 'Northern Mariana Islands', code: 'MP' },
        { name: 'Norway', code: 'NO' },
        { name: 'Oman', code: 'OM' },
        { name: 'Pakistan', code: 'PK' },
        { name: 'Palau', code: 'PW' },
        { name: 'Palestinian Territory, Occupied', code: 'PS' },
        { name: 'Panama', code: 'PA' },
        { name: 'Papua New Guinea', code: 'PG' },
        { name: 'Paraguay', code: 'PY' },
        { name: 'Peru', code: 'PE' },
        { name: 'Philippines', code: 'PH' },
        { name: 'Pitcairn', code: 'PN' },
        { name: 'Poland', code: 'PL' },
        { name: 'Portugal', code: 'PT' },
        { name: 'Puerto Rico', code: 'PR' },
        { name: 'Qatar', code: 'QA' },
        { name: 'Reunion', code: 'RE' },
        { name: 'Romania', code: 'RO' },
        { name: 'Russian Federation', code: 'RU' },
        { name: 'RWANDA', code: 'RW' },
        { name: 'Saint Helena', code: 'SH' },
        { name: 'Saint Kitts and Nevis', code: 'KN' },
        { name: 'Saint Lucia', code: 'LC' },
        { name: 'Saint Pierre and Miquelon', code: 'PM' },
        { name: 'Saint Vincent and the Grenadines', code: 'VC' },
        { name: 'Samoa', code: 'WS' },
        { name: 'San Marino', code: 'SM' },
        { name: 'Sao Tome and Principe', code: 'ST' },
        { name: 'Saudi Arabia', code: 'SA' },
        { name: 'Senegal', code: 'SN' },
        { name: 'Serbia and Montenegro', code: 'CS' },
        { name: 'Seychelles', code: 'SC' },
        { name: 'Sierra Leone', code: 'SL' },
        { name: 'Singapore', code: 'SG' },
        { name: 'Slovakia', code: 'SK' },
        { name: 'Slovenia', code: 'SI' },
        { name: 'Solomon Islands', code: 'SB' },
        { name: 'Somalia', code: 'SO' },
        { name: 'South Africa', code: 'ZA' },
        { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
        { name: 'Spain', code: 'ES' },
        { name: 'Sri Lanka', code: 'LK' },
        { name: 'Sudan', code: 'SD' },
        { name: 'Suriname', code: 'SR' },
        { name: 'Svalbard and Jan Mayen', code: 'SJ' },
        { name: 'Swaziland', code: 'SZ' },
        { name: 'Sweden', code: 'SE' },
        { name: 'Switzerland', code: 'CH' },
        { name: 'Syrian Arab Republic', code: 'SY' },
        { name: 'Taiwan, Province of China', code: 'TW' },
        { name: 'Tajikistan', code: 'TJ' },
        { name: 'Tanzania, United Republic of', code: 'TZ' },
        { name: 'Thailand', code: 'TH' },
        { name: 'Timor-Leste', code: 'TL' },
        { name: 'Togo', code: 'TG' },
        { name: 'Tokelau', code: 'TK' },
        { name: 'Tonga', code: 'TO' },
        { name: 'Trinidad and Tobago', code: 'TT' },
        { name: 'Tunisia', code: 'TN' },
        { name: 'Turkey', code: 'TR' },
        { name: 'Turkmenistan', code: 'TM' },
        { name: 'Turks and Caicos Islands', code: 'TC' },
        { name: 'Tuvalu', code: 'TV' },
        { name: 'Uganda', code: 'UG' },
        { name: 'Ukraine', code: 'UA' },
        { name: 'United Arab Emirates', code: 'AE' },
        { name: 'United Kingdom', code: 'GB' },
        { name: 'United States', code: 'US' },
        { name: 'United States Minor Outlying Islands', code: 'UM' },
        { name: 'Uruguay', code: 'UY' },
        { name: 'Uzbekistan', code: 'UZ' },
        { name: 'Vanuatu', code: 'VU' },
        { name: 'Venezuela', code: 'VE' },
        { name: 'Viet Nam', code: 'VN' },
        { name: 'Virgin Islands (British)', code: 'VG' },
        { name: 'Virgin Islands (U.S.)', code: 'VI' },
        { name: 'Wallis and Futuna', code: 'WF' },
        { name: 'Western Sahara', code: 'EH' },
        { name: 'Yemen', code: 'YE' },
        { name: 'Zambia', code: 'ZM' },
        { name: 'Zimbabwe', code: 'ZW' }
    ];

    const [isScreenTall, setIsScreenTall] = useState(window.innerHeight > 800 && window.innerWidth > 1023);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenTall(window.innerHeight > 800 && window.innerWidth > 1023);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Helmet>
                <title>Designing Agency in Surat | Creative Design Solutions for Your Brand</title>
                <meta name="description" content="Looking for a designing agency in Surat? We provide custom design services including logo design, web design, UI/UX, and branding to elevate your brand identity and engage your audience effectively."></meta>
                <meta property="og:url" content="www.hudbil.com/website-designing-agency-in-surat"></meta>
                <meta name="keywords" content="designing agency Surat, graphic design agency Surat, logo design Surat, web design agency Surat, UI/UX design Surat, branding agency Surat, creative design services Surat"></meta>
                <meta name="og:description" content="Our designing agency in Surat specializes in innovative and customized design services that help businesses enhance their brand identity. From logo and web design to UI/UX and branding, we deliver creative solutions that engage your audience."></meta>
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
            <main className='bg-black'>
                <section>
                    <div className={`flex flex-col lg:flex-row justify-between ${isScreenTall ? 'h-screen' : 'h-full'}`}>
                        <div className='w-full lg:w-1/2 min-h-full bg-black lg:border-b-[1px] border-opacity-50 border-white flex flex-col pt-36 md:pt-40 pb-20 lg:pt-48 lg:pb-40 items-start justify-center text-white px-6 lg:px-16'>
                            <div className='text-4xl md:text-[3rem] leading-tight'>Website Designing Agency in Surat.</div>
                            <div className='mt-10 leading-7'>Our brains opt for emotionally driven habitual or intuitive
                                decisions over rational deliberation. Strong brands hold sway
                                over this emotional autopilot. They have persuasive power.</div>
                            <div className='mt-12'>
                                <a href="/about-us">
                                    <button className='rounded-full py-4 px-16 sm:px-20 text-white bg-[#7811A5] submit-btn hover:bg-white hover:text-black mt-4'>
                                        Know More
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 h-full bg-white pt-20 pb-20 lg:border-b border-white lg:pt-56 lg:pb-48 flex flex-col items-center justify-center px-6 lg:px-16'>
                            {showConfirmation ? (
                                <div className='w-full h-full flex flex-col items-start justify-center gap-12 thank-you'>
                                    <div className='text-3xl md:text-[2.5rem] leading-tight w-full 2xl:w-4/5'>Thank You…!! </div>
                                    <div className='text-3xl md:text-[2.5rem] leading-tight w-full 2xl:w-4/5'>Our team has received your information, will get in touch with you within the next 24 hours to discuss how we can help bring your vision to life.
                                    </div>
                                </div>
                            ) : (
                                <form id="userDetailsForm"
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSubmitForm();
                                    }} className='w-full'>
                                    <div className='w-full'>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            name="email"
                                            placeholder="Email*"
                                            className="outline-none text-black placeholder:text-[#7D7D7D] w-full py-4"
                                            required
                                        />
                                        <div className="bg-[#D8D8D8] h-[1px] w-full "></div>
                                        <input
                                            value={firstname}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            type="text"
                                            name="firstName"
                                            placeholder="First name*"
                                            className="outline-none text-black placeholder:text-[#7D7D7D] w-full py-4"
                                            required
                                        />
                                        <div className="bg-[#D8D8D8] h-[1px] w-full "></div>
                                        <input
                                            value={lastname}
                                            onChange={(e) => setLastName(e.target.value)}
                                            type="text"
                                            name="lastName"
                                            placeholder="Last name*"
                                            className="outline-none text-black placeholder:text-[#7D7D7D] w-full py-4"
                                            required
                                        />
                                        <div className="bg-[#D8D8D8] h-[1px] w-full "></div>
                                        <input
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            type="text"
                                            name="companyName"
                                            placeholder="Company name*"
                                            className="outline-none text-black placeholder:text-[#7D7D7D] w-full py-4"
                                            required
                                        />
                                        <div className="bg-[#D8D8D8] h-[1px] w-full "></div>
                                        <input
                                            value={jobtitle}
                                            onChange={(e) => setJobTitle(e.target.value)}
                                            type="text"
                                            name="jobTitle"
                                            placeholder="Job title*"
                                            className="outline-none text-black placeholder:text-[#7D7D7D] w-full py-4"
                                            required
                                        />
                                        <div className="bg-[#D8D8D8] h-[1px] w-full "></div>
                                    </div>
                                    <div className=' flex flex-col gap-2'>
                                        <select
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            id="country"
                                            name="country"
                                            className="py-5 border-b border-[#D8D8D8] focus:outline-none text-[#7D7D7D]"
                                            required
                                        >
                                            <option value="" disabled selected className="text-[#7D7D7D]">Select Country*</option>
                                            {countries.map((country) => (
                                                <option key={country.code} value={country.name} className="text-black">
                                                    {country.name.split(',')[0]}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex gap-5 items-center self-start mt-10 leading-none text-white">
                                        <input
                                            checked={subscribe === "subscribed"}
                                            onChange={(e) => setSubscribe(e.target.checked ? "subscribed" : "not subscribed")}
                                            onBlur={() => {
                                                if (!subscribe) setSubscribe("not subscribed");
                                            }}
                                            type="radio"
                                            id="subscribe"
                                            className="shrink-0 self-stretch  my-auto w-4 h-4 bg-white border border-white border-solid"
                                        />
                                        <label htmlFor="subscribe" className="text-[#7D7D7D] leading-6">
                                            Subscribe to Hud to receive our latest thinking every month.
                                        </label>
                                    </div>
                                    <div className='mt-12 lg:h-[78px] w-fit'>
                                        <ReCAPTCHA
                                            sitekey="6LfWPG8qAAAAAFBRLkUr505LpNEDOL_6p5dd8SLF"
                                            onChange={onRecaptchaChange}
                                            ref={recaptchaRef}
                                        />
                                        {showVerification && (
                                            <div className='mt-2 text-[#7811A5]'>
                                                Please verify yourself first!
                                            </div>
                                        )}
                                    </div>
                                    <div className='mt-12'>
                                        <button form="userDetailsForm" type="submit" className='border rounded-full py-4 px-16 sm:px-28 text-white submit-btn mt-4'>
                                            Send to reach us
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                <section className=' bg-black'>
                    <div className="bg-black text-white">
                        <div className="w-full lg:w-4/5 2xl:w-3/4 lg:ml-auto flex items-start">
                            <div className="bg-white opacity-50 w-[1px] min-h-full self-stretch hidden lg:block"></div>
                            <div>
                                <div className='flex flex-col md:flex-row gap-10 pt-20 items-start justify-between font-normal px-6 lg:px-16'>
                                    <div className='text-4xl leading-tight w-full md:w-2/5 2xl:w-1/3'>Best Website Designing Agency In Surat.</div>
                                    <div className='w-full md:w-2/5 mt-2 flex flex-col gap-6'>
                                        <div className="leading-normal">
                                            As the top-rated website designing agency in Surat, we bring together a team of skilled designers, developers, and strategists with a mission to create stunning, functional, and user-friendly websites. From small businesses to enterprises, we build sites that align with our clients' goals and vision.
                                        </div>
                                        <div className='text-xl'>"Our Website Designing Services"</div>
                                        <div className="w-full flex flex-col gap-6">
                                            <div className='w-full flex flex-col gap-4'>
                                                <div className='text-xl'>1. Custom Website Design</div>
                                                <div className='flex gap-3 ml-7 text-[#BFBFBF]'>
                                                    <span>•</span>
                                                    <div>Tailored designs that reflect your brand’s unique identity.</div>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col gap-4'>
                                                <div className='text-xl'>2. E - Commerce Development</div>
                                                <div className='flex gap-3 ml-7 text-[#BFBFBF]'>
                                                    <span>•</span>
                                                    <div>Dynamic and secure online stores to boost your sales.</div>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col gap-4'>
                                                <div className='text-xl'>3. Responsive Web Design</div>
                                                <div className='flex gap-3 ml-7 text-[#BFBFBF]'>
                                                    <span>•</span>
                                                    <div>Ensuring flawless experiences on mobile , tablet, and desktop</div>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col gap-4'>
                                                <div className='text-xl'>4. UI/UX Design</div>
                                                <div className='flex gap-3 ml-7 text-[#BFBFBF]'>
                                                    <span>•</span>
                                                    <div>Focused on providing seamless, user-friendly experiences.</div>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col gap-4'>
                                                <div className='text-xl'>5. Web Redesign Services</div>
                                                <div className='flex gap-3 ml-7 text-[#BFBFBF]'>
                                                    <span>•</span>
                                                    <div>Upgrade outdated websites for a modern and fresh look.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='2xl:w-[95%] w-[94%] h-[1px] bg-white mt-20 mb-20 ml-auto'></div>

                                <div className='flex flex-col md:flex-row gap-10 items-start justify-between font-normal px-6 lg:px-16'>
                                    <div className='text-4xl leading-tight w-full md:w-2/5 2xl:w-1/3'>Here are a few reasons why choose Hudbil !</div>
                                    <div className='w-full md:w-2/5 mt-2'>
                                        <div className="w-full flex flex-col gap-6">
                                            <div className='w-full flex flex-col gap-4'>
                                                <div className='text-xl'>Expertise & Experience</div>
                                                <div className='flex gap-3 ml-7 text-[#BFBFBF]'>
                                                    <span>•</span>
                                                    <div>Over a decade of success in crafting websites for various industries.</div>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col gap-4'>
                                                <div className='text-xl'>Customer-Centric Approach</div>
                                                <div className='flex gap-3 ml-7 text-[#BFBFBF]'>
                                                    <span>•</span>
                                                    <div>Each project begins by understanding your goals to ensure 100% satisfaction.</div>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col gap-4'>
                                                <div className='text-xl'>Proven Track Record</div>
                                                <div className='flex gap-3 ml-7 text-[#BFBFBF]'>
                                                    <span>•</span>
                                                    <div>Hundreds of successful projects and delighted clients.</div>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col gap-4'>
                                                <div className='text-xl'>Full-Service Solutions</div>
                                                <div className='flex gap-3 ml-7 text-[#BFBFBF]'>
                                                    <span>•</span>
                                                    <div>From design to development, SEO, and beyond, we handle it all.</div>
                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col gap-4'>
                                                <div className='text-xl'>Affordable Pricing</div>
                                                <div className='flex gap-3 ml-7 text-[#BFBFBF]'>
                                                    <span>•</span>
                                                    <div>Premium quality that fits your budget.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='2xl:w-[95%] w-[94%] h-[1px] bg-white mt-20 ml-auto'></div>

                                <div className='flex flex-col md:flex-row gap-10 pt-20 mb-20 items-start justify-between font-normal px-6 lg:px-16'>
                                    <div className='text-4xl leading-tight w-full md:w-2/5 2xl:w-1/3'>Our exclusive other services</div>
                                    <div className=' w-full md:w-2/5 mt-2'>
                                        <div className="leading-normal">
                                            Our toolkit identifies the brand advantage our clients are building vs competitors. We call this Brand Edge.
                                        </div>
                                        <div className='w-full text-white mt-12'>
                                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                                            <div className="py-10 toggle-point flex flex-col">
                                                <div className="flex items-center gap-6 justify-between">
                                                    <div className="flex items-center justify-between gap-6">
                                                        <div className="font-normal text-2xl md:text-3xl  leading-9">Mobile Application UI/UX</div>
                                                    </div>
                                                    <div onClick={() => toggleDropdown(0)} className="cursor-pointer">
                                                        <svg
                                                            width="18"
                                                            height="18"
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
                                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[0] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="pt-10">Based in Surat, we specialize in creating visually appealing and user-centered mobile application interfaces that boost engagement and user retention. Our team of designers and UX strategists combines creativity with analytics to deliver exceptional app experiences for iOS and Android.</div>
                                                </div>
                                            </div>
                                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                                            <div className="py-10 toggle-point flex flex-col">
                                                <div className="flex items-center gap-6 justify-between">
                                                    <div className="flex items-center justify-between gap-6">
                                                        <div className="font-normal text-2xl md:text-3xl leading-9">Logo Design</div>
                                                    </div>
                                                    <div onClick={() => toggleDropdown(1)} className="cursor-pointer">
                                                        <svg
                                                            width="18"
                                                            height="18"
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
                                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[1] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="pt-10">Based in Surat, we specialise in crafting memorable logos that embody a brand's identity and values. With a team of experienced designers, we work with businesses of all sizes to create logos that leave a lasting impression, whether for startups, established brands, or personal projects.</div>
                                                </div>
                                            </div>
                                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                                            <div className="py-10 toggle-point flex flex-col">
                                                <div className="flex items-center gap-6 justify-between">
                                                    <div className="flex items-center justify-between gap-6">
                                                        <div className="font-normal text-2xl md:text-3xl leading-9">Brochure Design</div>
                                                    </div>
                                                    <div onClick={() => toggleDropdown(2)} className="cursor-pointer">
                                                        <svg
                                                            width="18"
                                                            height="18"
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
                                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[2] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="pt-10">We specialise in creating impactful brochure designs that help businesses communicate their message effectively. Located in Surat, our team combines creativity with strategic design to produce brochures that are not only visually appealing but also align with your brand's goals. Whether for corporate events, marketing materials, or product catalogs, our brochures leave a lasting impression.</div>
                                                </div>
                                            </div>
                                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                                            <div className="py-10 toggle-point flex flex-col">
                                                <div className="flex items-center gap-6 justify-between">
                                                    <div className="flex items-center justify-between gap-6">
                                                        <div className="font-normal text-2xl md:text-3xl leading-9">Web Application Design</div>
                                                    </div>
                                                    <div onClick={() => toggleDropdown(3)} className="cursor-pointer">
                                                        <svg
                                                            width="18"
                                                            height="18"
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
                                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[3] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="pt-10">Located in Surat, we specialize in designing high-quality web applications that combine functionality with an exceptional user experience. Our team of UI/UX experts, designers, and strategists work collaboratively to develop web apps that are not only visually appealing but also align with your business goals and deliver an engaging user experience.</div>
                                                </div>
                                            </div>
                                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                                            <div className="py-10 toggle-point flex flex-col">
                                                <div className="flex items-center gap-6 justify-between">
                                                    <div className="flex items-center justify-between gap-6">
                                                        <div className="font-normal text-2xl md:text-3xl leading-9">Website Development</div>
                                                    </div>
                                                    <div onClick={() => toggleDropdown(4)} className="cursor-pointer">
                                                        <svg
                                                            width="18"
                                                            height="18"
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
                                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[4] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="pt-10">Based in Surat, we specialise in crafting professional, high-performance websites that engage users and achieve your business objectives. Our team of developers and designers are dedicated to delivering websites that are both visually stunning and highly functional, ensuring a seamless experience for users on any device.</div>
                                                </div>
                                            </div>
                                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                                            <div className="py-10 toggle-point flex flex-col">
                                                <div className="flex items-center gap-6 justify-between">
                                                    <div className="flex items-center justify-between gap-6">
                                                        <div className="font-normal text-2xl md:text-3xl leading-9">Mobile Application Development</div>
                                                    </div>
                                                    <div onClick={() => toggleDropdown(5)} className="cursor-pointer">
                                                        <svg
                                                            width="18"
                                                            height="18"
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
                                                <div className={`flex flex-col gap-6 overflow-hidden transition-all duration-500 ease-in-out ${dropdownStates[5] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="pt-10">Based in Surat, we specialize in end-to-end mobile application development that transforms your ideas into feature-rich, high-performance apps. Our team of developers, designers, and strategists create apps tailored to your business needs, whether for startups or established brands, across both iOS and Android platforms.</div>
                                                </div>
                                            </div>
                                            <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className='overflow-hidden w-full lg:w-4/5 2xl:w-3/4 lg:ml-auto flex flex-col items-center'
                        style={{
                            background: 'linear-gradient(180deg, #7811A5, #2E16BB)',
                        }}>
                        <div className="lg:text-4xl text-3xl mt-20 leading-none text-center text-white max-md:text-3xl uppercase">Meet our clients</div>
                        <div className="overflow-hidden w-full">
                            <Slider {...settings}>

                                <div key={0} className="flex flex-col our-brands-section">
                                    <div className="flex overflow-hidden relative flex-col mt-14 max-w-full text-xs font-extralight tracking-wider text-center  text-teal-950 w-[304px]">
                                        <div className="flex overflow-hidden relative items-center justify-center flex-col ">
                                            <img loading="lazy" src="/client-1.png" alt="Brand logo" className="w-[8rem] lg:w-[10rem] rounded-full opacity-0" />
                                        </div>
                                    </div>
                                    <div
                                        ref={fadeInRef}
                                        className="self-center px-6 w-full md:w-[70%] text-[25px]  mt-10 tracking-normal text-center text-white leading-[50px] max-md:max-w-full max-md:text-3xl max-md:leading-snug"
                                    >
                                        <h1 className='text-3xl'>
                                            Priya M
                                        </h1>
                                        <div className='text-[1.8rem] leading-tight xl:leading-7 mt-4'>“Transformative Design and Seamless Experience”</div>
                                    </div>
                                    <div
                                        ref={fadeInRef}
                                        className='text-base leading-7 self-center px-6 w-full md:w-[65%] 2xl:w-[60%] mt-24 text-center text-white max-md:max-w-full'>
                                        "We approached Hudbil Private Limited to revamp our outdated website, and they delivered beyond expectations. The design is modern, intuitive, and perfectly represents our brand. Our customers love the new interface, and we’ve seen a noticeable boost in engagement. Highly recommend their services!"
                                    </div>
                                    <Link to="/contact-us" className="mt-20">
                                        <button className="button self-end text-xl py-[14px] flex flex-row justify-between hover:text-black px-12 border mx-auto leading-none  text-white gap-8 rounded-[1000px]  hover:bg-white transition-all duration-300">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>

                                <div key={1} className="flex flex-col our-brands-section">
                                    <div className="flex overflow-hidden relative flex-col mt-14 max-w-full text-xs font-extralight tracking-wider text-center  text-teal-950 w-[304px]">
                                        <div className="flex overflow-hidden relative items-center justify-center flex-col ">
                                            <img loading="lazy" src="/client-2.png" alt="Brand logo" className="w-[8rem] lg:w-[10rem] rounded-full opacity-0" />
                                        </div>
                                    </div>
                                    <div
                                        ref={fadeInRef}
                                        className="self-center px-6 w-full md:w-[70%] text-[25px]  mt-10 tracking-normal text-center text-white leading-[50px] max-md:max-w-full max-md:text-3xl max-md:leading-snug"
                                    >
                                        <h1 className='text-3xl'>
                                            Rahul K
                                        </h1>
                                        <div className='text-[1.8rem] leading-tight xl:leading-7 mt-4'>"Exceptional Creativity and Professionalism"</div>
                                    </div>
                                    <div
                                        ref={fadeInRef}
                                        className='text-base self-center px-6 w-full md:w-[65%] 2xl:w-[60%] mt-24 text-center text-white max-md:max-w-full leading-7'>
                                        "Working with Hudbil Private Limited was an absolute pleasure. Their team took the time to understand our vision and translated it into a stunning, functional website. Their attention to detail and creative approach truly set them apart. We’re thrilled with the results"                                    </div>
                                    <Link to="/contact-us" className="mt-20">
                                        <button className="button self-end text-xl py-[14px] flex flex-row justify-between hover:text-black px-12 border mx-auto leading-none  text-white gap-8 rounded-[1000px]  hover:bg-white transition-all duration-300">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>

                                <div key={2} className="flex flex-col our-brands-section">
                                    <div className="flex overflow-hidden relative flex-col mt-14 max-w-full text-xs font-extralight tracking-wider text-center  text-teal-950 w-[304px]">
                                        <div className="flex overflow-hidden relative items-center justify-center flex-col ">
                                            <img loading="lazy" src="/client-3.png" alt="Brand logo" className="w-[8rem] lg:w-[10rem] rounded-full opacity-0" />
                                        </div>
                                    </div>
                                    <div
                                        ref={fadeInRef}
                                        className="self-center px-6 w-full md:w-[70%] text-[25px]  mt-10 tracking-normal text-center text-white leading-[50px] max-md:max-w-full max-md:text-3xl max-md:leading-snug"
                                    >
                                        <h1 className='text-3xl'>
                                            Anjali S
                                        </h1>
                                        <div className='text-[1.8rem] leading-tight xl:leading-7 mt-4'>"A Game-Changer for Our Business"</div>
                                    </div>
                                    <div
                                        ref={fadeInRef}
                                        className='text-base leading-7 self-center px-6 w-full md:w-[65%] 2xl:w-[60%]  mt-24 text-center text-white max-md:max-w-full'>
                                        "Our website is the heart of our business, and Hudbil Private Limited completely transformed it. The user-friendly design and responsive layout have improved our customer experience significantly. We’ve received countless compliments from our clients. Thank you for an incredible job!"                                    </div>
                                    <Link to="/contact-us" className="mt-20">
                                        <button className="button self-end text-xl py-[14px] flex flex-row justify-between hover:text-black px-12 border mx-auto leading-none  text-white gap-8 rounded-[1000px]  hover:bg-white transition-all duration-300">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                                <div key={3} className="flex flex-col our-brands-section">
                                    <div className="flex overflow-hidden relative flex-col mt-14 max-w-full text-xs font-extralight tracking-wider text-center  text-teal-950 w-[304px]">
                                        <div className="flex overflow-hidden relative items-center justify-center flex-col ">
                                            <img loading="lazy" src="/client-4.png" alt="Brand logo" className="w-[8rem] lg:w-[10rem] rounded-full opacity-0" />
                                        </div>
                                    </div>
                                    <div
                                        ref={fadeInRef}
                                        className="self-center px-6 w-full md:w-[70%] text-[25px]  mt-10 tracking-normal text-center text-white leading-[50px] max-md:max-w-full max-md:text-3xl max-md:leading-snug"
                                    >
                                        <h1 className='text-3xl'>
                                            Vikram J.
                                        </h1>
                                        <div className='text-[1.8rem] leading-tight xl:leading-7 mt-4'>"Fast, Reliable, and Outstanding Service"</div>
                                    </div>
                                    <div
                                        ref={fadeInRef}
                                        className='text-base leading-7 self-center px-6 w-full md:w-[65%] 2xl:w-[60%]  mt-24 text-center text-white max-md:max-w-full'>
                                        "From start to finish, Hudbil Private Limited exceeded our expectations. They delivered a beautiful, professional website on time and within budget. The team was always available for questions and feedback. A fantastic experience overall!"                                     </div>
                                    <Link to="/contact-us" className="mt-20">
                                        <button className="button self-end text-xl py-[14px] flex flex-row justify-between hover:text-black px-12 border mx-auto leading-none  text-white gap-8 rounded-[1000px]  hover:bg-white transition-all duration-300">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                                <div key={4} className="flex flex-col our-brands-section">
                                    <div className="flex overflow-hidden relative flex-col mt-14 max-w-full text-xs font-extralight tracking-wider text-center  text-teal-950 w-[304px]">
                                        <div className="flex overflow-hidden relative items-center justify-center flex-col ">
                                            <img loading="lazy" src="/client-5.png" alt="Brand logo" className="w-[8rem] lg:w-[10rem] rounded-full opacity-0" />
                                        </div>
                                    </div>
                                    <div
                                        ref={fadeInRef}
                                        className="self-center px-6 w-full md:w-[70%] text-[25px]  mt-10 tracking-normal text-center text-white leading-[50px] max-md:max-w-full max-md:text-3xl max-md:leading-snug"
                                    >
                                        <h1 className='text-3xl'>
                                            Sneha Ms
                                        </h1>
                                        <div className='text-[1.8rem] leading-tight xl:leading-7 mt-4'>"Innovative Design Solutions"</div>
                                    </div>
                                    <div
                                        ref={fadeInRef}
                                        className='text-base leading-7 self-center px-6 w-full md:w-[65%] 2xl:w-[60%]  mt-24 text-center text-white max-md:max-w-full'>
                                        "We needed a website that stood out in a competitive market, and Hudbil Private Limited nailed it. Their innovative designs and user-focused approach were exactly what we were looking for. It’s been a game-changer for our online presence!"                                                                       </div>
                                    <Link to="/contact-us" className="mt-20">
                                        <button className="button self-end text-xl py-[14px] flex flex-row justify-between hover:text-black px-12 border mx-auto leading-none  text-white gap-8 rounded-[1000px]  hover:bg-white transition-all duration-300">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                            </Slider>
                        </div>
                        <div className="pt-24 pb-6">
                            <div className="flex justify-center items-center">
                                <div className="flex cursor-pointer cursor-effect">
                                    {[0, 1, 2, 3, 4].map((key) => (
                                        <DotContainer
                                            key={key}
                                            index={key}
                                            currentIndex={currentIndex}
                                            handleDotClick={handleDotClick}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-white px-6 lg:px-16 overflow-hidden w-full lg:w-4/5 2xl:w-3/4 lg:ml-auto items-start py-20'>
                    <div className="flex flex-col gap-8 md:flex-row w-full items-start justify-between">
                        <div className="flex w-full md:w-2/5 2xl:w-1/3 gap-3 items-center text-base tracking-wider leading-none text-neutral-950">
                            <div className="flex shrink-0 self-start items-start mt-2 w-2 h-2 bg-black rounded-[1000px]" />
                            <div className="my-auto text-black text-2xl">Clients we have successful
                                partnerships with in this area</div>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className="flex flex-col grow items-start text-2xl  tracking-wider leading-none text-neutral-950 mt-10 md:mt-2">
                                {clients.map((client, index) => (
                                    <div key={index} className={index > 0 ? "mt-4" : ""}>{client}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-white px-6 lg:px-16 w-full lg:w-4/5 2xl:w-3/4 lg:ml-auto items-start'>
                    <div className='border-t pb-16 border-[#D8D8D8]'></div>
                    <div className='flex flex-col md:flex-row gap-10 w-full items-start justify-between font-normal'>
                        <div className='text-3xl 2xl:text-5xl w-full md:w-2/5 2xl:w-1/3'>INSIGHTS</div>
                        <div className='text-lg leading-normal w-full md:w-2/5 2xl:w-1/3'>There’s no point keeping our smarts locked away. Our content hub ‘Insights’ shares the ideas, frameworks and tools that we utilise in our work.</div>
                    </div>
                    <div className='border-b pt-16 border-[#D8D8D8]'></div>
                    <div className=' w-full flex py-20 flex-col items-center gap-20'>
                        <div className='flex flex-col lg:flex-row items-start gap-20 xl:gap-12 justify-between w-full'>
                            <div className='flex  flex-col items-start gap-2 w-full xl:w-1/2'>
                                <div className='w-full'><img className='w-full grayscale transition duration-500 hover:grayscale-0' src="/mainblogimg5.png" alt="Blog1" /></div>
                                <div className='text-3xl leading-10 mt-3 w-full'>The Ultimate Guide for UX Research.</div>
                                <a href="/blogs/the-ultimate-guide-for-ux-research" className='text-[#6A13AA] text-[16px] hover:text-gray-500 transition-all duration-300 mt-1'>Read now</a>
                            </div>
                            <div className='flex  flex-col items-start gap-2 w-full xl:w-1/2'>
                                <div className='w-full'><img className='w-full grayscale transition duration-500 hover:grayscale-0' src="/mainblogimg6.png" alt="Blog2" /></div>
                                <div className='text-3xl leading-10 mt-3'>The Evolution Of The Graphic Design.</div>
                                <a href="/blogs/the-evolution-of-the-graphic-design" className='text-[#6A13AA] text-[16px] hover:text-gray-500 transition-all duration-300 mt-1 w-fit'>Read now</a>
                            </div>
                        </div>

                        <div className='flex flex-col lg:flex-row items-start gap-20 xl:gap-12 justify-between w-full'>
                            <div className='flex  flex-col items-start gap-2 w-full xl:w-1/2'>
                                <div className='w-full'><img className='w-full grayscale transition duration-500 hover:grayscale-0' src="/mainblogimg7.png" alt="Blog3" /></div>
                                <div className='text-3xl leading-10 mt-3'>Brand’s identity design aspects in Brief.</div>
                                <a href="/blogs/brands-identity-design-aspects-in-brief" className='text-[#6A13AA] text-[16px] hover:text-gray-500 transition-all duration-300 mt-1 w-fit'>Read now</a>
                            </div>
                            <div className='flex  flex-col items-start gap-2 w-full xl:w-1/2'>
                                <div className='w-full'><img className='w-full grayscale transition duration-500 hover:grayscale-0' src="/mainblogimg8.png" alt="Blog4" /></div>
                                <div className='text-3xl leading-10 mt-3'>Business Firms Suffer Because of Not Finding right B2B design Agency.</div>
                                <a href="/blogs/business-firms-suffer-to-find-right-design-agency" className='text-[#6A13AA] text-[16px] hover:text-gray-500 transition-all duration-300 mt-1 w-fit'>Read now</a>
                            </div>
                        </div>

                        {isVisible && (
                            <div className='flex flex-col lg:flex-row items-start gap-20 xl:gap-12 justify-between w-full'>
                                <div className='flex flex-col  items-start gap-2 w-full xl:w-1/2'>
                                    <div className='w-full'><img className='w-full grayscale transition duration-500 hover:grayscale-0' src="/mainblogimg9.png" alt="Blog5" /></div>
                                    <div className='text-3xl leading-10 mt-3'>User Experience Design and its Importance for Businesses.</div>
                                    <a href="/blogs/user-experience-design-and-its-importance" className='text-[#6A13AA] text-[16px] hover:text-gray-500 transition-all duration-300 mt-1 w-fit'>Read now</a>
                                </div>
                                <div className='flex  flex-col items-start gap-2 w-full xl:w-1/2'>
                                    <div className='w-full'><img className='w-full grayscale transition duration-500 hover:grayscale-0' src="/mainblogimg10.png" alt="Blog10" /></div>
                                    <div className='text-3xl leading-10 mt-3'>The Importance of Accessible Design</div>
                                    <a href="/blogs/user-experience-design-and-its-importance" className='text-[#6A13AA] text-[16px] hover:text-gray-500 transition-all duration-300 mt-1 w-fit'>Read now</a>
                                </div>
                            </div>
                        )}

                        {!isVisible && (
                            <button onClick={handleButtonClick} className="button self-end mx-auto flex flex-row justify-between px-12 py-2 bg-black leading-none border text-white gap-8 rounded-[1000px] hover:bg-[#7811A5] transition-all duration-300">
                                <h1 className='text-base mt-1 '>View all Insight </h1>
                                <img src="/ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                            </button>
                        )}


                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default WebDesign8;