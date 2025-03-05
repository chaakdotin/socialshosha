import React from "react";
import './Work'
import Card from './Card'
import ResponsiveImageHoverEffect from './ResponsiveImageHoverEffect'
const cards = [
  { text: "Hello", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "World", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "React", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "Code", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
];



const Work = () => {
    
  return (
    <>
        <div style={{height:"50vh", width:"100%",gap: '20px' }} className="d-flex justify-content-center align-items-center">
            {cards.map((card, index) => (
                <Card key={index} text={card.text} img={card.img} />
            ))}
        </div>
        <ResponsiveImageHoverEffect />
       
    </>
  );
};

export default Work;

// Inline CSS styles
const styles = `
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 20px;
    font-family: sans-serif;
    background: #f0f0f0;
  }

  
  .card {
    position: relative;
    width: calc(25% - 20px)!important;
    height: 300px!important;
    border: 1px dashed black;
    border-radius: 15px;
    overflow: hidden;
    background: #ffffff00 !important;
    transition: all 0.3s ease;
  }
  
  .card .text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: rgba(255, 255, 255, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: all 0.3s ease;
    z-index: 2;
    text-transform: uppercase;
  }
  
  .card .image-container {
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    height: 80%;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .card .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease;
  }
  
  .card:hover .image-container {
    top: 0;
    height: 100%;
  }
  
  .card:hover .text {
    top: 50%;
    color:#fff;
    transform: translateY(-50%);
  }
  .box {
    border: 2px dotted black;
    border-radius: 15px;
    margin: 10px;
    background: #f9f9f9;
    transition: flex 0.5s ease;
    flex: 1;
  }
  
  .box.active {
    flex: 2;
  }
  
  .container:hover .box {
    flex: 1;
  }
  
  .container .box:hover {
    flex: 2;
  }
  
  @media (max-width: 768px) {
    
    .box {
      margin: 5px;
      height: 60vh;
    }
  }
  @media (max-width: 768px) {
    .card {
      width: calc(50% - 20px);
    }
  }
  
  @media (max-width: 480px) {
    .card {
      width: 100%;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
