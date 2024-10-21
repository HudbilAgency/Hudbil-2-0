import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ReachUs from '../Components/ReachUs'
import { Link } from 'react-router-dom';

const Tabloids = () => {
    return (
        <>
            <Navbar />
            <main className='pt-[60px]'>
                <div className='font-normal text-4xl xl:text-[50px] py-16 px-6 md:px-16'>
                    Hudbil Tabloids
                </div>
                <section className='flex flex-col lg:flex-row items-start gap-16 pl-6 md:pl-16 lg:pl-0 pr-6 md:pr-16 w-full pb-20'>
                    <div className='flex items-center justify-center w-full lg:w-1/2 lg:hidden'>
                        <img className='w-full ' src="./tabloids.png" />
                    </div>
                    <div className='lg:flex hidden items-center justify-center w-full lg:w-1/2 bg-no-repeat bg-cover bg-center sticky top-0'>
                        <img className='w-full h-screen object-cover' src="./tabloids.png" />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='w-full bg-[#BDBBBB] h-[1px]'></div>
                        <div className='flex flex-col items-start gap-4 py-16'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-black rounded-full p-1'></div>
                                <div className='text-sm'>June 24, 2024</div>
                            </div>
                           <Link to={'/hudbil-tabloids/kalacode-investment'}> <div className='text-4xl font-normal leading-10 xl:w-2/3'>Kalacode Nears deal to raise 20 Millions By Pinenest Solutions India.</div></Link>
                        </div>
                        <div className='w-full bg-[#BDBBBB] h-[1px]'></div>
                        <div className='flex flex-col items-start gap-4 py-16'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-black rounded-full p-1'></div>
                                <div className='text-sm'>May 17, 2024</div>
                            </div>
                           <Link to={'/hudbil-tabloids/hudbil-ai-chatbot'}><div className='text-4xl font-normal leading-10 xl:w-2/3'>Hudbil has introduced a AI Chatbot
                           Talk to Ella - Check us out </div></Link>
                        </div>
                        <div className='w-full bg-[#BDBBBB] h-[1px]'></div>
                        <div className='flex flex-col items-start gap-4 py-16'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-black rounded-full p-1'></div>
                                <div className='text-sm'>May 2, 2024</div>
                            </div>
                            <Link to={'/hudbil-tabloids/coltfox-digital-marketing-agency'}><div className='text-4xl font-normal leading-10 xl:w-2/3'>Hudbil welcomes Coltfox of new hires; bolstering expertise across marketing segment</div></Link>
                        </div>
                        <div className='w-full bg-[#BDBBBB] h-[1px]'></div>
                        <div className='flex flex-col items-start gap-4 py-16'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-black rounded-full p-1'></div>
                                <div className='text-sm'>December 17, 2017</div>
                            </div>
                           <Link to={'/hudbil-tabloids/hudbil-start-up-india-awards'}><div className='text-4xl font-normal leading-10 xl:w-2/3'>Hudbil wins Start-up India Award Asia-Pacific Start-up India Awards 2017</div></Link>
                        </div>
                        <div className='w-full bg-[#BDBBBB] h-[1px]'></div>
                        <div className='flex flex-col items-start gap-4 py-16'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-black rounded-full p-1'></div>
                                <div className='text-sm'>October 15, 2017</div>
                            </div>
                            <Link to={'/hudbil-tabloids/website-design-agency'}><div className='text-4xl font-normal leading-10 xl:w-2/3'>Introducing The Early Web Design Days (1991-1994)</div></Link>
                        </div>
                        <div className='w-full bg-[#BDBBBB] h-[1px]'></div>
                        <div className='w-full bg-[#BDBBBB] h-[1px]'></div>
                        <div className='flex flex-col items-start gap-4 py-16'>
                            <div className='flex items-center gap-4'>
                                <div className='bg-black rounded-full p-1'></div>
                                <div className='text-sm'>October 15, 2017</div>
                            </div>
                            <Link to={'/hudbil-tabloids/evolution-of-web-development'}><div className='text-4xl font-normal leading-10 xl:w-2/3'>The Evolution of Web Development
                            (1995-2000)</div></Link>
                        </div>
                        <div className='w-full bg-[#BDBBBB] h-[1px]'></div>
                        <button className="button self-end flex flex-row justify-between px-12 py-3 mt-24 mb-2 mx-auto leading-none bg-black text-white gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-all duration-300">
                            <h1 className='text-base mt-1 font-arial'>Load More</h1>
                            <img src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                        </button>
                    </div>
                </section>
            </main>
            < ReachUs />
            <Footer />
        </>
    )
}

export default Tabloids