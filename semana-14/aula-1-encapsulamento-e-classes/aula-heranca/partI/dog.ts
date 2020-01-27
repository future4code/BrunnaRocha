class Dog {
  public name: string;
  public weight: number;

  constructor(name: string) {
    this.name = name;
    this.weight = 20;
  }

  public bark(): void {
    console.log("Au Au 🐶");
  }

  public eat(quantity: number): void {
    this.weight += quantity;
  }
}

const goodBoy = new Dog("Good Boy");
export {};
