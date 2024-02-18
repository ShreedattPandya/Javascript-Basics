const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //Nested array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// ==> Concat
const allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros);


// ==> Spread Operator
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);


// ==>Finite Nested  - flat(infinity)
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) //infinity is depth of array
// console.log(real_another_array);



// console.log(Array.isArray("CheckIfArray")) //Checks if array
// console.log(Array.from("ConvertToArray"))  //Converts to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//initialize array.