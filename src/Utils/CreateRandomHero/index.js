import { hero_names_and_types } from './Constants'

export default class CreateRandomHero {

  createBase = () => {
    return hero_names_and_types[Math.floor(Math.random() * hero_names_and_types.length)]
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
