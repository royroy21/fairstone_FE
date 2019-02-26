import { heroNamesAndTypes } from './Constants'

export default class CreateRandomHero {

  createBase = () => {
    return heroNamesAndTypes[Math.floor(Math.random() * heroNamesAndTypes.length)]
  };

  createRandomHero = () => {
    const newHero = this.createBase();
    const attack = Math.floor((Math.random() * 10) + 1);
    const health = Math.floor((Math.random() * 10) + 1);
    newHero.attack = attack;
    newHero.health = health;
    newHero.points = Math.ceil((attack + health) * 0.5);
    newHero.inPlay = false;
    newHero.isDead = false;

    return newHero;
  };

}
