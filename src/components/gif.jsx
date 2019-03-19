import React, {Component} from "react";

class Gif extends Component{

handleClick = (event) => {
  this.props.changef(this.props.src)
}

 render() {
    const src = `https://media2.giphy.com/media/${this.props.src}/200.gif`;
    return (
      <img onClick={this.handleClick} alt="" src={src} className ="gif" />
    );
  }
}
export default Gif;
