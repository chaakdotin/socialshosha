import React, { useEffect, useRef, useState } from 'react';
import {gsap, ScrollTrigger} from "gsap/all";
import { marker } from 'framer-motion/client'
const DotVisualizer = () => {
  const visualizerRef = useRef(null);
  const columnsRef = useRef([]);
  const phasesRef = useRef([]);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const visualizer = visualizerRef.current;
    const vw = window.innerWidth;
    const vh = window.innerHeight * 0.7;
    const dotSpacing = 25;
    const dotSize = 6;
    const columns =  Math.floor(vw / dotSpacing);
    const dotsPerColumn = Math.floor(vh / dotSpacing);
    const staticDots = 6;
    const maxAnimatedDots = dotsPerColumn - staticDots;

    // Clear previous
    visualizer.innerHTML = '';
    columnsRef.current = [];
    phasesRef.current = [];

    // Generate new phases
    for (let i = 0; i < columns; i++) {
      const offset = Math.random() * Math.PI * 2;
      const speed = 0.0002 + Math.random() * 0.0004;
      phasesRef.current.push({ offset, speed });
    }

    // Create columns with dots
    for (let i = 0; i < columns; i++) {
      const column = document.createElement('div');
      column.className = 'column';

      for (let j = 0; j < dotsPerColumn; j++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.width = `${dotSize}px`;
        dot.style.height = `${dotSize}px`;
        dot.style.backgroundColor = '#d3d3d3';
        dot.style.borderRadius = '50%';
        dot.style.margin = '9.5px 0';
        dot.style.opacity = '1';
        column.appendChild(dot);
      }

      visualizer.appendChild(column);
      columnsRef.current.push(column);
    }

    // Animate dots
    const animate = () => {
      columnsRef.current.forEach((column, i) => {
        const dots = column.children;
        const { offset, speed } = phasesRef.current[i];
        const phase = Date.now() * speed + offset;
        const visibleAnimatedDots = Math.floor((Math.sin(phase) + 1) / 2 * maxAnimatedDots);

        for (let j = 0; j < dots.length; j++) {
          dots[j].style.opacity = j < staticDots || j < staticDots + visibleAnimatedDots ? '1' : '0';
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Scroll opacity & highlight

  }, []);
  useEffect(() => {
    const lt = gsap.timeline({
      scrollTrigger: {
        trigger: ".hghjkghjgjkg",
        start:"top 40%",
        end:"+=300",
        scrub:true
      }
    })
    lt.to('#text-top',{
      opacity:1,
    }).to('#text-bottom',{
      opacity:1,
    }).to('.visualizerRef',{
      opacity:1,
    })
  }, []);
  const [isOn, setIsOn] = useState(false);
  
  const handleClick = () => {
    setIsOn(prev => !prev);
    const isChecked = isOn;
    const textTop = document.getElementById('text-top');
    const textBottom = document.getElementById('text-bottom');
    const visualizer =  document.querySelector('.visualizerRef');
    const columnsElements = document.querySelectorAll('.column');
    if (isChecked) {
        // Full opacity
        textTop.style.opacity = 0.1;
        textBottom.style.opacity = 0.1;
        visualizer.style.opacity = 0.1;
        // Trigger smooth color flow
      } else {
        // Full opacity, all highlighted
        visualizer.style.opacity = 1;
        textTop.style.opacity = 1;
        textBottom.style.opacity = 1;

    }
  };
  

  return (
    <>
      <div className='position-relative'>
        <div
          ref={visualizerRef}
          style={{
            position:"absolute",
            width: '100vw',
            height: '100vh',
            opacity: 0.1,
            paddingBottom:"120px",
            transition: 'opacity 0.5s ease',
            pointerEvents: 'none',
            zIndex: 0
          }}
          className='visualizerRef px-3 d-flex align-items-end justify-content-between '
        />
      </div>
    <div className='w-100 h-100 p-3 d-flex flex-column justify-content-between pb-5 hghjkghjgjkg'>
      <div className='d-flex align-items-center justify-content-between '>
        <h1 style={{fontSize:"100px",lineHeight:"85%"}} id="text-top" className='text-element highlight'>Our<br />Mission</h1>
        <div className='col-4 d-flex align-items-center position-relative py-2 d-none'>
          <div
            className={`containerss ${isOn ? 'on' : 'off'}`}
            onClick={handleClick}
          >
            <div className="toggle">
              <div className="detail" />
              <div className="detail" />
              <div className="detail" />
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column text-element highlight pb-5' id="text-bottom">
        <span style={{fontSize:"52px"}}>Transforming Ideas into Digital Success</span>
        <span style={{fontSize:"14px"}} className='pb-3'>Our mission is to transform ideas into reality through innovative design, strategic marketing, and cutting-edge technology.</span>
      </div>
    </div>
    </>
  );
};

export default DotVisualizer;
