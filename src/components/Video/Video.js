import React from "react";
import isIosDevice from "../../utils/isIosDevice";

const Video = ({ onCanPlayThrough, videoSize }) => (
  <video
    id="video"
    className="Video"
    muted
    autoPlay={isIosDevice()}
    onCanPlayThrough={onCanPlayThrough}
    preload
    playsInline
  >
    <source
      src={`${process.env.PUBLIC_URL}/assets/video/video-${videoSize}.mp4`}
      type="video/mp4"
    />
  </video>
);

export default Video;
