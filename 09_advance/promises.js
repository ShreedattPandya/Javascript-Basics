const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){ //to process after after given interval if resolved/rejected
        console.log('Async task is complete');
        resolve(); //forms connection between fun(resolve) & .then
    },1000)
})

promiseOne.then(function(){   // then(fun) handles the response of a request
    console.log("Promise .then() called");
})

//Without using the Object/variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('This is async2');
    },1000)
    resolve();
}).then(function(){
    console.log("Async 2 resolved");
})

//getting object in resolve
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Shreedatt", email:"shree@gmail.com"});
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

//error handling with catch block
new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Shreedatt"})
        }
        else{
            reject("Error Occurred")
        }
    },1000)
})
.then(function(data){
    console.log(data);
    console.log( data.username);
    return  data.username
})
.catch(function(error){  //Chaining .then,catch,finally
    console.log(error);
})
.finally(function(){  //Executes irrespective of whether there was an error or not
    console.log("Finally Block Executed")
})   

//NOTE: subelements can't be accessed via variable/object
// EXample: promiseFour.then(function(user){
//          return user.username
//          })


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Async", password: "Awake"})
        } else {
            reject('ERROR: SOmething went wrong')
        }
    })
})

async function promiseSix(){  //async has no backup/error handling mechanism, use try-catch
    try {
        const response  = await promiseFive   //Wait until the promise is resolved
    } catch (error) {
        console.log(error);
    }
}
promiseSix()

//Fetch - Async/await
async function getData(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');  // Use await to fetch since it takes time/done after some time
        const data = await res.json(); //Convert data to json  format and wait till it gets completed
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}
getData()

//Fetch - then/catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then(response => {
    return response.json();
})
.then((getResponse) => {
    console.log(getResponse); // Provides the return value to above function
})
.catch((error)=> console.log(error));