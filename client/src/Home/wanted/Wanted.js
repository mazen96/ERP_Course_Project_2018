import React from "react";
import './wanted.css'
import WantedBlock from "./WantedBlock"

class Wanted extends React.Component {

  constructor() {
    super();
    this.state = {
      WantedBlocks: []
    }
  }

  //this function call the backend
  componentWillMount() {
    this.setState({
      WantedBlocks: [
        {
          name: 'Name',
          age: "28",
          text: "primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on",
          img : "./img/redCircle.png"
        }, {
          name: 'Name',
          age: "28",
          text: "primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on",
          img : "./img/redCircle.png"
        }, {
          name: 'Name',
          age: "28",
          text: "primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on",
          img : "./img/redCircle.png"
        }, {
          name: 'Name',
          age: "28",
          text: "primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on",
          img : "./img/redCircle.png"
        }, {
          name: 'Name',
          age: "28",
          text: "primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on",
          img : "./img/redCircle.png"
        }, {
          name: 'Name',
          age: "28",
          text: "primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on",
          img : "./img/redCircle.png"
        }
      ]
    });
  }


  render() {

    let blocks = [] ;
    blocks = this.state.WantedBlocks.map((element, i) => {
      return (<WantedBlock {...element} id={i+1}  key = {i}/>);
    });

    return (

      <div className="parent">
        <div className="first">
          <h1><b>WANTED</b></h1><br />
        </div>
        <div >
          {blocks}
        </div>
      </div>

    );
  }
}

export default Wanted;