import React, { useRef } from 'react';
import video from './assets/video/video1.mp4'

const VideoBox = () => {
  const videoRef = useRef(null);


  const handleMouseOver = () => {
    videoRef.current?.play();
  };

  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="video-box"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut} >
      <video muted loop playsInline ref={videoRef}>
        <source
          src={video}
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

const VideoReelsSection = () => {
  return (
    <>
      {/* Inline styles */}
        <style>
            {`
                .video-row {
                    display: flex;
                    gap: 10px;
                    padding: 20px;
                }
                .video-box {
                    flex: 1;
                    position: relative;
                    overflow: hidden;
                    aspect-ratio: 9 / 16;
                    transition: transform 0.3s ease;
                    cursor: pointer;
                    border: 1px dashed black;
                    border-radius: 15px;
                }
                .video-box video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    border-radius: inherit;
                }
                .video-box:hover {
                    transform: scale(1.2);
                    border:none;
                    z-index:9;
                }
            `}
        </style>
        <section className="video-row">
            <VideoBox />
            <VideoBox />
            <VideoBox />
            <VideoBox />
            <VideoBox />
            <VideoBox />
        </section>
    </>
  );
};

export default VideoReelsSection;