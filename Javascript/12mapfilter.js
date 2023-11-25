// Map
// used to iterate over the array
// It always return the same length of output array as input array
// It is basically used to apply logics(add, sub, mul, div)

var a = [1, 56, 8, 2, 34]

var b = a.map(data => {
    return data * 2
})
console.log(b)//[2, 112, 16, 4, 68]

var a = ["Delhi", "Mumbai", "London", "Paris"]

var b = a.map((item) => {
    return `<p>${item}</p>`
})

console.log(b)//['<p>Delhi</p>', '<p>Mumbai</p>', '<p>London</p>', '<p>Paris</p>']


const people = [
    {
        name: "John",
        age: 30
    },
    {
        name: "Jack",
        age: 20
    },
    {
        name: "Peter",
        age: 18
    },
]
var result = people.map((data) => data.name)

console.log(result)//['John', 'Jack', 'Peter']


var movieList = [
    {
        name: "Avengers",
        rating: 5,
        type: "Action"
    },
    {
        name: "Harry Potter",
        rating: 6,
        type: "Action"
    },
    {
        name: "Frozen",
        rating: 8,
        type: "Fantasy"
    }
]

var result = movieList.map((item) => item.type)
console.log(result)// ['Action', 'Action', 'Fantasy']


var filterData = movieList.filter((item) => item.type == "Action")
console.log(filterData)
//filter
// its is used to filter out values
// it may or may not return the same length of output array as input array
// only return those data which output or condition is true

var a = [1, 5, 8, 12, 35, 20]

var b = a.filter((data) => {
    return data > 20
})

console.log(b)//[35]

var data = ["hey", "hello", "hi", "hey"]

var b = data.filter((content) => {
    return content == "hey"
})

console.log(b)//['hey', 'hey']