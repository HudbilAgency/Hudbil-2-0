import { useEffect } from "react";
import { gsap } from "gsap";

const PageTransition = () => {
  useEffect(() => {
    gsap.fromTo(
      ".circle",
      { width: "0px", height: "0px", opacity: 0 },
      {
        width: "20000px",
        height: "20000px",
        duration: 4,
        ease: "power2.inOut",
        opacity: 100,
      }
    );
  }, []);

  return (
    <>
      <div className="relative bg-slate-500 w-[100vw] h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </>
  );
};

export default PageTransition;
