import React from "react";
import WWD_FAQ_Bottom_Card from "./wwd_faq_bottom_card";

class WWD_FAQ_Bottom extends React.Component {
  render() {

    var allData = ["", "", "",
                "", "", "",
                "", "", ""];
    return (
      <div className="wwd-faq-sec2">

        {allData.map(function(data, index){
                     return <WWD_FAQ_Bottom_Card key={ index }/>;
        })}
        
      </div>
    );
  }
}

export default WWD_FAQ_Bottom;
