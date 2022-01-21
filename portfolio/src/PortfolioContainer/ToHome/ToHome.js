import React from "react";
import "./ToHome.css";
import ScrollService from "../../utilities/ScrollService";

export default function ToHome() {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}