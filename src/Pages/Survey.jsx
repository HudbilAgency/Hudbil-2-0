import React, { useState, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const Survey = () => {

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const recaptchaRef = useRef(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [selectedValues, setSelectedValues] = useState({
    industry: "",
    businessModel: "",
    websiteType: "",
  });

  const handleSelectChange = (field, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const industryType = [
    { name: 'Automotive' },
    { name: 'BFSI' },
    { name: 'Edu Tech' },
    { name: 'Energy and Mining' },
    { name: 'Fintech' },
    { name: 'Food & Beverage' },
    { name: 'Health Tech' },
    { name: 'Insurance' },
    { name: 'Manufacturing' },
    { name: 'Media and Entertainment' },
    { name: 'Travel and Hospitality' },
    { name: 'Transportation' },
    { name: 'Technology' },
    { name: 'Retailer' },
    { name: 'Real Estate' },
    { name: 'Other' },
  ];

  const companySize = [
    { name: 'Small (1-10 employees)' },
    { name: 'Medium (11-50 employees)' },
    { name: 'Large (51+ employees)' }
  ];

  const businessModel = [
    { name: 'B2B (Business to Business)' },
    { name: 'B2C (Business to Consumer)' },
    { name: 'Non-Profit/NGO' },
    { name: 'Other' },
  ];

  const websiteType = [
    { name: 'Corporate Website' },
    { name: 'E-commerce Website' },
    { name: 'Portfolio Website' },
    { name: 'Web Application' },
    { name: 'Mobile Application' },
    { name: 'Other' },
  ];

  const workingStatus = [
    { name: 'Digital marketing Agency' },
    { name: 'Designing Agency' },
    { name: 'Development Agency' },
  ];

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  const handleSubmitForm = async () => {
    if (!recaptchaToken) {
      setShowVerification(true);
      return;
    }

    const contactformData = {
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

    setRecaptchaToken(null);

    try {
      const response = await axios.post(
        "https://hudbil-server.onrender.com/contact-form-hudbil",
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

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      <Helmet>
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
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src="/contact-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <main className='py-28 px-6 lg:px-16 relative z-20 bg-white'>

        {showConfirmation ? (
          <div className='w-full thank-you'>
            <div className='w-full flex flex-col items-center text-center gap-12'>
              <div className='text-4xl md:text-[3rem] text-[#7811A5] leading-tight w-full'>Thank You!</div>
              <div className='text-2xl md:text-[24px] text-black leading-[40px] w-full md:w-[90%] 2xl:w-5/6'>We appreciate you taking the time to complete this survey. Your feedback is incredibly valuable and will help us understand the market better so we can continue to improve and deliver exceptional design and development services. You will get a google positive review on your business profile in next 24 hours by Hudbil Private Limited Team ! <br />
                Reach out to us if you have any further questions – <span><a href="mailto:info@hudbil.com" className='text-[#7811A5] underline'>info@hudbil.com</a></span></div>
            </div>
          </div>
        ) : (

          <section>
            <div className='flex flex-col lg:flex-row items-stretch justify-between h-full gap-16 lg:gap-36'>
              <div className='w-full lg:w-1/2'>
                <div className='text-4xl md:text-[3rem] text-[#7811A5] leading-tight w-full'>Welcome to Hudbil!</div>
                <div className='text-2xl md:text-[24px] text-black leading-[32px] w-full mt-12'>Dear Future Clients –</div>
                <div className='text-2xl md:text-[24px] text-black leading-[32px] w-full mt-6'>We value your input and would love to hear about your experiences, needs, and challenges when it comes to website design, development, and digital marketing. Your feedback will help us tailor our services to meet the demands of today’s market and deliver solutions that drive success for businesses like yours.</div>
              </div>


              <div className='w-full lg:w-1/2 min-h-full flex flex-col items-start'>
                <div className='text-2xl md:text-[24px] text-black leading-tight w-full lg:h-[60px] flex items-center'>
                  <div>Tell us About Your Business</div>
                </div>
                <form id="userDetailsForm"
                  className="w-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitForm();
                  }}
                >
                  <div className='w-full'>
                    <div className='mt-12 flex flex-col gap-3'>
                      <label htmlFor="business" className="tracking-[0.66px] text-[#292828]">Business Name<span className="text-[#FF2424]">*</span></label>
                      <input
                        type="text"
                        name="business"
                        placeholder="Business name"
                        className="outline-none tracking-[0.66px] text-[#292828] placeholder:text-[#9B9B9B] w-full text-sm px-3 py-4 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg"
                        required
                      />
                    </div>
                    <div className="mt-8 flex flex-col gap-3">
                      <label htmlFor="industry" className="tracking-[0.66px] text-[#292828]">
                        Industry<span className="text-[#FF2424]">*</span>
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={selectedValues.industry}
                        onChange={(e) => handleSelectChange("industry", e.target.value)}
                        className="py-4 px-3 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg text-sm focus:outline-none tracking-[0.66px] text-[#292828]"
                        required
                      >
                        <option value="" disabled className="text-[#9B9B9B]">
                          Select
                        </option>
                        {industryType.map((industry) => (
                          <option key={industry.name} value={industry.name} className="text-[#9B9B9B]">
                            {industry.name.split(",")[0]}
                          </option>
                        ))}
                      </select>

                    </div>
                    <div className={`flex flex-col overflow-hidden transition-all duration-700 ease-in-out ${selectedValues.industry === "Other" ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
                      }`}>
                      <input
                        type="text"
                        placeholder="Please specify..."
                        className={`py-4 ml-[18px] border-b-[0.5px] border-[#9B9B9B] text-sm tracking-[0.66px] text-[#292828] placeholder:text-[#9B9B9B] outline-none transition-all duration-300 ease-in-out `}
                      />
                    </div>
                    <div className='mt-8 flex flex-col gap-3'>
                      <label htmlFor="company" className="tracking-[0.66px] text-[#292828]">Company Size<span className="text-[#FF2424]">*</span></label>
                      <select
                        id="company"
                        name="company"
                        className="py-4 px-3 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg text-sm focus:outline-none tracking-[0.66px] text-[#292828]"
                        required
                      >
                        <option value="" disabled selected className="text-[#9B9B9B]">Select</option>
                        {companySize.map((companySize) => (
                          <option key={companySize.name} value={companySize.name} className="text-[#9B9B9B]">
                            {companySize.name.split(',')[0]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className='mt-8 flex flex-col gap-3'>
                      <label htmlFor="businessModel" className="tracking-[0.66px] text-[#292828]">Which of the following best describes your business model?<span className="text-[#FF2424]">*</span></label>
                      <select
                        id="businessModel"
                        name="businessModel"
                        value={selectedValues.businessModel}
                        onChange={(e) => handleSelectChange("businessModel", e.target.value)}
                        className="py-4 px-3 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg text-sm focus:outline-none tracking-[0.66px] text-[#292828]"
                        required
                      >
                        <option value="" disabled selected className="text-[#9B9B9B]">Select</option>
                        {businessModel.map((businessModel) => (
                          <option key={businessModel.name} value={businessModel.name} className="text-[#9B9B9B]">
                            {businessModel.name.split(',')[0]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={`flex flex-col overflow-hidden transition-all duration-700 ease-in-out ${selectedValues.businessModel === "Other" ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
                      }`}>
                      <input
                        type="text"
                        placeholder="Please specify..."
                        className={`py-4 ml-[18px] border-b-[0.5px] border-[#9B9B9B] text-sm tracking-[0.66px] text-[#292828] placeholder:text-[#9B9B9B] outline-none transition-all duration-300 ease-in-out `}
                      />
                    </div>
                    <div className='mt-8 flex flex-col gap-3'>
                      <label htmlFor="website" className="tracking-[0.66px] text-[#292828]">What type of website or application are you looking to develop?<span className="text-[#FF2424]">*</span></label>
                      <select
                        id="website"
                        name="website"
                        value={selectedValues.websiteType}
                        onChange={(e) => handleSelectChange("websiteType", e.target.value)}
                        className="py-4 px-3 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg text-sm focus:outline-none tracking-[0.66px] text-[#292828]"
                        required
                      >
                        <option value="" disabled selected className="text-[#9B9B9B]">Select</option>
                        {websiteType.map((websiteType) => (
                          <option key={websiteType.name} value={websiteType.name} className="text-[#9B9B9B]">
                            {websiteType.name.split(',')[0]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={`flex flex-col overflow-hidden transition-all duration-700 ease-in-out ${selectedValues.websiteType === "Other" ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
                      }`}>
                      <input
                        type="text"
                        placeholder="Please specify..."
                        className={`py-4 ml-[18px] border-b-[0.5px] border-[#9B9B9B] text-sm tracking-[0.66px] text-[#292828] placeholder:text-[#9B9B9B] outline-none transition-all duration-300 ease-in-out `}
                      />
                    </div>
                    <div className='mt-8 flex flex-col gap-3'>
                      <label htmlFor="workingStatus" className="tracking-[0.66px] text-[#292828]">Are you currently working with any agency for your digital requirement?<span className="text-[#FF2424]">*</span></label>
                      <select
                        id="workingStatus"
                        name="workingStatus"
                        className="py-4 px-3 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg text-sm focus:outline-none tracking-[0.66px] text-[#292828]"
                        required
                      >
                        <option value="" disabled selected className="text-[#9B9B9B]">Select</option>
                        {workingStatus.map((workingStatus) => (
                          <option key={workingStatus.name} value={workingStatus.name} className="text-[#9B9B9B]">
                            {workingStatus.name.split(',')[0]}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className='mt-16 flex flex-col gap-[54px]'>
                    {/* <div>
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
                    </div> */}
                    <button form="userDetailsForm" type="submit" className='border w-fit rounded-full py-3 px-12 text-white bg-[#7811A5] hover:bg-black transition-all duration-300 text-2xl md:text-[24px] leading-[32px]'>
                      Next
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Survey;