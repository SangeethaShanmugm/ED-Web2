var mname = "Avengers"
var type = "Action"
var category = "Hollywood"
var rating = 5

// An Avengers is an Action movie with rating as 5 and from category Hollywood

console.log("Actual text =>", "An Avengers is an action movie with rating as 5 and from category Hollywood")

//ecma => standard

//es5 => string literals 
var output = "An " + mname + " is an " + type + " movie with rating as " + rating + " and from category " + category

console.log("ES5=> ", output)


//es6 => template literals
// `` => backtick + interpolation ${} =>substitute the value


var output = `An ${mname} is an ${type} movie with rating as ${rating} and from category ${category}`

console.log("ES6=> ", output)