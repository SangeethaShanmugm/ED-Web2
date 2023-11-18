// string => "aaa" "Hii" 'cool' "46765"  "true"
// Number  => 344 1 5366 435435.6467
//Boolean  -> true, false


var a = "Hii"
var b = 10
var c = true

console.log("Hello")

console.log(typeof a)//string
console.log(typeof b)//number
console.log(typeof c)//boolean

var d = "20"
console.log(typeof d)//string

var a = 10
var b = 20
console.log(a + b)// 10 + 20  => 30

5 % 2//1
2 % 4//2
3 % 4//3

var a = "Hii"
var b = "Javascript"

console.log(a + b) // concat
//"Hii" + "Javascript" => "HiiJavascript"
console.log(a - b)//NaN => Not a Number
console.log(a * b)//NaN => Not a Number
console.log(a / b)//NaN => Not a Number


// string + string  =  string
// string + number  = string
// number + string  = string
// number + number  = number

"10" + 20 + 30
"1020" + 30
"102030"

10 + "20" + 30
"102030"

10 + 20 + "30"
30 + "30"
"3030"

"10" + 20 + 30 - 1
"1020" + 29
"102029"

"10a" - 1//NaN


//true  => 1
//false  => 0

true + true
//1 + 1 => 2

true + false
//1 + 0 => 1


false + false
// 0 + 0  => 0


10 + true
//10 + 1 => 11

console.log("Hii" + true)
"Hiitrue"


"true" + "true"
"truetrue"


"true" - "true" //NaN

var a = "30"
var b = "30"
console.log(a + b)
//convert string to int

console.log(parseInt(a) + parseInt(b))// 30  +  30   => 60 ✅
// "30" => 30      

var a = "Hii"
console.log(parseInt(a))//Nan ❌

var a = "10.34"
var b = "20.11"
console.log(parseInt(a) + parseInt(b))//30
console.log(parseFloat(a) + parseFloat(b))//30.45
console.log(Number(a) + Number(b))//30.45
console.log(+a + +b)//30.45
