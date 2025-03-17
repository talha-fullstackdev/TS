"use strict";
// let a  = 67
// a = "talha"  // cannot assign a number type to string type in TS
/////////////// asigning types to variables
// let myName: string = "Talha"; // by this way we can added types to a variable
// myName = "Talha Nawaz";
// let myNum: number = 45;
// myNum = 45;
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
///////// asigning types to functions
// const sum = (a: number, b: number) => {
//   // by this way we can give types to functions parameters
//   return a + b;
// };
// const sum2 = (a: number, b: number): number => {
//   // by this way we can assign types to functions
//   return a + b;
// };
// let num:number =34
// num = "34"
// let names:string[]=[]
// names.push("7")
// console.log(names)
// let myName :{name:string} // here we initially made an object and assign its property types only here we say object have only one property of type string
// myName = {name:"Talha Nawaz"}
// let myName :{name:string,age?:number} // here we made age optional
// myName = {name:"Talha Nawaz",age:34}
// interface Person {
//   // made interface like we made classes and objects in javascript
//   name: string;
//   age: number;
//   gender: string;
// }
// let talha: Person;
// talha = {
//   name: "Talha nawaz",
//   age: 24,
//   gender: "male",
// };
// type Animal = { // made a animal type
//   name: string;
//   isPet: boolean;
// };
// type Cow = Animal & { //made a cow type and extend it from animal type so it can use animal types as well
//   isVeg: boolean
// };
// const pet1: Cow = { // made a pet1 object which uses both animal types and cow types
//   name:"horse",
//   isPet:true,
//   isVeg:true
// }
//////////////////////////////////////
// type User = {
//   name: string;
//   email: string;
//   age: number;
//   gender: string;
//   address: string;
// };
// let emp1: User = {
//   name: "Talha Nawaz",
//   email: "nawazt@gmail.com",
//   age: 24,
//   gender: "male",
//   address: "abbottabad",
// };
// console.log(emp1)
////////////////////////////////////////////////////////////////////
// add two numbers
// let num1:number = 10
// let num2:number =20
// let sum:number = num1+num2
// console.log(sum)
// const sum =(num1:number,num2:number):number =>{ // made a function of sum two numbers
//   return num1+num2
// }
// let check = sum(74,3)
// console.log(check)
// let num:number=67
// let num2:number = 78
// let num3:number = 78
// console.log(num+num2+num3)
// const isEven = (num:number) => {
//     if (num % 2 === 0) {
//         return ("even num");
//     }
//     return ("odd num");
// };
// let check = isEven(4);
// console.log(check)
///////////////////
// const greet = (name: string, id: number) => {
//     return  console.log(`welocme ${name} your id is ${id}`);
// };
// const check = greet("talha", 45);
// console.log(check);
////////////////////////////////
// const myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 109];
// console.log(myArray);
/////////////// arrays methods ts
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const mapArray: number[] = numbers.map((value: number) => value * 2);
// console.log(mapArray)
/////////////////////////////////
// const fruits:string[]=["apple","banana","mango","pineapple"]
// const filterFruits:string[]=fruits.filter((fruit :string)=>fruit !== "banana")
// console.log(filterFruits)
const numsArray = [3, 4,6];
const reduceArray = numsArray.reduce((acc, cur) => acc + cur, 0);
console.log(reduceArray);
