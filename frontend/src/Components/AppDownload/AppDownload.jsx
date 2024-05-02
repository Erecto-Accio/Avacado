import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <h3>
        For Better Experience Download Our <br /> Avacado App
      </h3>

      <div className="app-download-img-container">
        <img src={assets.play_store} alt="" loading="lazy" />
        <img src={assets.app_store} alt="" loading="lazy" />
      </div>
    </div>
  );
};

export default AppDownload;
