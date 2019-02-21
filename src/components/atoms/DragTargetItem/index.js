import React, { Component } from 'react';
import {DropTarget} from "react-dnd";

import Hero from '../../molecules/Hero';

const TargetSource = {
  drop(props, monitor, component) {
    return {targetId: props.id}
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    hero: monitor.getItem(),
  }
}

class DragTargetItem extends Component {

  render() {
    const {connectDropTarget, hovered} = this.props;
    const computedBackgroundColor = hovered ? '#f8d600' : null;
    const newStyle = {backgroundColor: computedBackgroundColor};

    return connectDropTarget(
      <div className={'drag-item drag-target-item'} style={newStyle}>
        <span><Hero {...this.props} /></span>
      </div>
    )
  }
}

export default DropTarget('item', TargetSource, collect)(DragTargetItem);
