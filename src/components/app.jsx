import React, {Component} from 'react';
import SearchBar from './searchbar';
import Gif from './gif';
import GifList from './giflist'
class App extends Component {


  render(){
    const gifslist = [
      {id: 'wHc92cHADhpLi'},
      {id: 'wHc92cHADhpLi'},
       {id: 'qFxlqjtA3m44U'}
    ];
    return(
      <div>
        <div className="left-scene">
          <SearchBar/>
          <div className="selected-gif"> <Gif src = "https://media3.giphy.com/media/wHc92cHADhpLi/giphy.gif"/> </div>
        </div>
        <div className="right-scene">
          <GifList gifs = {gifslist} />
        </div>
      </div>
    );
  };
}

export default App;
