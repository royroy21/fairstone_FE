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
  };

  setItem = (hovered, item) => {
    if (hovered && item) {
      this.item = item
    }
  };

  render() {
    const {connectDropTarget, hovered, item} = this.props;
    const backgroundColor = hovered ? 'lightpink' : null;

    this.setItem(hovered, item);
    let newStyle = {...this.style, backgroundColor};

    return connectDropTarget(
      <div className='drag-item drag-source-item' style={newStyle}>
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default DropTarget('item', TargetSource, collect)(DragTargetItem);
