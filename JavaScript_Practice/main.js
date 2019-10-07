const name='Li';
const age1=30;
const age2=31;
const age3=32;
const rating = 4.5;
const isCool= true;
const x = null;
const y=undefined;

console.log(typeof y);
console.log('my name is ' + name+' and I am '+age1);
console.log(`my name is ${name} and I am ${age2}`);
const z= `my name is ${name} and I am ${age3}`;
console.log(z);
const s='Computer, World, is, fatastic';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(','));

//array: variables that hold multiple values

//this Array is a constructor
const numbers= new Array(1,2,3,4);
const fruits=['apples','bananas','oranges'] ;
console.log(fruits[1]);
fruits[3]='grapes';
console.log(fruits);
//add a value to the end, expecially don't know how many values in an array
fruits.push('mangos'); 
console.log(fruits);
//add a value at the beginning
fruits.unshift('stawberry');
console.log(fruits);
//remove the last one
fruits.pop();
console.log(fruits);
//check something is an array
console.log(Array.isArray('stawberry'));
console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));

//object

const person = {
    firstName: 'John',
    lastName: 'Smith',
    age:30,
    //array
    hobbies:['tennis','hocky'],
    //embedded object
    address:{
        street: '340 Legget street',
        city: 'Ottawa',
        country:'Canada'
    }
    
}

console.log(person);
console.log(person.hobbies);
console.log(person.address);

//deconstructuring, and show actual variables
const {firstName, lastName, address:{city}}=person;
console.log(firstName);
console.log(city);

//add properties
person.email='John@gamil.com';
console.log(person);

//array of object
const todos = [
    {
        id:1,
        text:'meeting' ,
        isCompleted: true,
    },
    {
        id:2,
        text:'training',
        isCompleted: false
    },
    {
        id:3,
        text:'working',
        isCompleted: false
    }
];
console.log(todos[2].isCompleted);

//convert data to JSON
const todoJSON=JSON.stringify(todos);
console.log(todoJSON);

//for
for(let i=0;i<10;i++){
    console.log(i);
    console.log(`For loop number: ${i}`);

};


for(let i=0;i<todos.length;i++){
    console.log(todos[i]);
    console.log(todos[i].text);

};


for(let todo of todos){
      console.log(todo.text);
};

//while
 i=10;
while(i>0){
    console.log(`While loop number1: ${i}`);
    i--;
};

//high order array methods
//forEach,map,filter
todos.forEach(function(todo){
console.log(todo.id);
});
//map return an array
const todoText = todos.map(function(todo){
    return todo.text;
    });
console.log(todoText);


const todoCompleted=todos.filter(function(todo){
    return todo.isCompleted === true; 
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);
