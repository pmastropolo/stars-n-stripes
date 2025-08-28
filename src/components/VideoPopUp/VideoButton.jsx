import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import modalCss from "react-modal-video/css/modal-video.css?url";

export default function VideoButton({ videoId }) {
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
    <div className="video-section">
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <button
        className="video-section-btn"
        aria-label="Play video"
      >
        <span
          className="ak-player-btn ak-accent-color"
          onClick={() => setOpen(true)}
        >
          <span></span>
        </span>
      </button>
    </div>
  );
}
