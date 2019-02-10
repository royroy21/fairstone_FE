import React, { Component } from 'react';
import Item from './components/Item';
import Target from './components/Target';
import {DragDropContext} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class App extends Component {

  state = {
    items: [
      {id: 1, name: 'Item 1'},
      {id: 2, name: 'Item 2'},
    ],
  };

  deleteItem = (id) => {
    console.log('deleting item id: ' + id)
  };

  render() {
    return (
      <div className="App">
        <div className="item-container">
          {this.state.items.map((item, index) => (
            <Item
              key={item.id}
              item={item}
              handleDrop={(id) => this.deleteItem(id)}
            />
            ))}
        </div>
        <Target />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
