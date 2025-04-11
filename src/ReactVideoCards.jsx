import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import BackgroudVideo from './assets/2759477-uhd_3840_2160_30fps.mp4'
import './home.css'
import Blog from './Blog'
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
        const totalDistance = window.innerHeight * .7;
        // Create a ScrollTrigger for the reveal section. Note that we scale the progress so that
        // when baseProgress reaches 1.8 the full animation is complete.
        ScrollTrigger.create({
            trigger: revealSectionRef.current,
            start: "top top",
            end: () => "+=" + window.innerHeight * 2, // scroll distance so baseProgress goes up to 1.8
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
                    
                    ` 
                    @import 'https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap';
                    body,
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
                        background: #F7F8F7;
                        transform: rotate(-2deg);
                        outline:dashed;
                        outline-offset:-14px;
                    }

                    /* The middle layer with a lighter tilt */
                    .card-middle {
                        z-index: 2;
                        background: #D0D2D1;
                        transform: rotate(-1deg);
                        outline:dashed;
                        outline-offset:-14px;  
                    }
                    .card-front {
                        z-index: 3;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 3em;
                        color: #000;
                        will-change: transform;
                        background: rgba(255, 255, 255, 1);
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
                    }


                `
                }
            </style>
            <div className="background-video">
                <video autoPlay loop muted>
                    <source src="https://videos.pexels.com/video-files/3039168/3039168-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="cards-container" ref={addToRefs}>
                <div className="cards card-back"></div>
                <div className="cards card-middle"></div>
                <div className="cards card-front" >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width={200}
                        zoomAndPan="magnify"
                        viewBox="0 0 810 809.999993"
                        height={200}
                        preserveAspectRatio="xMidYMid meet"
                        version={1.0}
                        className='svg-animate'
                    >
                        <defs>
                            <clipPath id="6b9cb6e266">
                                <path
                                    d="M 605 208 L 803.746094 208 L 803.746094 800.734375 L 605 800.734375 Z M 605 208 "
                                    clipRule="nonzero"
                                    className='svg-animate1'
                                >
                                </path>
                            </clipPath>
                            <clipPath id="d3b152ea3c">
                                <path
                                    d="M 6.496094 9.484375 L 803 9.484375 L 803 800.734375 L 6.496094 800.734375 Z M 6.496094 9.484375 "
                                    clipRule="nonzero"
                                />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#6b9cb6e266)">
                            <path
                                fill="#f43b94"
                                d="M 802.082031 698.28125 C 762.589844 738.246094 740.699219 760.382812 701.203125 800.347656 L 605.578125 800.347656 C 605.578125 800.347656 605.578125 479.5625 605.578125 479.5625 C 605.578125 421.773438 628.542969 366.335938 669.394531 325.488281 L 782.957031 211.925781 C 790.445312 204.4375 803.269531 209.769531 803.242188 220.355469 L 802.054688 698.3125 Z M 802.082031 698.28125 "
                                fillOpacity={1}
                                fillRule="nonzero"
                            />
                        </g>
                        <g clipPath="url(#d3b152ea3c)">
                            <path
                                fill="#8a3aff"
                                d="M 802.082031 107.59375 C 802.054688 53.371094 758.195312 9.484375 703.96875 9.484375 C 703.96875 9.484375 703.800781 9.484375 703.800781 9.484375 C 703.746094 9.484375 703.691406 9.484375 703.609375 9.484375 L 109.0625 9.484375 L 6.996094 111.546875 L 6.996094 205.902344 L 271.738281 205.902344 C 352.222656 205.902344 431.847656 189.648438 505.886719 158.144531 L 520.785156 151.816406 L 605.578125 115.691406 L 621.664062 108.867188 L 633.4375 136.503906 L 605.578125 148.359375 L 570.585938 163.257812 C 500.140625 193.242188 436.128906 236.46875 381.988281 290.609375 L 10.976562 661.636719 C 10.894531 715.003906 10.8125 745.074219 10.753906 798.496094 C 11.445312 799.1875 11.890625 799.65625 12.605469 800.347656 C 66.28125 800.429688 96.183594 800.511719 149.882812 800.59375 L 169.757812 780.722656 L 605.578125 344.941406 L 773.339844 177.1875 C 791.71875 158.808594 802.082031 133.851562 802.082031 107.789062 Z M 802.082031 107.59375 "
                                fillOpacity={1}
                                fillRule="nonzero"
                            />
                        </g>
                    </svg>

                </div>
            </div>
            <div className="cards-container " style={{height:"190vh"}} ref={addToRefs}>
                <div className="cards card-back"></div>
                <div className="cards card-middle"></div>
                <div className="cards card-front flex-column ">
                    <div className="d-flex justify-content-between px-4 py-5 w-100">
                        <div
                            className="d-flex flex-column"
                            style={{ width: "60%", fontSize: 90, lineHeight: 1,  }}
                        >
                            <span style={{fontFamily: '"Urbanist", sans-serif', fontWeight:"600"}}>The</span>
                            <span style={{fontFamily: '"Urbanist", sans-serif', fontWeight:"600"}}>solution</span>
                        </div>
                        <div
                            className="d-flex flex-column align-items-end"
                            style={{ width: "31.2%", height: 133, position: "relative" }}
                        >
                            <span
                            style={{
                                fontSize: 16,
                                display: "flex",
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                fontFamily: '"Urbanist", sans-serif',
                                fontWeight:"500"
                            }}
                            >
                            Confronted with the devastating impact of waste, we knew something had to
                            change. That’s why we launched our mobile waste processing plants,
                            delivering an innovative solution that can go wherever it's needed.
                            </span>
                        </div>
                    </div>

                    <div className='h-100 w-100 px-3 ' style={{borderRadius:"30px", objectFit:"cover"}}>
                        <img src="https://cdn.prod.website-files.com/6733a9fa15c9b31fb9dd058e/6738e950d57d477447a62624_main-kv-min-p-1600.webp" alt="" className='w-100' />
                    </div>
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
                        <div className='w-100 pt-5 mt-4 position-absolute ' style={{ left: "1vw" }}>
                            <div className='d-flex flex-column gap-0'>
                                <span className="m-0 pt-3 fw-bold" style={{ fontSize: "60px", lineHeight: "30px", }}>Bringing</span>
                                <span className="m-0 pt-3 fw-bold" style={{ fontSize: "60px", }}>Ideas to Life.</span>
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
                    <div className='w-100 position-absolute bottom-0' style={{ fontFamily: "TWK Everett, Arial, sans-serif!important", backgroundColor: "#fff" }}>
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

            {/* ---------- Reveal Section (Curtain Reveal) ---------- */}
            <div className="reveal-section" ref={revealSectionRef}>
                <div className="plain-card" ref={plainCardRef}>
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