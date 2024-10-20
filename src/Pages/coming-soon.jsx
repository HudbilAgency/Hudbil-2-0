import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ComingSoon = () => {
  
    

    const FormInput = ({ placeholder, type = 'text', id, required = false }) => (
        <div className="flex flex-col w-full">
          <input
            type={type}
            id={id}
            name={id}
            required={required}
            className="border-b xl:text-3xl text-xl border-gray-300 focus:outline-none focus:border-gray-500 py-3 placeholder-gray-400"
            placeholder={placeholder}
            aria-label={placeholder}
          />
        </div>
      );
  
    return (
      <>
         < Navbar/>
            <main className="flex overflow-hidden flex-col px-16 py-32 bg-white max-md:px-5 max-md:py-24">
                <header className="flex px-10 bg-neutral-400 max-md:px-5">
                <div className="flex flex-1 shrink w-full basis-0 min-h-[1px] min-w-[240px] max-md:max-w-full" />
                </header>
                <section className="mt-11 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 h-screen max-md:ml-0 max-md:w-full">
                    <img 
                        loading="lazy" 
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4f14cdb77a30e9d8933b0de936ba3edc2d1df16f9d9c736ad10b0da9f81e30?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" 
                        alt="" 
                        className="object-contain grow h-screen w-full aspect-[0.84] max-md:mt-10 max-md:max-w-full" 
                    />
                    </div>
                  <div className="flex  border-l flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <form className="flex flex-col grow px-14 mt-4 text-base text-gray-800 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col">
                        <FormInput placeholder="First name*" id="firstName" required />
                        <FormInput placeholder="Last name*" id="lastName" required />
                        <FormInput placeholder="Email*" id="email" type="email" required />
                        <FormInput placeholder="Job title" id="jobTitle" />
                        <FormInput placeholder="Company name*" id="companyName" required />
        
                        <div className="flex flex-col pt-8 w-full tracking-wider leading-none text-neutral-950">
                            <label htmlFor="country" className="pb-px whitespace-nowrap">Country*</label>
                            <div className="flex gap-5 justify-between items-start mt-5">
                            <div className="relative  xl:text-xl w-full">
                                <select 
                                id="country" 
                                name="country" 
                                required 
                                className={`appearance-none bg-transparent w-full outline-none p-1`}
                                >
                                <option value="">Please Select</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center cursor-pointer">
                                <img 
                                    loading="lazy" 
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/63e5c7a500d4db52f1a848a6617980a041f33a029ede01996a1ab91ce1dcb549?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" 
                                    alt="" 
                                    className="object-contain shrink-0 w-6 aspect-square" 
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col pt-8 w-full  xl:text-xl tracking-wider leading-none whitespace-nowrap min-h-[148px] text-neutral-950">
                            <label htmlFor="message" className="pb-px w-full">Message*</label>
                            <textarea 
                            id="message" 
                            name="message" 
                            required 
                            className="flex p-3 mt-5 w-full border border-solid border-zinc-300 min-h-[72px]" 
                            />
                        </div>
                        
                        <div className="flex flex-col pt-8 w-full text-neutral-950">
                            <label htmlFor="file" className="pb-px w-full  xl:text-xl tracking-wider leading-none">
                            Please attach a file if it will support your query
                            </label>
                            <div className="flex flex-col items-start pt-5 mt-5 w-full">
                            <div className="flex  xl:text-xl overflow-hidden xl:gap-4 gap-2.5 max-w-full w-[410px]">
                                <input type="file" id="file" name="file" className="sr-only" aria-label="Choose file" />
                                <label htmlFor="file" className="overflow-hidden px-10 py-2 text-center border border-solid border-zinc-300 rounded-[2000px] cursor-pointer">
                                Choose File
                                </label>
                                <span className="flex-auto my-auto w-56 tracking-wider leading-none">No file chosen</span>
                            </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col items-start pt-14 w-full xl:text-xl text-lg tracking-wider leading-none text-center text-white whitespace-nowrap">
                            <button type="submit" className="overflow-hidden px-16 py-3.5 max-w-full rounded-[2000px] w-[267px] bg-purple-800 hover:bg-black">
                            Submit
                            </button>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </section>
            </main>
         <Footer/>
      </>
    );
  };
  
  export default ComingSoon;
  