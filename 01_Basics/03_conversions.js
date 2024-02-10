console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);// Avoid computing with different datatypes,even though js bydefault converts here ("2") in number but also "3abc" is also converted in number by js which is incorrect

 console.log(null == 0);
 console.log(null > 0);
 console.log(null >= 0);
//The comparisons (only assigns null as 0) and equality operator works differently resulting only the last one to work true

console.log(10 === 10);//Check the datatype too