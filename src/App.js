import React from 'react'
import LinkAsButton from './components/atoms/LinkAsButton';

class App extends React.Component {

  startGameContainerStyle = {
    marginTop: '200px',
    textAlign: 'center',
  };

  headerContainerStyle = {
    textAlign: 'center',
    width: '300px',
    margin: '0 auto',
  };

  headerStyle = {
    color: '#92cc41',
    fontSize: '2em',
    textShadow: '-3px 0 black, 0 3px black, 3px 0 black, 0 -3px black',
  };

  title = 'Welcome to the Fairstone human!';

  render() {
    return (
      <div style={this.startGameContainerStyle}>
        <div style={this.headerContainerStyle}>
          <h1 style={this.headerStyle}>{this.title}</h1>
        </div>
        <LinkAsButton
          to={'/game'}
          text={'START'}
        />
      </div>
    )
  }
}

export default App
