//closure  => own scope + lexical scope


//hoisting + lexical scope
var price = 1000

function getPrice() {
    console.log("The old price", price)//The old price undefined
    var price = 500
    console.log("The new price", price)//The new price 500
}

getPrice()

//lexical scope

// 👨‍🦳 => grandfather   💰               =>  🏡(own scope)


// 👨  => father    💰  +  💰          =>  🚘(own scope) + 🏡(lexical scope) => father's closure


// 👨‍🦱 => child     💰 +  💰 +  💰      =>  💻(own scope) + 🚘(lexical scope) + 🏡(lexical scope) => child's closure

function outer() {
    var a = 20
    function inner() {
        console.log(a)
    }
    return inner
}
outer()() //achieved the closure 
// var close = outer()
// close()