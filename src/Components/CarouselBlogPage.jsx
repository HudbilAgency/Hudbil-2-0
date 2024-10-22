import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import classNames from "classnames";

const images = [
  {
    src: "/BlogPageImg/bp-21.png",
    alt: "Blog-1",
    content: "The Ultimate Guide for UX Research",
    routepath: "/blogpage-1",
  },
  {
    src: "/BlogPageImg/bp-22.png",
    alt: "Blog-2",
    content: "The Evolution Of The Graphic Design",
    routepath: "/blogpage-2",
  },
  {
    src: "/BlogPageImg/bp-23.png",
    alt: "Blog-3",
    content: "Brand’s identity design ascepts in brief",
    routepath: "/blogpage-3",
  },
  {
    src: "/BlogPageImg/bp-24.png",
    alt: "Blog-4",
    content: "Business firm suffer because of not finding",
    routepath: "/blogpage-4",
  },
  {
    src: "/BlogPageImg/bp-24.png",
    alt: "Blog-5",
    content: "User Experience Design and its Importance ..",
    routepath: "/blogpage-5",
  }
];

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

function CarouselBlogPage() {
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
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    ref: sliderRef,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="overflow-hidden w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className={classNames(
                "px-6 transition-all duration-500 ease-in-out",
                {
                  "slide-small": index % 2 === 0,
                  "slide-large": index % 2 !== 0,
                  "highlighted-slide":
                    (currentIndex + 1) % images.length === index,
                  "slick-slide":
                    (currentIndex + 1) % images.length === index,
                }
              )}
            >
              <img src={image.src} alt={image.alt} className="w-full overflow-hidden" />
              <div className="mt-6 w-full flex flex-col items-start justify-between gap-4">
                {image.content && (
                  <div className="font-normal text-3xl leading-9 text-white w-full lg:w-4/5 2xl:w-3/4">
                    {image.content}
                  </div>
                )}
                <div className="text-white mt-2 font-normal text-base hover:text-gray-400 transition-all duration-300">
                  <Link to={`${image.routepath}`} className="overflow-hidden">
                    Read Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="px-5 lg:px-10 pt-16">
        <div className="flex justify-center items-center">
          <div className="flex cursor-pointer cursor-effect">
            {images.map((_, index) => (
              <DotContainer
                key={index}
                index={index}
                currentIndex={currentIndex}
                handleDotClick={handleDotClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselBlogPage;
