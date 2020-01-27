export class Animal {
  public name: string;
  public weight: number;

  constructor(name: string) {
    this.name = name;
  }

  public eat(quantity: number): void {
    this.weight += quantity;
  }
}
