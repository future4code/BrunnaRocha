class Owl {
  public name: string;
  public weight: number;

  constructor(name: string) {
    this.name = name;
    this.weight = 10;
  }

  public chirp(): void {
    console.log("Hu hu 🦉");
  }

  public eat(quantity: number): void {
    this.weight += quantity;
  }
}

const edwiges = new Owl("Edwiges");
