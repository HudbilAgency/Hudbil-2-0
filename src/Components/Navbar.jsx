import React from 'react'
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const Navbar = () => {

  const randomVideos = [
    "https://videos.pexels.com/video-files/13710678/13710678-hd_1920_1080_60fps.mp4",
    "https://videos.pexels.com/video-files/6689587/6689587-uhd_2560_1440_25fps.mp4",
    "./LandingVIdeos/Video-3.mp4",
    "https://videos.pexels.com/video-files/9558221/9558221-uhd_2732_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/6634798/6634798-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/6470618/6470618-uhd_2560_1440_24fps.mp4"
   ];
 
   const [currentVideo, setCurrentVideo] = useState(randomVideos[0]);
   const [previousIndex, setPreviousIndex] = useState(null);
 
 
   const pickRandomVideo = () => {
     let randomIndex;
     do {
       randomIndex = Math.floor(Math.random() * randomVideos.length);
     } while (randomIndex === previousIndex);
 
     setCurrentVideo(randomVideos[randomIndex]);
     setPreviousIndex(randomIndex);
   };
 
   useEffect(() => {
     pickRandomVideo();
     console.error();
   }, []);
 
 
   const [loading, setLoading] = useState(true);
 
   const handleLoadingComplete = () => {
     setLoading(false);
   };
 
   useEffect(() => {
     const timer = setTimeout(() => {
       handleLoadingComplete();
     }, 2000);
 
     return () => clearTimeout(timer);
   }, []);
 
   const clients = [
     "Jef Techno", "Infotik", "Bluemail", "Finesoft", "Valleycovers",
     "Capixai", "Shimmer", "Nettango", "Monstrack", "Sky",
     "Kathmandu", "LMG", "DSG", "Spring", "Collabera", "Ezetap"
   ];
 
   const stats = [
     { value: "200%", description: "Demand in Designing and Development hunger for brands transformation." },
     { value: "10Y", description: "High in success and collaborating with many brands around world." },
     { value: "100%", description: "AI & ML Designing and Development through creative coding." },
     { value: "365D", description: "Smartly, Interaction with customers around the world." }
   ];
 
   const services = [
     {
       image: "./OurServicesImg/Creative Designing-inside.jpg",
       title: "Creative Designing",
       description: "Our scientifically proven UX design process means you can simultaneously release products users love and check off business goals."
     },
     {
       image: "./OurServicesImg/Development-inside.jpg",
       title: "Be-Spoken Development",
       description: "We understanding your unique business challenge, creating flexible software roadmaps, and developing secure, scalable solutions that deliver ROI."
     }
   ];
 
   const blogs = [
     {
       image: './OurBlogsImg/UX-Research-Blog 2.png',
       title: 'The Ultimate Guide for UX Research'
     },
     {
       image: './OurBlogsImg/The-Evolution-Of-The Graphic-Design-home 1.png',
       title: 'The Evolution Of The Graphic Design'
     },
   ];
 
 
   const menuItems = [
     { name: 'About us', link: '/about-us' },
     { name: 'Our Work', link: '/our-work' },
     { name: 'Services', link: '/services' },
     { name: 'Products', link: '/products' },
     { name: 'Insights', link: '/insights' },
     { name: 'Talk to Ella', link: '/TalkToElla' }
   ];
 
   const footerLinks = [
     {
       title: 'Portfolio',
       items: ['Hudbil Tabloids', 'Careers & Culture', 'Clients Support']
     },
     {
       title: 'Contact Us',
       items: ['Facebook', 'Linkedin', 'Instagram']
     }
   ];
 
 
   gsap.registerPlugin(ScrollTrigger);
 
   const sectionRef = useRef(null);
   const secondsectionRef = useRef(null);
   const animationRef = useRef(null);
   const tabloidRef = useRef(null);
   const fadeInRef = useRef(null);
   const fadeInRef2 = useRef(null);
   const stickRef = useRef(null);
   const imgRef = useRef(null);
   const birdRef = useRef(null)
   const carouselItem1 = useRef(null);
   const carouselItem2 = useRef(null);
   useEffect(() => {
     gsap.registerPlugin(ScrollTrigger);
 
     const tl = gsap.timeline({
       scrollTrigger: {
         trigger: animationRef.current,
         start: "40% center",
         end: "bottom center",
         toggleActions: "play none none reverse",
 
       },
     });
 
     tl.to(
       carouselItem2.current,
       { x: "-100%", ease: "power3.inOut" }, "slide"
     );
 
     tl.to(
       carouselItem1.current,
       { x: "-100%", ease: "power3.inOut" }, "slide"
     );
 
   }, []);
   useEffect(() => {
     gsap.fromTo(
       stickRef.current,
       { position: 'sticky', top: 0 },
       {
         position: 'fixed',
         scrollTrigger: {
           trigger: stickRef.current,
           start: 'top top',
           end: '+=150vh ',
           scrub: true,
         },
       }
     );
   }, []);
 
   {
     useEffect(() => {
       gsap.fromTo(
         fadeInRef.current,
         { opacity: 0 },
         {
           opacity: 1,
           duration: 0.5,
           scrollTrigger: {
             trigger: fadeInRef.current,
             start: "top 80%",
             end: "bottom 70%",
           },
         }
       );
     }, [])
   }
 
   {
     useEffect(() => {
       gsap.fromTo(
         fadeInRef2.current,
         { opacity: 0 },
         {
           opacity: 1,
           duration: 0.5,
           scrollTrigger: {
             trigger: fadeInRef2.current,
             start: "top 80%",
             end: "bottom 70%",
           },
         }
       );
     }, [])
   }
 
   const handleScroll = () => {
     if (sectionRef.current) {
       sectionRef.current.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   useEffect(() => {
 
     gsap.fromTo(sectionRef.current,
       { backgroundColor: 'black' },
       {
         backgroundColor: 'white',
         opacity: 1,
         scrollTrigger: {
           trigger: sectionRef.current,
           start: 'top 40%',
           end: '5% top',
           scrub: true
 
         }
       }
     );
   }
     , []);
 
   {
     useEffect(() => {
 
       gsap.fromTo(
         animationRef.current,
         { scale: .7, opacity: 0 },
         {
           scale: 1,
           opacity: 1,
           scrollTrigger: {
             trigger: sectionRef.current,
             start: "10% -100%",
 
           },
         }
       );
 
     }, [])
   }
   {
     useEffect(() => {
 
       gsap.fromTo(
         tabloidRef.current,
         { scale: .7, opacity: 0 },
         {
           scale: 1,
           opacity: 1,
           scrollTrigger: {
             trigger: tabloidRef.current,
             start: "-90% 10%",
 
 
           },
         }
       );
 
     }, [])
   }
 
 
   const [currentSlide, setCurrentSlide] = useState(0);
 
 
   useEffect(() => {
 
 
     gsap.to(".box2", {
       x: `${currentSlide * 50}vw`,
       duration: .8,
       ease: "power2.inOut"
 
     });
     gsap.to(".box3", {
       x: `${currentSlide * 50}vw`,
       duration: .8,
       ease: "power2.inOut"
 
     },);
   }, [currentSlide]);
 
 
   useEffect(() => {
     if (currentSlide === 0) {
       gsap.to(".menu-button", {
         opacity: 0,
         duration: 0.3,
         ease: "power2.inOut",
         onComplete: () => {
           gsap.set(".menu-button", { display: "none" });
         }
       });
       gsap.to(".close-button", {
         opacity: 1,
         display: "block",
         duration: 0.3,
         ease: "power2.inOut"
       });
     } else {
       gsap.to(".close-button", {
         opacity: 0,
         duration: 0.3,
         ease: "power2.inOut",
         onComplete: () => {
           gsap.set(".close-button", { display: "none" });
         }
       });
       gsap.to(".menu-button", {
         opacity: 1,
         display: "block",
         duration: 0.3,
         ease: "power2.inOut"
       });
     }
   }, [currentSlide]);
 
   const handleMenuslide = () => {
     setCurrentSlide(currentSlide === 0 ? 1 : 0);
     setMenuIcon(false)
   };
 
   const handleCloseslide = () => {
     setCurrentSlide(currentSlide === 0 ? 1 : 0);
     setMenuIcon(true)
   };
 
   const [menuIcon, setMenuIcon] = useState(true)
 
   useEffect(() => {
 
     const animation = gsap.fromTo(birdRef.current,
       { rotation: 5 },
       {
         rotation: -5,
         yoyo: true,
         ease: "power1.inOut",
         duration: 0.6,
         repeat: -1
       }
     );
 
     // Cleanup function to stop the animation if needed
 
   }, []);
 
   const buttonImgRef = useRef(null);
 
   const buttonRefs = useRef([]);
 
   useEffect(() => {
     const buttons = document.querySelectorAll('.button');
     buttons.forEach((button, index) => {
       const img = button.querySelector('img');
       if (img) {
         buttonRefs.current[index] = img;
       }
     });
 
     buttons.forEach((button, index) => {
       button.addEventListener('mouseenter', () => {
         if (buttonRefs.current[index]) {
           gsap.fromTo(buttonRefs.current[index],
             { rotation: -5 },
             {
               rotation: 5,
               yoyo: true,
               ease: "power1.inOut",
               duration: 0.1,
               repeat: -1
             }
           );
         }
       });
 
       button.addEventListener('mouseleave', () => {
         if (buttonRefs.current[index]) {
           gsap.killTweensOf(buttonRefs.current[index]);
           gsap.set(buttonRefs.current[index], { rotation: 0 });
         }
       });
     });
   }, []);

  return (
    <nav>
      <section className="absolute z-[1000] bg-transparent w-full">
        <div className='flex justify-between items-center mx-4 lg:mx-20'>
          <button>
            {menuIcon ? (
              <img
                onClick={handleMenuslide}
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6bbf331-ab16-4fef-8064-4b072c7d5894?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                alt="Decorative circular image"
                className="object-contain mb-0 max-w-full -mt-4 fixed aspect-[2.34] bg-zinc-400 bg-opacity-50 rounded-[1000px] w-[7rem] lg:w-[8rem] max-md:mb-2.5"
                loading="lazy"
              />
            ) : (
              <img
                onClick={handleCloseslide}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/87266ae9-db86-4982-a442-a5fb555776bf?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244"
                alt="Circular logo"
                className="object-contain mb-0 max-w-full -mt-4 fixed aspect-[2.34] bg-zinc-400 bg-opacity-50 rounded-[1000px] w-[7rem] lg:w-[8rem] max-md:mb-2.5"
              />
            )}
          </button>
          <div className="flex items-center">
            {/* Additional content can go here if needed */}
          </div>
          <img
            ref={birdRef}
            loading="lazy"
            src="./MainBirdImg.png"
            alt=""
            className="object-contain max-w-full mt-4 aspect-[0.95] w-[5rem] lg:w-[7rem]"
          />
        </div>
      </section>
      <div
        className={`w-[50vw] h-[100vh] slider bg-black sticky top-0 transition-transform duration-1000 ease-in-out ${menuIcon ? '-translate-x-full' : 'translate-x-0'}`}
        onTransitionEnd={() => {
          document.body.style.overflow = menuIcon ? 'auto' : 'hidden';
        }}
      >
        <div className="flex flex-col w-[50vw] max-md:ml-0 max-md:w-full">
          <nav className="flex  sticky top-0 overflow-hidden flex-col items-start px-16 h-screen mx-auto w-full font-bold tracking-widest text-white bg-black max-md:px-5 max-md:max-w-full">
            <ul className="mt-40 max-md:mt-10 ml-4">
              <li className="mt-8 first:mt-0">
                <a href="#home" className="text-[60px] text-purple-700 font-arial font-extralight leading-none max-md:text-4xl">
                  Home
                </a>
              </li>
              {menuItems.map((item, index) => (
                <li key={index} className="mt-6 first:mt-0">
                  <a
                    href={item.link} // Dynamically adding the link
                    className="text-[60px] hover:text-purple-700 font-arial font-extralight leading-none max-md:text-4xl"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <footer className="flex gap-5 justify-between mt-16 max-w-full tracking-wider max-md:mt-10">
              {footerLinks.map((column, index) => (
                <div key={index} className="flex ml-5 flex-col items-start text-base font-arial font-medium leading-none">
                  <h3>{column.title}</h3>
                  <ul className="mt-6">
                    {column.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={itemIndex > 0 ? "mt-6" : ""}>
                        <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </footer>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
