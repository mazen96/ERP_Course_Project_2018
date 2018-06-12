import React from "react";
import NewsFadeUpper from "./news_fade_upper";
import NewsFadeBottom from "./news_fade_bottom";
import './news-fade.css';

class NewsFade extends React.Component {
  render() {
    return (
      <div className="news-fade-wrapper">
        <NewsFadeUpper />
        <NewsFadeBottom />
      </div>
    );
  }
}

export default NewsFade;
