import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ReachUs from '../Components/ReachUs';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Loader from '../Components/Loader';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarousalImgBlogs from '../Components/CarousalImgBlogs'
import Snowfall from '../Components/Snowfall';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DotContainer = ({ index, currentIndex, handleDotClick }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [debouncedPos, setDebouncedPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const dotBorderRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedPos(cursorPos);
    }, 20);

    return () => {
      clearTimeout(handler);
    };
  }, [cursorPos]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  useEffect(() => {
    if (currentIndex === index && dotBorderRef.current) {
      gsap.to(dotBorderRef.current, {
        strokeDashoffset: 0,
        duration: 0.8,
        ease: "linear",
        repeat: 0,
        repeatDelay: 1,
      });
    } else {
      gsap.to(dotBorderRef.current, {
        strokeDashoffset: 47.1,
        duration: 0,
      });
    }
  }, [currentIndex, index]);

  return (
    <div
      className="dot-container w-9 h-9 cursor-effect cursor-pointer flex items-center justify-center relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleDotClick(index)}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={
          isHovering
            ? {
              position: "absolute",
              left: debouncedPos.x,
              top: debouncedPos.y,
              transform: "translate(-50%, -50%)",
              transition: "left 0.3s ease-out, top 0.3s ease-out",
            }
            : {}
        }
      >
        <circle
          ref={dotBorderRef}
          strokeDasharray="47.1"
          strokeDashoffset="47.1"
          stroke="white"
          strokeWidth="1"
          fill="none"
          className={`dot-border ${currentIndex === index ? "block" : "hidden"
            }`}
          cx="8"
          cy="8"
          r="7.5"
        />
        <circle className="dot" cx="8" cy="8" r="4" fill="white" />
      </svg>
    </div>
  );
};

