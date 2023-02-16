"use strict"

// Wir lesen die "data.json"-Datei ein!
//
// ACHTUNG: fs.readFileSync() ist i.d.R. ein Anti-Pattern und 
//          ziemlich langsam. Darauf gehen wir aber noch ein :)
/* const fs = require("fs")
const data = fs.readFileSync("data.json", {encoding: "utf-8"})

console.log("data:", data)
console.log("typeof data:", typeof data)

const dataObj = JSON.parse(data)
console.log(dataObj[0])
 */


const fs = require("fs")
const data = fs.readFileSync("data.json", {encoding:"utf-8"})

console.log("data", data)
console.log("data of type", typeof data)     // string

console.log("data[0]", data[0])    // [

const dataObj = JSON.parse(data)    // to Object
console.log(dataObj[0]);            // { firstname: 'Max', age: 21, enrolled: true }