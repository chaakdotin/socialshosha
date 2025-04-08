import React, { useEffect, useRef } from 'react'
// import './Contact.css'
const Contact = () => {
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
            width: 20%;
            display: flex;
            align-items: center;
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
            width: 50%;
            height: 600px;
            left: -100px;
          }
          .video-stack video {
            object-fit:cover;
            position: absolute;
            width: 100%;
            height: 100%;
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
              font-size: 14px;
          }
              
          .right-section span{
              font-size: 40px;
              letter-spacing: -.03em;
              font-weight: 900;
          }
          .right-section ul{
          
            margin: 0;
            margin-top: 1.25rem;
            padding: 0;
            list-style: none;
            text-underline-offset: 2px;
            text-decoration-line: underline;
            font-weight: 600;
            font-size: 14px;
            display: flex;
            flex-direction: column;
          }
            .right-section ul a{
              color: #949ea9!important;
            }
            .right-section button{
               color: #949ea9!important;
               text-underline-offset: 2px;
              text-decoration-line: underline;
              padding: 0;
              margin: 0;
              font-weight: 600;
              font-size: 14px;
              margin-top: 1.25rem;
            }
        `}</style>
        <div className="containers px-5">
          {/* Left text section */}
          <div className="col-12">
              <h1 style={{fontSize:"140px", fontWeight:"700", lineHeight:"140px"}}>Contact.</h1>
          </div>
          <div className='d-flex w-100 position-relative h-100 px-5 justify-content-center'>
              <div className="left-section">
                <div className='d-flex flex-column'>
                  <div>
                      <span style={{fontSize:"40px", fontWeight:"700", lineHeight:"40px"}}>Brief us.</span>
                  </div>
                  <div style={{marginTop:"30px", color:"rgb(148 158 169,1)", maxWidth:"100%", fontSize:"14px",lineHeight:"1.2"}}>
                    <p>Schedule a call with Voila to discuss your branding, design and/or development project.</p>
                  </div>
                  <div style={{marginTop:"20px"}}>
                    <button className='btn bg-transparent' style={{borderRadius:"30px", border:"1px solid #dee4ea", fontSize:"18px", paddingTop:"7px", fontWeight:"700"}}>Schedule a call</button>
                  </div>
                </div>
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
              <div className="right-section ">
                  <div className='d-flex flex-column'>
                    <div>
                      <span>Contact.</span>
                    </div>
                    <div>
                      <ul>
                          <li><a href="#">Linkedln</a></li>
                          <li><a href="#">Twitter</a></li>
                          <li><a href="#">Instagram</a></li>
                      </ul>
                    </div>
                    <div >
                      <button className='btn bg-transparent' href="mailto:hi@studiovoila.com">hi@studiovoila.com</button>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </>
  )
};

export default Contact;
