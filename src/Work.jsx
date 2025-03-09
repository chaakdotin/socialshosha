import React from "react";
import './Work'

import Card from './Card'
import ResponsiveImageHoverEffect from './ResponsiveImageHoverEffect'
import ResponsiveCard from './ResponsiveCard'
import ScrollingTextSection from './ScrollingTextSection'
import VideoReelsSection from './VideoReelsSection'
import './Work.css'
const cards = [
  { text: "Hello", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "World", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "React", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "Code", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
];



const Work = () => {
    
  return (
    <>
      <div className="p-4 pt-5">
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
    </>
  );
};

export default Work;

// Inline CSS styles

