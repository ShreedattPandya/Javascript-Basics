const tech = ["js", "java","cpp"]

tech.forEach(function (val){  //Through function(){}
    // console.log(val);
})

tech.forEach((itemss) => { // through arrow function
    // console.log(itemss);
})

//Make print function seperately
function printMe(item){
    // console.log(item);
}
tech.forEach(printMe) //Dont call its function -()

// item, index, arr ---remember the sequence
tech.forEach((a, b, c) => {
    //  console.log(a,b,c);

})

Object in Array

const drink = [
    {
        item : "Bisleri",
        price: 10
    },
    {
        item : "Cocoa",
        price: 20
    },
    {
        item : "Pepsi",
        price: 30
    }
]

drink.forEach((item) => {
    console.log(item.item);
})


