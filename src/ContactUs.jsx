import React, { useEffect, useRef } from 'react'

export default function ContactUs() {
    const topVideoRef = useRef(null);
    const middleVideoRef = useRef(null);
    const bottomVideoRef = useRef(null);
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
            .left-section {
                justify-content: end;
            }
                .right-section {
                justify-content: start;
            }
            .left-section a{
                font-size: 14px;
            }
                
            .right-section button{
                font-size: 14px;
                border-radius: 30px;
            }
        `}</style>
        <div className="containers">
            {/* Left text section */}
            <div className="col-12">
                <h1 style={{fontSize:"140px", fontWeight:"700", lineHeight:"140px"}}>Let's talk.</h1>
            </div>
            <div className='d-flex w-100 position-relative h-100'>
                <div className="left-section">
                <ul>
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
                <div className="right-section">
                <button className='btn btn-light'>Hire our team</button>
                </div>
            </div>
        </div>
        </>
    )
}
