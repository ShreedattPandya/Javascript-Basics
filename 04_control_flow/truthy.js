const userEmail = []

if (userEmail.length === 0) {
        console.log("Array is empty");
    }

if (userEmail) {
    console.log("Got user email");
}

//==> // falsy values
      // false, 0, -0, BigInt 0n, "", null, undefined, NaN

      //truthy values
      // "0", 'false', " ", [], {}, function(){}


//==> //Nullish Coalesing Operator (??) : null undefined
      //Used to avoid null or undefined outputs

    let val1;
    // val1 = 5 ?? 10
    // val1 = null ?? 10
    // val1 = undefined ?? 15
    val1 = null ?? 10 ?? 20
    console.log(val1);


//==> //Ternary operator 
      // condition ? true : false

const pack = 10
pack >=11 ? console.log(`Pack price is 20`) : console.log(`Pack price is 10`);