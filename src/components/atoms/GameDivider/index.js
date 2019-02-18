import React from 'react'

class GameDivider extends React.Component {

  style = {
    width: '100%',
  };

  render() {
    return (
      <div style={this.style}>
        - - - - -
      </div>
    )
  }
}

export default GameDivider
