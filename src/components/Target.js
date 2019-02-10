import React, { Component } from 'react';
import {DropTarget} from "react-dnd";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class Target extends Component {

  style = {
    backgroundColor: 'lightblue',
    border: '1px solid black',
    maxWidth: '150px',
    margin: '5px',
    padding: '5px',
    textAlign: 'center',
  };

  render() {

    const {connectDropTarget, hovered, item} = this.props;

    return connectDropTarget(
      <div className='target' style={this.style}>
        {item ? item.name : 'None'}
      </div>
    )
  }
}

export default DropTarget('item', {}, collect)(Target);
