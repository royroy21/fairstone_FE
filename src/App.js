import React from 'react'
import LinkAsButton from './components/atoms/LinkAsButton';

class App extends React.Component {

  startGameContainerStyle = {
    marginTop: '400px',
    textAlign: 'center',
  };

  headerStyle = {
    color: '#92cc41',
    textShadow: '-3px 0 black, 0 3px black, 3px 0 black, 0 -3px black',
  };

  render() {
    return (
      <div style={this.startGameContainerStyle}>
        <h1 style={this.headerStyle}>Welcome to the FairStone human!</h1>
        <LinkAsButton
          to={'/game'}
          text={'START'}
        />
      </div>
    )
  }
}

export default App
