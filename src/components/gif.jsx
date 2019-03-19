import React, {Component} from "react";

class Gif extends Component{


  render(){
    return(

      <img className = 'gif' src="https://media3.giphy.com/media/{this.props.src}/giphy.gif" alt="gif"/>
      )
  }
}
export default Gif;
