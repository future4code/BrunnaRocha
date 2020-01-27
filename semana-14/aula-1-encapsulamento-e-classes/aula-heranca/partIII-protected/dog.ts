import { Animal } from "./animal";
class Dog extends Animal {
  constructor(name: string) {
    super(name);
    this.weight = 20;
  }

  public bark(): void {
    console.log("Au Au 🐶");
  }
}

const d = new Dog("");
