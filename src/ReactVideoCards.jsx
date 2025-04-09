import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import BackgroudVideo from './assets/2759477-uhd_3840_2160_30fps.mp4'
import './home.css'
import LetsTalk from './LetsTalk'
import Footer from './Footer'
const ReactVideoCards = () => {

    const revealSectionRef = useRef(null);
    const plainCardRef = useRef(null);
    const revealCardRef = useRef(null);
    // Use a ref to hold an array of card elements.
    const cardContainersRef = useRef([]);

    // Callback to add each container to our ref array.
    const addToRefs = (el) => {
        if (el && !cardContainersRef.current.includes(el)) {
        cardContainersRef.current.push(el);
        }
    };
    useEffect(() => {
        const rotateVideos = () => {
        // Select the three video elements
            const topVideos= document.querySelector('.video-stacks .tops');
            const middleVideos = document.querySelector('.video-stacks .middles');
            const bottomVideos = document.querySelector('.video-stacks .bottoms');

            // Apply wipe-out animation to the top video
            topVideos.classList.add('wipe-outs');

            // After 600ms, reassign the classes to change positions
            setTimeout(() => {
                // The top video moves to the bottom position with a wipe-in effect
                topVideos.classList.remove('wipe-outs', 'tops');
                topVideos.classList.add('bottoms', 'wipe-ins');

                // Middle video shifts up to become the top video
                middleVideos.classList.remove('middles');
                middleVideos.classList.add('tops');

                // Bottom video becomes the middle video
                bottomVideos.classList.remove('bottoms');
                bottomVideos.classList.add('middles');

                // Remove the wipe-in effect after it finishes
                setTimeout(() => {
                    topVideos.classList.remove('wipe-ins');
                }, 600);
            }, 600);
        };

        const intervalIds = setInterval(rotateVideos, 2000);
        return () => clearInterval(intervalIds);
    }, []);
    useEffect(() => {
        // ---------- Layered Cards Animation ----------
        // Create a ScrollTrigger for each layered card container.
        cardContainersRef.current.forEach((container, index) => {
          ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            onUpdate: () => {
              const rect = container.getBoundingClientRect();
              const containerCenter = rect.top + rect.height / 2;
              let progress = 0;
              // For the first card use a special calculation:
              if (index === 0) {
                if (containerCenter < 0) {
                  progress = Math.min(-containerCenter / (window.innerHeight / 2), 1);
                }
              } else {
                progress = (window.innerHeight - containerCenter) / window.innerHeight;
                progress = Math.min(Math.max(progress, 0), 1);
              }
              const maxTranslate = -5; // in percent
              const maxRotate = -1;    // in degrees
              const currentTranslateX = progress * maxTranslate;
              const currentTranslateY = progress * maxTranslate;
              const currentRotate = progress * maxRotate;
              gsap.set(container, {
                xPercent: currentTranslateX,
                yPercent: currentTranslateY,
                rotation: currentRotate
              });
            }
          });
        });
    
        // ---------- Reveal Section (Curtain Reveal) Animation ----------
        // totalDistance is 50vh expressed in pixels.
        const totalDistance = window.innerHeight * 0.5;
        // Create a ScrollTrigger for the reveal section. Note that we scale the progress so that
        // when baseProgress reaches 1.8 the full animation is complete.
        ScrollTrigger.create({
          trigger: revealSectionRef.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * 0.9, // scroll distance so baseProgress goes up to 1.8
          scrub: true,
          onUpdate: (self) => {
            // Calculate baseProgress similar to the original code:
            let baseProgress = self.progress * 1.8;
            if (baseProgress < 1) {
              // Phase 1: Plain card translates upward gradually.
              gsap.set(plainCardRef.current, {
                y: -baseProgress * totalDistance,
                rotation: 0,
                xPercent: 0
              });
              gsap.set(revealCardRef.current, { opacity: 0 });
            } else {
              // Beyond phase 1, show the reveal card.
              gsap.set(revealCardRef.current, { opacity: 1 });
              if (baseProgress < 1.5) {
                // Keep plain card fully translated with no tilt yet.
                gsap.set(plainCardRef.current, { y: -totalDistance, rotation: 0, xPercent: 0 });
              } else {
                // Phase 2: Gradually add tilt (rotation and translateX) from baseProgress 1.5 to 1.8.
                let tiltProgress = (baseProgress - 1.5) / (1.8 - 1.5);
                tiltProgress = Math.min(tiltProgress, 1);
                gsap.set(plainCardRef.current, {
                  y: -totalDistance,
                  rotation: -tiltProgress * 5,
                  xPercent: -tiltProgress * 5
                });
              }
            }
          }
        });
      }, []);
    

    return (
        <>
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
                        width: 100%;
                        height: 100vh;
                        margin-bottom: 25vh; /* Only space at the bottom; no extra top spacing */
                        transform-origin: top left;
                    }  
                    .cards-container:nth-child(1) { z-index: 1; }
                    .cards-container:nth-child(2) { z-index: 2; }
                    .cards-container:nth-child(3) { z-index: 3; }
                    .cards-container:nth-child(4) { z-index: 4; }
                    .cards-container:nth-child(5) { z-index: 5; }

                    .cards {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        transform-origin: top left;
                    }
                    .card-back {
                        z-index: 1;
                        background: rgba(0, 0, 0, 0.1);
                        transform: rotate(-2deg);
                    }

                    /* The middle layer with a lighter tilt */
                    .card-middle {
                        z-index: 2;
                        background: rgba(0, 0, 0, 0.05);
                        transform: rotate(-1deg);
                    }
                    .card-front {
                        z-index: 3;
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
                    .cards-container:nth-child(1) {
                        background: rgba(255, 255, 255, 0.4);
                    }

                    .cards-container:nth-child(2) {
                        background: rgba(52, 152, 219, 0.8);
                    }

                    .cards-container:nth-child(3) {
                        background: rgba(155, 89, 182, 0.8);
                    }

                    .cards-container:nth-child(4) {
                        background: rgba(230, 126, 34, 0.8);
                    }

                    .cards-container:nth-child(5) {
                        background: rgba(231, 76, 60, 0.8);
                    }

                    .cards-container:nth-child(6) {
                        background: rgba(241, 196, 15, 0.8);
                    }

                    .cards-container:nth-child(7) {
                        background: rgba(46, 204, 113, 0.8);
                    }

                    .cards-container:nth-child(8) {
                        background: rgba(52, 73, 94, 0.8);
                    }

                    .cards-container:nth-child(9) {
                        background: rgba(22, 160, 133, 0.8);
                    }

                    .cards-container:nth-child(10) {
                        background: rgba(39, 174, 96, 1);
                    }
                `
                }
            </style>
            <div className="background-video">
                <video autoPlay loop muted>
                    <source src={BackgroudVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="cards-container" ref={addToRefs}>
                <div className="cards card-back"></div>
                <div className="cards card-middle"></div>
                <div className="cards card-front" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1684 419" style={{ position: 'absolute', bottom: '0', padding: `15px` }}>
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
            </div>
            <div className="cards-container" ref={addToRefs}>
                <div className="cards card-back"></div>
                <div className="cards card-middle"></div>
                <div className="cards card-front">
                    <div className='nav-inner w-100 position-absolute top-0'>
                        <div className='nav-inner__left'>
                            <a aria-label="back to top" href="/" aria-current="page" className="nav-inner__logo w-inline-block">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 143 15" fill="none" className="svg">
                                    <path
                                        d="M6.17333 14.216C3.16733 14.216 1.00733 12.56 0.611328 9.824H3.02333C3.25733 11.498 4.55333 12.326 6.22733 12.326C8.40533 12.326 9.61133 11.462 9.61133 10.22C9.61133 8.924 8.62133 8.582 6.60533 8.132L4.76933 7.736C2.55533 7.25 1.02533 6.134 1.02533 4.028C1.02533 1.76 3.27533 0.104004 6.13733 0.104004C9.25133 0.104004 11.1773 1.67 11.5733 3.92H9.16133C8.76533 2.57 7.64933 1.994 6.13733 1.994C4.58933 1.994 3.34733 2.696 3.34733 3.812C3.34733 4.946 4.15733 5.324 6.15533 5.774L7.97333 6.17C10.6373 6.764 11.9153 7.826 11.9153 9.968C11.9153 12.542 9.62933 14.216 6.17333 14.216Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M19.7476 9.932V4.298H21.9976V14H19.7656V12.074C19.3336 13.226 18.4156 14.216 16.7416 14.216C14.5276 14.216 13.4836 12.542 13.4836 10.382V4.298H15.7336V9.968C15.7336 11.786 16.4716 12.596 17.7496 12.596C19.0276 12.596 19.7476 11.75 19.7476 9.932Z"
                                        fill="currentColor"></path>
                                    <path d="M26.5215 2.804H24.1635V0.320003H26.5215V2.804ZM26.4675 14H24.2175V4.298H26.4675V14Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M38.8657 14.216C34.9237 14.216 32.1877 11.408 32.1877 7.16C32.1877 2.912 34.9237 0.104004 38.8657 0.104004C42.8077 0.104004 45.5437 2.912 45.5437 7.16C45.5437 11.408 42.8077 14.216 38.8657 14.216ZM38.8657 12.326C41.4217 12.326 43.1317 10.238 43.1317 7.16C43.1317 4.082 41.4217 1.994 38.8657 1.994C36.3097 1.994 34.5997 4.082 34.5997 7.16C34.5997 10.238 36.3097 12.326 38.8657 12.326Z"
                                        fill="currentColor"></path>
                                    <path d="M51.3223 13.73L54.1663 4.298H56.4342L53.4282 14H49.2163L46.2103 4.298H48.4603L51.3223 13.73Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M66.3876 9.086C66.3876 9.302 66.3696 9.554 66.3335 9.806H59.1695C59.3495 11.678 60.3035 12.632 61.6715 12.632C62.9135 12.632 63.5435 12.074 63.8855 11.138H66.1715C65.5595 13.208 63.9215 14.216 61.6535 14.216C58.6835 14.216 56.8835 12.092 56.8835 9.14C56.8835 6.17 58.7375 4.082 61.6535 4.082C64.5155 4.082 66.3876 6.062 66.3876 9.086ZM61.6535 5.666C60.3395 5.666 59.4215 6.494 59.1875 8.24H64.0835C63.9755 6.692 63.0395 5.666 61.6535 5.666Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M70.2471 4.298V6.656C70.6251 5.198 71.5971 4.082 73.4691 4.082V6.296H72.8571C71.1111 6.296 70.2651 6.872 70.2651 8.564V14H68.0151V4.298H70.2471Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M84.0271 0.320003V14H81.7771V1.958H79.2211C78.3751 1.958 77.9071 2.228 77.9071 3.218V4.298H80.2471V5.954H77.9071V14H75.6571V5.954H73.7671V4.298H75.6571V3.128C75.6571 1.22 77.0071 0.320003 78.8251 0.320003H84.0271Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M90.5468 14.216C87.5588 14.216 85.6688 12.146 85.6688 9.14C85.6688 6.152 87.5588 4.082 90.5468 4.082C93.5528 4.082 95.4428 6.152 95.4428 9.14C95.4428 12.146 93.5528 14.216 90.5468 14.216ZM90.5468 12.632C92.2208 12.632 93.1388 11.282 93.1388 9.14C93.1388 7.016 92.2208 5.666 90.5468 5.666C88.8908 5.666 87.9548 7.016 87.9548 9.14C87.9548 11.282 88.8908 12.632 90.5468 12.632Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M107.47 13.766L109.486 4.298H111.592L109.504 14H105.436L103.852 4.514L102.268 14H98.1997L96.1117 4.298H98.2177L100.234 13.766L101.854 4.298H105.85L107.47 13.766Z"
                                        fill="currentColor"></path>
                                    <path d="M117.181 0.320003H118.693L117.577 2.768H118.387V5.234H115.849V2.516L117.181 0.320003Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M127.707 8.006L122.649 12.146H130.425V14H120.021V11.57L126.033 6.638C127.005 5.828 127.761 5.036 127.761 4.1C127.761 2.858 126.789 1.886 125.133 1.886C123.531 1.886 122.523 2.678 122.397 4.226H120.057C120.219 1.544 122.433 0.104004 125.133 0.104004C128.013 0.104004 130.101 1.688 130.101 4.064C130.101 5.63 129.237 6.746 127.707 8.006Z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M137.625 4.658C139.857 4.658 142.017 6.278 142.017 9.41C142.017 12.578 139.641 14.216 136.869 14.216C134.097 14.216 132.009 12.758 131.721 10.22H134.061C134.205 11.516 135.249 12.434 136.833 12.434C138.399 12.434 139.659 11.408 139.659 9.41C139.659 7.376 138.273 6.404 136.869 6.404C135.501 6.404 134.511 7.124 134.043 8.24L131.829 8.024L132.513 0.320003H141.171V2.174H134.601L134.187 6.818C134.673 5.684 135.879 4.658 137.625 4.658Z"
                                        fill="currentColor"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="nav-inner__right">
                            <span className="code eyebrow">&lt;date&gt;</span>
                            <p className="p-small u--fw-med">February-May, 2025</p>
                            <span className="code eyebrow">&lt;/date&gt;</span>
                        </div>
                    </div>
                    <div className='w-100 h-100 d-flex justify-content-end align-center position-relative'>
                        <div className='w-100 pt-5 mt-4 position-absolute ' style={{left:"1vw"}}>
                           <div className='d-flex flex-column gap-0'>
                           <span className="m-0 pt-3 fw-bold" style={{fontSize:"60px", lineHeight:"30px",}}>Bringing</span>
                           <span className="m-0 pt-3 fw-bold" style={{fontSize:"60px",}}>Ideas to Life.</span>
                           </div>
                        </div>
                        <div className="right-video-section">
                            <div className="video-stacks">
                                <video
                                
                                className="tops"
                                src="https://videos.pexels.com/video-files/31032727/13264078_2560_1440_25fps.mp4"
                                autoPlay
                                muted
                                loop
                                />
                                <video

                                className="middles"
                                src="https://videos.pexels.com/video-files/31032727/13264078_2560_1440_25fps.mp4"
                                autoPlay
                                muted
                                loop
                                />
                                <video
                                className="bottoms"
                                src="https://videos.pexels.com/video-files/31032727/13264078_2560_1440_25fps.mp4"
                                autoPlay
                                muted
                                loop
                                />
                            </div>
                        </div>


                    </div>
                    <div className='w-100 position-absolute bottom-0' style={{ fontFamily:"TWK Everett, Arial, sans-serif!important", backgroundColor:"#fff"}}>
                        <nav className="nav">
                            <a href="#overview" className="nav-link size--1 w-inline-block w--current">
                                <div data-magnetic-strength="" className="nav-link__inner" >
                                    <div className="nav-link__text-wrap">
                                        <span className="p-medium u--fw-med">Overview</span>
                                    </div>
                                </div>
                            </a>
                            <a href="#tracks-prizes" className="nav-link size--1 w-inline-block">
                                <div data-magnetic-strength="" className="nav-link__inner" >
                                    <div className="nav-link__text-wrap"><span className="p-medium u--fw-med">Tracks &amp; Prizes</span></div>
                                </div>
                            </a>
                            <a href="#sponsors" className="nav-link size--2 w-inline-block">
                                <div data-magnetic-strength="" className="nav-link__inner" >
                                    <div className="nav-link__text-wrap"><span className="p-medium u--fw-med">Sponsors</span></div>
                                </div>
                            </a>
                            <a href="#events" className="nav-link size--2 w-inline-block">
                                <div data-magnetic-strength="" className="nav-link__inner" >
                                    <div className="nav-link__text-wrap"><span className="p-medium u--fw-med">Events</span></div>
                                </div>
                            </a>
                            <a href="#faq" className="nav-link size--3 w-inline-block">
                                <div data-magnetic-strength="" className="nav-link__inner" >
                                    <div className="nav-link__text-wrap"><span className="p-medium u--fw-med">FAQ</span></div>
                                </div>
                            </a>
                            <a href="https://notion.sui.io/overflow-2025-handbook" target="_blank" className="nav-link size--4 w-inline-block">
                                <div data-magnetic-strength="" className="nav-link__inner" >
                                    <div className="nav-link__text-wrap"><span className="p-medium u--fw-med">Participant Handbook</span></div>
                                </div>
                            </a>
                            <a href="https://discord.gg/HWwSCZxDTZ" target="_blank" className="nav-link size--2 w-inline-block">
                                <div data-magnetic-strength="" className="nav-link__inner">
                                    <div className="nav-link__text-wrap"><span className="p-medium u--fw-med">Discord</span></div>
                                </div>
                            </a>
                            <a data-arrow-button="" href="http://overflowportal.sui.io" target="_blank" className="nav-cta w-inline-block">
                                <div className="button-icon__wrap is--nav is--duplicate">
                                    <div className="button-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 24"
                                            fill="none" className="svg">
                                            <circle cx="1.51169" cy="12.0732" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="4.79294" cy="12.0742" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="8.07223" cy="12.0757" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="11.3496" cy="12.0791" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="14.6308" cy="12.0805" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="17.9043" cy="12.0761" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="21.1855" cy="12.0771" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="17.9121" cy="15.2519" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="1.35934" cy="1.35934" r="1.35934" transform="matrix(1 0 0 -1 16.5469 10.2627)"
                                                fill="currentColor"></circle>
                                            <circle cx="14.625" cy="18.4936" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="1.35934" cy="1.35934" r="1.35934" transform="matrix(1 0 0 -1 13.2637 7.01562)"
                                                fill="currentColor"></circle>
                                            <circle cx="11.3515" cy="21.8232" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="1.35934" cy="1.35934" r="1.35934" transform="matrix(1 0 0 -1 9.98633 3.68701)"
                                                fill="currentColor"></circle>
                                        </svg></div>
                                </div>
                                <div className="button-text__wrap">
                                    <div className="text-wrap__innner"><span className="p-medium u--fw-med">Register</span></div>
                                </div>
                                <div className="button-icon__wrap is--nav is--main">
                                    <div className="button-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 23 24" fill="none" className="svg">
                                            <circle cx="1.51169" cy="12.0732" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="4.79294" cy="12.0742" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="8.07223" cy="12.0757" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="11.3496" cy="12.0791" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="14.6308" cy="12.0805" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="17.9043" cy="12.0761" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="21.1855" cy="12.0771" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="17.9121" cy="15.2519" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="1.35934" cy="1.35934" r="1.35934" transform="matrix(1 0 0 -1 16.5469 10.2627)"
                                                fill="currentColor"></circle>
                                            <circle cx="14.625" cy="18.4936" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="1.35934" cy="1.35934" r="1.35934" transform="matrix(1 0 0 -1 13.2637 7.01562)"
                                                fill="currentColor"></circle>
                                            <circle cx="11.3515" cy="21.8232" r="1.35934" fill="currentColor"></circle>
                                            <circle cx="1.35934" cy="1.35934" r="1.35934" transform="matrix(1 0 0 -1 9.98633 3.68701)"
                                                fill="currentColor">
                                            </circle>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Extra cards div (if needed) */}
            {/* ---------- Reveal Section (Curtain Reveal) ---------- */}
            <div className="reveal-section" ref={revealSectionRef}>
                <div className="plain-card" ref={plainCardRef}>
                    <LetsTalk />
                </div>
            </div>
            <div className="reveal-card" ref={revealCardRef}>
                <Footer />
            </div>

        </>
    );
};

export default ReactVideoCards;