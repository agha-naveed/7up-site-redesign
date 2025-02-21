import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdArrowRoundForward } from "react-icons/io";
import zeroSugar from '../assets/img/products/7up-zero-sugar.webp'

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
        <div className="flex gap-10 justify-center items-center px-10">
          <h3 className="text-8xl font-semibold">
            <span className="text-transparent" style={{WebkitTextStroke: "2px white"}}>
              Refresh yourself
            </span>
            <br />
            with the iconic lemon lime flavor of Original 7UP®!

          </h3>
          <img src={zeroSugar} className="w-[40vmin]" alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default HorizontalScroll;