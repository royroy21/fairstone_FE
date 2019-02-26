import React from 'react'

class Hero extends React.Component {

  render() {
    const {
      classNames,
      isHero,
      name,
      attack,
      health,
      points,
    } = this.props;

    let computedClassNames = 'drag-item hero';
    if (classNames) {
      computedClassNames = computedClassNames + ' ' + classNames
    }

    if (isHero) {
      return (
        <div className={computedClassNames}>
          <span style={{textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black',}}>
            <table style={{width: '100%', height: '100%'}}>
              <tbody>
                <tr>
                  <th colSpan={3} style={{height: '80%', verticalAlign: 'text-top'}}>{name}</th>
                </tr>
                <tr>
                  <td><i className={'nes-icon star is-small'}/></td>
                  <td><i className={'nes-icon heart is-small'}/></td>
                  <td><i className={'nes-icon coin is-small'}/></td>
                </tr>
                <tr>
                  <td>{attack}</td>
                  <td>{health}</td>
                  <td>{points}</td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      )
    } else {
      return null
    }

  }
}

export default Hero
