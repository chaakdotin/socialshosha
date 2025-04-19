import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./Services.css";
import { a } from "framer-motion/client";

const Services = () => {
  const scrollableRef = useRef(null);
  const targetScroll = useRef(0);

  const services = [
    {
      title: "Website Development & UI/UX",
      description:
        "We build responsive websites with intuitive user experiences that enhance brand engagement and user retention.",
      link:"/newPage",
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Boost your online visibility with our expert SEO strategies and result-driven digital marketing campaigns.",
        link:"/newPage1",
    },
    {
      title: "Social Media & Influencer Marketing",
      description:
        "Engage audiences through compelling social content and impactful influencer collaborations across platforms.",
        link:"/newPage2",
    },
    {
      title: "Branding & Graphic Design",
      description:
        "We craft visual identities and design assets that bring your brand’s personality to life across all touchpoints.",
        link:"/newPage3",
    },
    {
      title: "CGI Ads & Production Shoots",
      description:
        "From creative CGI to high-quality shoots, we produce standout content that captures attention and converts.",
        link:"/newPage4",
    },
    {
      title: "Public Relations & Media Outreach",
      description:
        "Our PR experts help your brand gain recognition and trust through strategic media placements and outreach.",
        link:"/newPage5",
    }
  ];

  const [colors, setColors] = useState(
    [...Array(services.length)].map(() => ({
      default: "#fff",
      hover: getRandomColor(),
    }))
  );
  
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
        {services.map((service, index) => (
            <div
              key={index}
              className="col-3 rectangle"
              onMouseEnter={(e) => handleMouseEnter(index, e)}
              onMouseLeave={handleMouseLeave}
              style={{
                backgroundColor: colors[index].default,
                transition: "background-color 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors[index].hover)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors[index].default)} >
              <a href={service.link}>
                <div className="home_link-blocks-item block w-inline-block">
                  <div className="col-title" style={{ color: "rgb(212, 216, 221)" }}>
                    {service.title.split(" & ").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                  <div
                    className="content_para d-flex flex-column justify-content-center align-items-center"
                    style={{ transform: "translate3d(-500px, 0px, 0px)" }}
                  >
                    <p className="paragraph-17">{service.description}</p>
                    <img
                      src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64d8ef1c098a351cea42b97b_screenshot-www.schbang.com-2023.08.13-20_21_34-removebg-preview.avif"
                      loading="lazy"
                      alt=""
                      className="image-87"
                    />
                  </div>
                </div>
              </a>
            </div>

        ))}
      </div>
    </div>
  );
};

export default Services;
