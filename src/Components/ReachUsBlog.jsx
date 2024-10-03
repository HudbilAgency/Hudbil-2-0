import React from 'react'

const ReachUsBlog = () => {

  const contactInfo = [
    { label: 'Email us at', value: 'info@hudbil.com' },
    { label: 'Call us on', value: '+91 88-84-40-9369' }
  ];

  const formFields = [
    { name: 'email', label: 'Email*', type: 'email' },
    { name: 'firstName', label: 'First name*', type: 'text' },
    { name: 'lastName', label: 'Last name*', type: 'text' },
    { name: 'companyName', label: 'Company name*', type: 'text' },
    { name: 'jobTitle', label: 'Job title*', type: 'text' }
  ];

  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center py-20">
      <div className="px-6 md:px-16 py-20 w-full bg-[#7811A5] rounded-2xl">
        <div className="flex max-lg:flex-col">
          <div className="flex flex-col w-full lg:w-[50vw] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col w-full md:w-2/3 items-start text-2xl lg:mt-10 sm:text-3xl text-white max-lg:max-w-full">
              <div className="font-normal text-2xl leading-normal md:text-4xl">
              Get Hud’s, monthly round-up of reads informed by the science of human understanding.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[50vw] max-lg:ml-0 max-lg:w-full">
            <form className="flex flex-col w-full text-sm text-white max-lg:mt-10 max-lg:max-w-full">
              {formFields.map((field, index) => (
                <div key={index} className="py-5 text-base tracking-wider whitespace-nowrap border-b border-zinc-300 max-lg:pr-5 max-lg:max-w-full">
                  <label htmlFor={field.name} className="text-white sr-only">{field.label}</label>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    placeholder={field.label}
                    className="w-full bg-transparent font-arial outline-none placeholder-gray-300"
                    required
                  />
                </div>
              ))}
              <label htmlFor="country" className="self-start font-arial mt-12 text-base tracking-wider leading-loose max-lg:mt-10">
                Country/Region*
              </label>
              <select
                id="country"
                name="country"
                className="pt-1.5 pb-5 mt-7 text-base tracking-wider leading-loose border-b border-zinc-300 max-lg:pr-5 max-lg:max-w-full bg-transparent"
                required
              >
                <option value="">Please Select</option>
              </select>
              <div className="flex gap-5 items-center self-start mt-5  leading-none text-white">
                <input
                  type="radio"
                  id="subscribe"
                  className="shrink-0 self-stretch  my-auto w-4 h-4 bg-white border border-white border-solid"
                />
                <label htmlFor="subscribe" className="self-stretch font-arial text-xl my-auto max-lg:max-w-full">
                  Subscribe to Hud to receive our latest thinking every month.
                </label>
              </div>
              <button
                type="submit"
                className="px-16 py-5 mt-20 font-arial transition-all duration-500 w-80 max-w-full text-lg font-medium tracking-wider leading-none bg-white rounded-[1000px] text-neutral-950 hover:bg-black hover:text-white max-lg:px-5 max-lg:mt-10 "
              >
                Send to reach us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReachUsBlog