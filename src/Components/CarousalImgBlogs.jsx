import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// Sample resources array with 4 cards
const blogData = [
  { id: 1, image: './OurBlogsImg/UX-Research-Blog 2.png', title: 'The Ultimate Guide for UX Research' },
  { id: 2, image: './OurBlogsImg/The-Evolution-Of-The Graphic-Design-home 1.png', title: 'The Evolution Of The Graphic Design' },
  { id: 3, image: './OurBlogsImg/Brands-identity-design aspects-in-Brief  1.png', title: 'Brand’s identity design ascepts in brief' },
  { id: 4, image: './OurBlogsImg/Business-firms-suffer-today 1.png', title: 'Business firm suffer because of not finding right B2B Design' },
  // { id: 5, image: './OurBlogsImg/User-Experience-Design-and-its-Importance-for Businesses 1.png', title: 'User Experience Design and its Importance for Businesses' },
];

const CarousalImgBlogs = () => {
  return <HorizontalScrollResources />;
};

const HorizontalScrollResources = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, behaviour: "smooth" });
  
  const x = useTransform(scrollYProgress, [0, 1], ["-45%", "0%"]);// Adjusted to scroll through cards

  return (
    <>
    {/* <div className="shrink-0 mt-16  max-w-full h-px border border-solid border-neutral-400 w-[736px] max-md:mt-10" />
                      <div className="flex gap-5 items-start self-start mt-10 text-base font-semibold tracking-wider leading-none text-neutral-950">
                        <div className="flex shrink-0 self-stretch my-auto  w-3 h-3 bg-neutral-950 rounded-[1000px]" />
                        <div className="self-stretch my-auto w-[99px]">Our Blogs</div>
                      </div> */}
    <section ref={targetRef} className="w-full px-[4%] lg:w-[50vw] bg-white">
      <div className="flex items-start overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} image={blog.image} title={blog.title} />
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
};

function BlogCard({ image, title }) {
  return (
    <div className="mt-14 w-[25%] md:w-1/4 lg:w-1/5 xl:w-[22%] 2xl:w-[23%] max-md:mt-10 ">
      <div className="flex max-md:flex-col">
        <div className="flex flex-col max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-2xl tracking-wider leading-8 text-neutral-950 max-md:mt-10">
            <img loading="lazy" src={image} alt={title} className="filter grayscale hover:grayscale-0 transition-all duration-300 object-cover w-[80%]" />
            <h3 className="self-start font-arial w-[80%] mt-8">{title}</h3>
          </div>
          <div className="flex gap-5 justify-between mt-4 max-w-full text-xl  leading-none text-purple-700 w-[450px]">
            <button>Read now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarousalImgBlogs;