import React, { useEffect, useRef} from "react";
import './Work'
import Card from './Card'
import ResponsiveImageHoverEffect from './ResponsiveImageHoverEffect'
import ResponsiveCard from './ResponsiveCard'
import ScrollingTextSection from './ScrollingTextSection'
import VideoReelsSection from './VideoReelsSection'
import './Work.css'
import Footer from './Footer'
const cards = [
  { text: "Hello", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "World", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "React", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "Code", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
];



const Work = () => {
  const revealSectionRef = useRef(null);
  const plainCardRef = useRef(null);
  const revealCardRef = useRef(null);
  useEffect(() => {
      // Handler function for the scroll event
    const handleScroll = () => {        
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
      <div className='w-100' style={{height:75}}></div>
      <div className="p-4 position-relative z-3">
        <div style={{ width:"100%",gap: '20px' }} className="d-flex justify-content-center align-items-center">
            {cards.map((card, index) => (
                <Card key={index} text={card.text} img={card.img} />
            ))}
        </div>
        <ResponsiveImageHoverEffect />
        <ResponsiveCard />
        <ScrollingTextSection />
        <VideoReelsSection />
      </div>
      <div className="reveal-section" ref={revealSectionRef}>
          <div className="plain-card" ref={plainCardRef}>

          </div>
      </div>
      <div className="reveal-card" ref={revealCardRef}>
          <Footer />
      </div>
    </>
  );
};

export default Work;

// Inline CSS styles

