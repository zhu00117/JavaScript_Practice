//class
class Person {
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob= new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
//Instantiate object
const person1 = new Person('John','Doe','4-3-2000');
const person2 = new Person('Jerry','Smith','4-1-2001');

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person2);