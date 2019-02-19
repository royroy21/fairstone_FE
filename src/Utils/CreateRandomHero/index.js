import { hero_names_and_types } from './Constants'

export default class CreateRandomHero {

  createBase = () => {
    return hero_names_and_types[Math.floor(Math.random() * hero_names_and_types.length)]
  };

  createRandomHero = () => {
    const newHero = this.createBase();
    const attack = Math.floor((Math.random() * 10) + 1);
    const defence = Math.floor((Math.random() * 10) + 1);
    newHero.attack = Math.floor((Math.random() * 10) + 1);
    newHero.health = Math.floor((Math.random() * 10) + 1);
    newHero.points = (attack + defence) / 20 * 10;
    newHero.inPlay = false;
    newHero.isDead = false;

    return newHero;
  };

}
