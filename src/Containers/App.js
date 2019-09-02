import React, {Component} from 'react';
import './App.css';
import data from './data.js'
import Item from '../Components/Item'
//console.log(data);

class App extends Component{

  render() {
    const item = data;
    //console.log(item);
    return (
      <div>
        <ul>
          <Item item={item}/>
        </ul>
      </div>
    )
  }
}

export default App;
