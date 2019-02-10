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
    targets: [
      {id: 1, name: null},
      {id: 2, name: null},
    ]
  };

  dropItem = (targetId, name) => {
    let targets = this.state.targets;
    targets.forEach(function (target) {
      if (target.id === targetId) {
        target.name = name
      }
    });
    this.setState({targets});

    console.log('state after drop: ', this.state)
  };

  render() {
    return (
      <div className="App">
        <div className="item-container">
          {this.state.items.map(item => (
            <Item
              key={item.id}
              id={item.id}
              item={item}
              handleDrop={(targetId, name) => this.dropItem(targetId, name)}
              state={this.state}
            />
            ))}
        </div>
        {this.state.targets.map(target => (
          <Target
            key={target.id}
            id={target.id}
            name={target.name}
          />
          ))}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
