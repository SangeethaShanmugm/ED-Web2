// var  => we can redeclare and reassign ✅  => global/function scope
// let => we cannot redeclare but can reassign ✅
// const  => we can neither redeclare nor reassign  ✅


var a = 10
// var a  => declaration
// a = 10 => assignment

// redeclare
var a = 10 // a=> 10
var a = 20 // a=> 20
console.log(a)//20

//reassign

var a = 10
a = 20
console.log(a)//20

//let => redeclare
// let b = 20
// let b = 30
// console.log(b)//Uncaught SyntaxError: Identifier 'b' has already been declared

//let - reassign 

let b = 10
b = 20
console.log(b)//20

//const- redeclare

// const c = 10
// const c = 20
// console.log(c)//Uncaught SyntaxError: Identifier 'c' has already been declared


//const- reassign 

// const c = 10
// c = 20
// console.log(c)//Uncaught TypeError: Assignment to constant variable.


//hoisting  => behavior in JS
console.log(x)//undefined
var x = 10
console.log(x)//10


// console.log(x)//Uncaught ReferenceError: Cannot access 'x' before initialization
// let x = 10
// console.log(x)


//scope => lifetime of a variable
//block => {}
{
    let y1 = 10
    var y2 = 20
    console.log("y1", y1)
}
// console.log(y1)// Uncaught ReferenceError: y1 is not defined

console.log(y2)//20

//whether var will leak outside of block? yes