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
   this.stomach = [];
};


let kerk = new Person("Kerk", 42);
console.log(kerk.greet());
kerk.eat("salad");
kerk.eat("sausage");
kerk.eat("cake");
kerk.eat("icecream");
kerk.eat("sweets");
kerk.eat("eggs");
kerk.eat("burgers");
kerk.eat("chicken");
kerk.eat("orange");
kerk.eat("cucumber");
console.log(kerk.stomach)


kerk.poop();
console.log(kerk.stomach)




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

 function Car(model, milesPerGallon) {
     this.model = model;
     this.milesPerGallon = milesPerGallon;
     this.odometer = 0;
     this.tank = 0;
  };
  
  
  Car.prototype.fill = function (gallons) {
    return this.tank += gallons;
  };
  
  // howfarIcanDrive = this.tank * milesPerGallon
  
  Car.prototype.drive = function(distance){
    if(howfarIcanDrive > distance){
      this.tank -=gallons
      this.odometer += distance
    }else{
      this.odometer += howfarIcanDrive
    } this.tank = 0
     return 'I ran out of fuel ${howfarIcanDrive}'; 
  }

// function Car (name, make) {
//   this.model = name;
//   this.make = make;
//   this.canBeDriven = true;
// }

// Car.prototype.drive = function (distance) {
//   this.odometer = distance;
// };
// Car.prototype.crash = function () {
//   this.canBeDriven = false;
//   return `I crashed at ${this.odometer} kilometers!`;
// };
// Car.prototype.repair = function () {
// this.canBeDriven = true;
// }

const hyundai = new Car("Huyndai", "GTX");
hyundai.drive(10);
let runOutOfFuel = hyundai.tank();
console.log(runOutOfFuel);
hyundai.repair();
console.log(hyundai);



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name`, Baby takes a second argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favToy) {
  Person.call(this, name, age, favToy);
  this.favToy = baby.favToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.playWithToy = function(){
  return `My is ${this.name}, I am ${this.age} and love to play with ${this.favToy}`;
};

const paul = new Baby({
  name:'Paul',
  age: 3,
  favToy: "rockets"
})

console.log(paul);
console.log(paul.speak());
console.log(paul.play());

// const paul = new Baby("Paul", 3, 'rockets');
// console.log(paul);
// console.log(paul.play());





/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1.  Global Binding - this refers to 'Window' object, meaning everything in JS. 
  2.  Implicit binding - 'this' refers to the object to the left of the dot in the dot notation.
  3.  New keyword binding - when using a constructor to instantiate objects, 'this' refers to the object being created
  4.  Explicit binding - 'this' is explicitely defined and refers to whatever we are passing.
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
