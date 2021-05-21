// type intersection
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevetedEmployee = Admin & Employee;

const e1: ElevetedEmployee = {
  name: "Ajay",
  privileges: ["create-server"],
  startDate: new Date(),
};
console.log(e1.startDate);

// type Gaurd
type Combinable = string | number;

const add = (a: Combinable, b: Combinable) => {
  // if we directly return a+b ts will through an error so we used type gaurd here
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

// type gaurd for union types
type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}
printEmployeeInfo(e1);

// instanceof method for typeGaurd
class Car {
  drive() {
    console.log("Driving...");
  }
}
class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo...." + amount);
  }
}


// using typeGaurd with switch case


interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;


function moveAnimal(animal: Animal) {
    let speed:number;
  switch (animal.type) {
    case "bird":
      speed=animal.flyingSpeed
      break
    case 'horse':
        speed = animal.runningSpeed
  }
  console.log(`Moving at speed ${speed}`)

}


