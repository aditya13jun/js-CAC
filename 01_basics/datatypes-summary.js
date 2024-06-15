//Primitive 

//7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
//const userEmail = Undefined

const id = Symbol('123')
const anotherId = Symbol('123')
//Symbol() gives unique value

const bigNum = 314324234232523n

//Reference (Non Primitive)

//Arrays, Objects, Functions

const heros = ["Spiderman", "Superman", "Batman"]

let myObj = {
    name:"adi",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction); //typeof() is used to find the datatype 