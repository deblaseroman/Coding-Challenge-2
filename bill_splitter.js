//"Create and test calculateTip function"
function calculateTip(bill){

//Initial logic for calculating tip using ternary operator
let bill = 100;
var tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.2;
    }

    let total = (bill + tip);

    //"Implement and populate arrays for bills, tips, and totals"
    let bills = [275, 40, 430];
    const tips = bills.map(bill => calculateTip(bill));
//Output Details
console.log ("The bill was:", bill,"the tip was:", tip,"and the total value was:", total)

}