import React from 'react'
import LinkAsButton from './components/atoms/LinkAsButton';

class App extends React.Component {

  startGameContainerStyle = {
    marginTop: '400px',
    textAlign: 'center',
  };

  render() {
    return (
      <div style={this.startGameContainerStyle}>
        <LinkAsButton
          to={'/game'}
          text={'START'}
        />
      </div>
    )
  }
}

export default App
