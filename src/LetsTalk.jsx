import React, { useEffect, useRef } from 'react';

const LetsTalk = () => {
  const topVideoRef = useRef(null);
  const middleVideoRef = useRef(null);
  const bottomVideoRef = useRef(null);

  const rotateVideos = () => {
    const topVideo = topVideoRef.current;
    const middleVideo = middleVideoRef.current;
    const bottomVideo = bottomVideoRef.current;
    if (!topVideo || !middleVideo || !bottomVideo) return;

    // Add wipe-out animation to the top video
    topVideo.classList.add('wipe-out');

    // After 600ms, update the classes to rotate positions
    setTimeout(() => {
      topVideo.classList.remove('wipe-out', 'top');
      topVideo.classList.add('bottom', 'wipe-in');

      middleVideo.classList.remove('middle');
      middleVideo.classList.add('top');

      bottomVideo.classList.remove('bottom');
      bottomVideo.classList.add('middle');

      // Remove the wipe-in class after the animation completes
      setTimeout(() => {
        topVideo.classList.remove('wipe-in');
      }, 600);
    }, 600);
  };

  useEffect(() => {
    const intervalId = setInterval(rotateVideos, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <style>{`
        .containers {
          display: flex;
          height: 100vh;
          width: 100%;
          
        }
        .left-section,
        .right-section {
          width: 25%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eee;
          padding: 20px;
          box-sizing: border-box;
        }
        .center-section {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .video-stack {
          position: relative;
          width: 70%;
          left: -100px;
        }
        .video-stack video {
          position: absolute;
          width: 100%;
          top: 0;
          left: 0;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          transition: transform 0.6s ease, opacity 0.6s ease;
        }
        .top {
          transform: translate(200px, -200px);
          z-index: 3;
        }
        .middle {
          transform: translate(100px, -100px);
          z-index: 2;
        }
        .bottom {
          transform: translate(0, 0);
          z-index: 1;
        }
        @keyframes wipeOut {
          from { transform: translate(200px, -200px); opacity: 1; }
          to   { transform: translate(300px, -300px); opacity: 0; }
        }
        .wipe-out {
          animation: wipeOut 0.6s forwards;
        }
        @keyframes wipeIn {
          from { transform: translate(0px, 0px); opacity: 0; }
          to   { transform: translate(0, 0); opacity: 1; }
        }
        .wipe-in {
          animation: wipeIn 0.6s forwards;
        }
      `}</style>
      <div className="containers">
        {/* Left text section */}
        <div className="left-section">
          <p>यहाँ बाएँ तरफ का टेक्स्ट है।</p>
        </div>

        {/* Center video section */}
        <div className="center-section">
          <div className="video-stack">
            <video
              ref={topVideoRef}
              className="top"
              src="https://videos.pexels.com/video-files/31032727/13264078_2560_1440_25fps.mp4"
              autoPlay
              muted
              loop
            />
            <video
              ref={middleVideoRef}
              className="middle"
              src="https://videos.pexels.com/video-files/31032727/13264078_2560_1440_25fps.mp4"
              autoPlay
              muted
              loop
            />
            <video
              ref={bottomVideoRef}
              className="bottom"
              src="https://videos.pexels.com/video-files/31032727/13264078_2560_1440_25fps.mp4"
              autoPlay
              muted
              loop
            />
          </div>
        </div>

        {/* Right text section */}
        <div className="right-section">
          <p>यहाँ दाएँ तरफ का टेक्स्ट है।</p>
        </div>
      </div>
    </>
  );
};

export default LetsTalk;