import React from 'react'

class ToggleFullScreenButton extends React.Component {

  state = {
    isFullScreen: false,
  };

  openFullscreen = () => {
    const elem = document.getElementById("root");

    if (this.state.isFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
      }
    } else {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    }
    this.setState(prevState => ({
      isFullScreen: !prevState.isFullScreen
    }));
  };

  render() {
    return <button onClick={this.openFullscreen}>{!this.state.isFullScreen ? (
      <div>FULL SCREEN</div>
    ) : (
      <div>EXIT FULL SCREEN</div>
    )}</button>
  }
}

export default ToggleFullScreenButton
