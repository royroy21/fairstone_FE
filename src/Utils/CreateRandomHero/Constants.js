// const defaultHeroClassNames = 'nes-container is-rounded';
const defaultHeroClassNames = 'nes-btn is-primary';

const heroDefaults = {
  classNames: defaultHeroClassNames,
  isDragSource: true,
  inPlay: false,
  isHero: true,
};

export const heroTypes = {
  ALIEN: {'type': 'Alien', ...heroDefaults},
  ANGEL: {'type': 'Angel', ...heroDefaults},
  CENTAUR: {'type': 'Centaur', ...heroDefaults},
  DEMON: {'type': 'Demon', ...heroDefaults},
  DRAGON: {'type': 'Dragon', ...heroDefaults},
  ELF: {'type': 'Elf', ...heroDefaults},
  FAIRY: {'type': 'Fairy', ...heroDefaults},
  GIANT: {'type': 'Giant', ...heroDefaults},
  GNOME: {'type': 'Gnome', ...heroDefaults},
  GOBLIN: {'type': 'Goblin', ...heroDefaults},
  IMP: {'type': 'Imp', ...heroDefaults},
  OGRE: {'type': 'Ogre', ...heroDefaults},
  ORK: {'type': 'Ork', ...heroDefaults},
  PIXIE: {'type': 'Pixie', ...heroDefaults},
  SEA_MONSTER: {'type': 'Sea Monster', ...heroDefaults},
  TROLL: {'type': 'Troll', ...heroDefaults},
  UNICORN: {'type': 'Unicorn', ...heroDefaults},
  VAMPIRE: {'type': 'Vampire', ...heroDefaults},
  WEREWOLF: {'type': 'Werewolf', ...heroDefaults},
  WITCH: {'type': 'Witch', ...heroDefaults},
  WIZARD: {'type': 'Wizard', ...heroDefaults},
  YETI: {'type': 'Yeti', ...heroDefaults},
  ZOMBIE: {'type': 'Zombie', ...heroDefaults},
};

