import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdArrowRoundForward } from "react-icons/io";


gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const totalWidth = container.scrollWidth - window.innerWidth;

    
    gsap.to(container, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${totalWidth}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="horizontal-scroll-container overflow-x-hidden">
      <div ref={containerRef} className="horizontal-scroll-content text-white">
        <div className="panel panel-1 flex gap-6 w-full font-semibold text-5xl bg-black">
          Our New Products
          <IoMdArrowRoundForward />
        </div>
        {/* <div className="panel panel-2 w-full bg-black">Panel 2</div>
        <div className="panel panel-3 w-full bg-red-600">Panel 3</div>
        <div className="panel panel-4 w-full bg-purple-600">Panel 4</div>
        <div className="panel panel-5 w-full bg-slate-700">Panel 5</div> */}
      </div>
    </div>
  );
};

export default HorizontalScroll;