// run the file on the terminal $node intro_node.js
const x = 1         //const define a constant value can not be changed
let y = 5

console.log(x,y)
y += 10
console.log(x,y)
y = 'sometext'      //type of data can be change
console.log(x,y)
//*********
//**Arrays*
//*********

const t = [1,-1,3]  //note here how the const array is modified by using push
t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value => {  //iterating the array
  console.log(value)
})

const t2 = t.concat(5)  //in React it is recomended to use concat which creates a new array insted
console.log(t)
console.log(t2)

const m1 = t.map(value => value*2)  //usning map method and multiple the array

const m2 = t.map(value => '<li>'+ value + '</li>')  //the array of integers now contains strings of HTML
console.log(m2)

const [first, second, ...rest] = t
console.log(first, second)
console.log(rest)     //the remaining integers are in a array variable name rest

//****************
//***Objects******
//****************

//object literals are list of propeties inside braces
//values of the propeties can be: integers, strings, arrays, objects
const object1 = {
  name: 'Luis',
  age: 35,
  education: 'PHD',
}

console.log( object1)

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov'
  },
  grades:[2, 3, 4,6],
  department: 'Stanford University'
}


const fieldName = 'age'
console.log( object1[fieldName])    //prints 35

//adding propeties to objects

object1.address = 'Chicago'
object1['secret number'] = 12345    //note here secret number is not valid propety a using empty space and uses ''

console.log( object1)


//*************
//**Functions ***
//*************

const sum = (p1,p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2 
}


const result = sum(1,3)
  console.log(result)

const square = p => {     //with one parameter you can eliminate baces
  console.log(p)
  return p * p 
}

const result2 = square(4)
console.log(result2)
const square2 = p => p*p   //same shorter function it can be useful whe using arrays


const result3 = square2(4)
console.log(result3)

const tSquared = t.map(p => p*p)
console.log(tSquared)

//there are 2 more ways beside the arrow method to define a function 
//1. function declaration 
function product(a, b) {
  return a * b
}

const result4 = product(2, 6)
console.log(result4)

//function expression 
const average = function(a, b) {
  return (a + b) / 2
}

const result5 = average(2, 5)
console.log(result5)

