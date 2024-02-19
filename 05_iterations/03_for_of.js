const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const asString = " Tata Consultancy"

for (const iterator of asString) {
    // console.log(iterator);
}

// Map object -remembers insertion order
//            -non repeating

const map = new Map()
map.set('IN','India')
map.set('WB','WEB')
map.set('MV','Marvel')


// console.log(map);  //Prints in object 

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

// NOTE: for-of loop won't work for object, use for-in

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }