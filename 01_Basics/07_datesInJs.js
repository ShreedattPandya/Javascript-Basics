// Date

 let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);                  //Date is object


//To input desired date

let myCreatedDate = new Date(2023,0,23,5,3,5)   //Used "coma" hence array-(Jan is 0)
// let myCreatedDate = new Date("2023-1-23")    //Used hypen to define date-(Jan is 1)

// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.getTime());        //Milisec from given date
// console.log(myCreatedDate.getSeconds());          //To convert in sec

let myTimeStamp = Date.now()                    //Gives milisec from 1970
// console.log(myTimeStamp/1000);               //To convert in sec

// myCreatedDate.toLocaleString('default',{
//     weekday: "narrow"
// })


// TO MAKE A QUIZ (TIME-INTIMIDATED) WINNER

let p1 = new Date(2003,10,8,23,23,23)
let p2 = new Date(2003,10,8,22,22,22)
    

if(p1.getTime() > p2.getTime()){
    console.log("P1 Date is WINNER");
}
else if(p1.getTime() < p2.getTime()){
    console.log("P2 is WINNER");
}
else{
    console.log("Both are equal.");
}

