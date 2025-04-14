import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const DotVisualizer = () => {
  const visualizerRef = useRef(null);
  const columnsRef = useRef([]);
  const phasesRef = useRef([]);
  
  useEffect(() => {
    const visualizer = visualizerRef.current;
    const vw = window.innerWidth;
    const vh = window.innerHeight * 0.7;
    const dotSpacing = 25;
    const dotSize = 6;
    const columns = Math.floor(vw / dotSpacing);
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
      column.style.position = 'absolute';
      column.style.bottom = '0';
      column.style.left = `${i * dotSpacing}px`;
      column.style.display = 'flex';
      column.style.flexDirection = 'column-reverse';
      column.style.alignItems = 'center';

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
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / maxScroll;

      if (scrollFraction <= 0.33) {
        const opacityProgress = scrollFraction / 0.33;
        visualizer.style.opacity = 0.2 + (0.8 * opacityProgress);
      } else {
        visualizer.style.opacity = 1;
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
        visualizer.style.opacity = 0.2;
        columnsElements.forEach(column => {
            const dots = column.querySelectorAll('.dot');
            dots.forEach(dot => dot.classList.remove('highlight'));
        });
        textTop.classList.remove('highlight');
        textBottom.classList.remove('highlight');

        // Trigger smooth color flow

      } else {
        // Full opacity, all highlighted
        visualizer.style.opacity = 1;
        setTimeout(()=>{
          columnsElements.forEach(column => {
            const dots = column.querySelectorAll('.dot');
            dots.forEach(dot => dot.classList.add('highlight'));
          });
          textTop.classList.add('highlight');
          textBottom.classList.add('highlight');
        }, 2000)
    }
  };
  

  return (
    <>
      <div
      ref={visualizerRef}
      style={{
        width: '100vw',
        height: '70vh',
        position: 'fixed',
        top: '15vh',
        left: "15px",
        opacity: 0.2,
        transition: 'opacity 0.5s ease',
        pointerEvents: 'none',
        zIndex: 0
      }}
      className='visualizerRef px-3'
    />
    <div className='w-100 h-100 p-3 d-flex flex-column justify-content-between '>
      <div className='d-flex align-items-center justify-content-between '>
        <h1 style={{fontSize:"115.2px"}} id="text-top" className='text-element'>40.9B tons</h1>
        <div className='col-4 d-flex position-relative py-2'>
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
      <div className='d-flex flex-column text-element' id="text-bottom">
        <span style={{fontSize:"52px"}}>243.9M tons of which</span>
        <span style={{fontSize:"14px"}}>are produced in United Arab Emirates</span>
      </div>
    </div>
    </>
  );
};

export default DotVisualizer;
