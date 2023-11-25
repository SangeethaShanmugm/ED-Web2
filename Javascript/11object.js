var a = {} //object 
var a = [] //array

//object = {key: value} pairs

var movie = {
    name: "Avengers",
    rating: 5,
    type: "Action"
}

//dot notation => objectName.key
console.log(movie.name)
console.log(movie.type)

//bracket notation  => ["key"]

console.log(movie["name"])
console.log(movie["rating"])

for (key in movie) {
    console.log(key)
}


for (key in movie) {
    console.log(movie[key])
}

console.log(movie)

const student = {
    name: "John",
    age: 20,
    marks: {
        science: 90,
        math: 80
    }
}
console.log(student)
console.log(student.name)
console.log(student.marks)
console.log(student.marks.science)



// Array of objects
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
console.log(movieList)
//0: {name: 'Avengers', rating: 5, type: 'Action'}
//1: {name: 'Harry Potter', rating: 6, type: 'Action'}
//2: {name: 'Frozen', rating: 8, type: 'Fantasy'}

console.log(movieList[0])//{name: 'Avengers', rating: 5, type: 'Action'}
console.log(movieList[0].name)