let myDate = new Date()
console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

let myCreatedDate = new Date(2024, 5, 13)
console.log(myCreatedDate.toDateString())
let myCreatedDate2 = new Date("06-13-2024")
console.log(myCreatedDate2.toLocaleString())

//---Time Stamp---

let myTimeStamp = Date.now()
console.log(myTimeStamp)//Milliseconds...
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)) //In Seconds...

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())
//`${newDte.getDate()} and time is...`

console.log(newDate.toLocaleString())
console.log(newDate.toLocaleString('default',{ weekday:"long"}))