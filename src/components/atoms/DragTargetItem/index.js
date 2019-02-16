import React, { Component } from 'react';
import {DropTarget} from "react-dnd";

const TargetSource = {
  drop(props, monitor, component) {
    return {targetId: props.id}
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class DragTargetItem extends Component {

  item = null;

  style = {
    border: '1px dashed grey',
    maxWidth: '200px',
    minHeight: '50px',
    margin: '5px',
    padding: '5px',
    textAlign: 'center',
  };

  setItem = (hovered, item) => {
    if (hovered && item) {
      this.item = item
    }
  };

  render() {
    const {connectDropTarget, hovered, item} = this.props;
    const backgroundColor = hovered ? 'lightgrey' : 'white';

    this.setItem(hovered, item);
    let newStyle = {...this.style, backgroundColor};

    return connectDropTarget(
      <div className='target' style={newStyle}>
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default DropTarget('item', TargetSource, collect)(DragTargetItem);
