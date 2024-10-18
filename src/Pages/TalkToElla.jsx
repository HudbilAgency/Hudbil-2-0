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
        <div className="bg-black min-h-screen">
          <main className="flex flex-col lg:flex-row">


            <div className="w-[50vw] h-[100%] hidden lg:block box2 bg-no-repeat bg-cover bg-center sticky top-0 z-[999]">

              <video
                src="./ella-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-[50vw] h-[100vh]"
              >
                <source src="./ella-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>

            <div className="w-full block lg:hidden box2 -mt-[0vh] bg-no-repeat bg-cover bg-center sticky top-0">

              <video
                src="./ella-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="object-cover w-full h-[100vh]"
              >
                <source src="./ella-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

            </div>

            <div className="-mt-[30vh] lg:-mt-[0vh] min-h-screen box3 bg-black z-20 w-full lg:w-[50vw] px-6 md:px-8 flex flex-col items-center">

              <div className='w-full flex flex-col items-center mt-[6vh] lg:mt-[25vh]'>
                <svg
                  className="w-1/2 md:w-2/5 svg-anm"
                  width="340"
                  viewBox="0 0 340 333"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M64.5203 268C53.4536 268 43.687 265.633 35.2203 260.9C26.8203 256.1 20.2203 249.533 15.4203 241.2C10.687 232.8 8.32031 223.2 8.32031 212.4C8.32031 200.6 10.6536 190.333 15.3203 181.6C19.987 172.867 26.4203 166.1 34.6203 161.3C42.8203 156.433 52.2536 154 62.9203 154C74.2537 154 83.887 156.667 91.8203 162C99.7536 167.333 105.62 174.833 109.42 184.5C113.22 194.167 114.554 205.533 113.42 218.6H86.5203V208.6C86.5203 197.6 84.7536 189.7 81.2203 184.9C77.7536 180.033 72.0536 177.6 64.1203 177.6C54.8536 177.6 48.0203 180.433 43.6203 186.1C39.287 191.7 37.1203 200 37.1203 211C37.1203 221.067 39.287 228.867 43.6203 234.4C48.0203 239.867 54.4536 242.6 62.9203 242.6C68.2536 242.6 72.8203 241.433 76.6203 239.1C80.4203 236.767 83.3203 233.4 85.3203 229L112.52 236.8C108.454 246.667 102.02 254.333 93.2203 259.8C84.487 265.267 74.9203 268 64.5203 268ZM28.7203 218.6V198.4H100.32V218.6H28.7203Z"
                    fill="url(#paint0_linear_4613_436)"
                    className="path-svg"
                  />
                  <path
                    d="M134.82 273V126H162.02V273H134.82Z"
                    fill="url(#paint1_linear_4613_436)"
                    className="path-svg"
                  />
                  <path
                    d="M181.82 213V66H209.02V213H181.82Z"
                    fill="url(#paint2_linear_4613_436)"
                    className="path-svg"
                  />
                  <path
                    d="M267.398 268C259.665 268 253.098 266.533 247.698 263.6C242.365 260.6 238.298 256.633 235.498 251.7C232.765 246.7 231.398 241.2 231.398 235.2C231.398 230.2 232.165 225.633 233.698 221.5C235.232 217.367 237.698 213.733 241.098 210.6C244.565 207.4 249.198 204.733 254.998 202.6C258.998 201.133 263.765 199.833 269.298 198.7C274.832 197.567 281.098 196.5 288.098 195.5C295.098 194.433 302.798 193.267 311.198 192L301.398 197.4C301.398 191 299.865 186.3 296.798 183.3C293.732 180.3 288.598 178.8 281.398 178.8C277.398 178.8 273.232 179.767 268.898 181.7C264.565 183.633 261.532 187.067 259.798 192L235.198 184.2C237.932 175.267 243.065 168 250.598 162.4C258.132 156.8 268.398 154 281.398 154C290.932 154 299.398 155.467 306.798 158.4C314.198 161.333 319.798 166.4 323.598 173.6C325.732 177.6 326.998 181.6 327.398 185.6C327.798 189.6 327.998 194.067 327.998 199V265H304.198V242.8L307.598 247.4C302.332 254.667 296.632 259.933 290.498 263.2C284.432 266.4 276.732 268 267.398 268ZM273.198 246.6C278.198 246.6 282.398 245.733 285.798 244C289.265 242.2 291.998 240.167 293.998 237.9C296.065 235.633 297.465 233.733 298.198 232.2C299.598 229.267 300.398 225.867 300.598 222C300.865 218.067 300.998 214.8 300.998 212.2L308.998 214.2C300.932 215.533 294.398 216.667 289.398 217.6C284.398 218.467 280.365 219.267 277.298 220C274.232 220.733 271.532 221.533 269.198 222.4C266.532 223.467 264.365 224.633 262.698 225.9C261.098 227.1 259.898 228.433 259.098 229.9C258.365 231.367 257.998 233 257.998 234.8C257.998 237.267 258.598 239.4 259.798 241.2C261.065 242.933 262.832 244.267 265.098 245.2C267.365 246.133 270.065 246.6 273.198 246.6Z"
                    fill="url(#paint3_linear_4613_436)"
                    className="path-svg"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_4613_436"
                      x1="61"
                      y1="52"
                      x2="61"
                      y2="325"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0495707" stop-color="#F94343" />
                      <stop offset="0.830267" stop-color="#FF7373" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_4613_436"
                      x1="148"
                      y1="60"
                      x2="148"
                      y2="333"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0495707" stop-color="#F94343" />
                      <stop offset="0.830267" stop-color="#FF7373" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_4613_436"
                      x1="195"
                      y1="0"
                      x2="195"
                      y2="273"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0495707" stop-color="#F94343" />
                      <stop offset="0.830267" stop-color="#FF7373" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_4613_436"
                      x1="281.5"
                      y1="52"
                      x2="281.5"
                      y2="325"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.0495707" stop-color="#F94343" />
                      <stop offset="0.830267" stop-color="#FF7373" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className='flex flex-col items-center gap-1 font-normal mt-12 text-3xl md:text-4xl leading-9 text-white'>
                  <div>
                    Hi, I ‘m ella. Let’s chat!
                  </div>
                  <div>
                    I am powered by AI
                  </div>
                </div>

                <div className='flex flex-col md:flex-row lg:flex-col 2xl:flex-row items-center gap-6 mt-16 mb-12 text-white'>
                  <div className='border border-white rounded-full px-8 py-3 flex flex-col items-start gap-2'>
                    <div>Inspire me</div>
                    <div className='text-sm'>Tell me about an exciting design trend 2030</div>
                  </div>
                  <div className='border border-white rounded-full px-8 py-3 flex flex-col items-start gap-2'>
                    <div>I have a Project</div>
                    <div className='text-sm'>How do you ensure a high quality outcome?</div>
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Ask Anything...."
                  className="w-full p-6 border border-[#AFAFAF] bg-[#7811A5] mb-10 rounded-full text-white placeholder-white focus:outline-none focus:ring-none"
                />

                <div className='flex lg:flex-col md:flex-row flex-col xl:flex-row items-center gap-4 md:gap-16 lg:gap-4 xl:gap-16 mb-6 text-[#838383] font-normal'>
                  <div>© hudbil 2024</div>
                  <div>© Quick Links</div>
                  <div>© Copyrights Reserved</div>
                </div>

              </div>
            </div>

          </main>
        </div>
      </main>
    </>
  )
}

export default TalkToElla

