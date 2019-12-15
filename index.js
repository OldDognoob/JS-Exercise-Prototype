// @ts-nocheck
/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   /** @type {any[]} */
//   this.stomach = [];
// };

// Person.prototype.greet = function () {
//   return `My name is ${this.name} and I am ${this.age} years old`
// };

// Person.prototype.eat = function (food) {
//   return this.stomach.push(food);
// }

// Person.prototype.poop = function () {
//   return this.stomach = [];
// }

// var betty = new Person("Betty", 36);
// console.log(betty);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
};

Person.prototype.greet = function () {
  return `My name is ${this.name} and I am ${this.age} years old`
};

Person.prototype.eat = function (food) {
  return this.stomach.push(food);
}

Person.prototype.poop = function () {
  return this.stomach = [];
}

var lucas = new Person("Lucas", 36);
console.log(lucas);


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

//  function Car(model, milesPerGallon) {
//      this.model = model;
//      this.milesPerGallon = milesPerGallon;
//      this.odometer = 0;
//      this.tank = 0;
//   };
  
  
//   Car.prototype.fill = function (gallons) {
//     return this.tank += gallons;
//   };
  
//   howfarIcanDrive = this.tank * milesPerGallon
  
//   Car.prototype.drive = function(distance){
//     if(howfarIcanDrive > distance){
//       this.tank -=gallons
//       this.odometer += distance
//     }else{
//       this.odometer += howfarIcanDrive
//     } this.tank = 0
//      return 'I ran out of fuel ${howfarIcanDrive}'; 
//   }

function Car (model, make, distance){
  this.brand = model;
  this.builtby = make;
  this.odometer = 0;
  this.travel = distance;
}

const newCar = new Car(`Genz`, `Hunday`, 30);

Car.prototype.drive = function(){ 
  return this.odometer =+ this.travel;
}
console.log(newCar.drive());

Car.prototype.crash = function(){ 
  Car.prototype.drive = function(){return `I crashed at ${this.odometer}`;};
}
newCar.crash();
console.log(newCar.drive());

Car.prototype.repair = function(){ 
  Car.prototype.drive = function(){ 
    return this.odometer + this.travel;
  }
}
newCar.repair();
console.log(newCar.drive());



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby() {

}




/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. 
  2. 
  3. 
  4. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
