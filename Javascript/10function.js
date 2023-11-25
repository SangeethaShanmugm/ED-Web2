var a = 10
var b = 20
console.log(a + b)

var a = 100
var b = 50
console.log(a + b)

//function declaration/ function definition
function sum(a, b) {//parameters
    return a + b
}

console.log(sum(10, 5))//function call
console.log(sum(100, 200))//arguments

function isEvenOdd(num) {
    let out;
    if (num % 2 == 0) {
        out = `Number ${num} is Even`
    } else {
        out = `Number ${num} is Odd`
    }
    return out

}

console.log(isEvenOdd(30))
console.log(isEvenOdd(13))

//es6 => arrow function 

let isEvenOdd1 = (num) => {
    let out;
    if (num % 2 == 0) {
        out = `Number ${num} is Even`
    } else {
        out = `Number ${num} is Odd`
    }
    return out

}


const sum1 = (a, b) => a + b
console.log(sum1(5, 5))

let age = 50
let greet = age > 20 ? () => console.log("Adult") : () => console.log("Teenage")

greet()