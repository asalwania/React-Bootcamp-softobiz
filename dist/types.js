"use strict";
// objects in tyescript
const person = {
    name: "Ajay",
    age: 29,
};
// nested object types and arrays
const product = {
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
const role = [1, "Ajay"];
// now role[1]=2 is not possible
// also cant push any pop anything
// enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
console.log(Role.ADMIN);
const user = {
    name: "ajay",
    age: 29,
};
// classes
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log("Department " + this.id + ": " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const accounting = new ITDepartment('d1', ['Max']);
accounting.describe();
