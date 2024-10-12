import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

const TalkToElla = () => {

  const [inputValue, setInputValue] = useState('');

  const chatPrompts = [
    { title: "Inspire me", description: "Tell me about an exciting design trend 2030" },
    { title: "I have a Project", description: "How do you ensure a high quality outcome?" }
  ];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', inputValue);
    setInputValue('');
  };


  return (
    <>
      <Navbar />
      <main className=''>
        <div className="bg-white">
          <div className="flex flex-col lg:flex-row overflow-hidden  max-md:flex-col">
            <section className="flex flex-col lg:w-[50vw] w-full max-md:ml-0 max-md:w-full">


              <video
                src="./EllaPage/EllaPageVid-1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-[50vw] h-[100vh]"
              >
                <source src="./EllaPage/EllaPageVid-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>


            </section>
            <main className="flex flex-col lg:w-[50vw] w-full max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-col grow px-10 py-10 w-full text-white bg-neutral-950 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col self-center lg:w-[40vw]  w-[90vw] max-md:mt-10">
                  <img src="./EllaPage/EllaLogoImg.png" alt="EllaLogo" className='lg:w-[20vw] md:w-[30vw] w-[70vw] items-center self-center' />
                  <h1 className="self-center font-arial md:text-4xl xl:text-6xl text-center max-md:max-w-full max-md:text-4xl">
                    Hi, I'm ella. Let's chat!
                    <br />
                    I am powered by AI
                  </h1>
                  <div className="flex flex-wrap mt-12 md:flex-row lg:flex-col xl:flex-row flex-col gap-5 text-right max-md:mt-10 max-md:max-w-full">
                    {chatPrompts.map((prompt, index) => (
                      <div
                        key={index}
                        className="flex font-arial overflow-hidden flex-col flex-1 items-start py-3 px-5 border w-fit self-center border-white border-solid rounded-[600px]"
                      >
                        <div className="text-base">{prompt.title}</div>
                        <div className="text-sm text-start">{prompt.description}</div>
                      </div>
                    ))}
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="overflow-hidden px-6 py-4 bg-purple-700 mt-14 text-lg text-right border border-solid border-zinc-400 rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
                  >
                    <label htmlFor="chatInput" className="sr-only">Ask Anything</label>
                    <input
                      type="text"
                      id="chatInput"
                      value={inputValue}
                      onChange={handleInputChange}
                      placeholder="Ask Anything...."
                      className="w-full bg-transparent font-arial placeholder:text-white outline-none"
                    />
                  </form>
                  <footer className="flex gap-6 flex-col md:flex-row text-center self-center mt-24 max-w-full text-base font-semibold tracking-wider leading-none text-zinc-500 max-md:mt-10">
                    <div className="">© hudbil 2024</div>
                    <div className="">© Quick Links</div>
                    <div className="">© Copyrights Reserved</div>
                  </footer>
                </div>
              </div>
            </main>
          </div>
        </div>
      </main>
    </>
  )
}

export default TalkToElla

