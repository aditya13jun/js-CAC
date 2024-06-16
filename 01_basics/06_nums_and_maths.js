const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length) //Convert into String...
console.log(balance.toFixed(2)) //Define a Fixed decimal point...

const otherNumber = 123.8967

console.log(otherNumber.toPrecision(4)) //Give the Approx Value...

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) //Make the number into different system (inter. or indian)

//-----------MATHS-----------

console.log(Math)
console.log(Math.abs(-4)) //Neg(-) to Pos(+)
console.log(Math.round(4.3))
console.log(Math.floor(4.3))
console.log(Math.ceil(4.3))
console.log(Math.min(4,3,2,1))
console.log(Math.max(4,3,2,1))
//Round-off...

console.log(Math.random())//Value between 0-1...
console.log(Math.random()*10)
console.log((Math.random()*10) + 1) //Always > 1...

 const min = 10
 const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min) //Formula for Ranged Random value...

 console.log((Math.floor(Math.random() * 8) +1))//Example...