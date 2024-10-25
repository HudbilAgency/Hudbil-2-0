import React, {useRef} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ReachUs from '../Components/ReachUs';

const Careersculture = () => {

  const sectionRef = useRef(null);

  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (

    <>
      <Navbar />
      <main className='pt-36 bg-[#BAB5DA]'>

        <section className='px-6 lg:px-16'>
          <div className='text-2xl md:text-4xl xl:text-5xl leading-tight w-full md:w-5/6'>If our story excites you, hop on and let’s craft some sweet experiences together!</div>
          <div className='flex flex-col md:flex-row items-start gap-6 justify-between mt-10'>
            <div className='text-2xl'>Join us</div>
            <div className='w-full md:w-1/2 lg:w-[45%] 2xl:w-2/5 flex flex-col items-start gap-6 leading-7 font-normal'>
              <div>We are a team of innovation minds, dedicated trainers and supportive collaborators. It doesn't matter if you’re in the first few years of your career or the last, we create an environment where everyone has a voice.</div>
              <div>Things that are important to us <br /> Diversity, culture, respect, passion, learning, music, travel and lots of food.</div>
              <div>
                <button onClick={handleScroll} className="button self-end flex flex-row justify-between mt-3 px-10 py-3 mx-auto leading-none bg-white hover:text-white text-black gap-8 rounded-[1000px] max-md:px-5 hover:bg-[#7811A5] transition-colors duration-300">
                  <h1 className='text-base mt-1 font-arial'>See Current Opening</h1>
                  <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="relative my-24 ">
            <div className="relative">
              <img className='mx-auto' src="./candc1.png" alt="career & culture" />
              <div className="absolute w-full inset-0 flex justify-center items-center overflow-hidden">
                <div className="marquee-text-container font-normal text-2xl uppercase text-black">
                  <div className="marquee-text">We’re a tribe of ARCHITECTS</div>
                  <div className="marquee-text">We’re a tribe of WRITERS</div>
                  <div className="marquee-text">We’re a tribe of ARTISTS</div>
                  <div className="marquee-text">We’re a tribe of ENGINEERS</div>
                  <div className="marquee-text">We’re a tribe of BRILLIANCE</div>
                  <div className="marquee-text">We’re a tribe of ARCHITECTS</div>
                  <div className="marquee-text">We’re a tribe of WRITERS</div>
                  <div className="marquee-text">We’re a tribe of ARTISTS</div>
                  <div className="marquee-text">We’re a tribe of ENGINEERS</div>
                  <div className="marquee-text">We’re a tribe of BRILLIANCE</div>
                  <div className="marquee-text">We’re a tribe of ARCHITECTS</div>
                  <div className="marquee-text">We’re a tribe of WRITERS</div>
                  <div className="marquee-text">We’re a tribe of ARTISTS</div>
                  <div className="marquee-text">We’re a tribe of ENGINEERS</div>
                  <div className="marquee-text">We’re a tribe of BRILLIANCE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='px-6 lg:px-16 mb-20'>
          <div className='flex flex-col lg:flex-row items-stretch justify-between gap-16 h-full'>
            <div className='flex flex-col items-start justify-between gap-12 w-full lg:w-auto min-h-full'>
              <div className='text-3xl xl:text-4xl'>What we believe in</div>
              <div className='w-full'>
                <img className='w-full' src="./candc2.png" alt="career & culture" />
              </div>
            </div>
            <div className='w-full lg:w-1/2 xl:w-2/5'>
              <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
              <div className="py-10 flex flex-col items-start gap-6">
                <div className="font-normal text-2xl md:text-3xl leading-9">Cultural Diversity</div>
                <div>Our designers come from diverse backgrounds, contributing to the culture in their own unique ways.</div>
              </div>
              <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
              <div className="py-10 flex flex-col items-start gap-6">
                <div className="font-normal text-2xl md:text-3xl leading-9">Learning and Growth</div>
                <div>We believe in multi-dimensional growth & encourage participation in all aspects of the work we do.</div>
              </div>
              <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
              <div className="py-10 flex flex-col items-start gap-6">
                <div className="font-normal text-2xl md:text-3xl leading-9">Passion and Respect</div>
                <div>Our passion for design comes from respecting diverse perspectives and embracing the unexplored.</div>
              </div>
              <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
              <div className="pt-10 flex flex-col items-start gap-6">
                <div className="font-normal text-2xl md:text-3xl leading-9">Here for a Good Time</div>
                <div>We are just as serious about food, coffee, drinks and enjoying ourselves, as we are about design.</div>
              </div>
            </div>
          </div>
        </section>

        <img className='w-full' src="./candc3.png" alt="career & culture" />

        <main className='px-6 lg:px-16 py-20 bg-black'>

          <section>
            <div className='flex flex-col gap-6 items-start text-white font-normal'>
              <div className="text-base sm:text-xl uppercase">Working at Hudbil</div>
              <div className='text-3xl md:text-[3rem] leading-tight'>Join our tribe to <br className='hidden md:block' /> celebrate design and development!</div>
            </div>

            <div className='py-20 w-full md:w-2/3 lg:w-1/2 text-white md:ml-auto leading-7'>
              <div>At Hudbil, you'll have the freedom to take ownership of your career. We develop the capabilities of our people and provide opportunities to expand your horizons. Through the HUD Academy learning and development programme, you'll commit two hours a week to focused learning. Whether that’s global best practice for quantitative or qualitative analysis or data analytics, If you have a keen eye for detail, enjoy asking questions to the point of annoyance, can eat a bowl full of ramen in under 2 minutes, and know how to recite the alphabet backwards, submit your portfolio now!</div>
              <div className='flex flex-col md:flex-row items-start gap-6 md:gap-20 lg:gap-28 2xl:gap-36 mt-12 md:mt-8'>
                <div>We offer</div>
                <div className='flex flex-col gap-3 items-start'>
                  <div>On-the-job opportunities</div>
                  <div>Focused weekly training on your craft</div>
                  <div>Events and conferences</div>
                  <div>Internal knowledge sharing</div>
                  <div>Mentoring from industry leaders</div>
                  <div>Localising global best practice</div>
                  <div>Powerful frameworks and models</div>
                </div>
              </div>
            </div>
          </section>

          <section ref={sectionRef}>
            <div className='text-white text-3xl uppercase'>Current Openings</div>
            <div className='mt-10 text-white'>
              <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
              <div className='py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20'>
                <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex items-center justify-between'>
                  <div>Design Service</div>
                  <div>Branding Lead</div>
                </div>
                <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex items-center justify-between'>
                  <div>Bangalore, India</div>
                  <div>
                    <button
                      className="p-1 md:p-2 rounded-full flex justify-center items-center cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #7811A5, #2E16BB)',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7078_269)">
                          <g clip-path="url(#clip1_7078_269)">
                            <g clip-path="url(#clip2_7078_269)">
                              <path d="M6.76651 12.0564H5.23412L5.25734 7.50565H0.869141V6.0197H5.25734L5.23412 1.49219H6.76651V6.0197H11.1547V7.50565H6.76651V12.0564Z" fill="white" />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_7078_269">
                            <rect className="transition-all duration-500" width="11" height="12.22" fill="white" transform="translate(0.5 0.890625)" />
                          </clipPath>
                          <clipPath id="clip1_7078_269">
                            <rect width="11" height="12.22" fill="white" transform="translate(0.5 0.890625)" />
                          </clipPath>
                          <clipPath id="clip2_7078_269">
                            <rect width="10.998" height="12.22" fill="white" transform="translate(0.501953 0.890625)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
              <div className='py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20'>
                <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex items-center justify-between'>
                  <div>Design Service</div>
                  <div>Sr. UX Research</div>
                </div>
                <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex items-center justify-between'>
                  <div>Bangalore, India</div>
                  <div>
                    <button
                      className="p-1 md:p-2 rounded-full flex justify-center items-center cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #7811A5, #2E16BB)',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7078_269)">
                          <g clip-path="url(#clip1_7078_269)">
                            <g clip-path="url(#clip2_7078_269)">
                              <path d="M6.76651 12.0564H5.23412L5.25734 7.50565H0.869141V6.0197H5.25734L5.23412 1.49219H6.76651V6.0197H11.1547V7.50565H6.76651V12.0564Z" fill="white" />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_7078_269">
                            <rect className="transition-all duration-500" width="11" height="12.22" fill="white" transform="translate(0.5 0.890625)" />
                          </clipPath>
                          <clipPath id="clip1_7078_269">
                            <rect width="11" height="12.22" fill="white" transform="translate(0.5 0.890625)" />
                          </clipPath>
                          <clipPath id="clip2_7078_269">
                            <rect width="10.998" height="12.22" fill="white" transform="translate(0.501953 0.890625)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
              <div className='py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20'>
                <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex items-center justify-between'>
                  <div>Client Service</div>
                  <div>Project Manager</div>
                </div>
                <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex items-center justify-between'>
                  <div>Bangalore, India</div>
                  <div>
                    <button
                      className="p-1 md:p-2 rounded-full flex justify-center items-center cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #7811A5, #2E16BB)',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7078_269)">
                          <g clip-path="url(#clip1_7078_269)">
                            <g clip-path="url(#clip2_7078_269)">
                              <path d="M6.76651 12.0564H5.23412L5.25734 7.50565H0.869141V6.0197H5.25734L5.23412 1.49219H6.76651V6.0197H11.1547V7.50565H6.76651V12.0564Z" fill="white" />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_7078_269">
                            <rect className="transition-all duration-500" width="11" height="12.22" fill="white" transform="translate(0.5 0.890625)" />
                          </clipPath>
                          <clipPath id="clip1_7078_269">
                            <rect width="11" height="12.22" fill="white" transform="translate(0.5 0.890625)" />
                          </clipPath>
                          <clipPath id="clip2_7078_269">
                            <rect width="10.998" height="12.22" fill="white" transform="translate(0.501953 0.890625)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
              <div className='py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20'>
                <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex items-center justify-between'>
                  <div>Technology</div>
                  <div>iOS Developer</div>
                </div>
                <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex items-center justify-between'>
                  <div>Bangalore, India</div>
                  <div>
                    <button
                      className="p-1 md:p-2 rounded-full flex justify-center items-center cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #7811A5, #2E16BB)',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7078_269)">
                          <g clip-path="url(#clip1_7078_269)">
                            <g clip-path="url(#clip2_7078_269)">
                              <path d="M6.76651 12.0564H5.23412L5.25734 7.50565H0.869141V6.0197H5.25734L5.23412 1.49219H6.76651V6.0197H11.1547V7.50565H6.76651V12.0564Z" fill="white" />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_7078_269">
                            <rect className="transition-all duration-500" width="11" height="12.22" fill="white" transform="translate(0.5 0.890625)" />
                          </clipPath>
                          <clipPath id="clip1_7078_269">
                            <rect width="11" height="12.22" fill="white" transform="translate(0.5 0.890625)" />
                          </clipPath>
                          <clipPath id="clip2_7078_269">
                            <rect width="10.998" height="12.22" fill="white" transform="translate(0.501953 0.890625)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
              <div className='py-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20'>
                <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex items-center justify-between'>
                  <div>Technology</div>
                  <div>Full Stack Developer</div>
                </div>
                <div className='w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex items-center justify-between'>
                  <div>Bangalore, India</div>
                  <div>
                    <button
                      className="p-1 md:p-2 rounded-full flex justify-center items-center cursor-pointer"
                      style={{
                        background: 'linear-gradient(135deg, #7811A5, #2E16BB)',
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7078_269)">
                          <g clip-path="url(#clip1_7078_269)">
                            <g clip-path="url(#clip2_7078_269)">
                              <path d="M6.76651 12.0564H5.23412L5.25734 7.50565H0.869141V6.0197H5.25734L5.23412 1.49219H6.76651V6.0197H11.1547V7.50565H6.76651V12.0564Z" fill="white" />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_7078_269">
                            <rect className="transition-all duration-500" width="11" height="12.22" fill="white" transform="translate(0.5 0.890625)" />
                          </clipPath>
                          <clipPath id="clip1_7078_269">
                            <rect width="11" height="12.22" fill="white" transform="translate(0.5 0.890625)" />
                          </clipPath>
                          <clipPath id="clip2_7078_269">
                            <rect width="10.998" height="12.22" fill="white" transform="translate(0.501953 0.890625)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#6C6C6C] h-[1px] w-full"></div>
            </div>
          </section>

        </main>

      </main>
      <ReachUs />
      <Footer />
    </>

  )
}

export default Careersculture