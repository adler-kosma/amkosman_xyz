import React from "react";
import lily from "../img/lily.png";

// The lily at the bottom of every page panel, marking the end of the page.
function EndMark() {
  return <img className="end-mark" src={lily} alt="" aria-hidden="true" />;
}

export default EndMark;
