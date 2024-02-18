function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(5,7)
console.log("Result: ", result);

function loginUserMessage(username){ // OR username = "Ram".
    if(!username){ //username === undefined
        console.log("PLease enter a username");
        return 
    }
    return `${username} just loggedin`
    
}
console.log(loginUserMessage(""));