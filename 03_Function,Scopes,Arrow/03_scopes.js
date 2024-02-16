//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
} 
//console.log(a);
// console.log(b);
// console.log(c);


if(true){
    const username = "anyName"
    if(username === "anyName"){
        const website = "youTube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

console.log(addone(5)) //Function without expression(INSIDE VARIBLE) can be called before declaration
function addone(num){
    return num + 1
}

addTwo(5) //expression(function inside variable) can't be called before declaration
const addTwo = function(num){
    return num +2
}

// NOTE: function initialization can be done before it's declaration if its not inside variable(expression). This is Hoisting.  