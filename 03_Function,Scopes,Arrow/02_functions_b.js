//Adding undefined number of parameters values
function calculateCartPrice(...num){  //(val1, val2, ...num1)
    return num
}
// console.log(calculateCartPrice(10,20,30));

// Funtions for Object
const user = {
    name : "Shreedatt",
    price : 199
}

function objectFunction(anyObject){
    console.log(`Username is ${anyObject.name} and price ${anyObject.price}`)
}

// objectFunction(user);
// objectFunction({
//     name: "sam",
//     price: 399
// })

const Arr = [200,400,600,800]

//Function for Array.
function arrayFunction(anyArray){
    // return anyArray[2]   
    return anyArray.slice(0,2)
}
//console.log(arrayFunction(Arr));
console.log(arrayFunction([100,200,300]));