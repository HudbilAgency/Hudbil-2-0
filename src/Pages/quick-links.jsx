import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const QuickLinks = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    jobTitle: '',
    country: '',
    subscribe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const uiuxCities = [
    "Bangalore", "Hyderabad", "Ahmedabad", "Jaipur", "Bhopal", "Coimbatore",
    "Patna", "Pune", "Kolkata", "Chennai", "Surat", "Kochi"
  ];

  const webDevCities = [
    "Bangalore", "Hyderabad", "Ahmedabad", "Jaipur", "Pune", "Kolkata",
    "Chennai", "Surat", "Bhopal", "Coimbatore", "Patna", "Kochi", "Mumbai", "Delhi"
  ];

  const renderCityList = (title, cities) => {
    const halfLength = Math.ceil(cities.length / 2);
    const firstColumn = cities.slice(0, halfLength);
    const secondColumn = cities.slice(halfLength);

    return (
      <div className="mt-24 lg:px-10 max-w-full w-full max-md:mt-10">
        <div className="flex gap-20 max-md:flex-col">
          {[firstColumn, secondColumn].map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-between grow text-3xl tracking-wide leading-none text-white max-md:mt-10 max-md:max-w-full">
                {column.map((city, index) => (
                  <React.Fragment key={city}>
                    <div className="py-8 border-slate-800  border-b max-md:mr-2.5 max-md:max-w-full">
                      {title} in {city}
                    </div>
                    {/* {index < column.length + 1 && (
                      <hr className="shrink-0 mt-8 h-0 border border-solid border-white border-opacity-50 max-md:max-w-full" />
                    )} */}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
     < Navbar/>
        <section className='pb-32 bg-black'>
          <div className="flex overflow-hidden flex-col items-end bg-black max-md:pb-24">
          <div className="w-full max-md:max-w-full">
            <div className="flex max-md:flex-col">
              <div className="flex flex-col ml-[7%] mx-auto lg:w-1/2">
                <div className="flex flex-col mx-auto self-start items-start mt-10 xl:mt-16 text-white max-md:max-w-full">
                  <h1 className="self-stretch mt-48 text-5xl xl:text-7xl tracking-normal leading-tight xl:leading-[4.1875rem] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-9">
                    UI/UX Designing <br />& Development Company <br /> In India.
                  </h1>
                  <p className="mt-11 text-base xl:text-xl xl:w-[80%] tracking-wider leading-6 max-md:mt-10 max-md:max-w-full">
                    We are a creative UI/UX Designing, and Website Development company based in Bangalore, Karnataka, India. Call us at +91 88844-09-369.
                  </p>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                <form onSubmit={handleSubmit} className="flex overflow-hidden flex-col grow pt-16 pb-44 w-full text-lg bg-white text-zinc-500 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col px-20 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    {['email', 'firstName', 'lastName', 'companyName', 'jobTitle'].map((field) => (
                      <div key={field} className="py-4 text-xl mt-2.5 tracking-wider border-b border-zinc-300 max-md:pr-5 max-md:max-w-full">
                        <label htmlFor={field} className="sr-only">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          id={field}
                          name={field}
                          placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}*`}
                          className="w-full text-xl outline-none bg-transparent"
                          required
                          value={formData[field]}
                          onChange={handleInputChange}
                        />
                      </div>
                    ))}
                    <div className="flex gap-5 justify-between py-3.5 mt-2.5 tracking-wider border-b border-zinc-300 max-md:max-w-full">
                      <label htmlFor="country" className="sr-only">Select Country</label>
                      <select
                        id="country"
                        name="country"
                        className="w-full pl-1 text-xl outline-none bg-transparent appearance-none"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Country*</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                      </select>
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cb12e8ef8516bfdf69e21f5029ec3b3cbea3d9099d8bb172df82e487eb2dc34?placeholderIfAbsent=true&apiKey=ec02862acd164f0aad3ceef0d2a999c3" alt="" className="object-contain shrink-0 w-6 aspect-square" />
                    </div>
                    <div className="flex gap-5 items-center self-start mt-8 text-xl leading-none">
                      <input
                        type="checkbox"
                        id="subscribe"
                        name="subscribe"
                        className="w-4 h-4 border border-solid border-zinc-500 rounded-full"
                        checked={formData.subscribe}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="subscribe" className="self-stretch my-auto max-md:max-w-full">
                        Subscribe to Hud to receive our latest thinking every month.
                      </label>
                    </div>
                    <button type="submit" className="px-16 py-5 mt-14 max-w-full tracking-wider leading-none text-white bg-purple-800 hover:bg-black rounded-[62.5rem] w-[19.75rem] max-md:px-5 max-md:mt-10">
                      Send to reach us
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <hr className="self-stretch w-full border border-white border-solid min-h-[0.0625rem] max-md:max-w-full" />
          <div className="flex flex-col w-full max-w-[78.5625rem] max-md:max-w-full">
            <div className="flex gap-10 items-start max-md:max-w-full">
              <div className="shrink-0 self-start w-0 border border-white border-solid h-[138rem]"></div>
              <div className="flex flex-col outline-none  items-start self-end mt-24 basis-0 w-fit max-md:max-w-full">
                <div className="max-w-full">
                  <div className="flex lg:px-10 lg:gap-32 max-md:flex-col">
                    <div className="flex  w-[46%] max-md:ml-0 max-md:w-full">
                      <h2 className="text-5xl tracking-wide text-white leading-[3.125rem]  max-md:text-4xl max-md:leading-10">
                        UI/UX Designing Agency <br /> In India
                      </h2>
                    </div>
                    <div className="flex flex-col lg:ml-5 lg:w-[54%] max-md:ml-0 max-md:w-full">
                      <p className="text-xl lg:text-2xl tracking-wider leading-8 text-white max-md:mt-10 max-md:max-w-full">
                        We are creative designing UI/UX Agency based in India. We help our clients with 360 degree designing solutions, from branding, logo designing, website designing, mobile application designing, UI/UX Designing and brochure designing, event designing etc.
                      </p>
                    </div>
                  </div>
                </div>
                {renderCityList("UI/UX Designing Agency", uiuxCities)}
                <hr className="shrink-0 mt-24 max-w-full h-[0.0625rem] border border-white border-solid w-[70.3125rem] max-md:mt-10" />
                <div className="flex flex-col md:flex-row lg:gap-36 lg:px-10 justify-between items-start mt-24 max-w-full text-white w-[70.3125rem] max-md:mt-10">
                  <h2 className="self-start text-5xl lg:w-1/2 tracking-wide leading-[3.125rem] max-md:text-4xl max-md:leading-10">
                    Website Development <br />Agency in India
                  </h2>
                  <p className="lg:self-end mt-8 text-xl lg:text-2xl lg:w-1/2 tracking-wider leading-8 max-md:max-w-full">
                    We are a Creative Website & Mobile Application, Software Development Agency— We are an award-winning global design agency with 10+ years of industry excellence.
                  </p>
                </div>
                {renderCityList("Website Development Agency", webDevCities)}
              </div>
            </div>
          </div>
        </div>
        </section>
    < Footer />
    </>
  );
};

export default QuickLinks;