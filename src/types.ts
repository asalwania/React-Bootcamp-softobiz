// objects in tyescript
const person: { name: string; age: number } = {
  name: "Ajay",
  age: 29,
};

// nested object types and arrays
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
// console.log(product.details.title)
// for (const tag of product.tags){
//     console.log(tag.toUpperCase())
// }

// tuple can not add extra elements to it and cant replace elements with different type
const role: [number, string] = [1, "Ajay"];
// now role[1]=2 is not possible
// also cant push any pop anything

// enums

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

console.log(Role.ADMIN);

// type Aliases
type Person = {
  name: string;
  age: number;
};

const user: Person = {
  name: "ajay",
  age: 29,
};

// classes
class Department {
  protected employees: string[] = [];

  constructor(private id: string, public name: string) {}

  describe() {
    console.log("Department " + this.id + ": " + this.name);
  }

  addEmployee(employee:string){
    this.employees.push(employee)
    console.log(this.employees)
  }
}

class ITDepartment extends Department{
  constructor(id:string,public admins:string[]){
    super(id ,'IT')
  }
}

const accounting = new ITDepartment('d1',['Max'])

accounting.describe()
