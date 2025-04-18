import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode,Autoplay } from 'swiper/modules';

const VideoBox = ({ video }) => {
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
    >
      <video muted loop playsInline autoPlay ref={videoRef}>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

const VideoReelsSection = () => {
  const videoData = [
    "cgi Christmas Wish from Pavillion.mp4",
    "cgianimation of new store opening.mp4",
    "3D Venue Layout for Spacetech Festival.mp4",
    "Almost Human at Kai Room. cgiads cgianimation.mp4",
    "Artfront T-shirt CGI video campaign.mp4",
    "Best way to show your sneaker sales with CGI Animation.mp4",
    "Carabao Can Commercial CGI Animation.mp4",
    "Casino Gameplay 3D Commercial Ads.mp4",
    "Depicting the End of season sale at Pavillion Mall with cgianimation.mp4",
    "End of season sale in the most trending way.mp4",
    "How CGI transforms clothing brand into viral hits.mp4",
    "How to promote sneaker sale with CGI animations.mp4",
    "Live with the legends with WCL cgivideos cgianimation.mp4",
    "Pavillion Mall's Black Friday Sale with cgianimation.mp4",
    "Product Cans 3D Commercial Ads.mp4",
    "Rafael Cerato at Kai Room. cgiads cgianimation.mp4",
    "Rollings Carabao Cans VFX Animation.mp4"
  ];

  return (
    <>
      <style>
        {`
          .video-box {
            height: 450px;
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease;
            cursor: pointer;
            border: 1px dashed black;
            border-radius: 15px;
          }

          .video-box video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
          }
          
          .video-box:hover {
            transform: scale(1.05);
            border: none;
            z-index: 9;
          }
        `}
      </style>
      <div className='d-flex'>
          <div className='col-2'>
            
          </div>
          <div className='col-10'>
          <Swiper
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            loop={true} // <-- Enables infinite scroll
            autoplay={{
              delay: 2000,       // 1.5 seconds delay between scrolls
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper pt-4 px-2"
          >
            {
              videoData.map((file, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <VideoBox video={`/videos/cgi/${file}`} />
                </SwiperSlide>
              ))
            }
          </Swiper>
          </div>
      </div> 
    </>
  );
};

export default VideoReelsSection;
