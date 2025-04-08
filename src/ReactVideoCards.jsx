import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import BackgroudVideo from './assets/2759477-uhd_3840_2160_30fps.mp4'
import LetsTalk from './LetsTalk'
const ReactVideoCards = () => {
    // Use a ref to hold an array of card elements.
    const cardsRef = useRef([]);
    cardsRef.current = []; // reset on each render

    // Helper to add each card to the ref array.
    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const cards = cardsRef.current;
        if (!cards.length) return;

        // Animate the first card on load.
        // gsap.fromTo(
        // cards[0],
        // { y: "-100vh", x: "-10vw" },
        // { y: "0", x: "0", duration: 1, ease: "power2.out", onComplete: setupFirstCardTrigger }
        // );

        // Set up scroll-trigger animations for the first card.
        ScrollTrigger.create({
            trigger: cards[0],
            start: "top top",
            end: "top -50%",
            scrub: true,

            onUpdate: self => {
                const p = self.progress;
                if (p <= 0.01) { cards[0].style.transform = "none"; return; } let xVal, yVal, rotVal; if (self.direction > 0) { //
                    xVal = -20 * Math.sin(Math.PI * p);
                    yVal = -20 * Math.sin(Math.PI * p);
                    rotVal = -5 * Math.sin(Math.PI * p);
                } else { // scrolling up
                    // xVal = 10 * Math.sin(Math.PI * p);
                    // yVal = -10 * Math.sin(Math.PI * p);
                    // rotVal = 5 * Math.sin(Math.PI * p);
                }
                cards[0].style.transform = `translate(${xVal}vw, ${yVal}vh) rotate(${rotVal}deg)`;
            },
            onLeaveBack: () => {
                cards[0].style.transform = "none";
            }
        });

        // Set up scroll triggers for the remaining cards.
        cards.forEach((card, index) => {
            if (index === 0) return; // skip the first card
            const isLast = index === cards.length - 1;
            ScrollTrigger.create({
                trigger: card,
                start: "top top",
                end: "top -50%",
                scrub: true,
                onUpdate: self => {
                    const p = self.progress;
                    if (isLast && p >= 0.99) {
                        card.style.transform = "none";
                        return;
                    }
                    let xVal, yVal, rotVal;
                    if (self.direction > 0) {
                        xVal = -20 * Math.sin(Math.PI * p);
                        yVal = -20 * Math.sin(Math.PI * p);
                        rotVal = -5 * Math.sin(Math.PI * p);
                    } else {
                        xVal = 10 * Math.sin(Math.PI * p);
                        yVal = -10 * Math.sin(Math.PI * p);
                        rotVal = 5 * Math.sin(Math.PI * p);
                    }
                    card.style.transform = `translate(${xVal}vw, ${yVal}vh) rotate(${rotVal}deg)`;
                },
                onLeaveBack: () => {
                    card.style.transform = "none";
                }
            });
        });
    }, []);

    return (
        <>
            {/* Inline CSS styles – you can move these to a separate file as needed */}
            <style>
                {

                    ` body,
                html {
                    margin: 0;
                    padding: 0;
                    overflow-x: hidden;
                    font-family: sans-serif;
                    background: transparent;
                }

                .background-video {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    z-index: -1;
                    overflow: hidden;
                }

                .background-video video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .cards-container {
                    position: relative;
                    z-index: 1;
                }

                .cards {
                    width: 100% !important;
                    height: 100vh !important;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 3em;
                    color: #fff;
                    will-change: transform;
                    background: rgba(0, 0, 0, 0.5);
                }

                .cardss {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 3em;
                    color: #fff;
                    will-change: transform;
                    background: rgba(22, 160, 133, 1);
                }

                /* Demo background colors for each cards */
                .cards:nth-child(1) {
                    background: rgba(255, 255, 255, 0.4);
                }

                .cards:nth-child(2) {
                    background: rgba(52, 152, 219, 0.8);
                }

                .cards:nth-child(3) {
                    background: rgba(155, 89, 182, 0.8);
                }

                .cards:nth-child(4) {
                    background: rgba(230, 126, 34, 0.8);
                }

                .cards:nth-child(5) {
                    background: rgba(231, 76, 60, 0.8);
                }

                .cards:nth-child(6) {
                    background: rgba(241, 196, 15, 0.8);
                }

                .cards:nth-child(7) {
                    background: rgba(46, 204, 113, 0.8);
                }

                .cards:nth-child(8) {
                    background: rgba(52, 73, 94, 0.8);
                }

                .cards:nth-child(9) {
                    background: rgba(22, 160, 133, 0.8);
                }

                .cards:nth-child(10) {
                    background: rgba(39, 174, 96, 1);
                }

                `
                }
            </style>

            {/* Fixed navigation (header) */}

            {/* Background video */}
            <div className="background-video">
                <video autoPlay loop muted>
                    <source src={BackgroudVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Cards container */}
            <div className="cards-container">
                <div className="cards" ref={addToRefs}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1684 419"
                        style={{ position: 'absolute', bottom: '0', padding: `15px` }}>
                        <path d="M1684 215.276v90.04H0v-90.04z"></path>
                        <path d="M1483.31 102h95.98v316.592h-95.98z"></path>
                        <path
                            d="M1684 328.552v90.04h-200.684v-90.04zM1684 102v90.04h-200.684V102zM1177.93 102h95.98v316.592h-95.98z">
                        </path>
                        <path d="M1177.93 102h95.98l186.14 316.592h-95.98z"></path>
                        <path
                            d="M1364.07 102h95.98v316.592h-95.98zM1058.68 102h95.98v316.592h-95.98zM852.18 102h95.98v316.592h-95.98z">
                        </path>
                        <path d="M1035.41 328.552v90.04H852.177v-90.04zM535.156 102h95.98v316.592h-95.98z"></path>
                        <path
                            d="M735.842 328.552v90.04H535.158v-90.04zM735.842 102v90.04H535.158V102zM258.852 102h95.98v316.592h-95.98zM415.908 102h95.98v316.592h-95.98zM69.805 102h95.979v316.592h-95.98z">
                        </path>
                        <path
                            d="M235.586 102v90.04H.001V102zM1640.9 85.809c-8.17 0-15.54-1.825-22.1-5.473-6.43-3.794-11.53-8.902-15.33-15.323-3.65-6.567-5.47-13.937-5.47-22.109s1.82-15.542 5.47-22.109c3.8-6.567 8.9-11.674 15.33-15.323C1625.36 1.824 1632.73 0 1640.9 0c8.18 0 15.47 1.824 21.89 5.473q9.855 5.473 15.33 15.322c3.79 6.567 5.69 13.937 5.69 22.11 0 8.171-1.9 15.541-5.69 22.108q-5.475 9.632-15.33 15.323c-6.42 3.648-13.71 5.473-21.89 5.473m0-9.194q14.235 0 23.43-9.413c6.13-6.421 9.19-14.52 9.19-24.298s-3.06-17.804-9.19-24.079q-9.195-9.63-23.43-9.631c-9.48 0-17.29 3.21-23.42 9.631-6.13 6.275-9.19 14.302-9.19 24.08s3.06 17.876 9.19 24.297c6.13 6.275 13.94 9.413 23.42 9.413m-15.76-56.695h19.27c5.1 0 9.12 1.24 12.04 3.721 2.91 2.481 4.37 5.765 4.37 9.85 0 2.92-.94 5.473-2.84 7.662q-2.85 3.283-7.23 4.378l10.73 19.263h-11.6l-6.79-13.572q-1.965-3.502-5.25-3.502h-2.41v17.074h-10.29zm18.39 19.263c2.04 0 3.65-.438 4.82-1.313 1.31-1.022 1.97-2.408 1.97-4.16 0-1.605-.66-2.845-1.97-3.72-1.17-1.022-2.78-1.533-4.82-1.533h-8.32v10.726z">
                        </path>
                    </svg>
                </div>
                <div className="cards" ref={addToRefs}>Card 2</div>
                <div className="cards" ref={addToRefs}>Card 3</div>
                <div className="cards" ref={addToRefs}>Card 4</div>
                <div className="cards" ref={addToRefs}>Card 5</div>
                <div className="cards" ref={addToRefs}>Card 6</div>
                <div className="cards" ref={addToRefs}>Card 7</div>
                <div className="cards" ref={addToRefs}>Card 8</div>
                <div className="cards" ref={addToRefs}>Card 9</div>
                <div className="cards" ref={addToRefs}><LetsTalk /></div>
            </div>

            {/* Extra cards div (if needed) */}
            
        </>
    );
};

export default ReactVideoCards;