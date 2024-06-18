//array 
const myArr = [0,1,2,3,4,'aditya']
const myArr2 = new Array(5,4,3,2,1)

console.log(myArr[5])
console.log(myArr.length)

//Array Methods...
myArr.push('harsh')
console.log(myArr)
myArr.pop('harsh')
console.log(myArr)
myArr.unshift(5)  //push at index 0...
console.log(myArr)
myArr.shift()//removes the element at index 0...
console.log(myArr)
// myArr.shift()
// console.log(myArr)
console.log(myArr.includes(4))
console.log(myArr.indexOf('aditya'))
const newArr = myArr.join() //Binds and converts into string...
console.log(newArr)
console.log(typeof newArr)

//Slice, Splice...
 const myn1 = myArr.slice(1,3) //Gives the optput/portion till index-1 from the original array ...
 console.log(myn1)
 console.log(myArr)

 const myn2 = myArr.splice(1,3)// Gives and REMOVES the output/portion till given index from the original array...
 console.log(myn2)
 console.log(myArr)
 