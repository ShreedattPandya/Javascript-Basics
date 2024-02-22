//Using multiple methods for single variable
const newArr1=[1,2,3,4,5]
const newNum1 = newArr1.map((num) => num * 10).map((num) => num-2).filter((num) => num <= 40)
// console.log(newNum1);


//Reduce Method --> performs like loop with accumulator as initial value, current value, 0 (initial value given to acc)
// const newArr1=[1,2,3,4,5]
const red = newArr1.reduce((accumulator, currVal) => accumulator + currVal, 0) 
// console.log(red);


// OR SAME WRITTEN IN FUNCTION
const water =[
    {
    name:"Bisleri",
    price:20,
    },
    {
    name:"Brand",
    price:30,
    },
    {
    name:"Kinley",
    price:10,
    }
]
const yellow = water.reduce( function(acc, curval){
    // console.log(`Acc: ${acc} , current value: ${curval.price}`);
    return curval.price > 10 ? acc+curval.price : acc;
}, 0)
console.log(yellow);