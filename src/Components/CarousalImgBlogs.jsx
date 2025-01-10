import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useMediaQuery } from 'react-responsive';

const blogData = [
  { id: 1, image: './OurBlogsImg/UX-Research-Blog 2.png', title: 'The Ultimate Guide for UX Research', url: "/blogs/the-ultimate-guide-for-ux-research" },
  { id: 2, image: './OurBlogsImg/The-Evolution-Of-The Graphic-Design-home 1.png', title: 'The Evolution Of The Graphic Design', url: "/blogs/the-evolution-of-the-graphic-design" },
  { id: 3, image: './OurBlogsImg/Brands-identity-design aspects-in-Brief  1.png', title: 'Brand’s identity design ascepts in brief', url: "/blogs/brands-identity-design-aspects-in-brief" },
  { id: 4, image: './OurBlogsImg/Business-firms-suffer-today 1.png', title: 'Business firm suffer because of not finding right B2B Design', url: "/blogs/business-firms-suffer-to-find-right-design-agency" },
];

const CarousalImgBlogs = () => {
  return <HorizontalScroll />;
};

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "start start"]
  });

  const isSmallScreen = useMediaQuery({ minWidth: 320, maxWidth: 399 });
  const isSomeSmallScreen = useMediaQuery({ minWidth: 400, maxWidth: 767 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isLargeScreen = useMediaQuery({ minWidth: 1024, maxWidth: 1200 });

  const xTransform = useTransform(
    scrollYProgress,
    [0, 1],
    isSmallScreen ? ["1%", "-63%"] : isSomeSmallScreen ? ["1%", "-60%"] : isMediumScreen ? ["1%", "-40%"] : isLargeScreen ? ["1%", "-55%"] : ["1%", "-46%"]
  );

  return (
    <section ref={sectionRef} className="mt-14 sticky top-0 w-full px-6 lg:px-8 lg:w-[50vw] bg-white overflow-hidden">
      <motion.div
        style={{ x: xTransform }}
        transition={{
          duration: 2, // Increases the animation duration
          ease: [0.42, 0, 0.58, 1], // A custom cubic-bezier for a smooth ease-in-out effect
        }}
        className="flex items-start gap-10 w-fit scroll"
      >
        {blogData.map((blog) => (
          <BlogCard key={blog.id} image={blog.image} title={blog.title} url={blog.url} />
        ))}
      </motion.div>
    </section>
  );
};

function BlogCard({ image, title, url }) {
  return (
    <div className="w-[18%]">
      <div className="flex flex-col w-full">
        <div className="flex flex-col text-2xl tracking-wider leading-8 text-neutral-950 max-md:mt-4">
          <img loading="lazy" src={image} alt={title} className="filter grayscale hover:grayscale-0 mr-auto transition-all duration-300 object-cover w-full" />
          <h3 className="self-start font-arial w-[80%] mt-8">{title}</h3>
        </div>
        <div className="flex gap-5 justify-between mt-4 max-w-full text-xl leading-none text-[#7811A5] hover:text-gray-500 transition-all duration-300 w-[450px]">
          <Link to={url}>
            <button>Read now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarousalImgBlogs;
