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
  const CGI_Video = [
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
  const DIGITAL_INVITATIONS_Video = [
    "3D wedding digital invite _ Animated wedding invitation.mp4",
    "A complete wedding digital invite _ Mehendi invite _ Cocktail digital invite.mp4",
    "Baby Gender Reveal Digital Invites _ Baby announcement invitation.mp4",
    "Cocktail Ceremony Digital Invitation _ Shagun and cocktail e-invite.mp4",
    "Digital invitation for Wedding Jagran.mp4",
    "Engagement Animated Invite.mp4",
    "Guruji Satsang and Godh Bharai Digital Invite.mp4",
    "Haldi Carnival _ Invite your family with this digital Haldi invitation.mp4",
    "Haldi Carnival Digital Invitation _ Wedding E-invites.mp4",
    "Invite your close ones with this Engagement Digital Invite.mp4",
    "Roka & Ring Ceremony video digital invitation.mp4",
    "Roka Ceremony digital Invitation _ E-invites for wedding.mp4",
    "Roka Ceremony Digital Invitation.mp4",
    "ROKAFIED! Roka and Ring Ceremony Digital Invite.mp4",
    "Shaam Mastani _ A Ring ceremony digital invitation video.mp4",
    "Sufi Night Digital Invitation Video.mp4",
    "Wedding bells are ringing for Vaibhav & Mansha.mp4",
    "Wedding digital invitation with caricatures _ Caricature Wedding Invite.mp4",
    "Wedding Kirtan Digital Invitation.mp4"
  ];
  const Reels_Video = [
    "Animated Reel for Chhokra Soaps.mp4",
    "Bloom & Hues.mp4",
    "MHA IRI & Pisapia Promo Reel.mp4",
    "MHA IRI & Pisapia Promo Reel.mp4.crdownload.mp4",
    "Orillia - Kasauli.mp4",
    "Reel shot and edited for Bloom & Hues.mp4",
    "Reel shot and edited for Zorra Saab (1).mp4",
    "Reel shot and edited for Zorra Saab.mp4",
    "Sage Couture.mp4",
    "Sardar Jewellers, Ludhiana.mp4",
    "WCL Animated Reel.mp4"
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
            .card-300-100{
              height:100%!important;
            }
        `}
      </style>
      <div className='d-flex pt-4'>
          <div className='col-4'>
            <div className="card-300 card-300-100">
              <div className='text-center'>
                <div className="cell_eyebrow mx-auto"><div className="eyebrow_14-4"><strong>FEATURED</strong></div></div>
                <div className="cell_h4 mx-auto"><h4 className="h-h4 is-big">OUT<br />Now</h4></div>
                <div className="cell_text-2 mx-auto"><div className="body_17">'Falling Out Of Time | True'<br /><br />Available on all streaming platforms. </div></div>
              </div>
            </div>
          </div>
          <div className='col-8'>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              loop={true} // <-- Enables infinite scroll
              autoplay={{
                delay: 2000, // 1.5 seconds delay between scrolls
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Autoplay]}
              className="mySwiper px-2"
            >
              {
                CGI_Video.map((file, index) => (
                  <SwiperSlide key={index} style={{ width: 'auto' }}>
                    <VideoBox video={`/videos/cgi/${file}`} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
      </div> 
      <div className='d-flex pt-4' >
        <div className='col-8'>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            loop={true} // <-- Enables infinite scroll
            autoplay={{
              delay: 3000, // 1.5 seconds delay between scrolls
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper px-2"
          >
            {
              DIGITAL_INVITATIONS_Video.map((file, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <VideoBox video={`/videos/DIGITAL INVITATIONS/${file}`} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='col-4'>
          <div className="card-300 card-300-100">
            <div className='text-center'>
              <div className="cell_eyebrow mx-auto"><div className="eyebrow_14-4"><strong>FEATURED</strong></div></div>
              <div className="cell_h4 mx-auto"><h4 className="h-h4 is-big">OUT<br />Now</h4></div>
              <div className="cell_text-2 mx-auto"><div className="body_17">'Falling Out Of Time | True'<br /><br />Available on all streaming platforms. </div></div>
            </div>
          </div>
        </div>
      </div> 
      <div className='d-flex pt-4' >
        <div className='col-4'>
          <div className="card-300 card-300-100">
            <div className='text-center'>
              <div className="cell_eyebrow mx-auto"><div className="eyebrow_14-4"><strong>FEATURED</strong></div></div>
              <div className="cell_h4 mx-auto"><h4 className="h-h4 is-big">OUT<br />Now</h4></div>
              <div className="cell_text-2 mx-auto"><div className="body_17">'Falling Out Of Time | True'<br /><br />Available on all streaming platforms. </div></div>
            </div>
          </div>
        </div>
        <div className='col-8'>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            loop={true} // <-- Enables infinite scroll
            autoplay={{
              delay: 4000, // 1.5 seconds delay between scrolls
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper px-2"
          >
            {
              Reels_Video.map((file, index) => (
                <SwiperSlide key={index} style={{ width: 'auto' }}>
                  <VideoBox video={`/videos/Reels/${file}`} />
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
