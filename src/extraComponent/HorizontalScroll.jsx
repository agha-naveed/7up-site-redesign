import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdArrowRoundForward } from "react-icons/io";
import zeroSugar from '../assets/img/products/7up-zero-sugar.webp'
import cherryZeroSugar from '../assets/img/products/7up-cherry-zero-sugar.webp'

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
    <div className="horizontal-scroll-container overflow-hidden">
      <div ref={containerRef} className="horizontal-scroll-content text-white">
        <div className="panel panel-1 flex gap-6 w-full font-semibold text-5xl bg-black">
          Our New Products
          <IoMdArrowRoundForward />
        </div>

        <div className="panel flex relative gap-10 justify-center items-center px-10">
          <h3 className="text-8xl relative z-10 font-semibold">
            <span className="text-transparent" style={{WebkitTextStroke: "2px white"}}>
              Refresh yourself
            </span>
            <br />
            with the iconic lemon lime flavor of Original 7UP®!

          </h3>
          <div className="w-[300px] absolute right-0 z-0">
            <img src={zeroSugar} className="w-full" alt="" />
          </div>
        </div>
        

        <div className="panel flex relative gap-10 justify-center items-center px-10 overflow-y-hidden">
          <h3 className="text-7xl relative -top-8 text-center z-10 font-semibold w-full animate-bounce">
            7UP Cherry Zero Sugar
          </h3>
          <div className="w-[400px] absolute top-[340px] z-0">
            <img src={cherryZeroSugar} className="w-full" alt="" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default HorizontalScroll;