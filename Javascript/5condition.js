// = => Assignment
// == => compare data/value
// === =>compare data/value and datatype


var a = 5
var b = "5"
var c = 20

console.log(a == b)//5 == "5" => true
console.log(a === b) //5 == "5"=> true + false  => false

var a = "hii"
var b = "Hii"

console.log(a == b)//"hii" == "Hii" => false
console.log(a === b)//"hii" == "Hii" => false + true => false


var a = true
var b = 1

console.log(a == b)// true == 1 => 1 == 1 => true
console.log(a === b)// true == 1 => 1 == 1 => true + false => false

var a = 10
var b = 20
a > b //10 > 20  => false
b > a//20 > 10 => true

// !=  => negation

a != b // 10 != 20 => true

// true = true
// false = false
// !true = false
// !false = true

a !== b // 10 !== 20 => 10 == 20 => false => !false => true

// a !=== b ❌ //Uncaught SyntaxError: Unexpected token '=' 

var a = true
!a // !true => false

var a = -1
console.log(a)
console.log(!a)//!true => false

//truthy  => Any number except 0, +ve, -ve, true, any string
//falsy => 0, false, null, undefined

var a = "Hii"
console.log(!a)//!true => false

console.log(typeof null)//object
console.log(typeof undefined)//undefined

var a = null
console.log(typeof a)//object

var x = null;
console.log(x)//null;

var z;
console.log(z)//undefined