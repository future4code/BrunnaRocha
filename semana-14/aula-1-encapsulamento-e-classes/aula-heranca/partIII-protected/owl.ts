import { Animal } from "./animal";
class Owl extends Animal {
  constructor(name: string) {
    super(name);
    this.weight = 10;
  }

  public chirp(): void {
    console.log("Hu hu 🦉");
  }
}
