import {cloneDeep} from 'lodash';
import React, { Component } from 'react';
import {DragDropContext} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import '../../../NES.css/scss/nes.scss'

import DragSourceItem from './../../../components/atoms/DragSourceItem';
import DragTargetItem from './../../../components/atoms/DragTargetItem';
import PlayerInGameStats from './../../../components/molecules/PlayerInGameStats';
import GameDivider from './../../../components/atoms/GameDivider';
import withWindowDimensions from '../../../Utils/withWindowDimensions';
import CreateRandomHero from '../../../Utils/CreateRandomHero';
import ToggleFullScreenButton from "./../../../components/atoms/ToggleFullScreenButton";
import LinkAsButton from "../../atoms/LinkAsButton";

class Game extends Component {

  componentDidMount() {
    const $style = document.createElement("style");
    document.head.appendChild($style);
    const randBlue = ~~(Math.random() * 250);
    $style.innerHTML = `body { color: rgb(10, 10, ${randBlue}); }`;
  }

  createRandomHero = () => {
    const createRandomHero = new CreateRandomHero();
    return createRandomHero.createRandomHero()
  };

  defaults = {
    enemyHeroes: [
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
    playerHeroes: [
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

  dropItem = (targetId, droppedHero) => {
    // moves hero to target
    let playerTargets = this.state.playerTargets;
    playerTargets.forEach(function (target, index) {
      if (target.id === targetId) {
        let newTarget = {...droppedHero};
        newTarget.id = targetId;
        playerTargets[index] = newTarget;
      }
    });

    // removes player from hand
    let playerHeroes = this.state.playerHeroes;
    playerHeroes.forEach(function (hero, index) {
      if (hero.id === droppedHero.id) {
        playerHeroes[index] = {id: targetId, name: null};
      }
    });

    this.setState({playerTargets});
  };

  render() {

    console.log('state: ', this.state);

    const style = {
      width: `${this.props.windowWidth}px`,
      height: `${this.props.windowHeight}px`,
    };

    return (
      <div style={style} className="game-container">
        <ToggleFullScreenButton />
        <button className={'nes-btn is-error'} onClick={this.resetState}>RESET</button>
        <LinkAsButton
          to={'/'}
          text={'QUIT'}
        />
        {/*<div className="player-in-game-stats-container">*/}
          {/*<PlayerInGameStats />*/}
        {/*</div>*/}
        {/*<div className="drag-source-item-container source-item-container">*/}
          {/*{this.state.enemyHeroes.map(hero => (*/}
            {/*<DragSourceItem*/}
              {/*// key={hero.id}*/}
              {/*{...hero}*/}
              {/*handleDrop={(targetId, name) => this.dropItem(targetId, hero)}*/}
            {/*/>*/}
            {/*))}*/}
        {/*</div>*/}
        <div className="drag-target-target-container source-item-container containers">
          {this.state.enemyTargets.map(target => (
            <DragTargetItem
              // key={target.id}
              {...target}
            />
            ))}
        </div>
        <GameDivider />
        <div className="drag-target-target-container source-item-container">
          {this.state.playerTargets.map(target => (
            <DragTargetItem
              // key={target.id}
              {...target}
            />
            ))}
        </div>
        <div className="drag-source-item-container source-item-container">
          {this.state.playerHeroes.map(hero => (
            <DragSourceItem
              // key={hero.id}
              {...hero}
              handleDrop={(targetId, hero) => this.dropItem(targetId, hero)}
            />
            ))}
        </div>
        {/*<div className="player-in-game-stats-container">*/}
          {/*<PlayerInGameStats/>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(withWindowDimensions(Game));
