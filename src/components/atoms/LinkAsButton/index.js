import React from 'react'
import {Link} from "react-router-dom";


class LinkAsButton extends React.Component {

  render() {
    const {to, text} = this.props;
    return (
      <Link className={'nes-btn is-success'} to={to}>{text}</Link>
    )
  }
}

export default LinkAsButton
