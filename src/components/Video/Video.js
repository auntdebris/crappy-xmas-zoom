import React from "react";

const isIosDevice = () => {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
};

const Video = ({ onCanPlayThrough, videoSize }) => (
  <video
    id="video"
    className="Video"
    muted
    autoPlay={isIosDevice()}
    onCanPlayThrough={onCanPlayThrough}
  >
    <source
      src={`${process.env.PUBLIC_URL}/assets/video/video-${videoSize}.mp4`}
      type="video/mp4"
    />
  </video>
);

export default Video;
