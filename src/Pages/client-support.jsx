import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const FormInput = ({ label, type = 'text', placeholder = '' }) => (
  <div className="flex overflow-hidden justify-center items-start py-2 tracking-wider">
    <label className="sr-only" htmlFor={label.toLowerCase().replace(/\s/g, '-')}>{label}</label>
    <input
      type={type}
      id={label.toLowerCase().replace(/\s/g, '-')}
      placeholder={placeholder || label}
      className="overflow-hidden flex-1 py-4 px-1 outline-none border-b shrink w-full min-w-[240px] max-md:max-w-full"
      aria-label={label}
    />
  </div>
);

const ClientSupport = () => {
  const formInputs = [
    { label: "First name*" },
    { label: "Company Name*" },
    { label: "Email*", type: "email" },
    { label: "What's your role towards the project?*" },
    { label: "What is the issue you are facing currently?*" },
  ];

  return (
    <>
    < Navbar />
    <main className="flex overflow-hidden flex-col px-16 py-16 bg-white max-md:px-5 max-md:pb-24">
      <div className="flex px-10 mt-20 bg-neutral-400 max-md:px-5 max-md:mt-10">
        <div className="flex flex-1 shrink w-full basis-0 min-h-[1px] min-w-[240px] max-md:max-w-full" />
      </div>
      <section className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-neutral-950 max-md:mt-10 max-md:max-w-full">
              <h1 className="self-start text-6xl tracking-wide leading-none max-md:text-4xl">
                Our Teams
              </h1>
              <p className="mt-9 text-xl leading-10 max-md:max-w-full">
                If you are dealing with any issue's in your on going project, request a call we are available to help 24/7
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
            <form className="flex flex-wrap grow gap-10 text-base text-zinc-500 max-md:mt-10 max-md:max-w-full">
              <div className="flex shrink-0 w-px border border-solid border-zinc-300  max-md:hidden max-sm:hidden" />
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <h2 className="self-start text-3xl text-neutral-950">Choose your project</h2>
                <div className="flex overflow-hiddens mt-10 tracking-wider">
                  <label htmlFor="project-select" className="sr-only bg-transparent">Select Your on-going project with us</label>
                  <select
                    id="project-select"
                    className="overflow-hidden grow my-auto py-5 bg-transparent border-b outline-none max-md:max-w-full"
                    aria-label="Select Your on-going project with us"
                  >
                    <option>Select Your on-going project with us*</option>
                    <option>UI/UX design</option>
                    <option>Website development</option>
                    <option>Application development</option>
                    <option>Design Strategy</option>
                    <option>Chat-bot development</option>
                    <option>Branding design</option>
                  </select>
                </div>
                {formInputs.map((input, index) => (
                  <FormInput key={index} {...input} />
                ))}
                <div className="flex overflow-hiddens tracking-wider">
                  <label htmlFor="project-select" className="sr-only bg-transparent">Select Your on-going project with us</label>
                  <select
                    id="project-select"
                    className="overflow-hidde grow h-fit py-5 bg-transparent border-b outline-none"
                    aria-label="Select Your on-going project with us"
                  >
                    <option>Select Your on-going project with us*</option>
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
                <label htmlFor="file-upload" className="self-start mt-6 tracking-wider leading-none text-neutral-950">
                  Please attach a file or screenshot
                </label>
                <div className="flex gap-2.5 self-start mt-8 text-neutral-950">
                  <input
                    type="file"
                    id="file-upload"
                    className="sr-only"
                    aria-label="Choose file to upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="overflow-hidden px-11 py-2 text-center border border-solid border-zinc-300 rounded-[2000px] max-md:px-5 cursor-pointer"
                  >
                    Choose File
                  </label>
                  <span className="my-auto tracking-wider leading-none">No file chosen</span>
                </div>
                <button
                  type="submit"
                  className="bg-[#7811A5] px-12 py-4 mt-14 max-w-full text-lg tracking-wider leading-none text-center text-white whitespace-nowrap rounded-[2000px] w-[267px] max-md:px-5 max-md:mt-10"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
    < Footer />
    </>
  );
};

export default ClientSupport;