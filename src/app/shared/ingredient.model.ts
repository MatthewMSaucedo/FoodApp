export class Ingredient
{
  /*  This is the long way 
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
  */

  // this is a short way
  constructor(public name: string, public amount: number) {}
}
