import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./Services.css";

const Services = () => {
  const scrollableRef = useRef(null);
  const targetScroll = useRef(0);
  
  // State to store colors (one for default, one for hover)
  const [colors, setColors] = useState(
    [...Array(8)].map(() => ({
      default: "#fff",
      hover: getRandomColor(),
    }))
  );

  // Function to generate a random HEX color
  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  useEffect(() => {
    const animateScroll = () => {
      gsap.to(".rectangles", {
        x: -targetScroll.current,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const interval = setInterval(animateScroll, 16);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const container = scrollableRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percent = mouseX / rect.width;
    const scrollableWidth = container.scrollWidth - container.clientWidth;

    targetScroll.current = scrollableWidth * percent;
  };

  const handleMouseEnter = (index, e) => {
    const content = e.currentTarget.querySelector(".content_para");
    gsap.to(content, {
      x: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Generate a new random color on hover
    setColors((prevColors) =>
      prevColors.map((color, i) =>
        i === index ? { ...color, hover: getRandomColor() } : color
      )
    );
  };

  const handleMouseLeave = (e) => {
    const content = e.currentTarget.querySelector(".content_para");
    gsap.to(content, {
      x: -500,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div ref={scrollableRef} className="scrollable-section" onMouseMove={handleMouseMove}>
      <div className="rectangles">
        {colors.map((color, index) => (
          <div
            key={index}
            className="col rectangle"
            onMouseEnter={(e) => handleMouseEnter(index, e)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundColor: color.default, // Default color
              transition: "background-color 0.3s ease-in-out",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = color.hover)} // Change color on hover
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = color.default)} // Revert on mouse out
          >
            <div className="home_link-blocks-item block w-inline-block">
              <div className="col-title" style={{ color: "rgb(212, 216, 221)" }}>
                Tech<br /> Solution
              </div>
              <div
                className="content_para d-flex flex-column justify-content-center align-items-center"
                style={{ transform: "translate3d(-500px, 0px, 0px)" }}
              >
                <p className="paragraph-17">
                  We provide customised solutions to meet partner needs. We understand the objectives and
                  requirements to develop strategies &amp; create holistic consumer experiences and fully serve clients.
                </p>
                <img
                  src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64d8ef1c098a351cea42b97b_screenshot-www.schbang.com-2023.08.13-20_21_34-removebg-preview.avif"
                  loading="lazy"
                  alt=""
                  className="image-87"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
