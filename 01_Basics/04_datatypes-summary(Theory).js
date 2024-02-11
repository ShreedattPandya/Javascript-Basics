// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime


// Primitive (Call By Value)
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);//Will be different since its SYMBOL

const bigNumber = 3456543576654356754n//bigNumber ends with n


// Non primitive ( Reference )
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// Datatype of null - object 

//Function - Object Function

//Arrays  -  object

// Object (native and does not implement [[Call]])--"object"

// Object (native or host and does implement [[Call]])--"function"

// Object (host and does not implement [[Call]])--Implementation-defined except may not be "undefined", "boolean", "number", or "string".


// *************************** Stack & Heap *************************************

// 1) Stack (Primitive) - Uses Call by Value, hence gives copy of data (not original), hence not changed by reapplying

let copy1 = "FirstValue"
let copy2 = "SecondValue"

copy2 = copy1

console.log(copy1);
console.log(copy2);  


// 2) Heap (Non-Primitive) - Uses Call by Reference, hence gives direct refernce of the data (original), hence changed by reapplying [Both points at the same memory]

let user1 = { //Making Object
    email : "user@google",
    id : 123
} 

let user2 = user1

user2.email = "user@amazon"

console.log(user1);
console.log(user2);

