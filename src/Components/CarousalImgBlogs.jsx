import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useState, useLayoutEffect } from "react";

const blogData = [
  { id: 1, image: './OurBlogsImg/UX-Research-Blog 2.png', title: 'The Ultimate Guide for UX Research', url: "/blogs/the-ultimate-guide-for-ux-research" },
  { id: 2, image: './OurBlogsImg/The-Evolution-Of-The Graphic-Design-home 1.png', title: 'The Evolution Of The Graphic Design', url: "/blogs/the-evolution-of-the-graphic-design" },
  { id: 3, image: './OurBlogsImg/Brands-identity-design aspects-in-Brief  1.png', title: 'Brand’s identity design aspects in brief', url: "/blogs/brands-identity-design-aspects-in-brief" },
  { id: 4, image: './OurBlogsImg/Business-firms-suffer-today 1.png', title: 'Business firm suffer because of not finding right B2B Design', url: "/blogs/business-firms-suffer-to-find-right-design-agency" },
];

const CarousalImgBlogs = () => {
  return <HorizontalScroll />;
};

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useLayoutEffect(() => {
    if (scrollRef.current && sectionRef.current) {
      const totalWidth = scrollRef.current.scrollWidth;
      const viewportWidth = sectionRef.current.offsetWidth;
      setScrollWidth(totalWidth - viewportWidth);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], [-scrollWidth, 0]);

  return (
    <section ref={sectionRef} className="mt-14 sticky top-0 w-full bg-white overflow-hidden">
      <motion.div
        ref={scrollRef}
        style={{ x: xTransform }}
        transition={{
          duration: 8,
          ease: [0.42, 0, 0.58, 1],
        }}
        className="flex items-start gap-10 w-fit px-6 lg:px-8"
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
    <div className="w-[300px] md:w-[350px] h-fit">
      <div className="flex flex-col w-full">
        <div className="flex flex-col text-2xl tracking-wider leading-8 text-neutral-950 max-md:mt-4">
          <img loading="lazy" src={image} alt={title} className="filter grayscale hover:grayscale-0 mr-auto transition-all duration-300 object-cover w-full" />
          <h3 className="self-start font-arial w-full lg:w-5/6 mt-8">{title}</h3>
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
