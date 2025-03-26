"use strict";
class Persons {
    constructor() {
        // this way we make  class in typescript
        this.name = "Talha";
        this.age = 24;
        this.hobbies = ["coding", "reading", "watching documentries"];
    }
}
const std1 = new Persons();
console.log(std1.name);
console.log(std1.age);
console.log(std1.hobbies);
