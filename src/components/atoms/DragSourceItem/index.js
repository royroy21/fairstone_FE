import React, { Component } from 'react';
import {DragSource} from "react-dnd";

const itemSource = {
  beginDrag(props) {
    return props.item
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return
    }
    const {targetId} = monitor.getDropResult();
    const {item} = props;
    return props.handleDrop(targetId, item.name)
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class DragSourceItem extends Component {

  style = {
    backgroundColor: 'pink',
    border: '1px solid black',
    maxWidth: '200px',
    minHeight: '50px',
    margin: '5px',
    padding: '5px',
    textAlign: 'center',
  };

  render() {
    const {isDragging, connectDragSource, item} = this.props;
    return connectDragSource(
      <div className='item' style={this.style}>
        <span>{item.name}</span>
      </div>
    )
  }
}

export default DragSource('item', itemSource, collect)(DragSourceItem);
