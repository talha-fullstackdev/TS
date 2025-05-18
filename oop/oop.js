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
// class Person {
//   name: string;
//   age: number;
//   rollNum: number;
//   hobbies: string[];
//   constructor(name: string, age: number, rollNum: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.rollNum = rollNum;
//     this.hobbies = hobbies;
//   }
//   getPersonDetails(){ // made method/function in a class
//     console.log(`student name is ${this.name} and his rollnumber is ${this.rollNum}`)
//   }
// }
// const st1: Person = new Person("Talha", 24, 213, [
//   "coding",
//   "reading",
//   "pet foastring",
// ]);
// const st2: Person = new Person("hamza", 23, 123618, [
//   "snooker",
//   "travling",
//   "reading",
// ]);
// const st3: Person = new Person("Talha", 24, 213, [
//   "vollyball",
//   "swimming",
//   "cricket",
// ]);
// console.log(st1);
// console.log(st1.getPersonDetails())
// console.log(st2);
// console.log(st3);
/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///////// Inheritance in TypeScript
// class Person {
//     name : string;
//     age : number;
//     protected rollNum : number;
//     hobbies : string[];
//     constructor(name: string, age: number, rollNum: number, hobbies: string[]) {
//       this.name = name;
//       this.age = age;
//       this.rollNum = rollNum;
//       this.hobbies = hobbies;
//     }
//     getPersonDetails(){ // made method/function in a class
//       console.log(`student name is ${this.name} and his rollnumber is ${this.rollNum}`)
//     }
//   }
// class Employee extends Person { // this way we can implement inheritance
//   emp_id : number; // separete properties of child class
//   department : string;
//   constructor(name: string, age: number, rollNum: number, hobbies: string[],emp_id:number,department:string){ // we can also provide parent class properties here in child class constructor
//     super(name,age,rollNum,hobbies) // we provide properties using from parent class like this in super method (basically it is used to called the parent class constructor)
//     this.emp_id = emp_id
//     this.department = department
//   }
//   getEmployeeDetails(){
//     console.log(`emp name is ${this.name} his roll number is ${this.rollNum} hobbies ${this.hobbies} emp-id ${this.emp_id} and department is ${this.department}`)
//   }
// }
// const emp1 : Employee = new Employee("talha", 24, 213, ["coding"], 234, "dev")
// // console.log(emp1.rollNum) // cannot get it here because it is protected and used in parent and its child classes only
// console.log(emp1)
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////// Public, Protected & Private 🔒 Access Modifiers in Object-Oriented Programming in TypeScript
// global >>> by default accessable in every where
// protected >>> only accessable in parent class and child class but not outside the class
// private  >>> only accessable in class where it is defined and cannnot used in child classes or outside the class
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
class Employee {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  intro() {
    console.log(
      `emp name is ${this.name} his age is ${this.age} and his gender is ${this.gender}`
    );
    if (this.age > 18) {
      console.log("yes he can drive");
    } else {
      console.log("he cannot drive due to underage");
    }
    return;
  }
}
const emp1 = new Employee("talha", 24, "male");
console.log(emp1.intro());
///////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////    Getter and Setter Methods in TypeScript Classes
////////////