import React from 'react';

const Marquee = () => {
  // Array of image URLs (duplicated for seamless marquee)
  const images = [
    '/img/Profile (1).jpg',
    '/img/Profile (1).jpg',
    '/img/Profile (1).jpg',
    '/img/Profile (1).jpg',
    '/img/Profile (1).jpg',
    '/img/Profile (1).jpg',
    '/img/Profile (1).jpg',
    '/img/Profile (1).jpg',
    '/img/Profile (1).jpg',
    '/img/Profile (1).jpg',
    '/img/Profile (1).jpg',
    '/img/Profile (1).jpg',
  ];

  return (
    <div className="marquee-section w-100">
      <div className="marquee">
        {images.map((src, index) => (
          <div key={index} className="circle">
            <img src={src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;