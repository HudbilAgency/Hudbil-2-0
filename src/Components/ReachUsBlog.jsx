import React, { useState, useRef } from 'react';
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ReachUsBlog = () => {

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

  return (
    <>
      <section className="flex overflow-hidden relative flex-col justify-center items-center py-20">
        <div style={{
          background: 'linear-gradient(180deg, #7811A5, #2E16BB)',
        }} className="px-6 lg:px-16 py-20 w-full rounded-2xl">
          <div className="flex max-lg:flex-col items-stretch h-full">
            <div className="flex flex-col w-full lg:w-[50vw] max-lg:ml-0 max-lg:w-full">
              <div className="flex flex-col w-full md:w-2/3 items-start text-2xl lg:mt-10 sm:text-3xl text-white max-lg:max-w-full">
                <div className="font-normal text-2xl leading-normal md:text-4xl">
                  Get Hud’s, monthly round-up of reads informed by the science of human understanding.
                </div>
              </div>
            </div>

            {showConfirmation ? (
              <div className="flex flex-col items-end justify-end min-h-full ml-5 w-[50vw] max-lg:ml-0 max-lg:w-full">
                <div className='w-full flex flex-col items-start gap-12 thank-you text-white mt-20 lg:mt-10'>
                  <div className='text-3xl md:text-[2.7rem] leading-tight w-full 2xl:w-4/5'>Thank You…!! </div>
                  <div className='text-3xl md:text-[2.7rem] leading-tight w-full 2xl:w-4/5'>Our team has received your information, will get in touch with you within the next 24 hours to discuss how we can help bring your vision to life.</div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col ml-5 w-[50vw] max-lg:ml-0 max-lg:w-full">
                <form id="userDetailsForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitForm();
                  }} className="flex flex-col w-full text-sm text-white max-lg:mt-10 max-lg:max-w-full">
                  <div className="text-base tracking-wider whitespace-nowrap border-b border-zinc-300 max-lg:pr-5 max-lg:max-w-full">
                    <label htmlFor="email" className="text-white sr-only">Email*</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className="w-full py-5 bg-transparent  outline-none placeholder-gray-300"
                      required
                    />
                  </div>
                  <div className="text-base tracking-wider whitespace-nowrap border-b border-zinc-300 max-lg:pr-5 max-lg:max-w-full">
                    <label htmlFor="name" className="text-white sr-only">First Name*</label>
                    <input
                      value={firstname}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      name="firstName"
                      placeholder="First name*"
                      className="py-5 w-full bg-transparent  outline-none placeholder-gray-300"
                      required
                    />
                  </div>
                  <div className="text-base tracking-wider whitespace-nowrap border-b border-zinc-300 max-lg:pr-5 max-lg:max-w-full">
                    <label htmlFor="name" className="text-white sr-only">Last Name*</label>
                    <input
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      name="lastName"
                      placeholder="Last name*"
                      className="py-5 w-full bg-transparent  outline-none placeholder-gray-300"
                      required
                    />
                  </div>
                  <div className="text-base tracking-wider whitespace-nowrap border-b border-zinc-300 max-lg:pr-5 max-lg:max-w-full">
                    <label htmlFor="company" className="text-white sr-only">Company Name*</label>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      type="text"
                      name="companyName"
                      placeholder="Company Name*"
                      className="py-5 w-full bg-transparent  outline-none placeholder-gray-300"
                      required
                    />
                  </div>
                  <div className="text-base tracking-wider whitespace-nowrap border-b border-zinc-300 max-lg:pr-5 max-lg:max-w-full">
                    <label htmlFor="job" className="text-white sr-only">Job title*</label>
                    <input
                      value={jobtitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      type="text"
                      name="jobTitle"
                      placeholder="Job title"
                      className="py-5 w-full bg-transparent  outline-none placeholder-gray-300"
                    />
                  </div>
                  <label htmlFor="country" className="self-start mt-12 text-base tracking-wider leading-loose">
                    Country/Region*
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    id="country"
                    name="country"
                    className="py-5 mt-2 focus:outline-none text-base justify-center tracking-wider leading-loose border-b border-zinc-300 max-md:pr-5 max-md:max-w-full bg-transparent text-white"
                    required
                  >
                    <option value="" disabled selected className="text-black">Please Select</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.name} className="text-black">
                        {country.name.split(',')[0]}
                      </option>
                    ))}
                  </select>
                  <div className="flex gap-5 items-center self-start mt-5 leading-none text-white">
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
                    <label htmlFor="subscribe" className="self-stretch  text-lg 2xl:text-xl my-auto max-lg:max-w-full">
                      Subscribe to Hud to receive our latest thinking every month.
                    </label>
                  </div>
                  <div className='mt-16 w-fit'>
                    <ReCAPTCHA
                      sitekey="6LfWPG8qAAAAAFBRLkUr505LpNEDOL_6p5dd8SLF"
                      onChange={onRecaptchaChange}
                      ref={recaptchaRef}
                      size='normal'
                      className='hidden sm:block'
                    />
                    <ReCAPTCHA
                      sitekey="6LfWPG8qAAAAAFBRLkUr505LpNEDOL_6p5dd8SLF"
                      onChange={onRecaptchaChange}
                      ref={recaptchaRef}
                      size='compact'
                      className='block sm:hidden'
                    />
                    {showVerification && (
                      <div className='mt-2 text-white'>
                        Please verify yourself first!
                      </div>
                    )}
                  </div>
                  <button
                    form="userDetailsForm" type="submit"
                    className="px-16 py-5 mt-16  transition-all duration-500 w-80 max-w-full text-lg font-medium tracking-wider leading-none bg-white rounded-[1000px] text-neutral-950 hover:bg-black hover:text-white max-lg:px-5"
                  >
                    Send to reach us
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default ReachUsBlog