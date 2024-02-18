const isUserloggedIn = true
const temperature = 30

if (temperature > 31) {
    console.log("greater than 31");
}
else if(temperature < 31){
    console.log("less than 31");
}
else{
    console.log("equal to 31");
}

const score = 200   
if (score > 100) {
    var power = "fly"  // VAR is globle variable and doesnt gets limited in block
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);

//Without parenthesis
const bal = 100
if(bal > 200) console.log("big") , console.log("less");;

// And - &&
//Or - || 
// Not Equals - !=
// Not Equal with datatype - !==