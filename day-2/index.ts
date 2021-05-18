// data types in typescript

let myName: string = "Ajay";
// now i can not assign any other data type value to myName like number or boolean
// e.g. myName=4 will through an error
let age: number = 29;
let isMale: boolean = true;

const user1: {
  name: string;
  age: number;
} = {
  name: "ajay",
  age: 29,
};

let now: Date = new Date();

const newArray: string[] = ["Ajay", "Pooja", "Alka", "Kamlesh"];

// we can also use interface for object shape
interface User {
  name: string;
  age: number;
}

const user2: User = {
  name: "Alka",
  age: 30,
};

// we can use interface with function

function getUser(): User {
  return {
    name: "Vinod",
    age: 34,
  };
}

// we can also use an interface with classes
class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user3: User = new UserAccount("Amit", 31);

// Union
let isNumber: number | boolean = 1; // in union we can use two or more than two data types
isNumber = true;

// object destructing

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forcast: { date: Date; weather: string }) => {
  console.log(forcast.date);
  console.log(forcast.weather);
};

logWeather(todaysWeather);

// annotations around objects
const profile = {
  name: "Ajay",
  myAge: 29,
  cord: {
    lat: 0,
    long: 15,
  },
  setAge(newAge: number): void {
    this.age = newAge;
  },
};

const { myAge }: { myAge: number } = profile;

const {
  cord: { lat, long },
}: { cord: { lat: number; long: number } } = profile;

// tuple

const drink = {
  color:'brown',
  carbonated:true,
  sugar:40
}

const pepsi:[string,boolean,number] =['brown',true,40]
