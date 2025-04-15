import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from "gsap/all";
import { style } from 'framer-motion/client';

const SequentialLetterInWordColorChange = () => {
    gsap.registerPlugin(ScrollTrigger);
    const textRef = useRef(null);

    const textContent = `We believe in fearless creativity and purposeful design. Every idea we craft is backed by strategy, emotion, and innovation—turning concepts into experiences that resonate. We don't just follow trends; we challenge them. With a mindset wired for originality, we create bold, meaningful, and memorable digital journeys that truly stand out.`;
    // Split into words and then letters inside each word
    const wordElements = textContent.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', marginRight: '6px' }}>
            {word.split('').map((char, charIndex) => (
                <span
                    key={`${wordIndex}-${charIndex}`}
                    className="letter"
                    style={{ transition: 'color 0.5s ease', display: 'inline-block' }}>
                    {char}
                </span>
            ))}
        </span>
    ));

    useEffect(() => {
        gsap.set('.letter', { color: '#bfbfbf' }); // Initial color black

        gsap.to('.letter', {
            color: 'rgba(0, 0, 0, 1)', // Golden color
            duration: 1,
            stagger: {
                each: 0.02,
            },
            scrollTrigger: {
                trigger: "#nkdnkllf",
                start: "top 70%",
                end: "+=500",
                scrub: true,
            }
        });
    }, []);

    return (

       <>

            <div id="nkdnkllf" style={{ fontFamily: '"Urbanist", sans-serif', padding: '5vh 2vw' }}>
                <h1
                    ref={textRef}
                    style={{ fontSize: '2.6rem', fontWeight: 'bold', lineHeight: 1.5, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
                >
                    {wordElements}
                </h1>
            </div>
       </>
    );
};

export default SequentialLetterInWordColorChange;