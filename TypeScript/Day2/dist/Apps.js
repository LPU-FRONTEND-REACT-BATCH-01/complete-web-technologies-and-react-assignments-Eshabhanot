"use strict";
function payment(amount, modeOfPayment) {
    if (modeOfPayment === "UPI") {
        amount -= amount * 0.10;
        return amount;
    }
    else if (modeOfPayment === "Card") {
        amount -= amount * 0.05;
        return amount;
    }
    else if (modeOfPayment === "COD") {
        return amount + 50;
    }
    else if (modeOfPayment === "Cash") {
        return `Cash amount need to be paid is ${amount}`;
    }
    else {
        return amount;
    }
}
let a = payment(10000, "UPI");
let b = payment(10000, "Card");
let c = payment(10000, "COD");
let d = payment(10000, "Cash");
let e = payment(10000, "Netbanking");
console.log("UPI: ", a);
console.log("Card: ", b);
console.log("COD: ", c);
console.log("Cash", d);
console.log("Netbanking", e);
