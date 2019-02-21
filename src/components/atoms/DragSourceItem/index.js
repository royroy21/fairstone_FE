import React, { Component } from 'react';
import {DragSource} from "react-dnd";

import Hero from '../../molecules/Hero';

const itemSource = {
  beginDrag(props) {
    return props
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return
    }
    const {targetId} = monitor.getDropResult();
    // const {hero} = props;
    return props.handleDrop(targetId, props)
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

  render() {
    const {isDragging, connectDragSource} = this.props;
    return connectDragSource(
      <div className={'drag-item drag-source-item'}><Hero {...this.props} /></div>
    )
  }
}

export default DragSource('item', itemSource, collect)(DragSourceItem);
