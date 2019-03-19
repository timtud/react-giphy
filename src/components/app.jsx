import React, {Component} from 'react';
import SearchBar from './searchbar';
import Gif from './gif';
import GifList from './giflist'
import giphy from 'giphy-api';

const APIKEY = 'KW1VZaMRq4329tePkSKKENkFMxDlny1V';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifslist: [],
      selectedGif: "wHc92cHADhpLi"
    }
  }

  search = (query) => {
    giphy({ apiKey: APIKEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
          console.log(result.data)

        this.setState({
          gifslist: result.data
        });
      });
  }

  changeGif = (id) => {
    this.setState({selectedGif: id})
  }

  render(){

    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction ={this.search}  />
          <div className="selected-gif"><Gif src = {this.state.selectedGif}/></div>
        </div>
        <div className="right-scene">
          <GifList changef = {this.changeGif} gifs = {this.state.gifslist} />
        </div>
      </div>
    );
  };
}

export default App;
