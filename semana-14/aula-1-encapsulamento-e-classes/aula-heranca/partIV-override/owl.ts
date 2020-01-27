import { Animal } from "./animal";
class Owl extends Animal {
  constructor(name: string) {
    super(name);
    this.weight = 10;
  }

  public makeSound(): void {
    super.makeSound();
    console.log("Hu hu 🦉");
  }
}
