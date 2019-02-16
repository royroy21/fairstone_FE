import React from 'react'
import {Link} from "react-router-dom";


class LinkAsButton extends React.Component {

  style = {
    border: '1px solid grey',
    fontWeight: 'bold',
    padding: '20px',
    textAlign: 'center',
    textDecoration: 'none',
  };

  render() {
    const {to, text} = this.props;
    return (
      <Link style={this.style} to={to}>{text}</Link>
    )
  }
}

export default LinkAsButton
