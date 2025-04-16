import React, { useEffect, useRef } from 'react';

const LetsTalk = () => {
  const topVideoRef = useRef(null);
  const middleVideoRef = useRef(null);
  const bottomVideoRef = useRef(null);

  useEffect(() => {
    const rotateVideos = () => {
      // Select the three video elements
      const topVideo = document.querySelector('.video-stack .top');
      const middleVideo = document.querySelector('.video-stack .middle');
      const bottomVideo = document.querySelector('.video-stack .bottom');

      // Apply wipe-out animation to the top video
      topVideo.classList.add('wipe-out');

      // After 600ms, reassign the classes to change positions
      setTimeout(() => {
        // The top video moves to the bottom position with a wipe-in effect
        topVideo.classList.remove('wipe-out', 'top');
        topVideo.classList.add('bottom', 'wipe-in');

        // Middle video shifts up to become the top video
        middleVideo.classList.remove('middle');
        middleVideo.classList.add('top');

        // Bottom video becomes the middle video
        bottomVideo.classList.remove('bottom');
        bottomVideo.classList.add('middle');

        // Remove the wipe-in effect after it finishes
        setTimeout(() => {
          topVideo.classList.remove('wipe-in');
        }, 600);
      }, 600);
    };

    const intervalId = setInterval(rotateVideos, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <style>{`
        .containers {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100%;
          
        }
        .left-section,
        .right-section {
          width: 25%;
          display: flex;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
        }
        .center-section {
          width: 40%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .video-stack {
          position: relative;
          width: 60%;
          left: -50px;
          top: -100px;
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
          transform: translate(100px, -100px);
          z-index: 3;
        }
        .middle {
          transform: translate(50px, -50px);
          z-index: 2;
        }
        .bottom {
          transform: translate(0, 0);
          z-index: 1;
        }
        @keyframes wipeOut {
          from { transform: translate(100px, -100px); opacity: 1; }
          to   { transform: translate(150px, -150px); opacity: 0; }
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
          .left-section {
              justify-content: end;
          }
              .right-section {
              justify-content: start;
          }
        .left-section a{
          color:#949ea9!important;
            font-size: 14px;
        }
            
        .right-section button{
            font-size: 14px;
            border-radius: 30px;
        }
        .border-28282E {
            --tw-border-opacity: 1;
            border-color: rgb(40 40 46 / var(--tw-border-opacity));
        }
        .bg-28282E {
            --tw-bg-opacity: 1;
            background-color: rgb(40 40 46 / var(--tw-bg-opacity));
        }
            .border-1px {
    border-width: 1px;
}

.rounded-full {
    border-radius: 9999px;
}
.place-items-center {
    place-items: center;
}
.w-43px {
    width: 43px;
}
.h-43px {
    height: 43px;
}
    .w-11px {
    width: 11px;
}
.h-11px {
    height: 11px;
}

.dfdf a:hover .hireOurTeamTitle {
    transform: translate(50px);
     animation: a .5s linear;
}
    .dfdf a:hover .hireOurTeamArrow {
     transform: translate(-170px) scale(1);
    animation: h .5s linear;
}
    @keyframes h{
      0%{
        transform: translate(0px) scale(0);
      }
        100%{
        transform: translate(-170px) scale(1);
        }
    }
        @keyframes a{
      0%{
        transform: translate(0px);
      }
        100%{
        transform: translate(50px);
        }
    }
      `}</style>
      <div className="containers">
        {/* Left text section */}
        <div className="col-12">
          <h1 style={{ fontSize: "140px", fontWeight: "700", lineHeight: "140px" }}>Let's talk.</h1>
        </div>
        <div className='d-flex w-100 position-relative h-100'>
          <div className="left-section">
            <ul style={{ textUnderlineOffset: "4px", textDecorationLine: "underline", fontWeight: 500, fontSize: "14px", color:"#949ea9" }}>
              <li className='d-flex'>
                <a href="#">Linkdln</a>
              </li>
              <li className='d-flex'>
                <a href="#">Twitter</a>
              </li>
              <li className='d-flex'>
                <a href="#">Instagram</a>
              </li>
            </ul>
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
          <div className="right-section dfdf">
            <a href="#" className='d-flex gap-2 '>
              <button className='hireOurTeamTitle btn btn-light px-4 py-2' style={{ fontWeight: 500, fontSize: "18px", borderColor: "rgb(222 228 234 / 1)",position: 'relative', zIndex: 1,}}>Hire our team</button>
              <div
                class="hireOurTeamArrow border-1px border-28282E d-grid place-items-center w-43px h-43px rounded-full bg-28282E">
                <svg class="w-11px h-11px" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.5H11M11 6.5L5.93606 1M11 6.5L5.93606 12" stroke="white" stroke-width="2"></path>
                </svg>
              </div>
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsTalk;