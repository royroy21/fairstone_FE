import {cloneDeep} from 'lodash';
import React, { Component } from 'react';
import DragSourceItem from './../../atoms/DragSourceItem';
import DragTargetItem from '../../atoms/DragTargetItem';
import {DragDropContext} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class Game extends Component {

  defaults = {
    items: [
      {id: 1, name: 'Item 1'},
      {id: 2, name: 'Item 2'},
    ],
    targets: [
      {id: 1, name: null},
      {id: 2, name: null},
    ]
  };

  state = cloneDeep(this.defaults);

  buttonStyle = {
    backgroundColor: 'lightblue',
    border: '1px solid grey',
    width: '200px',
    margin: '5px',
    padding: '5px',
    textAlign: 'center',
  };

  resetState = () => {
    this.setState(state => {
      return cloneDeep(this.defaults)
    });
  };

  dropItem = (targetId, name) => {
    let targets = this.state.targets;
    targets.forEach(function (target) {
      if (target.id === targetId) {
        target.name = name
      }
    });
    this.setState({targets});
  };

  render() {
    return (
      <div className="App">
        <div className="item-container">
          {this.state.items.map(item => (
            <DragSourceItem
              key={item.id}
              id={item.id}
              item={item}
              handleDrop={(targetId, name) => this.dropItem(targetId, name)}
            />
            ))}
        </div>
        <div className="target-container">
          {this.state.targets.map(target => (
            <DragTargetItem
              key={target.id}
              id={target.id}
              name={target.name}
            />
            ))}
        </div>
        <div>
          <button style={this.buttonStyle} onClick={this.resetState}>
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Game);
