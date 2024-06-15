//"Hello" + "World" = 'Hello World'

const name = "aditya"
const repoCount = 15
//console.log(name + repoCount + " Repoitories")

console.log(`Hello my name is ${name} and my repo is ${repoCount} `) //It is known as Sting Interpolation...

const gameName = new String('aditya-h') //It changes to an Object of KEY-VALUE paris...
console.log(gameName[0])
console.log(gameName.__proto__)
//In prototype, many functions area vailable to use... LIKE...

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

//SUBSTRING can use index values...
const newString = gameName.substring(0,4)
console.log(newString)

//SLICE can use negative index values...
const anotherString = gameName.slice(-7,4)
console.log(anotherString)

//TRIM removes the extra starting and end white-space of a string...
const newStringOne = "  adity "
console.log(newStringOne)
console.log(newStringOne.trim())

//REPLACE change the characters to the given character by the user...
const url = "https://aditya.com/aditya%20harsh"


//Some more Functions of String...
console.log(url.replace('%20','-'))

console.log(url.includes('aditya'))

console.log(gameName.split('-'))