import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules"; // Removed Navigation & Pagination
import "../WhatIsWitCon.css";
import slide1 from "../assets/WicsPic1.jpg";
import slide2 from "../assets/WicsPic3.jpg";
import slide3 from "../assets/WicsPic5.jpg";
import slide4 from "../assets/WicsPic6.jpg";
import slide5 from "../assets/WicsPic7.jpg";

import heroComputer from "../assets/WicsPic4.jpg";

const WhatIsWitCon = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5];

  return (
    <section className="witcon-section">
      <div className="content-container">
        <div className="text-box">
          <h2>What is WiTCON?</h2>
          <p>
            WiTCON 2025 is the signature Women in Technology Conference at
            Florida International University.
          </p>
          <br />
          <p>
            Join us for a full-day of learning, networking, and empowerment of
            underrepresented talent in tech. The event is scheduled for March
            XXth, 2025, and will be held at the Graham Center Ballrooms at FIU
            Modesto Maidique Campus from 9AM - 7PM.
          </p>
        </div>

        <div className="image-box">
          <img src={heroComputer} alt="hero Computer" />
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="swiper-container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          initialSlide={3}
          slideToClickedSlide={true} 
          
          coverflowEffect={{
            rotate: 0,
            stretch: 40,
            depth: 200,
            scale: 0.85,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]} 
          loop={true} 
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatIsWitCon;
