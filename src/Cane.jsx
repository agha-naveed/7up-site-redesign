import React, { useState, useRef, useEffect } from 'react'
import './app.css'
import bgPic from './assets/bg.png'
import bgPic2 from './assets/bg2.png'

// Banner.js
const Cane = () => {
    const productRef = useRef(null);
    const [sodaOpacity, setSodaOpacity] = useState(0);
    const [leftValue, setLeftValue] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setSodaOpacity(scrollY >= 300 ? 1 : 0);
            setLeftValue(scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="banner">
            <div className="product" ref={productRef} style={{ '--left': `${leftValue}px` }}>
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
