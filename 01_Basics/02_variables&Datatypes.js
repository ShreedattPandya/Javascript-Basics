const id = 123 //const can't be changed
let myname = "Shreedatt" 
var city = "Vadodara"
country = "India"
console.table([id,myname,city,country])


// Datatypes

console.log(typeof id);
console.log(typeof myname);

let exit = null //Typeof is Object (Somesay it mistake)
let tp = undefined
let state = ""
console.log(typeof exit);
console.log(typeof tp);
console.log(typeof state);


// Datatype Conversions

let pass = "123abc";
let valueInPass = Number(pass);

console.log("Thw alphanumeric value converts to number but the value it stores is : " + valueInPass);

console.log("But it says it converted to : " + typeof valueInPass );

//2
let isLoggedIn = "Shreedatt"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
