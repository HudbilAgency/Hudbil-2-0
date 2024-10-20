import React from "react";

const OurBrandsSection = () => {
  const dots = Array(8).fill(null);

  return (
    <section className="flex overflow-hidden flex-col items-start px-20 pt-24 pb-9 bg-neutral-950 max-w-[864px] max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[596px] max-md:max-w-full">
        <h1 className="ml-6 text-5xl font-bold tracking-normal leading-none text-center text-white max-md:text-4xl">
          Our Brands
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/729a8e41337d7249fba79168c23ddd91ff9ea83d937e32249ea81c826fca1063?apiKey=7904fd7afaaf4ee2b0837ab86d91b244&"
          alt="Brand illustration"
          className="object-contain mt-20 ml-5 max-w-full aspect-[0.87] w-[374px] max-md:mt-10"
        />
        <h2 className="self-stretch mt-20 text-4xl font-bold tracking-normal text-center text-white leading-[50px] max-md:mt-10 max-md:max-w-full">
          We drive your product success <br /> in the future with our AI, AR & VR development solutions.
        </h2>
            <button className="px-14 py-5  hover:bg-[#7811A5] hover:text-white bg-white text-black transition-all duration-300  mt-14 w-80 max-w-full text-base tracking-wider leading-none  rounded-[1000px] max-md:px-5 max-md:mt-10">
                      Learn about Kalacode →
                </button>
        <div className="flex gap-5 items-center mt-16 ml-6 max-md:mt-10">
          {dots.map((_, index) => (
            <div
              key={index}
              className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-white rounded-full"
            />
          ))}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/106b85d9bdf23f12b14c19ee3b4ba20fbcc84e5ff2ee3a13ecd680f9ddf00929?apiKey=7904fd7afaaf4ee2b0837ab86d91b244&"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default OurBrandsSection;