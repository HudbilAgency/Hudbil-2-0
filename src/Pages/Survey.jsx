import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";

const Survey = () => {

  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);

  const nextStep = () => {
    if (step < 4) {
      setDirection(1);
      setStep(step + 1);
      setTimeout(() => {
        const element = document.querySelector('.main-form-div');
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: elementTop - 110,
            behavior: 'smooth'
          });
        }
      }, 0);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const recaptchaRef = useRef(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  // form step-1

  const [businessName, setBusinessName] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [businessModel, setBusinessModel] = useState("");
  const [websiteType, setWebsiteType] = useState("");
  const [workingStatus, setWorkingStatus] = useState("");

  const industryTypeList = [
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

  const companySizeList = [
    { name: 'Small (1-10 employees)' },
    { name: 'Medium (11-50 employees)' },
    { name: 'Large (51+ employees)' }
  ];

  const businessModelList = [
    { name: 'B2B (Business to Business)' },
    { name: 'B2C (Business to Consumer)' },
    { name: 'Non-Profit/NGO' },
    { name: 'Other' },
  ];

  const websiteTypeList = [
    { name: 'Corporate Website' },
    { name: 'E-commerce Website' },
    { name: 'Portfolio Website' },
    { name: 'Web Application' },
    { name: 'Mobile Application' },
    { name: 'Other' },
  ];

  const workingStatusList = [
    { name: 'Digital marketing Agency' },
    { name: 'Designing Agency' },
    { name: 'Development Agency' },
  ];

  //form step-2

  const [firstGroup, setFirstGroup] = useState(null);
  const [secondGroup, setSecondGroup] = useState(null);
  const [textArea1, setTextArea1] = useState("");
  const [fourthGroup, setFourthGroup] = useState(null);

  //form step-3

  const [fifthGroup, setFifthGroup] = useState(null);
  const [sixthGroup, setSixthGroup] = useState(null);
  const [seventhGroup, setSeventhGroup] = useState(null);

  // form step-4

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea2, setTextArea2] = useState("");
  const [eightGroup, setEightGroup] = useState(null);

  //Form Submission

  const toggleConfirmation = () => {
    setShowConfirmation(!showConfirmation);
  };

  const handleSubmitForm = async () => {

    if (step === 4) {

      if (!recaptchaToken) {
        setShowVerification(true);
        return;
      }

      const surveyformData = {
        businessName,
        industryType,
        companySize,
        businessModel,
        websiteType,
        workingStatus,
        firstGroup,
        secondGroup,
        textArea1,
        fourthGroup,
        fifthGroup,
        sixthGroup,
        seventhGroup,
        fullName,
        email,
        textArea2,
        eightGroup,
        recaptchaToken,
      };

      setShowVerification(false);
      toggleConfirmation();

      setTimeout(() => {
        const element2 = document.querySelector('.main-div');
        if (element2) {
          const elementTop2 = element2.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: elementTop2,
            behavior: 'smooth'
          });
        }
      }, 0);

      setBusinessName("");
      setIndustryType("");
      setCompanySize("");
      setBusinessModel("");
      setWebsiteType("");
      setWorkingStatus("");
      setFirstGroup(null);
      setSecondGroup(null);
      setTextArea1("");
      setFourthGroup(null);
      setFifthGroup(null);
      setSixthGroup(null);
      setSeventhGroup(null);
      setFullName("");
      setEmail("");
      setTextArea2("");
      setEightGroup(null);
      setRecaptchaToken(null);

      try {
        const response = await axios.post(
          "https://hudbil-server.onrender.com/survey-form-hudbil",
          JSON.stringify(surveyformData),
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

    } else {
      nextStep();
    }

  };

  const onRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const slideVariants = {
    initial: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: "0%",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    }),
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
      <main className='py-28 px-6 lg:px-16 relative z-20 bg-white main-div h-full'>

        {showConfirmation ? (
          <div className='w-full'>
            <div className='w-full flex flex-col items-center text-center gap-12'>
              <div className='text-4xl md:text-[3rem] text-[#7811A5] leading-tight w-full'>Thank You!</div>
              <div className='text-2xl md:text-[24px] text-black leading-[40px] w-full md:w-[90%] 2xl:w-5/6'>We appreciate you taking the time to complete this survey. Your feedback is incredibly valuable and will help us understand the market better so we can continue to improve and deliver exceptional design and development services. You will get a google positive review on your business profile in next 24 hours by Hudbil Private Limited Team ! <br />
                Reach out to us if you have any further questions – <span><a href="mailto:info@hudbil.com" className='text-[#7811A5] underline'>info@hudbil.com</a></span></div>
            </div>
          </div>
        ) : (

          <section>
            <div className='flex flex-col lg:flex-row items-stretch justify-between h-full gap-16 lg:gap-36'>
              <div className='w-full lg:w-1/2 xl:h-screen xl:sticky xl:top-[120px]'>
                <div className='text-4xl md:text-[3rem] text-[#7811A5] leading-tight w-full'>Welcome to Hudbil!</div>
                <div className='text-2xl md:text-[24px] text-black leading-[32px] w-full mt-12'>Dear Future Clients –</div>
                <div className='text-2xl md:text-[24px] text-black leading-[32px] w-full mt-6'>We value your input and would love to hear about your experiences, needs, and challenges when it comes to website design, development, and digital marketing. Your feedback will help us tailor our services to meet the demands of today’s market and deliver solutions that drive success for businesses like yours.</div>
              </div>

              <div className='w-full lg:w-1/2 flex flex-col main-form-div'>
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
                  <div className="relative w-full">
                    <AnimatePresence mode="wait" custom={direction}>
                      {step === 1 && (
                        <motion.div
                          key="step-1"
                          custom={direction}
                          variants={slideVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div className='mt-12 flex flex-col gap-4'>
                            <label htmlFor="business" className="tracking-[0.66px] text-[#292828]">Business Name<span className="text-[#FF2424]">*</span></label>
                            <input
                              value={businessName}
                              onChange={(e) => setBusinessName(e.target.value)}
                              type="text"
                              name="business"
                              placeholder="Business name"
                              className="outline-none tracking-[0.66px] text-[#292828] placeholder:text-[#9B9B9B] w-full text-sm px-3 py-4 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg"
                              required
                            />
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <label htmlFor="industry" className="tracking-[0.66px] text-[#292828]">
                              Industry<span className="text-[#FF2424]">*</span>
                            </label>
                            <select
                              id="industry"
                              name="industry"
                              value={industryType}
                              onChange={(e) => setIndustryType(e.target.value)}
                              className="py-4 px-3 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg text-sm focus:outline-none tracking-[0.66px] text-[#292828]"
                              required
                            >
                              <option value="" disabled className="text-[#9B9B9B]">
                                Select
                              </option>
                              {industryTypeList.map((industry) => (
                                <option key={industry.name} value={industry.name} className="text-[#9B9B9B]">
                                  {industry.name.split(",")[0]}
                                </option>
                              ))}
                            </select>

                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <label htmlFor="company" className="tracking-[0.66px] text-[#292828]">Company Size<span className="text-[#FF2424]">*</span></label>
                            <select
                              value={companySize}
                              onChange={(e) => setCompanySize(e.target.value)}
                              id="company"
                              name="company"
                              className="py-4 px-3 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg text-sm focus:outline-none tracking-[0.66px] text-[#292828]"
                              required
                            >
                              <option value="" disabled selected className="text-[#9B9B9B]">Select</option>
                              {companySizeList.map((companySize) => (
                                <option key={companySize.name} value={companySize.name} className="text-[#9B9B9B]">
                                  {companySize.name.split(',')[0]}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <label htmlFor="businessModel" className="tracking-[0.66px] text-[#292828]">Which of the following best describes your business model?<span className="text-[#FF2424]">*</span></label>
                            <select
                              id="businessModel"
                              name="businessModel"
                              value={businessModel}
                              onChange={(e) => setBusinessModel(e.target.value)}
                              className="py-4 px-3 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg text-sm focus:outline-none tracking-[0.66px] text-[#292828]"
                              required
                            >
                              <option value="" disabled selected className="text-[#9B9B9B]">Select</option>
                              {businessModelList.map((businessModel) => (
                                <option key={businessModel.name} value={businessModel.name} className="text-[#9B9B9B]">
                                  {businessModel.name.split(',')[0]}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <label htmlFor="website" className="tracking-[0.66px] text-[#292828]">What type of website or application are you looking to develop?<span className="text-[#FF2424]">*</span></label>
                            <select
                              id="website"
                              name="website"
                              value={websiteType}
                              onChange={(e) => setWebsiteType(e.target.value)}
                              className="py-4 px-3 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg text-sm focus:outline-none tracking-[0.66px] text-[#292828]"
                              required
                            >
                              <option value="" disabled selected className="text-[#9B9B9B]">Select</option>
                              {websiteTypeList.map((websiteType) => (
                                <option key={websiteType.name} value={websiteType.name} className="text-[#9B9B9B]">
                                  {websiteType.name.split(',')[0]}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <label htmlFor="workingStatus" className="tracking-[0.66px] text-[#292828]">Are you currently working with any agency for your digital requirement?<span className="text-[#FF2424]">*</span></label>
                            <select
                              value={workingStatus}
                              onChange={(e) => setWorkingStatus(e.target.value)}
                              id="workingStatus"
                              name="workingStatus"
                              className="py-4 px-3 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg text-sm focus:outline-none tracking-[0.66px] text-[#292828]"
                              required
                            >
                              <option value="" disabled selected className="text-[#9B9B9B]">Select</option>
                              {workingStatusList.map((workingStatus) => (
                                <option key={workingStatus.name} value={workingStatus.name} className="text-[#9B9B9B]">
                                  {workingStatus.name.split(',')[0]}
                                </option>
                              ))}
                            </select>
                          </div>
                        </motion.div>
                      )}
                      {step === 2 && (
                        <motion.div
                          key="step-2"
                          custom={direction}
                          variants={slideVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div className='mt-12 flex flex-col gap-4'>
                            <label className="tracking-[0.66px] text-[#292828]">Are you safe with their services?<span className="text-[#FF2424]">*</span></label>
                            <div className='flex flex-col gap-2'>
                              {["Yes", "No"].map((option) => (
                                <label key={option} className="flex items-center gap-3 text-[#292828] text-sm tracking-[0.66px]">
                                  <input
                                    type="radio"
                                    name="firstGroup"
                                    required
                                    checked={firstGroup === option}
                                    onChange={() => setFirstGroup(option)}
                                    className="w-3 h-3 appearance-none border-[0.5px] border-[#292828] rounded-full checked:bg-[#7811A5] checked:border-[#7811A5] transition-all"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <label className="tracking-[0.66px] text-[#292828]">Do you already have a website?<span className="text-[#FF2424]">*</span></label>
                            <div className='flex flex-col gap-2'>
                              {["Yes", "No"].map((option) => (
                                <label key={option} className="flex items-center gap-3 text-[#292828] text-sm tracking-[0.66px]">
                                  <input
                                    type="radio"
                                    name="secondGroup"
                                    required
                                    checked={secondGroup === option}
                                    onChange={() => setSecondGroup(option)}
                                    className="w-3 h-3 appearance-none border-[0.5px] border-[#292828] rounded-full checked:bg-[#7811A5] checked:border-[#7811A5] transition-all"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <label className="tracking-[0.66px] text-[#292828]">If yes, what do you like and dislike about your current website?</label>
                            <textarea
                              value={textArea1}
                              onChange={(e) => setTextArea1(e.target.value)}
                              type="text"
                              name='textArea1'
                              placeholder="Please share your thoughts on your current site’s design, functionality, and performance."
                              className="outline-none tracking-[0.66px] h-[122px] text-[#292828] placeholder:text-[#9B9B9B] w-full text-sm px-3 py-4 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg"
                            />
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <label className="tracking-[0.66px] text-[#292828]">What design style or aesthetic do you envision for your website?<span className="text-[#FF2424]">*</span></label>
                            <div className='flex flex-col gap-2'>
                              {["Minimalistic & modern", "Bold & vibrant", "Professional & corporate", "Creative & artistic", "Other"].map((option) => (
                                <label key={option} className="flex items-center gap-3 text-[#292828] text-sm tracking-[0.66px]">
                                  <input
                                    type="radio"
                                    name="fourthGroup"
                                    required
                                    checked={fourthGroup === option}
                                    onChange={() => setFourthGroup(option)}
                                    className="w-3 h-3 appearance-none border-[0.5px] border-[#292828] rounded-full checked:bg-[#7811A5] checked:border-[#7811A5] transition-all"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                      {step === 3 && (
                        <motion.div
                          key="step-3"
                          custom={direction}
                          variants={slideVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div className='mt-12 flex flex-col gap-4'>
                            <label className="tracking-[0.66px] text-[#292828]">Do you currently use SEO (Search Engine Optimization) on your website?<span className="text-[#FF2424]">*</span></label>
                            <div className='flex flex-col gap-2'>
                              {["Yes", "No"].map((option) => (
                                <label key={option} className="flex items-center gap-3 text-[#292828] text-sm tracking-[0.66px]">
                                  <input
                                    type="radio"
                                    name="fifthGroup"
                                    required
                                    checked={fifthGroup === option}
                                    onChange={() => setFifthGroup(option)}
                                    className="w-3 h-3 appearance-none border-[0.5px] border-[#292828] rounded-full checked:bg-[#7811A5] checked:border-[#7811A5] transition-all"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <label className="tracking-[0.66px] text-[#292828]">How do you prefer to communicate with a design & development agency?<span className="text-[#FF2424]">*</span></label>
                            <div className='flex flex-col gap-2'>
                              {["Email", "Phone/Video calls", "Project Management Tools (e.g., Trello, Asana)", "In-person meetings", "Other"].map((option) => (
                                <label key={option} className="flex items-center gap-3 text-[#292828] text-sm tracking-[0.66px]">
                                  <input
                                    type="radio"
                                    name="sixthGroup"
                                    required
                                    checked={sixthGroup === option}
                                    onChange={() => setSixthGroup(option)}
                                    className="w-3 h-3 appearance-none border-[0.5px] border-[#292828] rounded-full checked:bg-[#7811A5] checked:border-[#7811A5] transition-all"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <label className="tracking-[0.66px] text-[#292828]">What is your ideal timeline for launching a website or web application?<span className="text-[#FF2424]">*</span></label>
                            <div className='flex flex-col gap-2'>
                              {["1-2 months", "3-4 months", "5-6 months", "More than 6 months", "I’m flexible"].map((option) => (
                                <label key={option} className="flex items-center gap-3 text-[#292828] text-sm tracking-[0.66px]">
                                  <input
                                    type="radio"
                                    name="seventhGroup"
                                    required
                                    checked={seventhGroup === option}
                                    onChange={() => setSeventhGroup(option)}
                                    className="w-3 h-3 appearance-none border-[0.5px] border-[#292828] rounded-full checked:bg-[#7811A5] checked:border-[#7811A5] transition-all"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                      {step === 4 && (
                        <motion.div
                          key="step-4"
                          custom={direction}
                          variants={slideVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <div className='mt-12 flex flex-col gap-4'>
                            <label htmlFor="name" className="tracking-[0.66px] text-[#292828]">Full Name<span className="text-[#FF2424]">*</span></label>
                            <input
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              className="outline-none tracking-[0.66px] text-[#292828] placeholder:text-[#9B9B9B] w-full text-sm px-3 py-4 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg"
                              required
                            />
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <label htmlFor="email" className="tracking-[0.66px] text-[#292828]">Email<span className="text-[#FF2424]">*</span></label>
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              name="email"
                              placeholder="Your Email"
                              className="outline-none tracking-[0.66px] text-[#292828] placeholder:text-[#9B9B9B] w-full text-sm px-3 py-4 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg"
                              required
                            />
                          </div>
                          <div className='mt-10 h-[0.5px] bg-[#767373] w-full'></div>
                          <div className='text-2xl md:text-[24px] text-black leading-tight mt-16'>
                            Additional Information
                          </div>
                          <div className='mt-12 flex flex-col gap-4'>
                            <label className="tracking-[0.66px] text-[#292828]">Is there anything else you’d like to share about your business needs or expectations for website development and digital marketing</label>
                            <textarea
                              value={textArea2}
                              onChange={(e) => setTextArea2(e.target.value)}
                              type="text"
                              name='textArea2'
                              placeholder="Please provide any additional insights or thoughts."
                              className="outline-none tracking-[0.66px] h-[122px] text-[#292828] placeholder:text-[#9B9B9B] w-full text-sm px-3 py-4 border-[0.5px] border-[#9B9B9B] border-opacity-50 rounded-lg"
                            />
                          </div>
                          <div className='mt-8 flex flex-col gap-4'>
                            <label className="tracking-[0.66px] text-[#292828]">Would you be open to scheduling a consultation or follow-up discussion to explore your needs further?<span className="text-[#FF2424]">*</span></label>
                            <div className='flex flex-col gap-2'>
                              {["Yes", "No"].map((option) => (
                                <label key={option} className="flex items-center gap-3 text-[#292828] text-sm tracking-[0.66px]">
                                  <input
                                    type="radio"
                                    name="eightGroup"
                                    required
                                    checked={eightGroup === option}
                                    onChange={() => setEightGroup(option)}
                                    className="w-3 h-3 appearance-none border-[0.5px] border-[#292828] rounded-full checked:bg-[#7811A5] checked:border-[#7811A5] transition-all"
                                  />
                                  {option}
                                </label>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className={`${step === 4 ? "block mt-[66px] w-full" : "hidden"}`}>
                    <div className='ml-auto w-fit'>
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
                  </div>
                  <div className='mt-[54px] flex items-center justify-between w-full ml-auto'>
                    {step > 1 && (
                      <button type='button' onClick={prevStep} className='border w-fit rounded-full py-3 px-12 text-white bg-[#7811A5] hover:bg-black transition-all duration-300 text-base leading-[32px]'>
                        Back
                      </button>
                    )}

                    <button type="submit" className='border w-fit ml-auto rounded-full py-3 px-12 text-white bg-[#7811A5] hover:bg-black transition-all duration-300 text-base leading-[32px]'>
                      {step === 4 ? "Submit" : "Next"}
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