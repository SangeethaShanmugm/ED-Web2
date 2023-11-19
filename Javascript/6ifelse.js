//check one condition
// if(condition){
// }


//check two condition
// if(condition){
// }
// else{
// }


//check three condition
// if(condition){
// }
// else if(condition){
// }
// else{
// }


let a = 15
if (a % 2 == 0) {
    console.log(`Number ${a} is Even`)
} else {
    console.log(`Number ${a} is Odd`)
}
//Number 15 is Odd

let uname = "peter"
if (uname == "jack") { //"peter" == "jack"
    console.log(`Hi ${uname} you are admin`)
} else if (uname == "john") {//"peter" == "john"
    console.log(`Hi ${uname} you are super admin`)
} else {
    console.log(`Hi ${uname} you are unknown`)
}

let name = "Peter"
let role = "Admin1"

if (role == "Admin") { //"Admin1" ==  "Admin" ❌
    if (name == "Jack") { //"Peter" == "Jack"
        console.log(`Hi ${name} you are admin`)
    } else {
        console.log(`Hi ${name} you are unknown`)
    }
} else {
    if (name == "John") { // "Peter" == "John"
        console.log(`Hi ${name} you are super admin`)
    } else {
        console.log(`Hi ${name} you are unknown`)
    }
}

//ternary operator  (single line if else)

// condition ? if condition is true : if condition is false

var b = 10
b > 10 ? "Hii" : "Bye"
//10 > 10 => false => "Bye"

var b = 10
b == 10 ? b + 1 : b - 1
//10 == 10 => true => 10 + 1 => 11