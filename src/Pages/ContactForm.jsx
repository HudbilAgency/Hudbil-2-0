import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const ContactForm = () => {


  const offices = [
    {
      name: "Bangalore office",
      address: "No 235, 2nd & 3rd Floor, 13th Cross Road 2nd Stage, Indiranagar Hoysala Nagar, Bangalore - 560038",
      phone: "+91 88-84-40-9369",
      email: "Email us here",
    },
    {
      name: "Mumbai office",
      address: "74/II, 'C' Cross Road, Opp Gate No 2, MIDC - 400093, Seepz, Andheri East, Mumbai, Maharashtra.",
      phone: "+91 88-84-40-9369",
      email: "Email us here",
    },
    {
      name: "Delhi office",
      address: "90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram, Sarhol, Haryana - 122008.",
      phone: "+91 88-84-40-9369",
      email: "Email us here",
    },
    {
      name: "Dubai office",
      address: "Boulevard Plaza Level 23, Boulevard Plaza Tower 2, Dubai, UAE.",
      phone: "+91 88-84-40-9369",
      email: "Email us here",
    },
    {
      name: "London office",
      address: "Level 30, The Leaden hall Building Z2 Lacunal Street, City of London, EC3V 4AB, UK.",
      phone: "+91 88-84-40-9369",
      email: "Email us here",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    companyName: '',
    country: '',
    message: '',
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (

   <>
   < Navbar />
       <div className="flex overflow-hidden mx-[3vw] flex-col items-center pt-16 bg-white">
      <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1600px] max-md:max-w-full" />
      <div className="flex px-10 mt-16 w-full bg-neutral-400 max-w-[1600px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-1 shrink w-full basis-0 min-h-[1px] min-w-[240px] max-md:max-w-full" />
      </div>
      <div className="mt-11 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[50vw] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-5 w-full max-md:mt-10 max-md:max-w-full">
              <div className="mr-7 lg:w-[40vw] w-full font-arial text-6xl tracking-wide leading-[60px] text-neutral-950 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Get in touch with our teams in India, London or Dubai. We look forward to hearing from you.
              </div>
              <div className="mt-10 max-md:max-w-full">
                <div className="flex flex-row gap-5 max-md:flex-col">
                  <div className="flex flex-col lg:w-[28%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col lg:w-full w-[10%] font-arial items-start mt-2.5 text-base tracking-wider leading-none uppercase text-neutral-950 max-md:mt-10">
                      <div className="self-stretch">Bangalore office</div>
                      <div className="mt-24 max-md:mt-10">Mumbai office</div>
                      <div className="mt-24 max-md:mt-10">delhi office</div>
                      <div className="mt-20 max-md:mt-10">DuBAI office</div>
                      <div className="mt-24 max-md:mt-10">LONDON office</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col font-arial grow items-start text-lg leading-7 text-neutral-950 max-md:mt-10">
                      <div className="self-stretch">
                        No 235, 2nd & 3rd Floor, 13th Cross Road 2nd Stage, Indiranagar Hoysala Nagar, Bangalore - 560038,{" "}
                      </div>
                      <div className="self-stretch mt-6">
                        74/II, "C" Cross Road, Opp Gate No 2, MIDC - 400093, Seepz, Andheri East, Mumbai, Maharashtra.{" "}
                      </div>
                      <div className="mt-7">
                        90B, Delhi - Jaipur Expy, Udyog Vihar, Sector 18, Gurugram, Sarhol, Haryana - 122008.{" "}
                      </div>
                      <div className="mt-6">
                        Boulevard Plaza Level 23, <br /> Boulevard Plaza Tower 2, <br /> Dubai. UAE{" "}
                      </div>
                      <div className="mt-6">
                        Level 30, The Leaden hall Building Z2 Lacunal Street <br /> City of London, EC3V 4AB, UK.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-lg tracking-wider font-arial text-neutral-950 max-md:mt-10">
                      <div className='h-[12vh]'>
                            <div className="leading-none max-md:mr-0.5">+91 88-84-40-9369</div>
                            <div className="self-start mt-4 tracking-wider">Email us here</div>
                      </div>
                      <div className='h-[12vh]'>
                            <div className="leading-none max-md:mt-6">+91 88-84-40-9369</div>
                            <div className="self-start mt-4 tracking-wider">Email us here</div>
                      </div>
                      <div className='h-[12vh]'>
                            <div className="leading-none max-md:mt-6 max-md:mr-0.5">+91 88-84-40-9369</div>
                            <div className="self-start mt-4 tracking-wider">Email us here</div>
                      </div>
                      <div className='h-[12vh]'>
                            <div className="leading-none max-md:mt-6 max-md:mr-0.5">+91 88-84-40-9369</div>
                            <div className="self-start mt-4 tracking-wider">Email us here</div>
                      </div>
                      <div className='h-[12vh]'>
                            <div className="leading-none max-md:mt-6">+91 88-84-40-9369</div>
                            <div className="self-start mt-4 tracking-wider">Email us here</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <form onSubmit={handleSubmit} className="flex flex-col px-14 pb-14 text-base text-stone-300 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="flex flex-col overflow-hidden justify-center items-start py-4 w-full tracking-wider max-md:max-w-full">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name*"
                      className="overflow-hidden flex-1 outline-none text-black shrink w-full min-w-[240px] max-md:max-w-full"
                      required
                    />
                     <hr className=" w-full mt-4 h-px border border-gray-300 border-solid" />
                  </div>
                  <div className="flex flex-col overflow-hidden justify-center items-start py-4 w-full tracking-wider max-md:max-w-full">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name*"
                      className="overflow-hidden flex-1 outline-none text-black shrink w-full min-w-[240px] max-md:max-w-full"
                      required
                    />
                    <hr className=" w-full mt-4 h-px border border-gray-300 border-solid" />
                  </div>
                  <div className="flex flex-col overflow-hidden justify-center items-start py-4 w-full tracking-wider whitespace-nowrap max-md:max-w-full">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email*"
                      className="overflow-hidden flex-1 outline-none text-black shrink w-full min-w-[240px] max-md:max-w-full"
                      required
                    />
                    <hr className=" w-full mt-4 h-px border border-gray-300 border-solid" />
                  </div>
                  <div className="flex flex-col overflow-hidden justify-center items-start py-4 w-full tracking-wider max-md:max-w-full">
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      placeholder="Job title"
                      className="overflow-hidden flex-1 outline-none text-black shrink w-full min-w-[240px] max-md:max-w-full"
                    />
                    <hr className=" w-full mt-4 h-px border border-gray-300 border-solid" />
                  </div>
                  <div className="flex flex-col overflow-hidden justify-center items-start py-4 w-full tracking-wider max-md:max-w-full">
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Company name*"
                      className="overflow-hidden flex-1 outline-none text-black shrink w-full min-w-[240px] max-md:max-w-full"
                      required
                    />
                    <hr className=" w-full mt-4 h-px border border-gray-300 border-solid" />
                  </div>
                  <div className="flex flex-col pt-8 w-full tracking-wider leading-none text-neutral-950 max-md:max-w-full">
                    <div className="pb-px w-full whitespace-nowrap max-md:max-w-full">Country*</div>
                    <div className="flex justify-center items-center pb-3.5 mt-5 w-full max-md:max-w-full">
                      <select
                        name="country" 
                        value={formData.country}
                        onChange={handleInputChange}
                        className="overflow-hidden flex-1 bg-transparent outline-none shrink self-stretch py-1.5 my-auto w-full min-w-[240px] max-md:max-w-full"
                        required
                      >
                        <hr className=" w-full mt-4 h-px border border-gray-300 border-solid" />
                        <option value="">Please Select</option>
                        {/* Add country options here */}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col pt-8 w-full tracking-wider leading-none whitespace-nowrap min-h-[148px] text-neutral-950 max-md:max-w-full">
                    <div className="pb-px w-full max-md:max-w-full">Message*</div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="flex mt-5 p-4 w-full border border-solid border-zinc-300 min-h-[72px] max-md:max-w-full"
                      required
                    />
                  </div>
                  <div className="flex flex-col pt-8 w-full text-neutral-950 max-md:max-w-full">
                    <div className="pb-px w-full tracking-wider leading-none max-md:max-w-full">
                      Please attach a file if it will support your query
                    </div>
                    <div className="flex flex-col self-center  pt-5 mt-5 w-full max-md:max-w-full">
                      <div className="flex flex-col lg:flex-row text-center overflow-hidden gap-1 items-center">
                        <label htmlFor="file-upload" className="overflow-hidden self-stretch px-24 py-3 my-auto text-center border border-solid border-zinc-300 min-w-[320px] rounded-[2000px] max-md:px-5 cursor-pointer">
                          Choose File
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <div className="self-stretch my-auto tracking-wider leading-none">
                          {formData.file ? formData.file.name : 'No file chosen'}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex self-center flex-col  pt-14 w-full text-lg tracking-wider leading-none text-center text-white max-md:max-w-full">
                    <button type="submit" className="overflow-hidden lg:w-[20vw] w-[60vw] self-center py-4 rounded-[2000px] max-md:px-5 bg-purple-700 hover:bg-black transition-colors">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

   </>
  );
};

export default ContactForm;