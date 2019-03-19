import React, {Component} from "react";

class SearchBar extends Component{


  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value)
  }

  render(){
    return(
      <input onChange = {this.handleUpdate} type="text" className='form-control form-search'/>
      )
  }
}
export default SearchBar
