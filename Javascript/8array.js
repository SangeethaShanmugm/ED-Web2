// Array is a collection of homogenious and heterogenious data types

//homogenious - same data type

let a = ["Hii", "Hello", "hii", "fhkdsfhdskg", `hey`]//Array of strings
let b = [1, 4, 657, 23]//Array of numbers
let c = [true, false, false, false, true]//Array of boolean

//heterogenious - different data type

let d = ["Hii", 455, 3, true, "hey"]

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]
//["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]
//   0        1           2          3          4    => index/position

console.log(city[0])//Delhi
console.log(city[3])//London

console.log(city[4])//Amsterdam
console.log(city.length)//5

//push => add at the end of array

var city = ["Delhi", "Mumbai", "Helsinki", "London", "Amsterdam"]
console.log(city)

city.push("Boston")
console.log(city)//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston']

console.log(city.push("Venice"))//7
console.log(city)//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston','Venice']

//pop => remove last element in an array 

var city = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']

console.log(city.pop())//Venice
console.log(city)// ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston']

console.log(city.pop())// 'Boston'
console.log(city)//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']

//unshift => add element to start of array 

var city = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']
console.log(city.unshift("Dubai"))//6
console.log(city)//['Dubai', 'Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam']

var train = ["🚃", "🚃", "🚃"]
console.log(train.unshift("🚂", "🔗")) //5
console.log(train) //['🚂', '🔗', '🚃', '🚃', '🚃']


//shift => remove element from start of an array 
console.log(train.shift())//🚂
console.log(train)//['🔗', '🚃', '🚃', '🚃']

var farm = ["🐐", "🐷", "🐎", "🐮", "🐔", "🐃"]


console.log(farm.shift())//🐐
console.log(farm)//['🐷', '🐎', '🐮', '🐔', '🐃']

console.log(farm.push("🐠"))//6
console.log(farm)//['🐷', '🐎', '🐮', '🐔', '🐃', '🐠']


//slice => slice(startIndex, endIndex)

var pizza = ["🍕", "🍕", "🍕", "🍕"]
// ["🍕", "🍕", "🍕", "🍕"]
//     0     1     2      3

console.log(pizza.slice(0))//["🍕", "🍕", "🍕", "🍕"]
console.log(pizza.slice(2, 3))//['🍕']
console.log(pizza.slice(1))//"🍕", "🍕", "🍕"
console.log(pizza.slice(1, 3))//"🍕", "🍕",


var farm = ["🐐", "🐷", "🐎", "🐮", "🐔", "🐃"]
//["🐐", "🐷", "🐎", "🐮", "🐔", "🐃"]
//   0      1     2     3      4     5
//  -6     -5    -4    -3     -2    -1

console.log(farm.slice(2))//['🐎', '🐮', '🐔', '🐃']
console.log(farm.slice(1, 4))//['🐷', '🐎', '🐮']

console.log(farm.slice(-4, -1))// ['🐎', '🐮', '🐔']
console.log(farm.slice(-4, 4))// ['🐎', '🐮']

//splice => splice(startIndex, DeleteCount, values)


var city = ['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
//['Delhi', 'Mumbai', 'Helsinki', 'London', 'Amsterdam', 'Boston', 'Venice']
//     0     1            2           3         4            5        6

console.log(city.splice(2, 2))// ['Helsinki', 'London']
console.log(city)//['Delhi', 'Mumbai', 'Amsterdam', 'Boston', 'Venice']

console.log(city.splice(3, 0))//[]
console.log(city)//['Delhi', 'Mumbai', 'Amsterdam', 'Boston', 'Venice']

console.log(city.splice(3, 0, "Pune", "Paris"))//[]
console.log(city)//['Delhi', 'Mumbai', 'Amsterdam', "Pune", "Paris",'Boston', 'Venice']

console.log(city.splice(1, 1, "Innsburg", "France"))//'Mumbai'
console.log(city)//['Delhi',"Innsburg", "France", 'Amsterdam', "Pune", "Paris",'Boston', 'Venice']