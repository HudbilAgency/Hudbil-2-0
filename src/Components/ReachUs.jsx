import React from 'react'

const ReachUs = () => {

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
    <section className="flex overflow-hidden relative bg-[#7811A5] flex-col justify-center items-center px-6 md:px-16 py-20">
      <div className="w-full max-md:max-w-full">
        <div className="flex max-md:flex-col">
          <div className="flex flex-col w-full md:w-[50vw] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full md:w-3/4 lg:w-2/3 items-start mt-1 text-2xl sm:text-3xl text-white max-md:mt-10 max-md:max-w-full">
              <h2 className="font-arial leading-tight uppercase">
                Hudbil private limited
              </h2>
              <p className="self-stretch my-6 text-2xl font-arial font-light leading-8 max-md:max-w-full">
                Hudbil as a brand stands for its innovation in technology and creative to fly high and give freedom to business owners by automating the repetitive and mundane so they can build an empire in their industry.
              </p>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex flex-col my-4 text-xl">
                  <div className="py-0.5 w-full font-arial leading-none uppercase max-md:pr-5">
                    {item.label}
                  </div>
                  <div className="w-full font-arial leading-loose whitespace-nowrap">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[50vw] max-md:ml-0 max-md:w-full">
            <form className="flex flex-col w-full text-sm text-white max-md:mt-10 max-md:max-w-full">
              {formFields.map((field, index) => (
                <div key={index} className="py-5 text-base tracking-wider whitespace-nowrap border-b border-zinc-300 max-md:pr-5 max-md:max-w-full">
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
              <label htmlFor="country" className="self-start font-arial mt-12 text-base tracking-wider leading-loose max-md:mt-10">
                Country/Region*
              </label>
              <select
                id="country"
                name="country"
                className="pt-1.5 pb-5 mt-7 text-base tracking-wider leading-loose border-b border-zinc-300 max-md:pr-5 max-md:max-w-full bg-transparent"
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
                <label htmlFor="subscribe" className="self-stretch font-arial text-xl my-auto max-md:max-w-full">
                  Subscribe to Hud to receive our latest thinking every month.
                </label>
              </div>
              <button
                type="submit"
                className="px-16 py-5 mt-20 font-arial transition-all duration-500 w-80 max-w-full text-lg font-medium tracking-wider leading-none bg-white rounded-[1000px] text-neutral-950 hover:bg-black hover:text-white max-md:px-5 max-md:mt-10 "
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

export default ReachUs