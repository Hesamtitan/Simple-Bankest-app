"use strict";
// const Person = function (firstname = "user", birthYear) {
//   this.name = firstname;
//   this.yearsOld = birthYear;
// };
// const user1 = new Person("hesam", 1989);
// console.log(user1);
// const user2 = new Person("ali", 1986);
// console.log(user2);
// const user3 = new Person("sss", 1991);
// console.log(user3);

// console.log(new Person("hesam", "behnami") instanceof Person);
// console.log(user1 instanceof Person);

// console.log(Person.prototype);
// console.log(user1);

// Person.prototype.calcAge = function () {
//   console.log(
//     this.name,
//     2024 - this.yearsOld,
//     `my name is ${this.name} and my age is ${Math.abs(this.yearsOld - 2024)}`
//   );
// };
// user1.calcAge();
// user2.calcAge();
// user3.calcAge();

// console.log(user1.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.job = "pc tech";

// console.log(user1.hasOwnProperty("yearsOld"));
// console.log(user1.hasOwnProperty("job"));

// console.log(Person.prototype);
// console.dir(user1.__proto__.__proto__);
// const fun = [1, 2, 3];
// console.log(user1.__proto__);
// console.dir(Person.prototype.constructor);
// console.log(fun);
// const h1 = document.querySelector("h1");
// console.dir(h1);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   console.log(`${this.make} ${(this.speed += 10)}`);
// };

// Car.prototype.brake = function () {
//   console.log((this.speed -= 5));
// };

// class expression
// const Car = class {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate = function () {
//     console.log(`${this.make} ${(this.speed += 10)}`);
//   };
//   brake = function () {
//     console.log(`${this.make} ${(this.speed -= 5)}`);
//   };
// };
//class declaration

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     console.log(`${this.make} ${(this.speed += 10)}`);
//   }
//   brake() {
//     console.log(`${this.make} ${(this.speed -= 5)}`);
//   }
// }
// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// bmw.brake();
// bmw.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// const account = {
//   name: "hesam",
//   movmenets: [200, 300, 400],
// get latest() {
//   return this.movmenets.slice(-1).pop();
// },
// set latest(mov) {
//   this.movmenets.push(mov);
// },
// };
// account.latest = 100;

// console.log(account.movmenets);
// console.log(account.latest);

// const carCl = {
//   //make,speed
//   accelerate() {
//     console.log(`${this.make} ${(this.speed += 10)}`);
//   },
//   brake() {
//     console.log(`${this.make} ${(this.speed -= 5)}`);
//   },
//   init(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   },
//   get speedUS() {
//     return this.speed / 1.6;
//   },
// };

// const ford = Object.create(carCl);
// ford.init("ford", 120);
// ford.accelerate();
// ford.brake();

// class carCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     console.log(`${this.make} ${(this.speed += 10)}`);
//   }
//   brake() {
//     console.log(`${this.make} ${(this.speed -= 5)}`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new carCl("ford", 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// const Person = function (name, last) {
//   console.log("hello");
//   console.log(this);
// };

// Person.hey = function () {
//   console.log("hey 🙋‍♀️");
//   console.log(this);
// };

// Person.hey();
// console.log(Person.this ===);
// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.yearold);
//   },
//   init(name, yearold) {
//     this.name = name;
//     this.yearold = yearold;
//   },
// };

// const hesam = Object.create(PersonProto);
// hesam.init("hesam", 1989);
// hesam.calcAge();
// console.log(hesam.__proto__ === PersonProto);
// console.log(hesam);
// const Person = function (firstname, birthYear) {
//   this.firstname = firstname;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstname, birthYear, course) {
//   Person.call(this, firstname, birthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`my name is ${this.firstname} and i study ${this.course}`);
// };

// const mike = new Student("mike", 2020, "computer science");
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__ === Student.__proto__);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;

//   Car.prototype.accelerate = function () {
//     console.log(`${this.make} ${(this.speed += 10)}`);
//   };

//   Car.prototype.brake = function () {
//     console.log((this.speed -= 5));
//   };
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`${this.make} going at ${this.speed}
// km/h, with a charge of ${this.charge}%`);
// };
// const tesla = new EV("tesla", 120, 23);
// const bmw = new Car("bmw", 140, 50);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();
// bmw.accelerate();

//ES6 class
// class PersonCl {
//   constructor(fullname, birthYear) {
//     this.fullname = fullname;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullname}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   set fullname(name) {
//     if (name.includes(" ")) this._fullname = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullname() {
//     return this._fullname;
//   }

//   static hey() {
//     console.log(`Hey there 🙋‍♀️`);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullname, birthYear, job) {
//     super(fullname, birthYear);
//     this.job = job;
//   }
//   dodol() {
//     console.log(
//       `dodol deraz ${this.fullname} sen ${2024 - this.birthYear} shoql ${
//         this.job
//       }`
//     );
//   }
// }

// const hesam = new StudentCl("hesam b", 1989, "DEV");
// const abas = new PersonCl("abbas dol", 1998, "snap");
// hesam.dodol();
// hesam.calcAge();

// abas.calcAge();
//Object.Creat()

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstname, birthYear) {
//     this.firstname = firstname;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.first = function (c) {
//   console.log(c);
// };
// const studentProto = Object.create(steven);
// studentProto.ok = function (a, b) {
//   console.log(a + b);
// };

// const jay = Object.create(studentProto);
// jay.face = function (fc) {
//   console.log(fc);
// };
// const hesam = Object.create(jay);
// hesam.init("hesam", 1989);
// hesam.calcAge();
// hesam.ok(5, 20);
// hesam.first("A");
// console.log(hesam);
// class Account {
//   #movments = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     // this.movments = [];
//     this.locale = navigator.language;

//     console.log(`Thanks for Opening an account ${owner}`);
//   }
//   //public interface
//   deposit(val) {
//     this.#movments.push(val);
//     // console.log(this.#sum());
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     // this.#movments.push(-val);
//     return this;
//   }
//   getMovement() {
//     return this.#movments;
//   }
//   sum() {
//     return this.#movments.reduce((acc, cur) => acc + cur);
//   }
//   //  #sum() {
//   //   return this.#movments.reduce((acc, cur) => acc + cur);
//   // }
//   // getSum() {
//   //   return this.#sum();
//   // }

//   #approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log("*** 😁");
//       console.log(this.sum());
//       return this;
//     }
//   }
// }
// const acc1 = new Account("hesam", "EUR", 1111);
// acc1
//   .deposit(100)
//   .deposit(200)
//   .deposit(300)
//   .withdraw(50)
//   .withdraw(100)
//   .requestLoan(500)
//   .requestLoan(555)
//   .withdraw(1500);
// // console.log(acc1.getSum());

// console.log(acc1.getMovement());
// console.log(acc1.sum());

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;

//   Car.prototype.accelerate = function () {
//     console.log(`${this.make} ${(this.speed += 10)}`);
//   };

//   Car.prototype.brake = function () {
//     console.log((this.speed -= 5));
//   };
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(`${this.make} going at ${this.speed}
// km/h, with a charge of ${this.charge}%`);
// };

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(`${this.make} ${(this.speed += 10)}`);
  }
  break() {
    console.log(`${this.make} is going at ${(this.speed -= 5)} km/k`);
    return this;
  }
  getspeedUS() {
    return console.log(this.speed / 1.6);
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);

    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.speed} km/k, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);
rivian;
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .break()
  .chargeBattery(50)
  .accelerate();
rivian.getspeedUS();
// .chargeBattery(50)
// .accelerate()
// .break()
// .break()
// .accelerate()
// .chargeBattery(40)
// .accelerate();
// Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
