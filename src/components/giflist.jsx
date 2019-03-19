import React, {Component} from "react";
import Gif from './gif'

class GifList extends Component{
  render(){
    return(
      <div className="gif-list">{
        this.props.gifs.map(gif => {
           return(<Gif changef = {this.props.changef} src = {gif.id} key = {gif.id}/>)
        })
        }</div>
      )
  }
}
export default GifList;
