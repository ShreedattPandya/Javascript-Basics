const myArr = [0, 1, 3, 2, 4, 5]
const tech = ["html", "css","javascript"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[3]);


// ==> Array methods

// myArr.push(6) Insert element at last
// myArr.push(7)
// myArr.pop() Remove last element

// myArr.unshift(9) Add element at start (Bad SEO-shifts all)
// myArr.shift() Remove element

// console.log(myArr.includes(9)); boolean check
// console.log(myArr.indexOf(3)); Gives index

const newArr = myArr.join() //Makes string and use comas

console.log(myArr);
console.log(typeof newArr); //String


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);
