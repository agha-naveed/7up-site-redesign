import React, { useState, useRef, useEffect } from 'react'
import '../app.css'
import bgPic from '../assets/img/bg2.webp'


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
        <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300" data-aos-easing="ease-in-out" className="banner content-center pointer-events-none">
            <div className="product" ref={productRef} style={{ '--left': `${leftValue}px`, transformOrigin: 'center center' }}>
                <div 
                    className="soda" 
                    style={{ 
                        '--url': `url(${bgPic})`
                    }}
                />
            </div>
        </div>
    );
};
export default Cane;