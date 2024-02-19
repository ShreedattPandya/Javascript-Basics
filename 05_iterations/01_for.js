const myArr = ["Bisleri", "Coco", "Pepsi"]
for (let index = 0; index < myArr.length; index++) {
    // console.log(`This index is ${index} and Array Index ${myArr[index]}`);
    }

//Nested for
for (let i = 0; i < 6; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
    line += "*";
    }
    console.log(line); //Using console to print directly makes it in next line, use variable instead
}

//break 
for (let index = 0; index < 10; index++) {
    if(index == 4){
        console.log(`Found break at 4`);
        break
    }
    // console.log(`Value of i is ${index}`);
}

//continue
for (let index = 0; index < 10; index++) {
    if(index == 4){
        console.log(`Found continue at 4 and skiped instance`);
        continue
    }
    // console.log(`Value of i is ${index}`);
}