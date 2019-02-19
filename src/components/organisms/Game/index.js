import {cloneDeep} from 'lodash';
import React, { Component } from 'react';
import {DragDropContext} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import DragSourceItem from './../../../components/atoms/DragSourceItem';
import DragTargetItem from './../../../components/atoms/DragTargetItem';
import PlayerInGameStats from './../../../components/molecules/PlayerInGameStats';
import GameDivider from './../../../components/atoms/GameDivider';
import withWindowDimensions from '../../../Utils/withWindowDimensions';
import CreateRandomHero from '../../../Utils/CreateRandomHero';

class Game extends Component {

  createRandomHero = () => {
    const createRandomHero = new CreateRandomHero();
    return createRandomHero.createRandomHero()
  };

  defaults = {
    enemyItems: [
      {id: 1, ...this.createRandomHero()},
      {id: 2, ...this.createRandomHero()},
      {id: 3, ...this.createRandomHero()},
      {id: 4, ...this.createRandomHero()},
      {id: 5, ...this.createRandomHero()},
      {id: 6, ...this.createRandomHero()},
    ],
    enemyTargets: [
      {id: 1, name: null},
      {id: 2, name: null},
      {id: 3, name: null},
      {id: 4, name: null},
      {id: 5, name: null},
      {id: 6, name: null},
    ],
    playerItems: [
      {id: 1, ...this.createRandomHero()},
      {id: 2, ...this.createRandomHero()},
      {id: 3, ...this.createRandomHero()},
      {id: 4, ...this.createRandomHero()},
      {id: 5, ...this.createRandomHero()},
      {id: 6, ...this.createRandomHero()},
    ],
    playerTargets: [
      {id: 1, name: null},
      {id: 2, name: null},
      {id: 3, name: null},
      {id: 4, name: null},
      {id: 5, name: null},
      {id: 6, name: null},
    ]
  };

  state = cloneDeep(this.defaults);

  buttonStyle = {
    backgroundColor: 'lightblue',
    border: '1px solid grey',
    width: '200px',
    margin: '5px',
    padding: '5px',
    textAlign: 'center',
  };

  resetState = () => {
    this.setState(state => {
      return cloneDeep(this.defaults)
    });
  };

  dropItem = (targetId, name) => {
    let targets = this.state.playerTargets;
    targets.forEach(function (target) {
      if (target.id === targetId) {
        target.name = name
      }
    });
    this.setState({targets});
  };

  render() {

    const style = {
      width: `${this.props.windowWidth}px`,
      height: `${this.props.windowHeight}px`,
    };

    return (
      <div style={style} className="game-container">
        {/*<div className="player-in-game-stats-container">*/}
          {/*<PlayerInGameStats />*/}
        {/*</div>*/}
        <div className="drag-source-item-container source-item-container">
          {this.state.enemyItems.map(item => (
            <DragSourceItem
              key={item.id}
              id={item.id}
              item={item}
              handleDrop={(targetId, name) => this.dropItem(targetId, name)}
            />
            ))}
        </div>
        <div className="drag-target-target-container source-item-container">
          {this.state.enemyTargets.map(target => (
            <DragTargetItem
              key={target.id}
              id={target.id}
              name={target.name}
            />
            ))}
        </div>
        <GameDivider />
        <div className="drag-target-target-container source-item-container">
          {this.state.playerTargets.map(target => (
            <DragTargetItem
              key={target.id}
              id={target.id}
              name={target.name}
            />
            ))}
        </div>
        <div className="drag-source-item-container source-item-container">
          {this.state.playerItems.map(item => (
            <DragSourceItem
              key={item.id}
              id={item.id}
              item={item}
              handleDrop={(targetId, name) => this.dropItem(targetId, name)}
            />
            ))}
        </div>
        {/*<div className="player-in-game-stats-container">*/}
          {/*<PlayerInGameStats/>*/}
        {/*</div>*/}
        <button style={this.buttonStyle} onClick={this.resetState}>RESET</button>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(withWindowDimensions(Game));
