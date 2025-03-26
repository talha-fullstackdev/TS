"use strict";
// class Persons {
//   // this way we make  class in typescript
//   name: string = "Talha";
//   age: number = 24;
//   hobbies: string[] = ["coding", "reading", "watching documentries"];
// }
// const std1: Persons = new Persons(); // this way we create a object/instance of the class
// console.log(std1)
// console.log(std1.name);
// console.log(std1.age);
// console.log(std1.hobbies);
/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
/// made constructor in class
class Person {
    constructor(name, age, rollNum, hobbies) {
        this.name = name;
        this.age = age;
        this.rollNum = rollNum;
        this.hobbies = hobbies;
    }
}
const st1 = new Person("Talha", 24, 213, [
    "coding",
    "reading",
    "pet foastring",
]);
const st2 = new Person("hamza", 23, 123618, [
    "snooker",
    "travling",
    "reading",
]);
const st3 = new Person("Talha", 24, 213, [
    "vollyball",
    "swimming",
    "cricket",
]);
console.log(st1);
console.log(st2);
console.log(st3);
