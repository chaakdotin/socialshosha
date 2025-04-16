import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import BackgroudVideo from './assets/2759477-uhd_3840_2160_30fps.mp4'
import './home.css'
import Blog from './Blog'
import LetsTalk from './LetsTalk'
import Slider from "./Slider"
import Marquee from './Marquee'
import Visualizer from './Visualizer'
import AutoTypingCode from './AutoTypingCode'
import SequentialLetterColorChange from './SequentialLetterColorChange'
import ImageMarquee from './ImageMarquee'
import Footer from './Footer'

const ReactVideoCards = () => {
    const revealSectionRef = useRef(null);
    const plainCardRef = useRef(null);
    const revealCardRef = useRef(null);
    // Use a ref to hold an array of card elements.
    const cardContainersRef = useRef([]);
    const arrowRef = useRef([]);
    // Callback to add each container to our ref array.
    const addToRefs = (el) => {
        if (el && !cardContainersRef.current.includes(el)) {
            cardContainersRef.current.push(el);
        }
    };


    useLayoutEffect(() => {
        arrowRef.current.forEach((arrow, index) => {
            gsap.to(arrow, {
                y: 10,
                duration: 1.5,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                delay: index * 0.2, // stagger each arrow animation by 0.3s
            });
        });
    }, []);
    useEffect(() =>{
        const icons = document.querySelectorAll(".social-link-icons");
        icons.forEach((icon) => {
          icon.addEventListener("mouseenter", () => {
            gsap.to(icon, {
              duration: 0.5,
              transform: "translate3d(0px, -36px, 0px)",
              ease: "power2.out",
            });
          });
    
          icon.addEventListener("mouseleave", () => {
            gsap.to(icon, {
              duration: 0.5,
              transform: "translate3d(0px, 0px, 0px)",
              ease: "power2.out",
            });
          });
        });
    
        // Cleanup to prevent memory leaks
        return () => {
          icons.forEach((icon) => {
            icon.removeEventListener("mouseenter", () => {});
            icon.removeEventListener("mouseleave", () => {});
          });
        };
      }, []);
    useEffect(() => {
        const rotateVideos = () => {
            // Select the three video elements
            const topVideos = document.querySelector('.video-stacks .tops');
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
        // Handler function for the scroll event
        const handleScroll = () => {
          // ---------- Layered Cards Section Animation ----------
            const containers = document.querySelectorAll('.card-container');
            containers.forEach((container, index) => {
                const rect = container.getBoundingClientRect();
                
                // Check if this container has "no-tilt" class.
                const disableTilt = container.classList.contains('no-tilt');
                if (index === 0) {
                    const containerCenter = rect.top + rect.height / 2;
                    let progress = 0;
                    if (containerCenter < 0) {
                        progress = Math.min(-containerCenter / (window.innerHeight / 2), 1);
                    }
                    // Read customizable parameters from CSS variables.
                    const computedStyles = getComputedStyle(container);
                    const maxTranslate = parseFloat(computedStyles.getPropertyValue('--card-max-translate')) || -5;
                    const maxRotate = parseFloat(computedStyles.getPropertyValue('--card-max-rotate')) || -1;
                    
                    // If tilt is disabled via "no-tilt", always set rotation and horizontal translation to 0.
                    const currentTranslateX = progress * (disableTilt ? 0 : maxTranslate);
                    const currentTranslateY = progress * maxTranslate;
                    const currentRotate = progress * (disableTilt ? 0 : maxRotate);
                    container.style.transform = `translate(${currentTranslateX}%, ${currentTranslateY}%) rotate(${currentRotate}deg)`;
                } else {
                    if (rect.top > 0 || disableTilt) {
                        // When the card's upper border is below the viewport top OR tilt is disabled:
                        const containerCenter = rect.top + rect.height / 2;
                        let verticalProgress = (window.innerHeight - containerCenter) / window.innerHeight;
                        verticalProgress = Math.min(Math.max(verticalProgress, 0), 1);
                        const currentTranslateY = verticalProgress * (-5);
                        container.style.transform = `translate(0%, ${currentTranslateY}%) rotate(0deg)`;
                    } else {
                        // When rect.top <= 0 and tilt is enabled:
                        const computedStyles = getComputedStyle(container);
                        const thresholdFraction = parseFloat(computedStyles.getPropertyValue('--tilt-threshold')) || 0.3;
                        const threshold = window.innerHeight * thresholdFraction;
                        let tiltProgress = (-rect.top) / threshold;
                        tiltProgress = Math.min(tiltProgress, 1);
                        // Apply quadratic easing for smooth tilt.
                        tiltProgress = Math.pow(tiltProgress, 2);
                        const containerCenter = rect.top + rect.height / 2;
                        let verticalProgress = (window.innerHeight - containerCenter) / window.innerHeight;
                        verticalProgress = Math.min(Math.max(verticalProgress, 0), 1);
                        const currentTranslateY = verticalProgress * (-5);
                        const currentRotate = tiltProgress * (-1);
                        const currentTranslateX = tiltProgress * (-5);
                        container.style.transform = `translate(${currentTranslateX}%, ${currentTranslateY}%) rotate(${currentRotate}deg)`;
                    }
                }
            });

                    
            /* ---------- Reveal Section (Curtain Reveal) Animation ---------- */
            const revealSection = document.querySelector('.reveal-section');
            const plainCard = document.querySelector('.plain-card');
            const revealCard = document.querySelector('.reveal-card');
            if (revealSection && plainCard && revealCard) {
                // Total upward translation distance (in pixels), computed from CSS variable.
                const totalDistance = (window.innerHeight * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reveal-total-distance'))) / 100;
                const sectionTop = revealSection.offsetTop;
                let scrollOffset = window.scrollY - sectionTop;
                let baseProgress = scrollOffset / totalDistance;
                if (baseProgress < 0) baseProgress = 0;
                
                // Tilt thresholds for reveal section, customizable via CSS variables.
                const tiltStart = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reveal-tilt-start')) || 1.5;
                const tiltEnd = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reveal-tilt-end')) || 1.8;
                const fullTilt = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reveal-full-tilt')) || 5;
                if (baseProgress < 1) {
                    plainCard.style.transform = `translateY(-${baseProgress * totalDistance}px)`;
                    revealCard.style.opacity = 0;
                } else {
                    // Instantly reveal the card once upward translation is complete.
                    revealCard.style.opacity = 1;
                    if (baseProgress < tiltStart) {
                        plainCard.style.transform = `translateY(-${totalDistance}px)`;
                    } else {
                        let tiltProgress = (baseProgress - tiltStart) / (tiltEnd - tiltStart);
                        tiltProgress = Math.min(tiltProgress, 1);
                        plainCard.style.transform = `translateY(-${totalDistance}px) rotate(${-tiltProgress * fullTilt}deg) translateX(${-tiltProgress * fullTilt}%)`;
                    }
                }
            }
        };
        // Attach the scroll event listener when the component mounts.
        window.addEventListener("scroll", handleScroll);
        // Cleanup the event listener on component unmount.
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };

    }, []);


    return (
        <>
            
            <style>
                {
                    
                    ``
                }
            </style>
            <div className="background-video">
                <video autoPlay loop muted>
                    <source src="https://videos.pexels.com/video-files/3039168/3039168-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="card-container">
                <div className="cards card-back"></div>
                <div className="cards card-middle"></div>
                <div className="cards card-front" >

                    <div className='position-relative'>
                        <div className='px-3 py-3' style={{width:"100vw", height:"100vh"}}>
                            <div className='color-box'>
                                
                                <div className='col-12 new-div'>
                                    <div className='col-12 meet_new_color'>
                                        <span>Think.</span> 
                                        <div className='d-flex'>
                                            <video src="https://videos.pexels.com/video-files/5752729/5752729-uhd_2560_1440_30fps.mp4" className='object-fit-cover'></video>
                                        </div>
                                        <span>Design.</span>
                                        <span>Deliver.</span>
                                    </div>
                                </div>
                                <div className="scroll-down" style={{ textAlign: "center", paddingTop: "50px" }}>
                                    <p style={{ color: "#000", fontFamily: "sans-serif" }}>scroll down</p>
                                    <div className="arrows">
                                        <div
                                            className="arrow"
                                            ref={(el) => (arrowRef.current[0] = el)}
                                        ></div>
                                        <div
                                            className="arrow"
                                            ref={(el) => (arrowRef.current[1] = el)}
                                        ></div>
                                    </div>
                                </div>
                               
                                <div className="gradient-bg d-none">
                                    <svg
                                        width="100%"
                                        height="100%"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                    >
                                        <defs>
                                            <linearGradient id="animated-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <animateTransform
                                                    attributeName="gradientTransform"
                                                    attributeType="XML"
                                                    type="rotate"
                                                    from="0 0.5 0.5"
                                                    to="360 0.5 0.5"
                                                    dur="2s"
                                                    repeatCount="indefinite"
                                                />
                                                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)" />
                                                <stop offset="100%" stopColor="rgba(235, 205, 141, 1)" />
                                            </linearGradient>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#animated-gradient)" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                        
                        <div className='bg-images'>
                            <a
                                href="#"
                                // target="_blank"
                                className="social-link-wrap w-inline-block"
                                >
                                <div
                                    className="social-link-icons ln"
                                    style={{
                                    transform:
                                        "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                    transformStyle: "preserve-3d"
                                    }}
                                >
                                    <img
                                    src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/67364bfdf42bcd92a21468f6_ln.svg"
                                    loading="lazy"
                                    alt=""
                                    className="social-link-icon ln"
                                    />
                                    <img
                                    src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/67364bfdf42bcd92a21468f6_ln.svg"
                                    loading="lazy"
                                    alt=""
                                    className="social-link-icon first ln" />
                                </div>
                            </a>
                            <a
                                href="#"
                                // target="_blank"
                                className="social-link-wrap w-inline-block"
                                >
                                <div
                                    className="social-link-icons ln"
                                    style={{
                                    transform:
                                        "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                    transformStyle: "preserve-3d"
                                    }}
                                >
                                    <img
                                    src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a65bf2dd4689bf794108e_phone.svg"
                                    loading="lazy"
                                    alt=""
                                    className="social-link-icon ln"
                                    />
                                    <img
                                    src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a65bf2dd4689bf794108e_phone.svg"
                                    loading="lazy"
                                    alt=""
                                    className="social-link-icon first ln" />
                                </div>
                            </a>
                            <a
                                href="#"
                                // target="_blank"
                                className="social-link-wrap w-inline-block"
                                >
                                <div
                                    className="social-link-icons ln"
                                    style={{
                                    transform:
                                        "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                    transformStyle: "preserve-3d"
                                    }}
                                >
                                    <img
                                    src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a65b253821f64273ae8c7_mail%20(1).svg"
                                    loading="lazy"
                                    alt=""
                                    className="social-link-icon ln"
                                    />
                                    <img
                                    src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/673a65b253821f64273ae8c7_mail%20(1).svg"
                                    loading="lazy"
                                    alt=""
                                    className="social-link-icon first ln" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
           
            
            <div className="card-container" style={{height:"190vh"}}>
                <div className="cards card-back"></div>
                <div className="cards card-middle"></div>
                <div className="cards card-front flex-column ">
                    <div className="d-flex justify-content-between px-4 py-5 w-100">
                        <div
                            className="d-flex flex-column"
                            style={{ width: "60%", fontSize: 90, lineHeight: 0.83, letterSpacing: 0.83  }}
                        >
                            <span style={{fontFamily: '"MarkPro", sans-serif', fontWeight:"900"}}>Who</span>
                            <span style={{fontFamily: '"MarkPro", sans-serif', fontWeight:"900"}}>We Are</span>
                        </div>
                        <div
                            className="d-flex flex-column align-items-end"
                            style={{ width: "31.2%", position: "relative" }}
                        >
                            <span
                            style={{
                                fontSize: 16,
                                display: "flex",
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                fontFamily: '"MarkPro", sans-serif',
                                fontWeight:"500"
                            }}
                            >
                           We are more than just a creative agency—we are storytellers, innovators, and digital architects. With a passion for design and technology, we transform ideas into immersive brand experiences that captivate audiences and drive real results.
                            </span>
                        </div>
                    </div>

                    <div className='h-100 w-100 px-3 ' style={{borderRadius:"30px", objectFit:"cover"}}>
                        <img src="/img/SSSSSS.jpg" alt="" className='w-100' />
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="cards card-back"></div>
                <div className="cards card-middle"></div>
                {/*  style={{background: "linear-gradient(135deg, #1a0d00, #4a2e00, #2e1d00)"}} */}
                <div className="cards card-front" style={{position:"relative"}}>

                    <div className='d-flex align-items-center justify-content-center'>

                        <div className='col-7 d-flex flex-column justify-content-center align-items-center h-100'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <span style={{ fontFamily: '"MarkPro", sans-serif',fontWeight:"800"}}>Our Approach</span>
                            </div>
                            <SequentialLetterColorChange />
                        </div>
                        <div className='col-5 d-flex justify-content-center align-items-center h-100' >
                            <AutoTypingCode />
                        </div>
                    </div>
                    <video src="/videos/videoplayback.mp4" muted autoPlay playsInline className='bg-video'></video>
                </div>
            </div>
            <div className="card-container card-visualizer " style={{height:"110vh",  zIndex: 2 }}>
                <div className="cards card-back"></div>
                <div className="cards card-middle"></div>
                <div className="cards card-front align-items-start justify-content-start flex-column" >
                    <Visualizer />
                </div>
            </div>
            
           

            <div className="card-container" style={{height:"120vh"}}>
                <div className="cards card-back"></div>
                <div className="cards card-middle"></div>
                <div className="cards card-front">
                    <div className='nav-inner w-100 position-absolute top-0 d-none'>
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
                        <div className='w-100 pt-5 mt-4 position-absolute ' style={{ left: "1vw" }}>
                            <div className='d-flex flex-column gap-0' style={{lineHeight: ".75",  }}>
                                <span className="m-0 pt-3" style={{ fontSize: "180px",fontFamily: "MarkPro",fontWeight:900, letterSpacing:"-.03em" }}>Bringing</span>
                                <span className="m-0 pt-3" style={{ fontSize: "180px",fontFamily: "MarkPro",fontWeight:900, letterSpacing:"-.03em"}}>Ideas to Life.</span>
                            </div>
                        </div>
                        <div className="d-flex col-6 align-items-center justify-content-center pl-5" >
                        
                            <div className="d-flex col-12 align-items-end justify-content-center pt-5" style={{height:"30%"}} data-v-8867a48a="">
                                <span
                                    className="latestWork d-flex flex-column"
                                    data-v-8867a48a=""
                                    style={{ opacity: 1 }}>
                                    <span className="fs-6" data-v-8867a48a="" style={{fontFamily: "MarkPro", fontWeight:550}}>
                                        Latest work
                                    </span>
                                    <svg
                                        className="hidden lg:block"
                                        width={109}
                                        height={7}
                                        viewBox="0 0 109 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-v-8867a48a=""
                                    >
                                        <path
                                            d="M0 5.5H106L101.857 1"
                                            stroke="black"
                                            strokeWidth={2}
                                            data-v-8867a48a=""
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="right-video-section">
                            <div className="video-stacks">
                                <video

                                    className="tops"
                                    src="https://cdn.sanity.io/files/y63jgrcb/production/5c959f524d4010cdb155c0b8a134232f550685e8.mp4"
                                    autoPlay
                                    muted
                                    loop
                                />
                                <video

                                    className="middles"
                                    src="https://cdn.sanity.io/files/y63jgrcb/production/7980b7207ffc77c004799f6aa128bb03570330c9.mp4"
                                    autoPlay
                                    muted
                                    loop
                                />
                                <video
                                    className="bottoms"
                                    src="https://cdn.sanity.io/files/y63jgrcb/production/ae9e15cdfac7ab73c70d56918336b0f8c40a0c68.mp4"
                                    autoPlay
                                    muted
                                    loop
                                />
                            </div>
                        </div>


                    </div>
                    <div className='w-100 position-absolute bottom-0 d-none' style={{ fontFamily: "TWK Everett, Arial, sans-serif!important", backgroundColor: "#fff" }}>
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
            <div className="card-container no-tilt" style={{height:"70vh", zIndex: 2 }}>
                <div className="cards card-front align-items-start justify-content-start flex-column" style={{backgroundColor:"transparent"}}>
                    <div className="w-100 d-flex pb-5">
                        <div className="left-sections col-4">
                            <h2 style={{fontSize: '60px', width: '100%', fontWeight:"500", letterSpacing:1, color:"#fff"}}>Scale higher with our expertise.</h2>
                        </div>
                        <div className="right-sections col-8">
                            <Slider />
                        </div>
                    </div>
                    {/* <Marquee /> */}
                </div>
            </div>
            {/* ---------- Reveal Section (Curtain Reveal) ---------- */}
            <div className="reveal-section" ref={revealSectionRef}>
                <div className="plain-card" ref={plainCardRef}>
                    <ImageMarquee />
                    <Blog />
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