import React from "react";
import WWD_FAQ_Upper from "./wwd_faq_upper";
import WWD_FAQ_Bottom from "./wwd_faq_bottom";
import "./wwd-faq-style.css"

class WWD_FAQ extends React.Component {
  render() {
    return (
      <div className="wwd-faq-main">
        <WWD_FAQ_Upper />
        <WWD_FAQ_Bottom />
      </div>
    );
  }
}

export default WWD_FAQ;
