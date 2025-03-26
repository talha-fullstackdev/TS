class Persons {
  // this way we make  class in typescript
  name: string = "Talha";
  age: number = 24;
  hobbies: string[] = ["coding", "reading", "watching documentries"];
}
const std1: Persons = new Persons(); // this way we create a object/instance of the class
console.log(std1.name);
console.log(std1.age);
console.log(std1.hobbies);
