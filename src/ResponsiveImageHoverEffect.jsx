import React,{ useState }  from "react";
import "./ResponsiveImageHoverEffect.css";




const ResponsiveImageHoverEffect = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Array of image sources
    const images = [
      "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/6684f9ab524ba4eff68bbf6c_Speedo-Go-Full-Speedo-Campaign-2-scaled.webp",
      "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/6684f97a0bfb36b57c6b4ab4_Ladies-In-Black.webp",
      "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/6684f8f62d054623f301d4d8_Speedway.webp",
    ];
  return (
    <>
        <div className="containers">
        {images.map((src, index) => (
            <div
            key={index}
            className={`box ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            >
            <img src={src} alt={`Image ${index + 1}`} />
            </div>
        ))}
        </div>
    </>
  );
};

export default ResponsiveImageHoverEffect;