const balance = new Number(1000.123)
// console.log(balance);

// console.log(balance.toString().length); Convert to string to use more methods of string
// console.log(balance.toFixed(2)); // numbers after decimal
// console.log(balance.toPrecision(3)); //total number of digits
console.log(balance.toLocaleString('en-IN')); //Coma in big number


// ==> Math (function)Object 

// console.log((Math).abs(-4)); //Mod
// console.log(Math.round(3.8)); //Roundoff
// console.log(Math.ceil(4.2)); //roundoff to next top
// console.log(Math.floor(4.9)); // to base
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


// ==> Random Dice Output

console.log(Math.ceil(Math.random() * 6));
// *6 : from (0.1,1) to (0.6,6)
// Math.ceil: roundsoff to top next (1,6)