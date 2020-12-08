import React, { useState, useEffect } from "react";
import "./Placeholder.scss";

const Placeholder = () => {
  let isMedium = window.innerWidth > 600;
  let isLarge = window.innerWidth > window.innerHeight;
  let viewportSize = isLarge ? "large" : isMedium ? "medium" : "small";

  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSize, setImgSize] = useState("large");

  const onResize = () => {
    isMedium = window.innerWidth > 600;
    isLarge = window.innerWidth > window.innerHeight;
    viewportSize = isLarge ? "large" : isMedium ? "medium" : "small";

    if (imgSize !== viewportSize) {
      setImgSize(viewportSize);
    }
  };

  const onImageLoad = (e) => {
    setIsLoaded(true);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <section className="Placeholder">
      <div className={`Placeholder__bg ${isLoaded ? "-loaded" : ""}`}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/placeholder-${imgSize}.jpg`}
          className="-visuallyHidden"
          alt="You're too early! Doors open at 4pm, 10th December"
          onLoad={onImageLoad}
        />
      </div>
    </section>
  );
};

export default Placeholder;
