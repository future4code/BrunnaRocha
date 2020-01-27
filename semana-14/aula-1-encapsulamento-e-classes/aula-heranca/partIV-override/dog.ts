import { Animal } from "./animal";
class Dog extends Animal {
  constructor(name: string) {
    super(name);
    this.weight = 20;
  }

  public makeSound(): void {
    console.log("Au Au 🐶");
  }
}
