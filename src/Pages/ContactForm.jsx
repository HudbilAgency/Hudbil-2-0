import React, { useState, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

const ContactForm = () => {

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobtitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFile(file);
    }
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleSubmitForm = async () => {

    let fileBase64 = file ? await toBase64(file) : null;

    const contactformData = {
      firstname,
      lastname,
      email,
      jobtitle,
      company,
      country,
      message,
      fileName,
      attachment: fileBase64,
    };

    toggleConfirmation();

    try {
      const response = await axios.post(
        "https://hudbil-server.onrender.com/contact-form",
        JSON.stringify(contactformData),
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

  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch with Our Design & Development Team</title>
        <meta name="description" content="Have questions or need a quote? Contact our design and development agency today! Our expert team is ready to discuss your project and provide tailored solutions to meet your needs."></meta>
        <meta property="og:url" content="https://www.hudbil.com/contact-us"></meta>
        <meta name="keywords" content="Contact Us, Get in Touch, Design Agency Contact, Development Agency Contact, Request a Quote, Customer Support, Inquiry Form, Speak with Our Team"></meta>
        <meta name="description" content=" Contact Us - Request for a Free Website design and development Quote. Looking forward for an oportunity to discuss your project."></meta>
        <meta name="og:site_name" content="B2B UI/UX Designing Company in Bangalore India | B2C Website Development Agency in Bangalore | Top 10 B2B Website Developement Agencies in Bangalore Review | B2C Branding and designing Agency | B2C Software development Agency"></meta>
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
      <div className="w-full h-[70vh] lg:h-[80vh] bg-no-repeat bg-cover bg-center">
        <video
          src="/contact-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover h-[70vh] lg:h-[80vh] w-full fixed z-0"
        >
          <source src="/contact-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <main className='py-28 px-6 lg:px-16 relative z-20 bg-white'>

        <section>
          <div className='flex flex-col lg:flex-row items-stretch justify-between h-full gap-16 lg:gap-20 xl:gap-24 2xl:gap-36'>

            <div className='w-full lg:w-1/2'>
              <div className='text-4xl md:text-[3rem] text-[#0B0B0B] leading-tight xl:w-5/6 2xl:w-4/5'>Get in touch with our teams in India, London or Dubai. We look forward to hearing from you.</div>

              <div className='mt-20 flex flex-col items-start gap-14'>

                <div className='flex flex-col xl:flex-row items-start justify-between w-full gap-5'>
                  <div className='w-full xl:w-[31%] 2xl:w-[28%]'>BANGALORE OFFICE</div>
                  <div className='w-full xl:w-1/3 leading-7'>No 235, 2nd & 3rd Floor, 13th Cross Road 2nd Stage, Indiranagar Hoysala Nagar, Bangalore - 560038,</div>
                  <div className='flex flex-col items-start gap-[6px] w-full xl:w-[26%] 2xl:w-[22%]'>
                    <div>+91 88-84-40-9369</div>
                    <div><a href="mailto:info@hudbil.com" className="hover:text-purple-700 transition-all duration-300 mt-5">
                      Email us here
                    </a></div>
                  </div>
                </div>

                <div className='flex flex-col xl:flex-row items-start justify-between w-full gap-5'>
                  <div className='w-full xl:w-[31%] 2xl:w-[28%]'>MUMBAI OFFICE</div>
                  <div className='w-full xl:w-1/3 leading-7'>74/II, “C” Cross Road, Opp Gate No 2, MIDC - 400093, Seepz, Andheri East, Mumbai, Maharashtra.</div>
                  <div className='flex flex-col items-start gap-[6px] w-full xl:w-[26%] 2xl:w-[22%]'>
                    <div>+91 88-84-40-9369</div>
                    <div><a href="mailto:info@hudbil.com" className="hover:text-purple-700 transition-all duration-300 mt-5">
                      Email us here
                    </a></div>
                  </div>
                </div>

                <div className='flex flex-col xl:flex-row items-start justify-between w-full gap-5'>
                  <div className='w-full xl:w-[31%] 2xl:w-[28%]'>DELHI OFFICE</div>
                  <div className='w-full xl:w-1/3 leading-7'>90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram, Sarhol, Haryana - 122008.</div>
                  <div className='flex flex-col items-start gap-[6px] w-full xl:w-[26%] 2xl:w-[22%]'>
                    <div>+91 88-84-40-9369</div>
                    <div><a href="mailto:info@hudbil.com" className="hover:text-purple-700 transition-all duration-300 mt-5">
                      Email us here
                    </a></div>
                  </div>
                </div>

                <div className='flex flex-col xl:flex-row items-start justify-between w-full gap-5'>
                  <div className='w-full xl:w-[31%] 2xl:w-[28%]'>DUBAI OFFICE</div>
                  <div className='w-full xl:w-1/3 leading-7'>Boulevard Plaza Level 23, Boulevard Plaza Tower 2, Dubai. UAE</div>
                  <div className='flex flex-col items-start gap-[6px] w-full xl:w-[26%] 2xl:w-[22%]'>
                    <div>+91 88-84-40-9369</div>
                    <div><a href="mailto:info@hudbil.com" className="hover:text-purple-700 transition-all duration-300 mt-5">
                      Email us here
                    </a></div>
                  </div>
                </div>

                <div className='flex flex-col xl:flex-row items-start justify-between w-full gap-5'>
                  <div className='w-full xl:w-[31%] 2xl:w-[28%]'>LONDON OFFICE</div>
                  <div className='w-full xl:w-1/3 leading-7'>Level 30, The Leaden hall Building Z2 Lacunal Street City of London, EC3V 4AB, UK.</div>
                  <div className='flex flex-col items-start gap-[6px] w-full xl:w-[26%] 2xl:w-[22%]'>
                    <div>+91 88-84-40-9369</div>
                    <div><a href="mailto:info@hudbil.com" className="hover:text-purple-700 transition-all duration-300 mt-5">
                      Email us here
                    </a></div>
                  </div>
                </div>

              </div>
            </div>

            <div className='w-full lg:w-1/2 min-h-full flex flex-col lg:flex-row items-start gap-12 xl:gap-16'>
              <div className="bg-[#D8D8D8] h-[1px] w-full lg:hidden block"></div>
              <div className="bg-[#D8D8D8] w-[1px] h-full hidden lg:block"></div>
              <form id="userDetailsForm"
                className="w-full"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitForm();
                }}
              >
                <div className='w-full'>
                  <input
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    name="firstName"
                    placeholder="First name*"
                    className="outline-none text-black placeholder:text-[#C4C4C4] w-full py-4"
                    required
                  />
                  <div className="bg-[#D8D8D8] h-[1px] w-full "></div>
                  <input
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    name="lastName"
                    placeholder="Last name*"
                    className="outline-none text-black placeholder:text-[#C4C4C4] w-full py-4"
                    required
                  />
                  <div className="bg-[#D8D8D8] h-[1px] w-full "></div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className="outline-none text-black placeholder:text-[#C4C4C4] w-full py-4"
                    required
                  />
                  <div className="bg-[#D8D8D8] h-[1px] w-full "></div>
                  <input
                    value={jobtitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    type="text"
                    name="jobTitle"
                    placeholder="Job title"
                    className="outline-none text-black placeholder:text-[#C4C4C4] w-full py-4"
                  />
                  <div className="bg-[#D8D8D8] h-[1px] w-full "></div>
                  <input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    name="companyName"
                    placeholder="Company name*"
                    className="outline-none text-black placeholder:text-[#C4C4C4] w-full py-4"
                    required
                  />
                  <div className="bg-[#D8D8D8] h-[1px] w-full "></div>
                </div>
                <div className='mt-10 flex flex-col gap-2'>
                  <label htmlFor="country">Country*</label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    id="country"
                    name="country"
                    className="py-5 border-b border-[#D8D8D8] focus:outline-none"
                    required
                  >
                    <option value="" className="text-[#C4C4C4]">Please Select</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code} className="">
                        {country.name.split(',')[0]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='mt-12 flex flex-col gap-2'>
                  <label htmlFor="country">Message*</label>
                  <textarea
                    name="message"
                    className="flex mt-6 p-4 w-full border border-[#D8D8D8]"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className='mt-12 flex flex-col gap-12'>
                  <div>Please attach a file if it will support your query</div>
                  <div className="flex flex-col sm:flex-row gap-5 items-center">
                    <div onClick={handleFileInputClick} className="px-12 cursor-pointer py-3 my-auto text-center border border-solid border-[#D8D8D8] rounded-full ">
                      Choose File
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                      accept=".jpg, .jpeg, .png, .pdf, .doc, .svg, .docx, .zip, .rar"
                    />
                    <div>
                      {fileName ? (
                        <span className="text-base font-normal text-black">
                          {fileName}
                        </span>
                      ) : (
                        <span className="text-base font-normal text-black">
                          No file chosen
                        </span>
                      )
                      }
                    </div>
                  </div>
                  <button form="userDetailsForm" type="submit" className='border w-fit sm:mx-0 mx-auto rounded-full py-4 px-28 text-white submit-btn mt-4'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      {showConfirmation && (
        <div className="fixed z-30 inset-0 w-auto flex items-center justify-center">
          <div style={{
            background: 'linear-gradient(135deg, #7811A5, #2E16BB)',
          }} className="px-2 py-6 sm:px-6 sm:py-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center text-green-700">
              <FaCheckCircle className="mr-2 text-white" />
              <span className="font-medium text-sm sm:text-base text-white">
                Your details have been sent.
              </span>
            </div>
            <p className="text-center text-sm sm:text-base mt-4 text-white">
              Please check your email for the confirmation.
            </p>
            <div className='flex items-end justify-end mt-6'>
              <button
                className="text-xs transition-all duration-300 sm:text-base text-black bg-white hover:bg-black shadow-none hover:text-white focus:outline-none py-1 px-2 sm:py-2 sm:px-4 rounded-full"
                onClick={toggleConfirmation}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ContactForm;