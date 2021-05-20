// static methods and properties
class Person {
  public static village = "Slapper";

  static getSchooleInfo() {
    console.log(`This person is from to ${this.village}`);
  }
}

// for static class we do not need to create an instance of that class to call its methods and properties
// Person.getSchooleInfo()

// to throw error while someone creates an object of class we can use private constructor

class Person2 {
  public static village = "Slapper";

  private constructor() {} // now if we tries to make an instance of this class ts will thorw an error

  static getSchooleInfo() {
    console.log(`This person is from to ${this.village}`);
  }
}

// abstract classes

abstract class Deparment {
  protected name = "IT";
  protected getDepartmentName() {
    console.log(`This is an ${this.name} deparment`);
  }
}

class IT extends Deparment {
  constructor(private admins: string[]) {
    super();
  }

  private addAmins(name:string){
    this.admins.push(name)
    console.log(this.admins)
  }
}
