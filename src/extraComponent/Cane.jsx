import React, { useState, useRef, useEffect } from 'react'
import '../app.css'
import bgPic2 from '../assets/img/bg_copy.png'
import bgPic from '../assets/img/bg2.png'
// import bgPic2 from '../assets/img/bg_copy.png'


// Banner.js
const Cane = () => {
    const productRef = useRef(null);
    const [sodaOpacity, setSodaOpacity] = useState(0);
    const [leftValue, setLeftValue] = useState(0);
    let rotation = 0
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setSodaOpacity(scrollY >= 300 ? 1 : 0);
            setLeftValue(scrollY);
            
            if (scrollY > rotation) {
                rotation = -scrollY
                productRef.current.style.transform = `rotate(${rotation / 5}deg)`
            }
            else if (scrollY < rotation) {
                rotation = scrollY
                productRef.current.style.transform = `rotate(-${rotation / 5}deg)`
            }
        };
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out" className="banner content-center">
            <div className="product" ref={productRef} style={{ '--left': `${leftValue}px`, transformOrigin: 'center center' }}>
                <div 
                    className="soda" 
                    style={{ 
                        '--url': `url(${bgPic})`
                    }}
                ></div>
                <div 
                    className="soda" 
                    style={{ 
                        '--url': `url(${bgPic2})`, 
                        opacity: sodaOpacity,
                    }}
                ></div>
            </div>
        </div>
    );
};
export default Cane;