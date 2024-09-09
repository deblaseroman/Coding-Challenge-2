

//Initial logic for calculating tip using ternary operator
let bill = 222;
let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.2;
    }

    let total = (bill + tip);
//Output Details
console.log ("The bill was:", bill,"the tip was:", tip,"and the total value was:", total)
