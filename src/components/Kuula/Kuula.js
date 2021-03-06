import React from "react";
import "./Kuula.scss";

const autoLoadUrl =
  "https://kuula.co/share/collection/7PV0J?fs=0&vr=1&sd=1&thumbs=-1&info=0&logo=-1";
// const introScreenUrl =
//   "https://kuula.co/share/collection/7PV0J?fs=1&vr=1&sd=1&initload=0&thumbs=1&info=0&logo=-1";

const Kuula = () => {
  return (
    <div className="Kuula">
      {/* eslint-disable-next-line */}
      <iframe
        src={autoLoadUrl}
        width="100%"
        height="100%"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          maxWidth: "100%",
        }}
        frameBorder="0"
        allowFullScreen
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        scrolling="no"
      ></iframe>
      <button className="Kuula__open-chat" id="chat-open">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/chat-button.png`}
          alt="Open chat panel"
        />
      </button>
    </div>
  );
};

export default Kuula;
