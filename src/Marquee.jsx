import React from 'react';

const Marquee = () => {
  // Array of image URLs (duplicated for seamless marquee)
  const images = [
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
    'https://images.pexels.com/photos/2386141/pexels-photo-2386141.jpeg',
  ];

  return (
    <div className="marquee-section">
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