export const heroNamesAndTypes = [
  {name: 'Caprirge', ...heroTypes.SEA_MONSTER},
  {name: 'Rhaelge', ...heroTypes.DRAGON},
  {name: 'Geovous', ...heroTypes.IMP},
  {name: 'Coxmane', ...heroTypes.UNICORN},
  {name: 'Neycox Skyrge', ...heroTypes.ALIEN},
  {name: 'Kramge Georflame', ...heroTypes.DEMON},
  {name: 'Coxsmoke', ...heroTypes.DRAGON},
  {name: 'Coth', ...heroTypes.FAIRY},
  {name: "Helrge Do'george", ...heroTypes.ELF},
  {name: 'George Gobble', ...heroTypes.GOBLIN},
  {name: 'Frankencox', ...heroTypes.ZOMBIE},
  {name: 'Cacklerge Colline', ...heroTypes.WITCH},
  {name: 'Geobotty', ...heroTypes.ALIEN},
  {name: 'Cotoria Neon', ...heroTypes.ALIEN},
  {name: 'Drus Coswoon', ...heroTypes.VAMPIRE},
  {name: 'George The Dragon', ...heroTypes.DRAGON},
  {name: 'Tim The Gaint', ...heroTypes.GIANT},
  {name: 'Shizcox', ...heroTypes.FAIRY},
  {name: 'Coflutter', ...heroTypes.FAIRY},
  {name: 'Yoge', ...heroTypes.ALIEN},
  {name: 'George Yanka', ...heroTypes.DEMON},
  {name: 'Rottorge', ...heroTypes.ZOMBIE},
  {name: 'Coda', ...heroTypes.ALIEN},
  {name: 'Fang George', ...heroTypes.ORK},
  {name: 'Geo Biella', ...heroTypes.DEMON},
  {name: 'Spaceco', ...heroTypes.ALIEN},
  {name: 'Titange', ...heroTypes.FAIRY},
  {name: 'The Georumble', ...heroTypes.YETI},
  {name: 'Geoknee Forest', ...heroTypes.PIXIE},
  {name: 'Coe Moondancer', ...heroTypes.ALIEN},
  {name: 'Cheekrge', ...heroTypes.GNOME},
  {name: 'George Ganta', ...heroTypes.GIANT},
  {name: 'Codelia', ...heroTypes.DEMON},
  {name: 'Sea Conda', ...heroTypes.SEA_MONSTER},
  {name: 'Brains Cox', ...heroTypes.ZOMBIE},
  {name: 'Geopuff', ...heroTypes.DRAGON},
  {name: 'Olage', ...heroTypes.TROLL},
  {name: 'Gaint Shark', ...heroTypes.SEA_MONSTER},
  {name: 'Battlege', ...heroTypes.SEA_MONSTER},
  {name: 'Georin', ...heroTypes.YETI},
  {name: 'Cocked', ...heroTypes.GOBLIN},
  {name: 'Goodness', ...heroTypes.ANGEL},
  {name: 'Zen Shine', ...heroTypes.ANGEL},
  {name: 'Willrge Cull', ...heroTypes.VAMPIRE},
  {name: 'Cophine Geopin', ...heroTypes.WEREWOLF},
  {name: 'Silver Zeor', ...heroTypes.UNICORN},
  {name: 'Cauldron Harkrage', ...heroTypes.WIZARD},
  {name: 'Geo Heart', ...heroTypes.DEMON},
  {name: 'Arige', ...heroTypes.FAIRY},
  {name: 'White Whale', ...heroTypes.SEA_MONSTER},
  {name: 'Coxa Lama', ...heroTypes.DEMON},
  {name: 'Trouble', ...heroTypes.IMP},
  {name: 'Coxbell', ...heroTypes.FAIRY},
  {name: 'Coxin Geong Coxm', ...heroTypes.DRAGON},
  {name: 'Stinkge', ...heroTypes.OGRE},
  {name: 'Abalcox', ...heroTypes.DEMON},
  {name: 'Georiela', ...heroTypes.ANGEL},
  {name: 'Inki', ...heroTypes.DEMON},
  {name: 'Cheek', ...heroTypes.GNOME},
  {name: 'Pointy Gram', ...heroTypes.WIZARD},
  {name: 'Cotha', ...heroTypes.GIANT},
  {name: 'Grindy', ...heroTypes.SEA_MONSTER},
  {name: 'Stomp', ...heroTypes.OGRE},
  {name: 'Georbow', ...heroTypes.UNICORN},
  {name: 'Dracoge', ...heroTypes.DRAGON},
  {name: 'Drina', ...heroTypes.ELF},
  {name: 'Coganta', ...heroTypes.GIANT},
  {name: 'Wicked', ...heroTypes.GOBLIN},
  {name: 'Coxten The Coxitt', ...heroTypes.ALIEN},
  {name: 'Reanimge', ...heroTypes.ZOMBIE},
  {name: 'Angecox', ...heroTypes.ANGEL},
  {name: 'Fornge Flame', ...heroTypes.DEMON},
  {name: 'George Pus', ...heroTypes.DEMON},
  {name: 'Greengeo Georgeger', ...heroTypes.WIZARD},
  {name: 'Russel', ...heroTypes.DEMON},
  {name: 'Rain Rage', ...heroTypes.UNICORN},
  {name: 'Scrcox', ...heroTypes.TROLL},
  {name: 'Geoshu', ...heroTypes.DRAGON},
  {name: 'Vim Scoffin', ...heroTypes.VAMPIRE},
  {name: 'Geo Light', ...heroTypes.GNOME},
  {name: 'Coxblex', ...heroTypes.DEMON},
  {name: 'Ifera', ...heroTypes.DEMON},
  {name: 'Hydracox', ...heroTypes.SEA_MONSTER},
  {name: 'Zimrge', ...heroTypes.DEMON},
  {name: 'Rallopa', ...heroTypes.CENTAUR},
  {name: 'George Shark', ...heroTypes.SEA_MONSTER},
  {name: 'Mash Beorge', ...heroTypes.YETI},
  {name: 'Cogatia', ...heroTypes.DEMON},
  {name: 'Dazzle', ...heroTypes.UNICORN},
  {name: 'Gargant Cox', ...heroTypes.GIANT},
  {name: 'Howla Coback', ...heroTypes.WEREWOLF},
  {name: 'Coxow Pakecox', ...heroTypes.VAMPIRE},
  {name: 'Coxphira', ...heroTypes.DRAGON},
  {name: 'Malcox Geonic', ...heroTypes.DEMON},
  {name: 'Coxoo', ...heroTypes.UNICORN},
  {name: 'Coxsten Chia', ...heroTypes.TROLL},
  {name: 'Codigo', ...heroTypes.YETI},
  {name: 'Lobstros George', ...heroTypes.SEA_MONSTER},
  {name: 'Georget Winkle', ...heroTypes.FAIRY},
  {name: 'Jargeorge', ...heroTypes.FAIRY},
];
