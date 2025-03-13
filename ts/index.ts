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
type Animal = { // made a animal type
  name: string;
  isPet: boolean;
};
type Cow = Animal & { //made a cow type and extend it from animal type so it can use animal types as well
  isVeg: boolean
};
const pet1: Cow = { // made a pet1 object which uses both animal types and cow types
  name:"horse",
  isPet:true,
  isVeg:true
}
