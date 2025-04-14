import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from "gsap/all";

const SequentialLetterColorChange = () => {
    gsap.registerPlugin(ScrollTrigger);
    const textRef = useRef(null);
    const textContent = 'The global environmental situation is becoming increasingly alarming. Waste management challenges and pollution levels are reaching critical thresholds, and the need for sustainable solutios has never been more urgent.';

    // Split the text into individual span elements with inline styles.
    const letterElements = textContent.split('').map((char, index) => {
        // If it's a space, return a span with &nbsp; but no animation styles
        if (char === ' ') {
            return (
                <span key={index} style={{ display: 'inline-block' }}>
                    &nbsp;
                </span>
            );
        }
    
        // For all other characters, apply animation styles
        return (
            <span
                key={index}
                className="letter"
                style={{ transition: 'color 0.5s ease', display: 'inline-block' }}
            >
                {char}
            </span>
        );
    });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.set('.letter', { color: '#000000' }); // Ensure initial color is black
    
        gsap.to('.letter', {
            color: '#FFD700', // Golden color
            duration: 1,
            stagger: {
                each: 0.05, // time between each letter animating
            },
            scrollTrigger: {
                trigger: "#nkdnkllf",
                start: "top 60%",
                end: "+=500",
                scrub: true,
            }
        });
    }, []);

    const containerStyle = {
        margin: 0,
        fontFamily: 'Arial, sans-serif',
        minHeight: '100%',
    };

    const sectionStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    const headingStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
    };

    return (
        <div style={containerStyle} id="nkdnkllf">
            <div style={sectionStyle}>
                <h1 ref={textRef} style={headingStyle}>
                    {letterElements}
                </h1>
            </div>
        </div>
    );
};

export default SequentialLetterColorChange;