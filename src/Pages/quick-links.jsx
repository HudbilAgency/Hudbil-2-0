import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';

const QuickLinks = () => {

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
        <title>Quick Links for Clients | Streamlined Navigation</title>
        <meta name="description" content="Discover our Quick Links section for easy navigation to essential services and resources. Access everything you need in one convenient place!"></meta>
        <meta property="og:url" content="www.hudbil.com/quick-links"></meta>
        <meta name="keywords" content="Quick links, Easy navigation, Essential resources, Client support links, Streamlined access, Services hub, Fast access, User-friendly navigation, Important links, Website shortcuts"></meta>
        <meta name="og:description" content="for a Quick Links hub, simplifying access to services and important information."></meta>
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
      <main>
        <section>
          <div className={`flex flex-col lg:flex-row justify-between ${isScreenTall ? 'h-screen' : 'h-full'}`}>
            <div className='w-full lg:w-1/2 min-h-full bg-black lg:border-b-[1px] border-opacity-50 border-white flex flex-col pt-36 md:pt-40 pb-20 lg:pt-48 lg:pb-40 items-center justify-center text-white px-6 lg:px-16'>
              <div className='text-4xl md:text-[3rem] leading-tight'>UI/UX Designing & Development Company In India.</div>
              <div className='mt-10 leading-7'>We are a creative UI/UX Designing, and Website Development company based in Bangalore, Karnataka, India. Call us at +91 88844-09-369.</div>
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
                  <div className='mt-12 w-fit lg:h-[78px]'>
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

        <section className='pb-24 bg-black'>
          <div className="bg-black text-white">
            <div className="w-full lg:w-4/5 2xl:w-[70%] lg:ml-auto flex items-start">
              <div className="bg-white opacity-50 w-[1px] min-h-full self-stretch hidden lg:block"></div>
              <div>
                <div className='flex flex-col md:flex-row gap-10 pt-20 pb-12 items-start justify-between font-normal px-6 lg:px-16'>
                  <div className='text-4xl leading-tight w-full md:w-2/5 2xl:w-1/3'>UI/UX Designing Agency In India</div>
                  <div className=' leading-normal w-full md:w-2/5 2xl:w-1/3 mt-2'>We are creative designing UI/UX Agency based in India. We help our clients with 360 degree designing solutions, from branding, logo designing, website designing, mobile application designing, UI/UX Designing and brochure designing, event designing etc.</div>
                </div>
                <div className='px-6 lg:px-16 pb-[6px]'>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-bangalore" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Bangalore</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-pune" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Pune</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-hyderabad" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Hyderabad</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-kolkata" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Kolkata</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-ahmedabad" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Ahmedabad</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-chennai" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Chennai</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-jaipur" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Jaipur</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-surat" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Surat</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-bhopal" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Bhopal</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-kochi" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Kochi</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-coimbatore" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Coimbatore</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-mumbai" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Mumbai</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-patna" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Patna</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-designing-agency-in-delhi" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>UI/UX Designing Agency in Delhi</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                </div>
                <div className='2xl:w-[95%] w-[94%] h-[1px] bg-white mt-20 mb-20 ml-auto'></div>
                <div className='flex flex-col md:flex-row gap-10 pb-12 items-start justify-between font-normal px-6 lg:px-16'>
                  <div className='text-4xl leading-tight w-full md:w-2/5 2xl:w-1/3'>Website Development Agency in India</div>
                  <div className=' leading-normal w-full md:w-2/5 2xl:w-1/3 mt-2'>We are a Creative Website & Mobile Application, Software Development Agency— We are an award-winning global design agency with 10+ years of industry excellence.</div>
                </div>
                <div className='px-6 lg:px-16'>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-bangalore" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Bangalore</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-pune" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Pune</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-hyderabad" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Hyderabad</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-kolkata" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Kolkata</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-ahmedabad" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Ahmedabad</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-chennai" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Chennai</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-jaipur" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Jaipur</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-surat" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Surat</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-bhopal" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Bhopal</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-kochi" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Kochi</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-coimbatore" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Coimbatore</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-mumbai" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Mumbai</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                  <div className='flex items-stretch justify-between h-full'>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-patna" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Patna</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                    <div className='w-2/5 2xl:w-1/3 min-h-full flex flex-col justify-between'>
                      <a href="/quick-links/website-development-agency-in-delhi" className='my-6 hover:text-gray-500 transition-all duration-300 w-fit'>Website Development Agency in Delhi</a>
                      <div className='w-full h-[1px] opacity-50 bg-white'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default QuickLinks;