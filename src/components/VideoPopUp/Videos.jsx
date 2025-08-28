import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import modalCss from "react-modal-video/css/modal-video.css?url";

import aboutVideoBg from "/assets/img/bg/car_video_bg.jpg";

const Videos = ({ videoId }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = modalCss;
    link.onload = () => {
      link.onload = null;
      link.rel = "stylesheet";
    };
    document.head.appendChild(link);
  }, []);
  return (
    <>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="video-section">
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setOpen(false)}
        />
        <img
          src={aboutVideoBg}
          alt="..."
          className="video-section-bg-img ak-bg"
          data-aos="zoom-out-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        />
        <button
          className="video-section-btn"
          aria-label="Play video"
        >
          <span className="ak-heartbeat-btn" onClick={() => setOpen(true)}>
            <span></span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Videos;
