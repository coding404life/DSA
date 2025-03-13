//instantiation
class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi i'm ${this.name}, I use ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }

  play() {
    console.log(`Wee i use ${this.type}`);
  }
}

const wizard1 = new Wizard("Yahya", "Dark Magic");
const wizard2 = new Wizard("Ahmed", "White Magic");

wizard1.introduce();
wizard2.introduce();

wizard1.play();
wizard2.play();
