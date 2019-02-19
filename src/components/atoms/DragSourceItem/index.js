import React, { Component } from 'react';
import {DragSource} from "react-dnd";

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

  renderHero = () => {
    if (this.props.name) {
      return (
        <span>{`${this.props.name}`}<br /><br /><br />{`Attack:${this.props.attack}`}<br />{`Health:${this.props.health}`}<br />{`Points:${this.props.points}`}</span>
      )
    } else {
        return null
      }
  };

  render() {
    const {isDragging, connectDragSource, backgroundColor} = this.props;

    const style = {
      backgroundColor: backgroundColor,
    };

    return connectDragSource(
      <div className='drag-item drag-source-item' style={style}>
        <span>{this.renderHero()}</span>
      </div>
    )
  }
}

export default DragSource('item', itemSource, collect)(DragSourceItem);