const Home = () => {

  const randomVideos = [
    "/LandingVideos/video1.mp4",
    "/LandingVideos/video2.mp4",
    "/LandingVideos/video3.mp4",
    "/LandingVideos/video4.mp4",
    "/LandingVideos/video5.mp4",
    "/LandingVideos/video6.mp4",
    "/LandingVideos/video7.mp4",
    "/LandingVideos/video8.mp4",
  ];

  const initialIndex = parseInt(localStorage.getItem("currentVideoIndexHudbil"), 10) || 0;

  const [currentVideo, setCurrentVideo] = useState(randomVideos[initialIndex]);

  useEffect(() => {
    const nextIndex = (initialIndex + 1) % randomVideos.length;
    setCurrentVideo(randomVideos[initialIndex]);
    localStorage.setItem("currentVideoIndexHudbil", nextIndex);
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

  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
    setCurrentIndex(index);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    ref: sliderRef,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const stats = [
    { value: "100%", description: "We build collaborative partnerships that fuel your brand’s growth." },
    { value: "10Y", description: "High in success and collaborating with many brands across globally." },
    { value: "100%", description: "Crafting UX-first SaaS interfaces to transform your vertical software." },
    { value: "365D", description: "Designing and Developing B2B SaaS, AI, ML & software’s interfaces." }
  ];

  const services = [
    {
      image: "./OurServicesImg/Creative Designing-inside.jpg",
      title: "Creative Designing",
      description: "Our scientifically proven UX design process means you can simultaneously release products users love and check off business goals.",
      url: "/services/creative-designing-agency"
    },
    {
      image: "./OurServicesImg/Development-inside.jpg",
      title: "Be-Spoken Development",
      description: "We understanding your unique business challenge, creating flexible software roadmaps, and developing secure, scalable solutions that deliver ROI.",
      url: "/services/development-agency"
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
    { name: 'Insights', link: '/our-blogs' },
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
  const birdRef = useRef(null);

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

    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    if (mediaQuery.matches) {

      gsap.fromTo(sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: '5% top',
            scrub: true

          }
        }
      );
    }
  }, []);

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

  const gridImages = [
    { src: '/gridimg1.png', url: 'https://www.astridmottes.com' },
    { src: '/gridimg2.png', url: 'https://www.theaid.studio' },
    { src: '/gridimg3.png', url: 'https://ambiq.com' },
    { src: '/gridimg4.png', url: 'https://besmoke.com' },
    { src: '/gridimg5.png', url: 'https://chantelle.com/fr' },
    { src: '/gridimg6.png', url: 'https://idyllic.co.nz/' },
    { src: '/gridimg7.png', url: 'https://the-shirt.bymatthew.com' },
    { src: '/gridimg8.png', url: 'https://orizon.group' },
    { src: '/gridimg9.png', url: 'https://www.jefuae.com' },
    { src: '/gridimg10.png', url: 'https://www.infotik.co/' },
    { src: '/gridimg11.png', url: 'https://nodcoding.com' },
    { src: '/gridimg12.png', url: 'https://www.spatialinnovation.co.uk' },
  ];

  const OurServices = [
    {
      title: "Cloud Solutions",
      description: "Adopt scalable cloud solutions to improve operational efficiency, enabling flexible and secure cloud-based business operations.",
      path: "/services/cloud-solutions",
    },
    {
      title: "Blockchain",
      description: "Implement secure blockchain solutions to enhance data integrity and transparency, streamlining operations for your business.",
      path: "/services/blockchain",
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage AI and machine learning services to drive innovation and optimize business processes with advanced technologies.",
      path: "/services/ai-ml",
    },
    {
      title: "Mobile App Development",
      description: "Create custom mobile applications with innovative designs that provide seamless user experiences across all devices and platforms.",
      path: "/services/mobile-app-development",
    },
    {
      title: "Website Development",
      description: "Develop scalable web solutions and high-performance websites tailored to your business needs, ensuring robust functionality.",
      path: "/services/website-development",
    },
    {
      title: "UI/UX/CX Design",
      description: "Deliver exceptional UI/UX design services and customer experiences through intuitive interfaces that enhance digital engagement.",
      path: "/services/ui-ux-cx-design",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Hudbil : Creative Design & Development Agency | Innovative Solutions for Your Business</title>
        <meta name="description" content="Are you looking for a most trusted award winning UI/UX Desgining and Website, Mobile application development Company In Bangalore Karnataka,then you are at the right place. We offer affordable UI/UX & Complete Software developement services in Bangalore India for all brands. Our team of consultants in bangalore will help to promote the business, brand, build customer loyalty, and increase online presence. To get free website site analysis call +91 8884409369."></meta>
        <meta property="og:url" content="https://www.hudbil.com/"></meta>
        <meta name="keywords" content="UI/UX Designing Company in Bangalore, Website Development Agency in Bangalore,Mobile Application Development Company in Bangalore, UI/UX for mobile application Agency in Bangalore, branding designing Company in Bangalore, website designing Company in Bangalore, UI UX development Company in Bangalore, Web Design Company in Bangalore"></meta>
        <meta name="og:description" content="Transform your vision into reality with our expert design and development services. We specialize in creating stunning websites, engaging apps, and impactful branding solutions tailored to your business needs."></meta>
        <meta name="og:site_name" content="UI/UX Designing Company in Bangalore India | Website Development Agency in Bangalore | Top 10 Website Developement Agencies in Bangalore Review | Branding and designing Agency | Software development Agency"></meta>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3795MKLFX0"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3795MKLFX0');
          `}
        </script>
      </Helmet>

      <div className="bg-black">
        <Loader onLoadingComplete={handleLoadingComplete} />

        <Navbar
          menuIcon={menuIcon}
          handleMenuslide={handleMenuslide}
          handleCloseslide={handleCloseslide}
          menuItems={menuItems}
          footerLinks={footerLinks}
          birdRef={birdRef}
        />

        <div className="flex flex-col lg:flex-row bg-black">
          <div className="w-[50vw] h-[100%] hidden lg:block box2 -mt-[100vh] bg-no-repeat bg-cover bg-center sticky top-0 z-[999]">

            <video
              src={currentVideo}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-[50vw] h-[100vh]"
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>

          <div className="w-full block lg:hidden box2 -mt-[0vh] bg-no-repeat bg-cover bg-center sticky top-0">

            <video
              src={currentVideo}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-[100vh]"
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>

          <section className='-mt-[30vh] lg:-mt-[0vh] box3 justify-end items-end w-full lg:w-[50vw] flex-col '>
            <div className="relative w-full h-screen hidden lg:block overflow-hidden">
              {/* <Snowfall /> */}
              <div className="flex flex-col relative h-full justify-center items-center w-full">
                <div className="w-full">
                  <video
                    src="./hudbil-mainlogo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full"
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <source src="./hudbil-mainlogo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <button onClick={handleScroll} className="absolute bottom-8">
                  <img
                    ref={imgRef}
                    loading="lazy"
                    src="./ButtonDownArrowImg.png"
                    alt="Down arrow"
                    className="w-16 rounded-full"
                    onMouseEnter={() => {
                      gsap.fromTo(
                        imgRef.current,
                        { rotation: -5 },
                        {
                          rotation: 5,
                          yoyo: true,
                          ease: "power1.inOut",
                          duration: 0.1,
                          repeat: -1,
                        }
                      );
                    }}
                    onMouseLeave={() => {
                      gsap.killTweensOf(imgRef.current);
                      gsap.set(imgRef.current, { rotation: "0" });
                    }}
                  />
                </button>
              </div>
            </div>
            <section className="w-full lg:w-[50vw] bg-white" ref={sectionRef} >
              <div className="w-full">
                <div className='mx-6 lg:mx-8'>
                  <div className='pt-28 pb-12'>
                    <h1 ref={secondsectionRef} className="text-[48px] w-full lg:w-[83%] leading-tight text-neutral-950  max-md:text-[2.25rem]">
                      Merging Artistry with Innovation. <br className='hidden 2xl:block' />
                      DESIGN + DEVELOPMENT company, turning your vision into cutting-edge technology to elevate your brand.
                    </h1>
                  </div>
                  <hr className="w-full h-px border border-gray-400 border-solid" />
                  <div className="mt-16 mb-12 w-full">
                    <div className="flex flex-col w-full items-start">
                      <div className="flex w-fit">
                        <div className="flex gap-5 items-start text-base tracking-wider leading-none text-neutral-950 max-md:mt-10">
                          <div className="flex shrink-0 self-stretch mt-[10px] w-3 h-3 bg-[#7811A5] rounded-[1000px]" />
                          <div className="my-auto w-fit text-[#7811A5] text-2xl">We work with B2B & B2C clients worldwide.</div>
                        </div>
                      </div>

                      <div className='my-16 mx-auto w-fit'>

                        <div className="grid grid-cols-2 grid-rows-6 sm:grid-cols-3 sm:grid-rows-4 lg:grid-cols-2 lg:grid-rows-6 xl:grid-cols-3 xl:grid-rows-4 gap-[1px] bg-[#D9CEDD] border border-[#D9CEDD]">
                          {gridImages.map(({ src, url }, index) => (
                            <a
                              key={index}
                              href={url}
                              target='_blank'
                              className="group relative flex items-center justify-center max-md:w-[140px] max-md:h-[140px] md:w-[220px] md:h-[220px] xl:w-[200px] xl:h-[200px] bg-white transition-all duration-500"
                            >
                              <img
                                src={src}
                                alt={`Placeholder ${index + 1}`}
                                className="max-w-[60%] max-h-[50%] grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100 transition-all duration-500 z-10"
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-[#7811A5] to-[#2E063F] opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="w-fit ml-auto">
                        <Link to="/our-work">
                          <button className="button flex flex-row items-center gap-4 px-12 py-3 text-base leading-none text-white bg-black rounded-[1000px] max-md:px-5 hover:bg-[#7811A5] transition-all duration-300">
                            <h1 className='text-base '>Learn more</h1>
                            <img ref={buttonImgRef} src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr className="shrink-0 w-full h-px border border-gray-400 border-solid" />
                  <div className="flex gap-5 items-center mt-16 text-base tracking-wider leading-none text-neutral-950">
                    <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-[#6A13AA] rounded-[1000px]" />
                    <div className="self-stretch  text-[#7811A5] text-2xl  my-auto w-full">We are good at what we do</div>
                  </div>
                  <p className="mt-16 text-[24px]  font-thin  leading-8 text-neutral-950 w-full lg:w-4/5">
                    We are your technology partners, committed to helping you create products and services that make a lasting impact on millions of lives. Our pragmatic Design + Development services will transform your brand into lead magnet !
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-28 w-full max-md:mt-20">
                <div className="mx-6 lg:mx-8">
                  <div className="flex  gap-5 max-md:flex-col">
                    {stats.slice(0, 2).map((stat, index) => (
                      <div key={index} className={`flex flex-col ${index === 0 ? 'w-[50%]' : 'w-[45%]'} max-md:ml-0 max-md:w-full`}>
                        <div className="flex flex-col grow items-center text-neutral-950 max-md:mt-10">
                          <div className="text-7xl font-bold  tracking-normal leading-none max-md:text-4xl">{stat.value}</div>
                          <div className="mt-5 w-2/3   text-lg tracking-wider leading-6 text-center">{stat.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-20 w-full max-md:mt-10">
                  <div className="mx-6 lg:mx-8">
                    <div className="flex gap-5 max-md:flex-col">
                      {stats.slice(2).map((stat, index) => (
                        <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                          <div className="flex flex-col items-center text-center text-neutral-950 max-md:mt-10">
                            <div className="text-7xl  font-bold tracking-normal leading-none max-md:text-4xl">{stat.value}</div>
                            <div className="mt-5 w-2/3  text-lg tracking-wider leading-6 text-center">{stat.description}</div>
                          </div>
                        </div>
                      ))}
                    </div></div>
                </div>
                <Link to="/about-us" className="my-12 w-fit ml-auto mr-6 lg:mr-8">
                  <button className="button self-end flex flex-row justify-between px-12 py-3 leading-none bg-black text-white gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-all duration-300">
                    <h1 className='text-base mt-1 '>Why work with us</h1>
                    <img ref={buttonImgRef} src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                  </button>
                </Link>
              </div>

              <div className='mx-6 lg:mx-8'>
                <div className="mb-16 max-w-full h-px border border-solid border-gray-400 w-full" />
                <h2 className="self-start text-[25px]  tracking-wide text-[#7811A5]">What we do</h2>
                <div className='flex flex-col md:flex-row lg:flex-col 2xl:flex-row mt-12 md:items-end justify-between max-w-full w-[780px]'>
                  <p className="w-full md:w-2/3 lg:w-full 2xl:w-2/3 text-[24px] tracking-wider leading-8 text-neutral-950 max-md:mt-10  max-md:max-w-full">
                    Discover how Hudbil brings your vision to life with cutting-edge solutions. Our approach is designed to fuel growth and innovation at your fingertips – We offer a comprehensive range of services designed to drive your business forward. Allow us to handle the complexities of technology, so you can stay focused on driving your vision forward and achieving your long-term objectives.
                  </p>

                  <p className="w-1/3 ml-auto md:text-end text-xl tracking-wider text-[#7811A5] max-md:mt-12 lg:mt-12 2xl:mt-0  max-md:max-w-full">
                    <Link to="/our-services" className="w-fit hover:text-gray-500 transition-all duration-300">Read now</Link>
                  </p>
                </div>
                <div className="mt-12 mb-8 max-w-full h-px border border-solid border-gray-400 w-full" />
              </div>

              <div className='py-12 bg-white w-full flex flex-col items-center relative px-6 lg:px-0'>
                <h2 className="text-6xl font-arial leading-none text-center max-md:text-4xl">Our Services</h2>
              </div>

              <div className="h-[320px] w-full bg-white">

              </div>

              <div className='card-container bg-white flex flex-col items-center gap-40 w-full'>
                {OurServices.map((service, index) => (
                  <div key={index} className='card flex flex-col items-center sticky top-1/2 w-full transform -translate-y-1/2'>
                    <div className="flex transform -rotate-3 flex-col items-center w-4/5 md:w-3/4 2xl:w-3/5 rounded-[2rem]" style={{ background: 'linear-gradient(180deg, #7811A5, #2E16BB)', transform: `rotate(${-[3, 4, 5, 6, 7, 8][index % 6]}deg)`, }}>
                      <div className='text-white text-center mx-6 lg:mx-8 mt-10 mb-12 md:mt-12 md:mb-16 text-3xl md:text-5xl tracking-[0.86px]'>{service.title}</div>
                      <div className='flex flex-col items-center bg-[#F8E8FF] rounded-[2rem] text-lg md:text-2xl text-[#7811A5] text-center w-[90%] tracking-[0.86px] pt-12 pb-8 mb-6'>
                        <div className='w-4/5'>{service.description}</div>
                        <Link to={service.path} className="mt-12 md:mt-16">
                          <button className="border px-6 py-2 rounded-[1000px] border-[#7811A5] text-[#7811A5] hover:text-white  hover:bg-[#7811A5] text-sm md:text-base transition-all duration-300">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className='py-12 bg-black overflow-hidden w-full'>
                <h2 className="text-6xl font-arial leading-none text-center text-[#7811A5] max-md:text-4xl">Our Brands</h2>
                <div className="overflow-hidden w-full">
                  <Slider {...settings}>

                    <div key={0} className="flex flex-col our-brands-section">
                      <div className="flex overflow-hidden relative flex-col mt-14 max-w-full text-xs font-extralight tracking-wider text-center aspect-[0.866] text-teal-950 w-[304px] max-md:mt-10">
                        <div className="flex overflow-hidden relative items-center justify-center flex-col group px-11 py-40 bg-white max-md:px-5 max-md:py-24 ">
                          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7281482c86da59f833039df7a3ec6c277db84f6759a3e18d14449941f4081705?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="Brand logo" className="filter grayscale group-hover:grayscale-0 transition-all duration-300 object-contain lg:-mt-4 aspect-[2.87] w-[200px] sm:w-[284px]" />
                          <h1 className='self-center mt-5 mb-0  max-md:mb-2.5 text-black font-semibold'>Impression At Your Fingertips</h1>
                        </div>
                      </div>
                      <h3
                        ref={fadeInRef}
                        className="self-center mt-20 px-6 w-full md:w-[70%] text-[25px]   tracking-normal text-center text-white leading-[50px] max-md:mt-10 max-md:max-w-full max-md:text-3xl max-md:leading-snug"
                      >
                        We drive your business success value through tailor-made digital marketing solutions.
                      </h3>
                      <Link to="https://coltfox.com/" target='blank' className="mt-24">
                        <button className="button self-end flex flex-row justify-between hover:text-white px-16 py-4 mx-auto leading-none bg-white text-black gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-all duration-300">
                          <h1 className='text-xl mt-1 '>Visit Coltfox</h1>
                          <img ref={buttonImgRef} src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                        </button>
                      </Link>
                    </div>

                    <div key={1} className="flex flex-col our-brands-section">
                      <div className="flex overflow-hidden relative flex-col mt-14 max-w-full text-xs font-extralight tracking-wider text-center aspect-[0.866] text-teal-950 w-[304px] max-md:mt-10">
                        <div className="flex group overflow-hidden relative items-center justify-center flex-col px-11 py-40 bg-white max-md:px-5 max-md:py-24 ">
                          <img loading="lazy" src="./OurBrandsImg/KalacodeBrandLogoImg.png" alt="Brand logo" className="filter grayscale group-hover:grayscale-0 transition-all duration-300 lg:-mt-4 object-contain aspect-[2.87] w-[200px] sm:w-[284px]" />
                          <h1 className='self-center mt-5 font-xl mb-0  max-md:mb-2.5 text-black font-semibold'>Power At Your Fingertips</h1>
                        </div>
                      </div>
                      <h3
                        className="self-center mt-20 px-6 w-full md:w-[70%] text-[25px] tracking-normal text-center text-white leading-[50px] max-md:mt-10 max-md:max-w-full max-md:text-3xl max-md:leading-snug"
                      >
                        We drive your product success in the future with our AI, AR & VR development solutions.
                      </h3>
                      <Link to="https://kalacode.com/" target='blank' className="mt-24">
                        <button className="button flex flex-row justify-between px-16 py-4 mx-auto  leading-none bg-white text-black gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] hover:text-white transition-all duration-300">
                          <h1 className='text-xl mt-1 '>Visit Kalacode</h1>
                          <img ref={buttonImgRef} src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                        </button>
                      </Link>
                    </div>

                    <div key={2} className="flex flex-col our-brands-section">
                      <div className="flex overflow-hidden relative flex-col mt-14 max-w-full text-xs font-extralight tracking-wider text-center aspect-[0.866] text-teal-950 w-[304px] max-md:mt-10">
                        <div className="flex group overflow-hidden relative items-center justify-center flex-col px-11 py-40 bg-white max-md:px-5 max-md:py-24 ">
                          <img loading="lazy" src="./OurBrandsImg/InfotekBrandLogoImg.png" alt="Brand logo" className="filter grayscale group-hover:grayscale-0 transition-all lg:-mt-4 duration-300 object-contain aspect-[2.87] w-[200px] sm:w-[284px]" />
                          <h1 className='self-center mt-5 font-xl mb-0  max-md:mb-2.5 text-black font-semibold'>Information At Your Fingertips</h1>
                        </div>
                      </div>
                      <h3
                        className="self-center mt-20 px-6 w-full md:w-[70%] text-[25px] tracking-normal text-center text-white leading-[50px] max-md:mt-10 max-md:max-w-full max-md:text-3xl max-md:leading-snug"
                      >
                        At InfoTik we are committed to helps users learn and grow in meaningful ways.
                      </h3>
                      <Link to="https://info-tik-redirect.vercel.app/" target='blank' className="mt-24">
                        <button className="button flex flex-row hover:text-white justify-between px-16 py-4 mx-auto  leading-none bg-white text-black gap-8 rounded-[1000px] max-md:px-5  hover:bg-[#7811A5] transition-all duration-300">
                          <h1 className='text-xl mt-1 '>Download app</h1>
                          <img ref={buttonImgRef} src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                        </button>
                      </Link>
                    </div>
                  </Slider>
                </div>
                <div className="pt-12 lg:pt-16">
                  <div className="flex justify-center items-center">
                    <div className="flex cursor-pointer cursor-effect">
                      {[0, 1, 2].map((key) => (
                        <DotContainer
                          key={key}
                          index={key}
                          currentIndex={currentIndex}
                          handleDotClick={handleDotClick}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* What we do section */}

              <div className='overflow-hidden w-full'>

                <section className='mx-6 lg:mx-8'>
                  <div className="flex gap-5 items-start self-start mt-20 leading-none text-neutral-950">
                    <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-[#7811A5] rounded-[1000px]" />
                    <div className="self-stretch text-[25px] text-[#7811A5] my-auto">Our blogs</div>
                  </div>
                </section>
                <CarousalImgBlogs />
                <a href="/our-blogs" className="button w-fit self-end flex flex-row justify-between px-12 py-3 ml-auto mr-6 lg:mr-8 my-12 leading-none bg-black text-white gap-8 rounded-[1000px] max-md:px-5   hover:bg-[#7811A5] transition-all duration-300">
                  <h1 className='text-base mt-1 '>View all insight</h1>
                  <img ref={buttonImgRef} src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                </a>

                <div ref={tabloidRef} className="flex overflow-hidden flex-col bg-black items-center px-6 md:px-20 py-12 mt-12 max-w-full w-full max-md:mt-10">
                  <div className="flex flex-col items-center max-w-full w-[534px]">
                    <h2 className="text-5xl  leading-none text-center text-white max-md:text-4xl">hudbil Tabloids</h2>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/febb23b80aaedca3ecd1e75ad17e8156c707e8212bf67654390601ebe28c8047?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="Hudbil Tabloids" className="filter grayscale hover:grayscale-0 transition-all duration-300 object-contain mt-16 max-w-full aspect-[0.88] w-[379px] max-md:mt-10 " />
                    <h3 className="self-stretch mt-16 text-4xl  text-center text-white leading-[50px] max-md:mt-10 max-md:max-w-full max-sm:text-3xl max-md:leading-[54px]" ref={fadeInRef2}>
                      Big idea, Kalacode is <br /> beating heart of <br /> Hudbil's, a new venture <br /> agency like no other in India.
                    </h3>
                    <Link to={'/tabloids'} className="mt-20 mr-6 md:mr-8">
                      <button className="button flex flex-row hover:text-white justify-between px-20 py-4 leading-none bg-white text-black self-center items-center gap-8 rounded-[1000px] max-md:px-5   hover:bg-[#7811A5] transition-colors duration-300">
                        <h1 className='text-base mt-1 '>Learn more</h1>
                        <img ref={buttonImgRef} src="./ButtonPlusIconImg.png" alt="button" className='my-auto w-[2rem]' />
                      </button>
                    </Link>

                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
        <ReachUs />
        <Footer />
      </div>
    </>
  )
}

export default Home