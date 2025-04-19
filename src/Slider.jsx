import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/navigation';

const Slider = () => {
  const slides = [
    {
      title: "Website Development & UI/UX",
      heading: "We create high-performing, visually stunning websites that offer seamless user experiences."
    },
    {
      title: "SEO & Digital Marketing",
      heading: "Boost your online presence with cutting-edge SEO strategies and targeted digital marketing."
    },
    {
      title: "Social Media & Influencer Marketing",
      heading: "Amplify your brand’s voice with strategic social media campaigns and influencer collaborations."
    },
    {
      title: "Branding & Graphic Design",
      heading: "Your brand identity is more than just a logo—it’s a statement."
    },
    {
      title: "CGI Ads & Production Shoots",
      heading: "Bring your brand to life with high-end CGI ads and professional shoots."
    },
    {
      title: "Public Relations & Media Outreach",
      heading: "Build credibility and industry authority with strategic PR campaigns."
    }
  ];
  
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        loop={true}
        slidesPerView={3}
      
        spaceBetween={20}
        style={{ padding: '10px 0' }}
      >
        {slides.map((data, index) => (
          <SwiperSlide
            key={index}
            className='col-4 '
          >
            <div className="rectangle">
              <div>0{index+1}</div>
              <div className="d-flex flex-column">
                <div style={{ fontSize: '30px', lineHeight: '1', height:"65px" }}>
                  <span>{data.title}</span>
                </div>
                <div className="py-3" style={{ fontSize: '13px' }}>
                  <span>
                    {data.heading}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-100 controls mt-3 d-flex justify-content-start">
        <button
          className="custom-prev"
          style={{ padding: '8px 15px' }}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className="custom-next d-flex align-items-center justify-content-end"
          style={{ padding: '8px 10px 8px 40px' }}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
