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
    hero: monitor.getItem(),
  }
}

class DragTargetItem extends Component {

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
    const {connectDropTarget, hovered, backgroundColor} = this.props;
    const computedBackgroundColor = hovered ? 'lightpink' : backgroundColor;
    const newStyle = {...this.style, backgroundColor: computedBackgroundColor};

    return connectDropTarget(
      <div className='drag-item drag-source-item' style={newStyle}>
        <span>{this.renderHero()}</span>
      </div>
    )
  }
}

export default DropTarget('item', TargetSource, collect)(DragTargetItem);
