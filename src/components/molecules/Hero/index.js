import React from 'react'

class Hero extends React.Component {

  render() {

    console.log('props: ', this.props);

    const {classNames} = this.props;

    let computedClassNames = 'drag-item hero';
    if (classNames) {
      computedClassNames = computedClassNames + ' ' + classNames
    }

    if (this.props.name) {
      return (
        <div className={computedClassNames}>
          <span>
            <div style={{height: '20px'}}>{`${this.props.name}`}</div>
            <br /><br /><br />
            {`At: ${this.props.attack}`}
            <br />
            {`He: ${this.props.health}`}
            <br />
            {`Po: ${this.props.points}`}
          </span>
        </div>
      )
    } else {
      return null
    }

  }
}

export default Hero
