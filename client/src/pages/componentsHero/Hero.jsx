import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`px-4 py-40 my-0 text-center backgroundImg ${
        showImage ? "fade-in" : "fade-out"
      }`}
    >
      <div className={`text-container ${showImage ? "" : "hide-text"}`}>
        <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 font-semibold text-2xl">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
