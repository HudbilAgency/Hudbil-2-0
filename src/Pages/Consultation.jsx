import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { InlineWidget } from "react-calendly";

const Consultation = () => {
  return (
    <>
      <Navbar />
      <main className="py-28 px-6 lg:px-16 relative z-20 bg-white">
        <section>
          <div className="flex flex-col lg:flex-row items-stretch justify-between h-full gap-16 lg:gap-20 xl:gap-24 2xl:gap-36">
            <div className="w-full lg:w-1/2">
              <div className="text-4xl md:text-[3rem] text-[#7811A5] leading-tight w-full 2xl:w-4/5">
                Get in touch with our teams in India, London or Dubai. We look forward to hearing from you.
              </div>
            </div>
            <div className="w-full lg:w-1/2 overflow-hidden min-h-full flex flex-col lg:flex-row items-start gap-12 xl:gap-16">
              <div className="bg-[#D8D8D8] h-[1px] w-full lg:hidden block"></div>
              <div className="bg-[#D8D8D8] w-[1px] h-full hidden lg:block"></div>
              <div className="calendar w-full overflow-hidden z-10">
                <InlineWidget url="https://calendly.com/hudbilagency/30min?primary_color=7811A5" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Consultation;
