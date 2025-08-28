import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCss from "swiper/css?url";

const imgList = [
  "/assets/img/client/trusted-client_1.png",
  "/assets/img/client/trusted-client_2.png",
  "/assets/img/client/trusted-client_3.png",
  "/assets/img/client/trusted-client_4.png",
  "/assets/img/client/trusted-client_5.png",
  "/assets/img/client/trusted-client_6.png",
  "/assets/img/client/trusted-client_7.png",
  "/assets/img/client/trusted-client_1.png",
  "/assets/img/client/trusted-client_2.png",
  "/assets/img/client/trusted-client_3.png",
];

const TrustedClient = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = swiperCss;
    link.onload = () => {
      link.onload = null;
      link.rel = "stylesheet";
    };
    document.head.appendChild(link);
  }, []);
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="ak-slider ak-trusted-client-slider">
        <h4 className="title">Trusted Client</h4>
        <Swiper
          speed={1000}
          loop={true}
          slidesPerView={"auto"}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {imgList.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="trusted-client">
                <img src={item} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrustedClient;
