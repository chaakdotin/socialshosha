import React from 'react';


const ImageMarquee = () => {
  const images = new Array(20).fill(
    'https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a5aaa1ed9ddfeb688754_Dhampur%20Logo%20Asset%203%402x%20-%20Alankrit%20Johri%20(1)-p-500.webp'
  );

  return (
    <section className="image-section">
      <div className="image-row row-1">
        {images.map((src, index) => (
          <img key={`row1-${index}`} src={src} alt="img" />
        ))}
      </div>
      <div className="image-row row-2">
        {images.map((src, index) => (
          <img key={`row2-${index}`} src={src} alt="img" />
        ))}
      </div>

      <style>{`
        .image-section {
          height: 30vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 2px;
          position: relative;
          width: 100%;
        }

        .image-row {
          display: flex;
          white-space: nowrap;
          flex: 1;
          gap: 10px;
          min-width: 100%;
          z-index: 0;
        }

        .image-row img {
          height: 14vh;
          width: 10vw;
          margin-right: 5px;
          flex-shrink: 0;
          object-fit: contain;
        }

        .row-1 {
          animation: scroll-left 25s linear infinite;
        }

        .row-2 {
          animation: scroll-right 25s linear infinite;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .image-section::before,
        .image-section::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 15%;
          z-index: 1;
        }

        .image-section::before {
          left: 0;
          background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        }

        .image-section::after {
          right: 0;
          background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
        }
      `}</style>
    </section>
  );
};

export default ImageMarquee;