//for, while, do while, for of, for in(objects)

//helps to iterate over the array as well as to print the value


var city = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']


// for(variable initialization, condition, increment/decrement)

for (let i = 0; i < city.length; i++) {
    console.log(city[i])
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}

var i = 0
while (i < 10) {
    console.log(i)
    i++
}


var i = 0
do {
    console.log(i)
    i++
} while (i < 10)


var city = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']


for (mycity of city) {
    console.log(mycity)
}


var city = ['Delhi', 'Mumbai', 'Helsinki', ["Red", "Yellow", "Pink"], 'London', 'Amsterdam', 'Boston', 'Venice']


for (mycity of city) {
    if (Array.isArray(mycity)) {
        for (myColor of mycity) {
            console.log(myColor)

        }
    } else {
        console.log(mycity)
    }


}


//forEach

var colors = ["Red", "Yellow", "Pink"]

// colors.forEach(myFunction)

// function myFunction(item) {
//     console.log(item)
//     return item
// }

colors.forEach(function myFunction(item) {
    console.log(item)
    return item
})

//for loop

var city = ['Delhi', 'Mumbai', 'Helsinki', ["Red", "Yellow", "Pink"], 'London', 'Amsterdam', 'Boston', 'Venice']


for (let i = 0; i < city.length; i++) {
    if (Array.isArray(city[i])) {
        for (let j = 0; j < city[i].length; j++) {
            console.log(city[i][j])
        }
    } else {
        console.log(city[i])
    }
}