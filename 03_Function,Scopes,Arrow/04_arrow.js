const user = {
    username : "Bisleri",
    price : 20,

    welcomeMessage : function(){
        console.log(`Hey, your username is ${this.username}`) // "THIS" is pointing to itself's block
        console.log(this);
    }
}
// user.welcomeMessage();

// console.log(this); //for browser it returns wondow object; here{}

function chai(){
    // let username = "chai"
    console.log(this.username);
}
// chai()  // This function doesn't work in functions


//Arrow Function 

//With parenthesis - return mandatory
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(5,4));

//Without parenthesis - () required; not return
const addThree = () => ({name:"bisleri"})  //Object in Arrow
console.log(addThree());
