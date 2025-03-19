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
/////////////// arrays methods ts map method
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const mapArray: number[] = numbers.map((value: number) => value * 2);
// console.log(mapArray)
///////////////////////////////// filter method
// const fruits:string[]=["apple","banana","mango","pineapple"]
// const filterFruits:string[]=fruits.filter((fruit :string)=>fruit !== "banana")
// console.log(filterFruits)
////////////////////////////////////////////////////reduce method
// const numsArray: number[] = [3, 4, 5, 6, 7, 89];
// const reduceArray: number = numsArray.reduce(
//   (acc: number, cur: number) => acc + cur,
//   0
// );
// console.log(reduceArray);
//// write a programe in Ts to convert Nums to string
// const myNums: number[] = [3, 4, 5, 6, 7, 8];
// const numsToStr: string[] = myNums.map((num: number) => num.toString());
// console.log(numsToStr);
//////// programe to make a array of only nums in an arrray
// const nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNums: number[] = nums.filter((num: number) => num % 2 === 0);
// console.log(evenNums)
// write a program to return only those values have length greater then 10
// const names: string[] = ["talha nawaz", "hamza nawaz", "hussain nawaz"];
// const filterNames: string[] = names.filter((name: string) => name.length > 12);
// if (filterNames.length > 0) {
//   const[name] = filterNames
//    console.log(name,",have length greater then 12")
// } else {
//   console.log("no name have length greater then 12");
// }
/////////////wwrite a programe to find average of arrays numbers
// const Average =((array:number[])=>{
//     const result = array.reduce((acc:number,cur:number)=>acc+cur/array.length,0)
//     return result
// })
// const array =[1,2,3,4,5,6,7,8,9,10,12,13,14]
// const check = Average(array)
// console.log(check)
/////////////////////////////////
// write a programe to find max and min value from an array
// const minMax = (array: number[]) => {
//   let min = array.reduce((acc: number, cur: number) => acc < cur ? cur : acc ,array[0]);
//   let max = array.reduce((acc: number, cur: number) => acc > cur ? cur : acc ,array[0]);
//   return {
//     minumum :min,
//     maximum:max
//   }
// };
// const check = minMax([2,3,4,5,6,7,8])
// console.log(check)
/////////////////////////////////////////////////////
// write a programe to convert array elements to uppercase
// const convertToUpperCase = (array: string[]) => {
//   const upperCaseEle: string[] = array.map((ele: string) => ele.toUpperCase());
//   return upperCaseEle;
// };
// const check = convertToUpperCase(["talha", "hamza", "hussain", "Ali"]);
// console.log(check);
//////////////////////////////////////////////////////////////////////////
// learning objects in typescript
// const products: {
//   name: string;  // when defining object schema use semicolons instead of comas
//   price: number;
//   inStock: boolean;
//   address :{
//     city:string;
//     provience:string;
//   }
// } = {
//   name: "laptop",
//   price: 50000,
//   inStock: true,
//   address:{
//     city:"Abbottabad",
//     provience:"KPK"
//   }
// };
// products.name="headphones" //chnaging the object property as it have same data type if i assign it a number or boolean it will not works in Ts
// console.log(products);
// const userDetails: {
//   name: string;
//   age: number;
//   gender: string;
//   postition: string;
//   salary: number;
//   address: {
//     homeTown: string;
//     city: string;
//   };
// } = {
//   name: "Uzair Ansari",
//   age: 24,
//   gender: "Male",
//   postition: "Software Engineer",
//   salary: 500000,
//   address: {
//     homeTown: "Kasur punjab",
//     city: "lahore pakistan",
//   },
// };
// console.log(userDetails);
//////////////////////////////////////////////////////////////////
///////////////////////////TypeScript Type Aliases
// type Employee = {
//   // type alias here we make single employess data types and now we can use it with any employee without defing same types        for every employee
//   name: string;
//   email: string;
//   age: number;
//   gender: string;
//   department: string;
//   address: {
//     primary: string;
//     secondary: string;
//   };
// };
// const emp1:Employee ={ // here putting Employee type in place of types providing to use Employee type
//     name:"Talha Nawaz",
//     email:"talha123@gmail.com",
//     age:24,
//     gender:"male",
//     department:"DEV",
//     address:{
//         primary:"Cavalary Ground lahore Cant",
//         secondary:"Toheed colony Abbottabad"
//     }
// }
// const emp2:Employee = { // now i can use it with any employee who have same type of info
//     name:"Hamza Nawaz",
//     email:"hamza123@gmail.com",
//     age:23,
//     gender:"male",
//     department:"Finance",
//     address:{
//         primary:"Sector G-11/4",
//         secondary:"Toheed colony Abbottabad"
//     }
// }
// const emp3:Employee ={
//     name:"Uzair Ansari",
//     email:"uzair123@gmail.com",
//     age:24,
//     gender:"male",
//     department:"QA",
//     address:{
//         primary:"Bankers Town Ghazi road, near ferozpur road lahore",
//         secondary:"Kasur ,punjab pakistan"
//     }
// }
// console.log(emp1.name,emp1.department)
// console.log(emp2.name,emp2.department)
// console.log(emp3.name,emp3.department)
/// made a programe to find total price of products that is price * quantity
// type Products = {
//   price: number;
//   quantity: number;
// };
// const calPrice = (product: Products) => {
//   let result: number = product.price * product.quantity;
//   return result;
// };
// let product: Products = {
//   price: 100,
//   quantity: 5,
// };
// let check = calPrice(product);
// console.log(check);
////////////////////////////////////////////////
////////////////Call Signatures in TypeScript
type Students = {
  // made studnent object types
  name: string;
  email: string;
  rollNumber: number;
  age: number;
  gender?: string; // ? this make the value optional if some one not want to give gender this will work fine
  contactNum: number;
  address?: string;
  greet:(country:string)=>string // call signature define the stracture of function in object called call signature
};
const student1: Students = {
  name: "Talha Nawaz",
  email: "talha123",
  rollNumber: 213,
  age: 24,
  gender: "male",
  contactNum: 34809,
  address: "abbottabad",
  greet:((country)=> `my name is ${student1.name} i am from ${country}`)
};
console.log(student1.greet("pakistan"))
console.log(student1.greet("saudia"))
console.log(student1.greet("UAE"))
console.log(student1.greet("China"))
