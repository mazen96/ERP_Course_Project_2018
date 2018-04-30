import React from "react";
import BlockWithIcon from "./BlockWithIcon";
import './Landing-Page.css';


class ArrayOfBlocks extends React.Component {
 



  render() {
    let blocks = [];
    let arrayOfClassNams  = ["oneOverTwo" , "twoOverThree" , "threeOverFour"];
    if(this.props.blocks){
      blocks = this.props.blocks.map( (block,index) => {
        return (
          <BlockWithIcon key={index} className={arrayOfClassNams[index]} pic = {block.pic}  text = {block.text} title = {block.title}/>
        );
      });
    }

    return (
      <div className="threeColumn">
        {blocks}
      </div>
    );
  }
}

export default ArrayOfBlocks;
