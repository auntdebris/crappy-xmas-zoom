import React from "react";

const Video = ({ onCanPlayThrough, videoSize }) => (
  <video id="video" className="Video" muted onCanPlayThrough={onCanPlayThrough}>
    <source
      src={`${process.env.PUBLIC_URL}/assets/video/video-${videoSize}.mp4`}
      type="video/mp4"
    />
  </video>
);

export default Video;
