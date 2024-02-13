const myArr = [0, 1, 3, 2, 4, 5]
const tech = ["html", "css","javascript"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2);
// console.log(typeof myArr2);


// ==> Array methods

// myArr.push(6) Insert element at last
// myArr.push(7)
// myArr.pop() Remove last element

// myArr.unshift(9) Add element at start (Bad SEO-shifts all)
// myArr.shift() Remove element

// console.log(myArr.includes(9)); boolean check
// console.log(myArr.indexOf(3)); Gives index

const newArr = myArr.join() //Makes string seperated by comas
console.log(newArr);
console.log(typeof newArr); //String


// ==> Slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //Excludes last element & works on call by value(copy)
console.log(myn1);

console.log("B ", myArr);//Hence array is not changed 


const myn2 = myArr.splice(1, 3) //Includes last element & works on call by reference

console.log("C ", myArr); //Splice changed(removed) element from original
console.log(myn2);
