import React, { useState, useRef } from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet';
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

const ClientSupport = () => {

  const [project, setProject] = useState("");
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
      project,
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

    setProject("");
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
        "https://hudbil-server.onrender.com/client-support",
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
      <main className="flex overflow-hidden flex-col px-6 lg:px-16 py-20 bg-white max-md:px-5 max-md:pb-20">
        <div className="flex px-10 mt-20 bg-neutral-400 max-md:px-5 max-md:mt-10">
          <div className="flex flex-1 shrink w-full basis-0 min-h-[1px] min-w-[240px] max-md:max-w-full" />
        </div>
        <section className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-6 sm:gap-16 flex-col lg:flex-row">
            <div className="flex flex-col lg:w-[44%] max-md:ml-0 w-full">
              <div className="flex flex-col text-neutral-950 max-md:mt-10 max-md:max-w-full">
                <h1 className="self-start text-4xl md:text-[3rem] xl:text-[4rem] text-[#0B0B0B] leading-tight">
                  Our Teams
                </h1>
                <p className="mt-9 text-xl leading-10 max-md:max-w-full">
                  If you are dealing with any issue's in your on going project, request a call we are available to help 24/7
                </p>
              </div>
            </div>
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
                    <div className="flex overflow-hiddens mt-10 tracking-wider">
                      <label htmlFor="project-select" className="sr-only bg-transparent">Select Your on-going project with us</label>
                      <select
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        id="project-select"
                        className="overflow-hidden grow my-auto pt-8 pb-4 bg-transparent placeholder:text-[#D8D8D8] border-b outline-none max-md:max-w-full"
                        placeholder="Select Your on-going project with us*"
                        required
                      >
                        <option className='text-[#D8D8D8]'>Select Your on-going project with us*</option>
                        <option>UI/UX design</option>
                        <option>Website development</option>
                        <option>Application development</option>
                        <option>Design Strategy</option>
                        <option>Chat-bot development</option>
                        <option>Branding design</option>
                      </select>
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
                        className="overflow-hidde grow h-fit pt-8 pb-4 bg-transparent placeholder:text-[#7D7D7D] border-b outline-none"
                        placeholder="What’s the good time to connect with you ?*"
                      >
                        <option className='text-[#7D7D7D]'>What’s the good time to connect with you ?*</option>
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
                    <div className='mt-12 flex flex-col gap-12'>
                      <div>Please attach a file if it will support your query</div>
                      <div className="flex flex-col sm:flex-row gap-5 items-center">
                        <div onClick={handleFileInputClick} className="px-12 cursor-pointer py-3 my-auto text-center border border-solid border-[#D8D8D8] rounded-full text-black ">
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

export default ClientSupport;