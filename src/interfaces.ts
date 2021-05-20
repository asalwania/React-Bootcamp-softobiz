interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: IPerson;

user1 = {
  name: "Ajay",
  age: 29,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hello there - I am");

// we can also implement interfaces with classes
class Student implements IPerson {
  constructor(public name: string, public age: number) {}

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
