import React, { useState, useEffect } from "react";
import objectFitVideos from "object-fit-videos";
import "./Party.scss";
import Kuula from "../Kuula";
import Video from "../Video";

const Party = () => {
  const [videoSize, setVideoSize] = useState("small");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const playVideo = (videoElem) => videoElem.play();

  const onCanPlayThrough = (e) => {
    const videoElem = document.getElementById("video");
    const animDuration = 800;
    const endTimeout = (videoElem.duration || 8) * 1000 - animDuration;

    if (videoElem) {
      playVideo(videoElem);
      objectFitVideos();
      setVideoLoaded(true);
      setTimeout(onBeforeEnded, endTimeout);
    }
  };

  const onBeforeEnded = (e) => {
    const chatElem = document.getElementById("chat");
    chatElem.classList.add("-visible");
    setVideoEnded(true);
  };

  const onResize = () => {
    const isMedium = window.innerWidth > 600;
    const isLarge = window.innerWidth > window.innerHeight;
    const viewportSize = isLarge ? "large" : isMedium ? "medium" : "small";

    if (videoSize !== viewportSize) {
      setVideoSize(viewportSize);
    }
  };

  const videoProps = {
    onCanPlayThrough,
  };

  const openChat = () => {
    document.body.classList.remove("chat-closed");
  };

  const closeChat = () => {
    document.body.classList.add("chat-closed");
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    document.getElementById("chat-close").addEventListener("click", closeChat);
    document.getElementById("chat-open").addEventListener("click", openChat);

    return () => {
      window.removeEventListener("resize", onResize);
      document
        .getElementById("chat-close")
        .removeEventListener("click", closeChat);
      document
        .getElementById("chat-open")
        .removeEventListener("click", openChat);
    };
  });

  return (
    <section className="Party">
      <div className={`Party__video ${videoLoaded ? "-visible" : ""}`}>
        {/*
          Source cannot be updated dynamically on resize,
          so we have to rerender the whole video element
        */}

        {videoSize === "small" && <Video {...videoProps} videoSize="small" />}
        {videoSize === "medium" && <Video {...videoProps} videoSize="medium" />}
        {videoSize === "large" && <Video {...videoProps} videoSize="large" />}
      </div>

      <div
        className={`Party__kuula ${videoEnded ? "-visible" : ""} ${
          isIosDevice() ? "ios" : ""
        }`}
      >
        <Kuula />
        <a
          href="https://www.notsosecretsanta.co.uk/"
          className="Party_nsss-logo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/nsss-logo.png`}
            alt="Visit Not So Secret Santa"
          />
        </a>
      </div>
    </section>
  );
};

export default Party;
