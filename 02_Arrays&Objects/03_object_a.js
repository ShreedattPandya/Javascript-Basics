//Object - 1)Through Constructor
//              -> Singleton (Single copy of Data)
//              Object.create
//         2)Through Literals

const mySym = Symbol("key1") //

const ClientData = {
    name : "Shreedatt",
    "Full Name" : "Shreedatt Pandya",
    age : 20,
    isLoggedIn : false,
    [mySym] : "key2", // Use square brackets for Symbol datatype
    lastLoginDays : ["Tuesday", "Friday"] //arrat]y
}

console.log(ClientData.age);
// console.log(ClientData["Full Name"]); //Used when spaces in key
// console.log([mySym]);

// Update Key Value in Object
ClientData.age = 21
console.log(ClientData.age);

//Freeze Object
// Object.freeze(ClientData)
ClientData.age = 25
console.log(ClientData.age); //Didn't change

//initializing object as a function
ClientData.greeting = function(){ 
    console.log(`Hello JS user, ${this.name}`); //"this" is used to refer the instance object
}
console.log(ClientData.greeting()); //Function call
console.log(ClientData.greeting); //Gives its reference, i.e. [Function].   


