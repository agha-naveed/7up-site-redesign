import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Calculate the total scrollable width
    const totalWidth = container.scrollWidth - window.innerWidth;

    // Create the horizontal scroll animation
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

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="horizontal-scroll-container overflow-x-hidden">
      <div ref={containerRef} className="horizontal-scroll-content">
        <div className="panel panel-1">Panel 1</div>
        <div className="panel panel-2">Panel 2</div>
        <div className="panel panel-3">Panel 3</div>
        <div className="panel panel-4">Panel 4</div>
        <div className="panel panel-5">Panel 5</div>
      </div>
    </div>
  );
};

export default HorizontalScroll;