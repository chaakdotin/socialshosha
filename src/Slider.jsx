import React, { useState, useEffect, useRef } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const totalOriginalSlides = 6; // Original number of slides
  const slideWidth = 170; // Rectangle width (150px) + margin (20px)

  // Array for rendering slides (duplicated for infinite effect)
  const slides = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];

  const moveSlider = (direction) => {
    let newIndex = currentIndex;
    if (direction === 'right') {
      newIndex += 1;
    } else if (direction === 'left') {
      newIndex -= 1;
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Handle infinite loop
    if (currentIndex >= totalOriginalSlides) {
      setTimeout(() => {
        slider.style.transition = 'none';
        setCurrentIndex(0);
        slider.style.transform = `translateX(0)`;
      }, 500);
    } else if (currentIndex < 0) {
      setTimeout(() => {
        slider.style.transition = 'none';
        setCurrentIndex(totalOriginalSlides - 1);
        slider.style.transform = `translateX(-${(totalOriginalSlides - 1) * slideWidth}px)`;
      }, 500);
    }
  }, [currentIndex]);

  return (
    <div>
      <div className="slider" ref={sliderRef}>
        {slides.map((num, index) => (
          <div key={index} className="col-4 rectangle">
            <div>
              0{num}
            </div>
            <div className='d-flex flex-column'>
              <div  style={{fontSize:"30px",lineHeight:"1"}}>
                <span>Governments & Municipalities</span>
              </div>
              <div className='py-3' style={{fontSize:"13px"}}>
                <span>Saapro can help cities handle growing waste management needs efficiently.</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-100'>
        <div className="controls">
          <button onClick={() => moveSlider('left')} style={{padding:"8px 15px"}}><i className="fa-solid fa-arrow-left"></i></button>
          <button onClick={() => moveSlider('right')} style={{padding:"8px 10px 8px 40px"}} className='d-flex align-items-center justify-content-end'><i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Slider;