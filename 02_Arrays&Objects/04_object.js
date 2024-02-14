
//const sing = new Object() //Singleton Object [Through Constructor]

const sing = {} //Non-Singleton [Through Litrals]
sing.id = "123abc"
sing.name = "Shreedatt"
sing.isLoggedIn = false

// console.log(sing);

const nested = {
    email : "nested@google.com",
    emp:{
        name:{
            firstname : "nestedBro"
        }
    }

}
// console.log(nested.emp.name);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// Merge Objects

//==>1 Unprofessional way - Distributed
 //console.log(obj1, obj2,obj4); 

//==>2 Object.assign
//const obj3 = Object.assign({},obj1,obj2,obj4) // Without "{}" target(filled) will be obj1, else {} will be filled
// console.log(obj3);

//==>3 Spread method
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

//==> Object in Array
const user = [
    {
        id:123,
        name:"a"
    },
    {
        id:456,
        name:"b"
    }
]
// console.log(user[1].name); //Second element of array + name key of object

//Use object keys or value to make individual array respectively
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1)); //[key:value]

console.log(sing.hasOwnProperty('name')); //Key is present?




