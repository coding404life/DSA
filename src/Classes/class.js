class Person {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi i'm ${this.name}, I'am ${this.type}`);
  }
}
