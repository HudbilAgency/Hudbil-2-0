import React from 'react'
import { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const randomVideos = [
    "/LandingVideos/video1.mp4",
    "/LandingVideos/video2.mp4",
    "/LandingVideos/video3.mp4",
    "/LandingVideos/video4.mp4",
    "/LandingVideos/video5.mp4",
    "/LandingVideos/video6.mp4",
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
    { name: 'Home', link: '/' },
    { name: 'About us', link: '/about-us' },
    { name: 'Our Work', link: '/our-work' },
    { name: 'Services', link: '/our-services' },
    { name: 'Products', link: '/our-products' },
    { name: 'Insights', link: '/our-blogs' },
    { name: 'Talk to Ella', link: '/ai-ella' }
  ];

  const footerLinks = [
    {
      title: { name: 'Contact Us', url: '/contact-us' },
      items: [
        { name: 'Clients Support', url: '/client-support' },
        { name: 'Careers & Culture', url: '/about-us/career' },
        { name: 'Hudbil Tabloids', url: '/tabloids' }
      ]
    },
    {
      title: { name: 'Facebook', url: 'https://www.facebook.com/people/Hudbil/61550971184539/?mibextid=LQQJ4d' },
      items: [
        { name: 'Linkedin', url: 'https://www.linkedin.com/company/hudbil-private-limited/posts/?feedView=all' },
        { name: 'Instagram', url: 'https://www.instagram.com/hudbil_com?igsh=aTV3bnMxY3piOHlm' },
        { name: 'Behance', url: 'https://www.behance.net/hudbil' },
      ]
    }
  ];

  const customPaths = {
    'Hudbil Tabloids': 'hudbil-tabloids',
    'Careers & Culture': 'careers-culture',
    'Clients Support': 'clients-support',
    'Facebook': 'https://www.facebook.com',
    'Linkedin': 'https://www.linkedin.com',
    'Instagram': 'https://www.instagram.com'
  };

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
    setMenuIcon(false);
    document.getElementById('root').classList.add("noscroll");
  };

  const handleCloseslide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : 0);
    setMenuIcon(true);
    document.getElementById('root').classList.remove("noscroll");
  };

  const [menuIcon, setMenuIcon] = useState(true);

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

  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/") {
      setActiveItem("Home");
    } else if (pathname === "/about-us") {
      setActiveItem("About");
    }
    else if (pathname === "/our-work") {
      setActiveItem("Work");
    }
    else if (pathname === "/services") {
      setActiveItem("Services");
    }
    else if (pathname === "/products") {
      setActiveItem("Products");
    }
    else if (pathname === "/our-blogs") {
      setActiveItem("Insights");
    }
    else if (pathname === "/ai-ella") {
      setActiveItem("Ella");
    }
  }, [location.pathname]);

  const pathnameimg = location.pathname;

  useEffect(() => {
    document.body.style.overflow = menuIcon ? 'auto' : 'hidden';
  }, [menuIcon]);

  return (
    <nav>
      <section className="absolute z-[1000] bg-transparent w-full h-[100px]">
        <div className={`flex items-start justify-between ml-6 lg:ml-16 my-2`}>
          <button>
            {menuIcon ? (
              <div onClick={handleMenuslide} className='flex fixed items-center mt-5 gap-4 border-[#B9B9B97D] rounded-full bg-[#B9B9B97D] bg-opacity-50 py-2 pl-3 pr-6'>
                <div
                  className="p-1 md:p-2 rounded-full flex justify-center items-center cursor-pointer"
                  style={{
                    background: 'linear-gradient(180deg, #7811A5, #2E16BB)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
                <div className='text-white'>Menu</div>
              </div>
            ) : (
              <div onClick={handleCloseslide} className='flex fixed mt-5 items-center gap-4 border-[#B9B9B97D] rounded-full bg-[#B9B9B97D] bg-opacity-50 py-2 pl-3 pr-6'>
                <div
                  className="p-1 md:p-2 rounded-full flex justify-center items-center cursor-pointer"
                  style={{
                    background: 'linear-gradient(180deg, #7811A5, #2E16BB)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_7086_211)">
                      <g clip-path="url(#clip1_7086_211)">
                        <g clip-path="url(#clip2_7086_211)">
                          <path d="M13.182 11.9436L12.1223 13.0505L8.85107 9.8869L5.81659 13.0568L4.74319 12.0293L7.77766 8.85936L4.49108 5.74532L5.55074 4.63837L8.82127 7.76918L11.8557 4.59928L12.9291 5.62683L9.89467 8.79673L13.182 11.9436Z" fill="white" />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_7086_211">
                        <rect className="transition-all duration-500" width="11" height="12.22" fill="white" transform="translate(0.783203 8.75) rotate(-46.2504)" />
                      </clipPath>
                      <clipPath id="clip1_7086_211">
                        <rect width="11" height="12.22" fill="white" transform="translate(0.783203 8.75) rotate(-46.2504)" />
                      </clipPath>
                      <clipPath id="clip2_7086_211">
                        <rect width="10.998" height="12.22" fill="white" transform="translate(0.783203 8.75) rotate(-46.2504)" />
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className='text-white'>Close</div>
              </div>
            )}
          </button>
          <div>
            {pathnameimg === '/' || pathnameimg === "/ai-ella" ? (
              <img
                ref={birdRef}
                loading="lazy"
                src="/MainBirdImg.png"
                alt="hudbil-logo"
                className="w-[5rem] lg:w-[7rem] mr-6 lg:mr-16"
              />
            ) : (
              <div className="h-20 md:mt-1 flex mr-3 lg:mr-[50px] items-center justify-center overflow-hidden bg-no-repeat bg-cover bg-center">
                <img className="w-[6rem] sm:w-[8rem] md:w-[10rem]" src="/hudbil-logo-nav.gif" alt="hudbil-logo" />
              </div>

            )}
          </div>
        </div>
      </section>

      {pathnameimg !== '/' && (
        <div
          className={`fixed w-[100vw] inset-0 bg-black z-[900] duration-1000 hidden lg:block transition-all ease-in-out ${menuIcon ? "opacity-0 hidden pointer-events-none" : "opacity-50"
            }`}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-dvh z-[999] bg-black transition-transform duration-1000 ease-in-out 
    ${menuIcon ? 'translate-x-[-100%]' : 'translate-x-0'} w-[100vw] lg:w-[50vw]`}
      >
        <div className={`flex flex-col h-dvh w-[100vw] lg:w-[50vw]`}>
          <nav className="h-dvh flex flex-col items-start justify-between w-full font-bold text-white bg-black pt-[110px] pb-[25px] md:pb-[30px] xl:pb-[20px]">
            <ul className="mx-6 lg:mx-16 flex flex-col items-start gap-4 md:gap-6 lg:gap-2 2xl:gap-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-4xl 2xl:text-7xl hover:text-[#7811A5] transition-all duration-300 font-normal">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <footer className="w-5/6 md:w-3/5 lg:w-full lg:gap-20 2xl:gap-28 lg:justify-normal flex items-center justify-between px-6 lg:px-16">
              {footerLinks.map((column, index) => (
                <div key={index} className="flex flex-col items-start text-sm 2xl:text-base font-medium leading-none">
                  <Link className="hover:text-gray-500 transition-all duration-300" to={column.title.url} target={['Facebook'].includes(column.title.name) ? '_blank' : '_self'}
                    rel={['Facebook', 'Linkedin', 'Instagram', 'Behance'].includes(column.title.name) ? 'noopener noreferrer' : undefined}>
                    <h3>{column.title.name}</h3>
                  </Link>
                  <ul className="mt-4">
                    {column.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={itemIndex > 0 ? 'mt-4 hover:text-gray-500 transition-all duration-300' : 'hover:text-gray-500 transition-all duration-300'}>
                        <a
                          href={item.url}
                          target={['Linkedin', 'Instagram', 'Behance'].includes(item.name) ? '_blank' : '_self'}
                          rel={['Linkedin', 'Instagram', 'Behance'].includes(item.name) ? 'noopener noreferrer' : undefined}
                        >
                          {item.name}
                        </a>
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
