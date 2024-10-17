import React, { useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'

export default function HorizontalScroll() {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef
    });

    const xScroll = useTransform(scrollYProgress, [0,1], ["1%", "-95%"]);

    return (
        <section ref={targetRef}>
            <div style={{ xScroll }} className='flex'>
                <div className='w-[800px] h-[800px] bg-red-700'></div>
                <div className='w-[800px] h-[800px] bg-zinc-600'></div>
                <div className='w-[800px] h-[800px] bg-purple-500'></div>
                <div className='w-[800px] h-[800px] bg-blue-500'></div>
                <div className='w-[800px] h-[800px] bg-indigo-500'></div>
                <div className='w-[800px] h-[800px] bg-cyan-400'></div>
                <div className='w-[800px] h-[800px] bg-violet-700'></div>
            </div>
        </section>
    )
}
