import React, { useState, useRef } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet';
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ClientSupport = () => {

  const [dropdown, setDropdown] = useState(false);

  const handleSelectChange = (e) => {

    const selectedValue = e.target.value;
    setLooking(selectedValue);

    if (selectedValue === "Services") {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };

  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);

  const handleSelectChange2 = (e) => {

    const selectedValue2 = e.target.value;
    setServices(selectedValue2);

    if (selectedValue2 === "Research") {
      setDropdown2(true);
    } else {
      setDropdown2(false);
    }

    if (selectedValue2 === "Strategy") {
      setDropdown3(true);
    } else {
      setDropdown3(false);
    }

    if (selectedValue2 === "Design") {
      setDropdown4(true);
    } else {
      setDropdown4(false);
    }

    if (selectedValue2 === "Development") {
      setDropdown5(true);
    } else {
      setDropdown5(false);
    }
  };

  const [looking, setLooking] = useState("");
  const [services, setServices] = useState("");
  const [research, setResearch] = useState("");
  const [strategy, setStrategy] = useState("");
  const [design, setDesign] = useState("");
  const [development, setDevelopment] = useState("");
  const [firstname, setFirstName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [issue, setIssue] = useState("");
  const [time, setTime] = useState("");
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const recaptchaRef = useRef(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const Lookingfor = [
    { name: 'Services' },
    { name: 'Products' }
  ];

  const Services = [
    { name: 'Research' },
    { name: 'Strategy' },
    { name: 'Design' },
    { name: 'Development' }
  ];

  const Research = [
    { name: 'UX Research' },
    { name: 'Ethnographic Research ' },
    { name: 'Design Audit' },
    { name: 'Matunity Audit' },
    { name: 'Competitor Analysis' },
    { name: 'Emerging Trends' }
  ];

  const Strategy = [
    { name: 'Brand Strategy' },
    { name: 'Product Strategy ' },
    { name: 'UX Strategy' },
    { name: 'Scale - up Strategy' },
    { name: 'Digital transformation' },
    { name: 'User Acquisition startegy' }
  ];

  const Design = [
    { name: 'UI Design' },
    { name: 'UI Development ' },
    { name: 'UI Guidelines' },
    { name: 'Design system' },
    { name: 'UX Design' },
    { name: 'User Research' },
    { name: 'UX Consultancy' },
    { name: 'UX writing' },
    { name: 'Animations' },
    { name: 'Iconography' },
    { name: 'Illustrations' }
  ];

  const Development = [
    { name: 'Web design ' },
    { name: 'Software Development' },
    { name: 'Front - end' },
    { name: 'Backend' },
    { name: 'E - Commerce' },
    { name: 'Mobile App Development' },
    { name: 'Native' },
    { name: 'Hybrid' },
    { name: 'Android' }
  ];

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

    if (!recaptchaToken) {
      setShowVerification(true);
      return;
    }

    let fileBase64 = file ? await toBase64(file) : null;

    const clientsupportData = {
      looking,
      services,
      research,
      strategy,
      design,
      development,
      firstname,
      company,
      email,
      role,
      issue,
      time,
      fileName,
      attachment: fileBase64,
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

    setLooking("");
    setServices("");
    setResearch("");
    setStrategy("");
    setDesign("");
    setDevelopment("");
    setFirstName("");
    setCompany("");
    setEmail("");
    setRole("");
    setIssue("");
    setTime("");
    setFileName("");
    setFile(null);
    setRecaptchaToken(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    try {
      const response = await axios.post(
        "https://hudbil-server.onrender.com/client-support-hudbil",
        JSON.stringify(clientsupportData),
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
        <title>Transformative Design & Development Solutions | Your Trusted Partner</title>
        <meta name="description" content="At our design and development agency, we believe in putting clients first. Explore our range of services designed to elevate your brand."></meta>
        <meta property="og:url" content="www.hudbil.com/client-support"></meta>
        <meta name="keywords" content="Client support, Design development agency, Custom development services, Innovative design solutions, Tailored client services, Comprehensive design support, Digital transformation agency, Client-centric solutions, Web development, UI/UX design"></meta>
        <meta name="og:description" content="for an agency specializing in client support and customized design and development services."></meta>
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
      <main className="flex overflow-hidden flex-col px-6 lg:px-16 py-20 bg-white">
        <div className="flex px-10 mt-20 bg-neutral-400 max-md:px-5 max-md:mt-10">
          <div className="flex flex-1 shrink w-full basis-0 min-h-[1px] min-w-[240px] max-md:max-w-full" />
        </div>
        <section className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-6 sm:gap-16 flex-col lg:flex-row">
            <div className="flex flex-col lg:w-[44%] max-md:ml-0 w-full">
              <div className="flex flex-col text-neutral-950 max-md:mt-10 max-md:max-w-full">
                <h1 className="self-start text-4xl md:text-[3rem] text-[#0B0B0B] leading-tight">
                  Your Team
                </h1>
                <p className="mt-9 text-xl leading-9 max-md:max-w-full">
                  This page is only for our on-going clients.
                </p>
                <p className="mt-4 text-xl leading-9 max-md:max-w-full">
                  If you are dealing with any issue's in your on going project, request a call, your project team manager will get in touch with you as per the time scheduled.
                </p>
              </div>
            </div>

            {showConfirmation ? (
              <div className="flex flex-col lg:ml-5 lg:w-[56%] ml-0 w-full">
                <div className="flex flex-col text-base text-zinc-500 max-md:max-w-full">
                  <div className="lg:flex shrink-0 w-[1px] bg-[#D8D8D8] hidden" />
                  <div className="bg-[#D8D8D8] h-[1px] w-full lg:hidden block"></div>
                  <div className='w-full flex flex-col items-start gap-12 thank-you mt-20 lg:mt-0'>
                    <div className='text-3xl md:text-[2.7rem] 2xl:text-[3rem] text-[#0B0B0B] leading-tight w-full 2xl:w-4/5'>Our team is excited to learn your objective of your project, and we’ll be reviewing the details and get in touch.</div>
                    <div className='text-3xl md:text-[2.7rem] 2xl:text-[3rem] text-[#0B0B0B] leading-tight w-full 2xl:w-4/5'>Thank You…!! </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col lg:ml-5 lg:w-[56%] ml-0 w-full">
                <div className="flex flex-wrap grow gap-10 text-base text-zinc-500 mt-12 md:mt-0 max-md:max-w-full">
                  <div className="lg:flex shrink-0 w-[1px] bg-[#D8D8D8] hidden" />
                  <div className="bg-[#D8D8D8] h-[1px] w-full lg:hidden block"></div>
                  <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                    <h2 className="self-start text-3xl text-neutral-950">Choose your project</h2>
                    <form id="userDetailsForm"
                      className="w-full"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmitForm();
                      }}>
                      <div className='mt-10 flex flex-col gap-2'>
                        <label htmlFor="looking">Select your on-going project with us*</label>
                        <select
                          value={looking}
                          onChange={handleSelectChange}
                          id="looking"
                          name="looking"
                          className="py-5 border-b border-[#D8D8D8] focus:outline-none"
                          required
                        >
                          <option value="" disabled selected className="text-[#595959]">Please Select</option>
                          {Lookingfor.map((Lookingfor) => (
                            <option key={Lookingfor.name} value={Lookingfor.name} className="text-[#595959]">
                              {Lookingfor.name.split(',')[0]}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className={`flex flex-col overflow-hidden transition-all duration-700 ease-in-out ${dropdown ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className='mt-10 flex flex-col gap-2'>
                          <label htmlFor="services">Select a service you are looking for*</label>
                          <select
                            value={services}
                            onChange={handleSelectChange2}
                            id="services"
                            name="services"
                            className="py-5 decorated border-b border-[#D8D8D8] focus:outline-none"
                            required={dropdown}
                          >
                            <option value="" disabled selected className="text-[#595959]">Select your service</option>
                            {Services.map((Services) => (
                              <option key={Services.name} value={Services.name} className="text-[#595959]">
                                {Services.name.split(',')[0]}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className={`flex flex-col overflow-hidden transition-all duration-700 ease-in-out ${dropdown2 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className='mt-10 flex flex-col gap-2'>
                            <label htmlFor="research">Research*</label>
                            <select
                              value={research}
                              onChange={(e) => setResearch(e.target.value)}
                              id="research"
                              name="research"
                              className="py-5 border-b border-[#D8D8D8] focus:outline-none"
                              required={dropdown2}
                            >
                              <option value="" disabled selected className="text-[#595959]">Please Select</option>
                              {Research.map((Research) => (
                                <option key={Research.name} value={Research.name} className="text-[#595959]">
                                  {Research.name.split(',')[0]}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className={`flex flex-col overflow-hidden transition-all duration-700 ease-in-out ${dropdown3 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className='mt-10 flex flex-col gap-2'>
                            <label htmlFor="strategy">Strategy*</label>
                            <select
                              value={strategy}
                              onChange={(e) => setStrategy(e.target.value)}
                              id="strategy"
                              name="strategy"
                              className="py-5 border-b border-[#D8D8D8] focus:outline-none"
                              required={dropdown3}
                            >
                              <option value="" disabled selected className="text-[#595959]">Please Select</option>
                              {Strategy.map((Strategy) => (
                                <option key={Strategy.name} value={Strategy.name} className="text-[#595959]">
                                  {Strategy.name.split(',')[0]}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className={`flex flex-col overflow-hidden transition-all duration-700 ease-in-out ${dropdown4 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className='mt-10 flex flex-col gap-2'>
                            <label htmlFor="design">Design*</label>
                            <select
                              value={design}
                              onChange={(e) => setDesign(e.target.value)}
                              id="design"
                              name="design"
                              className="py-5 border-b border-[#D8D8D8] focus:outline-none"
                              required={dropdown4}
                            >
                              <option value="" disabled selected className="text-[#595959]">Please Select</option>
                              {Design.map((Design) => (
                                <option key={Design.name} value={Design.name} className="text-[#595959]">
                                  {Design.name.split(',')[0]}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className={`flex flex-col overflow-hidden transition-all duration-700 ease-in-out ${dropdown5 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className='mt-10 flex flex-col gap-2'>
                            <label htmlFor="development">Development*</label>
                            <select
                              value={development}
                              onChange={(e) => setDevelopment(e.target.value)}
                              id="development"
                              name="development"
                              className="py-5 border-b border-[#D8D8D8] focus:outline-none"
                              required={dropdown5}
                            >
                              <option value="" disabled selected className="text-[#595959]">Please Select</option>
                              {Development.map((Development) => (
                                <option key={Development.name} value={Development.name} className="text-[#595959]">
                                  {Development.name.split(',')[0]}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col overflow-hidden justify-center items-start pb-2 tracking-wider">
                        <label className="sr-only" htmlFor="name">First name*</label>
                        <input
                          value={firstname}
                          onChange={(e) => setFirstName(e.target.value)}
                          type="text"
                          name="firstName"
                          placeholder="First name*"
                          required
                          className="overflow-hidden flex-1 pt-8 pb-4 px-1 outline-none border-b shrink w-full min-w-[240px] max-md:max-w-full"
                        />
                        <label className="sr-only" htmlFor="name">Company Name*</label>
                        <input
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          type="text"
                          name="companyName"
                          placeholder="Company Name*"
                          required
                          className="overflow-hidden flex-1 pt-8 pb-4 px-1 outline-none border-b shrink w-full min-w-[240px] max-md:max-w-full"
                        />
                        <label className="sr-only" htmlFor="email">Email*</label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          name="email"
                          placeholder="Email*"
                          required
                          className="overflow-hidden flex-1 pt-8 pb-4 px-1 outline-none border-b shrink w-full min-w-[240px] max-md:max-w-full"
                        />
                        <label className="sr-only" htmlFor="text">What's your role towards the project?*</label>
                        <input
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          type="text"
                          name="role"
                          placeholder="What's your role towards the project?*"
                          required
                          className="overflow-hidden flex-1 pt-8 pb-4 px-1 outline-none border-b shrink w-full min-w-[240px] max-md:max-w-full"
                        />
                        <label className="sr-only" htmlFor="text">What is the issue you are facing currently?*</label>
                        <input
                          value={issue}
                          onChange={(e) => setIssue(e.target.value)}
                          type="text"
                          name="issue"
                          placeholder="What is the issue you are facing currently?*"
                          required
                          className="overflow-hidden flex-1 pt-8 pb-4 px-1 outline-none border-b shrink w-full min-w-[240px] max-md:max-w-full"
                        />
                      </div>
                      <div className="flex overflow-hiddens">
                        <label htmlFor="project-select" className="sr-only bg-transparent">What’s the good time to connect with you ?*</label>
                        <select
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          id="project-select"
                          required
                          className="overflow-hidde grow h-fit pt-8 pb-5 bg-transparent placeholder:text-[#7D7D7D] border-b outline-none"
                          placeholder="What’s the good time to connect with you ?*"
                        >
                          <option value="" disabled selected className='text-[#7D7D7D]'>What’s the good time to connect with you ?*</option>
                          <option>3:00 PM - IST</option>
                          <option>3:30 PM - IST </option>
                          <option>4:00 PM - IST</option>
                          <option>4:30 PM - IST</option>
                          <option>5:00 PM - IST</option>
                          <option>5:30 PM - IST</option>
                          <option>6:00 PM - IST</option>
                          <option>6:30 PM - IST</option>
                        </select>
                      </div>
                      <div className='mt-12 flex flex-col gap-[54px]'>
                        <div className='flex flex-col gap-8'>
                          <div>Please attach your project brief</div>
                          <div className="flex flex-col sm:flex-row gap-5 items-center">
                            <div onClick={handleFileInputClick} className="px-12 hover:bg-[#7811A5] transition-all duration-300 hover:text-white cursor-pointer py-3 my-auto text-center border border-solid border-[#D8D8D8] rounded-full text-black ">
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
                        </div>
                        <div>
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
                        <button form="userDetailsForm" type="submit" className='border w-fit rounded-full py-4 px-28 text-white submit-btn'>
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ClientSupport;